# Repository Guidelines

## Project Structure & Module Organization

`slides.md` is the Slidev entry point and imports topic decks from `pages/`. Hardware, software, check-in, and check-out content should remain in their existing topic directories. Reusable Vue components live in `components/`; the bundled local Slidev theme is under `theme/`, with its layouts, components, styles, types, and assets kept together. Global styles are in `styles/`, while files referenced as `/images/...` belong in `public/images/`.

Laptop recommendation data is maintained in `pages/hardware/recommendation/laptop/*.json`. The Gulp preprocessing task turns it into ignored files under `generatedPages/`; edit the JSON source, never the generated Markdown. Build output (`dist/`) and `slides-export.pdf` are also generated and must not be committed.

## Build, Test, and Development Commands

Use Node.js 22 (the CI version) and the pnpm version declared in `package.json`.

- `pnpm install --frozen-lockfile` installs the locked dependency set.
- `pnpm dev` regenerates recommendation pages and starts Slidev, normally at `http://localhost:3030`.
- `pnpm run pre` only regenerates data-driven Markdown.
- `pnpm build` creates the production site in `dist/`.
- `pnpm exec playwright install` installs browser binaries required for export in a fresh environment.
- `pnpm export` renders `slides-export.pdf`.

## Coding Style & Naming Conventions

EditorConfig requires LF line endings, a final newline, and two-space indentation for Vue, JavaScript, and TypeScript. No repository-wide formatter or linter is configured, so follow nearby syntax and keep diffs focused. Name Vue components in PascalCase (`ImageWithHint.vue`), TypeScript identifiers in camelCase, and content files with descriptive lowercase or kebab-case names. Preserve Slidev's `---` frontmatter separators and existing `src:` import pattern. Keep image names descriptive and update every reference when renaming an asset.

## Testing Guidelines

There is no unit-test suite or coverage threshold. Before opening a pull request, run `pnpm build` and `pnpm export`; both are enforced by pull-request CI. Also inspect affected slides in `pnpm dev`, checking layout, overflow, transitions, image loading, and external links at presentation size.

## Commit & Pull Request Guidelines

History follows Conventional Commits: `feat(theme): ...`, `fix(hardware): ...`, and `build(deps): ...`. Use a concise imperative subject and a scope when it identifies the affected deck or subsystem. Pull requests should summarize changed sections, link relevant issues, cite sources for factual recommendation changes, and include screenshots or an exported-page preview for visual changes. Keep lockfile updates paired with dependency changes and ensure CI build/export checks pass.
