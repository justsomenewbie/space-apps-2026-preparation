# Bộ chuẩn bị theo 6 vai trò

**Mở đúng vai trò trong bảng dưới; chưa cần đọc toàn bộ repo.** Bộ này chuẩn bị việc, tài liệu và cách bàn giao theo chức năng, không gán vai cho người cụ thể. Một người có thể nhận nhiều vai; một vai có thể được chia nhỏ, nhưng mỗi đầu ra cần một người chịu trách nhiệm và một người kiểm độc lập.

Cập nhật 13/11/2026, giờ Hà Nội. Đây là tài liệu phối hợp nội bộ bằng tiếng Việt. Sản phẩm và tài liệu nộp phải dùng tiếng Anh từ bản đầu. Trước **00:00 ngày 14/11**, chỉ đọc nguồn, kiểm truy cập, thống nhất cách làm và luyện bằng bài không liên quan; chưa tạo code, schema thực thi, UI, slide cuối, asset hoặc dataset bài thi. [Mốc giờ và quy trình](../../COMPETITION_RUNBOOK.md)

| Vai trò | Câu hỏi vai này phải trả lời | Mở gói |
|---|---|---|
| Điều phối và tích hợp | Các phần có ghép thành đúng một bản chạy lại được không? | [Integration](integration.md) |
| Nghiên cứu nguồn và khoa học | Dữ liệu nghĩa là gì, dùng được ở đâu, và kết luận nào có bằng chứng? | [Sources & science](sources.md) |
| Backend và xử lý dữ liệu | Từ nguồn gốc làm sao tái tạo đúng bộ kết quả giao cho web? | [Backend & data](backend-data.md) |
| Frontend và trải nghiệm | Người dùng có tự so sánh, hiểu kết quả và mở lại lựa chọn không? | [Frontend & UX](frontend-ux.md) |
| Kiểm thử và xác minh | Người khác có làm lại được kết quả, và lỗi nào còn ảnh hưởng sử dụng? | [QA & validation](qa.md) |
| Demo và hồ sơ nộp | Bài trình bày có đúng sản phẩm, đủ bằng chứng và thực sự đã nộp không? | [Demo & submission](demo-submission.md) |

## Bắt đầu trong 15 phút

