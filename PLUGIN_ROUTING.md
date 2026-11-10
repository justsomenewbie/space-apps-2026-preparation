# NASA plugin and skill routing

Prepared 9 November 2026. This is environment preparation, not competition code, scientific results or a final UI design. Preserve all boundaries in AGENTS.md.

## How to use

Read the current task, choose the smallest useful workflow below, then read its actual SKILL.md and use it. The user should not need slash commands or plugin names. Prefer the session's skill catalog and tools. Local Mac fallback paths are below; a cloud checkout does not have these files automatically. Do not claim a tool worked because it is installed or because a past assistant used it.

## Tasks and routes

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

## Selection decision

Reuse the existing core rather than install duplicates. Public directory search for geospatial/cartographic tools returned no additional match; broader searches mainly returned overlapping web builders, business-analytics services or research subscriptions. No specific additional plugin was justified by the current preparation scope. Do not add Firecrawl, Replit, Webflow, MotherDuck or a paid research service just to inflate the list. The main scientific work is source/units validation and appropriate libraries at the allowed time, not collecting more plugins.

Mac free-space snapshot was about 8.3 GiB. Do not install large GIS/model stacks or bulk lunar datasets for this setup task. This audit should add only small documentation.

## Latest project context

HANDOFF.md records the latest Nov 10 coordination pack, shared task board, source-reading limits and backup status. Earlier document revisions do not establish additional plugin installations. Team agreement, teammate-device access, scientific validity and official-source freshness remain separate checks. The existing cloud NASA chat previously verified the four-document snapshot at `d4117cd`; loading newer preparation files there remains unverified. Use current Git/remote evidence and HANDOFF.md for backup status.

## Verification standard

1. Inventory/configuration shows presence, not execution.
2. A natural-language test must cause the Codex thread to read/use the appropriate workflow without a plugin name in the prompt.
3. A preparation-only reasoning test proves selection/instruction loading, not a built or tested NASA application.
4. A future event-time test must run actual data/UI/code checks on the agreed artifact before those capabilities can be claimed verified.

Natural-language routing smoke test: not verified. The existing NASA thread was idle; a supported message-to-thread request timed out in approval review. A read then showed the test had not arrived. The one allowed retry also timed out. No further retry or alternate execution route was used. The next supported action is to retry the read-only test when thread messaging is working; do not claim automatic selection has passed. No guarantee of perfect future selection.

## Official documentation read

- [Plugin architecture](https://developers.openai.com/plugins/concepts/plugins): plugins can package skills, MCP or both; availability can differ by surface.
- [Package your plugin](https://developers.openai.com/plugins/build/plugins): local/repo distribution and project enabling; authentication remains separate.
