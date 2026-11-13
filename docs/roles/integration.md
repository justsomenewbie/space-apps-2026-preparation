# Điều phối và tích hợp

**Đầu ra của vai:** một bản chung có nguồn, phiên bản, cách chạy lại và trạng thái kiểm rõ. [Về 6 vai trò](README.md)

## Đọc trước

[HANDOFF](../../HANDOFF.md) cho trạng thái; [runbook](../../COMPETITION_RUNBOOK.md) cho kickoff/nộp; [kế hoạch §5/8/9](../../KE_HOACH_NHOM.md) cho kiến trúc, mốc và điều kiện cắt phạm vi. [Hosting](../../HOSTING_PLAN.md) là phương án đã nghiên cứu, chưa phải dịch vụ đã triển khai.

## Chuẩn bị hôm nay

1. Điền người nhận/reviewer/giờ làm vào bảng điều phối sau khi họ đồng ý. Tách QA khoa học, QA trải nghiệm và người tổng hợp lỗi; không tự suy từ tên đã điền.
2. Kiểm người nhận mở được repo/Drive bằng tài khoản của họ; quyền đọc không đồng nghĩa quyền push. Ghi máy dự phòng, cách chuyển bản và người giữ bản chung.
3. Nếu cần, chạy [bài tally không liên quan](../../practice-tally/README.md) trên máy sẽ dùng, rồi nhờ người khác mở lại. Ghi lệnh và lỗi thật, không chép “pass trên Mac” thành “pass cả nhóm”.
4. Chuẩn bị danh sách quyết định kickoff: URL/owner/branch của một repo sản phẩm chung, quyền ghi, người giữ contract và phạm vi file. Repo public moon-plan-b đã được Sơn cho phép thiết lập, owner justsomenewbie/main; kiểm đúng URL, base commit, quyền ghi đã nhận và ownership trước khi bắt đầu implementation.
5. Xác nhận giờ gặp, nguồn điện/mạng, phương án làm tối và nghỉ. Runbook ghi địa điểm đóng trong khung 17:30–18:00 ngày 14; giờ làm từ nửa đêm không chứng minh được ở lại trường qua đêm.

## Task đầu khi triển khai

Kiểm giờ Hà Nội, runtime, Git status và người đang sửa. Thiết lập checkout sản phẩm, mang chỉ dẫn vào English `AGENTS.md`/`HANDOFF.md`, dẫn đúng commit chuẩn bị; không mang chat riêng, evidence cá nhân hoặc bài luyện vào sản phẩm. Ghi repo/branch/owner vào hai handoff. Chỉ dẫn Mac không cài công cụ lên máy khác.

Chốt bằng văn bản các câu hỏi contract cùng Sources/Backend/Frontend: miền điểm/ngày, ý nghĩa H, UTC/cadence, đơn vị/frame, thiếu dữ liệu, phiên bản, nguồn và lỗi. Chọn một task có đầu ra và cách kiểm; người làm sửa đúng file đã giao. Chưa cần thêm service hay abstraction cho nhu cầu giả định.

## Checklist tích hợp

| Kiểm | Bằng chứng cần giữ |
|---|---|
| Input → kết quả thật → hiển thị | Commit/build và dataset ID/hash; một người khác mở lại được |
| Giao diện chung không lệch | Contract version; người viết và người tiêu thụ đều kiểm; không tự đổi đơn vị/tên trường |
| Bản phát hành có thể chạy lại | Lệnh cài/chạy/build thực, bản local dự phòng, hạn chế mạng được thử và ghi rõ |
| Thay đổi được review | Full diff, check/lint/test phù hợp, secret scan có che giá trị; audit khi dependency thay đổi hoặc release |
| Đúng phạm vi công bố | Nguồn/rights/AI rõ; kiểm link công khai khi được phép triển khai; không suy quyền sync chuẩn bị thành quyền deploy sản phẩm |

**Mục tiêu nhóm ngày 14:** nguồn/contract 09:30, luồng thật 10:30, pack hai phép so 12:00, lõi 15:00, demo ổn định 17:00, release 20:30. Ngày 15 khóa tính năng 09:00. Chi tiết và stop rule thuộc [kế hoạch §8–9](../../KE_HOACH_NHOM.md); không tự bỏ một chiều so để đánh dấu lõi hoàn thành.

## Khi bị chặn

Nếu chưa có dữ liệu thật, ưu tiên Sources/Backend, dừng đồ họa phụ. Nếu một nhánh chưa đạt, giữ bản chạy gần nhất và ghi chính xác phần chưa đạt; không reset/stash/ghi đè việc người khác. Nếu thiếu quyền, người có quyền thực hiện phần của họ; không chia sẻ mật khẩu. Sau ba lần sửa thất bại, dừng và nêu giả định đang sai trước khi thử tiếp.

Dùng [mẫu bàn giao chung](README.md#mẫu-bàn-giao-chung), kèm danh sách vai đã nhận và quyết định còn thiếu. **Việc tiếp trong 2 phút:** ghi một đầu vào chưa có đang chặn bản chung và vai cần cung cấp.
