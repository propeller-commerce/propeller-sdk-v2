// Generates the SDK API reference as Markdown into docs/content/api/**.
//
// IMPORTANT — TypeDoc is run as a STANDALONE step here, NOT as the
// `docusaurus-plugin-typedoc` build plugin. The plugin regenerates on every
// `docusaurus build` (overwriting the on-disk MDX sanitize pass) and MDX fails
// to parse the raw output before any remark plugin can fix it. Decoupling lets
// the pipeline be: gen-api -> sanitize-api-mdx -> docusaurus build, with the
// API treated as ordinary pre-sanitized static markdown.
//
// Run from the `docs/` directory (npm scripts set cwd there).
const {spawnSync} = require('child_process');
const path = require('path');
const fs = require('fs');

// TypeDoc treats `entryPoints` as globs and rejects Windows `\` separators
// ("escapes a non-special character"). Always hand it POSIX `/` paths.
const toPosix = (p) => p.replace(/\\/g, '/');

const docsDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(docsDir, '..');
const entry = toPosix(path.join(repoRoot, 'src', 'index.ts'));
const tsconfig = toPosix(path.join(repoRoot, 'tsconfig.cjs.json')); // real compilerOptions
const out = toPosix(path.join(docsDir, 'content', 'api'));

// The generated barrel (src/generated/operationVariablesPublic) is re-exported
// by src/index.ts and is produced by the SDK's `npm run build:graphql`.
if (!fs.existsSync(path.join(repoRoot, 'src', 'generated', 'index.ts'))) {
  console.error(
    '[gen-api] src/generated is missing — run `npm run build:graphql` in the repo root first.',
  );
  process.exit(1);
}

fs.rmSync(out, {recursive: true, force: true});

const args = [
  'typedoc',
  '--plugin', 'typedoc-plugin-markdown',
  '--plugin', 'typedoc-docusaurus-theme',
  '--entryPoints', entry,
  '--tsconfig', tsconfig,
  '--out', out,
  // typedoc-docusaurus-theme computes sidebar doc IDs relative to this; it
  // MUST equal the Docusaurus `docs.path` (we use `content`) so IDs come out
  // as `api/...` not `../content/api/...`. Default is `./docs`.
  '--docsPath', './content',
  '--readme', 'none',
  '--excludeInternal',
  '--excludeExternals',
  '--excludePrivate',
  '--sanitizeComments',
  '--sourceLinkTemplate',
  'https://github.com/propeller-commerce/propeller-sdk-v2/blob/{gitRevision}/{path}#L{line}',
  '--gitRevision', 'main',
];

const res = spawnSync('npx', args, {
  cwd: docsDir,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (res.status !== 0) {
  console.error(`[gen-api] typedoc failed with exit code ${res.status}`);
  process.exit(res.status ?? 1);
}
console.log('[gen-api] API markdown generated at docs/content/api');
