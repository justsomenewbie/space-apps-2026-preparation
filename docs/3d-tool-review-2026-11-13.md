# Five repositories and 3D plugin readiness

Reviewed 13 November 2026. Recommendations separate Moon Plan B needs from future uses. No listed repository was installed or executed; this is preparation, not product implementation.

| Candidate | Verified purpose/rights | Recommendation and future use |
|---|---|---|
| [Estella](https://github.com/esengine/estella) | TypeScript/C++/WebAssembly 2D/3D game engine. [Pinned licensing statement](https://github.com/esengine/estella/blob/ded7dada5bfffa8a0e8083c63e727b29d3feb240/BUSINESS_MODEL.md) separates Apache-2.0 engine from proprietary editor; Spine needs separate licensing. | Defer for the selected React/Vite app. Retain for future games/simulations where a full engine/editor helps; exact editor/asset rights need checking. |
| [MOTH](https://github.com/Gwinhen/MOTH) | MIT neural-network hardening research. README specifies Python 3.6.9 and TensorFlow 1.14/Keras 2.3 or PyTorch 1.7; [PyTorch entrypoint](https://github.com/Gwinhen/MOTH/blob/main/src_torch/main.py) selects CUDA. | Defer: not a 3D tool or general website scanner. Future adversarial-robustness research needs a suitable historical environment or modernization; Mac readiness untested. |
| [3DCodeVerse](https://github.com/gaoypeng/3dcodeverse/blob/69c1cb98035cf947fabf5e14c69cf6fa5f367242/README.md) | Agent workflow/harness for Blender, Three.js, CAD, URDF and shader generation/checks. Apache-2.0 code; datasets separately CC-BY-NC-SA. | Strongest additional 3D QA candidate: geometry measurements, multiview renders and structured review. Keep for a selective unrelated trial; existing Blender/Three.js/Diorama cover basic needs. Not proof of lunar accuracy. |
| [open-slide](https://github.com/open-slide/open-slide) | MIT React presentations. [Export docs](https://open-slide.dev/docs/core-feature/export) support HTML/PDF and image-only PPTX, not native editable PPTX; PDF export unsupported in Safari. | Optional future code-authored technical decks. Existing deck tools suffice. Review scaffolded skills/instructions before admission. |
| [GNOME Boxes](https://github.com/GNOME/gnome-boxes) | Linux VM manager; [guest 3D acceleration](https://apps.gnome.org/Boxes/) is virtualization, not model creation. [Build metadata](https://github.com/GNOME/gnome-boxes/blob/main/meson.build) declares LGPLv2+. | Defer on this Mac. Future Linux VM testing/snapshots; native Mac readiness not established. GitHub is a mirror. |

3DCodeVerse's [pinned install guide](https://github.com/gaoypeng/3dcodeverse/blob/69c1cb98035cf947fabf5e14c69cf6fa5f367242/harness/docs/INSTALL.md) calls for Python 3.13, Node >=20.6, Chrome and Blender 5.2 LTS for Blender tracks. Existing Blender here is 4.5.16. Its [pinned installer](https://github.com/gaoypeng/3dcodeverse/blob/69c1cb98035cf947fabf5e14c69cf6fa5f367242/harness/setup.sh) installs Python/npm dependencies and Chrome, with selectable stages/extras. A stale cached branch result differed; use the exact revision. Any later trial needs SkillGuard, dependency/browser-protection review and an unrelated fixture outside both repositories. No default installer, browser/model or dataset download ran here.

## Verified host/session scope

Used the existing visual-tools workflow. Native Blender MCP initially could not connect because the on-demand bridge was stopped. The documented isolated launcher started a factory scene; native addon-status and scene reads succeeded: Blender 4.5.16 LTS, matching protocol 15, telemetry false, asset libraries and generators off. The temporary session was closed through Blender's normal menu and port 9876 checked free. MCP rejected Python process termination in safe mode; no safeguard was disabled. This checks connection/scene reads, not a new render, export or science result.

Installed package metadata confirms Three.js 0.187.0 and GSAP 3.15.1. HyperFrames, Remotion, ManimGL, FFmpeg and Diorama retain earlier evidence in their local guides; those tests were not rerun. Do not add every renderer to the product.

## Plugin selection and access limits

**Recommendation: no additional plugin is currently required for the planned web 3D capability.** This is scoped to existing tools, not an exhaustive marketplace audit. Plugin search and a read-only fal model search returned “not available to the model” despite exposed metadata. Computer Use cannot access Codex's UI; no install/connect API is exposed. The user was asked for the names visible beside “+”; other options remain unreviewed.

Local cached manifests identify **Build Web Data Visualization** (Three.js guidance, already in the session catalog), **Remotion** (existing route), **Visualize** (a live-disabled cache variant is not availability proof), and **NVIDIA** (future CUDA/Omniverse/robotics guidance, not an installed NVIDIA runtime). These names support comparison, not blanket installation. NVIDIA may serve future simulation on a supported host; it is not needed for this static app.

Blender exposes optional Meshy/Tripo/Hunyuan3D/Hyper3D and asset libraries, all off in the fresh check. Generation can incur charges; illustrative output is not measured lunar terrain. No provider account, spending or permissions were activated. Runtime compatibility, full security review and asset-specific rights remain separate checks.

Keep Horizons → offline Python → versioned JSON → static React/Vite, midnight November 14 Hanoi, comparison/timeline priorities and English-first product/rights/AI rules. Used primary GitHub/docs research, independent reviewers, visual-tools/Ponytail, Blender MCP, Context Mode, chat tools and CUA cleanup. Release evidence belongs outside tracked sources in sibling `nasa-preparation-deliverables/3d-tool-review-2026-11-13/FINAL_VERIFICATION.json`.
