# Bối cảnh và cách hỗ trợ nhóm Lunar Landing Site Navigator

**Tự chọn đầy đủ công cụ — yêu cầu Sơn ngày 12/11:** đọc [TOOL_SELECTION_CHECKLIST](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/TOOL_SELECTION_CHECKLIST.md) cùng PLUGIN_ROUTING khi bắt đầu hoặc đổi loại việc. Bản đồ gồm mọi mảng công việc, đủ 30 gói và 7 đường hình ảnh/video: tự dùng workflow phù hợp, gồm cả kiểm khoa học/QA/bảo mật/bàn giao; ghi công cụ đã dùng, lựa chọn thay thế hoặc lý do chưa dùng. Không cần Sơn nhắc tên. Không chạy công cụ ngoài việc chỉ để đủ số; giữ mốc thi, phạm vi và quyền hiện có. Đây là chỉ dẫn mang sang chat/máy khác, không tự cài runtime hay bảo đảm tài khoản/hạn mức. Lượt kiểm này thấy 9 tool Blender được công bố trong chat; chưa gọi lại bridge.

**Bảo mật 12/11:** [SECURITY_PREPARATION.md](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/SECURITY_PREPARATION.md) ghi audit repo chuẩn bị, Gitleaks/OSV đã cài và kiểm, cùng quy tắc tự chọn công cụ. Kết quả không có findings chỉ áp dụng phạm vi đã rà; chưa có app Lunar để kiểm. Mac runtime không tự chuyển sang cloud.

Cập nhật ngày **12/11/2026**, bộ chuẩn bị **PREP-2026-11-12**, giờ Hà Nội (UTC+07:00). Đây là bản để một thành viên đưa cho AI của mình; không cần đọc chat riêng của Sơn. **Trước 00:00 ngày 14/11 chỉ chuẩn bị: đã chọn nguồn và phần có thể tận dụng ở mục 5.1–6; chưa tạo mã, UI, tài sản hay dataset bài nộp.** Các lựa chọn là đề xuất theo yêu cầu của Sơn, chưa thay quyết định phạm vi/công nghệ của cả nhóm. Mốc bắt đầu và hạn nộp đã được đính chính ngày 11/11; xem mục 2 và nguồn R31–R32.

**Công cụ hình ảnh/video trên Mac, cập nhật 12/11:** Sơn yêu cầu tự chọn theo công việc: HyperFrames, Remotion, three.js, GSAP, ManimGL, Blender MCP và FFmpeg. Đã cài hoặc dùng lại bản có sẵn, thêm routing toàn cục và kiểm bài mẫu không liên quan đề thi; xem [PLUGIN_ROUTING](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/PLUGIN_ROUTING.md) để biết phiên bản và giới hạn. LaTeX mặc định trong Manim đã sửa và render được phương trình; Blender MCP đã gọi thành công qua Codex app-server mới, kể cả sau khi khởi động lại Blender. Yêu cầu cảnh 3D và video phương trình không nêu tên công cụ đã tự chọn đúng và tạo được file. Chưa khởi động lại giao diện ChatGPT; chat hiện tại chưa hiện công cụ Blender native, nhưng đường MCP cục bộ đã kiểm chạy được. Việc này không chốt stack dự thi, không cài tool lên cloud/máy thành viên và không cho phép làm sản phẩm trước mốc đã thống nhất.

**Repo sản phẩm riêng — Sơn chốt ngày 12/11:** dùng một repo chung mới cho frontend/backend/script dữ liệu/tests/tài liệu tiếng Anh; repo hiện tại giữ chuẩn bị và điều phối. Tên `moon-plan-b` mới là đề xuất, URL/owner/branch/quyền ghi chưa xác nhận. Khi Sơn bắt đầu từ 00:00 ngày 14/11, kiểm checkout/Git/runtime/ownership rồi chuyển chỉ dẫn hiện hành sang AGENTS/HANDOFF tiếng Anh trước task đầu: mốc thi/nộp, English từ bản đầu, nguồn/AI/đơn vị/giới hạn, review, bảo mật và tự chọn công cụ. Dẫn nguồn chuẩn bị theo commit, điều chỉnh đường dẫn/đích và kiểm khả năng tool từng máy; không chép tài liệu riêng/bài luyện hoặc tự chuyển quyền đồng bộ. Ghi URL/owner/branch ở cả hai handoff. Chưa tạo repo sản phẩm hoặc lịch tự chạy lúc nửa đêm.

## 1 Đọc trạng thái trước khi nhận việc

**Đã xác nhận qua người dùng:** nhóm gồm Chung, Trang, Lâm, Minh, Sơn, Thảo; đã đăng ký và thống nhất đề tài Lunar Landing Site Navigator. Chưa có sản phẩm dự thi. Sơn đã tìm nguồn và chuẩn bị tài liệu riêng; không được tính đó là công việc cả nhóm đã làm. Ngày 10/11, Sơn đã gửi tài liệu và tin giới thiệu workspace vào nhóm Zalo; chưa xác nhận mọi người đã đọc.

**Dự định làm việc được người dùng xác nhận ngày 10/11:** cả nhóm gặp trực tiếp và dành trọn thời gian làm việc trong đợt thi chính thức 14–15/11 nếu thu xếp được. “Offline” ở đây chỉ là gặp trực tiếp; vẫn dùng Internet. Không biến điều này thành yêu cầu ứng dụng phải chạy không mạng, địa điểm đã được cấp hoặc cam kết làm xuyên đêm. Không yêu cầu mọi người khai lại toàn bộ giờ rảnh; chỉ hỏi ngoại lệ nếu liên quan việc đang giao.

**Chưa chốt:** điểm hẹn/phòng làm việc cụ thể của nhóm, giờ tập trung và ngoại lệ tham gia; địa điểm BTC công bố không tự xác nhận chỗ được cấp cho nhóm; việc nhóm duyệt phương án sản phẩm/hợp đồng dữ liệu ở kế hoạch mới; việc từng người nhận nhiệm vụ và quyền nộp thực tế; việc từng thành viên mở được workspace và chấp nhận lời mời GitHub; slot chấm riêng và thao tác/quyền Team Owner thực tế. Không tự gán Sơn làm người điều phối hoặc suy khả năng từ tuổi/lớp học.

**Phương án Moon Plan B sửa theo chỉ dẫn Sơn ngày 12/11:** [kế hoạch](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/KE_HOACH_NHOM.md) chốt lõi so cùng điểm ở các ngày khác nhau và so các điểm trong cùng khoảng UTC, kèm vị trí Mặt Trời/Trái Đất so với chân trời; làm lõi này trước tìm Plan B tự động và globe trang trí. Theo Sơn, bộ BTC đến lúc thi mới có; chưa biết nội dung nên không khóa điểm/ngày/cao độ/độ phân giải. BTC là đầu vào chính, nguồn ngoài bổ sung có lý do và kiểm tương thích. Trang + Chung kiểm bộ thực nhận, xét nguồn bổ sung cho phần thiếu, chọn miền phủ chung đã kiểm rồi ghi cấu hình hữu hạn vào bản kê để frontend đọc. Thiếu một đại lượng trong bộ BTC không tự động loại tính năng; nếu các nguồn kết hợp vẫn không đủ thì công khai phần lõi chưa đạt. Python theo lô → JSON → React/Vite tĩnh; không âm thầm thay bộ BTC bằng toàn bộ nguồn ngoài. Đây là chỉ dẫn lập kế hoạch, chưa chứng minh dataset đã phát hành hoặc nhóm đã duyệt. Các đoạn ý tưởng cũ bên dưới về chọn một kiểu so sánh hoặc chưa chọn backend được thay thế bằng đặc tả hiện tại.

**Các phiên bản ý tưởng cũ:** Moon Plan B hai điểm × năm ngày và Lunar Workday là lịch sử, không triển khai song song với đặc tả mới. Khác biệt sản phẩm không được khẳng định là mới: SYNEXIS cũng đã công bố so kịch bản. Đầu ra lõi là cửa sổ hình học tham chiếu, không phải đủ điện/liên lạc bảo đảm/an toàn đáp. Theo đính chính tiếp theo ngày 12/11, không loại cứng phần so sánh mức phù hợp trước khi biết dữ liệu BTC: Trang/Chung đánh giá dữ liệu, mô hình và tiêu chí; chỉ bổ sung khi có người phụ trách, cách kiểm và thời gian, giữ luồng lõi và mốc khóa tính năng (kế hoạch mục 1). Ngày/giờ và ngưỡng trong bài học là thiết kế, không phải lịch hoặc tiêu chuẩn NASA.

