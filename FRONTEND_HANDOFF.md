# Frontend — phiếu chốt để bắt đầu đúng giờ

Cập nhật 11/11/2026. Đây là tài liệu chuẩn bị và các ô cần nhóm xác nhận, không phải thiết kế/UI/code cho bài nộp. Không tự chuyển ô trống thành quyết định đã thống nhất. Sheet lần đọc gần nhất ghi Sơn + Thảo frontend, Chung integration/backend; việc nhận đầu ra cụ thể của các thành viên khác vẫn cần xác nhận. Người dùng làm rõ trong chat ngày 11/11 rằng Sơn phụ trách chuẩn bị/chọn frontend; không chờ Chung chọn framework thay Sơn. Hợp đồng dữ liệu và cách ghép vẫn cần phối hợp với người tích hợp.

### Kiến trúc đề xuất — 12/11

[Sơ đồ và thuyết minh](docs/architecture-proposal/ARCHITECTURE_PROPOSAL.md) trả lời yêu cầu mentor về nền tảng, backend/frontend, tương tác và luồng dữ liệu. Giả định miền lựa chọn hữu hạn: xử lý theo lô → kết quả có phiên bản → frontend; API hosted chỉ thêm khi cần đầu vào mới. Đây chưa phải scope hay hợp đồng đã được nhóm chốt. Khung lý thuyết có nguồn vẫn cần phát triển thành giải thích mô hình/phương pháp kiểm; không coi sơ đồ là đã kiểm khoa học.

### Tầm nhìn người dùng — ghi nhận 11/11, yêu cầu chuẩn bị

**Người dùng xác nhận:** website/app dùng được trên điện thoại và máy tính, có animation và 3D chân thực, cảm giác cao cấp; giao Codex đề xuất các chi tiết còn lại. Đây là định hướng của Sơn, chưa phải phạm vi/thiết kế đã được toàn nhóm chốt. Việc triển khai vẫn theo ranh giới thời gian trong COMPETITION_RUNBOOK.

| Khía cạnh | Định hướng và điều kiện nghiệm thu được đề xuất |
| --- | --- |
| Điện thoại và máy tính | Khuyến nghị một web app responsive mở bằng link. Mọi tác vụ cốt lõi đã được nhóm chốt phải thực hiện được bằng touch và chuột/bàn phím; bố cục được thích ứng, kết quả và giới hạn khoa học nhất quán. Không phụ thuộc hover hoặc thao tác kéo 3D chính xác. |
| 3D chân thực | Mục tiêu là hình khối/bề mặt có chiều sâu và tương tác dễ hiểu. Mức chi tiết phải phù hợp dữ liệu có nguồn và thiết bị thực tế. Cảnh minh họa, ánh sáng trang trí hoặc địa hình giản lược phải được phân biệt với phép tính đã kiểm; vẻ ngoài chân thực không xác nhận độ chính xác hay độ an toàn hạ cánh. |
| Animation | Chuyển động giúp hiểu thay đổi trạng thái/góc nhìn; phản hồi thao tác rõ. Tôn trọng reduced-motion, cho dừng chuyển động kéo dài; người dùng vẫn hoàn thành tác vụ khi giảm/tắt hiệu ứng không thiết yếu. |
| Cảm giác cao cấp | Chữ dễ đọc, khoảng cách và điều khiển nhất quán, tương phản rõ, phản hồi mượt, loading/empty/error/retry được chăm chút. Đây là tiêu chí chất lượng, chưa chốt palette, font, layout hoặc asset cuối. |
| Hiệu năng và độ tin cậy | Điều chỉnh chất lượng đồ họa theo khả năng thiết bị; có chế độ nhẹ và nội dung/kết quả đọc được khi 3D lỗi hoặc không khả dụng. Chọn máy/điện thoại đại diện rồi đo; chưa hứa tốc độ tải, FPS, offline hay tương thích mọi thiết bị. |