1. Đọc gói vai trò mình muốn nhận trong 5 phút; đây là thời lượng gợi ý, không phải cam kết hoàn thành chuyên môn.
2. Dùng 5 phút mở các link đầu vào và kiểm máy/tài khoản của chính mình. Tool đã có trên máy người khác không chứng minh máy mình chạy được.
3. Dùng 5 phút ghi vào [Sheet hiện có](https://docs.google.com/spreadsheets/d/1zqhG7NVRH-TdO6fr6e0n74d6S2r1--ji2UuySlJGZeA): vai muốn nhận, đầu ra đầu tiên, giờ có mặt và một chỗ cần hỗ trợ. Không ghi mật khẩu hoặc thông tin riêng lên GitHub.

Sheet đọc ngày 13/11 vẫn có sáu luồng việc; tab đăng ký chưa có nguyện vọng ở cột B/C, và ô C10/G7 của tab bảng việc mô tả QA khác nhau. Bộ này không sửa Sheet, không xác nhận ai đã nhận việc. [Kế hoạch §7](../../KE_HOACH_NHOM.md) giữ phân công đề xuất; Sheet giữ người nhận/trạng thái thật sau khi nhóm thống nhất.

## Các vai trò nhận và giao gì

| Bàn giao | Nội dung cần thống nhất | Người kiểm |
|---|---|---|
| Sources → Backend | Nguồn, vị trí, đại lượng, frame, đơn vị, thời gian, giới hạn và mẫu đối chiếu | Backend kiểm metadata; Sources kiểm cách hiểu |
| Backend → Frontend | Hợp đồng có phiên bản, miền lựa chọn, giá trị thiếu/lỗi, nguồn và mô hình đi cùng kết quả | Integration duyệt giao diện chung; QA kiểm tái hiện |
| Frontend → QA | Build/commit, dataset ID/hash, cách chạy, hai ca so và trạng thái lỗi | QA thử độc lập; Sources rà số và nhãn khoa học |
| QA → Integration | Kết quả thực, lỗi tái hiện được, mức ảnh hưởng, ca đã kiểm lại | Integration chỉ ghép thay đổi đúng phạm vi; QA kiểm bản mới |
| Integration + Sources + QA → Demo | Bản phát hành cụ thể, kết quả có bằng chứng, nguồn/quyền/AI và giới hạn còn mở | Demo kiểm lời nói/link; Team Owner kiểm và nộp hồ sơ |

Các vai có thể làm song song việc không phụ thuộc nhau. Việc phụ thuộc đầu vào chưa có phải ghi rõ đang chờ; không điền số giả hoặc tự chọn ngưỡng để trông như đã xong. Backend ở đây là Python xử lý theo lô; kế hoạch hiện tại không cần một server trực tuyến. Hai phép so và timeline Sun/Earth đi trước tự tìm Plan B và 3D có điều kiện. [Kế hoạch §1–5/9](../../KE_HOACH_NHOM.md)

## Mẫu bàn giao chung

Mẫu ghi việc, chưa phải schema sản phẩm. Trước khi nhận task, dùng [checklist chốt đầu vào](CHECKPOINTS.md) để phân biệt phần nhóm xác nhận hôm nay, phần chốt từ dữ liệu trong giờ thi và phần cần kiểm tài khoản/BTC. Khi có sản phẩm, điền bằng tiếng Anh trong repo sản phẩm; chỉ ghi `PASS` khi có bằng chứng.

```text
Role / accepted owner / receiving role / independent reviewer:
Acceptance evidence from owner, recipient and reviewer / deadline (Hanoi):
Goal / permitted files / exact input path, version, commit or hash / dependencies:
Output path or URL / commit / dataset version and hash:
Reproduction steps / expected result / observed result / evidence:
Status (not started | in progress | blocked | ready for review | verified):
Open limits / dependency or decision needed / next bounded action:
```

Người nhận thử mở đầu ra, làm lại ít nhất một ca, rồi ghi kết quả kiểm. Người làm không tự thay chữ “chờ kiểm” thành “đã xác minh”. Đổi contract, đơn vị, frame, state hoặc config phải báo Integration và các vai tiêu thụ trước khi ghép. Một checkout chỉ có một người ghi; nếu thật sự cần nhiều người sửa đồng thời thì dùng checkout/worktree riêng, nhánh riêng và phạm vi file rõ. [Quy tắc phối hợp](../../AGENTS.md)

## Những việc vẫn cần con người chốt

| Việc còn mở | Vai theo dõi | Bằng chứng để đóng |
|---|---|---|
| Người nhận vai, reviewer, giờ làm và cách phối hợp QA | Integration | Xác nhận của người nhận trên bảng điều phối |
| Repo sản phẩm, quyền ghi, một máy dự phòng và nơi làm tối | Integration | Repo/branch/owner ghi khi kickoff; kiểm trên máy thật, lịch nhóm thống nhất |
| Nguồn/site/date/cadence, hợp đồng và kết quả khoa học | Sources + Backend | Request/raw/header và mẫu kiểm thật sau giờ bắt đầu |
| Quyền Team Owner, slot trình bày, câu xác nhận nguồn gốc ý tưởng/SI | Demo | Quyền tài khoản thực, thông báo BTC và cách áp dụng điều khoản được làm rõ; chưa tự nhận đủ điều kiện |

Tài liệu chuẩn bị đã có đường đi cho các vai. Chưa có bằng chứng rằng mọi người đã đọc/nhận việc, máy đồng đội đã chạy được hoặc sản phẩm đã đúng. Không cần cài thêm công cụ chỉ để đánh dấu “sẵn sàng”. Các mốc công việc trong từng gói lấy từ kế hoạch; là mục tiêu nhóm, trừ hạn nộp được dẫn nguồn.

**Việc tiếp trong 2 phút:** mở một gói vai trò và ghi đầu ra đầu tiên mình có thể nhận.
