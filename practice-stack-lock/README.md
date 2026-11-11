# Locked dependencies for unrelated frontend practice

These files reconstruct the stock `create-vite@9.0.7` React/TypeScript exercise. They are **not a runnable app by themselves** and contain no Lunar implementation, assets or data. Keep the generated exercise outside this preparation checkout. Use Node 24 and npm 11; this Mac's prepared Node is documented in [FRONTEND_HANDOFF](../FRONTEND_HANDOFF.md#6-stack-frontend-đã-thử-trên-mac--1111).

## Reproduce from the repository root

1. Generate a fresh stock exercise (do not add `--overwrite`):

   ```sh
   stack_prep_repo="$PWD"
   stack_practice_dir=$(mktemp -d "${TMPDIR:-/tmp}/space-apps-stock-XXXXXX")
   cd "$stack_practice_dir"
   npm exec --yes --package=create-vite@9.0.7 -- create-vite stack-practice --template react-ts --no-interactive
   ```

2. Copy the reviewed dependency files and checker, then install the exact lock:

   ```sh
   cp "$stack_prep_repo/practice-stack-lock/package.json" "$stack_prep_repo/practice-stack-lock/package-lock.json" "$stack_prep_repo/practice-stack-lock/check-tooling.mjs" "$stack_practice_dir/stack-practice/"
   npm --prefix "$stack_practice_dir/stack-practice" ci
   ```

3. Run the checks in this order (the tooling check creates and removes its own temporary lint fixture):

   ```sh
   npm --prefix "$stack_practice_dir/stack-practice" run check:tooling
   npm --prefix "$stack_practice_dir/stack-practice" run lint
   npm --prefix "$stack_practice_dir/stack-practice" run build
   npm --prefix "$stack_practice_dir/stack-practice" audit
   ```

4. Open a local preview of that production build:

   ```sh
   npm --prefix "$stack_practice_dir/stack-practice" run preview -- --host 127.0.0.1 --port 4177 --strictPort
   ```

5. Visit `http://127.0.0.1:4177/`, click the stock counter and try Space with the button focused. Stop the preview with Ctrl+C. This is not a deploy, offline guarantee or teammate-device test.

## Dependency fix — 11 November 2026

[GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249) affects minimatch `>=7.0.0 <11.0.1`. The three current stable consumers still request major 10. Version-scoped [npm overrides](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/#overrides) pin `11.0.7` only beneath ESLint `10.14.0`, config-array `0.23.5` and typescript-estree `8.72.2`. ESLint is pinned directly so its override matches the dependency spec. No linter, audit or permission control was disabled.

shortcut: this crosses the consumers' declared major ranges, remove the overrides once stable upstream consumers use patched minimatch and rerun these checks. The checker covers the APIs used here, partial traversal, braces, dotfiles, negation, ignore rules and real nested-file lint error detection; it is not a proof of compatibility with every glob pattern.

The patched local run and an independent fresh reconstruction passed `npm ci`, the tooling check, lint and production build. Independent full and production-only audits both returned zero vulnerabilities; its production-browser smoke also passed. See [FRONTEND_HANDOFF](../FRONTEND_HANDOFF.md#6-stack-frontend-đã-thử-trên-mac--1111) for evidence and limits. The stock template is provided by [Vite/create-vite](https://github.com/vitejs/vite/tree/create-vite%409.0.7/packages/create-vite) under its upstream license; no template source or artwork is copied into this folder.
