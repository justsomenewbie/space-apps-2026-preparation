# Chuẩn bị NASA Space Apps 2026 của nhóm Lunar

**Chỉ chuẩn bị trước thi.** Nhóm gồm Chung, Trang, Lâm, Minh, Sơn, Thảo; đề đã đăng ký là Lunar Landing Site Navigator. Repo này chứa tài liệu, nguồn và bài luyện không liên quan; chưa có ứng dụng, UI hoặc dataset bài nộp. Cập nhật 13/11/2026, giờ Hà Nội.

## Bắt đầu trong hai phút

1. **Mở gói chuẩn bị theo vai trò:** [6 vai trò và cách bàn giao](docs/roles/README.md), không gắn tên người. Mỗi gói có bài đọc, việc chuẩn bị hôm nay, task đầu trong giờ thi, đầu ra và cách kiểm. [Kế hoạch Moon Plan B](KE_HOACH_NHOM.md), [PDF](https://drive.google.com/file/d/1HzjerYUiOHpLy5ATm43F903shj9uugzI/view), [Word](https://drive.google.com/file/d/1fviH_Rwg0PTh_-Sk_IYUUA_6vfTmRgvO/view) giữ phạm vi/lịch chung.
2. **Cho AI biết bối cảnh:** tải [BOI_CANH_AI.md](BOI_CANH_AI.md) hoặc [bản Drive](https://drive.google.com/file/d/19SMq037jiJ9OnIXdfJWUOdafD3EIALDr/view), rồi giao đúng một việc đã nhận. Một chat mới không tự biết các chat trước.
3. **Xem việc hiện hành:** [Bảng việc nhóm](https://docs.google.com/spreadsheets/d/1zqhG7NVRH-TdO6fr6e0n74d6S2r1--ji2UuySlJGZeA). Tên đã điền không chứng minh người đó đã nhận việc; C10/G7 còn khác người QA.
4. **Chọn bài đọc đúng phần:** [nguồn và giấy phép](DATA_PREPARATION.md), [phiếu frontend và bàn giao dữ liệu](FRONTEND_HANDOFF.md), [phối hợp trong giờ thi](COMPETITION_RUNBOOK.md), [công cụ/skill](PLUGIN_ROUTING.md) và [checklist tự chọn đầy đủ công cụ](TOOL_SELECTION_CHECKLIST.md).
5. **Luyện ngoài bài thi nếu cần:** [counter async nhỏ](practice-tally/README.md), dùng Python/browser có sẵn; hoặc [dependency framework đã khóa và checker](practice-stack-lock/README.md) để tái tạo bài thử stock riêng. Đây không phải phần mềm Lunar.

## Nơi lưu và cách cập nhật

[Thư mục Drive chung](https://drive.google.com/drive/folders/1H-D22SV6i1RImJHcWxRqtgK2_TP3tn2S) chứa kế hoạch và file AI. Drive cho người có link xem, giữ quyền sửa riêng của năm đồng đội; khi sửa phải đăng nhập đúng tài khoản. GitHub công khai cho đọc không tự cấp quyền push. Xem [phạm vi kiểm và điều còn mở](PREPARATION_COVERAGE.md) để biết kết quả truy cập/sync thực tế.

Git là bản có lịch sử cho tài liệu chuẩn bị; Sheet giữ phân công/trạng thái đang thay đổi. **Mặc định do Sơn yêu cầu ngày 12/11:** mỗi khi sửa ghi chú/chỉ dẫn chuẩn bị, AI đồng bộ GitHub, cloud hiện có và Drive/Word/PDF, kiểm đúng commit/hash trước khi báo xong; không cần nhắc lại ở chat mới. Xem quy trình và quyền thường trực tại [AGENTS](AGENTS.md#standing-preparation-sync--user-instruction-12-november-2026). Word/PDF xuất từ KE_HOACH_NHOM.md; nguồn không đổi thì kiểm lại bản xuất đang giữ. Cập nhật HANDOFF, ghi rõ đích còn chờ nếu bị chặn. Đây là việc AI thực hiện trong phiên, không phải đồng bộ nền. Không dùng Drive để đồng bộ code đang sửa, không cho hai AI ghi cùng checkout.

Đọc [kiến trúc web app đề xuất](docs/architecture-proposal/ARCHITECTURE_PROPOSAL.md): sơ đồ, luồng người dùng/dữ liệu và [giải thích lý thuyết](docs/architecture-proposal/THEORY_PRIMER.md) có nguồn, ví dụ giả định, kế hoạch kiểm. Sơ đồ là nền giải thích; [kế hoạch Moon Plan B](KE_HOACH_NHOM.md) đã cụ thể hóa phạm vi, mô hình, thuật toán và phân công đề xuất. Chưa triển khai hoặc kiểm định mô hình.

Đọc [bản rà tài nguyên 12/11](docs/resource-review-2026-11-12.md): Atlas/NavLunar, SVS, metadata PGDA/PDS và các việc đọc nguồn có thể tiếp tục độc lập.

Đọc [chuẩn bị bảo mật](SECURITY_PREPARATION.md): kết quả audit repo, hai công cụ mới đã kiểm và khi nào AI tự dùng; chưa phải chứng nhận bảo mật ứng dụng.

## Hướng chốt theo ủy quyền Sơn — 13/11

[Moon Plan B](KE_HOACH_NHOM.md) chọn **NASA/JPL Horizons làm nguồn Sun/Earth chính**, Python theo lô → JSON → React/TypeScript/Vite tĩnh. QuickMap/Moon Trek tra cứu/đối chiếu, CSA bối cảnh; không chờ gói BTC riêng chưa xác nhận. Lõi là so cùng điểm khác ngày, khác điểm cùng UTC và timeline Sun/Earth; trước tìm Plan B/3D. Ground-level có điều kiện sau lõi, above-site là dự phòng. Điểm/ngày/cấu hình quyết sau kiểm dữ liệu thật. Kế hoạch giữ đầu ra từng người, lịch 14–15/11 và nghiệm thu. Hướng đã được Sơn giao chốt; chưa là toàn nhóm nhận việc hay dữ liệu đã kiểm. Sheet giữ trạng thái thực tế; tin nhắn nhóm/mentor chưa gửi.

Email BTC đọc ngày 12/11 đã xác nhận đúng đội sáu người/Lunar, có mã đội, thi trực tiếp và lối vào cổng Lý Thường Kiệt tại THCS Trưng Vương. Mã đội và thư riêng không được đưa lên repo.

**Đính chính 11/11:** được làm toàn bộ dự án từ **00:00 ngày 14/11, giờ Hà Nội**, theo trao đổi người dùng cung cấp và xác nhận; hết giới hạn chỉ chuẩn bị từ mốc đó. [Timeline mới, trang 2](https://drive.google.com/file/d/1m07k0x7akRQqZ7YQS71hJs_ITXxgOK7e/view) xác nhận hạn Hà Nội **11:00 ngày 15/11**; 09:00 ngày 14 là mở cổng nộp. Mục tiêu 10:30 là khuyến nghị. Nguồn chi tiết: COMPETITION_RUNBOOK và BOI_CANH_AI mục 2/8.

**Bước tiếp dưới hai phút:** mở [gói vai trò](docs/roles/README.md) muốn nhận và ghi đầu ra đầu tiên mình có thể bàn giao.

**Hướng dẫn NASA/SEPA đã đọc trực tiếp 13/11:** [bảng nguồn và khác biệt](docs/official-challenge-check-2026-11-13.md), checklist tại runbook/kế hoạch §10. Giữ 00:00 ngày 14; sản phẩm, hồ sơ và mọi tài liệu team dẫn khi nộp bằng tiếng Anh từ đầu. Demo ≤7 slide hoặc ≤30 giây; Global Award cần nguồn NASA thực dùng. SI có yêu cầu watermark/metadata và điều khoản nguồn gốc ý tưởng chưa rõ cho lịch sử AI-assisted; không tự xác nhận đủ điều kiện. NASA cấm media nhận diện người dưới 18 trong demo/final. Team Owner là người nộp dự kiến, quyền thật cần kiểm; Save Progress chưa phải nộp, dùng Submit for Judging và nộp lại sau sửa trước 11:00.


## Bộ chuẩn bị cập nhật ngày 13 tháng 11

Mã bộ: **PREP-2026-11-13-ROLE-KITS**. Đọc [HANDOFF](HANDOFF.md) và [AGENTS](AGENTS.md) để tiếp tục; [FRONTEND_HANDOFF](FRONTEND_HANDOFF.md) có stack do Sơn chọn, định hướng mobile/3D/audio và giới hạn bài thử; [HOSTING_PLAN](HOSTING_PLAN.md) có phương án chạy độc lập Mac; [PLUGIN_GUIDE_REVIEW](PLUGIN_GUIDE_REVIEW.md) và [PLUGIN_ROUTING](PLUGIN_ROUTING.md) có cách chọn công cụ. Kế hoạch mới là đặc tả đề xuất để duyệt; quyền và việc nhận vai được ghi khi thực hiện.

**Quyết định repo ngày 12/11:** Sơn chọn một repo riêng, chung cho sản phẩm thực; repo này giữ tài liệu chuẩn bị. Khi bắt đầu từ 00:00 ngày 14/11, mang chỉ dẫn hiện hành sang AGENTS/HANDOFF của repo sản phẩm và dùng tiếng Anh từ bản đầu. Chưa tạo repo mới; tên/URL/owner/branch còn cần ghi khi khởi động. Xem runbook và kế hoạch mục 5 cho các bước chuyển giao; không tự sao chép quyền, runtime Mac hoặc tài liệu riêng.

Drive giữ Word/PDF xuất từ KE_HOACH_NHOM.md, BOI_CANH_AI.md cùng nguồn Git và ZIP đầy đủ của commit phát hành. File 00 ĐỌC TRƯỚC trên Drive trỏ tới bản kê commit/SHA-256. Mỗi lần sửa phải đối chiếu đúng commit và hash, không suy bản tải cũ tự thay đổi. Công cụ được cài trên Mac và bằng chứng sibling không tự nằm trong ZIP.

[Bộ nguồn đầy đủ trên Drive](https://drive.google.com/file/d/1DH3ftueW2DX1OEemJ5V1QFuCHfz52El-/view) · [Bản kê commit và SHA-256](https://drive.google.com/file/d/1cfy-cKRFtT5KeONptrX3-brU-iKroF_m/view).
