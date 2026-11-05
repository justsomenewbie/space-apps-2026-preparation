# Junior Astronaut preparation pack

Status: preparation only. Updated 6 November 2026, Asia/Ho_Chi_Minh (UTC+07:00). Source verification dates remain explicit below.

This is a learning and coordination record, not a competition entry. The user selected only **Build a Junior Astronaut Mission Trainer**. Game concept and stack remain open. The team reports some AI-assisted coding familiarity but no confirmed shipped game/website experience. Treat capabilities as unverified until demonstrated.

## 1. Rules and source index

Labels: **V** = source/user/tool verified at the stated date; **R** = recommendation; **U** = unresolved. R1–R5 and S1–S6 were refreshed on November 5, 2026; evidence and limitations appear in section 5. Recheck time-sensitive rules on November 13.

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

Proposed assignments reflect expressed interests, not demonstrated expertise. The mentor reviews scientific understanding and questions; confirm registration status and any hands-on contribution with organizers.

| Person | Preparation responsibility | Observable result |
|---|---|---|
| Chung, year 3 | Tool/tutorial and build workflow | Someone else can run an unrelated exercise from the instructions. |
| Trang, year 1 | Child-friendly wording and accessibility | Explain confusing language or interaction in an existing educational tool. |
| Lâm, high school | Radiation/materials source reading | Explain SPE/GCR differences and why shielding claims need conditions. |
| Minh, year 3/UAV | Power, life support and food | Explain resource dependencies with correct units and sources. |
| Sơn, year 2 | Source ledger, data literacy and coordination | Trace each scientific claim and keep task ownership/current status visible. |

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
| [Codex Cloud](https://help.openai.com/en/articles/20001545-using-codex-cloud) — first AI build-workspace candidate | AI coding tasks execute on OpenAI-managed computers. | Codex account tool confirms Pro; no saved environments returned on Nov 6. This chat is still local. Cloud tasks have separate working files. |

**Codex Cloud screenshot/account check, Nov 6:** use the current **Codex Cloud** entry for a new coding environment. Legacy still supports Code Review and Linear/GitHub integrations, with deprecation planned; Code Review is a review workflow. The [current environment guide](https://learn.chatgpt.com/docs/environments/cloud-environments) documents Pro tasks with 4 vCPUs, 16 GiB RAM and 32 GiB disk on the remote machine. Setup selects GitHub repositories, tests dependencies, then publishes a reusable environment. Local uncommitted files are not automatically uploaded. Saved task VM state is normally recoverable for up to seven days after the last turn/resume; use Git for durable project history. Computer/browser use is currently unsupported there, so visual testing needs a separate workflow.

The account usage tool confirmed Pro and available usage on Nov 6; exact personal quota/reset snapshots remain only in the local evidence record. This is not a guaranteed competition allowance. [Local and cloud work share Codex usage](https://learn.chatgpt.com/docs/pricing); moving work remotely saves local disk, not inherently AI usage. No extra credits were purchased or resets consumed. Recheck Nov 13. **R:** trial current Codex Cloud for AI code/test work before adding a separate Codespace; retain Codespaces as the browser-editing option if needed by the team.

Codex's computer-use tool explicitly blocks controlling its own desktop app. The user then supplied a browser screenshot of the current Cloud creation dialog showing GitHub account `justsomenewbie`. It had the unrelated `NguyenNhuSon_25021580_tdtt` repository selected; do not use that repository for this pack. The preparation repository is `justsomenewbie/space-apps-2026-preparation` (planned private; see HANDOFF for actual creation/upload state). A school-email new-account form was not submitted.

**R, coordination:** one shared Git repository is the authoritative source; each teammate uses their own local/cloud workspace and account. Codex and Antigravity cloud environments do not automatically share a filesystem. Assign small tasks/branches, push completed work, then let one integrator review and combine it. Keep a small source-only backup on the Mac; put heavy dependencies/build output only where builds run. Sharing repository access does not share AI subscriptions or cloud allowances. No remote repository or cloud environment has been created for this project yet.

**R, usage controls:** begin with one 2-core Codespace and the default environment; avoid optional prebuilds. Verify remaining compute/storage and spending controls before starting; do not enable paid overages. Stop it between sessions. [Storage continues to count while a Codespace exists](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces); saving in the editor is not the same as pushing changes to Git. Before any later deletion, preserve committed/pushed source and confirm cleanup. No cloud cost, free capacity or automatic cross-assistant integration is promised.

**GitHub account check, Nov 6 — V:** after the user signed in and opened billing in Chrome, the page identified personal account `justsomenewbie`, **GitHub Free ($0/month)**. Codespaces consumed/billable usage was $0; Usage filtered to Codespaces for **Nov 1–30, 2026** said “No usage found.” The existing account-wide Codespaces budget showed **$0 spent / $0 budget**, status **“Usage blocked”**; **Included usage alerts: On**. No setting was changed. This supersedes the earlier logged-out in-app-browser failure.

**Interpretation:** [budgets control paid usage](https://docs.github.com/en/billing/concepts/budgets-and-alerts), separately from the plan's included allowance. The observed $0 blocking budget prevents paid Codespaces overage; its 100% indicator does not mean the free allowance is exhausted. The normal 120 core-hours/15 GB-month allowance appears unused, inferred from the plan and absence of recorded usage, not from an exact remaining-quota counter. Usage reporting can lag. No Codespace was started, so successful provisioning, actual available disk and competition-day capacity remain untested. Account evidence: `cloud-account-check-2026-11-06.json` in the evidence directory. GitHub/app checks were read-only; no cloud instance, publication, credit purchase or billing change occurred.

## 6. Open questions and readiness

| Unresolved item | Who resolves it |
|---|---|
| Registration, common Hanoi Local Event, confirmed roster and mentor status | Team coordinator checks official accounts with teammates. |
| Hanoi start/pitch timetable and external mentor implementation allowance | Local organizer; no message has been sent. |
| Guardian arrangements if Lâm is under 18; permitted demo imagery/voice | Guardian and organizer using current rules. |
| Final concept/stack and demonstrated human coding capability | Team after general practice; implementation decisions at permitted start. |
| Final submission/judging guide and resource list | Recheck official pages Nov 13. No automation/reminder has been created. |

Preparation files, Codex's local drill and a bounded local Antigravity handoff are complete. Team/cloud readiness is not yet proven. This is a local pack: no shared remote, publication, registration or organizer outreach was performed. During the 60-minute readiness review, spend 15 minutes on registration/ownership, 20 on independent reproduction, 15 on source explanations, and 10 on backup/access blockers. Pass only when another person/assistant can reproduce the exercise, explain evidence limits and continue without overwriting work.

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
