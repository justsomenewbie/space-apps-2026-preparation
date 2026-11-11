import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'
import { ESLint } from 'eslint'

const require = createRequire(import.meta.url)
for (const parent of ['eslint', '@eslint/config-array', '@typescript-eslint/typescript-estree']) {
  const fromParent = createRequire(require.resolve(parent))
  const { Minimatch, minimatch } = fromParent('minimatch')
  assert.equal(fromParent('minimatch/package.json').version, '11.0.7', parent)
  const matcher = new Minimatch('src/**/file.{ts,tsx}', { dot: true })
  assert(matcher.match('src/nested', true), `${parent}: partial traversal`)
  assert(matcher.match('src/nested/file.tsx'), `${parent}: braces`)
  assert(!matcher.match('src/nested/file.js'), `${parent}: extension exclusion`)
  assert(minimatch('.probe.ts', '*.ts', { dot: true }), `${parent}: dotfiles`)
  assert(!minimatch('.probe.ts', '*.ts'), `${parent}: default dot exclusion`)
  assert(new Minimatch('!src/**', { flipNegate: true }).match('src/App.tsx'), `${parent}: flipNegate`)
}

const eslint = new ESLint()
assert.equal(await eslint.isPathIgnored('dist/probe.ts'), true)
assert.equal(await eslint.isPathIgnored('src/App.tsx'), false)
// Use a real nested file because lintText cannot exercise glob directory traversal.
const fixtureRoot = await mkdtemp(path.join(process.cwd(), 'tooling-check-'))
try {
  const nested = path.join(fixtureRoot, 'nested')
  await mkdir(nested)
  const invalidFile = path.join(nested, 'invalid.ts')
  await writeFile(invalidFile, 'const unusedProbe = 1\n')
  const results = await eslint.lintFiles([path.join(fixtureRoot, '**/*.ts')])
  assert.equal(results.length, 1)
  assert.equal(results[0].filePath, invalidFile)
  assert(results[0].messages.some(message => message.ruleId === '@typescript-eslint/no-unused-vars'))
  assert.equal(results[0].fatalErrorCount, 0)
} finally {
  await rm(fixtureRoot, { recursive: true })
}
console.log('PASS: 3 consumer API groups, ignore rules and nested-file lint detection')
