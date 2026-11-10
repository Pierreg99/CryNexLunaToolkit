import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, extname, resolve, sep } from 'node:path';
import { chromium, devices } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp',
  '.png': 'image/png', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json' };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const path = resolve(root, '.' + pathname, pathname.endsWith('/') ? 'index.html' : '');
    if (path !== root && !path.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    const data = await readFile(path);
    res.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404).end('Not found');
  }
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await chromium.launch({ headless: true });
  for (const [name, options] of [
    ['desktop', { viewport: { width: 1440, height: 900 } }],
    ['android-emulated', devices['Pixel 7']],
  ]) {
    const context = await browser.newContext(options);
    const page = await context.newPage();
    const failures = [];
    page.on('pageerror', error => failures.push(error.message));
    page.on('request', request => {
      if (!request.url().startsWith(base + '/')) failures.push('Unexpected request: ' + request.url());
    });
    const response = await page.goto(base + '/', { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200, `${name}: page status`);
    assert.equal(await page.locator('h1').count(), 1, `${name}: one primary heading`);
    assert.equal(await page.locator('button#themeToggle').count(), 1, `${name}: theme control exists`);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true,
      `${name}: no horizontal overflow`);
    await page.locator('#themeToggle').click();
    assert.notEqual(await page.locator('html').getAttribute('data-theme'), 'dark',
      `${name}: theme control works`);
    const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    const serious = audit.violations.filter(issue => ['critical', 'serious'].includes(issue.impact));
    assert.deepEqual(serious.map(item => `${item.id}: ${item.nodes.length} nodes`), [],
      `${name}: serious/critical accessibility issues`);
    assert.deepEqual(failures, [], `${name}: no runtime errors or external network requests`);
    if (name === 'desktop') {
      await page.reload();
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(() => document.activeElement?.classList.contains('skip-link')),
        true, 'keyboard: first focus target is skip link');
    }
    await context.close();
    console.log(`PASS: ${name} structure, interactivity, responsive behavior, accessibility and network checks`);
  }
} finally {
  if (browser) await browser.close();
  await new Promise(done => server.close(done));
}