**Email BTC mới đã đọc 12/11:** thư nhận 11/11 19:38 giờ Hà Nội khớp sáu thành viên/Lunar, xác nhận thi trực tiếp, đã cấp mã đội, check-in 07:00 ngày 14 tại THCS Trưng Vương, vào cổng Lý Thường Kiệt; chỗ gửi xe hạn chế. Thư dẫn cùng timeline hiện hành, không đổi deadline trong nội dung. Mã đội/email thô giữ ngoài tài liệu công khai. Chưa đọc sơ đồ địa điểm và cập nhật Zalo trong lượt này.

Khi được giao việc, dùng thông tin mới mà thành viên cung cấp để cập nhật trạng thái. Không coi file này là quyền tự xây toàn bộ dự án. Đọc quy tắc của môi trường hiện tại nếu có; không giả định Mac, thư mục, tài khoản, công cụ hay hạn mức của Sơn tồn tại trên máy khác. Ngày chuyển sang 14/11 không tự tạo một nhiệm vụ được giao.

## 2 Ranh giới sự kiện và lịch đề xuất

**Luật dùng nguồn đã đọc lại ngày 11/11:** [Terms 2026](https://www.spaceappschallenge.org/legal/) và [FAQ 2026](https://www.spaceappschallenge.org/resources/participant-faqs/) là căn cứ ở mục 5.1. Cập nhật cuối ngày: được làm toàn bộ dự án từ 00:00 ngày 14/11 theo đính chính của người dùng; timeline mới xác nhận hạn Hà Nội 11:00 ngày 15/11 [R31, R32].

**Hướng dẫn nộp mới ngày 12/11 [R33]:** Sơn đã đọc và tái xác nhận bắt đầu **00:00 ngày 14/11**, không đổi sang 09:00 trong lịch khai mạc của bài SEPA. Hồ sơ và mọi tài liệu được dẫn khi nộp bằng **tiếng Anh**. Theo yêu cầu Sơn, AI phải áp dụng từ bản đầu cho UI, nhãn/lỗi/accessibility, slide/demo, báo cáo xuất và repo GitHub sản phẩm: README, cách chạy/tái hiện, phương pháp/giới hạn, nguồn và AI. Giữ nguyên nguồn/license bên thứ ba; ghi giải thích tiếng Anh. Tài liệu nội bộ và repo chuẩn bị này có thể giữ tiếng Việt; không dùng chúng thay tài liệu sản phẩm khi nộp.

Demo nộp tối đa **7 slide kể cả bìa hoặc video 30 giây**; video giọng Việt cần phụ đề Anh. Trang nộp có tám ô: Project Name, High-Level Summary, Project Demo, Final Project, Project Details, Use of AI, NASA Data / Partner Data, References. Ghi tên/link ít nhất một dataset NASA/đối tác thực dùng, tất cả nguồn ngoài và mục đích dùng AI. Team Owner thao tác Project → Edit → hai xác nhận → Submit; kiểm trạng thái submitted. Nộp bản đầu trung thực sớm sáng 15, sửa xong bấm Submit lại trước 11:00; mục tiêu bản cuối 10:30. Mở mọi link ẩn danh. Buổi chấm 15 phút gồm hỏi đáp, khuyến nghị nói 5–7 phút bằng Việt/Anh, đến sớm 10 phút; slot riêng còn chờ. Kế hoạch mục 10 và COMPETITION_RUNBOOK giữ checklist đầy đủ, tiêu chí chấm và điều kiện nguồn.

| Thông tin | Trạng thái | Cách dùng |
|---|---|---|
| Thi 14–15/11; không bắt đầu làm challenge sớm | FAQ NASA và SEPA đã đọc lại 11/11 [R02, R23] | Hiện chỉ đọc, chọn nguồn và phối hợp; chưa tạo mã, UI cuối hay dataset nộp |
| Làm toàn bộ dự án từ 00:00 ngày 14/11 | Cẩm Chi trả lời 21:38:53 ngày 11/11; người dùng cung cấp và xác nhận [R31] | Hết giới hạn chỉ chuẩn bị từ mốc này: được làm code, UI, tài sản và xử lý dữ liệu bài nộp; không chờ khai mạc/09:00 |
| Cổng nộp mở 09:00 ngày 14/11 | Trang 2 timeline mới đã đọc trực quan [R32] | Giờ mở cổng nộp, không giới hạn giờ bắt đầu làm |
| Nộp địa phương 11:00 ngày 15/11 | Trang 2 timeline mới xác nhận 11:00 [R32]; thể lệ cũ vẫn mâu thuẫn 11:00/12:00 [R28] | Dùng 11:00; từ 00:00 ngày 14 đến hạn này là 35 giờ |
| Nộp toàn cầu 23:59 ngày 15/11 | SEPA [R02]; khác hạn địa phương | Không kéo dài giờ nộp chấm địa phương |
| Ngừng thêm tính năng 09:00; nộp mục tiêu 10:30 ngày 15/11 | Khuyến nghị phối hợp | Không gọi là luật BTC; điều chỉnh sớm hơn nếu thủ tục cần |

Nội dung đề NASA được lập chỉ mục đã đọc ngày 12/11; mở toàn trang Lunar vẫn lỗi 502, bản HackAthlone dùng đối chiếu [R01]. SEPA dùng tên CLPS Lunar Mission Browser, hồ sơ nhóm ghi Lunar Landing Site Navigator; xác nhận đường dẫn khi nộp, không tự đăng ký lại. Hướng dẫn chấm 2025 là lịch sử [R04]. FAQ từng ghi lịch hướng dẫn 13/11 [R23]; hướng dẫn SEPA ngày 12 đã xác định slide/video/ngôn ngữ/thời lượng chấm [R33], còn điều kiện mentor và slot đội cần kiểm riêng. Link hướng dẫn NASA trong R33 chưa đọc được do lỗi SSL; không nhận đã kiểm form đăng nhập. Q&A về framework AI [R29] không cho phép làm sẵn frontend Lunar trước mốc 00:00 đã xác nhận. Người dưới 18 đối chiếu quy định và tình trạng thật.

**Địa điểm và giờ đón tiếp:** Q3 của BTC công bố THCS Trưng Vương và tự túc ăn uống [R30]. Timeline mới [R32] ghi check-in ngày 14 từ 07:00–08:15, khai mạc 08:15–09:00; check-in ngày 15 từ 07:30–08:00. Zoom cho đội online qua email. Đây là thông tin chung; chưa chứng minh nhóm được cấp phòng/chỗ qua đêm hoặc đã chốt điểm hẹn.

Lịch nhóm đề xuất: trước giờ thi chốt nơi gặp, vai trò, quyền và bài đọc; từ 00:00 ngày 14 được làm đầy đủ, theo giờ làm/nghỉ nhóm thống nhất; làm một trường hợp nhỏ có kiểm tra; chiều/tối 14 nối thành bản chung rồi mở rộng phần đã thống nhất; sáng 15 rà và nộp. Đầu ra ngày 14 là một bản chạy được, không phải sáu phần chưa ghép. Chiều 15 dành cho bước được BTC xác nhận; không mặc định còn được sửa bài chấm địa phương. Dành thời gian nghỉ và di chuyển theo lịch nhóm.

## 3 Nơi làm việc và cách phối hợp giữa người với AI

**Link chung ngày 11/11:** [Drive NASA Assets](https://drive.google.com/drive/folders/1H-D22SV6i1RImJHcWxRqtgK2_TP3tn2S), [kế hoạch PDF](https://drive.google.com/file/d/1HzjerYUiOHpLy5ATm43F903shj9uugzI/view), [file AI trên Drive](https://drive.google.com/file/d/19SMq037jiJ9OnIXdfJWUOdafD3EIALDr/view), [repo chuẩn bị](https://github.com/justsomenewbie/space-apps-2026-preparation). Drive hiện cho người có link xem, không bật tìm kiếm; năm đồng đội vẫn giữ quyền sửa riêng. Đã đọc lại cả 10 mục Drive, không còn quyền sửa công khai. GitHub được Sơn yêu cầu công khai; trạng thái hoàn tất/kiểm truy cập được ghi ở [PREPARATION_COVERAGE](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/PREPARATION_COVERAGE.md). Người ngoài có thể tải/chuyển tiếp; chưa kiểm máy thật của từng đồng đội.

**Bảng việc hiện hành:** https://docs.google.com/spreadsheets/d/1zqhG7NVRH-TdO6fr6e0n74d6S2r1--ji2UuySlJGZeA . Lần đọc lại ngày 12/11: Chung ghép/backend; Trang nguồn; Sơn + Thảo frontend; Minh + Trang ở dòng QA; Lâm + Thảo nội dung. Dòng ghi chú G7 vẫn nói Minh + Thảo QA. Kế hoạch mới đề xuất Minh QA tổng thể, Trang khoa học, Thảo UX; chưa sửa Sheet hoặc coi việc nhận vai là đã được xác nhận. Người kiểm tra D6:D11 đều Cả nhóm, trạng thái Chưa làm, link kết quả trống; chưa có cột hạn. Nguyện vọng/cần hỗ trợ còn trống. Tên trên bảng chưa chứng minh người đó đã nhận nhiệm vụ. Quyền đọc GitHub không đồng nghĩa quyền push; không dùng trạng thái lời mời ngày 10/11 làm bằng chứng hiện tại.

Drive dùng cho tài liệu; repo được nhóm chọn dùng cho mã, hướng dẫn chạy, dữ liệu nhỏ phù hợp và lịch sử thay đổi. Không dùng Drive để đồng bộ thư mục code đang sửa. Không đưa email cá nhân, thông tin đăng ký, khóa truy cập hoặc dữ liệu lớn vào Git/bản công khai. Việc công khai tài liệu chuẩn bị này không cho phép AI tự mời người, đổi quyền tài liệu khác, gửi tin, triển khai, mua dịch vụ hoặc cài bộ công cụ lớn.

Zalo và trao đổi trực tiếp dùng để hỏi nhanh, báo kẹt và giữ link. Quyết định về dữ liệu, đơn vị, cấu trúc file, công nghệ hoặc phạm vi phải ghi vào nơi nhóm đã thống nhất. Nhiều máy không chia sẻ ổ đĩa; nhiều AI không tự chia sẻ lịch sử trò chuyện. Người nhận cần có đúng file hoặc phiên bản Git, không chỉ đường dẫn trên máy khác.

**Vòng phối hợp đề xuất:** giao một việc nhỏ → thống nhất đầu vào/đầu ra → làm → người khác kiểm tra → người ghép chạy lại bản chung → cập nhật trạng thái. Bảng có các lựa chọn Chưa làm / Đang làm / Cần hỗ trợ / Chờ kiểm tra / Xong; dùng trạng thái mới nhất trên bảng, không suy công việc đã xong từ tên được điền. Xong nghĩa là kết quả đã được người nhận dùng được và bản chung vẫn chạy.

Sáu nhóm đầu ra để đối chiếu phân công hiện hành: ghép bản chung; nguồn/khoa học; dữ liệu; hiển thị; kiểm tra; nội dung/nộp. Người ghép cần dự phòng. Ban đầu tối đa hai phần code làm song song; các bạn khác vẫn làm nguồn, kiểm tra và nội dung. Đề xuất gặp nhanh 5 phút mỗi 90 phút làm việc; kẹt 15 phút thì báo lỗi và cách tái hiện. Các khoảng này là lựa chọn phối hợp, không phải quy định cuộc thi.

Với code, mỗi người làm trên bản riêng ở máy mình, nhánh riêng cho một việc; gửi pull request kèm bằng chứng thử. Người kiểm tra đọc thay đổi và tự chạy lại; người ghép nhận rồi kiểm tra toàn bộ. Cùng một thư mục thì chỉ một người/AI sửa tại một thời điểm. Hai nhánh trong cùng một thư mục không cách ly file; nếu thật sự cần sửa song song ở cùng máy, cần checkout/worktree riêng và chủ file rõ. Không tự tạo nhiều bản sao hoặc cài CLI chỉ để phối hợp.

Sau giờ được phép bắt đầu, trước khi code song song, người dữ liệu, người hiển thị và người ghép chốt quy ước trao đổi rồi lưu trong repo được chọn. Cả hai người và AI phải đọc cùng link/commit. Lần ghép đầu cần một ca đi từ dữ liệu tới hiển thị được người khác mở lại, rồi mới mở rộng.

Không tự sửa interface, đơn vị, cấu trúc dữ liệu, dependency hay config dùng chung. Khi cần đổi, đề xuất cho người ghép và cập nhật cả nơi tạo lẫn nơi dùng trong cùng một việc được duyệt. Nếu xung đột, đọc hai thay đổi và giữ ý nghĩa đúng; không dùng ghi đè, force push hay xóa thay đổi người khác để qua lỗi.

### 3.1 Phần chuẩn bị mới nhất ngày 12/11

**Frontend do Sơn chọn:** React + TypeScript + Vite/npm/CSS là mặc định đã chuẩn bị; không chờ Chung chọn framework thay Sơn. Ưu tiên thư mục frontend/ trong repo chung khi xác định được URL/branch. Chung phối hợp hợp đồng dữ liệu và tích hợp; các ô về dữ liệu, đầu ra và người kiểm trong [FRONTEND_HANDOFF](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/FRONTEND_HANDOFF.md) chưa được tự điền thành quyết định.

**Bằng chứng thử riêng:** Mac và cloud có kiểm stock template, cài theo lock, tooling check, lint/build, full/production audits và browser production. Cloud chạy kiểm ở 8d2f61e, sau đó đồng bộ riêng tài liệu tới edeff34; hai mốc có ý nghĩa khác nhau và trạng thái sync mới phải xem HANDOFF. Tally có ba assertion; minimatch 11.0.7 là ngoại lệ cross-major đã kiểm, không phải bảo đảm tương thích upstream. Safari thật và Chromium trên Mac đã qua bài PBR/texture 10 phút; Chromium có một frame khoảng 1,1 giây lúc host chịu áp lực. Chưa kiểm Lunar/backend/khoa học, điện thoại thật, native speech/zoom hoặc uptime 24 giờ. Các số test thuộc fixture, không được gắn cho sản phẩm chưa tồn tại.

**Định hướng trải nghiệm của Sơn:** dùng trên điện thoại và máy tính, animation, 3D chân thực, cảm giác chỉn chu và không khí không gian. Chỉ thêm hiệu ứng có ích cho tác vụ; tôn trọng reduced-motion, có fallback khi 3D lỗi. Nhạc/SFX là tùy chọn, mặc định yên lặng, bật do người dùng và có quyền sử dụng. Cảnh minh họa hoặc texture NASA được tối ưu thẩm mỹ không chứng minh địa hình hay phép tính hạ cánh chính xác. Đây chưa phải scope được cả nhóm nhận.

**Hosting:** app public hoạt động độc lập với Mac là mục tiêu. [HOSTING_PLAN](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/HOSTING_PLAN.md) lưu nghiên cứu 12/11: Cloudflare cho frontend/assets, Railway chỉ khi cần backend Python, database khi cần lưu tài khoản/dữ liệu. Static nhỏ có thể miễn phí trong hạn mức; dự toán API nhỏ 5–10 USD/tháng hoặc 25–35 USD với backend nhỏ, trước thuế/domain, không phải trần hóa đơn. Chưa mua, deploy hoặc đo tải/uptime. Kiểm lại giá, hạn mức và tài khoản khi chọn dịch vụ.

**Kiến trúc đề xuất 12/11:** [sơ đồ và thuyết minh](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/docs/architecture-proposal/ARCHITECTURE_PROPOSAL.md) gồm nền tảng web, backend xử lý theo lô, kết quả có phiên bản, frontend và API có điều kiện; có luồng người dùng/dữ liệu. Giả định miền lựa chọn hữu hạn, chưa là quyết định nhóm. Đã bổ sung [giải thích lý thuyết](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/docs/architecture-proposal/THEORY_PRIMER.md) có nguồn NASA/JPL/LOLA/NAIF/MDN, ví dụ giả định và kế hoạch kiểm khái niệm. Chưa có mô hình toán/thuật toán được chọn hoặc kết quả kiểm định. Diagram Design, Context Mode, đọc nguồn, browser và reviewer đã được dùng; không khẳng định đã dùng mọi tool hoặc kiểm sản phẩm thật.

### 3.2 Tự chọn công cụ và tiếp nối chat

AI đọc [AGENTS](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/AGENTS.md), [HANDOFF](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/HANDOFF.md), runbook và [PLUGIN_ROUTING](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/PLUGIN_ROUTING.md). Người dùng không phải gọi tên plugin. Chọn workflow phù hợp từ mục tiêu, đọc hướng dẫn thật và kiểm khả năng trong phiên hiện tại. [PLUGIN_GUIDE_REVIEW](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/PLUGIN_GUIDE_REVIEW.md) phân biệt 30 pack, thư viện chỉ dẫn, runtime đã thử và tính năng chưa kiểm; không coi tất cả đều hoạt động trên mọi máy.

Dùng Git, việc nhỏ có đầu vào/đầu ra và review độc lập trước. CodeGraph đi trước khi repo có index; repo chuẩn bị chưa có. Context Mode lọc output lớn, không phải bộ nhớ tự động; index/search chạy được nhưng diagnostic còn báo lệch cấu hình/hook. GSD chỉ khi quản lý nhiều giai đoạn có ích; không chồng thêm BMAD. Relay Antigravity dùng nhiệm vụ hẹp và Codex kiểm lại. Không tự chuyển các cài đặt, quota, hook hay account trên Mac sang cloud hoặc máy đồng đội.

Khi bắt đầu chat, đối chiếu các lượt mới hoặc phần thiếu liên quan với checkpoint trong [PREPARATION_COVERAGE](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/PREPARATION_COVERAGE.md), nếu có công cụ/quyền đọc. Không mặc định đọc mọi chat, không lấy listing summary làm bằng chứng đã đọc nội dung, không gửi tin để chỉ kiểm trạng thái. Sau việc lưu quyết định vào file sở hữu, cập nhật handoff, bằng chứng và từng trạng thái local/GitHub/cloud/Drive. Thiếu công cụ đọc chat thì nêu giới hạn và tiếp tục từ file; không bịa đã đồng bộ.

Mốc 15 lịch sử/77 lượt là audit cũ ngày 11/11; lượt 12/11 chỉ đọc sáu lượt chọn trong bốn chat và ghi rõ khoảng trống. Bài kiểm assistant không có lịch sử chat đã phục hồi được timing, quyết định mở, routing và sync state; không chứng minh nhớ hoàn hảo hay tích hợp mọi app. Các check chạy lúc AI làm việc, không có capture hoặc đồng bộ nền. Bản Word/PDF là bản đọc kế hoạch; ZIP trên Drive giữ toàn bộ nguồn repo, bản kê SHA-256 xác định phiên bản. Không đưa chat riêng hoặc credentials vào bộ chung.

**Mặc định do Sơn yêu cầu ngày 12/11:** sau mỗi việc làm thay đổi ghi chú/chỉ dẫn chuẩn bị, AI phải đồng bộ GitHub, checkout cloud hiện có và Drive/Word/PDF, rồi đối chiếu commit, nguồn và hash trước khi báo xong; không chờ Sơn nhắc lại ở chat mới. Đây là quyền thường trực trong phạm vi các đích hiện có, gồm liên hệ chat cloud để đồng bộ an toàn; giữ nguyên quyền chia sẻ và công việc của người khác. Làm theo mục “Standing preparation sync” trong AGENTS. Word/PDF chỉ cần xuất lại khi KE_HOACH_NHOM.md đổi; nếu nguồn không đổi, kiểm hash nguồn và bản xuất đang giữ. Nếu thiếu công cụ/quyền hoặc có xung đột, hoàn tất phần an toàn, ghi rõ đích còn chờ và tiếp tục ở phiên liên quan sau; không tự nhận đã khớp. Không có tiến trình đồng bộ nền.

## 4 Nhận một nhiệm vụ và bàn giao

Nếu thành viên chỉ đưa file này mà chưa giao việc: xác nhận ngắn đã hiểu trạng thái, hỏi họ muốn nhận phần nào. Không tự chạy dự án. Nếu đã giao rõ, không hỏi lại toàn bộ kế hoạch; đọc đầu vào có sẵn và tiến hành đúng phần được giao, trong giai đoạn cho phép. Thiếu thông tin chỉ hỏi câu ảnh hưởng trực tiếp đến việc đó.

Mẫu nhiệm vụ để điền khi giao việc; đây không phải một nhiệm vụ đã được giao:

```text
Người nhận / người kiểm tra / người ghép:
Mục tiêu và hạn bàn giao:
Giai đoạn hiện tại và nguồn xác nhận được phép làm:
Đầu vào, file hoặc commit đang dùng:
File được sửa; phần không được đổi:
Đầu ra và ví dụ kết quả đúng:
Cách kiểm tra; điều kiện dừng để hỏi:
```

Trước khi sửa: xác định runtime, đọc chỉ dẫn và trạng thái hiện tại, kiểm tra thay đổi có sẵn và người đang sửa. Không giả định cài sẵn thư viện, model hay tool. Dùng công cụ đang có; giải thích từ chuyên môn khi hướng dẫn người mới. Giữ phạm vi nhỏ và không viết lại phần của bạn khác.

Sau việc, trả lời ngắn bằng tiếng Việt: đã làm gì; file/phiên bản bàn giao; cách mở; kiểm tra thực sự đã chạy và kết quả; lỗi/giới hạn còn lại; bước tiếp cho người nhận. Phân biệt “đã sửa”, “đã chạy thử”, “đã ghép”, “đã push” và “đã nộp”. Không tuyên bố kiểm thử đạt chỉ vì code trông đúng. Không thể chạy kiểm tra thì nói rõ.

Ghi việc AI hỗ trợ, nội dung được dùng và người kiểm tra để khai báo theo hướng dẫn cuộc thi. Sau hai vòng sửa không qua, thu hẹp hoặc giao lại; sau ba lần thất bại, dừng và nêu giả định có thể sai. Khi bị chặn quyền, không đổi đường để vượt chặn.

Giữ một ghi chú bàn giao ngắn tại nơi nhóm chọn: thời điểm cập nhật; quyết định đã được ai chốt; người đang giữ việc; file/commit; kết quả kiểm tra; việc còn vướng; một bước tiếp. Không chép lịch sử chat dài vào mỗi lần giao việc. Một AI sửa ghi chú tại một thời điểm; ghi chú không tự đồng bộ sang cuộc trò chuyện khác.

## 5 Mức trùng của hướng đề tài và quyết định cần làm

Cập nhật 11/11: ngoài README/tài liệu đã đọc 10/11, đã đọc LICENSE và các tệp chọn lọc của CLPS/PolarWindow bằng GitHub connector. Đây là kiểm nguồn và quyền dùng; chưa chạy ứng dụng, kiểm thử thuật toán hoặc chứng minh số liệu khoa học. Đánh giá ngày 12/11 giữ lõi so sánh là hướng phù hợp đề, nhưng không coi những tính năng trùng này là đóng góp mới; xem mục 1. Phần dưới bảo tồn bằng chứng về công cụ tương tự.

| Nguồn | Phần đã được tác giả mô tả | Hệ quả với đề xuất nhóm |
|---|---|---|
| PolarWindow README và system design [R17, R20] | So sánh địa điểm, đổi ngày, chọn khoảng, lịch, nguồn, báo cáo và bản lưu ngoại tuyến | “Nếu đổi ngày thì sao”, tiếng Việt, báo cáo hay offline chưa tự tạo khác biệt |
| PolarWindow API [R21] | Lịch ngày/tháng, hạng chưa xác định/đồng hạng khi khoảng sai số chồng nhau, số liệu tâm/mép/toàn đĩa thiên thể | “So sánh có xét bất định” cũng đã được mô tả |
| CLPS Browser README [R16] | So sánh 2–4 điểm/ngày, chân trời phẳng/địa hình, timeline, Simple/Expert mode, xuất dữ liệu và nguồn | Không chọn lại cùng bộ tính năng rồi gọi là mới; catalog còn có tọa độ mẫu tùy ý |

LOLA là thiết bị/nguồn dữ liệu [R05]. Moon Trek, QuickMap và SVS cung cấp công cụ hoặc mô phỏng liên quan [R13–R15]; Atlas/NavLunar là ví dụ thêm [R18, R19]. Không có căn cứ kết luận toàn bộ đề thi không còn cơ hội, cũng không có căn cứ nói ý tưởng nhóm đã khác biệt. Đề bài chung và đóng góp của một sản phẩm là hai quyết định khác nhau; không tự đổi đăng ký.

**Câu hỏi khảo sát được đề xuất, chưa phải sản phẩm:** khi hai công cụ cho kết quả khác nhau, người mới có nhận ra do khác định nghĩa/cấu hình không? CLPS README và PolarWindow API mô tả cách xét tâm/mép đĩa khác nhau ở một số đại lượng [R16, R21]. Điều đó là lý do kiểm tra khả năng đối chiếu, chưa chứng minh có thiếu công cụ hay có nhu cầu.

Trong một buổi đọc/thử 30 phút được đề xuất, dùng công cụ hiện có cho cùng tác vụ; nhờ hai người mới chỉ ra định nghĩa, đơn vị, thời gian và giới hạn cần đồng nhất. Ghi nơi họ vướng và chức năng đối chiếu hiện có. Nếu công cụ đã giải thích đủ hoặc không thấy khó khăn, bỏ giả thuyết này. Hai người chỉ là thử sớm, không phải khảo sát đại diện. Đây là quan sát khi chuẩn bị, không tạo phần mềm, bộ dữ liệu xử lý hay tài sản nộp trước giờ cho phép.

Chỉ đề xuất chốt hướng khi ghi được: người dùng cụ thể; khó khăn đã quan sát; công cụ gần nhất xử lý đến đâu; cải thiện nhỏ có thể kiểm tra và nằm trong đề. Nếu thiếu mắt xích, tiếp tục xét lại hướng hoặc trình bày trung thực đây là bản học tập. Không thêm chatbot/3D/chấm điểm chỉ để nhìn khác; không khẳng định “đầu tiên”, “duy nhất”. Nếu không tìm được hướng phù hợp, báo nhóm bàn lại lựa chọn, không tự đổi đề. Không viết spec hoặc tài sản dự thi từ một giả thuyết chưa được nhóm chọn.

**Quan sát giao diện ngày 12/11 — đánh giá heuristic của AI, không phải thử với người dùng hoặc kiểm số khoa học:** chỉ mở hai công cụ công khai trong browser 1280×720, tìm Shackleton/vùng cực Nam, tìm ngày/giờ và nguồn/giới hạn. Không thấy link demo công khai trong README CLPS/PolarWindow đã kiểm nên không clone/chạy hai repo đó. Không tải dataset hoặc bấm gửi tác vụ tính toán. Chi tiết: bằng chứng Mac sibling `public-tool-observation-2026-11-12/OBSERVATIONS.md`.

| Công cụ đã mở | Hành vi quan sát được | Điểm cần giải thích cho người mới |
|---|---|---|
| [Moon Trek](https://trek.nasa.gov/moon/) | Fly To với Shackleton cuối cùng chuyển bản đồ về gần cực Nam. Sau chuyển bản đồ cực Nam, dùng điểm tạm để mở Sun Angle; nhập được 14–15/11, hai nhãn ngày đều ghi UTC. Metadata của lớp Artemis III ghi rõ đây là 13 vùng công bố năm 2022. | Form hiển thị Interval=50 nhưng không có đơn vị ngay cạnh. Data search và Fly To là hai luồng khác nhau. Chưa quan sát kết quả Sun Angle hay luồng Earth visibility; không kết luận tính năng đó không tồn tại. Điểm tạm cuối cùng không phải Shackleton. |
| [QuickMap](https://quickmap.lroc.im-ldi.com/) | Tìm thấy Shackleton cùng link nguồn USGS; chọn từ bản đồ mặc định báo vị trí không hợp projection. Chuyển được sang cực Nam rồi 3D; đặt được thời gian 14/11 theo UTC/ISO 8601. Visibility Analysis có cả Sun/Earth, khoảng thời gian, số bước và cảnh báo giới hạn địa hình/browser. Metadata lớp nền nêu LRO, LROC-NAC/WAC và độ phân giải. | Observer của form là camera hiện tại, không tự là điểm đáp vừa tìm; lần quan sát đang ở cao độ khoảng 2 787 km trên bề mặt. Cần phân biệt vị trí camera với điểm trên mặt đất. Longitude 0–360 được ghi trong Settings. Không bấm Compute Visibility nên chưa kiểm kết quả. |

**Hệ quả đề xuất, chưa được nhóm chọn:** nhóm có thể cân nhắc demo giải thích một điểm qua hai ngày, hoặc so hai điểm cùng ngày và giải thích một đánh đổi. Cả hai cần làm rõ điểm quan sát, UTC/đơn vị, nguồn và giới hạn ngay cạnh kết quả. Đây là giả thuyết cải thiện cách giải thích để thử với người mới, không chứng minh nhu cầu, ưu thế hay tính mới; các tính năng ngày/3D/Sun/Earth đã xuất hiện ở công cụ hiện có.

### 5.1 Luật 2026, giấy phép và phần đã chọn để tận dụng

**Đã xác minh ngày 11/11:** [Terms 2026](https://www.spaceappschallenge.org/legal/), cập nhật 07/08, mục *Use of Third-Party Materials*, cho phép mã/dữ liệu ngoài NASA nếu công khai tự do không hạn chế hoặc có giấy phép nguồn mở OSI. Hồ sơ phải nêu giấy phép, dẫn mọi nguồn kể cả miễn phí và có đủ quyền phân phối. Phần tự tạo cũng phải đáp ứng điều kiện mở. [MIT](https://opensource.org/license/mit) và [Apache-2.0](https://opensource.org/license/apache-2-0) là giấy phép OSI; điều này hỗ trợ dùng các phần đã kiểm, không tự bảo đảm cả bài hợp lệ.

[FAQ 2026](https://www.spaceappschallenge.org/resources/participant-faqs/), đề ngày 13/10, cấm bắt đầu làm challenge trước hackathon, yêu cầu mô tả việc dùng AI/SI và ghi lịch ra hướng dẫn nộp/chấm ngày **13/11**. Vì vậy hiện chỉ đọc, chọn nguồn và ghi điều kiện; chưa fork để triển khai, sửa helper hay dựng dataset.

Trong hai nguồn trên chưa thấy tỷ lệ mã tự viết tối thiểu hoặc điều khoản riêng bảo đảm nộp bản sửa của nguyên app cùng đề. Đây là giới hạn tìm thấy, không phải lệnh cấm suy diễn. **Quyết định kỹ thuật: lấy phần nhỏ hiểu/kiểm được, chưa chọn nguyên app làm nền.** Ngày 13/11 đọc thêm hướng dẫn mới trước khi triển khai.

Terms và FAQ được đọc đầy đủ qua Exa; reviewer độc lập lấy lại cùng hai URL. Không dùng FAQ legacy, trang staging có nội dung năm cũ hoặc hướng dẫn 2025 để kết luận luật 2026.

| Nguồn | Quyết định lựa chọn | Điều kiện / bằng chứng hiện có |
| --- | --- | --- |
| [CLPS Lunar Mission Browser](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser) | **Chọn ứng viên mã ưu tiên:** [build_windows()](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/7f2cd2756c3667abe2bc4ee78f8eb2a179956b57/backend/lunar-core/src/lunar_core/windows.py), nếu nhóm dùng Python; chỉ dùng thư viện chuẩn. [visibility.py](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/7f2cd2756c3667abe2bc4ee78f8eb2a179956b57/backend/lunar-core/src/lunar_core/visibility.py) **chỉ đọc phương pháp**, chưa mượn vì phụ thuộc `HorizontalPosition` và quy ước mép Mặt Trời/tâm Trái Đất. | LICENSE **MIT**, pin `7f2cd2756c3667abe2bc4ee78f8eb2a179956b57`; giữ copyright/permission notice. Không chuyển stack chỉ để lấy helper. [Catalog](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/7f2cd2756c3667abe2bc4ee78f8eb2a179956b57/backend/lunar-core/src/lunar_core/catalog/sites.json) ghi **tọa độ mẫu tùy ý**, loại khỏi nguồn điểm đáp thật. Chưa chạy app/tests. |
| [PolarWindow](https://github.com/MdAhbab/PolarWindow) | **Chọn cách ghi nguồn** từ [data-sources.md](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/docs/data-sources.md): nguồn/ngày đọc, điều chưa xác nhận, phân biệt loại tọa độ. **Dự phòng** [rankLabel()](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/frontend/src/lib/rank.ts) khi nhóm có TypeScript và hợp đồng xếp hạng thật; chưa lấy UI/schema/bảng dữ liệu. | LICENSE **Apache-2.0**, pin `84075e5f36f49ccf22b7100ae3f68a4ac02e62d1`; giữ license/ghi công, đánh dấu tệp sửa, giữ NOTICE nếu có. Cây repo đã kiểm không có NOTICE. Stack/dữ liệu đầy đủ khá rộng; README tự báo lần tải đầu khoảng 1,2 GB, chưa đo/chạy. |
| [Lunar South Pole Operations Atlas](https://sighmon.com/space/) | Cách đặt nguồn/sai số cạnh số liệu, phân biệt trung bình dài hạn với timeline và báo vùng thiếu dữ liệu. | Pin `67f91d64304d6c8ced399d73a77530b9909c70f2` đọc 12/11: cây repo không có LICENSE/COPYING/NOTICE, chưa tìm được lời cấp phép trong tài liệu/tệp đã kiểm. Chỉ tham khảo; chưa chọn sao chép. Chi tiết source/phương pháp và giới hạn ở bản rà tài nguyên. |
| [NavLunar](https://navlunar.com/about) | Khám phá nguồn, đọc phương pháp, xem cách giải thích đường đi và điều kiện ánh sáng. | Đọc lại 12/11: chưa xác định repo/license chính thức. Trang chủ nói có bóng địa hình dọc tuyến, About Routing vẫn ghi chân trời trơn; chưa thử để phân xử. Không dùng như chuẩn số độc lập. |
| [Moon Trek](https://trek.nasa.gov/moon/jpl/config/textAbout.html) / QuickMap | Công cụ đối chiếu và tìm metadata của lớp nền. | Công cụ hiển thị không phải một dataset duy nhất. Cần về đúng sản phẩm gốc để xác định phiên bản, frame, quyền dùng; không tự suy giấy phép từ việc xem được trên web. |

[Rà tài nguyên 12/11](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/docs/resource-review-2026-11-12.md) ghi pin/source, phạm vi SVS, bất nhất label PDS và hàng đợi độc lập. Hai LICENSE được đọc qua GitHub connector. Liên kết cố định: [CLPS LICENSE](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/7f2cd2756c3667abe2bc4ee78f8eb2a179956b57/LICENSE), [PolarWindow LICENSE](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/LICENSE). Giấy phép repo không tự bao trùm ảnh/dữ liệu bên thứ ba, dependency hay logo. Khi thực sự dùng, ghi tác giả/repo, commit/file, license, phần sửa, phần nhóm làm và kết quả kiểm vào hồ sơ; hiện chưa có thành phần được tích hợp để khai là đã sử dụng.

**Kiểm cần làm trong giờ thi:** với `build_windows()`, xác nhận thời gian tăng nghiêm ngặt, cùng quy ước múi giờ, `range_end` sau mẫu cuối và độ dài khớp; kiểm rỗng, một mẫu, đổi trạng thái, cửa sổ chạm biên. Hàm chưa tự kiểm hết đầu vào đó. `rankLabel()` chỉ diễn đạt backend: nếu dùng phải kiểm cờ đồng hạng/giới hạn/sai số và bản dịch, không coi đây là thuật toán xếp hạng đã kiểm định.

**Loại khỏi phần định mượn:** [useProvenance.ts](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/frontend/src/lib/useProvenance.ts) gán nhãn `measured` từ trạng thái tải kernel/DEM, chưa chứng minh kết quả là số đo. Mục *Candidate sites* của [data-sources.md](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/docs/data-sources.md) chọn điểm theo thuật toán quanh mốc LPI, gồm nhóm cao độ cao nhất và ngưỡng dốc 12°: đó là lựa chọn riêng, không phải tiêu chuẩn an toàn NASA. Không lấy catalog này hoặc [test_synthetic_golden.py](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/backend/app/tests/golden/test_synthetic_golden.py) làm dữ liệu đo. Không suy rằng toàn bộ app dùng số giả.


## 6 Đầu vào và quy trình kỹ thuật đề xuất

Mục này là quy trình nền tham khảo cho giờ thi nếu nhóm chọn một hướng còn phù hợp; không phải lệnh tiếp tục xây comparator, dữ liệu hay thiết kế đã triển khai. Backend và hợp đồng dùng chung chưa chọn; frontend do Sơn chọn React + TypeScript + Vite; ưu tiên công cụ người thực hiện biết dùng. Tọa độ, khoảng thời gian và tiêu chí phải được nhóm chốt sau khi đọc đề và nguồn. Ví dụ hai vị trí hoặc hai ngày chỉ áp dụng nếu nhóm chọn hướng so sánh sau bước xét lại; đó không phải phạm vi đã được giao. Chỉ mở rộng sau khi một ca chạy được.

Đầu vào cần lưu: nguồn vị trí, vĩ độ/kinh độ/cao độ tham chiếu; thời gian và múi giờ/thang thời gian; target/observer, azimuth/elevation và header từ Horizons; DEM và metadata nếu thực sự dùng địa hình. Giả định do nhóm chọn phải ghi riêng, không gọi là chuẩn NASA. Không lấy tâm hố rồi coi là điểm đáp chính thức.

Theo phần lunar observer của Horizons Manual: Đông dương, Nam âm; cao độ nhập theo km so với bề mặt tham chiếu. Phải kiểm tra đúng frame, quy ước góc và loại hiệu chỉnh trong header [R09]. Góc cao không tự bao gồm núi/miệng hố che khuất. Không dùng góc Mặt Trời để suy đủ điện, góc Trái Đất để suy chất lượng đường truyền, hoặc hai góc đó để suy hạ cánh an toàn.

PGDA 90: hệ MOON_ME gắn DE421; tọa độ phẳng cực nam theo mét. Trang liệt kê DEM 20 m vùng 80–90°S cỡ 2.6G, 10 m vùng 83–90°S cỡ 4.8G [R07]. Chọn vùng nhỏ hoặc bỏ xử lý địa hình trong bản đầu; không tải cả kho. Độ phân giải không đồng nghĩa độ chính xác. PGDA 78 và README đã đọc trực tiếp ngày 11/11: raster 5 m/pixel, MOON_ME/DE421, chiếu cực nam; X/Y và cao độ raster theo mét, độ dốc theo độ, point cloud .xyzi theo km. Giữ lớp sai số và số đo; chưa tải raster hoặc kiểm header thực tế [R06].

PGDA 69 mô tả trung bình 18,6 năm lấy mẫu theo giờ; không thay chuỗi thời gian cho ngày cụ thể. Thấy một phần đĩa Trái Đất không bằng liên lạc với một trạm mặt đất cụ thể [R12].

**Nguồn mở nên tận dụng — lựa chọn chuẩn bị, chưa lấy dữ liệu bài nộp:**

| Nguồn được chọn | Tận dụng phần nào | Quyền/điều kiện và giới hạn |
|---|---|---|
| **JPL Horizons** [R08–R11] | Ephemerides Mặt Trời/Trái Đất cho site/ngày nhóm chọn | Dịch vụ công khai; giữ nguồn, request/header, phiên bản, đơn vị, thời gian và bản gốc. Tuân chính sách API; không tự gán MIT cho kết quả. Đây là số tính từ mô hình, không phải đo tại điểm đáp. |
| **PDS/LOLA, PGDA 78/90** [R05–R07, R24] | Độ cao, dốc và sai số nếu cần địa hình; chỉ vùng nhỏ có phủ | PDS FAQ xác nhận dữ liệu lưu trữ PDS là public domain, cần dẫn nguồn. Giữ label/DOI/ID/version/checksum; không suy mọi tài sản ngoài PDS cũng có cùng quyền. Với PGDA, dẫn DOI/bài báo sản phẩm và đối chiếu metadata tệp chọn. PGDA 69 chỉ dùng bối cảnh dài hạn [R12]. |
| **Nguồn vị trí NASA/LROC/NAIF** [R25] | Ghi rõ tọa độ thực tế, dự kiến hoặc tâm địa hình; nguồn có ngày | Dùng thông tin công khai và ghi nguồn gốc/độ chính xác ngày, không lấy catalog mẫu trong repo. Trang CLPS tổng quan không thay nguồn tọa độ; danh sách vùng Artemis không phải tọa độ điểm đáp. Chưa chốt địa điểm. |
| **Moon Trek/QuickMap; SPICE dự phòng** [R13–R14, R26] | Tra metadata, xem lớp địa hình; SPICE chỉ khi thật sự cần | Quyền công cụ không thay giấy phép từng lớp. NAIF cho dùng kernel và phân phối kernel nguyên bản theo điều kiện; kernel sửa phải ghi metadata/ghi công. Mirror Toolkit nguyên bản cần chấp thuận; đóng gói module trong công cụ tự xây theo quy định riêng. Chưa cài/tải kernel. |
| **NASA SVS/ảnh NASA** [R15, R27] | Tìm ảnh giải thích sau khi chọn đúng asset | NASA media guidance cho dùng giáo dục/thông tin với credit và điều kiện riêng; ảnh bên thứ ba/logo không được suy quyền từ nhãn NASA. Không ngụ ý NASA bảo trợ. Chưa chọn/sao chép asset bài nộp. |

Slide `NASAChallenge202611.pptx` (28 slide, đã đọc lại slide 9–11 và 25–26 ngày 11/11) là tài liệu học/chuẩn bị: ephemerides, DEM, site có nguồn, sai số và khả năng tái lập. Không dùng từ “bắt buộc” trong slide thay cho luật BTC; chưa công khai slide hoặc cấp lại quyền ảnh trong slide.

Quy trình đề xuất sau giờ cho phép:

1. Chọn một ca có nguồn. Người thứ hai đọc lại tọa độ, đơn vị, thời gian và định nghĩa kết quả trước khi tính.
2. Lấy Sun/Earth từ Horizons cùng vị trí và mốc thời gian, giữ cấu hình, kết quả gốc và header. Người khác kiểm tra vài dòng với nguồn cùng cấu hình.
3. Chuẩn hóa file, kiểm tra thời gian tăng, giá trị thiếu, phạm vi và đơn vị. Không biến dữ liệu thiếu thành 0; không sửa đè kết quả gốc.
4. Nối một đường từ chọn ca đến kết quả nhìn được, có nhãn và giới hạn; người kiểm tra chạy trên bản chung.
5. Thêm điểm hoặc ngày thứ hai, so sánh cùng cơ sở, rồi thử người dùng và chuẩn bị demo.

JPL API policy yêu cầu gửi từng request tuần tự, tái dùng kết quả, lùi thời gian khi lỗi; tự động hóa cần User-Agent đúng tên/phiên bản/liên hệ và kiểm tra phiên bản API. Chính sách nêu không nhúng API trực tiếp vào website [R10, R11]. Phương án nhỏ được đề xuất: lấy dữ liệu trong giờ thi rồi cho app đọc bản lưu. Không hứa API luôn có mạng hay luôn sẵn sàng. Chạy từ file đã lưu là phương án kỹ thuật dự phòng, chưa phải yêu cầu “offline” của người dùng.

Bước lấy mẫu do nhóm chọn, không phải ngưỡng khoa học mặc định. Nếu thử 15 phút, ghi rõ giả định; muốn thời điểm mọc/lặn phải tìm kỹ quanh đổi dấu hoặc báo khoảng giữa hai mẫu. Không in chính xác tới giây từ mẫu thưa; không có sự kiện thì ghi không quan sát thấy trong khoảng khảo sát.

Ngưỡng góc cao 0° là chân trời lý tưởng theo mô hình dùng; nói rõ tâm hay mép đĩa thiên thể. Chỉ thêm địa hình khi xử lý được frame, cao độ, NoData/phạm vi DEM, độ cong và sai số, có kiểm tra độc lập. Nếu không đủ, ghi “chưa xét địa hình”. Mỗi kết quả giữ mã ca, URL/ngày lấy, tọa độ/frame, đơn vị/thời gian, phiên bản/header, giả định, giới hạn và cách/người kiểm tra.

## 7 Nghiệm thu và giảm phạm vi

Các ca liên quan điểm/ngày, Horizons, biểu đồ và chân trời dưới đây chỉ áp dụng nếu nhóm chọn hướng đó sau bước xét lại mức trùng. Nếu chọn hướng khác trong đề, người ghép và người kiểm tra thay bằng tiêu chí phù hợp trước khi giao việc; không tự dùng các ví dụ này để chốt sản phẩm.

Bản chung phải mở được trên máy thứ hai theo hướng dẫn. Cùng điểm/thời gian cho cùng kết quả; đổi ngày phải cập nhật cả bảng, biểu đồ và nhãn. Đối chiếu đầu/giữa/cuối với nguồn đúng cấu hình. Đối chiếu lại Horizons kiểm tra tích hợp, không tự chứng minh mô hình bằng một mô hình độc lập.

Sai tọa độ, thiếu dữ liệu và ngày ngoài phạm vi phải có thông báo; không trả số giả. Nếu có phương án mở bản lưu khi mất mạng, kiểm tra đúng phạm vi bản lưu, không ngụ ý truy vấn mọi ngày. Sát chân trời phải thể hiện giới hạn lấy mẫu/địa hình; không có kết luận đủ điện, liên lạc chắc chắn hay hạ cánh an toàn khi thiếu mô hình.

Mốc giảm phạm vi là đề xuất: đến trưa 14 chưa có số liệu tin cậy thì bỏ địa hình tự làm; giữa chiều chưa có luồng chạy thì thu còn một ca; cuối ngày chưa ghép thì dừng tính năng phụ và sửa bản nền. Một ca chỉ là demo hạn chế, không tự nhận đáp ứng đầy đủ bài toán so sánh. Đừng thêm chatbot, tài khoản, cơ sở dữ liệu hay 3D nặng chỉ để tạo cảm giác mới.

Hồ sơ nộp theo R33 và kế hoạch mục 10: kiểm tiếng Anh của UI/README/hồ sơ, tám ô, demo ≤7 slide hoặc ≤30 giây, nguồn NASA/đối tác và AI, link không đăng nhập. Lâm/Sơn hỗ trợ chuẩn bị; chỉ người có vai trò Team Owner bấm Submit, không suy quyền từ phân công và không chia sẻ mật khẩu. Giữ release commit/hash và bằng chứng submitted sau lần sửa cuối. Hiện chỉ chia sẻ tài liệu chuẩn bị; mở file này không phải nộp sản phẩm. Chưa có sản phẩm dự thi hoặc xác nhận nộp; chưa sao chép/tích hợp/chạy mã hai repo, tải DEM/kernel hay xử lý dataset nộp thi.

## 8 Nguồn và tình trạng kiểm chứng

R01/R03/R04 giữ trạng thái lịch sử. R06/R07/R12–R15/R18/R19 có bổ sung đọc tài liệu hoặc hòa giải bằng chứng ngày 12/11; các nguồn khác không tự được tính đã mở lại. Ngày 11/11 đã kiểm lại nguồn dữ liệu chọn ở mục 6, luật 2026, LICENSE và mã chọn lọc hai repo; đây không phải kiểm runtime, toàn bộ đường tải hay kết quả khoa học. Mọi phần “chọn” vẫn là ứng viên cho giờ thi, không phải đã tích hợp hoặc nhóm đã chốt. URL pin ở mục 5.1 xác định đúng phiên bản đọc; link nhánh main bên dưới có thể thay đổi.
### Đề và sự kiện

**R01 Bản đối chiếu đề tại HackAthlone** — Đọc được; mô tả nhu cầu so sánh site và date. Trang gốc NASA vẫn lỗi 502 trong lần kiểm tra. Link đọc: https://hackathlone.com/challenges/lunar-landing-site-navigator . Link gốc cần xác nhận: https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/ .

**R02 SEPA Hanoi 2026** — Đọc được; lịch, hướng dẫn dự kiến, quy tắc không làm sớm và người dưới 18. https://sepa.org.vn/en/spaceapps-hanoi-2026

**R03 Trang Hanoi** — Chưa đọc lại được. Mốc 11:00 là phát hiện cũ trong hồ sơ, không phải xác minh mới. https://eventstem.com/spaceapps.html?lang=vi

**R04 Hướng dẫn chấm 2025** — Đọc được; chỉ dùng để tham khảo quan niệm cải tiến, không áp dụng yêu cầu nộp sang 2026. https://spaceapps-v2-staging.s3.amazonaws.com/media/documents/Final_Space_Apps_2025_Judging_Guidelines_for_web.pdf

### Dữ liệu và cách sử dụng

**R05 NASA Science LOLA** — Đọc được; nguồn gốc thiết bị và sản phẩm. https://science.nasa.gov/mission/lro/lola/

**R06 PGDA 78** — Trang sản phẩm/README đã đọc 11/11; đọc lại HTML/README ngày 12/11, xác nhận XYZI dùng km, khác bộ 90. Chưa tải raster. https://pgda.gsfc.nasa.gov/products/78 ; https://pgda.gsfc.nasa.gov/data/LOLA_5mpp/README

**R07 PGDA 90** — Đọc lại 12/11: manifest phân biệt loại lớp/vùng phủ; XYZI dùng mét. Chưa thử tải raster/COG theo vùng. Trang yêu cầu dẫn Barker et al. 2023, DOI 10.3847/PSJ/acf3e1; DOI bộ dữ liệu 10.60903/gsfcpgda-lola-spole. https://pgda.gsfc.nasa.gov/products/90

**R08 Horizons Tutorial** — Đọc được; học thao tác và xuất bảng. https://ssd.jpl.nasa.gov/horizons/tutorial.html

**R09 Horizons Manual** — Đọc phần observer, tọa độ và azimuth/elevation; phải kiểm tra header khi dùng. https://ssd.jpl.nasa.gov/horizons/manual.html

**R10 Horizons API** — Đọc tài liệu; chưa chạy truy vấn của dự án. https://ssd-api.jpl.nasa.gov/doc/horizons.html

**R11 JPL SSD API policy** — Đọc được; giới hạn truy vấn và cách tích hợp. https://ssd-api.jpl.nasa.gov/doc/index.php

**R12 PGDA 69 Lunar Polar Illumination** — Đọc lại 12/11 cùng hai label Solar/Earth V1.05; Earth label có giới hạn vĩ độ bất nhất, quan hệ START/STOP với khoảng trung bình chưa rõ. Xem bản rà tài nguyên; chưa kiểm raster. Trung bình dài hạn không thay dự báo một ngày. https://pgda.gsfc.nasa.gov/products/69

### Công cụ và dự án để đối chiếu

**R13 Moon Trek** — Đã quan sát điều khiển vị trí/ngày/nguồn ngày 12/11, mức heuristic AI; điểm tạm cuối không phải Shackleton. Không gửi Sun Angle, chưa có kết quả khoa học hoặc thử người dùng; xem mục 5. https://trek.nasa.gov/moon/ ; mô tả: https://trek.nasa.gov/moon/jpl/config/textAbout.html

**R14 LROC QuickMap** — Đã quan sát tìm kiếm, projection/3D, ngày và form Sun/Earth ngày 12/11; observer vẫn là camera, không gửi Compute Visibility. Chưa hoàn tất luồng kết quả hoặc kiểm khoa học; xem mục 5. Công cụ: https://quickmap.lroc.asu.edu/ ; giới thiệu: https://www.actgate.com/examples/lroc-quickmap ; tác vụ mẫu: https://lroc-examples.quickmap.io/ ; bóng đổ 3D: https://www.actgate.com/post/july-2024-quickmap-release .

**R15 NASA SVS mô phỏng tại cực nam** — Rà trang gốc, credits và captions 12/11; đã ghi phạm vi cảnh/thời lượng, metadata còn thiếu và nhạc bên thứ ba trong bản rà tài nguyên. Chỉ minh họa, chưa đủ làm chuẩn số cho mọi site/date. https://svs.gsfc.nasa.gov/5228/ ; ví dụ bổ sung: https://svs.gsfc.nasa.gov/4944/ .

**R16 CLPS Lunar Mission Browser công khai** — README đọc 10/11; LICENSE MIT và mã chọn lọc đọc 11/11, xem pin tại 5.1; chưa chạy kiểm tra. https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/main/README.md

**R17 PolarWindow** — Đọc lại README tác giả ngày 10/11: so sánh địa điểm, nguồn, cửa sổ liên lạc, offline và báo cáo. LICENSE Apache-2.0 và tệp chọn lọc đọc 11/11, xem pin tại 5.1; chưa chạy thuật toán/kết quả. https://github.com/MdAhbab/PolarWindow/blob/main/README.md

**R18 Lunar South Pole Operations Atlas** — Đọc source/tài liệu chọn lọc 12/11 tại pin 67f91d6, chưa xác minh được giấy phép áp dụng hoặc build website; chưa kiểm phép tính. Chi tiết mục 5.1/bản rà tài nguyên. https://sighmon.com/space/

**R19 NavLunar** — Đọc lại homepage/About 12/11; mô tả bóng tuyến đường còn mâu thuẫn, repo/license chính thức chưa tìm được. Test/độ chính xác là tác giả tự báo; chưa kiểm chức năng. https://navlunar.com/


**R20 PolarWindow system design** — Đọc tài liệu tác giả ngày 10/11 qua GitHub connector: đổi ngày, chọn khoảng và lịch quan sát. Chưa kiểm thử tính năng. https://github.com/MdAhbab/PolarWindow/blob/main/docs/system-design.md

**R21 PolarWindow API** — Đọc tài liệu tác giả ngày 10/11 qua GitHub connector: lịch, xếp hạng có xét khoảng sai số và định nghĩa tâm/mép/toàn đĩa. Chưa chạy API hoặc xác minh phép tính. https://github.com/MdAhbab/PolarWindow/blob/main/docs/api.md


### Bổ sung ngày 11/11: luật, quyền dùng và nguồn vị trí

**R22 Terms 2026** — Bản cập nhật 07/08/2026, đọc đầy đủ qua Exa và được reviewer đọc lại: điều kiện third-party materials, nguồn và giấy phép; không tự cho phép làm sẵn dự án. https://www.spaceappschallenge.org/legal/

**R23 FAQ 2026** — Bản đề ngày 13/10/2026; không làm challenge sớm, khai báo AI/SI, hướng dẫn dự kiến 13/11. https://www.spaceappschallenge.org/resources/participant-faqs/

**R24 PDS Geosciences** — Archive LOLA: https://pds-geosciences.wustl.edu/missions/lro/lola.htm ; FAQ về public domain và dẫn nguồn: https://pds-geosciences.wustl.edu/faq.html . Quyền này không tự áp cho mọi tài sản ngoài archive.

**R25 Vị trí có nguồn** — CLPS tổng quan: https://www.nasa.gov/commercial-lunar-payload-services/landing-sites/ (link 3D được dẫn hiện trả 404); Odysseus từ LRO: https://www.nasa.gov/missions/lro/nasas-lro-images-intuitive-machines-odysseus-lander/ ; tài liệu CLPS SPICE: https://naif.jpl.nasa.gov/pub/naif/pds/pds4/clps/clps_spice/document/spiceds_v003.html ; vùng Artemis, thông báo tháng 10/2024: https://www.nasa.gov/news-release/nasa-provides-update-on-artemis-iii-moon-landing-regions/ . Không gộp vùng ứng viên, tâm địa hình, tọa độ dự kiến và vị trí thực tế.

**R26 NAIF Rules** — Đã đọc quyền dùng/phân phối kernel và Toolkit, chưa chọn bộ kernel hay cài công cụ. https://naif.jpl.nasa.gov/naif/rules.html

**R27 NASA Media Guidance** — Đã đọc điều kiện nội dung NASA, credit và ngoại lệ ảnh bên thứ ba/logo; chưa chọn asset cụ thể. https://www.nasa.gov/nasa-brand-center/images-and-media/

**R28 Thể lệ BTC địa phương** — Đọc lại nội dung PDF và Word qua Google Drive ngày 11/11: https://drive.google.com/file/d/1t_VmkD3v4rESUOwzjytbguesqA4OoIBe/view . IV.1 ghi cổng mở 09:00, nộp Hà Nội trước 11:00; VI.1 vẫn ghi 12:00. Dùng timeline mới [R32] để lập lịch; không sửa văn bản nguồn.

**R29 Q&A BTC, câu 4–5** — Link ảnh từ hồ sơ đã đọc ngày 11/11: https://www.facebook.com/photo/?fbid=122175168200963685&set=pcb.122175168734963685 . Nội dung về framework nằm trong câu hỏi mô hình AI; chưa chứng minh ngoại lệ làm sẵn frontend Lunar.

**R30 Q&A BTC, câu 3** — Địa điểm, check-in và khai mạc; đọc trong hồ sơ rà 11/11, chưa phải xác nhận phân bổ riêng cho nhóm. https://www.facebook.com/photo/?fbid=122175168122963685&set=pcb.122175168734963685

**R31 Giờ bắt đầu** — Người dùng cung cấp Cẩm Chi, 11/11/2026 21:38:53: “Tính từ phút đầu tiên ngày 14 nhé ạ”, rồi đính chính được làm toàn bộ dự án từ 00:00 ngày 14/11, hết giới hạn chỉ chuẩn bị. Chat gốc chưa được xác thực độc lập.

**R32 Timeline sự kiện.pdf** — Đọc trực quan cả 2 trang ngày 11/11; trang 2 ghi cổng mở 09:00 ngày 14, hạn Hà Nội 11:00 ngày 15, toàn cầu 23:59 ngày 15. https://drive.google.com/file/d/1m07k0x7akRQqZ7YQS71hJs_ITXxgOK7e/view

**R33 Hướng dẫn nộp Hà Nội ngày 12/11** — Đọc toàn văn qua Exa, HTTP trực tiếp thành công: https://sepa.org.vn/en/nasa-space-apps-hanoi-2026-submission-guide.htm . Xác định các ô, English, demo 7 slide/30 giây, Team Owner/Submit, hạn địa phương/global, chấm 15 phút và năm tiêu chí. Link NASA trong bài lỗi SSL qua Exa; chưa kiểm cổng đăng nhập. Sau khi đọc, Sơn xác nhận giữ 00:00 ngày 14 và yêu cầu ghi nhớ tiếng Anh cho sản phẩm/GitHub khi triển khai; lời xác nhận không phải chứng cứ đã tạo sản phẩm hoặc nộp bài.
