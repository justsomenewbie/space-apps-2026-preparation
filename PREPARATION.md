# NASA Space Apps preparation pack

Status: preparation only. Updated 8 November 2026, Asia/Ho_Chi_Minh (UTC+07:00). Source verification dates remain explicit below.

This is a learning and coordination record, not a competition entry. **Current status, user update on 6 November 2026:** the team has **six members, including Thảo, who has already been added**. The team is reconsidering the topic after kickoff; **no replacement has been selected**. The earlier **Build a Junior Astronaut Mission Trainer** decision, concept and proposed MVP remain historical, provisional options, not a settled direction. No topic-specific implementation is authorized by this update. Game concept and stack remain open. The team reports some AI-assisted coding familiarity but no confirmed shipped game/website experience. Treat capabilities as unverified until demonstrated.

### Decision history and scope of this update

- Before this update, the pack recorded Junior Astronaut as the selected challenge and retained conditional prototype/MVP recommendations. Preserve that research and planning as history.
- On 6 November, the user reported six people in total, with Thảo already added, and said the team was considering whether to change topics. A replacement topic and final MVP have not been confirmed.
- Continue topic-neutral preparation and keep existing evidence. Reassess topic-specific sources, roles and proposals once the team confirms its direction; do not start or expand a Junior Astronaut build from the older plan. This documentation update did not change registrations, send invitations or assign roles.

## Quick status: collaboration, storage and preparation

Updated 7 November 2026, Asia/Ho_Chi_Minh. **Confirmed** means observed in this checkout or reported by the user; earlier tests and source checks retain their dates. **Recommended** does not mean agreed by the team.

### Current direction and collaboration

- **Confirmed by the user:** six members, including Thảo. The topic is being reconsidered; no replacement is selected. Junior Astronaut and its earlier MVP remain provisional history.
- **Recommended, not a recorded team agreement:** one shared code repository, one integration owner, small tasks with explicit file ownership, and review before integration. The team has not yet confirmed the integrator, each person's role or demonstrated capability.
- **Recommended:** use separate workspaces for simultaneous writers; otherwise edit sequentially. Codex can review/integrate and Antigravity can handle bounded work, but this is a proposed workflow, not a guarantee of compatible output or shared subscriptions.

### Code, shared assets and storage

