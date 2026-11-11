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

## Continuity between chats

The user should be able to say “Continue from the current handoff” without naming tools or requesting a full chat audit.

1. Read `PLUGIN_ROUTING.md` for the task, discover the relevant current tools, and read/use the selected skill. Distinguish installed, available, invoked and verified; report a missing capability and use a suitable fallback.
2. At session start, use available chat-list/read tools to compare relevant project chats with the checkpoints in `PREPARATION_COVERAGE.md`. Read new or unreviewed relevant turns, including older pages when a decision needs them. Listing summaries alone are not a review. Record inaccessible histories and coverage gaps; do not reread every chat by default or message other chats merely to inspect them.
3. Reconcile decisions into their owning file: event workflow in `COMPETITION_RUNBOOK.md`, frontend in `FRONTEND_HANDOFF.md`, sources in `DATA_PREPARATION.md`, tools in `PLUGIN_ROUTING.md`. Check the live Sheet when assignments matter. Keep proposals, user decisions and independently verified results distinct; resolve consequential conflicts before dependent work.
4. After each bounded task, update the reviewed chat/turn checkpoint and `HANDOFF.md`: outcome, evidence, owner, next action, local changes, published Git SHA, last confirmed cloud SHA and pending shared-copy updates. Verify authorized sync at its destination; a save or commit alone is not a push, cloud refresh or Drive update.
5. These checks run while an assistant is working; they are not background capture or continuous synchronization. If chat tools are unavailable, continue from repository evidence and state the limit. New repositories and other apps need the relevant instructions/context supplied explicitly.

## Standing preparation sync — user instruction, 12 November 2026

Whenever preparation notes or instructions change, finish the bounded task by synchronizing GitHub, the existing cloud checkout and Drive/Word/PDF, then verify they match. This is standing authorization for these existing destinations, including contacting the existing cloud sync chat; do not require the user to repeat it in a new chat. Apply this section before reporting a preparation edit complete.

1. Reconcile the owning Markdown sources and handoff; inspect the full diff and existing changes. Commit only the intended public preparation changes to `justsomenewbie/space-apps-2026-preparation` and push `main`. Preserve unrelated edits and private evidence. Verify the remote commit and source bytes.
2. Safely refresh `/workspace/space-apps-2026-preparation`, branch `work`, through the existing **Verify Space Apps cloud readiness** chat when available. Check origin, ownership, clean state and ancestry; fast-forward only, refresh `origin/main`, and compare the exact commit and tracked-file hashes. Preserve scratch. Never reset, stash, clean, force-push or overwrite another editor to make sync succeed.
3. Update the existing [Drive index](https://drive.google.com/file/d/1l-qFA6cI34yYip9WTGgX6Nh8-oi2X_it/view), [AI context](https://drive.google.com/file/d/19SMq037jiJ9OnIXdfJWUOdafD3EIALDr/view), [source ZIP](https://drive.google.com/file/d/1DH3ftueW2DX1OEemJ5V1QFuCHfz52El-/view) and [release manifest](https://drive.google.com/file/d/1cfy-cKRFtT5KeONptrX3-brU-iKroF_m/view) as affected, preserving IDs, parents and sharing. ZIP contains the reviewed tracked source at the release commit; manifest records that commit and source/export SHA-256 values. The existing [Word](https://drive.google.com/file/d/1fviH_Rwg0PTh_-Sk_IYUUA_6vfTmRgvO/view) and [PDF](https://drive.google.com/file/d/1HzjerYUiOHpLy5ATm43F903shj9uugzI/view) derive from `KE_HOACH_NHOM.md`: regenerate and review every rendered page when that source changes; otherwise verify its source hash and retained export hashes without needless regeneration. Word/PDF are the human plan, not the entire repository.
4. Download/read back all affected shared files and verify byte hashes; verify retained Word/PDF against the manifest too. For regenerated exports compare source text and links as well as visual layout. Record each destination's actual result and any mismatch. A local save, successful upload or worker claim alone is insufficient. Keep final transport evidence outside the released sources to avoid an endless commit/update cycle; the manifest identifies the encompassing commit.
5. If access, tooling, concurrent edits or conflicts block a destination, preserve work, finish independent safe steps, report precisely what remains pending, and retry that pending sync at the next relevant session. Do not label partial sync complete. This runs while an assistant works, not as a background watcher. It grants no unrelated publication, new account/access, sharing changes, spending, deployment or early competition implementation.

## Competition boundary

**Current decision record, 9 November 2026:** the corrected Hanoi form submitted Nov 8 at 21:59 records six members and **Lunar Landing Site Navigator**. Membership is user-confirmed. Junior Astronaut and the earlier undecided-topic status are historical. Do not reopen registration or assume an agreed implementation scope, stack or integrator. Use PREPARATION section 11 for evidence and the current proposed schedule; use COMPETITION_RUNBOOK.md for the comprehensive event handoff, bounded prompt loop and the user's event-time Fast mode preference. This preference does not enable Fast now or authorize paid overages, resets or weakened safeguards.

**Deadline distinction — updated 11 November:** [event timeline](https://drive.google.com/file/d/1m07k0x7akRQqZ7YQS71hJs_ITXxgOK7e/view), page 2, visually read November 11, confirms **11:00 Hanoi November 15 local submission** and separate **23:59 global submission**. Use 11:00; the older rules’ 11:00/12:00 inconsistency is historical. Freeze 09:00/submit 10:30 are recommendations, not rules.

**Implementation start — corrected 11 November:** **00:00 November 14, 2026, Hanoi (UTC+07:00)**. The user supplied Cẩm Chi’s November 11 21:38:53 reply “Tính từ phút đầu tiên ngày 14 nhé ạ” and explicitly confirmed full project work from midnight. The chat was not independently authenticated. Before midnight, restrict work to preparation, source reading and unrelated practice. At midnight the preparation-only restriction ends: submission code, mechanics, UI/art and processed datasets may be developed within the assigned task. Do not wait for the ceremony or 09:00 portal opening. Ordinary competition, privacy and permission rules still apply.

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

This is task routing, not permission to build before the permitted start, connect a new account, grant persistent access, publish beyond the standing preparation-sync scope, spend money, or relax safeguards. Use existing capabilities first. Installed, available in this session, invoked, and independently verified are different states. If a skill is missing from the session catalog, inspect the relevant local skill path from the routing note and report any execution limitation honestly. Do not copy a plugin into the repository just to make its name appear.
