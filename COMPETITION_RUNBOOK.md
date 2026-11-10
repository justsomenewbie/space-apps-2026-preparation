# NASA Lunar competition runbook

Updated 10 November 2026 (Drive-status reconciliation), Hanoi time. Private coordination and source-reading plan, not a competition solution. Read `AGENTS.md` and `HANDOFF.md` first. `PREPARATION.md` section 11 holds the current evidence and timetable; earlier Junior Astronaut plans are historical.

## 1. Decisions, evidence and open questions

**Settled:** six members, Chung, Trang, Lâm, Minh, Sơn and Thảo. The user confirmed everyone is registered/listed. The corrected Hanoi form submitted Nov 8 at 21:59 and reread Nov 9 records **Lunar Landing Site Navigator**. Do not repeat registration or ask for contacts already available privately. Submitted choice does not establish a final implementation scope or team-approved roles.

**Not yet settled:** final scope and stack; named integration owner; availability and concrete outputs for each person; actual teammate access and human rehearsal; exact venue/mode/team code; final submission fields, pitch timing, guardian arrangements and allowed mentor contributions. Requested organizer support is not proof it has been allocated.

| Source | Evidence and next use |
|---|---|
| [Hanoi organizer page](https://eventstem.com/spaceapps.html?lang=vi) | Earlier Nov 8 review reported successful registration, Nov 10 allocation/team-code notice, and **11:00 Hanoi Nov 15 local judging submission**. Fresh direct verification is pending. The Nov 9 web fetch failed and direct Mac access was policy-blocked. Do not bypass that restriction. |
| [SEPA event information](https://sepa.org.vn/en/spaceapps-hanoi-2026) | Retrieved Nov 9: Nov 14–15 event, **23:59 Hanoi Nov 15 global submission**, guides on Nov 13, no early project implementation. Global timing does not extend the reported local cutoff. |
| [NASA Lunar challenge](https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/) | Original returned 502 Nov 9. Recheck when permitted and available before relying on detailed requirements. |
| [Athlone challenge reproduction](https://hackathlone.com/challenges/lunar-landing-site-navigator) | Read Nov 9. Describes comparing sites/dates using Sun/Earth positions, permits precomputed data, treats terrain treatment as advanced, and points to Nov 13 resources. Mirror evidence, not a fresh original-source confirmation. |
| [NASA participant terms](https://www.spaceappschallenge.org/legal/) | Earlier indexed official evidence covers licensing, attribution, privacy and minors. Recheck current terms and final guides. Keep private team material out of any public export; permission to prepare is not permission to publish. |

The Nov 10 notice was not found in bounded Nov 9 mailbox searches; that is an expected future message, not a missed deadline. Corrected registration predates the organizer reminder's Nov 9 07:30 cutoff. Exact private email references and contacts stay outside this repository.

## 2. Mentor request and six-person output plan

**Mentor request:** split work from the challenge, specify individual and team outputs, show morning/afternoon work for both Nov 14–15, identify the day-one deliverable, and review before submission. A demo approximately two days beforehand is optional, not permission for early competition implementation. Source: the two mentor-message images supplied Nov 8, as captured in the delivered four-page `Ke-hoach-NASA-theo-mentor.docx`, read in full Nov 9. A copy is now in sibling `nasa-preparation-deliverables/`; the original delivered document remains in the user's Space. This update reconciles the delivered plan, not a fresh reading of the source screenshots.

The delivered plan proposes Sơn for coordination/integration and leaves the other five owners for the team to decide. It does not establish an accepted assignment. It proposes a two-to-three-site comparison, a runnable end-to-end baseline on day one, independent scientific checks, and a Nov 12 unrelated 60-minute books-list rehearsal. That optional group exercise is separate from the already packaged tally exercise; neither human rehearsal is recorded as completed. Reuse the existing tally bundle for the smallest readiness test rather than rebuilding practice automatically. The group must agree owners, rehearsal time and backup integrator/submitter. Drive coordination-file permissions were configured Nov 10 (section 7); any additional files or changed rights remain separate decisions.

Recommended six work lanes below are planning options, not named assignments. Team members choose owners and backups using their actual abilities. Before Nov 14, only reading, coordination and unrelated practice are allowed.

| Lane, owner to agree | Event-time observable output |
|---|---|
| Integration and release | One runnable integrated version, reviewed changes, combined check results, release identity and exact submission checklist. |
| Scientific sources and data | Traceable sources, units/reference frames/time conventions, documented assumptions and independent sample checks. |
| Calculation or data handling | One bounded input-to-result component matching the agreed interface, with error cases and reproducible tests. |
| Interaction and visualization | A usable view connected to the real agreed result contract, including keyboard/readability checks. |
| Quality and user explanation | Independent end-to-end and edge-case results, understandable limitations, reproducible bug reports. |
| Story, evidence and submission support | Demo narrative, source/rights/AI-contribution ledger, screenshots or recording as allowed, and checked submission fields. |

One person may cover more than one lane; everyone should not build a separate app. The combined output should explain one useful site/date comparison with evidence and limits, plus a reliable demo and complete submission. The team must choose the actual scope after the permitted start.

## 3. Event schedule and stop rules

All times are Hanoi (UTC+07:00). **Use the reported local 11:00 cutoff conservatively until freshly verified.** The 09:00 freeze and 10:30 target below are recommendations, not organizer rules. Do not silently substitute global 23:59.

| Period | Outcome and guardrail |
|---|---|
| Nov 9–12 | Agree owners/availability, review source concepts, and have a teammate open the already-shared pack and run the existing unrelated rehearsal. Nov 10 file permissions are recorded in section 7; actual device access is unverified. Track the Nov 10 notice. No competition code, final visuals or processed submission datasets. |
| Nov 13 | Read released challenge resources and submission/judging guides; verify actual start, local cutoff, mode, team code and pitch requirements. Update the checklist, scope ceiling and fallback. Check runtime, free disk and current AI allowance. |
| Nov 14 morning, after the verified permitted start | Agree one outcome, source/data assumptions and interfaces. Start one complete path from input to visible result. If it is not runnable by early afternoon, remove scope instead of adding parallel features. |
| Nov 14 afternoon/evening | Integrate comparison only after the first path works. Review scientific samples, units, failure cases and the full combined application. Prepare the explanation and submission material alongside the work. Finish with a runnable baseline and planned rest. |
| Nov 15 morning | Freeze features by 09:00 or earlier. Complete final checks, source/privacy/access review, exact submission fields and release recovery. Target local submission by 10:30, retaining a buffer before reported 11:00. |
| Nov 15 afternoon | Only confirmed judging/presentation and separate global-submission requirements before 23:59. Do not assume edits after the local cutoff will be eligible for local judging. |

The previously observed 09:00 Saturday opening and reported 11:00 Sunday local cutoff give approximately 26 hours, not an unconditional 48-hour local build window. No nonstop overnight work or continuous assistant availability is assumed.

## 4. Scientific reading leads, not a validated pipeline

- [JPL Horizons tutorial](https://ssd.jpl.nasa.gov/horizons/tutorial.html): understand observer position, time scale, reference frame, coordinate conventions and units before interpreting geometry. Its geometric horizon is not a terrain-occlusion model.
- [NASA LOLA south-pole products](https://pgda.gsfc.nasa.gov/products/78) and [wider polar products](https://pgda.gsfc.nasa.gov/products/90): inspect product definitions, coverage, resolution, epoch and limitations before selecting a small relevant input. Do not download a bulk archive now.
- [JPL API policy](https://ssd-api.jpl.nasa.gov/doc/index.php): review access/caching restrictions before designing event-time data retrieval. Do not assume a live public endpoint can be embedded directly in the final client.
- Learning distinction: Sun above an ideal horizon is not terrain-resolved illumination or delivered electrical power. Earth visibility is not a validated radio link. Long-term illumination averages are not a date-specific prediction. Track interpolation, terrain and input uncertainty explicitly.
- A small comparison of two or three locations over a bounded interval is a **candidate scope**, not an agreed specification, proven novelty or a completed result. The challenge mirror already points to LOLA. NASA has existing [south-pole sunlight and shadow simulations](https://svs.gsfc.nasa.gov/4930), and [Moon Trek](https://trek.nasa.gov/moon/jpl/config/textAbout.html) has lighting/slope tools. Assess what the team would add rather than claiming the first lunar planner or illumination simulation. No calculation pipeline or submission dataset has been validated here.

For every result, retain `claim / source URL and section / access date / units and time convention / assumption / uncertainty / independent check`. Do not invent safety thresholds or present recommendations as mission-grade operational advice.

## 5. Collaboration and repeatable prompt loop

Use one integrator and, initially, at most two implementation streams. Parallel writers need separate worktrees/checkouts and explicit file ownership. Branch names alone do not isolate files. Shared units, types, interfaces, dependency/configuration changes and all merges require integrator review. A clean merge is not proof of compatible behavior.

1. **Inspect:** read current handoff, status and full existing diff. Confirm runtime, owner, permitted start and latest requirements. Preserve user changes and Safari.
2. **Assign one bounded task:** state the goal, allowed files, source inputs, input/output contract, examples, acceptance tests, exclusions and stop condition. Reuse the latest context rather than resend the whole conversation.
3. **Implement only that task at the permitted time:** keep the change small. Record assumptions and AI contributions; report a blocker rather than bypass permissions or invent results.
4. **Review independently:** read the full diff and rerun both focused and combined checks. Test representative scientific outputs and a real preview. After two unsuccessful review rounds, narrow or reassign; after three failed fixes, stop and name the doubtful assumption.
5. **Integrate and hand off:** update ownership, evidence, Git state and one next action. Back up only through authorized destinations. Never mark an untested step passed or an unpushed edit backed up.

Suggested launch prompt, for event time: “Read AGENTS.md, HANDOFF.md, COMPETITION_RUNBOOK.md and PREPARATION.md section 11. Inspect Git and runtime first. Check the current official start and local deadline, newest guides and agreed owners. Summarize the smallest testable first task, then work within the approved scope after the permitted start. Preserve existing changes, Safari and permission controls. Do not share, publish, spend money or change account access without the necessary authorization.”

Suggested follow-up: “Continue the next bounded task in HANDOFF.md. Allowed files: [paths]. Expected inputs/outputs: [contract]. Accept when: [independent checks]. Exclude: [scope]. Read the full current diff first. Stop for [specific blocker]. Record actual results and leave a concise handoff.”

## 6. Fast mode and intensive event work

**User preference, Nov 9:** use multiple focused prompts in the existing NASA Mac project during the event and use Fast mode despite higher allowance consumption. Prioritize useful implementation, independent testing and review, not token expenditure for its own sake. This is not approval for paid credits, resets, plan upgrades, expanded permissions or early project work.

**Official guidance read Nov 9:** [Speed](https://learn.chatgpt.com/docs/agent-configuration/speed) says supported Fast models use included limits at **2.5 times Standard**, while purchased-credit/Enterprise paid usage is **2 times Standard**. [Developer commands](https://learn.chatgpt.com/docs/developer-commands) documents `/fast` in the Codex composer when the model catalog offers it. At event time, inspect the current mode, use `/` to select `/fast` if available, then confirm the resulting indicator. It is a toggle, so do not invoke it blindly when already on. Recheck current availability and rates then.

**Local capability boundary:** the current message-to-thread tool has no speed parameter; a prose message is not a verified speed-setting action. `codex` was not on this Mac's shell PATH Nov 9. No CLI was installed, no configuration/account setting changed, and Fast mode was not enabled or verified in this update. Use a supported visible control at event time; do not edit global configuration or install tooling merely to force the mode. Do not substitute Ultrafast without a new decision. A later read-only Mac check found the already-bundled CLI at `/Applications/ChatGPT.app/Contents/Resources/codex-cli/bin/codex` (version `0.167.0-alpha.3.2`), despite its absence from PATH. Its plugin inventory/help were inspected; it was not used to change Fast mode, install anything, or bypass denied UI access. `PLUGIN_ROUTING.md` records the existing NASA-relevant capabilities and the unverified automatic-selection test.

Recheck account usage at the start and major milestones. A dated allowance snapshot cannot guarantee the event's budget or uninterrupted two-day execution. Save small verified checkpoints so useful work survives a limit, disconnect or handoff.

## 7. Locations, completed tests and remaining permissions

| Item | Location and verified boundary |
|---|---|
| Canonical Mac project | `/Users/nns/Documents/ChatGPT/nasa space app challange`. Existing Codex project has the same label; existing chat is **Find the last request**. Do not make another project merely to refresh context. |
| Private source backup | [space-apps-2026-preparation](https://github.com/justsomenewbie/space-apps-2026-preparation). Nov 9 content snapshot `7d5c493efbdedb49cbf86522e509087bbf4f4411` contains all four Markdown documents; normal push and matching remote main were verified after explicit user authorization. Repository visibility remains private. This follow-up records the result; inspect Git for later status-note commits. Earlier `5f420c7` restoration evidence remains dated. |
| Private larger assets | [NASA Space Apps 2026 Assets on Drive](https://drive.google.com/drive/folders/1H-D22SV6i1RImJHcWxRqtgK2_TP3tn2S). Owner upload/read/Trash/restore passed Nov 7; Nov 9 metadata was owner-only. The Nov 10 coordination-file readback records five writers plus owner and no public permission. Local evidence is `../nasa-preparation-deliverables/nhom-va-ai-2026-11-10/qa/drive-upload-2026-11-10.json`; PREPARATION section 11 gives its limits. Permissions are configured; teammate-device opening and human rehearsal remain unverified. Do not repeat invitations or change sharing to replay an old test. |
| Local rehearsal and evidence | Sibling `nasa-preparation-deliverables/`: `teammate-rehearsal-2026-11-06.zip`, blank `RESULT_CARD.md` inside its extracted folder, dated check records, pre-edit snapshots and current readiness summary. These are local copies, not an independent off-device backup. |
| Execution | A saved Codex Cloud configuration was ready Nov 6; a fresh cloud task restored the unrelated three-file exercise and passed Node/HTTP. Cloud interactive browser use was not verified. The Mac's separate local browser test passed. The updated pack is now on private `main`; an existing cloud checkout must obtain that version without overwriting its own work. Sibling Mac deliverables are not in Git, and cloud work does not share a filesystem with Antigravity. |

Completed practice evidence includes three Node assertions, local interaction 0 → 1 → 2 → reset → 0 and keyboard activation, exact portable-package hashes, a bounded Antigravity handoff, and a Nov 8 conflict/shared-type integration drill. The latter showed that focused tests and a clean merge can still miss an incompatible shared contract. None establishes a real teammate rehearsal or validates the eventual Lunar build.

Mac snapshot Nov 9 at 09:22 UTC: Data volume about **13 GiB available**, 97% used; preparation checkout about **704 KiB** before this runbook. Historical measurements remain dated evidence. Recheck before large downloads. Keep dependencies/build output on the selected build computer; do not duplicate heavy environments or clean caches without authorization.

**Still requiring explicit decisions or evidence:** owners and scope; actual human rehearsal and teammate-device access to the already-shared pack; current GitHub invitation acceptance; fresh local/official rules and logistics; loading the latest committed pack in cloud and event-time preview/release recovery. Review a separate sanitized export before any public submission. No competition code, external message, teammate invitation, deployment, paid action or public release is authorized merely by this runbook.

**Next action under two minutes:** name one rehearsal volunteer and confirm the integration owner.
