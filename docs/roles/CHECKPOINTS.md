# Chốt trước khi nhận task

**Trước khi làm một task, cần biết đầu ra mình nhận làm, người nhận/kiểm đã đồng ý, hạn bàn giao và đúng phiên bản đầu vào.** Dùng [mẫu bàn giao chung](README.md#mẫu-bàn-giao-chung); mỗi ô chưa có bằng chứng giữ là “chưa xác nhận”. Trang này là checklist theo vai, không phải bảng phân công mới hoặc trạng thái live thay Sheet.

Cập nhật 13/11/2026 sau bản rà repo `295f4ed`. Hướng Moon Plan B, hai phép so/timeline, Horizons, dữ liệu tái hiện được, JSON có phiên bản và Next.js + Tailwind đã có trong [kế hoạch §2–5](../../KE_HOACH_NHOM.md). Hướng được chọn, con người nhận việc và kết quả đã kiểm là ba việc riêng. Những thông số 72 giờ, bước 15 phút, H = 3/6/12 giờ là ví dụ, không phải mặc định được duyệt.

## 1. Nhóm có thể xác nhận hôm nay

Ghi câu trả lời thực vào [Sheet hiện có](https://docs.google.com/spreadsheets/d/1zqhG7NVRH-TdO6fr6e0n74d6S2r1--ji2UuySlJGZeA), kèm ngày giờ/bằng chứng hoặc link handoff. Không chép thông tin tài khoản, chỗ ở riêng hoặc bằng chứng cá nhân lên repo công khai.

| Cần chốt | Vai theo dõi | Đóng khi có gì |
|---|---|---|
| Task đầu tiên: ai nhận, ai nhận đầu ra, ai kiểm, hạn và đầu vào cụ thể | Integration + vai làm/nhận | Các bên xác nhận cùng một mô tả/phiên bản; deadline theo giờ Hà Nội, reviewer và bên nhận biết cách kiểm |
| QA khoa học, QA trải nghiệm và tổng hợp lỗi | Integration + Sources + QA + Frontend | Nhóm thống nhất cách chia và cập nhật chỗ ghi C10/G7 đang khác nhau; tên cũ trên Sheet chưa đủ |
| Giờ làm, ca sớm, buổi tối và cách liên lạc khi vắng | Integration | Từng người xác nhận giờ có mặt; phương án tối có nơi/kênh phù hợp; không mặc định cả nhóm làm từ 00:00 hay qua đêm ở địa điểm thi |
| Máy chính/dự phòng và người có thể nhận bàn giao | Integration + QA | Chủ máy xác nhận; chạy lại bài luyện không liên quan hôm nay nếu cần. Chỉ ghi “backup sản phẩm đã kiểm” sau khi mở/chạy đúng release trên máy đó trong giờ thi |
| Thiết bị/browser mục tiêu và tiêu chí giảm đồ họa | Frontend + QA | Ghi đúng máy/browser sẽ thử; thống nhất tác vụ, cách đo và ngưỡng chấp nhận trước khi đo bản thật. Chưa có ngân sách hiệu năng sản phẩm được duyệt, không lấy FPS bài luyện làm cam kết |

Sheet đọc lại ngày 13/11 vẫn có nguyện vọng B/C trống và QA C10/G7 không thống nhất. Đây là ảnh chụp trạng thái có ngày, không chứng minh nhóm chưa thỏa thuận ở nơi khác. Chỉ người có xác nhận thật mới cập nhật trạng thái; checklist không tự nhận việc thay họ.

## 2. Chốt trong giờ thi, theo thứ tự phụ thuộc

Từ **00:00 ngày 14/11, giờ Hà Nội**, khi nhóm bắt đầu công việc được giao. Trước đó giữ ở mức đọc/chuẩn bị; repo public đã được Sơn cho phép thiết lập riêng, chỉ với tài liệu vận hành; chưa schema thực thi, code, dữ liệu xử lý hoặc demo cuối. Mốc trong bảng là mục tiêu của [kế hoạch §8–9](../../KE_HOACH_NHOM.md), không phải hạn bắt buộc của BTC.

| Câu hỏi cần trả lời | Vai cung cấp và mốc mục tiêu | Bằng chứng nhận đầu vào |
|---|---|---|
| Clone repo nào, base branch nào, ai có quyền ghi và sửa file nào? | Integration, trước task code đầu | URL/owner/branch/base commit; kiểm quyền thực; English AGENTS/HANDOFF; phạm vi một editor/checkout. Quyền đọc public không chứng minh quyền push |
| Site/date/duration/cadence/H nào được dùng? | Sources + Backend, phiếu nguồn 09:30 ngày 14 | Nguồn site/tọa độ/cao độ/frame, request/raw/header/hash, time scale/units/coverage, cấu hình được kiểm; chưa chọn sẵn site hoặc điền cao độ thiếu nguồn |
| Contract chính xác và ví dụ success/empty/error ở đâu? | Backend + Sources + Frontend, chốt trước khi tách việc; mục tiêu 09:30 | Path/version/commit, field/type/unit/frame/time, quy ước missing/0/null, ba loại ví dụ được ghi nhãn. Mẫu giả kiểm kỹ thuật tách khỏi số liệu demo |
| Expected nào kiểm được kết quả và cả hai phép so? | Sources + Backend → QA; luồng thật 10:30, pack/mẫu kiểm trước 12:00 | Timestamp và giá trị tham chiếu thật, nguồn/cách đối chiếu, ca biên và giới hạn. Cùng nguồn qua web/API không phải đối chứng mô hình độc lập |
| Demo mở site/date nào, thay đổi gì, trên release nào? | Integration + Sources + QA → Demo, sau kiểm; bản ổn định 17:00 | Commit/build + dataset ID/hash, ca so đã chạy, khác biệt thực và giới hạn. Chênh lệch nhỏ vẫn trình bày đúng; không tạo kết quả cho khớp câu chuyện |

Nếu đầu vào chưa đạt, task phụ thuộc giữ “bị chặn” và ghi chính xác phần cần nhận. Vẫn làm được việc độc lập như đọc nguồn, kiểm quyền hoặc hoàn thiện báo lỗi. Không để một câu hỏi về slot trình bày chặn toàn bộ công việc kỹ thuật; cũng không cho phép fixture thay dữ liệu để vượt mốc nghiệm thu.

## 3. Kiểm tài khoản hoặc thông tin BTC

| Cần xác minh | Vai theo dõi / thời điểm | Bằng chứng và phần bị ảnh hưởng |
|---|---|---|
| Host/mode Next.js, server/backend thực của Chung, quyền deploy/rollback, hostname và chi phí | Integration, trước triển khai | Account owner kiểm quyền thực và quy trình phục hồi. Frontend Next.js có thể chạy Node hoặc static export nếu phù hợp; chưa chốt host. Server/backend Chung đang chuẩn bị là thông tin Sơn báo, chưa kiểm mua/deploy/API. Chưa có phê duyệt chi mới; giá nghiên cứu không phải quyền mua gói/domain. Thiếu quyền thì giữ bản local, chưa đánh dấu public release |
| Team Owner và quyền nộp | Demo + Team Owner, mục tiêu kiểm cổng 09:00–09:30 ngày 14 | Kiểm trên tài khoản thật, một editor mỗi lúc; lưu bằng chứng riêng đã che thông tin. Người viết slide/người được đề xuất nộp chưa chắc là Team Owner |
| SI hỗ trợ ý tưởng áp dụng thế nào cho lịch sử thật của nhóm? | Demo + Team Owner, trước tuyên bố nguồn gốc/đủ điều kiện | [Điều khoản và lịch sử đã ghi](../official-challenge-check-2026-11-13.md); giữ mô tả trung thực và câu trả lời có nguồn khi được làm rõ. Chưa có kết luận đủ hay không đủ điều kiện; không xóa lịch sử AI |
| Slot đội và thang điểm Hà Nội 1–5 hay 1–10? | Demo, trước diễn tập/lượt chấm | Thông báo đúng đội/ngày và hướng dẫn áp dụng; giữ năm tiêu chí chung trong lúc chờ, không tự chấm điểm giả |
| Sửa sau 11:00 ngày 15 có đổi bản chấm địa phương không? | Demo + Team Owner, trước bất kỳ cập nhật sau hạn địa phương | Câu trả lời chính thức có ngày; giữ snapshot đã nộp Hà Nội. Hạn global 23:59 không tự cho phép đổi bản chấm địa phương |

Nếu được nhóm giao hỏi BTC, dùng câu hỏi ngắn và ghi lại URL/thời điểm/người trả lời. Các câu dưới là **nháp chưa gửi**, không phải nguồn đã giải quyết vấn đề:

1. “Nhóm có AI hỗ trợ đề xuất ý tưởng, phân tích và lập kế hoạch, và sẽ khai đầy đủ đóng góp đó. Điều khoản SI về nguồn gốc ý tưởng được áp dụng thế nào cho lịch sử này trước khi nhóm xác nhận tính nguyên gốc/đủ điều kiện?”
2. “Xin xác nhận slot chấm của đội và thang điểm áp dụng tại Hà Nội: 1–5 hay 1–10?”
3. “Nếu sửa bài trên cổng sau 11:00 ngày 15/11 cho vòng global, giám khảo Hà Nội xem snapshot tại hạn địa phương hay bản cập nhật?”

Không liên hệ BTC hoặc thay quyền tài khoản chỉ vì checklist có câu hỏi. [Runbook](../../COMPETITION_RUNBOOK.md) giữ quy trình nộp, bản địa phương và các nguồn chính thức.

## 4. Kiểm task đủ đầu vào trong 2 phút

1. Đọc lại đầu ra, phạm vi file và hạn bàn giao; người làm/bên nhận/reviewer đã xác nhận chưa?
2. Mở đúng input path/URL và kiểm version/commit/hash; nếu chưa có thì ghi phụ thuộc, không đoán bản mới nhất.
3. Nêu được một ca expected và cách người nhận kiểm; nếu cần dữ liệu thật mà chưa có, task đó chưa sẵn sàng để nghiệm thu.
4. Kiểm thời điểm được phép làm và quyền cần cho task; giữ “đã chọn hướng”, “đã nhận việc”, “đã chạy”, “đã kiểm” riêng.

**Việc tiếp trong 2 phút:** điền deadline, đúng phiên bản đầu vào và người nhận đầu ra vào một handoff đang chuẩn bị.
