// Copies the repo-root CHANGELOG.md into the Docusaurus content tree as a doc
// page, prepending Docusaurus frontmatter. The root CHANGELOG.md is the source
// of truth for release automation (.gitlab-ci.yml `release_to_github` greps it
// for `## [VERSION]` headings and the Unreleased marker) and is NEVER modified
// here — this only produces a gitignored copy at docs/content/changelog.md.
//
// Run from the `docs/` directory.
const fs = require('fs');
const path = require('path');

const docsDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(docsDir, '..');
const src = path.join(repoRoot, 'CHANGELOG.md');
const destDir = path.join(docsDir, 'content');
const dest = path.join(destDir, 'changelog.md');

if (!fs.existsSync(src)) {
  console.error(`[copy-changelog] source not found: ${src}`);
  process.exit(1);
}

let body = fs.readFileSync(src, 'utf8');

// The root CHANGELOG.md links to sibling repo files with repo-relative paths
// (e.g. `[MIGRATION-0.10.0.md](./MIGRATION-0.10.0.md)`). Those files are not in
// the docs tree, so rewrite them to absolute GitHub blob URLs in the generated
// copy. The source file is never modified.
const GH = 'https://github.com/propeller-commerce/propeller-sdk-v2/blob/main';
body = body.replace(
  /\]\(\.\/([A-Za-z0-9._/-]+\.md)\)/g,
  (_m, file) => `](${GH}/${file})`,
);

const frontmatter = [
  '---',
  'id: changelog',
  'title: Changelog',
  'sidebar_label: Changelog',
  'description: Release notes for propeller-sdk-v2.',
  '# AUTO-GENERATED from the repo-root CHANGELOG.md by docs/scripts/copy-changelog.js.',
  '# Do not edit here; edit the root CHANGELOG.md.',
  '---',
  '',
  '',
].join('\n');

fs.mkdirSync(destDir, {recursive: true});
fs.writeFileSync(dest, frontmatter + body, 'utf8');
console.log(`[copy-changelog] wrote ${path.relative(repoRoot, dest)}`);
