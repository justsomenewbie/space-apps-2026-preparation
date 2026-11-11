# Kế hoạch phối hợp nhóm Lunar

Cập nhật 12/11/2026 · Giờ Hà Nội · Bộ chuẩn bị PREP-2026-11-12

**Bắt đầu làm toàn bộ dự án: 00:00 ngày 14/11/2026. Hạn nộp Hà Nội: 11:00 ngày 15/11/2026.**

Nhóm đã thống nhất đề Lunar Landing Site Navigator, chưa chốt ý tưởng sản phẩm hay bắt đầu làm. Dự kiến cả nhóm gặp trực tiếp và dành trọn thời gian làm việc trong đợt thi 14–15/11 nếu thu xếp được, vẫn dùng Internet. Chỗ gặp, giờ tập trung và các ngoại lệ còn cần chốt; lịch có nghỉ và không mặc định thức xuyên đêm.

## 1 Chọn một kết quả so sánh nhỏ và có ích

**Ngày 12/11, Sơn xác nhận nhóm chưa chốt sản phẩm.** Hướng so sánh địa điểm/ngày và vị trí Mặt Trời–Trái Đất vẫn phù hợp đề Lunar. Có công cụ tương tự làm giảm căn cứ tuyên bố mới, không khiến hướng so sánh trở thành sai. [PolarWindow](https://github.com/MdAhbab/PolarWindow/blob/main/docs/system-design.md) và [CLPS Browser](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/main/README.md) đã mô tả nhiều chức năng liên quan; chưa chạy kiểm chứng hai sản phẩm.

**Đề xuất để nhóm chốt:** giúp người học so sánh hai địa điểm có nguồn trong hai lựa chọn ngày, hiểu cửa sổ nhìn thấy Mặt Trời/Trái Đất và giải thích một đánh đổi. Nối một luồng dữ liệu đến kết quả kiểm chứng được trước, rồi thêm 3D giúp hiểu chân trời. Đây là khuyến nghị cho 35 giờ, chưa phải quyết định chung, nhu cầu đã kiểm chứng hay phương án được chứng minh tốt nhất.

Có thể dành 30 phút thử công cụ hiện có cho cùng một tác vụ, ghi chỗ người mới vướng và phần nhóm muốn giải thích rõ hơn. Không tự đổi đề đã đăng ký. Đối chiếu hướng đề: [NASA Lunar](https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/); lần rà 12/11 đọc được nội dung được lập chỉ mục, nhưng mở toàn trang vẫn lỗi 502.

Một câu hỏi có thể khảo sát: khi hai công cụ cho kết quả khác nhau, người mới có nhận ra khác do định nghĩa hay cấu hình không? Đây mới là giả thuyết cần thử, chưa phải ý tưởng được chứng minh mới. [LOLA](https://science.nasa.gov/mission/lro/lola/) là nguồn dữ liệu; [Moon Trek](https://trek.nasa.gov/moon/) và [QuickMap](https://quickmap.lroc.asu.edu/) là các công cụ nên đối chiếu thêm.


**Phần đã chọn để học và có thể tận dụng khi được phép:** CLPS build_windows() là ứng viên nếu dùng Python (MIT); PolarWindow dùng cách ghi nguồn (Apache-2.0), helper nhãn xếp hạng chỉ dự phòng. Giữ license/ghi công, pin commit và kiểm ca biên trước khi dùng. Chưa mượn nguyên ứng dụng, catalog mẫu hoặc ngưỡng dốc riêng dưới tên chuẩn NASA. Horizons cho ephemerides; PDS/LOLA cho địa hình khi cần; NASA/LROC cho vị trí; Moon Trek tra metadata. Nguồn, pin, điều kiện và phần loại ghi đầy đủ ở mục 5.1–6 của file AI. Đây là lựa chọn chuẩn bị, chưa sao chép mã hay xử lý dữ liệu nộp.

[Terms NASA 2026](https://www.spaceappschallenge.org/legal/) cho dùng nguồn bên thứ ba theo điều kiện quyền/giấy phép và dẫn nguồn. [FAQ 2026](https://www.spaceappschallenge.org/resources/participant-faqs/) giữ quy tắc không bắt đầu challenge sớm và khai báo AI. Chưa có ngoại lệ đã xác minh để làm sẵn UI/logic Lunar. Việc đã cài công cụ hoặc luyện counter không đồng nghĩa bài thi đã được làm.

## 2 Chia việc để cuối cùng có một bản chung

Bảng việc hiện đã ghi tên phụ trách; đây là ghi nhận trên Sheet, chưa chứng minh từng người đã nhận nhiệm vụ. Dùng bảng hiện hành để điều phối, không coi bản kế hoạch cũ là nguồn phân công mới nhất. Một người có thể kiêm phần nhỏ; người ghép bản và người nộp cần dự phòng. Có hai ô ghi người QA khác nhau, nhóm cần xác nhận trước khi giao việc.

| Phần việc | Kết quả cần bàn giao | Người ghi trên bảng |
|---|---|---|
| Ghép bản chung | Nhận phần đã kiểm tra, chạy bản chung và giữ bản demo | Chung theo Sheet |
| Tìm nguồn | Link đáng tin, ý nghĩa và giới hạn dữ liệu | Trang theo Sheet |
| Làm backend | Kết quả có nguồn, đơn vị và cách kiểm tra theo hợp đồng nhóm chốt | Chung theo Sheet |
| Làm phần hiển thị | Màn hình dùng được với dữ liệu nhóm thống nhất | Sơn + Thảo theo Sheet |
| Kiểm tra | Thử bản chung, ghi lỗi và cách tái hiện | Minh + Trang ở C10; G7 ghi Minh + Thảo |
| Nội dung và nộp | Giải thích, demo, hồ sơ theo yêu cầu BTC; người bấm nộp cần xác nhận riêng | Lâm + Thảo theo Sheet |

<!-- pagebreak -->

## 3 Một vòng làm việc từ nhận việc đến xong

**Việc chốt trước:** nơi gặp và giờ tập trung; ai nhận phần nào; ai ghép bản, ai dự phòng và ai nộp. Mỗi người chỉ cần báo thêm nếu có khoảng thời gian không tham gia được.

**1. Chốt việc nhỏ trước khi làm.** Ghi một dòng: ai làm, cần gì từ ai, đưa ra kết quả gì, hạn và ai kiểm tra. Ví dụ về cách giao việc: “Mình làm phần hiển thị từ file dữ liệu đã thống nhất; bàn giao bản mở được; một bạn khác thử rồi mới ghép.” Hạn cụ thể do nhóm chọn.

**2. Thống nhất chỗ hai phần nối với nhau.** Sau giờ được phép bắt đầu, trước khi chia việc code song song, người làm dữ liệu, màn hình và ghép bản chốt file trao đổi, tên cột, đơn vị và cách báo thiếu dữ liệu. Lưu quy ước trong kho nhóm đã chọn; gửi cùng link/phiên bản cho hai người và AI của họ. Chỗ chưa rõ thì hỏi, chưa tự đoán. Muốn đổi thì báo các bạn đang dùng phần đó trước.

**3. Làm một phần nhỏ rồi đưa bạn khác thử.** Gửi link hoặc file đúng phiên bản, cách mở, việc đã thử và lỗi còn biết. Người nhận tự mở hoặc chạy lại. Nếu chưa mở được, việc vẫn đang làm; lời AI báo “xong” chưa thay bước này.

**4. Ghép ngay khi phần nhỏ đã dùng được.** Người ghép đưa phần đó vào bản chung và thử cả luồng. Lần ghép đầu chỉ cần một trường hợp chạy từ dữ liệu đến màn hình; bạn khác lấy đúng bản và mở lại được rồi mới thêm phần tiếp. Chỉ đánh dấu xong khi bản chung vẫn chạy. Nếu lỗi, cùng xem thay đổi vừa nhận; quay về bản chạy được nếu cần rồi sửa phần gây lỗi.

**5. Báo ngắn khi cần phối hợp.** Đề xuất cứ 90 phút dừng 5 phút để xem bản chung và chốt việc tiếp. Kẹt quá 15 phút thì hỏi trực tiếp, kèm lỗi đang thấy. Quyết định ảnh hưởng cả nhóm vẫn ghi lại để người vắng hoặc AI của bạn khác đọc được.

### Ví dụ khi hai phần không khớp

Bạn A đổi tên một cột trong file dữ liệu, nhưng màn hình của bạn B vẫn đọc tên cũ. Hai phần có thể chạy riêng mà bản chung bị lỗi. Cách xử lý: A và B thống nhất lại tên, cập nhật cùng một thay đổi, rồi bạn kiểm tra thử trên bản chung. Không để mỗi AI tự đoán một cách khác nhau.

### Khi dùng AI riêng

Mỗi bạn tải [BOI_CANH_AI.md bản mới](https://drive.google.com/file/d/19SMq037jiJ9OnIXdfJWUOdafD3EIALDr/view) cho AI của mình, rồi giao đúng một việc đã nhận. AI cần biết phần được sửa, kết quả cần bàn giao và cách kiểm tra. Nếu dùng máy khác nhau, AI không tự biết cuộc nói chuyện hay file trên máy bạn bên cạnh. Người phụ trách ghép bản là nơi chốt các thay đổi dùng chung.

<!-- pagebreak -->

## 4 Drive và GitHub dùng vào việc gì

**Drive để mọi người cùng đọc và sửa tài liệu.** Dùng cho kế hoạch, bảng chia việc, ghi chú nguồn, ảnh và slide. Thư mục Sơn đã chuẩn bị, đề xuất dùng chung:
https://drive.google.com/drive/folders/1H-D22SV6i1RImJHcWxRqtgK2_TP3tn2S

**Bảng việc nhóm đã có:** https://docs.google.com/spreadsheets/d/1zqhG7NVRH-TdO6fr6e0n74d6S2r1--ji2UuySlJGZeA . Tab đăng ký vẫn còn ô nguyện vọng/cần hỗ trợ để trống; tab Bảng việc đã có tên phụ trách, người kiểm tra và trạng thái Chưa làm. Đọc phân công ở bảng trước khi nhận việc; ô G7 và dòng QA chưa thống nhất người kiểm tra. Nhóm xác nhận chỗ này, không để AI tự chọn thay.

**GitHub để quản lý code và ghép thay đổi.** Nó lưu lịch sử sửa để biết ai đổi gì và quay lại bản trước khi cần. Kho chuẩn bị lưu bản bối cảnh AI, nguồn/license, hướng dẫn phối hợp và bài luyện không liên quan. Sơn đã yêu cầu mở công khai để mọi người đọc; quyền sửa vẫn phải được cấp riêng. Đây chưa phải repo sản phẩm đã được nhóm chốt:
https://github.com/justsomenewbie/space-apps-2026-preparation

Người làm code làm theo vòng này, sau khi nhóm chọn kho và được cấp quyền:

1. Lấy bản mới về máy riêng. Tạo một nhánh riêng cho việc được giao; nhánh là phần thay đổi chưa ghép vào bản chính.
2. Sửa đúng phần đã nhận. Muốn đổi file, đơn vị hoặc công cụ mà người khác cũng dùng thì báo người ghép trước.
3. Chạy thử, lưu một mốc thay đổi rồi đưa lên GitHub. Mốc lưu gọi là commit; đưa lên gọi là push.
4. Gửi đề nghị ghép trên GitHub, gọi là pull request. Kèm việc đã đổi, cách thử và chỗ chưa xong. Người khác kiểm tra, người ghép nhận vào bản chính.
5. Sau khi ghép, mọi người lấy bản chính mới về trước việc tiếp theo. Lấy thay đổi về gọi là pull. Gặp xung đột thì cùng đọc để giữ đúng cả hai phần, không chọn đè cho hết báo lỗi.

Người chưa làm code có thể bắt đầu với Drive và kiểm tra bản demo. Lần đầu dùng GitHub, nhờ một bạn hoặc AI hướng dẫn từng thao tác trên công cụ đang có; chưa cần tự nhớ lệnh. Ban đầu chỉ nên có tối đa hai phần code làm song song; tăng sau khi ghép trơn tru. Không dùng Drive để đồng bộ thư mục code đang sửa.

**Zalo để trao đổi nhanh và giữ link.** Kết quả chính vẫn đặt đúng chỗ trên Drive hoặc GitHub. Quyền đọc công khai và quyền sửa của thành viên là hai việc khác nhau. Khi cần sửa, đăng nhập đúng tài khoản được cấp; GitHub cần nhận lời mời quyền viết. Chưa có bằng chứng từng đồng đội đã thử trên máy mình. Cùng ngồi một phòng cũng không làm các máy tự đồng bộ.

<!-- pagebreak -->

## 5 Lịch dự kiến và điều kiện hoàn thành

| Khi nào | Cùng làm gì | Kết quả cần có |
|---|---|---|
| Trước giờ thi | Chốt chỗ gặp, vai trò, quyền truy cập; đọc nguồn và hướng dẫn BTC | Mỗi người biết bắt đầu ở đâu. Chỉ chuẩn bị, chưa làm sản phẩm dự thi |
| Từ 00:00 ngày 14/11, theo giờ làm/nghỉ nhóm thống nhất | Chọn một trường hợp nhỏ, thống nhất file trao đổi, lấy và kiểm tra dữ liệu | Một kết quả có nguồn được bạn khác kiểm tra |
| Chiều và tối 14/11 | Nối các phần, mở rộng phần đã thống nhất, thử bản chung và chuẩn bị demo | Cuối ngày có bản chạy được; nghỉ theo lịch nhóm thống nhất |
| Sáng 15/11 | Sửa lỗi, ngừng thêm tính năng theo mốc dự phòng, kiểm tra và nộp | Bản đã thử, link mở được, có bằng chứng nộp |
| Chiều 15/11 | Thuyết trình hoặc làm bước tiếp theo đúng lịch BTC | Không coi đây là thời gian bù cho hạn nộp địa phương |

**Đính chính cuối ngày 11/11:** người dùng cung cấp câu trả lời của Cẩm Chi lúc 21:38:53 và xác nhận **từ 00:00 ngày 14/11 được làm toàn bộ dự án**, hết giới hạn chỉ chuẩn bị; chat gốc chưa xác thực độc lập. [Timeline mới, trang 2](https://drive.google.com/file/d/1m07k0x7akRQqZ7YQS71hJs_ITXxgOK7e/view) đã đọc trực quan xác nhận **hạn Hà Nội 11:00 ngày 15/11**, tức 35 giờ từ lúc được bắt đầu.

**Lịch và điểm chưa rõ:** Q&A BTC đã được đọc ngày 11/11: tại THCS Trưng Vương, tự túc ăn uống. Theo timeline mới liên kết ở trên: check-in ngày 14 từ 07:00–08:15, khai mạc 08:15–09:00; check-in ngày 15 từ 07:30–08:00. Đây là thông tin chung, chưa xác nhận chỗ ngồi hoặc việc qua đêm của nhóm. Cổng nộp mở 09:00 ngày 14/11, khác giờ khai mạc. Hồ sơ đọc thể lệ BTC có IV.1 ghi hạn trước 11:00, VI.1 ghi 12:00 ngày 15/11; dùng timeline mới xác nhận 11:00 để lập lịch. Giữ mục tiêu ngừng thêm tính năng 09:00, nộp 10:30 ngày 15/11 theo mốc sớm hơn. Đây là khuyến nghị; hạn toàn cầu 23:59 không thay hạn địa phương. Hướng dẫn nộp/chấm dự kiến 13/11 cần đọc lại. Nguồn: [Q&A BTC](https://www.facebook.com/photo/?fbid=122175168122963685&set=pcb.122175168734963685), [thể lệ địa phương](https://drive.google.com/file/d/1t_VmkD3v4rESUOwzjytbguesqA4OoIBe/view), [FAQ NASA 2026](https://www.spaceappschallenge.org/resources/participant-faqs/).

**Nếu chậm:** ưu tiên một luồng chạy được trước khi thêm phần khác. Đến giữa chiều 14/11 vẫn chưa nối được thì giảm phạm vi; cuối ngày vẫn chưa ghép được thì tập trung sửa và demo. Bản demo hạn chế phải nói rõ những yêu cầu chưa đáp ứng.

Trước khi coi là xong, cùng kiểm tra bốn việc: máy khác mở được; số liệu truy được nguồn và đã đối chiếu; người xem hiểu kết quả còn thiếu gì; người nộp có quyền và lưu được bằng chứng nộp. Không tự đặt ngưỡng “hạ cánh an toàn” khi chưa có căn cứ.

**Nguồn để mở đầu:** [đề NASA](https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/), [trang Hanoi](https://eventstem.com/spaceapps.html?lang=vi) và [SEPA](https://sepa.org.vn/en/spaceapps-hanoi-2026) để kiểm tra yêu cầu; [Horizons](https://ssd.jpl.nasa.gov/horizons/tutorial.html) để hiểu cách lấy kết quả. Danh mục đầy đủ và tình trạng từng nguồn nằm trong BOI_CANH_AI.md. Luật 2026, giấy phép và mã chọn lọc đã kiểm ngày 11/11. Nội dung đề NASA được lập chỉ mục đã đọc ngày 12/11, nhưng mở toàn trang Lunar vẫn lỗi 502; trang Hanoi chưa truy cập lại được. Không suy mọi yêu cầu đã được xác minh.

**Bước tiếp theo của nhóm:** xác nhận phần đã ghi trên bảng, sửa chỗ QA chưa thống nhất, chốt nơi gặp/người dự phòng/người nộp. Sơn chọn frontend đã chuẩn bị là React + TypeScript + Vite; phạm vi sản phẩm, hợp đồng dữ liệu và cách ghép/backend vẫn cần thống nhất. Chưa coi tài liệu này là phân công đã được đồng ý.


## 6 Chuẩn bị mới nhất để bắt đầu cùng phiên bản

**Giao diện và trải nghiệm.** Sơn muốn web/app dùng trên điện thoại và máy tính, animation và 3D chân thực, cảm giác chỉn chu và không khí không gian. Đây là định hướng của Sơn, chưa phải danh sách tính năng nhóm đã duyệt. Ưu tiên tác vụ cốt lõi, nguồn/đơn vị/giới hạn rõ; 3D phục vụ giải thích. Nhạc và SFX chỉ thêm khi có ích, mặc định yên lặng và do người dùng bật. Tôn trọng giảm chuyển động; có nội dung đọc được khi 3D lỗi. Model đẹp không chứng minh phép tính đúng.

**Công cụ đã chuẩn bị.** Mac/cloud đã có bằng chứng chạy bài stock riêng: cài theo lock, kiểm công cụ, lint/build, audit và browser. Safari và Chromium trên Mac đã qua bài 3D riêng 10 phút, có kiểm texture; Chromium từng có khựng khoảng 1,1 giây lúc máy chịu áp lực. Chưa kiểm sản phẩm Lunar, điện thoại thật hoặc server 24 giờ. Chi tiết, phiên bản và giới hạn: [FRONTEND_HANDOFF](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/FRONTEND_HANDOFF.md).

**Hosting không cần Mac bật liên tục.** Phương án nghiên cứu 12/11 là Cloudflare cho frontend/assets; thêm Railway nếu thật sự cần backend Python. Static nhỏ có thể dùng gói miễn phí trong hạn mức; dự toán có API nhỏ khoảng 5–10 USD/tháng hoặc 25–35 USD với backend nhỏ, trước thuế/domain, không phải trần hóa đơn. Chỉ thêm tài khoản/database khi nhu cầu được chốt. Chưa mua, deploy hoặc cam kết uptime. Nguồn giá, giới hạn, phương án khác và kiểm nghiệm thu: [HOSTING_PLAN](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/HOSTING_PLAN.md).

**AI chọn công cụ theo việc.** Thành viên chỉ cần nói mục tiêu; AI đọc [PLUGIN_ROUTING](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/PLUGIN_ROUTING.md) và kiểm tool thật trong môi trường của mình. Bộ 30 workflow có phần chỉ là hướng dẫn và tính năng chưa kiểm; không phải 30 plugin đều chạy mọi lúc. Dùng việc nhỏ và review trước; GSD chỉ thêm khi cần quản lý nhiều giai đoạn. Không tự cài bộ Mac lên cloud hoặc bật capture lịch sử.

**Bắt đầu chat mới.** Nói “Tiếp tục từ handoff hiện hành”. AI đọc AGENTS, HANDOFF và nguồn liên quan; khi có quyền đọc chat, chỉ đối chiếu lượt mới hoặc phần thiếu có ảnh hưởng. Sau việc lưu quyết định, bằng chứng, người đang giữ việc và trạng thái Git/cloud/Drive. Không hứa nhớ mọi chat hay đồng bộ nền. [PREPARATION_COVERAGE](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/PREPARATION_COVERAGE.md) ghi phạm vi đã đọc và các mốc lịch sử.

Word/PDF là bản đọc của kế hoạch này; bộ nguồn đầy đủ gồm cả chỉ dẫn, frontend, dữ liệu, hosting và công cụ nằm trong repo và ZIP trên Drive. Dùng mã PREP-2026-11-12 và bản kê SHA-256 đi kèm để nhận đúng bộ; bản tải cũ không tự thay đổi. Không coi việc đồng bộ tài liệu là triển khai hoặc nộp sản phẩm.
