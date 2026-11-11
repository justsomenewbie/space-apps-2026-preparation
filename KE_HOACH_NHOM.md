# Kế hoạch phối hợp nhóm Lunar

Cập nhật ngày 11/11/2026 · Giờ Hà Nội · Chỉ chuẩn bị trước thi

Nhóm đã thống nhất đề Lunar Landing Site Navigator, chưa chốt ý tưởng sản phẩm hay bắt đầu làm. Dự kiến cả nhóm gặp trực tiếp và dành trọn thời gian làm việc trong đợt thi 14–15/11 nếu thu xếp được, vẫn dùng Internet. Chỗ gặp, giờ tập trung và các ngoại lệ còn cần chốt; lịch có nghỉ và không mặc định thức xuyên đêm.

## 1 Cần xét lại hướng sản phẩm trước khi chốt

Hướng “chọn điểm/ngày rồi so sánh Mặt Trời, Trái Đất” đã có nhiều sản phẩm gần giống. [PolarWindow](https://github.com/MdAhbab/PolarWindow/blob/main/docs/system-design.md) còn mô tả đổi ngày, lịch quan sát và báo cáo; [CLPS Browser](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/main/README.md) có so sánh điểm/ngày và chế độ đơn giản. Vì vậy, hướng này hiện chỉ là bản tham khảo để hiểu công việc, chưa phải ý tưởng khác biệt đáng chốt. Đây là thông tin từ tài liệu tác giả, chưa chạy kiểm chứng sản phẩm.

**Việc cần làm trước:** dành 30 phút dùng hai công cụ có sẵn cho cùng một tác vụ; ghi chỗ người mới mắc và công cụ đã hỗ trợ đến đâu. Chỉ chọn hướng khi trả lời được: ai gặp khó khăn gì, cách đang có còn vướng ở đâu, nhóm cải thiện phần nào và kiểm tra bằng cách nào. Không tìm được lý do đủ rõ thì cùng bàn lại hướng sản phẩm; chưa tự đổi đề đã đăng ký.

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
| Sáng 14/11, sau giờ cho phép | Chọn một trường hợp nhỏ, thống nhất file trao đổi, lấy và kiểm tra dữ liệu | Một kết quả có nguồn được bạn khác kiểm tra |
| Chiều và tối 14/11 | Nối các phần, mở rộng phần đã thống nhất, thử bản chung và chuẩn bị demo | Cuối ngày có bản chạy được; nghỉ theo lịch nhóm thống nhất |
| Sáng 15/11 | Sửa lỗi, ngừng thêm tính năng theo mốc dự phòng, kiểm tra và nộp | Bản đã thử, link mở được, có bằng chứng nộp |
| Chiều 15/11 | Thuyết trình hoặc làm bước tiếp theo đúng lịch BTC | Không coi đây là thời gian bù cho hạn nộp địa phương |

**Lịch và điểm chưa rõ:** Q&A BTC đã được đọc ngày 11/11: tại THCS Trưng Vương, check-in từ 07:00 ngày 14–15/11, khai mạc 08:15 ngày 14; tự túc ăn uống. Đây là thông tin chung, chưa xác nhận chỗ ngồi hoặc việc qua đêm của nhóm. Cổng nộp mở 09:00 ngày 14/11, khác giờ khai mạc. Hồ sơ đọc thể lệ BTC có IV.1 ghi hạn trước 11:00, VI.1 ghi 12:00 ngày 15/11; mâu thuẫn chưa được BTC giải thích. Giữ mục tiêu ngừng thêm tính năng 09:00, nộp 10:30 ngày 15/11 theo mốc sớm hơn. Đây là khuyến nghị; hạn toàn cầu 23:59 không thay hạn địa phương. Hướng dẫn nộp/chấm dự kiến 13/11 cần đọc lại. Nguồn: [Q&A BTC](https://www.facebook.com/photo/?fbid=122175168122963685&set=pcb.122175168734963685), [thể lệ địa phương](https://drive.google.com/file/d/1t_VmkD3v4rESUOwzjytbguesqA4OoIBe/view), [FAQ NASA 2026](https://www.spaceappschallenge.org/resources/participant-faqs/).

**Nếu chậm:** ưu tiên một luồng chạy được trước khi thêm phần khác. Đến giữa chiều 14/11 vẫn chưa nối được thì giảm phạm vi; cuối ngày vẫn chưa ghép được thì tập trung sửa và demo. Bản demo hạn chế phải nói rõ những yêu cầu chưa đáp ứng.

Trước khi coi là xong, cùng kiểm tra bốn việc: máy khác mở được; số liệu truy được nguồn và đã đối chiếu; người xem hiểu kết quả còn thiếu gì; người nộp có quyền và lưu được bằng chứng nộp. Không tự đặt ngưỡng “hạ cánh an toàn” khi chưa có căn cứ.

**Nguồn để mở đầu:** [đề NASA](https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/), [trang Hanoi](https://eventstem.com/spaceapps.html?lang=vi) và [SEPA](https://sepa.org.vn/en/spaceapps-hanoi-2026) để kiểm tra yêu cầu; [Horizons](https://ssd.jpl.nasa.gov/horizons/tutorial.html) để hiểu cách lấy kết quả. Danh mục đầy đủ và tình trạng từng nguồn nằm trong BOI_CANH_AI.md. Luật 2026, giấy phép và mã chọn lọc đã kiểm ngày 11/11. Đề gốc Lunar và trang Hanoi chưa truy cập lại được; không suy từ bản đối chiếu rằng mọi yêu cầu đã được xác minh.

**Bước tiếp theo của nhóm:** xác nhận phần đã ghi trên bảng, sửa chỗ QA chưa thống nhất, chốt nơi gặp/người dự phòng/người nộp. Hướng sản phẩm và công nghệ sẽ quyết định cùng nhau; chưa coi tài liệu này là phân công đã được đồng ý.
