#!/usr/bin/env node
// Refresh the GitHub contribution heatmap shown on portfolio-hybrid.html.
//
// Fetches the latest contribution data via ghchart.rshah.org, recolors the
// 5-step palette to the portfolio ink-black gradient, and rounds the squares.
// Writes images/heatmap.svg.
//
// Usage:
//   node scripts/update-heatmap.mjs
//   node scripts/update-heatmap.mjs --user=SomeOtherUser
//
// Node 18+ recommended (uses global fetch). On Node 16, run via curl:
//   curl -s "https://ghchart.rshah.org/26a641/KaungMyatHein" > /tmp/raw.svg
//   node scripts/update-heatmap.mjs --in=/tmp/raw.svg

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const args = Object.fromEntries(
  process.argv.slice(2).map(a => a.replace(/^--/, '').split('=').concat(['true']).slice(0, 2))
);

const USERNAME = args.user || 'KaungMyatHein';
const SRC_URL = `https://ghchart.rshah.org/26a641/${USERNAME}`;

// ghchart's GitHub-green palette → portfolio ink-black gradient
const COLOR_MAP = {
  '#EEEEEE': '#f1f1f2', // 0 contributions — very faint
  '#73f38e': '#d4d4d6', // level 1 — light gray
  '#59d974': '#9b9ba1', // level 2 — mid gray
  '#26a641': '#525258', // level 3 — dark gray
  '#1e8534': '#1a1a1d', // level 4 — near-ink
  '#767676': '#a8a8ad', // day-of-week labels — softer
};

const ROUND_RADIUS = 2.2;

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const OUT = resolve(REPO_ROOT, 'images/heatmap.svg');

async function loadSvg() {
  if (args.in) {
    console.log(`Reading from ${args.in}`);
    return readFileSync(args.in, 'utf8');
  }
  console.log(`Fetching ${SRC_URL}`);
  if (typeof fetch !== 'function') {
    throw new Error('No global fetch — use Node 18+ or pass --in=/path/to/raw.svg');
  }
  const res = await fetch(SRC_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status} from ghchart.rshah.org`);
  return await res.text();
}

function transform(svg) {
  let out = svg;
  for (const [from, to] of Object.entries(COLOR_MAP)) {
    out = out.split(`fill:${from}`).join(`fill:${to}`);
    out = out.split(`fill:${from.toLowerCase()}`).join(`fill:${to}`);
  }
  out = out.split('shape-rendering:crispedges;').join('shape-rendering:auto;');
  out = out.replace(/<rect /g, `<rect rx="${ROUND_RADIUS}" ry="${ROUND_RADIUS}" `);
  return out;
}

function summarise(svg) {
  const counts = {};
  for (const m of svg.matchAll(/fill:(#[0-9a-fA-F]+)/g)) {
    counts[m[1]] = (counts[m[1]] || 0) + 1;
  }
  const rectCount = (svg.match(/<rect /g) || []).length;
  return { counts, rectCount };
}

const raw = await loadSvg();
const out = transform(raw);
const { counts, rectCount } = summarise(out);

writeFileSync(OUT, out);

console.log(`\nWrote ${out.length} bytes to ${OUT}`);
console.log(`Rects: ${rectCount}`);
console.log('Color counts:', counts);
