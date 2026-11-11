# Frontend — phiếu chốt để bắt đầu đúng giờ

Cập nhật 11/11/2026. Đây là tài liệu chuẩn bị và các ô cần nhóm xác nhận, không phải thiết kế/UI/code cho bài nộp. Không tự chuyển ô trống thành quyết định đã thống nhất. Sheet lần đọc gần nhất ghi Sơn + Thảo frontend, Chung integration/backend; việc nhận đầu ra cụ thể của các thành viên khác vẫn cần xác nhận. Người dùng làm rõ trong chat ngày 11/11 rằng Sơn phụ trách chuẩn bị/chọn frontend; không chờ Chung chọn framework thay Sơn. Hợp đồng dữ liệu và cách ghép vẫn cần phối hợp với người tích hợp.

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

Sau giờ được phép, đọc lại source/branch thật, tạo scaffold mới từ template đã kiểm **trong phạm vi việc được giao**, giữ nguồn/giấy phép và chạy check/build/preview trên repo thật. Không chép bài thử thành bằng chứng rằng Lunar đã làm xong. Trước đó chỉ dùng repo chuẩn bị này và bài thử riêng; chưa tạo thêm repo frontend hoặc thay quyền truy cập.

**Việc dưới 2 phút:** dùng tin nhắn nháp ở mục 1 để lấy đường bàn giao và một ví dụ response; không cần hỏi Chung chọn framework thay Sơn.
