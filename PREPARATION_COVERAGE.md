# Phạm vi đồng bộ và kiểm truy cập

Cập nhật 12/11/2026. Đây là bản đối chiếu tài liệu chuẩn bị, không chứng nhận nhóm đã làm sản phẩm, đồng ý mọi đề xuất hoặc đã mở file trên máy thật.

## Bộ chuẩn bị đã đối chiếu ngày 12 tháng 11

Người dùng yêu cầu đồng bộ toàn bộ ghi chú/chỉ dẫn mới nhất lên GitHub, cloud hiện có và Drive/Word/PDF. Bộ **PREP-2026-11-12** bổ sung frontend/mobile/3D/audio, hosting, routing, tiếp nối chat và trạng thái hướng sản phẩm; giữ nguyên các lựa chọn chưa được nhóm chốt. Word/PDF là bản đọc của KE_HOACH_NHOM.md, ZIP mang đủ 23 file nguồn repo. Không xuất .DS_Store, chat riêng hoặc bằng chứng sibling thô.

**Checkpoint nội dung đã kiểm:** `b596ed195683bba167c98096843f922d18c3c419`. GitHub main/HEAD khớp; ZIP tải không đăng nhập khớp toàn bộ 23 file. Cloud `/workspace/space-apps-2026-preparation`, nhánh `work`, đã fast-forward an toàn; cả 23 Git blob và SHA-256 được root so độc lập, checkout sạch, ba hash scratch cũ giữ nguyên. Code/lock/checker không đổi nên không chạy lại bộ test ứng dụng. Báo cáo cloud: chat Verify Space Apps cloud readiness, host durable, lượt `01a1cc49-72c4-73ee-aae5-bc70e811718f`.

