# Kế hoạch Moon Plan B cho nhóm Lunar

Phương án Sơn đưa nhóm duyệt ngày 12 tháng 11 năm 2026

**Chọn Moon Plan B: web app giúp người học so sánh ngày đáp ban đầu, ngày bị lùi và một phương án tiếp theo bằng vị trí Mặt Trời và Trái Đất.** Sản phẩm trả lời một việc cụ thể: khi lịch thay đổi, các cửa sổ hình học thay đổi ra sao, và trong tập ngày đã khảo sát có phương án nào đạt tiêu chí người dùng đặt ra.

Bản này ấn định phạm vi, dữ liệu, cách tính, phân công và lịch thực hiện để nhóm duyệt cùng một phương án. Các lựa chọn thiết kế là khuyến nghị của bản kế hoạch; việc từng thành viên nhận nhiệm vụ được ghi khi nhóm thông qua. Đây không phải biên bản nhóm đã biểu quyết.

**Bắt đầu triển khai từ 00:00 ngày 14/11/2026. Nộp Hà Nội trước 11:00 ngày 15/11; mục tiêu của nhóm là 10:30.** Giờ làm việc dưới đây dùng giờ Hà Nội. Thời gian bên trong sản phẩm dùng UTC và luôn có nhãn. Trước giờ bắt đầu chỉ đọc nguồn, học lý thuyết và chuẩn bị công cụ.

## 1 Sản phẩm và lý do chọn hướng này

Người dùng chính là sinh viên, người học STEM và người xem lần đầu tìm hiểu kế hoạch hoạt động trên Mặt Trăng. Mục tiêu là trong một phiên khoảng hai phút, họ chọn điểm tham chiếu, thử lùi ngày, đọc được phần thay đổi và giải thích vì sao một phương án đạt hoặc không đạt tiêu chí bài tập. Giáo viên có thể dùng cùng một tình huống để thảo luận. Chuyên gia có thể xem nguồn và giả định; phiên bản thi không phục vụ điều hành nhiệm vụ thật.

