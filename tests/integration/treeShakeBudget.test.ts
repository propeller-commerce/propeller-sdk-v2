/**
 * Tree-shake budget test (real bundler).
 *
 * Bundles a fixture that imports only `{ createClient, productService }` with
 * esbuild (bundle + minify + tree-shaking) and asserts the output size. This
 * is what a real consumer's bundler (esbuild/rollup/webpack) actually ships —
 * unlike a naive transitive-import file-size sum, esbuild drops unused exports
 * within a module, so the number is meaningful.
 *
 * The budget is the regression guard: if some commonly-imported module starts
 * pulling in the entire operations index (e.g. via a stray `export * from
 * './generated'`), the bundle balloons and this fails.
 *
 * Observed at v0.10.0: ~72 KB minified, ~10.5 KB minified+gzipped. Budgets
 * are set ~2x observed so normal growth doesn't trip them but a tree-shake
 * regression (which would be an order of magnitude) does.
 */
import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
import * as esbuild from 'esbuild';

const REPO_ROOT = path.join(__dirname, '..', '..');
const ESM_DIR = path.join(REPO_ROOT, 'dist', 'esm');

const MINIFIED_BUDGET_KB = 150;
const GZIP_BUDGET_KB = 30;

describe('Tree-shake budget (esbuild)', () => {
  beforeAll(() => {
    if (!fs.existsSync(path.join(ESM_DIR, 'index.js'))) {
      throw new Error(
        `ESM build not present at ${ESM_DIR}. Run \`npm run build\` first.`
      );
    }
  });

  it('a consumer importing only productService bundles under budget', async () => {
    const fixture = path.join(__dirname, '__fixture-product-only.mjs');
    const esmIndex = path.join(ESM_DIR, 'index.js').replace(/\\/g, '/');
    fs.writeFileSync(
      fixture,
      `import { createClient, productService } from '${esmIndex}';\n` +
        `const client = createClient({ endpoint: '/api' });\n` +
        `const svc = productService(client);\n` +
        `svc.getProduct({ productId: 1, imageVariantFilters: {} });\n`,
      'utf8'
    );

    try {
      const result = await esbuild.build({
        entryPoints: [fixture],
        bundle: true,
        minify: true,
        format: 'esm',
        platform: 'browser',
        treeShaking: true,
        write: false,
        logLevel: 'silent',
      });

      const bytes = Buffer.from(result.outputFiles[0].contents);
      const minKB = bytes.length / 1024;
      const gzipKB = zlib.gzipSync(bytes).length / 1024;

      // eslint-disable-next-line no-console
      console.log(
        `Tree-shake (esbuild) — productService only: ` +
          `${minKB.toFixed(1)} KB minified, ${gzipKB.toFixed(1)} KB min+gzip ` +
          `(budgets ${MINIFIED_BUDGET_KB} / ${GZIP_BUDGET_KB} KB)`
      );

      expect(minKB).toBeLessThan(MINIFIED_BUDGET_KB);
      expect(gzipKB).toBeLessThan(GZIP_BUDGET_KB);
    } finally {
      if (fs.existsSync(fixture)) fs.unlinkSync(fixture);
    }
  });
});
