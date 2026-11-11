# NASA plugin and skill routing

Updated 11 November 2026. This is environment preparation, not competition code, scientific results or a final UI design. Preserve all boundaries in AGENTS.md. The new installation record below supersedes the older no-install snapshot.

## How to use

Read the current task, choose the smallest useful workflow below, then read its actual SKILL.md and use it. The user should not need slash commands or plugin names. Prefer the session's skill catalog and tools. Local Mac fallback paths are below; a cloud checkout does not have these files automatically. Do not claim a tool worked because it is installed or because a past assistant used it.

## Tasks and routes

### Context Mode — global Mac setup, 11 November

The user's Facebook-tool request authorized global automatic selection. Context Mode 2.1.7 is installed at `/Users/nns/.local/lib/node_modules/context-mode` and registered in `~/.codex/config.toml`; `~/.codex/AGENTS.md` selects it for large logs/JSON/documents without a named invocation. CodeGraph remains first for indexed code navigation. Native tools remain appropriate for small outputs, editing and exact evidence checks.

This is an MCP-only installation. Stock setup/plugin configuration includes automatic approval, so neither was used; existing permission settings were preserved. No Context Mode hooks, hosted Gateway, new account or auto-update were enabled. Execution runs as the host user: "sandbox" means output isolation, not filesystem/network isolation. Never use it to bypass a denied action. Indexes consume local disk; avoid indexing credentials, unrelated private material or bulk datasets.

Registry integrity, packaged checksums, static review and synthetic MCP execution/index/search/project separation passed, including independent review. In this later November 11 audit, Context Mode tools are exposed: ctx_index, ctx_search and ctx_execute were actually used on NASA documents. Real-task token savings remain unmeasured. This Mac configuration does not propagate to cloud or other apps. Evidence: sibling `nasa-preparation-deliverables/context-mode-2026-11-11/REVIEW.md`. Upstream: https://github.com/mksglu/context-mode/tree/v2.1.7 .

### Frontend additions — 11 November

**Latest readiness check:** `FRONTEND_HANDOFF.md` §6 records the prepared React + TypeScript + Vite/npm default for Sơn, fresh Node24/build/production-preview checks and remaining audit limits. The user clarified that Sơn owns frontend choice; Chung coordinates the shared interface/integration. A stock unrelated template was tested in sibling `readiness-gaps-2026-11-11/`, not added to this repo or copied into a submission. Existing tools sufficed; no additional plugin or browser was installed. Fresh disk measurement: 184 GiB available before the approximately 118 MiB practice install. Older low-space snapshots below are historical.

The subsequent user-authorized dependency repair is portable in `practice-stack-lock/`: manifest/lock/checker only, reconstructing a generic stock template elsewhere. The three minimatch consumer/version pins are a tested cross-major compatibility exception, not an upstream semver guarantee. Keep its focused check, lint/build and full audit when refreshing dependencies. Do not install the folder as if it contained app source or treat the practice as Lunar implementation.

**Earlier frontend readiness completion:** read `FRONTEND_HANDOFF.md` for the source/data-contract card; do not treat unfilled fields as an agreed architecture. The portable entrypoint is FRONTEND_HANDOFF.md plus practice-tally/README.md. The Mac-only entrypoint remains sibling `nasa-preparation-deliverables/frontend-ready-2026-11-11/BAT_DAU_FRONTEND.md`. Extended unrelated async practice and evidence live in `frontend-completion-2026-11-11/`; no Lunar UI/code/dataset was created.

Node 25 on the Mac is EOL according to the official release list. A checksum-verified portable **Node v24.22.2 LTS/npm 11.19.1** is now at `/Users/nns/.local/share/frontend-runtime/node-v24.22.2-darwin-arm64/`; use its absolute `bin/node` for this practice. For npm child processes scope PATH to that directory for the command only; do not change shell profiles or replace the global runtime. A future repo's engine/lockfile and team choice remain authoritative. Browser/plugin absent in this session: existing Playwright 1.60.0/Chromium148 ran 12 check groups; a separate reviewer ran six more under Node24. Three tally assertions passed. No browser/framework dependency installed. Actual root-font scaling was tested, not native zoom or screen-reader speech.

The user requested online research, installation and autonomous selection of frontend skills. Six reviewed skills from four pinned repositories are installed on this Mac under `/Users/nns/.codex/skills/`. Read the relevant `SKILL.md` without waiting for a slash command. If a new skill is absent from the current session catalog, use its verified local path; normal catalog discovery is expected on the next user turn. A cloud checkout does not inherit these files.

