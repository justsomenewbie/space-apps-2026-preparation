# Chuẩn bị NASA Space Apps 2026 của nhóm Lunar

**Chỉ chuẩn bị trước thi.** Nhóm gồm Chung, Trang, Lâm, Minh, Sơn, Thảo; đề đã đăng ký là Lunar Landing Site Navigator. Repo này chứa tài liệu, nguồn và bài luyện không liên quan; chưa có ứng dụng, UI hoặc dataset bài nộp. Cập nhật 12/11/2026, giờ Hà Nội.

## Bắt đầu trong hai phút

1. **Đọc kế hoạch:** [bản trong repo](KE_HOACH_NHOM.md), [PDF trên Drive](https://drive.google.com/file/d/1HzjerYUiOHpLy5ATm43F903shj9uugzI/view), [Word để chỉnh sửa](https://drive.google.com/file/d/1fviH_Rwg0PTh_-Sk_IYUUA_6vfTmRgvO/view).
2. **Cho AI biết bối cảnh:** tải [BOI_CANH_AI.md](BOI_CANH_AI.md) hoặc [bản Drive](https://drive.google.com/file/d/19SMq037jiJ9OnIXdfJWUOdafD3EIALDr/view), rồi giao đúng một việc đã nhận. Một chat mới không tự biết các chat trước.
3. **Xem việc hiện hành:** [Bảng việc nhóm](https://docs.google.com/spreadsheets/d/1zqhG7NVRH-TdO6fr6e0n74d6S2r1--ji2UuySlJGZeA). Tên đã điền không chứng minh người đó đã nhận việc; C10/G7 còn khác người QA.
4. **Chọn bài đọc đúng phần:** [nguồn và giấy phép](DATA_PREPARATION.md), [phiếu frontend và bàn giao dữ liệu](FRONTEND_HANDOFF.md), [phối hợp trong giờ thi](COMPETITION_RUNBOOK.md), [công cụ/skill](PLUGIN_ROUTING.md).
5. **Luyện ngoài bài thi nếu cần:** [counter async nhỏ](practice-tally/README.md), dùng Python/browser có sẵn; hoặc [dependency framework đã khóa và checker](practice-stack-lock/README.md) để tái tạo bài thử stock riêng. Đây không phải phần mềm Lunar.

## Nơi lưu và cách cập nhật

[Thư mục Drive chung](https://drive.google.com/drive/folders/1H-D22SV6i1RImJHcWxRqtgK2_TP3tn2S) chứa kế hoạch và file AI. Drive cho người có link xem, giữ quyền sửa riêng của năm đồng đội; khi sửa phải đăng nhập đúng tài khoản. GitHub công khai cho đọc không tự cấp quyền push. Xem [phạm vi kiểm và điều còn mở](PREPARATION_COVERAGE.md) để biết kết quả truy cập/sync thực tế.

Git là bản có lịch sử cho tài liệu chuẩn bị; Sheet giữ phân công/trạng thái đang thay đổi. **Mặc định do Sơn yêu cầu ngày 12/11:** mỗi khi sửa ghi chú/chỉ dẫn chuẩn bị, AI đồng bộ GitHub, cloud hiện có và Drive/Word/PDF, kiểm đúng commit/hash trước khi báo xong; không cần nhắc lại ở chat mới. Xem quy trình và quyền thường trực tại [AGENTS](AGENTS.md#standing-preparation-sync--user-instruction-12-november-2026). Word/PDF xuất từ KE_HOACH_NHOM.md; nguồn không đổi thì kiểm lại bản xuất đang giữ. Cập nhật HANDOFF, ghi rõ đích còn chờ nếu bị chặn. Đây là việc AI thực hiện trong phiên, không phải đồng bộ nền. Không dùng Drive để đồng bộ code đang sửa, không cho hai AI ghi cùng checkout.

## Những điều chưa chốt

Phạm vi sản phẩm, backend/hợp đồng dùng chung, dữ liệu/địa điểm cụ thể, người dự phòng và người bấm nộp vẫn chưa được xác nhận. Moon Plan B và các phương án trước là đề xuất, không phải quyết định nhóm. Chưa có buổi luyện trên máy đồng đội được ghi nhận. Chuẩn bị công cụ trên Mac của Sơn không đồng nghĩa đã có trên máy khác/cloud.

**Đính chính 11/11:** được làm toàn bộ dự án từ **00:00 ngày 14/11, giờ Hà Nội**, theo trao đổi người dùng cung cấp và xác nhận; hết giới hạn chỉ chuẩn bị từ mốc đó. [Timeline mới, trang 2](https://drive.google.com/file/d/1m07k0x7akRQqZ7YQS71hJs_ITXxgOK7e/view) xác nhận hạn Hà Nội **11:00 ngày 15/11**; 09:00 ngày 14 là mở cổng nộp. Mục tiêu 10:30 là khuyến nghị. Nguồn chi tiết: COMPETITION_RUNBOOK và BOI_CANH_AI mục 2/8.

**Bước tiếp dưới hai phút:** mở bảng việc và xác nhận phần của mình; nếu C10/G7 còn mâu thuẫn, hỏi nhóm để chốt người QA.


## Bộ chuẩn bị ngày 12 tháng 11

Mã bộ: **PREP-2026-11-12**. Đọc [HANDOFF](HANDOFF.md) và [AGENTS](AGENTS.md) để tiếp tục; [FRONTEND_HANDOFF](FRONTEND_HANDOFF.md) có stack do Sơn chọn, định hướng mobile/3D/audio và giới hạn bài thử; [HOSTING_PLAN](HOSTING_PLAN.md) có phương án chạy độc lập Mac; [PLUGIN_GUIDE_REVIEW](PLUGIN_GUIDE_REVIEW.md) và [PLUGIN_ROUTING](PLUGIN_ROUTING.md) có cách chọn công cụ. Product/repo triển khai/hợp đồng dữ liệu vẫn cần nhóm chốt.

Drive giữ Word/PDF xuất từ KE_HOACH_NHOM.md, BOI_CANH_AI.md cùng nguồn Git và ZIP đầy đủ của commit phát hành. File 00 ĐỌC TRƯỚC trên Drive trỏ tới bản kê commit/SHA-256. Mỗi lần sửa phải đối chiếu đúng commit và hash, không suy bản tải cũ tự thay đổi. Công cụ được cài trên Mac và bằng chứng sibling không tự nằm trong ZIP.

[Bộ nguồn đầy đủ trên Drive](https://drive.google.com/file/d/1DH3ftueW2DX1OEemJ5V1QFuCHfz52El-/view) · [Bản kê commit và SHA-256](https://drive.google.com/file/d/1cfy-cKRFtT5KeONptrX3-brU-iKroF_m/view).