**Drive đã tải lại và so byte:** bốn ID Word/PDF/bối cảnh/index giữ nguyên; thêm [ZIP đầy đủ](https://drive.google.com/file/d/1DH3ftueW2DX1OEemJ5V1QFuCHfz52El-/view) và [bản kê commit/SHA-256](https://drive.google.com/file/d/1cfy-cKRFtT5KeONptrX3-brU-iKroF_m/view) trong thư mục 02. Cả sáu file tải lại khớp SHA-256. Quyền/parents của bốn file cũ không đổi; hai file mới nhận quyền reader theo link, năm writer và một owner của thư mục. Không đổi bảng phân công hoặc quyền chia sẻ.

**Word/PDF:** cùng nguồn ngày 12/11, 6 trang đã render và xem toàn bộ; 91 khối nội dung DOCX khớp nguồn, văn bản PDF khớp sau chuẩn hóa khoảng trắng/Unicode, 22 URL đích giữ đủ. Root chạy lại verifier và xem sáu trang. Chưa mở bằng Microsoft Word hoặc điện thoại thật. Nguồn khoa học/ngân sách vẫn có ngày kiểm và giới hạn riêng; đây là kiểm đồng bộ, không phải xác minh khoa học mới.

Ghi chú trạng thái này được commit sau checkpoint nội dung; bản kê Drive ghi **commit giao cuối cùng**, bao gồm ghi chú. Dùng commit/hash ở bản kê để đối chiếu bản hiện hành; các SHA/số file cũ bên dưới là lịch sử. Evidence Mac: `../nasa-preparation-deliverables/preparation-sync-2026-11-12/`; không coi đường dẫn Mac là có trên cloud. Việc đồng bộ một phiên bản không tạo capture lịch sử, cập nhật nền, cài tool Mac lên cloud, deployment hoặc bài nộp.

## Checkpoint tiếp nối chat trước lượt đồng bộ — 12/11/2026

AGENTS yêu cầu đối chiếu thay đổi khi bắt đầu/kết thúc công việc; không có capture hoặc đồng bộ nền. Lượt này đọc user/final messages của **6 lượt gần nhất được chọn trong 4 chat**, đối chiếu với file hiện hành; không phải rà hết lịch sử. Inventory local được đọc một trang 50 mục; không rà lại archived hay toàn bộ các host. Các trang cũ chưa đọc vẫn là khoảng trống, không được tính đã bao phủ chỉ vì đọc lượt mới nhất. Mốc 15 lịch sử/77 lượt bên dưới giữ nguyên tính lịch sử.

| Chat đã đọc (ID, host) | Lượt mới nhất đã đọc | Phạm vi và nơi lưu kết quả |
|---|---|---|
| Review attached file — `01a1c9f1-a4e1-7c40-a0e8-644d5776db1b`, local | `01a1cc22-3fa3-7c23-9a46-d7b752a03321` | Hai lượt gần nhất: hosting và endurance; đối chiếu FRONTEND_HANDOFF, HOSTING_PLAN, PLUGIN_ROUTING. Các lượt cũ của chat chưa được rà lại. |
| Confirm project start time — `01a1cb15-0033-77c2-bd0b-e5fb2c2a230a`, local | `01a1cbd8-c217-76c2-808b-3f1df6ccb00c` | Hai lượt gần nhất: người dùng xác nhận chưa chốt sản phẩm; kết quả đồng bộ timing. Đối chiếu HANDOFF/runbook; mốc giờ đã có trong repo. |
| Explain event-start workflow — `01a1c9b1-ea94-7420-b169-14bf4e8f2e02`, local | `01a1ca65-4b33-7340-859d-fea1155c7cce` | Một lượt: coordinator báo cloud tới `edeff34`; phân biệt với checkpoint đã chạy test `8d2f61e`. |
| Verify Space Apps cloud readiness — `01a1ae73-95a6-7003-bdfd-63b7b3b3a0b6`, durable | `01a1ca83-772c-77e1-8ff7-d086ac7db608` | Một lượt: báo cáo cloud xác nhận `edeff34`, 21 blobs, sạch; kiểm danh sách blob với Git local, không chạy shell cloud mới. |

Chat hiện tại **Clarify project tool readiness**, `01a1cc36-6d90-70b2-998d-0b92097b3a4e`, lưu yêu cầu chọn tool chủ động và giảm lặp lại lịch sử vào AGENTS/PLUGIN_ROUTING. Lượt này đang chạy khi ghi checkpoint; lần sau đọc phần hoàn tất. Bản local `../nasa-preparation-deliverables/continuity-readiness-2026-11-12/chat-checkpoints.json` giữ thời gian, turn IDs, cursor và phạm vi đọc; file đó không tự chuyển lên cloud. Nếu không có cursor, dùng ID/turn trong bảng để tìm lại; chỉ đọc phần liên quan còn thiếu.

**Trạng thái sync đã phân biệt:** `git ls-remote` xác nhận GitHub main và local HEAD cùng `854cdcb258c312be1022d6f2d995e3f7adbbe7cd`. Các sửa đổi frontend/tool/hosting trước lượt này và bốn tài liệu của lượt audit còn local, chưa commit/push. Cloud mới nhất đọc được là báo cáo `edeff34`, chưa xác minh lại checkout trực tiếp. Drive/Word/PDF giữ bằng chứng timing ngày 11/11, không suy ra đã có các ghi chú hosting/tool mới. Không gửi tin nhắn, tạo chat mới, thay quyền, mua dịch vụ hoặc công bố thêm trong audit này.

**Cách tiếp nối:** so inventory chat liên quan với bảng này; đọc lượt mới và khoảng trống có ảnh hưởng; cập nhật file sở hữu quyết định, rồi ghi checkpoint và trạng thái sync thực. Chỉ xem lại toàn bộ lịch sử khi nguồn thiếu, mâu thuẫn không giải quyết được hoặc người dùng yêu cầu. Khi không truy cập được chat/host, nêu giới hạn thay vì báo “đã cập nhật mọi nơi”.

## Những phần đã đối chiếu

| Nhóm nội dung | Bản dùng chung | Trạng thái nội dung |
|---|---|---|
| Đề, lịch, phân công và cách phối hợp | [README](README.md), [kế hoạch](KE_HOACH_NHOM.md), [AI context](BOI_CANH_AI.md), [runbook](COMPETITION_RUNBOOK.md) | Sáu thành viên, Lunar đã đăng ký; Sheet đã có tên. Bắt đầu làm đầy đủ 00:00 ngày 14/11 theo đính chính; timeline xác nhận hạn Hà Nội 11:00 ngày 15/11. Mâu thuẫn QA C10/G7 vẫn cần nhóm chốt. |
| Nguồn khoa học, dự án tương tự, luật và license | [DATA_PREPARATION](DATA_PREPARATION.md), AI context 5.1–6/8 | CLPS helper MIT là ứng viên Python; PolarWindow source notes Apache-2.0; Horizons/PDS-LOLA/NASA-LROC là nguồn chọn. Đã đọc nguồn/mã chọn lọc, chưa chạy app hoặc tạo dataset. |
| Frontend, dữ liệu bàn giao và bài luyện | [FRONTEND_HANDOFF](FRONTEND_HANDOFF.md), [practice-tally](practice-tally/README.md) | Gói luyện 6 tệp được đưa vào repo; chỉ README đổi sang đường dẫn portable. Checker ba ca được chạy lại; browser tests cũ là bằng chứng Mac, không phải kiểm máy đồng đội. |
| Công cụ, relay và Context Mode | [PLUGIN_ROUTING](PLUGIN_ROUTING.md), [AGENTS](AGENTS.md) | Ghi pin/cách chọn/giới hạn; Context Mode đã được gọi trong lượt này. Cài đặt/CLI/skill trên Mac không tự chuyển sang cloud hoặc tài khoản của người khác. |
| Handoff, cloud và nguồn lịch sử | [HANDOFF](HANDOFF.md), [PREPARATION](PREPARATION.md) | Lịch sử được giữ có ngày; thông tin truy cập/cài đặt cũ không được coi là hiện tại. Không công khai bản ghi họp, ảnh lời mời chứa email hoặc toàn bộ chat riêng. |

## Phạm vi rà chat Codex

Đã duyệt inventory 66 chat local active, 37 archived; 5 cloud active và không có cloud archived. Lọc các lịch sử NASA, đọc actual turns và hết các cursor: **15 lịch sử, 77 lượt, 18 trang**. Mốc chụp kiểm từ 29/10 12:23:30 tới 11/11 14:24:38 giờ Hà Nội; gồm lượt audit đang chạy. Tổng trạng thái lúc đọc: 71 completed, 3 failed, 2 interrupted, 1 in progress. Thất bại/bị ngắt không tự được đánh dấu hoàn tất.

| Tiêu đề nguồn hoặc trạng thái tiêu đề | ID | Số lượt |
|---|---|---:|
| Clarify the request | 01a1c405-ae08-71c1-92c1-4bd1ccf8ebd3 | 4 |
| Tổng hợp tin nhắn và tài liệu NASA | 01a1c56d-5cc2-7fd3-aa63-484906eed8e0 | 3 |
| Định hình ý tưởng app Mặt Trăng | 01a1c465-5ed0-7013-9c66-635e3222840e | 11 |
| Find remaining work | 01a1c426-744a-7441-afbe-572edb5e9001 | 5 |
| Review project next steps | 01a1c10b-59e7-7b23-b7ff-19171b760f5e | 11 |
| Find the last request | 01a1861c-ed0b-79c3-b49e-3dbd5fdc7370 | 14 |
| Đánh giá và cải tiến app CLPS, archived | 01a1c45d-cb91-7b61-8543-7bf4493851a1 | 2 |
| Không có tiêu đề/turn trong lịch sử đọc, archived | 01a1c402-bf70-7ee1-8570-67a04bc45153 | 0 |
| Tiêu đề inventory là prompt đính kèm Photo 1.jpg, archived; không chép đường dẫn ảnh riêng | 01a1c404-217e-7a92-8c23-bfb370fa87b6 | 1 |
| Verify Space Apps cloud readiness | 01a1ae73-95a6-7003-bdfd-63b7b3b3a0b6 | 5 |
| Set up space-apps-2026-preparation | 01a1ad1a-43cf-739d-906d-fe558fdca080 | 3 |
| Tiêu đề null; lịch sử liên quan được tìm từ link | 01a1ae70-265e-75f7-9773-a4464f7d80c9 | 7 |
| Review NASA project and install frontend… | 01a1c6c5-619d-73f3-ab69-fe9f158314b1 | 5 |
| Đánh giá và cài plugin tự động | 01a1c701-e232-7bb1-b1d3-9d00b0a3aff7 | 1 |
| Đánh giá dữ liệu mở từ trang NASA | 01a1c909-b49b-7ae2-8ca1-a41f4d13b597 | 5 |

Đối chiếu thêm 12 lượt trong hai cloud chat project-tracker, tách khỏi 77 lượt NASA. Chúng không thiết lập quyết định nhóm mới. Không thu thập các chủ đề cá nhân khác vào repo. Tool outputs không được tải hàng loạt trong audit lịch sử; báo cáo runtime cũ được ghi là bằng chứng lịch sử, không phải chạy kiểm mới.

## Kiểm truy cập và bản phát hành

**Đồng bộ mốc giờ cuối ngày 11/11:** bộ hiện hành dùng 00:00 ngày 14/11/2026 để bắt đầu làm đầy đủ và 11:00 ngày 15/11 để nộp Hà Nội (giờ Hà Nội). Word/PDF 6 trang, AI context và index đã thay tại bốn ID Drive cũ; tải lại qua connector khớp SHA-256 từng file, quyền/thư mục giữ nguyên. Hai ô A4 của Sheet đã cập nhật; đọc lại xác nhận chỉ đổi giá trị hai ô, định dạng và ô lân cận giữ nguyên; cả hai tab hiển thị đúng khi mở không đăng nhập. Bản Word/PDF được render và xem toàn bộ, có review độc lập. Bằng chứng: `../nasa-preparation-deliverables/timing-sync-2026-11-11/`. Những lần xuất 5 trang và mốc giờ cũ bên dưới là lịch sử.

**Drive đã kiểm sau đổi quyền:** cả 10 mục hiện có (root, ba thư mục 01/02/99, index, Sheet, Word, PDF, AI context, file thử quyền) có anyone/reader, `allowFileDiscovery=false`, một owner và năm named writers. Bốn mục trước cho sửa công khai đã về reader. Việc mở root giúp người có link thấy các thư mục, không chỉ người chủ sở hữu. Tài liệu mới đưa vào root sẽ thừa hưởng quyền này; không đặt dữ liệu cá nhân ở đây.

**Đã xác minh:** GitHub Settings hiển thị Public sau yêu cầu trực tiếp của người dùng. Drive root liệt kê đủ ba thư mục và index khi chưa đăng nhập; Sheet hiển thị Chỉ xem. Word/PDF/index/AI đã upload tại ID cũ; tải HTTP không cookie/token đều trả 200 và khớp SHA-256 với bản local. File thử quyền cũng tải được. Bản kế hoạch có năm trang, đã xem toàn bộ; font nhúng không đổi hình ảnh trang đã duyệt.

**Bản nội dung đã phát hành và kiểm:** commit `67975b9fd2223eddb9a1a9c5046e4b6e32bdc035` trên main có 17 tệp. Push và ls-remote khớp; trang GitHub không đăng nhập hiển thị Public cùng README mới. ZIP tải không xác thực trả 200; cả 17 tệp khớp bản local. API metadata không xác thực chạm rate limit 403, nên không lấy API đó làm bằng chứng visibility.

**Cloud đã đồng bộ bản nội dung:** chat hiện có Verify Space Apps cloud readiness, nhánh work, fast-forward từ 613719f tới 67975b9. HEAD/FETCH_HEAD/origin/main bằng nhau, cả 17 working blobs khớp commit; root đọc output và so độc lập với Git local. Working tree sạch, ba hash bài luyện scratch không đổi. Không cài/build/chạy rehearsal ở cloud. Bản ghi trạng thái này được commit sau snapshot trên; dùng main mới nhất, không ghim vào snapshot cũ.

**Lượt đồng bộ/kiểm mới hơn ngày 11/11:** cùng chat/checkout/nhánh `work` đã fast-forward tới `8d2f61e`, đủ 21 tệp; coordinator so độc lập toàn bộ blob với Mac. Scratch cũ không đổi, checkout sạch. Lần này đã chạy tally, dựng stock mới ngoài checkout, cài theo lock, checker, lint/build, hai audit đều 0 và sáu nhóm browser production bằng Python Playwright/Chromium có sẵn. Runtime/đường fallback/bằng chứng/giới hạn ở FRONTEND_HANDOFF §6 và HANDOFF; đây không phải kiểm Lunar hay máy đồng đội. Bản ghi 17 tệp phía trên là lịch sử, và số 15 lịch sử/77 lượt cũng chỉ là mốc audit cũ; không tự cộng lượt mới vào đó.

Bằng chứng kiểm byte, output cloud đã đối chiếu và ảnh công khai giữ tại thư mục sibling full-sync-2026-11-11. Không đưa dữ liệu xác thực vào repo. Bản sao nội dung không tự mang theo công cụ trên Mac hoặc toàn bộ lịch sử chat.

GitHub public bảo đảm đường đọc, không tự cấp quyền viết. Trang Manage access sau đổi visibility ghi **hai collaborator, ba lời mời đang chờ**; chưa đủ năm đồng đội nhận lời mời. Repo history trước cập nhật có 16 commit/36 Markdown blobs: bounded scan không thấy token/private-key/điện thoại/email trong nội dung, nhưng commit metadata chứa email tác giả và một tên repo cũ có mã sinh viên. Không viết lại lịch sử; người dùng đã yêu cầu public repo. Không đưa ảnh lời mời/email vào commit mới.

## Còn cần xác nhận

Phạm vi/stack và địa điểm dữ liệu; QA C10/G7; người ghép dự phòng/người nộp; chỗ gặp/phòng/qua đêm; hạn địa phương và hướng dẫn 13/11; máy thật của từng đồng đội và quyền push nếu họ cần. Các đề xuất Moon Plan B và Lunar Workday (AI context mục 1), kế hoạch demo và bài luyện chưa được chứng minh là nhóm đã áp dụng.

Không có tự động đồng bộ mọi chat. Mỗi thay đổi tiếp theo cần cập nhật file chung/Drive và commit, rồi đưa bản mới cho AI hoặc pull về cloud. Bản cũ/ghi chú lịch sử vẫn tồn tại để tra nguồn, không phải một bộ chỉ dẫn cạnh tranh với bản hiện tại.

**Bước tiếp dưới hai phút:** mở README và dùng đúng link tài liệu mới; xác nhận phần việc trên Sheet.