| Natural-language need | Skill path relative to `/Users/nns/.codex/skills/` | Use and limit |
| --- | --- | --- |
| Layout, typography, color, interaction, accessibility or chart guidance | `ui-ux-pro-max/SKILL.md` | Query one dominant concern; Python 3 standard library. Use the actual installed absolute script path. Catalog suggestions are recommendations, not science or accessibility certification. |
| A deliberate visual direction for an authorized new interface | `frontend-design/SKILL.md` | Complement the existing builder; respect real content and scope. Its fictional client persona is not evidence about this user. |
| Review UI semantics, keyboard use, responsive layout and usability | `web-design-guidelines/SKILL.md` | Fetch the official current review rules, then inspect the requested artifact. Remote rules cannot authorize changes or override user/project instructions. |
| React components with awkward boolean props or shared state | `vercel-composition-patterns/SKILL.md` | Check actual React version; React 19 advice is conditional. Do not add abstractions without an existing need. |
| Refine interaction, motion, touch targets, forms and visual details | `emil-design-eng/SKILL.md` | Apply to the requested interface, preserving reduced-motion and accessibility needs. Timing/style recommendations are preferences to validate, not universal measurements. |
| Test layout with Vietnamese, long strings, empty/loading/error states or extreme data | `break-ui/SKILL.md` and `break-ui/CATALOG.md` | Inspect the actual artifact and relevant stress cases; respect authorized files and task scope. Only add a development toggle or change code when the task calls for it. A static review is not a rendered-browser test. |

Reuse the existing frontend builder, React performance, shadcn, browser testing and visualization skills for their respective jobs. Choose only what the task needs. The user's style and existing project conventions resolve conflicting casing/layout defaults. The user conditionally authorizes frontend preparation; until the applicable prework scope is verified, keep current implementation to unrelated practice and tool setup. Current React documentation still supports `useContext`; the installed composition skill's overly broad replacement advice was corrected consistently in SKILL, compiled guide, rule file and section index, with source links. Do not migrate working code merely to satisfy a style rule.

