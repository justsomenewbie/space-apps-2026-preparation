# Backend và xử lý dữ liệu

**Đầu ra của vai:** pipeline tái tạo được bộ JSON có phiên bản từ dữ liệu gốc đã kiểm. Giữ xử lý tái hiện được và JSON có phiên bản. Sơn báo Chung làm backend bằng Claude và chuẩn bị server; runtime/API/deploy chưa kiểm. Bàn giao thêm URL/response/cách chạy khi có; không suy backend đã sẵn sàng. [Về 6 vai trò](README.md)

## Đọc trước

[Kế hoạch §3–5/9](../../KE_HOACH_NHOM.md), [DATA_PREPARATION §2–3](../../DATA_PREPARATION.md) và [phiếu contract/nghiệm thu frontend §2–3](../../FRONTEND_HANDOFF.md). Sources chịu trách nhiệm nghĩa/nguồn/giới hạn; vai này chịu trách nhiệm lấy, lưu, parse, tính và xuất có thể làm lại.

## Chuẩn bị hôm nay

1. Kiểm Python, Git, editor và đường chạy trên máy sẽ dùng; dùng bài [tally](../../practice-tally/README.md) không liên quan nếu cần luyện handoff. Ghi phiên bản/lỗi thật, không cài lại toàn bộ stack vì máy khác có nó.
2. Đọc Horizons API/manual, đặc biệt kết quả văn bản trong `result`, `error`, header và phiên bản. Chưa chạy request khoa học, parser hoặc xử lý dataset bài thi trước nửa đêm.
3. Ghi câu hỏi cần Sources trả lời: nguồn vị trí/cao độ, frame, thời gian, cadence, ý nghĩa H và khả năng so cả điểm lẫn ngày. Ghi phần Frontend cần giữ để tái mở một lựa chọn.
4. Xem các helper được rà trong DATA_PREPARATION; chọn phần nhỏ cần thiết khi triển khai, giữ license và tự test. Không lấy catalog mẫu hoặc ngưỡng của app khác làm chuẩn NASA.

## Task đầu khi triển khai

Nhận phiếu Sources rồi lấy một trường hợp thật nhỏ. Giữ nguyên request, response/header, thời điểm lấy và checksum. Kiểm target/observer/site/time/units từ phản hồi trước khi chuyển thành số; báo rõ lỗi API, thiếu cột hoặc định dạng lạ. Truy vấn tuần tự theo [chính sách SSD](https://ssd-api.jpl.nasa.gov/doc/index.php), tái sử dụng bản lưu hợp lệ và xử lý lỗi có giới hạn; không gọi/proxy JPL từ web.

Chốt contract bằng văn bản cùng Integration/Frontend trước khi tạo bản đầu. Các mục dưới là câu hỏi cần thống nhất, chưa ấn định schema thực thi:

| Nhóm | Cần quyết định |
|---|---|
| Danh tính | Schema/data version, nguồn, hash, mô hình, người tạo/kiểm và miền được phép chọn |
| So sánh | Cùng site/khác ngày; khác site/cùng UTC; duration và H nhất quán, cách gắn trục thời gian |
| Dữ liệu | Timestamp, Sun/Earth angles, đơn vị/frame, kết quả khoảng và trạng thái gần ngưỡng |
| Thiếu/lỗi | Phân biệt thiếu, ngoài miền, không có cửa sổ và chưa đủ chắc chắn; không biến thiếu thành 0 hoặc false |
| Tái hiện | Raw/request/header, lệnh xử lý, input/output hash, test và hướng dẫn tái tạo |

## Bộ kiểm tối thiểu khi có code

| Nhóm ca | Cần chứng minh |
|---|---|
| Parse và metadata | Dữ liệu đúng/thiếu/lỗi không bị đọc nhầm; đổi đơn vị có lý do; thứ tự, timestamp trùng/lệch và coverage được xử lý rõ |
| Khoảng thời gian | All-above, all-below, đổi dấu, đúng 0°, chạm hai đầu, thiếu mẫu; giao khoảng được kiểm tay ít nhất một ca |
| Góc và ngưỡng | Azimuth 359°→1° không nhảy sai; kiểm sát mọi H phát hành; số liệu mịn hơn khi nguồn hỗ trợ, giữ chưa kết luận khi chưa phân xử được |
| Hai phép so | Cùng định nghĩa/thời lượng/H; góc và khoảng khớp dữ liệu, không chỉ có tổng giờ |
| Tái tạo và provenance | Ba mẫu mỗi site/target khớp raw trong giới hạn giải thích được; mọi output truy được về nguồn/version/hash |

Fixture tổng hợp chỉ kiểm thuật toán, phải có nhãn và tách khỏi demo khoa học. Tự tìm Plan B chỉ làm sau lõi; không lấy ngày gốc thành phương án dự phòng ở quá khứ. Không suy góc cao dương thành công suất điện, liên lạc đảm bảo hoặc an toàn hạ cánh. [Phương pháp/giới hạn §4](../../KE_HOACH_NHOM.md)

**Mục tiêu nhóm ngày 14:** contract/nguồn 09:30, một luồng thật 10:30, pack đủ hai phép so và timeline 12:00. Sources kiểm nghĩa; QA tự chạy lại; Frontend xác nhận đọc cùng contract. Khi không qua kiểm, gửi raw/error đã che thông tin riêng và giả định đang nghi ngờ, giữ phiên bản trước; không điền số “cho demo chạy”.

**Việc tiếp trong 2 phút:** ghi ba mục contract còn thiếu vào [mẫu bàn giao](README.md#mẫu-bàn-giao-chung).