**Cách thực hiện được đề xuất sau khi được phép:** hoàn thành một tác vụ có kết quả kiểm chứng được, thêm phần 3D có ích cho tác vụ đó, rồi tinh chỉnh chuyển động và độ hoàn thiện trên thiết bị thật. Codex chủ động chọn workflow/chi tiết phù hợp; nguồn dữ liệu, hợp đồng với backend và phạm vi chung vẫn cần thống nhất với người phụ trách. Chưa chọn thêm thư viện 3D hoặc thay stack đã chuẩn bị.

Kiểm định hướng: UI UX Pro Max được dùng cho hai truy vấn `reduced motion animation` và `touch target mobile`; reviewer độc lập rà ranh giới chuẩn bị, tương thích và cách phân biệt minh họa với khoa học. Nguồn đọc 11/11: [responsive design](https://web.dev/learn/design/), [reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), [WebGL và giới hạn thiết bị](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices). Đây là yêu cầu bằng văn bản; chưa tạo wireframe, UI, model, texture, code hay dataset bài thi và chưa kiểm trên thiết bị.

### Bổ sung định hướng 12/11 — không phải danh sách tính năng bắt buộc

Người dùng giao mục tiêu tổng thể và quyền chọn giải pháp: web/app điện thoại + máy tính, animation, 3D chân thực, cảm giác premium và không khí không gian; gợi ý model thiên thể thật, nhạc và SFX nhưng chưa quyết định phải có tất cả. Codex chủ động đánh giá giá trị/chi phí, chọn workflow đã có và báo bằng chứng, không đợi tên plugin hoặc yêu cầu riêng cho từng bước. Đây vẫn là định hướng của Sơn, chưa thay phạm vi chung của nhóm.

**Khuyến nghị:** ưu tiên tác vụ cốt lõi rõ, responsive, trạng thái lỗi/loading tốt và mô hình Mặt Trăng có nguồn nếu hỗ trợ hiểu kết quả. Dùng animation cho định hướng/phản hồi; giảm hoặc tắt chuyển động trang trí khi người dùng yêu cầu. Không coi nhiều hiệu ứng, camera tự quay, glow hay particles liên tục là điều kiện để có cảm giác cao cấp.

Âm nhạc/SFX là phần thêm sau khi lõi hoạt động: mặc định yên lặng, người dùng bật rõ ràng, điều khiển music/SFX riêng và thông tin không chỉ truyền bằng âm thanh. Browser có thể chặn autoplay; xử lý trạng thái đó thay vì yêu cầu đổi cài đặt. Nguồn: [MDN autoplay](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay), [W3C Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html). Đây là đề xuất, chưa chọn track hoặc tạo audio cuối.

[NASA CGI Moon Kit](https://svs.gsfc.nasa.gov/4720/) cập nhật 09/01/2026 có color map 2K nhỏ để tham khảo cho hình ảnh. NASA nói rõ bản đồ được tối ưu thẩm mỹ; vùng cực có phần bù từ albedo độ phân giải thấp và sửa điểm khuyết. Không dùng vẻ ngoài model để xác nhận độ dốc/ánh sáng/an toàn tại điểm hạ cánh; phép tính vẫn cần nguồn khoa học và hợp đồng dữ liệu riêng. Kiểm quyền từng texture/model/track/SFX theo [NASA media guidance](https://www.nasa.gov/nasa-brand-center/images-and-media/), không suy ra quyền cho nội dung bên thứ ba.

Chưa thấy thiếu công cụ lõi: React/TypeScript/Vite, Three.js, workflow thiết kế và QA hiện có đủ để bắt đầu trong phạm vi đã được phép. Khoảng trống là kiểm điện thoại thật, dữ liệu/asset thực, âm thanh/quyền sử dụng và ngân sách hiệu năng của sản phẩm. [glTF Transform](https://gltf-transform.dev/) là lựa chọn tối ưu hóa có điều kiện nếu asset thật cần; chưa cài/chạy hoặc mặc định thêm dependency. Nghiên cứu có nguồn và giới hạn: sibling `3d-endurance-2026-11-12/research/VISION_AND_TOOL_GAPS.md`. Chưa tạo UI/art, model hoặc dataset bài thi.

### Mục tiêu public 24/7 — bổ sung 12/11

Người dùng muốn website/app truy cập được liên tục và không phụ thuộc Mac cá nhân bật cả ngày. Khuyến nghị triển khai frontend/assets lên dịch vụ hosting; browser của từng người dùng xử lý giao diện, animation và WebGL 3D. Backend lưu dữ liệu hoặc tính toán chung, nếu cần, chạy trên hạ tầng hosted tương ứng; không biến Mac thành máy chủ public. Mac dùng phát triển, kiểm thử và phát hành. Đây là phương án kiến trúc để thống nhất cùng bên tích hợp, chưa chọn nhà cung cấp hoặc triển khai.

Tính sẵn sàng 24/7 là mục tiêu, không phải cam kết uptime 100%. Chọn dịch vụ theo tác vụ thật, traffic, giới hạn compute/storage/egress, ngân sách và cách xử lý lỗi API; chỉ thêm database/queue/worker khi có nhu cầu được xác nhận. Không dùng kết quả GPU test của Mac để suy ra năng lực server hoặc hiệu năng điện thoại. Nguồn nền tảng: [MDN client/server](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview), [Vercel Functions](https://vercel.com/docs/functions). Cloudflare hiện hướng dự án mới sang [Workers](https://developers.cloudflare.com/workers/static-assets/) thay vì mặc định Pages; đây là tài liệu tham khảo, chưa chốt nhà cung cấp, gói, tài khoản hay chi phí.

## 1. Chốt trong một cuộc trao đổi ngắn

| Mục | Câu trả lời của nhóm / người xác nhận |
| --- | --- |
| Source chính: URL repo, thư mục frontend, branch nền, người ghép cuối | URL/branch chưa có trong nguồn đã đọc. Khuyến nghị dùng thư mục `frontend/` trong repo tích hợp chung, không tạo repo riêng chỉ để chuẩn bị. Sơn chọn cách làm frontend; thống nhất đường bàn giao với người ghép. |
| Stack và phiên bản: framework, package manager, lockfile, Node, lệnh dev/check/build/preview | Mặc định Codex chuẩn bị cho phần của Sơn: React + TypeScript + Vite, npm và Node 24 LTS có sẵn. Đây là lựa chọn chuẩn bị frontend, không tự áp đặt stack backend hoặc ghi thành đồng thuận toàn nhóm. Bản thử stock riêng và kết quả thực tế được ghi ở mục 6. |
| Một luồng người dùng đầu tiên và tiêu chí hoàn thành, sau khi được phép bắt đầu | Chưa chốt; không tạo layout/logic Lunar trước giờ được phép. |
| Ai cung cấp kết quả, ai review khoa học, ai QA frontend; thứ tự bàn giao | Chưa xác nhận; phân công ghi trong Sheet không thay thế việc nhận bàn giao. |
| Mốc tích hợp đầu tiên, máy/người dự phòng và cách chạy demo nếu mạng lỗi | Chưa xác nhận; không hứa ứng dụng dùng được offline nếu chưa kiểm. |

Tin nhắn nháp, **chưa gửi**: “Chung ơi, phần frontend Sơn chuẩn bị React + TypeScript + Vite cùng Thảo. Khi có repo chung, mình dự kiến để trong `frontend/`; mình với Chung chốt đường bàn giao, ví dụ response kèm đơn vị/thời gian và mốc ghép thử nhé. Trước giờ được phép bắt đầu mình chỉ luyện ngoài bài thi; chưa làm UI Lunar.”

## 2. Phiếu nhận dữ liệu — điền cùng người cung cấp, không tự bịa schema

Nguồn và phần mã có thể tham khảo đã rà ngày 11/11 trong [DATA_PREPARATION.md](DATA_PREPARATION.md). Đây là danh mục chuẩn bị; các ô bàn giao dưới đây vẫn cần người cung cấp và người kiểm xác nhận.

| Nội dung phải rõ trước khi tách việc | Ghi nhận |
| --- | --- |
| Tên/version của hợp đồng; người sở hữu; URL/path và cách lấy dữ liệu; giới hạn truy cập | Chưa điền |
| Từng trường: tên, kiểu, bắt buộc/tùy chọn, đơn vị, hệ quy chiếu, mốc/thang thời gian, miền giá trị | Chưa điền; frontend không tự suy ra đơn vị hay ý nghĩa khoa học. |
| Giá trị 0, null, thiếu trường, rỗng, dữ liệu một phần và dữ liệu sai được phân biệt thế nào | Chưa điền |
| Ví dụ thành công, rỗng, lỗi; mã lỗi và khả năng thử lại; request cũ khi người dùng đổi lựa chọn | Chưa điền; ví dụ bài tập counter không phải hợp đồng NASA. |
| Nguồn/phiên bản/thời điểm, giả định/độ bất định, người kiểm độc lập, dữ liệu fixture được phép dùng | Chưa điền; nhãn dữ liệu giả phải rõ và không được trình bày như kết quả thật. |

Frontend xác nhận hiểu bằng cách giải thích lại một ví dụ đầu vào → đầu ra; người cung cấp xác nhận bằng ví dụ và kiểm tra thực tế. Khi hợp đồng đổi, báo người tích hợp và cập nhật cả caller/test; không tự vá số liệu cho khớp hình.

## 3. Điều kiện nhận một phần frontend sau thời điểm được phép

1. Một luồng nhỏ chạy từ đầu vào đến kết quả thật theo hợp đồng; có loading/empty/error/retry, xử lý hủy/thay request và không hiển thị kết quả cũ sai ngữ cảnh.
2. Label/bàn phím/focus dùng được; thông báo trạng thái rõ; kiểm tiếng Việt, chuỗi dài, giá trị biên, màn hình 320 CSS px và tăng chữ 200%. Không suy từ kiểm tự động ra chứng nhận accessibility.
3. Chạy lệnh check/build của repo và mở bản preview của chính build đó; kiểm URL trực tiếp/reload/tài nguyên/base path theo host thực tế. Không coi dev server chạy được là production build đã đạt.
4. Reviewer đọc diff đầy đủ, kiểm tích hợp với backend, ghi kết quả/giới hạn/AI contributions; mỗi checkout một người ghi. Chỉ merge/publish trong phạm vi đã được giao và được phép.
5. Bàn giao gồm commit hoặc diff rõ ràng, file được phép thay, hợp đồng/version, lệnh chạy, kết quả kiểm và một việc tiếp theo. Không ghi “done” nếu chỉ có ảnh/mock hoặc report của worker.

### QA website và SEO — ghi nhận 11/11, thực hiện trên sản phẩm thật sau giờ được phép

Ưu tiên do Codex đề xuất từ checklist 20 mục người dùng gửi; **không phải tiêu chí chấm thi đã được BTC xác nhận**. Chỉ ghi kế hoạch ở giai đoạn này:

1. **Demo dùng được:** kiểm mobile, bàn phím/focus, kết quả đọc được, liên kết và trạng thái loading/empty/error/retry. Ghi rõ URL/build, thiết bị và kết quả thực tế.
2. **Giải thích khoa học:** hiển thị nguồn, đơn vị, giả định và giới hạn; biểu đồ/bản đồ quan trọng có mô tả hoặc bảng tương đương. Không tự đặt ngưỡng an toàn hay nhãn dữ liệu đã kiểm.
3. **Khi có bản public:** kiểm HTTPS thực tế, title/description, preview khi chia sẻ và quyết định trang nào được index. Giữ noindex có chủ đích; sitemap/robots/canonical/schema chỉ thêm khi phù hợp. Không đổi stack chỉ để đạt checklist.

Nếu duy trì website public sau cuộc thi, kiểm nội dung crawler nhìn thấy ở các route JavaScript và dùng Search Console khi cần theo dõi. Một điểm Lighthouse không chứng minh Core Web Vitals ngoài thực tế; không thêm llms.txt chỉ để SEO Google.

Nguồn đã đọc 11/11: [Google SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [W3C text alternatives](https://www.w3.org/WAI/tutorials/images/), [Web Vitals](https://web.dev/articles/vitals), [llms.txt](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide). Mac dùng skill `web-launch-review` qua [PLUGIN_ROUTING.md](PLUGIN_ROUTING.md); cloud dùng checklist trong mục này nếu không có skill. Chưa có website Lunar được audit.

## 4. Luyện ngoài bài thi — đã có, không cần cài thêm framework

Bản dùng chung: [practice-tally/README.md](practice-tally/README.md). Bản gốc/bằng chứng Mac vẫn ở sibling `nasa-preparation-deliverables/frontend-completion-2026-11-11/`. Bài này mở rộng bản sao counter cũ để học async HTTP và phục hồi lỗi, không phải component dự thi. Bản gốc giữ nguyên. Antigravity review kế hoạch hẹp; Codex kiểm độc lập bằng trình duyệt và reviewer riêng.

Trên máy thứ hai, dành khoảng **10 phút**: chạy bài tập → thử tải/lỗi/thử lại → dùng bàn phím → đổi kịch bản lúc đang tải → ghi OS/browser/lệnh/kết quả. Người đã làm: **chưa có bằng chứng người thật/thiết bị thứ hai**. Không thay ô này bằng việc một agent khác chạy cùng Mac.

## 5. Còn mở

Source/hợp đồng và một lần luyện của đồng đội; build/preview/release trên sản phẩm thật; tài nguyên/thể lệ chính thức mới trước giờ thi. VoiceOver, thiết bị cảm ứng thật và zoom native của browser chưa được kiểm. Không có app Lunar, dữ liệu khoa học hay bản deploy được tạo ở giai đoạn chuẩn bị này.

## 6. Stack frontend đã thử trên Mac — 11/11

Codex chọn mặc định **React + TypeScript + Vite, npm, CSS thường** cho phần frontend của Sơn; chưa thêm router, UI kit, chart/map library hay dịch vụ backend khi chưa có nhu cầu cụ thể. [Tài liệu React](https://react.dev/learn/build-a-react-app-from-scratch) và [Vite](https://vite.dev/guide/) có hướng dẫn template `react-ts`. Đây là lựa chọn chuẩn bị, không phải thiết kế hay mã Lunar được làm sớm.

| Hạng mục | Bằng chứng thực tế trên Mac này |
| --- | --- |
| Môi trường | Node `24.22.2`, npm `11.19.1`, Python `3.14.6`, Git `2.51.2`; `df -h .` báo 184 GiB trống trước cài bài thử, thay cho các snapshot thiếu đĩa cũ. Không đổi Node mặc định hoặc shell profile. |
| Bản thử không liên quan NASA | `../nasa-preparation-deliverables/readiness-gaps-2026-11-11/stack-practice/`; template `create-vite@9.0.7/react-ts`. Cả 9 file `src/` và `public/` khớp template; chỉ pin dependency, chưa viết UI/logic riêng. Thư mục thử gồm dependencies/build chiếm khoảng 118 MiB theo `du -sh`. |
| Phiên bản đã chạy | React/React DOM `19.2.8`, Vite `8.3.8`, TypeScript `6.0.3`, plugin React `6.3.0`, ESLint `10.14.0`; có `package-lock.json`. Lần cài đầu lỗi `scheduler` khi range React trôi tới `19.3.1`; truy vấn registry lại rồi pin React/DOM cùng `19.2.8` và cài lại thành công. Lượt sửa bảo mật tiếp theo dùng pin có phạm vi như mô tả dưới, không dùng `--force`. |
| Kiểm | `npm run lint` và `npm run build` qua. Preview **bản production** tại loopback: đúng trang/nội dung, click 0→1, Space 1→2, reload về 0, 320 px không tràn ngang và nút dùng được; không có lỗi console/page/request. Có 6 nhóm assert và ảnh 1280/320 px; Codex đã xem hai ảnh. |
| Sửa dependency và giới hạn | Audit đầy đủ sau sửa báo 0: pin `minimatch 11.0.7` dưới đúng ba consumer/version hiện tại, giữ nguyên linter. `check:tooling` kiểm các API/glob đang dùng, ignore và việc phát hiện lỗi ở file TS lồng thư mục. Đây là ngoại lệ đã kiểm qua major range, không phải upstream đã bảo đảm tương thích mọi pattern. Chưa kiểm frontend Lunar, API thật, deploy, offline, máy đồng đội, screen reader hay native zoom; audit không phải chứng nhận bảo mật. |

Chạy lại **bài thử stock**, không tạo bài nộp (hai lệnh npm chạy từ thư mục thử):

```sh
cd '/Users/nns/Documents/ChatGPT/nasa-preparation-deliverables/readiness-gaps-2026-11-11/stack-practice'
env PATH="/Users/nns/.local/share/frontend-runtime/node-v24.22.2-darwin-arm64/bin:$PATH" npm run build
env PATH="/Users/nns/.local/share/frontend-runtime/node-v24.22.2-darwin-arm64/bin:$PATH" npm run preview -- --host 127.0.0.1 --port 4177 --strictPort
```

Mở `http://127.0.0.1:4177/`, dừng bằng Ctrl+C. Preview chỉ phục vụ build đã có; chưa deploy. Bằng chứng cùng thư mục cha: `stock-source-check.json`, `stack-browser.json`, ảnh `stack-desktop.png`/`stack-mobile.png`, `audit-before.json`, `audit-production.json`; `relay-run/review.json` ghi phần review chuẩn bị của Antigravity và kiểm độc lập. Browser plugin không có trong catalog; dùng Playwright/Chromium đã có, không cài thêm browser. Script smoke dùng đường cache Playwright của Mac, phải tìm lại nếu cache di chuyển; không hứa chạy ngay trên máy khác/cloud.

**Bản dependency có thể tái tạo trên máy khác:** [practice-stack-lock](practice-stack-lock/README.md) chứa manifest, lock và checker sau sửa; không chứa app, assets, `node_modules` hoặc `dist`. Làm theo recipe để dựng mới template stock `create-vite@9.0.7` ở ngoài repo, chép ba file rồi chạy `npm ci` và các check. Bằng chứng trước sửa ở đoạn trên là lịch sử; lượt sửa tiếp theo ở sibling `dev-tool-fix-2026-11-11/` lưu audit mới và kiểm cài sạch. Chỉ gỡ các override khi consumer stable dùng bản vá và đã kiểm lại.

**Kiểm độc lập sau sửa:** dựng stock trong thư mục mới, chép đúng ba file, `npm ci`, checker, lint/build và hai audit đầy đủ/production-only đều qua; cả hai audit trả 0 từ registry. Bản production mới qua click, Space, màn 320 px và kiểm lỗi console/page; 9 file source/assets vẫn khớp stock, 162 package đã cài khớp lock. Recipe dùng target tương đối trong thư mục tạm vì create-vite bản này xử lý target tuyệt đối sai. Hai request audit production của coordinator từng lỗi kết nối/DNS được giữ là lỗi, không đổi thành pass; kết quả 0 ở đây là hai request mới của reviewer. Đây vẫn chỉ là bài luyện trên Mac.

**Cloud đã kiểm ngày 11/11:** checkout hiện có `/workspace/space-apps-2026-preparation`, nhánh `work`, fast-forward tới checkpoint `8d2f61e`; coordinator so độc lập đủ 21 blob với Mac, ba file tally scratch cũ không đổi và checkout sạch. Linux x86_64 dùng Node `24.22.1`, npm `11.9.0`, Python `3.12.14`: 3 assertion tally, dựng stock mới, `npm ci`, checker, lint/build, audit đầy đủ và production-only đều qua; cả hai audit 0. Chín file stock và ba file đầu vào chép từ repo vẫn nguyên byte. Bản Browser tích hợp thiếu `node_repl`; fallback Python Playwright `1.62.0` và Chromium `155.0.8059.79` đã có chạy đủ sáu nhóm kiểm production: trang/nội dung, click, Space, reload, 320 px và lỗi page/console/request. Không cài thêm; preview riêng đã dừng và kiểm port đóng. Lỗi sandbox ban đầu được giữ riêng; đường xin quyền theo command được hỗ trợ đã chạy thành công, không đổi chính sách/quyền mặc định.

Bằng chứng cloud ở `/workspace/scratch/stack-verification-cgt9f487/` (gồm `verification.json`, `commands.json`, `checkout-blobs.txt`, `qa/browser-results.json`); bản coordinator kiểm ở sibling Mac `cloud-frontend-check-2026-11-11/`. Đây là kiểm trên runtime Linux cụ thể, không phải đảm bảo mọi cloud/thiết bị, tích hợp backend, khoa học, deploy hay offline. Bản ghi tài liệu này đi sau checkpoint đã kiểm; không đổi code/lock và không cần lặp lại các check đó khi chỉ fast-forward bản ghi.

Sau giờ được phép, đọc lại source/branch thật, tạo scaffold mới từ template đã kiểm **trong phạm vi việc được giao**, giữ nguồn/giấy phép và chạy check/build/preview trên repo thật. Không chép bài thử thành bằng chứng rằng Lunar đã làm xong. Trước đó chỉ dùng repo chuẩn bị này và bài thử riêng; chưa tạo thêm repo frontend hoặc thay quyền truy cập.

**Việc dưới 2 phút:** dùng tin nhắn nháp ở mục 1 để lấy đường bàn giao và một ví dụ response; không cần hỏi Chung chọn framework thay Sơn.


## 7. Safari và 3D chân thực — bài thử riêng, 12/11

**Đã kiểm trên Mac:** Safari thật `26.6.2` qua safaridriver và Chromium `158` qua Playwright sẵn có. Bài thử phòng trưng bày thiết bị âm thanh dùng glTF BoomBox có nguồn/giấy phép, không liên quan Lunar. Mức cao: 144 bản sao dùng chung geometry/textures, bốn texture 2K, ánh sáng phản chiếu và shadow map 4096px; 1.738.370 tam giác/frame tính cả shadow pass, 289 draw calls.

Mỗi browser chạy ba mẫu 10 giây ở mức desktop và cao sau warm-up. Mức cao ghi nhận khoảng 60 FPS Safari / 120 FPS Chromium; p95 thời gian frame 18 ms / 9,2 ms. Đây là nhịp requestAnimationFrame đo trên Mac này, không chứng minh Chromium nhanh gấp đôi: cadence và kích thước buffer khác nhẹ. Safari kiểm viewport 1440×900 và 448×844; Chromium thêm 390×844. Không coi viewport là điện thoại thật.

Đã sửa/kiểm: camera ôm đủ mô hình ở màn hẹp, pan/orbit/reset/pause, tắt control khi loading/lỗi/mất context, khôi phục reflection/shadow sau hai lần context loss, thông báo lỗi tải asset 503 và fallback WebGL mô phỏng. Chromium kiểm reduced-motion bằng emulation; chưa đổi/kiểm lựa chọn giảm chuyển động của macOS trong Safari. Người dùng bật Allow Remote Automation; không cần bật thêm lựa chọn Safari. Test dùng Automation window riêng, giữ bảo vệ browser; gstack vẫn điều khiển Chromium.

Bằng chứng Mac: sibling `nasa-preparation-deliverables/safari-3d-readiness-2026-11-12/README.md`, `verification.json`, ảnh và receipt trong `safari/`, `chromium/`, `review/`; catalog `SAFARI_3D_VERIFICATION.json`. Tài liệu này không mang demo/tool sang cloud. Chưa kiểm iPhone/Android thật, nhiều asset riêng gây áp lực bộ nhớ GPU, nhiệt/pin dài hạn, WebGPU hoặc app cuối. Đọc routing để chọn lại workflow và kiểm trên asset/thiết bị thật khi được phép xây dựng.

**Bổ sung 12/11:** timeout reduced-motion đã được tái hiện và tách được tương tác giữa polling đọc MediaQueryList và emulation Chromium. Sửa harness để chờ trạng thái control, rồi kiểm preference và animation thực; toàn bộ 10 nhóm correctness đã qua, không tăng timeout hoặc sửa logic app. Bằng chứng mới: sibling `3d-endurance-2026-11-12/media/resolution.json`. Các lỗi cũ vẫn giữ nguyên; chưa xác định nguyên nhân nội bộ Chromium hoặc suy rộng sang version khác.


## 8. Kiểm lâu hơn và bộ nhớ GPU — 12/11

Safari thật 26.6.2 và Chromium 158 mỗi browser qua 20 mẫu 30 giây, tổng hơn 600 giây ở cảnh 144 model. Probe riêng upload/readback tối đa 512 MiB texture RGBA8; Safari giữ mức này 510,066 giây, Chromium 390,094 giây do tạm hoãn allocation khi host báo áp lực bộ nhớ. Cả hai qua ba vòng 128/256/512 MiB → release, cuối cùng 0 texture test. Đây là payload yêu cầu, không phải đo VRAM vật lý; texture thử không thay thành 144 asset PBR riêng.

Safari 59,998–60,025 FPS, p95 từng mẫu 17–18 ms. Chromium 95,35–120,23 FPS toàn lượt, có frame 1.111,8 ms ở giai đoạn pressure warning; các mẫu giữ 512 MiB sau đó 119,97–120,23 FPS. Không xếp hạng browser: cadence, buffer và điều kiện host khác nhau. Tất cả 104 mẫu telemetry của hai lượt báo thermal nominal; không đo nhiệt độ °C. Không có lỗi GL/app ghi nhận. Root đọc kết quả, ảnh đầu/cuối và chạy lại 10 nhóm correctness; review độc lập kiểm số liệu hai browser và 5 nhóm vòng đời texture.

Bằng chứng sibling `3d-endurance-2026-11-12/README.md`/`verification.json`; catalog ENDURANCE_VERIFICATION.json. Chưa kiểm điện thoại thật, 24 giờ liên tục, VRAM saturation, uptime/server load hoặc sản phẩm cuối. Các kết quả cũ được giữ nguyên; đây là bổ sung có phạm vi, không phải chứng nhận mọi cảnh 3D.

## 9. Kế hoạch hosting — nghiên cứu 12/11

[HOSTING_PLAN.md](HOSTING_PLAN.md) lưu đề xuất mới nhất: Cloudflare Workers Static Assets + R2 cho frontend/asset; Workers Paid $5/tháng khi cần API nhỏ; Railway Pro Singapore tối thiểu $20 gồm usage nếu cần backend Python dùng chung; Supabase Pro từ $25 chỉ khi cần tài khoản/dữ liệu lưu. Ngân sách khởi điểm đề xuất $5–10/tháng hoặc $25–35 với backend nhỏ, trước thuế/domain; không phải trần hóa đơn hoặc năng lực đã kiểm. Phiên bản hoàn toàn static có thể dùng hosting miễn phí trong hạn mức.

Nguồn chính thức, hạn mức, ví dụ tính giá, phí thành viên, điều kiện media/CDN, giới hạn chi tiêu và kiểm triển khai đều nằm trong kế hoạch. Đây là khuyến nghị của Codex theo mục tiêu người dùng, chưa phải quyết định chung của nhóm. Chưa mua gói/domain, kết nối tài khoản hoặc deploy. Khi bắt đầu xây dựng, đọc kế hoạch rồi chọn đúng tầng theo data contract với Chung; cloud hosting giúp app không phụ thuộc Mac bật liên tục. Bằng chứng nghiên cứu Mac: sibling `hosting-research-2026-11-12/`.
