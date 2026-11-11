# Frontend — phiếu chốt để bắt đầu đúng giờ

Cập nhật 11/11/2026. Đây là tài liệu chuẩn bị và các ô cần nhóm xác nhận, không phải thiết kế/UI/code cho bài nộp. Không tự chuyển ô trống thành quyết định đã thống nhất. Sheet lần đọc gần nhất ghi Sơn + Thảo frontend, Chung integration/backend; người nhận việc thực tế vẫn cần xác nhận.

## 1. Chốt trong một cuộc trao đổi ngắn

| Mục | Câu trả lời của nhóm / người xác nhận |
| --- | --- |
| Source chính: URL repo, thư mục frontend, branch nền, người ghép cuối | Chưa xác nhận |
| Stack và phiên bản: framework, package manager, lockfile, Node, lệnh dev/check/build/preview | Chưa xác nhận. Node 24 LTS đã có riêng trên Mac của Sơn; chưa phải lựa chọn bắt buộc của nhóm. |
| Một luồng người dùng đầu tiên và tiêu chí hoàn thành, sau khi được phép bắt đầu | Chưa chốt; không tạo layout/logic Lunar trước giờ được phép. |
| Ai cung cấp kết quả, ai review khoa học, ai QA frontend; thứ tự bàn giao | Chưa xác nhận; phân công ghi trong Sheet không thay thế việc nhận bàn giao. |
| Mốc tích hợp đầu tiên, máy/người dự phòng và cách chạy demo nếu mạng lỗi | Chưa xác nhận; không hứa ứng dụng dùng được offline nếu chưa kiểm. |

Tin nhắn nháp, **chưa gửi**: “Chung ơi, để Sơn/Thảo chuẩn bị phần frontend: nhóm chốt giúp repo/thư mục, framework + Node/package manager, ai bàn giao dữ liệu và một mốc ghép thử đầu tiên nhé. Trước giờ được phép bắt đầu mình chỉ luyện ngoài bài thi; chưa làm UI Lunar.”

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

Stack/source/hợp đồng và một lần luyện của đồng đội; build/preview/release trên stack được chọn; tài nguyên/thể lệ chính thức mới trước giờ thi. VoiceOver, thiết bị cảm ứng thật và zoom native của browser chưa được kiểm. Không có app Lunar, dữ liệu khoa học hay bản deploy được tạo ở giai đoạn chuẩn bị này.

Việc dưới 2 phút: điền dòng “Source chính” và “Stack” ở mục 1 nếu nhóm đã chốt; nếu chưa, dùng tin nhắn nháp trên để hỏi.
