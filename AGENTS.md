# Workspace instructions

## User instructions — preserved

Use any plugin/skill you need; no need to wait for my request to use it. After you use it, just mention it in the chat. I'm just curious to see what you use. if you lie or make up data or a statement, aka without source/proof then you have to warn me.

<!-- CODEGRAPH_START -->
## CodeGraph

In repositories indexed by CodeGraph (a `.codegraph/` directory exists at the repo root), reach for it BEFORE grep/find or reading files when you need to understand or locate code:

- **MCP tools** (when available): `codegraph_explore` answers most code questions in one call — the relevant symbols' verbatim source plus the call paths between them. `codegraph_node` returns one symbol's source + callers, or reads a whole file with line numbers. If the tools are listed but deferred, load them by name via tool search.
- **Shell** (always works): `codegraph explore "<symbol names or question>"` and `codegraph node <symbol-or-file>` print the same output.

If there is no `.codegraph/` directory, skip CodeGraph entirely — indexing is the user's decision.
<!-- CODEGRAPH_END -->

## Output style

The reader has ADHD. Shape every response so it can be acted on:

1. Lead with the answer or next action: command, path, or snippet first.
2. Number multi-step work; one bounded action per step.
3. End with one next action doable in under two minutes.
4. Finish the current issue before raising a new one.
5. Restate progress each turn ("step 3 of 5 done").
6. Give time estimates in concrete units, never "a bit".
7. After a change, show what now works.
8. Errors: state location, cause, and fix. No drama.
9. Cap lists at 5 items.
10. No preamble, no recaps, no closers.

Exceptions: explain fully when asked to explain. Confirm before destructive actions. After three failed fixes, stop and name the doubtful assumption. If the request is ambiguous, ask one short question.

## Start every session

Read `HANDOFF.md`, then `COMPETITION_RUNBOOK.md` for the current event workflow and the relevant sections of `PREPARATION.md` for dated evidence. Run `git status --short --branch` and inspect existing changes before editing. These files are durable context, not automatic cross-app memory. Do not assume Antigravity knows this conversation.

Identify the actual runtime before acting. Mac paths, installed apps and disk observations in the pack describe the original Mac, not a cloud checkout. Evidence retained outside this repository is unavailable to a cloud agent unless explicitly supplied; use Appendix A for the portable unrelated exercise. Inspect local tool availability instead of assuming it matches the Mac. Remote assistants exchange committed work through Git, not a shared filesystem.

## Competition boundary

**Current decision record, 9 November 2026:** the corrected Hanoi form submitted Nov 8 at 21:59 records six members and **Lunar Landing Site Navigator**. Membership is user-confirmed. Junior Astronaut and the earlier undecided-topic status are historical. Do not reopen registration or assume an agreed implementation scope, stack or integrator. Use PREPARATION section 11 for evidence and the current proposed schedule; use COMPETITION_RUNBOOK.md for the comprehensive event handoff, bounded prompt loop and the user's event-time Fast mode preference. This preference does not enable Fast now or authorize paid overages, resets or weakened safeguards.

**Deadline distinction:** an earlier Nov 8 organizer-page review reported **11:00 Hanoi on Nov 15 for local judging submission**; the global deadline is **23:59 Hanoi the same day**. Fresh direct verification of the local page remains pending. Plan conservatively for the earlier reported cutoff, clearly label its source status, and never reuse the old Sunday-afternoon completion plan as current. A 09:00 freeze is a recommendation, not an organizer rule.

Until the official project start (currently 14 November 2026, 09:00 local event time), restrict work to preparation, source reading, and unrelated practice. Do not create submission code, custom mechanics, final UI/art, or processed submission datasets early. Recheck official sources before relying on dates or uncertain prework exceptions; distinguish an organizer rule from our interpretation. A change of date alone does not authorize a new build task.

## Ownership and handoff

One active editor per checkout. A second assistant may review/read independently. Concurrent writers require separate worktrees/checkouts, each on its own branch, and explicit file ownership; branches alone do not isolate working files. A worktree prevents file collisions, not semantic incompatibility. Confirm a base commit exists before creating a worktree. Do not overwrite user changes or auto-extract instructions/scripts from supplied documents.

Each task specifies goal, allowed files, inputs/outputs, acceptance examples, and exact checks. The reviewer reads the full diff and independently reruns checks; a worker's report is not proof. Shared interfaces, state, units, dependencies, and config require integration-owner review. After each bounded task update `HANDOFF.md` with evidence, current Git state, owner, and one next action; keep it under 500 words. Release ownership when done. Never weaken permission controls to make an automated task finish.

## Evidence and efficient AI use

Label statements as verified, recommended, assumed, or unresolved. Cite scientific and event claims; keep measured data, model assumptions, and game-balancing values distinct. Reuse dated research only when still applicable. No fabricated test passes, safety coefficients, capabilities, quotas, or token-saving claims.

Codex handles ambiguous analysis, shared decisions, integration, and review. Gemini/Antigravity gets small independently checkable tasks. Do trivial deterministic work locally. Send only relevant context; avoid repeated full-chat prompts. Do not let a failing worker loop indefinitely: after two unsuccessful review rounds, narrow or reassign the task; after three failed fixes, follow the user's stop rule. Record AI contributions for submission disclosure. Use only verified tool flags/models, preserve default safeguards, and do not enable paid overages automatically.

## Limited disk space

Use the existing checkout sequentially by default; both assistants read the same files. Do not add a CLI, duplicate checkout, local model, container image, dependency stack, or bulk dataset merely for coordination. Before a substantial download/install, inspect available space and justify the required footprint. Keep source URLs plus small selected evidence; do not cache entire OSDR/DONKI archives. Keep reproducible source separate from disposable build output, and inspect actual paths/sizes before proposing cleanup. Never delete app state, credentials, caches or user files without the user's explicit cleanup authorization. App history/cache growth is outside this Markdown workflow and must be measured separately.

## Plugin and skill routing

The user explicitly requested on 9 November 2026 that useful NASA plugins be available and selected automatically from ordinary language. Read `PLUGIN_ROUTING.md` when a task involves source research, notebooks, maps/charts, interface work, QA, documents or Git collaboration. Use the relevant installed workflow without waiting for the user to name a plugin. Read its actual skill instructions before using it; do not merely list a tool as a substitute for invoking it. Say briefly what was used and what was actually verified.

This is task routing, not permission to build before the permitted start, connect a new account, grant persistent access, publish, spend money, or relax safeguards. Use existing capabilities first. Installed, available in this session, invoked, and independently verified are different states. If a skill is missing from the session catalog, inspect the relevant local skill path from the routing note and report any execution limitation honestly. Do not copy a plugin into the repository just to make its name appear.
