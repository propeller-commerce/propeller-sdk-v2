#!/usr/bin/env node
'use strict';

/**
 * Guarded `prepare` lifecycle hook.
 *
 * `prepare` is the ONLY npm lifecycle hook that runs when a package is
 * installed from a git URL or a local path (`prepack`/`prepublishOnly` run
 * only on `npm pack`/`publish`). So a consumer doing
 * `npm install github:propeller-commerce/propeller-sdk-v2#master` — the way a
 * deliberately-unreleased WIP gets pinned — needs `prepare` to produce `dist/`.
 *
 * But `prepare` also runs on a normal `npm install` inside this repo and on a
 * registry install where the published tarball ALREADY contains `dist/`. We
 * must NOT rebuild there: a bare `prepare: "npm run build"` is what made the
 * destructive `clean` + devDep-dependent `build:graphql` blow up consumer
 * `--install-links` installs (commit b855f43 removed it for that reason, but
 * that broke git-URL installs — review finding #2).
 *
 * Decision:
 *   - `dist/cjs/index.js` present  → already built (registry tarball or prior
 *     local build). Do nothing.
 *   - dist absent but sources present (`src/` + `scripts/`) → git/local
 *     install of the repo: build so the package is usable.
 *   - dist absent and sources absent → nothing we can do; stay silent (npm
 *     will surface the real resolution error).
 *
 * Net: registry/`--install-links` installs (dist shipped) skip the build;
 * git-URL/local installs build; nothing destructive runs on a plain install.
 */
const { existsSync } = require('fs');
const { join } = require('path');
const { execSync } = require('child_process');

const root = join(__dirname, '..');
const distEntry = join(root, 'dist', 'cjs', 'index.js');
const hasSources =
  existsSync(join(root, 'src')) && existsSync(join(root, 'scripts', 'build-graphql-bundle.js'));

if (existsSync(distEntry)) {
  // Already built (published tarball or a previous local build). No-op.
  process.exit(0);
}

if (!hasSources) {
  // No dist and no sources to build from — leave it; npm reports the error.
  process.exit(0);
}

// git-URL / local install: build so `import 'propeller-sdk-v2'` resolves.
console.log('[propeller-sdk-v2] prepare: no dist/ found, building from source…');
execSync('npm run build', { cwd: root, stdio: 'inherit' });