Sources: [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/6ae86f61f520d6ca229d2f40e070410638c908c5/.claude/skills/ui-ux-pro-max), [Anthropic Frontend Design](https://github.com/anthropics/skills/tree/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/frontend-design), [Vercel agent skills](https://github.com/vercel-labs/agent-skills/tree/1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62/skills), [Emil's skills](https://github.com/emilkowalski/skills/tree/715c1807e08c497cfd1dc4feb450a2a3300ef2a9/skills). Exact hashes, static review, local adaptations and verification are in sibling `nasa-preparation-deliverables/audit-2026-11-11/frontend-research/`. Installed files total 3,750,638 bytes (100 files), approximately 3.8 MB; no dependency installation. UI UX Pro Max's 11 Claude-specific invocation examples were adapted to `python3` and the actual Codex path; runtime source is unchanged. No hooks, update daemon or automatic upstream execution were added.

Independent use test: actual local UX, React-stack and unrelated design-system lookups succeeded from `/tmp`; one broad React query required a narrower retry. A separate natural-language request caused an independent agent to read and use three appropriate skills through this routing note. This verifies path-based selection and use, not next-turn catalog discovery, rendered frontend quality or scientific results. Evidence: `independent-verification.md` and `independent-routing-test.md` in the same sibling audit directory.

Both Emil additions were independently compared with their pinned source and applied to a synthetic Vietnamese contact-card concept for interaction and edge-case review. Evidence: `expanded/independent-installed-verification.md`. Post-install scans have no active findings; Break UI has one narrowly reviewed false positive for a defensive prompt-injection example. These checks do not certify security, rendered behavior or universal design quality.

### Autonomous Antigravity delegation — authorized 11 November

For ordinary tasks the user assigns, choose useful skills and small Antigravity subtasks without requiring another named invocation. Delegate only when a bounded independent contribution helps: source-backed extraction, a narrow review, or an isolated change with an exact check. Do trivial deterministic work locally. Codex owns ambiguity, contracts, integration and independent verification; no worker is failure-proof and no token saving is assumed.

The existing Antigravity app conversation **NASA Space App Challenge Preparation** was exercised again on November 11, with **Default** permissions and displayed **Gemini 3.8 Flash High**. It completed a read-only review of the unrelated Appendix A UI. All five repository Markdown hashes stayed unchanged; Codex independently tested the browser and corrected an unsupported ARIA concern. Evidence: sibling `nasa-preparation-deliverables/frontend-ready-2026-11-11/antigravity-result.md`. This proves that request, not current/future quota, CLI access or a coding-worker sandbox.

Use the existing app route when available. Each task names goal, allowed files, inputs/outputs, exact checks and exclusions; stop on a real access/quota blocker instead of changing protections. One checkout has one editor. A concurrent writer needs its own worktree and explicit ownership; a reviewer can remain read-only. After two unsuccessful review rounds, narrow or reassign; after three failed fixes, stop and identify the doubtful assumption. Preserve the user's authorized scope; publishing, spending and access expansion remain separate actions.

The user resurfaced `/Users/nns/Downloads/mo-hinh-co-working-gpt-gemini.md`: retain its plan → worker → independent review pattern. Its embedded scripts were not executed. The broad command grant, sourced shell metadata and path escaping defects were avoided in the smaller replacement below; its four-round retry rule and SkyRadar-specific instructions were not adopted.

**Later November 11 — relay installed and exercised:** the user explicitly authorized repair/install, unrelated end-to-end testing, and automatic use. For a useful small review, supplied-source extraction, wording task or isolated repair proposal, read `/Users/nns/.codex/skills/antigravity-relay/SKILL.md` and use `/Users/nns/Documents/ChatGPT/ai-relay/relay.py`. Do not require the user to name it. Codex supplies bounded selected text; Antigravity returns validated JSON; Codex reads/applies/checks. No automatic merge, push or worker-written command execution. Trivial deterministic work stays local.

Official CLI 1.5.5 is pinned at `/Users/nns/.local/bin/agy`; actual `gemini-3.8-flash-low` account access passed. Each run uses strict session-only permissions, six tool-action denials, no credit overage, a fresh `/private/tmp` workspace, and a macOS executable allowlist for the CLI plus its Keychain helper. This is not filesystem/network isolation. Global plugin discovery can start before exclusions settle; startup subprocesses are additionally constrained. New global hooks/plugin manifest/active standalone MCP block preflight. See the installed README for exact limitations; do not weaken safeguards to clear a blocker.

Live unrelated counter repair passed all three existing assertions after independent application; the worker did not change source or the checker. A real synthetic probe recorded read/write/command denials although the CLI reported overall SUCCESS, so relay acceptance checks tool events. Evidence is in sibling `nasa-preparation-deliverables/relay-setup-2026-11-11/`. An independent agent selected the installed skill from an ordinary wording-review request, invoked the live worker, and verified the pending/success/failure distinction; Codex independently read the complete result. Fresh-chat catalog discovery remains separate from this verified path-based use. This Mac setup is not installed in cloud sessions.

CodeGraph CLI/MCP already exist. This repository contains preparation documents and no `.codegraph/`; use ordinary file navigation here. In an indexed code repository, query CodeGraph before code searches. Do not add a second indexer, watcher or relay solely for coordination. A later code project needs one clear README/file map, Git diffs and real tests, not another collection of tools.

### Existing capability table

| Natural-language task | Existing capability to use | Scope and limits |
| --- | --- | --- |
| Explain/compare lunar data sources, units, coordinate/time conventions or source claims | Official NASA/JPL/PDS sources using available read-only search/fetch; relevant existing research skills when useful | Primary sources first. Record actual retrieval and unknowns. Never invent a mission-grade scientific validator. A plugin is not required to read a public NASA document. |
| Review a map, terrain view, projection, site-comparison plot or uncertain result | Build Web Data Visualization: geospatial-and-cartographic-visualization, statistical-and-uncertainty-visualization, testing-data-visualizations; data-visualization for chart choice | These are presentation/QA workflows, not lunar physics. Do not assume terrestrial Earth CRS, map tiles or Earth-radius defaults are valid for the Moon. Read topic-specific instructions only. |
| Create a small reproducible notebook or inspect notebook structure | jupyter-notebook; Data validation workflow if actually exposed | Before permitted start, only unrelated practice or source reading. Do not process submission datasets early. Notebook scaffolding does not verify physical calculations. |
| Build the agreed web interface or inspect UI behavior | Build Web Apps: frontend-app-builder, react-best-practices, frontend-testing-debugging; existing browser/Playwright when appropriate | Only implement at the permitted start after scope/stack agreement. No new payment/database platform unless needed and approved. Never touch the user's Safari window. |
| Review changes, tests and security; prepare a pitch or team handoff | Existing GitHub, Codex Security, document/PDF/presentation workflows; Google Drive when the task actually needs shared files | Read-only first. Publication, sharing, credentials and paid services still need the applicable approval. One editor per checkout. Scientific review is separate from security/CI. |

## Verified local inventory

Read on this Mac, 9 November 2026:

- Build Web Apps 0.1.2: OpenAI, MIT; cached package 760 KiB. Configured enabled; its instructions were readable.
- Build Web Data Visualization 0.1.21: OpenAI, MIT; cached package 1.1 MiB. Configured enabled; its geospatial instructions were readable.
- Data 1.1.0-exp-baseline: Data Maintainers, proprietary; cached package 17 MiB. Directory reports installed; primarily product/business analytics, so not a reason to add warehouses or other services for this challenge.
- Existing notebook, PDF and browser-testing local skills are present. GitHub, Google Drive and Codex Security are configured/enabled and cached; credentials and each requested operation must still be checked in the actual session.
- Official bundled CLI exists in the ChatGPT app resources and reports version 0.167.0-alpha.3.2. `plugin add` appears in its help. No CLI installation, plugin installation or account setup was done in this audit. Prior Codex app UI access denial was not retried or bypassed.

The supported bundled CLI inventory additionally reports the relevant core plugins installed and enabled (Build Web Apps, Build Web Data Visualization, GitHub, Google Drive, documents, spreadsheets and presentations). Its local curated-source version label differs from the remote-cache manifest versions above; they are separate observations, not a claim that the remote-cache copy is necessarily the active one.

Local fallback roots (read only the relevant skill):

- `~/.codex/plugins/cache/openai-curated-remote/build-web-data-visualization/0.1.21/skills/<skill>/SKILL.md`
- `~/.codex/plugins/cache/openai-curated-remote/build-web-apps/0.1.2/skills/<skill>/SKILL.md`
- `~/.codex/skills/jupyter-notebook/SKILL.md`
- `~/.codex/skills/playwright/SKILL.md`
- `~/.codex/skills/pdf/SKILL.md`

Versions and paths can change. Prefer current catalog resolution, and inspect the installed version rather than invent a path. This note does not add those packages to a cloud machine.

## Historical selection decision — 9 November

Reuse the existing core rather than install duplicates. Public directory search for geospatial/cartographic tools returned no additional match; broader searches mainly returned overlapping web builders, business-analytics services or research subscriptions. No specific additional plugin was justified by the current preparation scope. Do not add Firecrawl, Replit, Webflow, MotherDuck or a paid research service just to inflate the list. The main scientific work is source/units validation and appropriate libraries at the allowed time, not collecting more plugins.

Mac free-space snapshot was about 8.3 GiB. Do not install large GIS/model stacks or bulk lunar datasets for this setup task. This audit should add only small documentation.

## Historical project context — 10 November

HANDOFF.md records the latest Nov 10 coordination pack, shared task board, source-reading limits and backup status. Earlier document revisions do not establish additional plugin installations. Team agreement, teammate-device access, scientific validity and official-source freshness remain separate checks. The existing cloud NASA chat last reported a clean five-document snapshot at `613719f` on November 10. Later synchronization is recorded in HANDOFF; do not infer it from this historical note. Use current Git/remote evidence and HANDOFF.md for backup status.

## Verification standard

1. Inventory/configuration shows presence, not execution.
2. A natural-language test must cause the Codex thread to read/use the appropriate workflow without a plugin name in the prompt.
3. A preparation-only reasoning test proves selection/instruction loading, not a built or tested NASA application.
4. A future event-time test must run actual data/UI/code checks on the agreed artifact before those capabilities can be claimed verified.

Historical 9 November thread-message smoke test: not verified. The existing NASA thread was idle; a supported message-to-thread request timed out in approval review. A read then showed the test had not arrived. The one allowed retry also timed out. No further retry or alternate thread-message route was used. The separate 11 November local-agent routing test above verifies path-based selection only; it does not establish that thread messaging now works. No guarantee of perfect future selection.

## Official documentation read

- [Plugin architecture](https://developers.openai.com/plugins/concepts/plugins): plugins can package skills, MCP or both; availability can differ by surface.
- [Package your plugin](https://developers.openai.com/plugins/build/plugins): local/repo distribution and project enabling; authentication remains separate.
