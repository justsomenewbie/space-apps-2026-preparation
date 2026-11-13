# Kiểm thử và xác minh

**Đầu ra của vai:** báo cáo người khác tái hiện được trên đúng build/dataset, kèm lỗi và kết quả kiểm lại. [Về 6 vai trò](README.md)

## Đọc trước

[Nghiệm thu và stop rule trong kế hoạch §9](../../KE_HOACH_NHOM.md), [FRONTEND_HANDOFF §3–5](../../FRONTEND_HANDOFF.md) và [lý thuyết/giới hạn](../architecture-proposal/THEORY_PRIMER.md). Sources đưa kỳ vọng khoa học có nguồn; QA kiểm việc tái hiện và cách sản phẩm thể hiện chúng, không tự chọn mô hình khoa học thay nhóm.

## Chuẩn bị hôm nay

1. Kiểm mở repo/Drive trên máy thứ hai và browser dự kiến. Nếu cần, thử quy trình báo lỗi bằng [bài tally](../../practice-tally/README.md), giữ rõ đây là bài luyện.
2. Sao mẫu báo lỗi dưới vào nơi phối hợp của nhóm; chưa điền kết quả app Lunar chưa tồn tại.
3. Đọc năm nhóm ca dưới, ghi đầu vào còn thiếu từ Sources/Backend/Frontend và bố trí ba người chưa làm phần đó để thử khi có bản thật.
4. Thống nhất cách phân loại lỗi: chặn nộp/demo/kết quả sai; ảnh hưởng tác vụ; lỗi trình bày. Mức ảnh hưởng dựa trên ca cụ thể, không đếm số lỗi để tự kết luận chất lượng.

## Ma trận kiểm khi có bản thật

| Nhóm | Thao tác/ca cần thử | Bằng chứng đạt |
|---|---|---|
| Khoa học và hai phép so | Một site/hai ngày; hai site/cùng UTC; cùng duration/định nghĩa/H; đối chiếu Sun/Earth với mẫu Sources | Số/góc/khoảng/nhãn khớp đúng pack; thiếu chiều so phải ghi lõi chưa đạt |
| Biên và dữ liệu lỗi | All-above/below, 0°, đổi dấu, 359°→1°, chạm đầu/cuối, thiếu/trùng/lệch timestamp, ngoài miền, không có kết quả | Test thuật toán dùng fixture có nhãn; UI không đổi thiếu thành 0, không hứa chắc chắn ở biên chưa phân xử |
| Hiểu và thao tác | Ba người tìm thay đổi và nêu một giới hạn trong 2 phút/người; bàn phím/touch, chữ 200%, màn hẹp, reduced-motion | Ghi thời gian, lỗi hiểu và trợ giúp thực; mục tiêu nhóm 3/3 hoàn thành, không tự điền pass |
| Khả năng phục hồi | Link sai, JSON không tải, retry, tải lại link có state/version, WebGL lỗi, mất mạng trong tình huống dự kiến | Lõi và thông báo đúng; không tuyên bố offline nếu chưa kiểm tình huống đó |
| Bản phát hành | Build/lint/test, nguồn/AI/license, tiếng Anh, link ẩn danh, máy thứ hai/bản local dự phòng | Evidence gắn với commit/dataset cuối; kiểm lại ca liên quan sau sửa |

## Mẫu lỗi và kiểm lại

```text
Issue ID / role receiving the fix / impact:
Commit/build URL / dataset ID/hash / device/browser:
Preconditions / exact steps / expected result and its source:
Observed result / screenshot or log (redacted):
Fix commit / retest steps / retest result / reviewer / time:
```

Khi đổi build hoặc dataset, ghi lại phiên bản kiểm; pass ở bản cũ không tự áp dụng cho bản mới. Không cần chạy lại mọi thứ cho một sửa chữ nhỏ; chọn ca bị ảnh hưởng và giữ smoke flow cho release. Người sửa không tự đóng ca chỉ vì “đã sửa”.

## Mốc bàn giao và xử lý lỗi

**Mục tiêu nhóm ngày 14:** kiểm bản chung trước 16:00; ba lượt thử và biên bản lỗi trước 20:00; kiểm cuối sáng 15. Integration quyết định ghép/cắt phạm vi dựa trên kết quả, Sources xử lý bất đồng khoa học, Frontend/Backend sửa phần mình. Lỗi kết quả phải được sửa hoặc loại kết quả sai; không che bằng câu “chỉ để demo”.

Nếu chưa có mẫu expected hoặc thiếu raw, đánh dấu bị chặn và nêu chính xác đầu vào cần nhận. Mở web/API từ cùng nguồn không phải đối chứng mô hình độc lập. Browser automation/viewport không thay bằng chứng thiết bị thật hoặc việc người dùng hiểu sản phẩm.

**Việc tiếp trong 2 phút:** mở mẫu lỗi và ghi thiết bị/browser sẽ dùng kiểm bản chung.
