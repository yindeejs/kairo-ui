/**
 * Bundles `css/index.css` and `css/tokens.css` into `dist/`.
 *
 * Runs after `tsdown` (see the `build` script in `package.json`) because
 * `css/**` changes far more often than `src/index.ts`, so the CSS step is
 * kept out of a tsdown hook and lives here instead — a plain script the
 * future Vue package can reuse as-is.
 *
 * `targets` is the one knob that can turn this into a regression: anything
 * below the floor below makes Lightning CSS downlevel the 100+ `oklch()`
 * sites in `tokens.css` into `@supports`-wrapped fallback pairs (bigger file,
 * *wrong* colors in the fallback path) and try to downlevel `color-mix()`
 * reads of a `var()`, which it cannot do correctly. Never derive this from
 * `browserslist` — its query strings are OR semantics and silently drag old
 * browsers back in. At this floor nothing downlevels; Lightning CSS only
 * bundles and minifies.
 */

import { bundle } from 'lightningcss';
import { mkdir, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const TARGETS = {
  chrome: 111 << 16, // oklch()
  edge: 111 << 16, // oklch()
  firefox: 113 << 16, // color-mix() — the true floor
  safari: (16 << 16) | (4 << 8), // color-mix()
  ios_saf: (16 << 16) | (4 << 8), // color-mix()
};

/** Lightning CSS writes `sources` from the input path it was given, which on
 * Windows means backslashes — a map published like that won't resolve on
 * macOS/Linux. Rebuild each entry as a POSIX-relative path from the map's
 * own directory (`dist/`) regardless of what Lightning CSS produced. */
function normalizeSources(map, outDir) {
  map.sources = map.sources.map((source) => {
    const absolute = resolve(ROOT, source);
    return relative(outDir, absolute).split('\\').join('/');
  });
  return map;
}

async function buildSheet(entry, outName) {
  const filename = join(ROOT, 'css', entry);
  const { code, map } = bundle({
    filename,
    minify: true,
    sourceMap: true,
    projectRoot: ROOT,
    targets: TARGETS,
  });

  const mapName = `${outName}.map`;
  const json = normalizeSources(JSON.parse(map.toString()), DIST);

  const output = `${code.toString()}\n/*# sourceMappingURL=${mapName} */\n`;

  await writeFile(join(DIST, outName), output);
  await writeFile(join(DIST, mapName), JSON.stringify(json));
}

await mkdir(DIST, { recursive: true });
await buildSheet('index.css', 'styles.css');
await buildSheet('tokens.css', 'tokens.css');
