# Frontend và trải nghiệm

**Đầu ra của vai:** người dùng tự so điểm/ngày, đọc timeline Sun/Earth, hiểu giới hạn và mở lại lựa chọn trên web tiếng Anh. [Về 6 vai trò](README.md)

## Đọc trước

[FRONTEND_HANDOFF](../../FRONTEND_HANDOFF.md) cho stack và kiểm UI; [kế hoạch §1–2/5–6/9](../../KE_HOACH_NHOM.md) cho lõi/luồng/ưu tiên; [quyền asset](../media-rights-2026-11-13.md) khi dùng ảnh, font, component hoặc audio. Hướng hiện hành là Next.js + Tailwind theo yêu cầu Chung được Sơn truyền đạt; kiểm Vite cũ không xác minh Next.js. Chưa có app Lunar được kiểm.

## Chuẩn bị hôm nay

1. Mở repo và tài liệu trên máy/laptop/điện thoại dự kiến dùng; kiểm browser và công cụ có sẵn. [Bài stack không liên quan](../../practice-stack-lock/README.md) chỉ dùng khi cần luyện môi trường, không chuyển ví dụ thành app Lunar sớm.
2. Đọc phiếu contract và ghi các câu hỏi về miền điểm/ngày, UTC/H, phiên bản, nguồn và missing/error. Chưa viết schema, layout, UI copy hoặc component bài thi.
3. Chuẩn bị checklist dưới và thiết bị thử; ghi rõ phần nào chỉ là mô phỏng viewport, phần nào sẽ kiểm trên máy thật.
4. Với ảnh/font/component ứng viên, lưu nguồn/license/credit. Chưa dùng texture minh họa để suy địa hình hay ánh sáng khoa học.

## Task đầu khi triển khai

Nhận contract/version và một trường hợp dữ liệu thật đã kiểm. Hoàn thành một đường chọn → kết quả → nguồn/giới hạn → mở lại bằng link. Sau đó hoàn thiện cả hai chế độ so; giữ ý nghĩa thời gian phù hợp từng chế độ. Bảng/biểu đồ đọc được ngay cả khi 3D không hoạt động. Không gọi API JPL từ browser.

| Kiểm trước bàn giao | Điều kiện cần thấy |
|---|---|
| Đúng dữ liệu | Site/date/time/UTC/H/unit/model/version có nghĩa rõ; số hiển thị khớp pack; không hard-code miền ngoài bản kê |
| Trạng thái | Loading, empty, error, retry, dữ liệu thiếu/ngoài miền và link sai phân biệt được; không dùng màu làm dấu hiệu duy nhất |
| Thao tác | Touch/chuột/bàn phím; focus nhìn thấy; label rõ; reduced-motion; nội dung vẫn dùng được khi WebGL lỗi |
| Nội dung | UI/lỗi/giải thích bằng tiếng Anh; nguồn/quyền/giới hạn cạnh kết quả; biểu đồ có cách đọc bằng bảng hoặc văn bản |
| Khôi phục và đọc | Link giữ chế độ/lựa chọn/duration/H/version; thử màn hẹp 320 CSS px, chữ 200%, nhãn dài; bản in nếu triển khai phải giữ nguồn/phiên bản |

Đây là checklist nghiệm thu nhóm, không phải tuyên bố chứng nhận accessibility. Sources rà nhãn khoa học; QA thử trên build thật và ghi browser/thiết bị. Frontend tự kiểm trước bàn giao, QA kiểm lại độc lập.

## Ưu tiên và cách giảm phạm vi

**Mục tiêu nhóm ngày 14:** lõi hai phép so/timeline 15:00, bản demo ổn định 17:00. Làm tự tìm Plan B, 3D/ground-level, bản in và âm thanh theo điều kiện của [kế hoạch §1/9](../../KE_HOACH_NHOM.md). Ground-level cần dữ liệu/quyền/CRS/cao độ/miền phủ/độ chi tiết và kiểm thiết bị; above-site là dự phòng. 3D đẹp không chứng minh mô hình đúng.

Nếu contract đổi, thống nhất cùng Backend/Integration trước khi sửa consumer. Nếu thiếu dữ liệu, hiển thị đúng trạng thái và báo phụ thuộc. Nếu 3D/animation chậm hoặc lỗi, giữ tương tác lõi/bảng/biểu đồ; không dùng fixture làm kết quả thật. Music là tùy chọn sau lõi, mặc định yên lặng và có nút điều khiển; không cần thêm SFX để đạt lõi.

Bàn giao commit, preview/cách chạy, data version, ca kiểm và lỗi còn mở theo [mẫu chung](README.md#mẫu-bàn-giao-chung). **Việc tiếp trong 2 phút:** chọn một thiết bị/browser sẽ dùng để thử luồng bằng bàn phím hoặc touch.