[Đề Lunar của NASA](https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/) yêu cầu so sánh địa điểm và ngày, trực quan vị trí Mặt Trời/Trái Đất so với chân trời. Hướng này bám cả hai chiều so sánh, đồng thời có một tình huống xuyên suốt để người mới không phải tự hiểu hàng loạt biểu đồ. Nội dung chi tiết tại [bản sao HackAthlone](https://hackathlone.com/challenges/lunar-landing-site-navigator) cho phép dữ liệu tính sẵn và xem xét thay đổi lịch. NASA vẫn là nguồn quyết định yêu cầu cuối cùng.

Điểm đáng đầu tư là phép so sánh có thể kiểm tra lại: giữ nguyên địa điểm và thời lượng, chỉ đổi ngày; chỉ ra khoảng nào thêm hoặc mất; tìm ngày tiếp theo bằng tiêu chí công khai; lưu kết quả cùng nguồn và giới hạn. Người xem có thể hiểu vì sao ứng dụng đưa ra kết quả, kể cả khi không tìm được phương án phù hợp.

| Hướng cân nhắc | Quyết định của kế hoạch | Lý do |
|---|---|---|
| Bản đồ Mặt Trăng nhiều lớp và globe 3D | Dùng globe nhẹ làm phần dẫn đường | Moon Trek và QuickMap đã có nhiều công cụ khảo sát; chỉ thêm globe không tạo giá trị đủ rõ |
| Xếp hạng nơi đáp an toàn hoặc tối ưu năng lượng | Loại khỏi bản thi | Cần địa hình, sai số, thiết bị và điều kiện nhiệm vụ vượt quá bằng chứng hiện có |
| So sánh tác động của việc lùi ngày | Chọn làm lõi Moon Plan B | Có tác vụ cụ thể, dữ liệu hữu hạn, đầu ra đo được và đường kiểm chứng vừa sức |
| Mô phỏng địa hình và bóng đổ hoàn chỉnh | Để ngoài phạm vi giao lần này | Sai hệ tọa độ, mốc cao độ hoặc che khuất sẽ làm hỏng kết luận khoa học |

[SYNEXIS](https://synexiss.site/explorer) đã công bố góc Sun/Earth, cửa sổ thời gian và so sánh kịch bản. [CLPS Browser](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/main/README.md) cũng mô tả so sánh và timeline. Vì vậy, nhóm trình bày tác vụ, độ rõ ràng và bằng chứng kiểm thử của mình; không tuyên bố đầu tiên, chính xác hơn hoặc dễ dùng hơn khi chưa có phép thử. Các trang này mới được đọc ở mức nội dung công bố, chưa được kiểm chứng chất lượng tính toán.

## 2 Một luồng sử dụng hoàn chỉnh

1. **Mở tình huống.** Chọn một trong hai điểm tham chiếu; mặc định xem 72 giờ từ 14/11/2026 00:00 UTC. Giới thiệu ngắn: đây là lịch giả định để học, không phải lịch nhiệm vụ NASA.
2. **Lùi lịch.** Chuyển ngày bắt đầu sang 17/11 00:00 UTC. Hai biểu đồ dùng chung trục giờ tính từ lúc bắt đầu, cùng đơn vị và cùng thời lượng; mỗi bên vẫn ghi ngày UTC thật. Người dùng thấy thay đổi do ngày, không bị lẫn với đổi địa điểm.
3. **Đọc chênh lệch.** Xem tổng thời gian tâm Mặt Trời trên chân trời mô hình, tổng thời gian tâm Trái Đất trên chân trời mô hình và đoạn liên tục dài nhất cả hai cùng ở trên. Mỗi chỉ số có chênh lệch so với lịch gốc và nút mở khoảng thời gian tạo ra chênh lệch đó.
4. **Tìm phương án tiếp theo.** Chọn yêu cầu liên tục 3, 6 hoặc 12 giờ; mặc định bài tập là 6 giờ. App tìm ngày sớm nhất từ ngày bị lùi trở đi, trong danh sách ngày và mô hình đã khảo sát, đáp ứng tiêu chí đó. Nếu ngày bị lùi đã đạt, nói rõ ngay; nếu không ngày nào đạt, trả đúng kết quả và cho xem giá trị tốt nhất đã tìm thấy. Có thể đổi sang điểm thứ hai để so cùng tiêu chí.
5. **Lưu bản so sánh.** Mở trang in hoặc sao chép link chứa lựa chọn. Bản ghi có ngày, tọa độ, tiêu chí, ba chỉ số, phiên bản dữ liệu, nguồn và giới hạn. Người khác mở lại phải nhận cùng kết quả khi dùng cùng phiên bản.

Các mức 3, 6 và 12 giờ là yêu cầu bài tập do người dùng chọn, không phải tiêu chuẩn NASA hay điều kiện đủ để vận hành thiết bị. “Phương án tiếp theo” chỉ xét lịch trong bộ dữ liệu; đổi địa điểm ở đây là đối chiếu hình học, không khẳng định tàu có thể đổi quỹ đạo để tới nơi đó.

## 3 Phạm vi dữ liệu được chọn

**Hai điểm tham chiếu lấy từ nguồn NASA, không dùng catalog mẫu của ứng dụng khác.** Tên địa điểm giúp người học gắn phép so sánh với nhiệm vụ có thật; phép mô phỏng không tái hiện hiệu năng hoặc kết quả nhiệm vụ đó.

| Điểm | Tọa độ dùng trong kế hoạch | Nguồn |
|---|---|---|
| A tại vùng Malapert A theo vị trí Odysseus | Vĩ độ −80,13°; kinh Đông +1,44° | [NASA LRO công bố vị trí Odysseus](https://www.nasa.gov/missions/lro/nasas-lro-images-intuitive-machines-odysseus-lander/) |
| B tại vùng Mons Mouton theo vị trí Athena | Vĩ độ −84,79°; kinh Đông +29,20° | [NASA PDS Context Athena phiên bản 1.0](https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.clps_to_prime1_athena&version=1.0) |

Cả hai dùng cao độ mô hình 0 km trên ellipsoid tham chiếu của Horizons. Đây là giả định được hiển thị cùng tọa độ, không phải cao độ thật của tàu. Bài NASA về Odysseus có số cao độ nhưng không định nghĩa mốc cao độ ngay trong bài; không đưa số đó vào Horizons khi chưa chứng minh hai mốc tương thích. Tọa độ giữ đúng số chữ số nguồn công bố; số chữ số không chứng minh sai số vị trí và không thêm chữ số giả. Ghi sự hạn chế về hệ quy chiếu của nguồn vị trí trong hồ sơ, không tuyên bố định vị chính xác mét.

**Miền thời gian cố định:** lấy dữ liệu từ 14/11/2026 00:00 tới 14/12/2026 00:00 UTC, bước 15 phút. Cho chọn ngày bắt đầu lúc 00:00 UTC từ 14/11 tới 11/12, mỗi cửa sổ dài 72 giờ. Như vậy cửa sổ cuối vẫn nằm trọn bộ dữ liệu. Các ngày này là lựa chọn thiết kế cho bài học, không phải khuyến nghị lịch đáp thực.

Theo phép đếm, mỗi chuỗi 30 ngày có 2.881 mốc tính cả hai đầu; hai điểm và hai thiên thể cho 11.524 dòng góc. Đây là quy mô dự kiến từ cấu hình, chưa phải dữ liệu đã tải hay phép đo dung lượng. Tập lựa chọn hữu hạn giúp kiểm toàn bộ đầu vào và phát dữ liệu tĩnh, không cần server tính toán khi người xem thao tác.

Nguồn góc là [JPL Horizons](https://ssd.jpl.nasa.gov/horizons/manual.html): observer trên Mặt Trăng, target Mặt Trời và tâm Trái Đất, đại lượng góc phương vị/góc cao biểu kiến, không khúc xạ khí quyển. Kinh Đông và vĩ Bắc dương; góc tính bằng độ, cao độ đầu vào tính bằng km. Tài liệu Horizons quy định hệ lunar mean-Earth DE421 cho vị trí bề mặt; lưu header thực tế và phiên bản trả về để kiểm lại. AIRLESS không có nghĩa là loại bỏ mọi hiệu chỉnh biểu kiến.

## 4 Phương pháp tính và giới hạn kết luận

**Mô hình chuẩn là chân trời lý tưởng tại vị trí tham chiếu.** Với mỗi thời điểm, xét tâm Mặt Trời có góc cao lớn hơn 0° và tâm Trái Đất có góc cao lớn hơn 0° hay không. Góc đúng 0° là biên. Giao của hai điều kiện tạo các khoảng cùng thỏa điều kiện hình học.

| Chỉ số hiển thị | Cách xác định trong một cửa sổ 72 giờ | Ý nghĩa đúng |
|---|---|---|
| Thời gian tâm Mặt Trời ở trên chân trời | Tổng độ dài các khoảng có góc cao Mặt Trời > 0° | Chỉ báo hình học; không phải số giờ có điện thực tế |
| Thời gian tâm Trái Đất ở trên chân trời | Tổng độ dài các khoảng có góc cao Trái Đất > 0° | Chỉ báo hướng nhìn; không phải số giờ liên lạc bảo đảm |
| Khoảng cùng nhìn thấy liên tục dài nhất | Lấy giao hai tập khoảng, chọn độ dài lớn nhất | Đại lượng dùng cho tiêu chí bài tập H giờ |
| Chênh lệch so với lịch gốc | Giá trị phương án trừ giá trị gốc, cùng cách tính | Cho biết tác động của đổi ngày hoặc đổi điểm, không phải điểm an toàn |

Chung triển khai xử lý sau giờ được phép theo năm bước:

1. Lưu nguyên request và phản hồi, kiểm đúng target/observer/header, UTC, đơn vị, miền phủ và phiên bản API; từ chối phản hồi lỗi dù HTTP trả thành công.
2. Chuẩn hóa hai chuỗi về cùng mốc thời gian tăng dần, không trùng. Kiểm đủ mẫu và giá trị hữu hạn; dữ liệu thiếu giữ trạng thái thiếu, không đổi thành 0 và không nối qua khoảng trống.
3. Tạo các khoảng trên chân trời từ mẫu 15 phút, nội suy tuyến tính khi hai đầu đổi dấu. Lưu cả hai mẫu kẹp sự kiện; thời điểm nội suy là ước tính. Dùng cửa sổ nửa mở từ thời điểm bắt đầu đến trước thời điểm kết thúc; giữ mẫu ở đầu phải để nội suy nhưng không đếm thêm thời lượng.
4. Tính ba chỉ số và chênh lệch, rồi xét các ngày hợp lệ theo thứ tự thời gian. Giữ nguyên điểm khi tìm ngày dự phòng; so điểm khác là thao tác riêng. Chỉ gọi “sớm nhất trong tập đã khảo sát” khi các ứng viên trước đó đủ dữ liệu và đã được đánh giá cùng quy tắc.
5. Pipeline đánh giá trước cả ba mức H = 3, 6 và 12 giờ cho mọi ứng viên; kiểm lại những ứng viên sát từng ngưỡng và sự kiện được chọn để demo bằng lưới 1 phút. Sát ngưỡng nghĩa là H nằm trong ngoặc thời lượng suy từ các mẫu kẹp biên; đây là độ nhạy theo lưới, không phải biên sai số vật lý. Nếu kết quả đổi trạng thái đạt/không đạt, hiển thị “sát ngưỡng” và dừng đề cử chắc chắn cho tới khi giải thích được độ nhạy. Không bỏ qua ứng viên sớm hơn chỉ vì bản lấy mẫu thưa chưa quyết được.

Các lần đổi dấu chỉ xác định sự kiện trong ngoặc thời gian lấy mẫu; không chứng minh không có sự kiện ngắn giữa hai mẫu cùng dấu. So 15 phút với 1 phút là kiểm độ nhạy số, không phải chứng minh độ chính xác thực địa. Không hiển thị giây chính xác hoặc phần trăm “độ tin cậy” tự đặt.

Nếu một khoảng đang dương bị cắt ở cuối 72 giờ, ghi “khoảng bị cắt tại cuối cửa sổ; chưa xác định lúc kết thúc”; chỉ ghi tiếp diễn khi dữ liệu sau đó xác nhận. Sự kiện đúng tại đầu mút được ghi là sự kiện, không phải khoảng tiếp diễn. Nếu không thấy lần lặn trong toàn miền khảo sát, ghi đúng giới hạn miền; không suy ra nhìn thấy mãi mãi. Nếu thiếu dữ liệu trước một ứng viên, không khẳng định đó là phương án sớm nhất. Trường hợp không có phương án đạt phải phân biệt rõ với dữ liệu chưa đủ để đánh giá.

**Giới hạn luôn hiện ngay cạnh kết quả:** chưa xét núi/hố che khuất, đĩa thiên thể và nhật thực, cấu hình pin/tải/pin lưu trữ, antenna/trạm mặt đất/link budget, độ dốc và an toàn hạ cánh. Địa hình cực Nam có thể đảo thứ tự so sánh thực tế; vì vậy không đưa ra “địa điểm tốt nhất”. [NASA SVS](https://svs.gsfc.nasa.gov/4930/) minh họa vai trò riêng của địa hình; [NASA về nguồn điện](https://www.nasa.gov/smallsat-institute/sst-soa/power-subsystems/) và [liên lạc](https://www.nasa.gov/smallsat-institute/sst-soa/soa-communications/) cho thấy cần thêm thông số thiết bị để kết luận vận hành.

## 5 Kiến trúc và cách giao việc kỹ thuật

**Chọn web app React + TypeScript + Vite cho frontend; Python xử lý theo lô; JSON có phiên bản làm đầu vào; hosting tĩnh Cloudflare cho bản chia sẻ.** Python chạy khi tạo bản dữ liệu, không phải một API phải giữ hoạt động trong lúc demo. Không thêm đăng nhập, database, chatbot, mô hình học máy hoặc backend trả phí vào bản thi.

Luồng dữ liệu: nguồn NASA về vị trí + Horizons → Python lấy dữ liệu tuần tự → kiểm metadata và tính chỉ số → bộ JSON đã kiểm kèm nguồn/hash → bản build web → trình duyệt so sánh và in báo cáo. Các đường gọi JPL không chạy từ frontend. [Chính sách JPL](https://ssd-api.jpl.nasa.gov/doc/index.php) yêu cầu request tuần tự, tận dụng cache, xử lý lỗi/rate limit và không nhúng API trực tiếp vào website; tiến trình lấy dữ liệu cần User-Agent theo chính sách hiện hành.

Chung giữ nguồn dữ liệu thô, script xử lý và kết quả kiểm trong repo sản phẩm. Sơn đọc dữ liệu đã thống nhất để làm UI; không tự thay đơn vị hoặc viết một phép tính khoa học khác trong frontend. Các lựa chọn có sẵn, chỉ số và kết luận cho cả ba mức H được tạo nhất quán từ pipeline; frontend không nhận một ngưỡng ngoài tập đã kiểm. Trình duyệt chỉ chọn, so và trình bày chúng; kéo timeline dùng đúng dữ liệu nguồn của kịch bản.

| Nhóm dữ liệu bàn giao | Nội dung bắt buộc | Quy tắc chung |
|---|---|---|
| Phiên bản và nguồn | ID bộ dữ liệu, phiên bản schema/phương pháp, URL nguồn, thời gian lấy, hash raw | Báo cáo lưu đúng ID đang hiển thị |
| Điểm quan sát | ID/tên, vĩ độ, kinh Đông, cao độ mô hình, frame và giới hạn nguồn tọa độ | Không lẫn m/ km, kinh Tây/Đông hoặc cao độ thật/mô hình |
| Chuỗi thời gian | UTC có Z, góc phương vị/góc cao Sun/Earth, bước lấy mẫu | Cùng timestamp; số hữu hạn hoặc trạng thái thiếu rõ |
| Kịch bản và kết quả | Ngày bắt đầu, 72 giờ, các khoảng, ba chỉ số, ngoặc sự kiện, trạng thái theo H = 3/6/12 giờ | Cùng quy tắc cho mọi phương án; không tính thiếu thành 0 |
| Tái hiện lựa chọn | Điểm, ngày gốc, ngày hoãn, tiêu chí H, phiên bản dữ liệu | Giới hạn đầu vào; link sai hiển thị lỗi hữu ích |

Repo sản phẩm dự kiến đặt tên moon-plan-b, một repo chung, Chung giữ tích hợp; Sơn làm frontend và giữ bản build dự phòng. Tạo repo và cấu hình hosting trong giờ thi theo quyền tài khoản của nhóm. Việc đưa kế hoạch chuẩn bị lên GitHub hiện có không tự triển khai sản phẩm hoặc mở dịch vụ trả phí. Nếu chưa có quyền hosting phù hợp, giữ bản build chạy local và video dự phòng; Lâm ghi rõ giới hạn truy cập trong hồ sơ, không gắn link hỏng.

Tối đa hai luồng code đồng thời: dữ liệu/tích hợp của Chung và frontend của Sơn. Mỗi máy lấy cùng commit hợp đồng; người dùng nhiều AI phải ghi rõ file được sửa. Mọi đổi đơn vị, schema, dependency và phép tính qua Chung trước khi ghép; người khác tự chạy kiểm tra, không lấy lời AI báo xong làm bằng chứng.

## 6 Giao diện và nội dung demo

Màn hình chính gồm phần chọn tình huống, hai thẻ so sánh và timeline đồng bộ. Desktop đặt hai phương án cạnh nhau; mobile xếp dọc với ngày/điểm và thanh điều khiển luôn đọc được. Màu vàng cho Sun, xanh cho Earth, thêm nhãn và kiểu nét để không phụ thuộc màu. Kéo timeline cho thấy cả góc cao lẫn phương vị; trục thời gian và chân trời 0° không đổi giữa hai phương án.

Globe 3D nhẹ có hai marker đúng tọa độ, dùng để định hướng vị trí; góc nhìn chân trời minh họa từ chính góc dữ liệu. Chữ “minh họa” đặt tại hình; không biến màu texture thành bản đồ chiếu sáng theo ngày. Không dựng địa hình giả hoặc bóng 3D rồi dùng làm bằng chứng tính toán. Ảnh NASA chỉ dùng sau khi Trang kiểm credit/điều kiện từng tài nguyên; tránh logo ngụ ý NASA bảo trợ và nhạc có quyền riêng.

Trải nghiệm có bàn phím, focus rõ, nhãn đọc được, chế độ giảm chuyển động và bảng số thay thế khi WebGL lỗi. Animation dừng được, không tự phát âm thanh. Không dành thời gian bản thi cho nhạc, SFX hoặc video trang trí trước khi luồng dữ liệu và demo đạt kiểm tra.

**Bản in một trang** giữ câu hỏi người dùng, hai hoặc ba phương án, chênh lệch, tiêu chí H, tên mô hình, nguồn và phiên bản. Dùng in của trình duyệt để giảm phần phải viết. Không cần xây dịch vụ xuất PDF riêng.

## 7 Phân công có đầu ra cụ thể

Bảng này cụ thể hóa các vai trò đã có trên Sheet thành phương án giao việc của bản kế hoạch. Minh phụ trách kiểm tổng thể; Trang kiểm khoa học; Thảo kiểm trải nghiệm và hỗ trợ nội dung. Cách chia này tách rõ hai cách ghi QA đang khác nhau trên Sheet, không giả rằng Sheet đã được sửa hoặc mọi người đã nhận việc.

| Người | Đầu ra và mốc bàn giao | Người kiểm lại |
|---|---|---|
| Chung | Hợp đồng dữ liệu trước 09:30 ngày 14; một điểm chạy trọn luồng trước 10:30; pack hai điểm và tích hợp trước 12:00; release 20:30 | Trang kiểm nghĩa dữ liệu; Minh chạy lại; Sơn giữ build dự phòng |
| Sơn và Thảo | Sơn làm UI, timeline, so sánh và globe; Thảo làm nhãn, nguồn, mobile/keyboard và trang in. Demo lõi 15:00, bản ổn định 17:00 ngày 14 | Minh thử luồng; Trang đối chiếu số hiển thị |
| Trang | Hồ sơ nguồn và giả định trước 09:30; bảng mẫu kiểm độc lập trước 12:00; ledger nguồn/license/AI trước 20:00 ngày 14 | Chung đối chiếu request/header; Minh kiểm tái hiện |
| Minh | Bộ ca biên, lỗi dữ liệu và kiểm bản chung trước 16:00 ngày 14; ba lượt thử người dùng và biên bản lỗi trước 20:00; kiểm cuối sáng 15 | Chung/Sơn sửa đúng phạm vi; Minh chạy lại |
| Lâm | Kịch bản 3 phút trước 16:00 ngày 14; bản nháp hồ sơ/slide trước 20:00; nộp chính 10:30 ngày 15, Sơn dự phòng có quyền đăng nhập đã kiểm | Thảo rà lời thoại; Trang rà khẳng định khoa học; cả nhóm duyệt hồ sơ |

Ngày 13, Lâm/Sơn kiểm tài khoản, hướng dẫn và những quyền đã mở. Từ 09:00–09:30 ngày 14, khi cổng mở, hai người kiểm thao tác được cổng cho phép và ghi người nộp/dự phòng vào phiếu release. Nếu cổng chỉ cho một người nộp, dùng đúng tài khoản có quyền; không nộp thử hồ sơ chưa hoàn thiện. Phương án phân công không phải bằng chứng đã được cấp quyền.

## 8 Lịch thực hiện theo đầu ra

**Ngày 12 và 13 tháng 11:** nhóm đọc và duyệt phương án này; Trang đọc nguồn; Chung/Sơn kiểm công cụ bằng bài luyện không liên quan; Minh kiểm quyền đọc và cách lấy bản chung; Lâm đọc hướng dẫn nộp/chấm dự kiến công bố ngày 13, ghi thời lượng pitch và định dạng bắt buộc. Nhóm ghi giờ gặp, địa điểm làm tối và ngoại lệ tham gia vào bảng điều phối. Không tạo sẵn code, UI, dữ liệu xử lý hay tài sản bài thi.

### Ngày 14 tháng 11

| Giờ Hà Nội | Việc cần xong | Cách kiểm |
|---|---|---|
| 00:00–01:30 rồi nghỉ đến 06:00 | Chung/Sơn mở repo và dựng luồng đầu tiên nếu làm ca sớm; Trang kiểm nguồn đầu vào. Ca sớm là phần đệm, đường tiến độ chính vẫn bắt đầu sau khai mạc | Lưu checkpoint, không mở rộng scope hoặc thức xuyên đêm |
| 07:00–09:00 | Check-in 07:00–08:15 và khai mạc 08:15–09:00; giữ máy/bản dự phòng | Không lên lịch mốc code bắt buộc trong nghi thức |
| 09:00–12:00 | Chốt hợp đồng 09:30; một điểm end-to-end 10:30; hai điểm có dữ liệu/nguồn trước 12:00 | Trang đọc mẫu raw; Minh mở bản chung từ commit được giao |
| 13:00–17:00 | Nghỉ ăn 12:00–13:00; hoàn thành so ngày và Plan B 15:00, kiểm khoa học/UX 16:00, bản demo ổn định và báo cáo tiến độ 17:00 | Các ca chấp nhận mục 9 chạy trên bản tích hợp |
| 17:00–22:00 | Theo thủ tục BTC; rời địa điểm theo khung khóa 17:30–18:00. Ăn/nghỉ; 19:00–20:30 sửa lỗi và hoàn thành hồ sơ, 20:30–21:00 diễn tập, 21:00–22:00 dự phòng; nghỉ đêm | Làm tối ở địa điểm/online nhóm đã bố trí; không mặc định được ở lại trường |

### Ngày 15 tháng 11

| Giờ Hà Nội | Việc cần xong | Cách kiểm |
|---|---|---|
| 06:30–08:00 | Kiểm bản lưu, ăn sáng/di chuyển; check-in 07:30–08:00 | Lâm/Sơn kiểm lại quyền nộp và link |
| 08:00–09:00 | Sửa lỗi ảnh hưởng demo; khóa tính năng 09:00 | Minh xác nhận lỗi nghiêm trọng đã hết hoặc đã cắt nhánh lỗi |
| 09:00–10:00 | Chạy checklist cuối, quay video dự phòng, ghi release commit và phiên bản dataset | Mở link không đăng nhập và trên máy thứ hai |
| 10:00–10:30 | Rà trường hồ sơ/credit/AI và nộp Hà Nội | Lâm lưu biên nhận; Sơn đối chiếu bản đã nộp |
| 10:30–11:00 và buổi chiều | 30 phút đệm trước hạn Hà Nội; chiều trình bày và hoàn tất yêu cầu global trước 23:59 | Không dùng hạn global để kéo dài thời gian nộp địa phương |

Mốc 00:00 dựa trên lời Cẩm Chi do Sơn cung cấp và xác nhận; chat gốc chưa được xác thực độc lập. Hạn Hà Nội và lịch tại trường lấy từ [timeline sự kiện trang 2](https://drive.google.com/file/d/1m07k0x7akRQqZ7YQS71hJs_ITXxgOK7e/view), đã được đọc trực quan trong hồ sơ chuẩn bị. Lâm kiểm thông báo mới ngày 13 và trước giờ nộp; thay đổi của BTC được ưu tiên. 35 giờ là khoảng lịch từ lúc được bắt đầu tới hạn nộp, không phải 35 giờ làm liên tục.

## 9 Điều kiện nghiệm thu và cắt phạm vi

| Nhóm kiểm | Điều kiện để bàn giao | Bằng chứng giữ lại |
|---|---|---|
| Nguồn và số liệu | Tọa độ, target, UTC, đơn vị, cao độ mô hình và hash khớp; kiểm tối thiểu ba mốc cho mỗi điểm và mỗi target, gồm trường hợp gần chân trời nếu có | Request/header/raw, bảng 12 phép đối chiếu góc. Horizons web/API cùng nguồn chỉ kiểm truy vấn/parser, không phải mô hình độc lập |
| Logic khoảng và Plan B | Kiểm all-above, all-below, đổi dấu, đúng 0°, phương vị 359°→1°, chạm hai đầu, thiếu/trùng/lệch timestamp; dữ liệu ngày gốc không trở thành ngày dự phòng quá khứ; không có kết quả/sát ngưỡng phải báo đúng | Các test tổng hợp ghi rõ dữ liệu giả để kiểm thuật toán, tách khỏi dataset demo; Trang/Minh kiểm tay ít nhất một phép giao khoảng |
| Độ nhạy số | Đối chiếu lưới 15 phút/1 phút tại các biên và ứng viên sát ngưỡng; mọi sai khác làm đổi đề cử phải được xử lý hoặc gắn trạng thái không kết luận | Bảng sai khác thời điểm/thời lượng; không suy thành độ chính xác địa hình |
| Trải nghiệm và truy cập | Desktop/mobile, bàn phím, giảm chuyển động, WebGL lỗi, link sai, dữ liệu không tải; ba người chưa làm phần đó thử tìm thay đổi và nêu một giới hạn trong 2 phút | Thời gian, lỗi hiểu và mức trợ giúp thực; mục tiêu 3/3 hoàn thành, thất bại thì sửa nhãn/luồng |
| Release và hồ sơ | Build/lint/test đạt, không secret, audit dependency theo workflow đã có, nguồn/license/AI đủ; link mở không đăng nhập, máy thứ hai đọc được, có video và bản local dự phòng | Commit, dataset ID/hash, kết quả kiểm, link và biên nhận nộp |

**Các cổng cắt phạm vi đã chọn:**

1. Đến 10:30 ngày 14 chưa có một điểm chạy đúng từ nguồn tới màn hình: dừng globe/animation, tập trung dữ liệu và bảng kết quả.
2. Đến 12:00 pack 30 ngày chưa qua kiểm: thu về hai điểm × ba ngày bắt đầu 14/11, 17/11 và 20/11, mỗi cửa sổ 72 giờ, cùng bước 15 phút. App ghi rõ chỉ so sáu kịch bản và chỉ tìm trong các ngày này; không gọi là đã tìm cả tháng.
3. Đến 15:00 bộ tìm Plan B chưa ổn: giữ bảng so sáu kịch bản, cho người dùng đọc tiêu chí và chọn; bỏ tự đề cử. Khi trình bày, mô tả đúng là so sánh tác động đổi ngày, không hứa tự tìm phương án.
4. Đến 17:00 dữ liệu hoặc phép tính cốt lõi vẫn không qua kiểm: ngừng thêm tính năng, sửa hoặc loại kết quả lỗi. Không điền số giả để hoàn thiện demo. Mất nguồn live dùng bản raw đã lấy và kiểm trong giờ thi; không có bản hợp lệ thì ghi giới hạn đó trong bài nộp.
5. Sau 09:00 ngày 15 chỉ sửa lỗi ảnh hưởng sử dụng/nộp; không thêm terrain, tính công suất, link budget, người dùng/tài khoản hoặc dịch vụ mới. Bản local/video dự phòng phải gắn đúng release.

## 10 Kịch bản trình bày và hồ sơ nộp

Kịch bản nội bộ dài 3 phút; Lâm rút theo thời lượng trong hướng dẫn BTC mới nhất, dự kiến công bố ngày 13, và kiểm lại khi cổng mở. Mọi con số trong demo lấy từ bản đã kiểm, không viết trước kết quả thắng/thua.

| Thời lượng | Nội dung trình bày |
|---|---|
| 0:00–0:25 | Nêu tình huống: một nhiệm vụ học tập bị lùi ngày, cần biết cửa sổ Sun/Earth thay đổi thế nào |
| 0:25–1:10 | Mở điểm A, lịch gốc và lịch hoãn; kéo cùng đồng hồ, chỉ một thay đổi thật trên biểu đồ và chỉ số |
| 1:10–1:55 | Dùng tiêu chí H giờ để tìm ngày tiếp theo; nếu không có ngày đạt hoặc lịch hoãn đã đạt, giải thích chính kết quả đó. Chuyển điểm B để đối chiếu cùng định nghĩa |
| 1:55–2:35 | Mở nguồn, cao độ giả định, bước lấy mẫu và giới hạn địa hình; cho thấy kết quả có thể được tái hiện |
| 2:35–3:00 | Mở bản so sánh lưu được, nói người học có thể hiểu điều gì và báo kết quả thử người dùng thực tế |

Tình huống mặc định giữ nguyên 14/11 → 17/11. Nếu cần một bài học có chuyển tiếp chân trời dễ thấy, Trang chọn trường hợp đầu tiên theo thứ tự ngày trong pack có chuyển tiếp đã kiểm, ghi lý do chọn là minh họa cơ chế; không dùng nó làm bằng chứng mọi ngày đều cải thiện. Nếu dữ liệu không có thay đổi đáng kể, trình bày đúng điều đó.

Bộ nộp gồm web/demo, repo tái hiện, mô tả bài toán và phương pháp, danh mục nguồn/credit/license/đóng góp AI, video/slide theo đúng yêu cầu cổng. README ghi cách dựng lại từ raw và hash; dữ liệu giả cho test tách khỏi dữ liệu khoa học; mọi công cụ bên thứ ba giữ giấy phép. Không sao chép app Atlas/NavLunar khi quyền tái sử dụng chưa rõ. GitHub và Drive chuẩn bị là nơi nhóm đọc tài liệu; hồ sơ thi dùng release riêng sau giờ bắt đầu.

## 11 Nguồn kiểm tra và quyết định để nhóm duyệt

Ngày 12/11 đã đối chiếu đề NASA qua nội dung được lập chỉ mục, bản sao HackAthlone, tài liệu JPL, hai nguồn vị trí NASA, sản phẩm đối chiếu và bảng phân công hiện hành. Trang NASA challenge/FAQ mở toàn văn gặp lỗi 502 trong lượt kiểm; vì thế Lâm kiểm lại bản chính và hướng dẫn dự kiến công bố ngày 13 trước khi đóng hồ sơ. Không coi kế hoạch này là kết quả mô phỏng đã chạy hoặc nhu cầu người dùng đã được chứng minh.

| Nhóm nguồn | Dùng vào việc gì |
|---|---|
| [Đề NASA](https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/) và [HackAthlone](https://hackathlone.com/challenges/lunar-landing-site-navigator) | Đối chiếu mục tiêu địa điểm/ngày/thiên thể; bản NASA quyết định yêu cầu |
| [Horizons manual](https://ssd.jpl.nasa.gov/horizons/manual.html), [API](https://ssd-api.jpl.nasa.gov/doc/horizons.html), [API policy](https://ssd-api.jpl.nasa.gov/doc/index.php) | Đại lượng, tọa độ, thời gian, request/header và cách sử dụng dịch vụ |
| NASA LRO Odysseus và PDS Athena liên kết tại mục 3; [LOLA PGDA](https://pgda.gsfc.nasa.gov/products/78) | Vị trí tham chiếu và lý do phải kiểm riêng địa hình/sai số |
| [Timeline Hà Nội](https://drive.google.com/file/d/1m07k0x7akRQqZ7YQS71hJs_ITXxgOK7e/view), [FAQ](https://www.spaceappschallenge.org/resources/participant-faqs/), [Terms](https://www.spaceappschallenge.org/legal/) | Lịch, điều kiện nộp, ghi nguồn và khai báo AI; kiểm lại thông báo mới |
| [Kiến trúc đã soạn](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/docs/architecture-proposal/ARCHITECTURE_PROPOSAL.md) và [cơ sở lý thuyết](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/docs/architecture-proposal/THEORY_PRIMER.md) | Giải thích nền; các lựa chọn cụ thể của phiên bản Moon Plan B nằm trong kế hoạch này |

**Nhóm duyệt cùng một gói:** Moon Plan B, hai điểm tham chiếu, cửa sổ 72 giờ, dữ liệu tính theo lô, tiêu chí bài tập minh bạch, web React/Vite, phân công mục 7 và lịch mục 8. Tiêu chuẩn hoàn thành là một phép so sánh đúng nguồn, giải thích được và mở lại được; có bản demo ngày đầu và hồ sơ nộp trước hạn Hà Nội.

Bước tiếp trong 2 phút: mỗi thành viên đọc dòng nhiệm vụ của mình ở mục 7 và phản hồi nhận việc hoặc nêu đúng một điều chỉnh cụ thể.
