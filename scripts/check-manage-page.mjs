import { existsSync, readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const routePath = new URL('../app/manage/page.tsx', import.meta.url);
const headerPath = new URL('../app/components/SiteHeader.tsx', import.meta.url);
const cssPath = new URL('../app/globals.css', import.meta.url);
const mapAsset = new URL('../public/images/manage/control-tower-map.png', import.meta.url);
const heroAsset = new URL('../public/images/manage/operations-hero.png', import.meta.url);
const panoramaAsset = new URL('../public/images/manage/hero-panorama.png', import.meta.url);
const inventoryAssets = [
  '../public/images/manage/inventory-electronics.png',
  '../public/images/manage/inventory-automation.png',
  '../public/images/manage/inventory-auto-parts.png',
  '../public/images/manage/inventory-cold-chain.png'
].map((asset) => new URL(asset, import.meta.url));

assert.ok(existsSync(routePath), 'manage route must exist at app/manage/page.tsx');
assert.ok(existsSync(mapAsset), 'control tower map image asset must exist');
assert.ok(existsSync(heroAsset), 'operations hero image asset must exist');
assert.ok(existsSync(panoramaAsset), 'rich logistics panorama hero asset must exist');
for (const asset of inventoryAssets) {
  assert.ok(existsSync(asset), `inventory thumbnail asset must exist: ${asset.pathname}`);
}

const route = readFileSync(routePath, 'utf8');
const header = readFileSync(headerPath, 'utf8');
const css = readFileSync(cssPath, 'utf8');

assert.match(header, /activePage\?: PageKey/, 'SiteHeader activePage should be optional so manage can keep the current navbar without a wrong active public page');
assert.match(route, /SiteHeader[\s\S]*locale="th"/, 'manage page should reuse the current Thai SiteHeader');
assert.match(route, /ศูนย์จัดการขนส่ง NextExpress/, 'manage page should render the Thai dashboard title');
assert.match(route, /Logistics Control Tower/, 'manage page should include English control tower subtitle');
assert.match(route, /control-tower-map\.png/, 'manage page should use the generated map asset');
assert.match(route, /hero-panorama\.png|manage-hero-panorama/, 'manage page should use the rich panorama hero treatment');
assert.match(route, /inventory-electronics\.png/, 'manage page should use inventory thumbnails');
assert.match(route, /Active Shipments/, 'manage page should include KPI cards');
assert.match(route, /Recent Shipments/, 'manage page should include a recent shipments table');
assert.match(route, /Warehouse & Fulfillment/, 'manage page should include the warehouse section');
assert.match(route, /Carrier Performance/, 'manage page should include analytics panels');
assert.match(css, /\.manage-page/, 'manage page CSS namespace should exist');
assert.match(css, /@media \(max-width: 760px\)[\s\S]*\.manage-/, 'manage page should include mobile responsive CSS');

console.log('manage page regression checks passed');