- **Verified Nov 7:** the latest three-document snapshot was committed and pushed as `3cb43575fd8448c2b16f1533e522d23d556c5177` to the existing private GitHub repository. A fresh remote clone matched all three files byte-for-byte and passed `git fsck --full`. Teammate access and a second person's restoration are still unverified; section 9 records the checks.
- **Selected by the user Nov 7:** personal Google Drive, with a new private [NASA Space Apps 2026 Assets folder](https://drive.google.com/drive/folders/1H-D22SV6i1RImJHcWxRqtgK2_TP3tn2S). Owner-only upload/read and Trash/restore passed. No teammate has been invited. GitHub, the cloud build workspace and Drive remain distinct storage locations.
- **Recommended:** keep source/docs and small approved inputs in Git, heavy dependencies/build output where builds run, and larger assets in the selected Drive folder. Only a harmless 184-byte test file was uploaded; no competition assets, teammate access, paid service or cloud provisioning were added.
- **Measured Nov 7:** Mac Data volume reports about 18 GiB available, 96% used. The preparation checkout is tiny; this is not a reason to duplicate heavy assets locally. Personal Drive displayed 32.94 GB of 5 TB used. No Mac cleanup occurred and these observations do not verify iCloud recovery.

### Completed and verified

1. The three preparation/handoff documents exist. The six-member/topic update was read back; all three agree, earlier evidence is retained, Appendix A is unchanged, and the Git whitespace check passes.
2. The existing pack records dated official-rule/science reading and a local unrelated practice exercise. This is preparation, not a competition build or a completed team rehearsal.
3. The separate fresh cloud test restored **three practice files** and passed Node assertions and exact HTTP-content checks. Its browser interaction was **not verified**; the earlier local browser pass is separate evidence. Do not repeat the completed cloud test or count HTTP success as a browser pass.
4. The Nov 6 isolated in-app browser check of the existing local exercise passed: 0 → 1 → 2, Reset → 0, Shift+Tab/Enter → 1. Page/title, visible focus and rendering passed at 1280×720; captured warning/error log was empty. The tab and loopback server were closed. This verifies a local preview route, not cloud-hosted browser interaction or a teammate rehearsal.
5. A portable rehearsal ZIP exists outside Git: 4,191 bytes, six files, five matching manifest hashes; its three practice files exactly match Appendix A. Fresh extraction passed all three Node assertions, also independently reviewed. The result card remains blank. Section 8 compares shared-asset options using official documentation. The later Nov 7 selection and owner-only storage test are recorded in section 9; teammate sharing is still pending.

### Remaining before implementation

1. Record the team's final topic decision; then reassess scope. No topic-specific build while the topic is undecided or before the permitted start.
2. Confirm responsibilities/integrator and have another teammate use the section 8 rehearsal bundle to reproduce the unrelated exercise and review one bounded change. Human participation is not yet verified.
3. Verify preview for the eventual competition runtime once chosen. The local isolated route is demonstrated; cloud-hosted browser interaction remains untested, and another teammate must reproduce the practice/recovery flow.
4. Name the teammate Google accounts and contributor/viewer roles, then test their actual access and reproduction. Owner-only Drive recovery and GitHub source restoration passed in section 9; these do not prove teammate access.
5. Recheck current official guides, common-event registration, mentor/minor arrangements and Hanoi-specific deadlines. No registration changes, teammate messages or organizer outreach were made.

## 1. Rules and source index

Labels: **V** = source/user/tool verified at the stated date; **R** = recommendation; **U** = unresolved. R1–R5 and S1–S6 were refreshed on November 5, 2026; evidence and limitations appear in section 5. Recheck time-sensitive rules on November 13. R5 and the Junior Astronaut-related science reading are retained from the earlier direction; their inclusion does not confirm the current topic or make them requirements for a replacement.

| ID / primary source | What to retain | Limits / action |
|---|---|---|
| R1 [Team Formation Guide](https://www.spaceappschallenge.org/resources/team-formation-guide/) | V, Nov 5: challenge review/selection before the event is encouraged; project work starts Nov 14 at 09:00 local time. | Confirm Hanoi's local timetable separately. Local teams: 1–6, same Local Event, one team/challenge. |
| R2 [Participant FAQ](https://www.spaceappschallenge.org/resources/participant-faqs/) | V, Nov 5: AI/code-generation assistance is allowed with disclosure (the FAQ calls it SI). Resources and submission/judging guides scheduled Nov 13. | The no-early-project-work rule is explicit in R1. General learning/source notebooks are our preparation interpretation, not a blanket exemption for project development. |
| R3 [2026 event](https://www.spaceappschallenge.org/2026/) | V, Nov 5: submission opens Nov 14, 09:00; closes Nov 15, 23:59 local time. | Do not assume a full 48-hour submission window or invent video limits. |
| R4 [Terms](https://www.spaceappschallenge.org/legal/) | V, Nov 5: source attribution and suitable public/open-source rights required. | R2 also requires guardian registration/accompaniment and restricts under-18 images/voice. External mentor implementation limits need clarification. Read current terms before submission. |
| R5 [Junior Astronaut brief](https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/) | V, Nov 5: target ages 7–12; working interaction teaches engineering trade-offs. Optional guidance favors 2–3 core resources and accessible play. | R: do not treat every listed system, 3D, accounts or live APIs as separate required features. Archived real data is explicitly acceptable if labeled honestly. Resources tab still says Nov 13. |

Before start: register, organize, read, learn tools and science, and do unrelated exercises. Defer custom game code, gameplay design/prototypes, final visuals/dialogue, and processing data into submission assets. Detailed wireframes, reused custom solution code, and external mentors writing deliverables are **U**: request organizer clarification. AI generation is still project work when it produces submission components.

| ID / science source | Learn now | Do not infer |
|---|---|---|
| S1 [NASA ECLSS](https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/) | Water recovery, oxygen generation, CO₂ removal and resource dependencies. | ISS performance is not automatically a lunar/Martian habitat parameter. |
| S2 [NASA Veggie](https://science.nasa.gov/mission/veggie/) | Plant growth requirements and space-food research. | A plant experiment does not establish complete food self-sufficiency or instant harvests. |
| S3 [NASA radiation and shielding](https://ddtrb.larc.nasa.gov/radiation/) | Solar particle events versus galactic cosmic rays; material, areal density, geometry, secondary radiation. | No universal material “protection percentage”; do not invent a dose conversion. |
| S4 [DONKI](https://ccmc.gsfc.nasa.gov/tools/DONKI/) / [guide](https://ccmc.gsfc.nasa.gov/DONKI/guide/) | Historical event timestamps, identifiers, observations versus analyses. Current domain is `ccmc.gsfc.nasa.gov`. | A solar flare/CME is not a measured astronaut dose at an outpost. NASA labels products research/prototyping quality. |
| S5 [OSDR](https://science.nasa.gov/biological-physical/data/osdr/) | Study metadata, biological endpoints, experimental setting and limitations. | A study finding is not automatically a game-ready number or human safety threshold. |

S6 power/environment: [NASA Lunar Surface Technology](https://www.nasa.gov/lunar-surface-technology/). Learn W versus Wh, generation versus storage and site-dependent illumination. For constant power, energy in Wh = power in W × duration in hours; this dimensional relationship does not supply a real habitat's consumption rate. Do not transfer one lunar site's illumination to all sites. Optional reading, not revalidated in this refresh: [NASA Mars delay study](https://www.nasa.gov/wp-content/uploads/2024/01/mars-communications-disruption-and-delay.pdf); do not transfer Mars communication delay to the Moon.

Source-note template: `claim | source URL + section/table | publication/access date | units | measured setting | limitations | verified fact / assumption / game balance`. Keep unsupported numbers out. Sources above are reading pointers, not an organizer-supplied shielding dataset. No such materials table has been verified.

## 2. People and remaining schedule

**V, user report on 6 November:** six members in total: Chung, Trang, Lâm, Minh, Sơn and Thảo. Thảo has already been added; this update records that report, not an independently verified registration or a new invitation. Thảo’s role, experience and availability are not yet recorded.

The existing proposed assignments below reflect expressed interests, not demonstrated expertise. Topic-specific reading assignments are provisional while the topic is reconsidered; reassess them after the decision. The mentor reviews scientific understanding and questions; confirm registration status and any hands-on contribution with organizers.

| Person | Preparation responsibility | Observable result |
|---|---|---|
| Chung, year 3 | Tool/tutorial and build workflow | Someone else can run an unrelated exercise from the instructions. |
| Trang, year 1 | Child-friendly wording and accessibility | Explain confusing language or interaction in an existing educational tool. |
| Lâm, high school | Radiation/materials source reading | Explain SPE/GCR differences and why shielding claims need conditions. |
| Minh, year 3/UAV | Power, life support and food | Explain resource dependencies with correct units and sources. |
| Sơn, year 2 | Source ledger, data literacy and coordination | Trace each scientific claim and keep task ownership/current status visible. |
| Thảo | Already added; preparation responsibility to be agreed | Record interests, experience and availability before assigning a role. |

The Oct 31–Nov 4 plan was not completed; do not mark those days done retrospectively. Catch-up plan (**R**):

| Date | Bounded action | Done when |
|---|---|---|
| Nov 5–6 | 30-minute team capability/registration check; 30–45 minutes of individual reading/practice daily | Roles, availability and actual tool experience are recorded. |
| Nov 7–10 | One 90-minute unrelated collaboration drill | Two people can run the same version; a small reviewed change integrates successfully. |
| Nov 11–12 | 60-minute mentor/readiness review | Scientific uncertainties, equipment and backup responsibilities are explicit. |
| Nov 13 | 60-minute official-resource and guide review | Exact submission fields, presentation limits and judging requirements replace assumptions. |
| Nov 14–15 | Only after permitted start and a user build request: choose scope and build | Submit before the verified local deadline; follow local pitch requirements too. |

## 3. Avoid “râu ông nọ cắm cằm bà kia”

Use **one product, one shared repository, one vocabulary and one integration owner**. Assign the human integration owner during the capability check; Sơn is the coordinator by recommendation, not automatically the best developer. Codex assists review. Teammates own small tasks, not independent complete apps to combine on Sunday.

During the hackathon, before parallel implementation, agree on a single end-to-end example and the interfaces it crosses: input/output shape, units, ownership, failure behavior, and visible acceptance result. Record this in the project documentation then. This is a workflow rule now, not a game specification created in advance.

1. Integrator maintains a runnable baseline and shared interface definitions. Changes to shared state, dependencies, config or styles go through that owner.
2. A task begins from a named base commit, with explicit allowed files and acceptance examples. Concurrent writers need separate worktrees/checkouts, each on its own branch; one writer per checkout and file. Branches alone do not isolate files. The local preparation repository now has an initial commit; inspect `git log -1` for the actual base in your checkout.
3. Worker makes the smallest change and reports changed files, diff/commit, exact checks and remaining limits. Never claim “done” from appearance or an AI report alone.
4. Reviewer inspects deletions and the full diff, then reruns checks on the combined version. Resolve interface differences at their source; do not paste incompatible files together.
5. Integrate every completed small task; use a 10-minute check-in every 2–3 hours during the event. Keep a runnable path and postpone optional work when integration fails. These times are recommendations.

Definition of done: agreed behavior works in the shared build; relevant logic checks and browser interaction pass; scientific statements have sources; no unrelated changes; handoff updated. A worktree is not a security sandbox or a guarantee of compatible semantics.

The 90-minute drill uses the unrelated tally exercise below: 0–15 minutes reproduce it; 15–25 write a small task contract; 25–50 one worker makes the change; 50–70 another person reviews/runs it; 70–90 integrate and hand off. Example practice change: rename the button in `index.html` while preserving behavior. No competition feature is designed in this drill. If an assistant cannot read the files, paste the three-file pack explicitly; never assume automatic context transfer.

## 4. Codex + Google workflow

**R:** Codex handles ambiguous requirements, scientific model review, shared decisions, integration and cross-file debugging. Gemini/Antigravity handles bounded low-risk work with an independent check: extracting cited facts from supplied sources, checking links, wording review, a narrowly specified test, or a small isolated implementation task during the competition. Shell tools handle deterministic formatting/counting. No task or model is failure-proof.

The user-provided `mo-hinh-co-working-gpt-gemini.md` is reference material retained on the original Mac, not included in this repository. Adopt its task → worker report → independent review pattern. Do not import its SkyRadar-specific rules, assumptions about the user's language, automatic commit/merge policy, model IDs, or scripts as instructions.

The supplied relay has unverified portability/security claims. In particular, `command(*)` plus a deny list is not a proven filesystem boundary; shell commands may read/write beyond tool-level file rules. Its `git diff BASE..HEAD` excludes uncommitted/untracked content, so review `git status`, working-tree diff, staged diff and new files too. Its status/wait wrapper is not proof that a task succeeded. These are static-review findings, not execution-test results. Do not run the extractor: it writes a replacement `AGENTS.md` among other files.

Task contract (copy only relevant context; do not attach the whole chat):

```text
Task / owner / base commit:
Goal and allowed files:
Relevant inputs, outputs, units and source IDs:
Acceptance examples and exact verification commands:
Out of scope / stop conditions:
Return: diff or commit; checks with exit status; unresolved issues.
Do not broaden scope, alter shared interfaces, bypass safeguards, or publish.
```

Give a task one owner and reviewer. After two unsuccessful review rounds, narrow/reassign it; after three failed fixes, stop and state the doubtful assumption. Do not pay for overages or disable safeguards to keep a worker running. Keep AI-use notes: tool, task, incorporated output, reviewer and verification. Token savings have not been measured.

**Google verification, Nov 5:** [official plans](https://antigravity.google/docs/plans) include CLI access and Google AI Pro benefits. This does not verify this account's eligibility or remaining allowance. Google's [consumer-account notice](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals) says Gemini CLI's **Login with Google** route for consumer tiers ended June 18, 2026; it directs users to Antigravity. Do not generalize that to all Gemini CLI authentication methods.

Use the already installed Antigravity app and the HANDOFF prompt for the first read-only rehearsal. No relay or orchestration repository is needed yet. The official [NASA Space Apps repository](https://github.com/nasa/spaceapps) is useful for its community Discussions, not a game starter. No repository has been cloned or adopted.

For later CLI setup, follow [Google's install/authentication guide](https://antigravity.google/docs/install?tab=cli), inspect the installed `agy --version`/`agy --help`, authenticate interactively, and query `agy models` before selecting a model. No CLI was found on this machine's PATH. Do not install by blindly executing the uploaded document's script. A documented but **not locally tested** read-only invocation is:

```sh
agy --sandbox --mode=plan \
  -p "Read the assigned task and return findings only. Do not modify files." \
  --output-format json --print-timeout 2m
```

The [headless guide](https://antigravity.google/docs/cli/headless/) documents output and denied tool calls; exit 0 alone does not prove success. Check structured status, denials, actual diff and task checks. The current [permission guide](https://antigravity.google/docs/permissions?tab=cli) documents OS sandbox support, contrary to the supplied Markdown's blanket claim. Broad `command(...)` grants can cover execution outside isolation; personal-account `unsandboxed(...)` rules are not an equivalent boundary. Availability/version affects enforcement, so a `--sandbox` flag alone proves nothing about this Mac. No permissions or account settings were changed during the Nov 5 check; the Nov 6 app rehearsal is recorded separately below.

## 5. Actual readiness evidence — Nov 5

Evidence directory retained on the original Mac: `preparation-evidence-2026-11-05`, outside this repository. Referenced logs, screenshots, source snapshots and JSON records are historical evidence, not files available to a fresh cloud agent. Appendix A is the portable exercise. Tool versions, app installation and disk sizes below describe that Mac; inspect the actual runtime before executing commands elsewhere.

| Check | Observed result | Limit |
|---|---|---|
| Terminal | `git --version`: 2.51.2; `node --version`: v25.9.0; `npm --version`: 11.13.0; `python3 --version`: 3.14.6. Commands executed successfully. | Versions prove executable availability, not deployment or team competence. |
| Local exercise | Plain HTML/CSS/JS, Python loopback server, no downloaded dependencies. Node check passes 3 assertions, exit 0. | This is the practice route, not the game architecture. |
| Review and recovery | Searched both callers (`index.html`, `check.mjs`). Deliberate `+2` defect failed at `check.mjs:4`, exit 1, actual 2 versus expected 1. Reviewed one-line fix to shared `increment.mjs`: `+1`; tests then passed. | This demonstrates one small recovery, not a full app audit. Logs: `practice-red.txt`, `practice-green.txt`. |
| Browser | In-app browser: 0 → 1 → 2; Reset → 0; Shift+Tab/Enter → 1. Visible page and focus indicator, no overlay; captured warning/error log empty. Screenshot `practice-fixed.png`. | Desktop only; screen reader/mobile/deployment not tested. Initial port 8765 was occupied; left its process untouched and used OS-assigned port 62388. Practice server stopped after checks. |
| Google and source checks | Antigravity app exists in `/Applications`; `agy`, `gemini`, `antigravity` absent from PATH. R1–R4/S1–S6 returned HTTP 200 with readable source text; R5 verified in rendered Details/Resources tabs. | No Google login/quota/model/execution test. HTTP success alone is not content verification. Text/hash/access evidence: `sources.json`, `R*.txt`, `S*.txt`, `R5-browser.txt`. |

Browser/terminal practice was performed by Codex. The Google workflow checker independently reviewed the three-file pack and corrected the branch/worktree wording; it did not edit or execute the practice. The frontend-testing-debugging skill guided the UI checks; computer-use tools inspected the actual page. As of Nov 5, no production deployment, team rehearsal or Codex-to-Antigravity execution had been completed. Token savings are unmeasured.

**Nov 6 handoff result:** Codex used the installed Antigravity app, opened this existing folder, selected Default instead of its previous Turbo permission preset, and submitted the bounded review using the displayed Gemini 3.8 Flash High model. Antigravity read the pack and updated only `HANDOFF.md` (247 words), then released ownership. SHA-256 comparison confirmed `AGENTS.md` and `PREPARATION.md` were unchanged during its run; the root still contained only the three preparation files plus `.git`. This demonstrates local app execution and file handoff, without a CLI installation. It does not prove account quota, cloud access or a game build.

Antigravity reported a blocked live R1 fetch (403/network policy) and blocked access to the external evidence directory. It therefore relied on the dated Nov 5 pack, not a fresh official-source verification. Codex's independent web fetch also failed (502). Evidence: `antigravity-handoff-2026-11-06.md` and `antigravity-review-2026-11-06.png`. Reviewer corrections: untracked files mean the checkout is not clean; the team's shipped-project experience is unconfirmed, not proven absent; the practice consists of three files, not one. A claimed sandbox denial is not a complete sandbox audit.

### Reproduce the unrelated exercise

The tested files live in the evidence directory's `practice/` subfolder. On another machine, create an empty folder **outside the competition repository** and save the three files from Appendix A there. The appendix matches the tested files; it is portable preparation material, not submission code.

1. In that folder run `node check.mjs`; expect `PASS: 3 assertions` and exit 0.
2. Run `python3 -m http.server 0 --bind 127.0.0.1`. Open the printed port at `http://127.0.0.1:PORT/`; verify 0, Add one → 1 → 2, Reset → 0, keyboard activation → 1.
3. For deliberate recovery, change only `value + 1` to `value + 2`. Run the check and observe failure. Review callers, restore `+1`, rerun, reload the browser and verify again. Do not use a destructive Git reset.
4. Stop the server with Ctrl+C. Record actual commands, results, reviewer and unresolved issues in the handoff. Another person's successful reproduction is still pending.

### Storage policy and observed sizes — Nov 6

`df -h .` reported **7.9 GiB available** on the Data volume. `du` measured allocated sizes, rounded below; these are observations, not quotas or predicted growth:

| Scope | Allocated size |
|---|---:|
| Preparation checkout, including `.git`, before this update | 148 KiB |
| Nov 5 practice/source evidence | 232 KiB |
| Already installed `/Applications/Antigravity.app` | 480 MiB |
| Existing `~/.npm` | 4.189 GiB |
| Antigravity Application Support / `~/.gemini` / `~/.antigravity` | 316.56 / 770.32 / 110.80 MiB |

**R:** use one checkout and transfer editing ownership. Both assistants use the same preparation/source files; no duplicate project or per-assistant dependency installation is needed. The app's conversation history and caches remain separate from the project. No CLI, local model, containers, dependency packages or dataset archives are needed for this preparation.

Inspect `df -h .` and `du -sh .` before large changes. Retain small cited extracts and one useful screenshot/check log per milestone. During the competition, choose only dependencies and a bounded data sample the selected concept actually needs; measure before downloading. If parallel editing later becomes necessary, isolated worktrees duplicate working files and may also duplicate installed dependencies, so re-evaluate space first. Extra free space for macOS/build tools is desirable; no universal safe threshold or future game footprint has been established.

No cleanup has been performed. The existing npm directory is a candidate for a separate inspection, **not** a promise of 4.189 GiB safely reclaimable. Do not delete `.gemini`, `.antigravity` or Application Support wholesale; they may contain useful state. Temporary files in the evidence folder are small and intentionally retained for reproducibility.

### Two-day competition workspace options — verified Nov 6

The user prefers cloud/online options to reduce Mac storage. **R:** trial a cloud workspace on the unrelated exercise before committing to it. The earlier 10–15 GiB free-space target is a local-development recommendation, not an event requirement. Cloud storage holds files; cloud compute also runs builds and tools. Internet reliability remains a dependency.

| Option | Purpose | Verified limits / unknowns |
|---|---|---|
| [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle) — optional team browser workspace | Files, dependencies and build processes run on a remote computer; the Mac uses a browser. | [GitHub Free personal accounts](https://docs.github.com/en/billing/reference/product-usage-included) include 120 core-hours and 15 GB-month storage per month. [At 2 cores](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-included-usage), that is 60 running hours if unused. A 48-hour run uses 96 core-hours; storage and earlier usage still count. This account is Free; no November Codespaces usage was recorded when checked. Launch remains untested. |
| [Antigravity Remote Agents](https://antigravity.google/docs/remote-agents) | Google-managed execution for AI tasks; Pro personal accounts eligible, gradual rollout. No CLI required. | Account availability and build/preview workflow untested. Remote Control still runs on the host Mac and does not move its storage. No guaranteed GB/CPU allowance was established. |
| [Codex Cloud](https://help.openai.com/en/articles/20001545-using-codex-cloud) — first AI build-workspace candidate | AI coding tasks execute on OpenAI-managed computers. | Codex account tool confirms Pro. After setup on Nov 6, the environment list returned this preparation environment as ready and runnable on main. This coordinating chat remains local; cloud tasks have separate working files. |

**Codex Cloud screenshot/account check, Nov 6:** use the current **Codex Cloud** entry for a new coding environment. Legacy still supports Code Review and Linear/GitHub integrations, with deprecation planned; Code Review is a review workflow. The [current environment guide](https://learn.chatgpt.com/docs/environments/cloud-environments) documents Pro tasks with 4 vCPUs, 16 GiB RAM and 32 GiB disk on the remote machine. Setup selects GitHub repositories, tests dependencies, then publishes a reusable environment. Local uncommitted files are not automatically uploaded. Saved task VM state is normally recoverable for up to seven days after the last turn/resume; use Git for durable project history. Computer/browser use is currently unsupported there, so visual testing needs a separate workflow.

The account usage tool confirmed Pro and available usage on Nov 6; exact personal quota/reset snapshots remain only in the local evidence record. This is not a guaranteed competition allowance. [Local and cloud work share Codex usage](https://learn.chatgpt.com/docs/pricing); moving work remotely saves local disk, not inherently AI usage. No extra credits were purchased or resets consumed. Recheck Nov 13. **R:** trial current Codex Cloud for AI code/test work before adding a separate Codespace; retain Codespaces as the browser-editing option if needed by the team.

Codex's computer-use tool explicitly blocks controlling its own desktop app. The user then supplied a browser screenshot of the current Cloud creation dialog showing GitHub account `justsomenewbie`. It had the unrelated `NguyenNhuSon_25021580_tdtt` repository selected; do not use that repository for this pack. The user created [space-apps-2026-preparation](https://github.com/justsomenewbie/space-apps-2026-preparation); the GitHub connector verified owner `justsomenewbie` and private visibility. Codex pushed the three-file pack to `main` using existing Git authentication; no new credential was created. A school-email new-account form was not submitted.

**Earlier cloud setup result, Nov 6:** the user supplied a screenshot of “Set up space-apps-2026-preparation.” The setup assistant reported three passing assertions, HTTP checks for the unrelated practice page/module, GitHub read access, no repository changes/downloads/new secrets, saved `start_skill` instructions, and a stopped practice server. These were reported results; the coordinating session had not inspected their underlying command logs. The screenshot said to save/publish next, but a subsequent live environment-list check returned `space-apps-2026-preparation`, `status: ready`, `runnable: true`, repository ID `github-1447398939`, ref `main`. This verified an available saved configuration. Fresh-task restoration and browser interaction were untested at that stage; section 7 records the later successful restoration test and separate local browser check. Cloud-hosted browser interaction remains unverified. Do not repeat setup merely because the earlier screenshot still shows Save and publish.

**R, coordination:** one shared Git repository is the authoritative source; each teammate uses their own local/cloud workspace and account. Codex and Antigravity cloud environments do not automatically share a filesystem. Assign small tasks/branches, push completed work, then let one integrator review and combine it. Keep a small source-only backup on the Mac; put heavy dependencies/build output only where builds run. Sharing repository access does not share AI subscriptions or cloud allowances. The private preparation repository and a saved, runnable Codex Cloud configuration now exist. See HANDOFF for the latest state.

**R, usage controls:** begin with one 2-core Codespace and the default environment; avoid optional prebuilds. Verify remaining compute/storage and spending controls before starting; do not enable paid overages. Stop it between sessions. [Storage continues to count while a Codespace exists](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces); saving in the editor is not the same as pushing changes to Git. Before any later deletion, preserve committed/pushed source and confirm cleanup. No cloud cost, free capacity or automatic cross-assistant integration is promised.

**GitHub account check, Nov 6 — V:** after the user signed in and opened billing in Chrome, the page identified personal account `justsomenewbie`, **GitHub Free ($0/month)**. Codespaces consumed/billable usage was $0; Usage filtered to Codespaces for **Nov 1–30, 2026** said “No usage found.” The existing account-wide Codespaces budget showed **$0 spent / $0 budget**, status **“Usage blocked”**; **Included usage alerts: On**. No setting was changed. This supersedes the earlier logged-out in-app-browser failure.

**Interpretation:** [budgets control paid usage](https://docs.github.com/en/billing/concepts/budgets-and-alerts), separately from the plan's included allowance. The observed $0 blocking budget prevents paid Codespaces overage; its 100% indicator does not mean the free allowance is exhausted. The normal 120 core-hours/15 GB-month allowance appears unused, inferred from the plan and absence of recorded usage, not from an exact remaining-quota counter. Usage reporting can lag. No Codespace was started, so successful provisioning, actual available disk and competition-day capacity remain untested. Account evidence: `cloud-account-check-2026-11-06.json` in the evidence directory. GitHub/app checks were read-only; no cloud instance, publication, credit purchase or billing change occurred.

## 6. Open questions and readiness

| Unresolved item | Who resolves it |
|---|---|
| Registration, common Hanoi Local Event and mentor status | Team coordinator checks official accounts with teammates. Six members including Thảo are user-confirmed; official registration has not been independently checked. |
| Hanoi start/pitch timetable and external mentor implementation allowance | Local organizer; no message has been sent. |
| Guardian arrangements if Lâm is under 18; permitted demo imagery/voice | Guardian and organizer using current rules. |
| Topic decision, final concept/stack and demonstrated human coding capability | Team is reconsidering the topic; no replacement is selected. Confirm direction before updating topic-specific scope; implementation decisions remain deferred until the permitted start. |
| Final submission/judging guide and resource list | Recheck official pages Nov 13. No automation/reminder has been created. |

Preparation files, Codex's local drill and a bounded local Antigravity handoff are complete. Full team/cloud readiness is not yet proven. The Nov 7 three-document snapshot was verified by fresh restoration from private GitHub (section 9); raw Mac evidence and the rehearsal ZIP remain outside Git. No public publication, registration or organizer outreach was performed. During the 60-minute readiness review, spend 15 minutes on registration/ownership, 20 on independent reproduction, 15 on source explanations, and 10 on backup/access blockers. Pass only when another person/assistant can reproduce the exercise, explain evidence limits and continue without overwriting work.

## 7. Readiness refresh and bounded event plan — Nov 6

This section answers the user's request to do all permitted preparation and avoid incompatible parallel work. It is a feasibility and process assessment, not a selected game concept, architecture, mechanic, dataset, or prebuilt competition component. **V** means observed; **R** is a recommendation; **U** remains unresolved.

### Verified baseline and actual work

**V:** The canonical preparation checkout is `/Users/nns/Documents/ChatGPT/nasa space app challange`. At inspection it was clean on `main` at `f91a95a2f599c20ee1c40b87b60954916d7897de`, tracking `origin/main`. It contained only the three Markdown files, totaling 41,157 source bytes and about 372 KiB allocated including Git. A fresh `git ls-remote` attempt was blocked by the current network policy; it was not retried through another route. The earlier verified private GitHub backup remains historical evidence, not a new live remote comparison.

**V:** The app lists the existing NASA chat “Find the last request” as `notLoaded` and its latest turn completed, and the setup chat “Set up space-apps-2026-preparation” as idle. These are the inspected thread statuses, not proof that no activity exists elsewhere. The setup chat's last instruction was to wait and not republish. The saved environment `space-apps-2026-preparation` is still ready/runnable on repository `github-1447398939`, ref `main`.

**V:** One separate cloud test was created: “Verify Space Apps cloud readiness”, thread `01a1ae73-95a6-7003-bdfd-63b7b3b3a0b6`, durable host. Its assigned work is fresh-session restoration, Appendix A assertions/HTTP, browser checks if tooling exists, and final unchanged-repository verification. No game work, dependency downloads, remote Git retry, configuration republishing, or tracked-file edits were assigned. The completed fresh-task result verifies restoration of all three practice files, Node assertions (exit 0), HTTP 200/exact HTML and module content (exit 0), and unchanged preparation-file hashes. Its actual runtime is Linux x86_64, branch `work` at `f91a95a2f599c20ee1c40b87b60954916d7897de`, Node v24.22.1, Python 3.12.14, 32G disk with about 30G available, checkout 424K and scratch 20K. Browser interaction remains untested because its required browser-control tool is absent. An initial server-closure assertion failed after Ctrl-C; the worker identified and terminated only its server, then verified connection refused and a clean checkout. No new artifact was written. This is successful restoration and nonvisual verification, not a browser pass or durable-backup guarantee. Do not launch a duplicate test.

**V, separate Nov 6 local browser check:** Codex served the existing three practice files outside the repository with `python3 -u -m http.server 0 --bind 127.0.0.1 --directory <local-evidence>/practice`; the assigned URL was `http://127.0.0.1:54432/`. CUA's isolated in-app browser (`iab`, hidden) rendered “Practice tally” at 1280×720. Observed counts: initial 0, Add one → 1 → 2, Reset → 0, Shift+Tab from Reset focused Add one, Enter → 1. The page was nonblank, no error overlay was visible, focus was visibly outlined, and the captured warning/error log was empty. The frontend-testing-debugging skill guided this check; browser actions used CUA's scoped Playwright locators. No native browser/app UI was operated. The temporary tab was closed; Ctrl+C stopped only this server, and a socket check returned connection refused (code 61). Evidence retained on the original Mac: `isolated-browser-2026-11-06.json` and `.png` in the existing evidence directory. Practice code was unchanged; no dependencies were installed and no cloud test was repeated. Mobile, screen reader, cloud-hosted preview and teammate reproduction remain untested. The earlier Nov 5 deliberate-failure/recovery evidence remains separate and was not rerun.

### Rules and scope confidence

**V, Nov 6 indexed official sources:** [NASA's event announcement](https://science.nasa.gov/universe/nasa-welcomes-all-ages-experience-levels-for-space-apps-challenge/) confirms November 14–15, 2026. The indexed [2026 event page](https://www.spaceappschallenge.org/2026/) gives submission opening November 14 at 09:00 and closing November 15 at 23:59 local time. That is 38 hours 59 minutes, not a full 48-hour work window. Hanoi's earlier pitch or judging deadlines are still **U**.

**Historical direction, superseded as a settled decision by the later Nov 6 user update:** [Build a Junior Astronaut Mission Trainer](https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/) was the previously selected challenge. It is now under reconsideration; no replacement has been selected. The retained November 5 full brief specifies ages 7–12 and a working educational interaction. It permits several formats and emphasizes comprehensible trade-offs rather than production completeness. Its optional guidance favors a few resources and allows honestly labeled archived data.

Direct live refreshes of the challenge and [Team Formation Guide](https://www.spaceappschallenge.org/resources/team-formation-guide/) returned HTTP 502; browser fallback reported no browser available. The retained November 5 guide explicitly says project work begins November 14 at 09:00 local time. This is dated primary-source evidence, not an invented prohibition. Generic learning, source reading, tooling checks and unrelated collaboration practice continue. Detailed game contracts, custom architecture, wireframes, mechanics, code, final art/dialogue and transformed submission datasets stay deferred until the permitted start or explicit organizer clarification. A broad request to prepare everything does not establish a prework exception.

### Historical Junior Astronaut MVP proposal, not a confirmed plan

**Status after the latest Nov 6 user update:** the following feasibility proposal is retained for reference only. It does not choose the challenge, commit the team to a game or MVP, or authorize topic-specific implementation. Reassess it if the team confirms Junior Astronaut; otherwise review scope against the replacement challenge.

**Earlier R:** Aim for one small browser-playable prototype that completes a learning experience, can be replayed, and makes one engineering trade-off understandable. A single setting, two or three core resources, visible feedback, traceable science and a concise demonstration are a more credible target than a comprehensive habitat simulator. These are scope limits to evaluate at the start, not final mechanics.

Cut accounts, multiplayer, backend services, live-data dependency, 3D, broad content libraries and accurate radiation-dosimetry claims from the initial target. Add something only after the shared baseline works and someone owns its verification. A static real-data example may be considered during the event; do not mislabel it as live or convert a space-weather category into an unsupported astronaut dose.

Feasibility is conditional: the team has not yet demonstrated that another person can run, review and recover the same build. If that drill fails, reduce to a simpler interactive format before adding contributors or tools. No probability of winning or guaranteed completion is established.

| Relative time after permitted start | Target and review gate |
|---|---|
| 0–2 hours | Confirm deadline, one learning outcome, format/stack supported by practice, integrator, task boundaries and one demo path. Agree actual interfaces then. |
| 2–6 hours | Produce the smallest complete interactive path and test it end to end. If absent at hour 6, cut scope before splitting more tasks. |
| 6–12 hours | Integrate small reviewed changes into one runnable baseline. Check science attribution, reset/replay and error cases. |
| 12–28 hours | Improve clarity/accessibility and fix observed failures; include planned sleep and breaks. Test with an independent teammate. No reliance on everyone coding continuously. |
| 28–36 hours | Freeze features, test the combined version, prepare the actual required presentation/submission and rehearse recovery. Keep roughly 3 hours of global-deadline buffer; move earlier for Hanoi's schedule. |

The demo acceptance path to agree at the start is generic: enter without assistance, make a meaningful choice, understand its consequence, restart or replay, and locate the cited scientific basis. The detailed screen flow and simulation behavior remain undecided.

### Coordination contract, without assigning people

**R:** Start with at most two implementation streams plus an independent reviewer. Extra people contribute source review, accessibility checks and reproduction tests rather than separate full apps. One integrator owns shared interfaces, dependencies/configuration, cross-module state and the release baseline. No named teammate has been appointed by this document.

| Work area during the event | Ownership rule |
|---|---|
| Shared contracts and integration | One owner approves schema, units, version changes, dependency edits and merges. Other workers propose changes rather than editing these files independently. |
| Logic or isolated behavior | One worker owns an explicit file/module set and its focused tests; it consumes the agreed contract. |
| Presentation and accessibility | A different worker owns an explicit non-overlapping file set; no duplicated calculation or second source of state. |
| Scientific evidence and content review | A reviewer records sources, assumptions, data dates and rights; no unreviewed numerical constants enter the shared build. |
| QA and demonstration | An independent reviewer runs the combined baseline, repeated/reset/error flows and the agreed demo; a checklist is not marked passed without execution. |

Blank interface review fields: name/version; producer/consumer; input/output shape; units/ranges; defaults; failure behavior; deterministic acceptance examples; owner/reviewer; affected callers. Fill these for the chosen solution only after the allowed start. A contract change must list callers and invalidate old test evidence until rerun.

Blank task card: goal; one owner; reviewer; base commit; branch/checkout; allowed files; prohibited files; dependencies; acceptance command and expected result; timebox; status; changed files; result commit/diff; observed failures; handoff. Keep shared work on the authoritative branch only after review. Separate branches alone do not isolate files: concurrent writers require separate checkouts/worktrees with measured storage. Default to sequential ownership when isolation is unavailable. Merge small increments every 2–3 hours, not five apps at the end.

Review gate: inspect the full working/staged diff and untracked files; run focused checks; integrate; rerun combined checks; then update the handoff. If the combined build fails, freeze new feature intake and repair or revert the isolated change through the integrator. Do not automatically discard anyone's work.

### Storage, sources and remaining preparation gates

**V, Nov 6 current measurement:** Mac Data volume reports about 24 GiB available, 95% used; this supersedes the earlier 7.9 GiB observation, without assuming why it changed. The tiny preparation checkout is not the storage problem. No cleanup or download was performed. Keep heavy dependencies and build artifacts on the selected cloud runtime; the published config, each running task, Mac checkout, GitHub remote and delivered artifacts are distinct storage locations. A saved config is a recipe, and scratch is not a durable backup. The dot cloud disk observation is not this Codex Cloud task's quota.

**R:** Record actual workspace path, source commit, disk available, artifact size and backup location at each milestone. Commit source/docs/lockfiles and small approved data only; exclude caches, dependencies, temporary renders, secrets and large raw archives. Do not call a local commit backed up until the authorized remote update is verified. Keep one small, tested runnable release artifact outside disposable build output after the event build exists. No bulk copy to the Mac is needed now.

**V, Nov 6 source refresh:** [ECLSS](https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/) supports the water/air/oxygen-system relationship; its station-specific measurements are not lunar habitat constants. [NASA Langley radiation research](https://ddtrb.larc.nasa.gov/radiation/) distinguishes particle sources and shielding context; it does not provide a universal material protection percentage. [OSDR](https://science.nasa.gov/biological-physical/data/osdr/) is a broad biological/environmental archive, so study context and units must be checked rather than treating every result as a human safety threshold. [DONKI](https://ccmc.gsfc.nasa.gov/tools/DONKI/) offers event observations/analyses, explicitly describes research/prototyping quality and points to source acknowledgement policies. No datasets were downloaded or converted into game assets.

**V, Nov 6 rights check:** [NASA media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) generally allow educational/informational use with attribution but warn that third-party material has separate rights and NASA endorsement must not be implied. NASA identity/logo rules are separate. Record each chosen item's owner, exact rights notice, attribution and any limitation; do not label everything on a NASA site as unrestricted. Specific assets are not selected or licensed here.

| Remaining gate | Evidence required, not an automatic external action |
|---|---|
| Preview on the chosen runtime | Fresh cloud restoration/Node/HTTP and separate local isolated browser interaction passed. Verify a usable preview route for the eventual competition runtime; cloud-hosted browser interaction is still untested. |
| Team readiness and integrator | Another teammate reproduces the unrelated exercise, reviews a bounded change and completes a handoff; team chooses the integration owner. |
| Event eligibility and timetable | Six-member roster including Thảo is user-confirmed; verify common Local Event, official registration/mentor/minor arrangements and Hanoi's exact deadlines. No account changes or outreach has been made. |
| Rules and resources on Nov 13 | Current official guides, submission fields and presentation limits; resolve any prework question before custom deliverables. |
| Durable storage and fallback | Authorized remote access/backup verification, a second person able to restore source, and a demonstrated preview route. No paid overage or new credential is assumed. |

## 8. Portable rehearsal and shared-asset decision — Nov 6

Historical Nov 6 comparison and proposed checklist. Section 9 records the later personal-Drive selection and completed owner-only recovery test; named teammate access is still pending.

### Rehearsal bundle: ready locally, not distributed

**V:** `/Users/nns/Documents/ChatGPT/nasa-preparation-deliverables/teammate-rehearsal-2026-11-06.zip` is outside this repository. It contains the exact Appendix A `index.html`, `increment.mjs` and `check.mjs`, plus a five-step `README.md`, blank `RESULT_CARD.md` and `SHA256SUMS` covering the other five files. The README estimates 20–30 minutes, requires existing Node/Python/browser tools, and explains checksums, serving on an assigned loopback port, keyboard checks, a deliberate one-line failure, restoration and server shutdown. No installation is required when those tools are already available; missing tools are recorded as a blocker.

**V:** ZIP size 4,191 bytes; SHA-256 `e1d1b43dae4f83c2c792be50a641e92b7b6ddf4e9f69c6116d459f6ef5e885cf`. Fresh temporary extraction verified six allowed paths, all five manifest hashes and exact Appendix A bytes. `node check.mjs` exited 0 with `PASS: 3 assertions` and no stderr. The six text files were reviewed for private paths, account identifiers and apparent credentials; none were found. An independent read-only reviewer reproduced the extraction/hash/Node results. Validation record: `teammate-rehearsal-2026-11-06-validation.json` beside the ZIP. No uploads or messages occurred. This verifies packaging and Node execution, not another person's participation, Windows command execution or a new browser test. A filled result card intentionally differs from the distributed checksum; preserve the original ZIP.

### Shared assets: comparison, not a service decision

**V, official documentation checked Nov 6:** this compares ordinary Google Drive shared folders with iCloud Drive shared folders, not Google Workspace Shared Drives or iCloud Shared Albums. Google help pages were read directly; repeated Apple page requests returned HTTP 429, so Apple details below use indexed official help text. **U:** the team's actual accounts, remaining capacity, organization restrictions and cross-device access are untested.

| Decision point | Google Drive shared folder | iCloud Drive shared folder |
|---|---|---|
| Ownership | Files belong to their creator/uploader. Transferring a folder does not transfer its contents' ownership; record file owners, not just the folder owner. [Google ownership](https://support.google.com/docs/answer/2494892?hl=en) | The person who first shares is the owner; invitees are participants. Owner controls sharing options and can stop sharing. [Apple roles](https://support.apple.com/en-sg/guide/icloud/mm9331af712f/icloud) |
| Contributor and viewer | Editor can add/edit/move/remove items; Viewer can read. Editor resharing is on by default; inspect its setting. Folder permissions are inherited. [Google roles](https://support.google.com/drive/answer/7166529?hl=en) | Use Can Make Changes for contributors, View Only for readers. Participant invitations depend on the owner's setting; folder membership governs its contents. [Apple permissions](https://support.apple.com/en-gb/guide/icloud/mm708256356b/icloud) |
| Accounts and devices | Browser route available. Recommend named Google accounts and Restricted access; school/work policies may block external sharing. Public-link access is a different mode, not a workaround for a failed private test. [Google access](https://support.google.com/drive/answer/7166529?hl=en) | Browser route at iCloud.com uses an Apple Account; Apple devices and supported Windows setups also offer Drive access. Verify each person's actual login/platform; do not assume they need a Mac. [Apple web sharing](https://support.apple.com/en-gb/guide/icloud/mm708256356b/icloud), [setup](https://support.apple.com/en-gb/118443) |
| Revocation | Remove access and inspect any separate file grants, inherited access and link settings. Moving an item to Trash is not revocation: collaborators retain access until permanent deletion. [Google sharing](https://support.google.com/drive/answer/7166529?hl=en), [deletion](https://support.google.com/drive/answer/2375102?hl=en) | Owner can remove a participant or stop sharing; deleting the shared folder also removes participants' access. Existing independent copies remain available. [Manage sharing](https://support.apple.com/en-gb/guide/icloud/mm59dd13d0be/icloud), [copy limitation](https://support.apple.com/en-au/guide/mac-help/mchl91854a7a/27/mac/27) |
| Deletion and recovery | Owner can restore from Trash; automatic permanent deletion follows 30 days. A nonowner's removal can instead move a shared item to its owner's My Drive. Do not promise recovery after permanent deletion. [Recovery](https://support.google.com/drive/answer/1716222), [deletion](https://support.google.com/drive/answer/2375102?hl=en), [shared-item behavior](https://support.google.com/drive/answer/7166529?hl=en) | Deleted files can generally be recovered within 30 days; permanently removed files cannot. Confirm who can recover the specific shared test item. [Apple recovery](https://support.apple.com/en-asia/guide/icloud/mmae56ea1ca5/icloud) |

**R:** Choose the service whose existing accounts, owner availability, capacity and access/recovery test fit the team. Neither a paid-plan claim nor a folder icon proves usable capacity or backup. Use browser access initially to avoid unnecessary local sync; downloads still take Mac space. Treat revocation as stopping future service access, not remotely erasing copies already downloaded. Keep code in Git and large shared assets in the chosen store; these have separate backup checks. Do not select a service or grant access from this comparison alone.

### Minimal future access test — pending named permission

After the team records the service/owner and exact recipients/rights, use one new folder and one harmless `access-test.txt`; no real project assets. Estimate 10–15 minutes excluding login problems. This checklist has **not** been executed:

1. Owner confirms the intended signed-in account, available capacity and private/restricted invitation settings; leave public links and participant resharing off for the test.
2. Named contributor opens it on their actual device and uploads/changes the test text. Named viewer reads it and verifies that editing/upload is unavailable. Record actual results, ownership and platform.
3. Check that an uninvited/signed-out session cannot read the private item. Inspect both folder and file access, including inherited or separate grants.
4. Owner performs an agreed reversible deletion/removal of only the test item, then restores it and verifies its exact content and access. Never empty Trash or permanently delete. Record which account performed recovery.
5. Owner revokes the test recipient's access and checks the service link again; a retained download is expected to remain. Record pass/fail/blocker and final sharing state. Leave any cleanup or renewed access for explicit instruction.

**One next action, under two minutes:** record one line: `service + owner: ___; recipients + contributor/viewer rights: ___; rehearsal volunteer: ___`. These remain team decisions; no invitation, role assignment or message has been made.

## 9. Verified source backup and private asset storage — Nov 7

**GitHub backup, verified:** the user asked to finish the outstanding storage/backup. A bounded approval-reviewed remote check succeeded and found `main` at the unchanged local base `f91a95a2f599c20ee1c40b87b60954916d7897de`. Only the three previously modified preparation documents were committed as `3cb43575fd8448c2b16f1533e522d23d556c5177` and pushed normally to the existing private repository. No force push, history rewrite, collaborator change or new authentication credential occurred. A fresh shallow remote clone recovered exactly AGENTS.md, HANDOFF.md and PREPARATION.md; each byte matched the source snapshot and `git fsck --full` passed. Temporary recovery files were removed. This proves restoration with the owner's existing access, not a teammate's access or an independent provider backup. This status update records the completed test; inspect current Git status and remote before assuming later edits are backed up.

**Drive decision and tests, verified:** the user accepted personal Google Drive. [NASA Space Apps 2026 Assets](https://drive.google.com/drive/folders/1H-D22SV6i1RImJHcWxRqtgK2_TP3tn2S) is a new child of the existing private ChatGPT folder, owned by the user's personal account. Both folder and test-file permission readbacks show only the owner and `shared: false`. The signed-in browser displayed **32.94 GB of 5 TB used** on Nov 7; no plan or billing change was made.

A new [access-test-2026-11-07.txt](https://drive.google.com/file/d/1RLTg6i5M_dTfXlDVIFYlgcWfsJ-tCAGv/view?usp=drivesdk) contains only a harmless rehearsal marker, 184 bytes, SHA-256 `bcce986e1506331ac1aa7dc602db84ecd7019d4eb94c9cef70956e760a52c6df`. Upload and owner read passed. In Drive's browser UI, only this test file was moved to Trash and restored through Restore from trash; the UI confirmed restoration and the file reappeared in the original folder. A connector reread returned the exact original text and unchanged owner-only access. The user's separate, uninvited school account received HTTP 404 for the known file, consistent with private access. No access request was sent, and no permanent deletion or empty-Trash action occurred. The restored test file remains in the private folder.

**Still untested:** teammate invitations, contributor/viewer behavior on their devices, teammate reproduction, signed-out browser access and teammate revocation. No recipient emails or rights have been specified, so no sharing was performed. The chosen service is now settled, while full team readiness is not. One next action: provide each teammate's Google-account email and whether they should contribute or view, plus one volunteer for the existing rehearsal.

## 10. Readiness and source review — Nov 8

This review is preparation, not a submission. The existing NASA desktop thread was not loaded and both preparation cloud threads were idle when checked. Completed restoration, browser, backup and integration drills were not rerun. Topic remains undecided; no team access, registration, role, publication or competition component was changed.

### Source confidence and a registration discrepancy

**Indexed official evidence checked Nov 8:** the [2026 event page](https://www.spaceappschallenge.org/2026/) still gives November 14–15, with project submission open Saturday 09:00 through Sunday 23:59 local time. That is 38 hours 59 minutes, not a guaranteed 48-hour build window. It also says registration remains open through November 15.

The [2026 participant terms](https://www.spaceappschallenge.org/legal/), labeled updated August 7, say registration must precede the start. This conflicts with the event page's later registration wording. **Recommendation:** complete and verify registration before the start; do not rely on late registration without organizer clarification. No Space Apps account/dashboard was inspected or registered in this review.

**Evidence limitation:** direct requests for the team guide, FAQ, legal page and event directory returned HTTP 502. The browser fallback could not complete: the in-app browser was unavailable, Chrome opening timed out, and subsequent state checks did not establish the outcome. A public rules tab may have opened; its state/closure is unverified. Indexed official event/terms text is dated evidence, not a successful live-browser reread. Team-guide/FAQ details retain their earlier Nov 5 verification date. Search returned an old 2025 Hanoi page and current program mentions, but no verified 2026 Hanoi timetable. This does not prove that no timetable exists. Do not import schedules or presentation limits from other cities or staging pages.

**Registration evidence added later Nov 8:** read-only checks of the connected personal and school mailboxes found official personal-mail receipts dated Oct 21 (2026 event registration) and Oct 24 (Hanoi Local Event selection). These establish completed owner actions at those dates, not the current full-team membership or all six people's eligibility. Team-join requests are not proof of acceptance; the user's later report that Thảo was added remains the newer team evidence. No requests were accepted/declined, and no account data was changed. The searches found no newer local timetable; a bounded primary-calendar search for NASA was empty. Direct retrieval of the likely 2026 Hanoi page timed out, and browser tab inventory also timed out, so live schedule/membership verification remains blocked. Exact private email references stay outside this repository.

### Rights and privacy gate

The indexed [participant terms](https://www.spaceappschallenge.org/legal/) require source and license documentation, including open-source material. Third-party material must meet the stated public/open-source conditions. Original content must be unrestricted or OSI-licensed; the terms specify Apache 2.0 distribution if no OSI license is chosen. Under-18 participants need guardian registration/accompaniment; their recognizable names, voices and likenesses should not appear in submissions. Adults featured need consent. No license choice or consent is made here.

**Recommended preparation:** retain a source/rights ledger, separate private roster/contacts from future public deliverables, and check each asset before use. A no-cost download, public URL or paid AI account is not proof of redistribution rights. Do not place private preparation documents directly into a future public submission repository: review a separate export first. The preparation repository and Drive folder stay private.

### Five remaining gates, in dependency order

| Gate | Current evidence | Exact next evidence required |
|---|---|---|
| Registration and local rules | Official receipts confirm the owner registered Oct 21 and selected Hanoi Oct 24; the six-person roster remains user-reported. | Verify the current full-team membership and each member's event; Hanoi schedule and any earlier pitch deadline; applicable guardian/mentor arrangements. Do not ask the owner to register again based only on the earlier evidence gap. No private IDs need to enter the public repo. |
| Topic and integration decision | Topic still undecided; no human integrator selected. | Team confirms challenge URL and integrator. Evaluate one demonstrable outcome and exclusions after the permitted start, rather than building separate apps. |
| Real teammate rehearsal | Owner tests and offline conflict drill passed; human reproduction unverified. | One volunteer returns the existing result card with their own runtime, version, checks and one reviewed change. Do not count another AI run as human verification. |
| Access and storage | Private GitHub recovery and owner-only Drive recovery passed Nov 7. Mac has about 12 GiB free Nov 8. | Exact teammate accounts/rights before sharing; actual contributor/viewer test afterward. Keep dependencies off this near-full Mac. New local edits are not remotely backed up. |
| Final release/readiness review | Cloud Node/HTTP and separate local browser checks passed earlier. | On Nov 13, reread current submission/judging guides and record exact fields/limits. At build time verify preview in the chosen runtime, combined checks, artifact rights/privacy and restoration from the exact release. |

**Recommendation:** keep the earlier shared-interface review and combined-test gate mandatory. The Nov 8 drill showed a clean Git merge and passing focused tests can still violate the shared type contract. A named reviewer must test the integrated version; no new automation is needed to apply this rule.

**Next action under two minutes:** identify one rehearsal volunteer and supply the actual 2026 Hanoi event or organizer schedule link if available. Sharing, role assignment and registration remain separate authorized actions.

## Appendix A — portable practice files

These are the entire unrelated exercise, using only browser and Node built-ins. Do not reuse it as a prebuilt competition component.

### `index.html`

```html
<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" href="data:,">
<title>Practice tally</title>
<style>
body { font: 20px/1.5 system-ui; max-width: 32rem; margin: 3rem auto; padding: 1rem; color: #172033; background: #f7fafc; }
button { font: inherit; padding: .6rem 1rem; margin-right: .5rem; cursor: pointer; }
button:focus-visible { outline: 3px solid #1256b7; outline-offset: 3px; }
output { display: block; font-size: 3rem; margin: 1rem 0; }
</style>
<main>
  <h1>Practice tally</h1>
  <p>An unrelated exercise for learning browser checks and bug recovery.</p>
  <output id="count" aria-live="polite" aria-label="Count">0</output>
  <button id="add" type="button">Add one</button>
  <button id="reset" type="button">Reset</button>
</main>
<script type="module">
import { increment } from './increment.mjs';
const output = document.querySelector('#count');
let count = 0;
document.querySelector('#add').addEventListener('click', () => {
  count = increment(count);
  output.textContent = count;
});
document.querySelector('#reset').addEventListener('click', () => {
  count = 0;
  output.textContent = count;
});
</script>
</html>
```

### `increment.mjs`

```js
export const increment = value => value + 1;
```

### `check.mjs`

```js
import assert from 'node:assert/strict';
import { increment } from './increment.mjs';

assert.equal(increment(0), 1, 'One click must add exactly one');
assert.equal(increment(increment(0)), 2, 'Two clicks must yield two');
assert.equal(increment(9), 10, 'Carry across a decimal digit');
console.log('PASS: 3 assertions');
```
