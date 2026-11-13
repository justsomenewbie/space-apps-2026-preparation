# Kế hoạch Moon Plan B cho nhóm Lunar

Phương án Sơn đưa nhóm duyệt ngày 12 tháng 11 năm 2026, bổ sung ưu tiên ngày 13 tháng 11

**Chọn Moon Plan B: web app giúp người học so sánh địa điểm và ngày đáp, trực quan vị trí Mặt Trời và Trái Đất so với chân trời.** Tình huống xuyên suốt là lịch bị lùi: giữ điểm thì điều kiện đổi ra sao, đổi sang điểm khác trong cùng ngày thì khác gì, và có phương án nào đạt tiêu chí trong tập đã khảo sát.

Bản này đề xuất hướng sản phẩm, quy trình chọn dữ liệu, cách kiểm, phân công và lịch thực hiện để nhóm duyệt cùng một phương án. **Dữ liệu BTC cung cấp là đầu vào chính; nguồn ngoài chỉ bổ sung phần cần thiết.** Địa điểm, ngày và cấu hình tính được xác định sau khi kiểm dữ liệu thực nhận theo mục 3. Các lựa chọn thiết kế là khuyến nghị của bản kế hoạch; việc từng thành viên nhận nhiệm vụ được ghi khi nhóm thông qua. Đây không phải biên bản nhóm đã biểu quyết. **Danh sách Must-have và Should-have ở mục 1 có thể sửa, đổi ưu tiên hoặc bổ sung theo ý kiến nhóm, dữ liệu và thời gian; không phải danh sách đóng.**

**Bắt đầu triển khai từ 00:00 ngày 14/11/2026. Nộp Hà Nội trước 11:00 ngày 15/11; mục tiêu của nhóm là 10:30.** Giờ làm việc dưới đây dùng giờ Hà Nội. Thời gian bên trong sản phẩm dùng UTC và luôn có nhãn. Trước giờ bắt đầu chỉ đọc nguồn, học lý thuyết và chuẩn bị công cụ.

**Bổ sung hướng dẫn nộp ngày 12/11:** [SEPA](https://sepa.org.vn/en/nasa-space-apps-hanoi-2026-submission-guide.htm) đã công bố định dạng, ngôn ngữ và cách chấm; chi tiết ở mục 10. Sơn tái xác nhận mốc 00:00 sau khi đọc bài này. Sản phẩm, hồ sơ và tài liệu team viết được dẫn khi nộp phải bằng **tiếng Anh ngay từ bản đầu**; kế hoạch điều phối này giữ tiếng Việt. Sáng 15 nộp bản đầu sớm, sau đó sửa và bấm Submit lại; 10:30 là mục tiêu hoàn tất bản nộp địa phương.

## 1 Sản phẩm và lý do chọn hướng này

Người dùng chính là sinh viên, người học STEM và người xem lần đầu tìm hiểu kế hoạch hoạt động trên Mặt Trăng. Mục tiêu là trong một phiên khoảng hai phút, họ chọn điểm tham chiếu, thử lùi ngày, đọc được phần thay đổi và giải thích vì sao một phương án đạt hoặc không đạt tiêu chí bài tập. Giáo viên có thể dùng cùng một tình huống để thảo luận. Chuyên gia có thể xem nguồn và giả định; phiên bản thi không phục vụ điều hành nhiệm vụ thật.

[Đề Lunar của NASA](https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/) đặt so địa điểm/ngày và trực quan Sun/Earth so với chân trời làm trọng tâm. Nguyên văn Sơn chép từ trang chính ngày 12/11 nêu rõ tình huống đổi ngày hoặc địa điểm khi tiến độ thay đổi; danh sách tính năng và cân nhắc kỹ thuật là gợi ý, có thể dùng dữ liệu tính sẵn. Nội dung khớp [bản sao HackAthlone](https://hackathlone.com/challenges/lunar-landing-site-navigator); bản chính NASA vẫn quyết định yêu cầu. Đây là đối chiếu văn bản được cung cấp, không phải lần truy cập toàn văn trực tiếp thành công.

**Lõi demo gồm hai phép so và phần giải thích trực quan:** giữ địa điểm/thời lượng để đổi ngày; giữ ngày giờ UTC/thời lượng/định nghĩa/tiêu chí để đổi địa điểm; xem vị trí Sun/Earth so với chân trời và các khoảng tương ứng. Hoàn thành lõi này trước tự tìm Plan B và globe trang trí. Tự tìm ngày tiếp theo dùng tiêu chí công khai trong tập đã khảo sát; kết quả được lưu cùng nguồn và giới hạn. Chưa biết dữ liệu BTC không làm thay đổi mục tiêu này; cấu hình cụ thể theo quy trình ở mục 3.

| Hướng cân nhắc | Quyết định của kế hoạch | Lý do |
|---|---|---|
| Bản đồ Mặt Trăng nhiều lớp và globe 3D | Dùng globe nhẹ làm phần dẫn đường | Moon Trek và QuickMap đã có nhiều công cụ khảo sát; chỉ thêm globe không tạo giá trị đủ rõ |
| Xếp hạng nơi đáp an toàn hoặc tối ưu năng lượng | Chưa đưa vào lõi; xét bổ sung sau khi kiểm dữ liệu BTC | Chưa biết bộ BTC có gì; chỉ so mức phù hợp theo tiêu chí có đủ dữ liệu, mô hình và cách kiểm |
| So điểm và so ngày khi lịch bị lùi | Chọn làm lõi cùng trực quan Sun/Earth | Hai phép so tách rõ tác động của địa điểm và ngày, có đầu ra kiểm lại được |
| Mô phỏng địa hình và bóng đổ hoàn chỉnh | Không mặc định tự dựng; có thể dùng sản phẩm BTC đã kiểm | Cần xác nhận hệ tọa độ, mốc cao độ, định nghĩa che khuất và phạm vi áp dụng |

**Điều kiện mở rộng:** sau khi nhận dữ liệu BTC, Trang và Chung đánh giá phần so sánh có thể bổ sung, ghi tiêu chí, dữ liệu/mô hình, giả định, giới hạn, người phụ trách và cách Minh kiểm lại. Nhóm chỉ đưa vào bản thi khi đủ bằng chứng và thời gian, không làm chậm luồng lõi hoặc vượt mốc khóa tính năng. Nếu chưa đủ thì ghi rõ chưa hỗ trợ; không loại trước vì chưa biết dữ liệu, cũng không nhận là “an toàn” hay “tối ưu” vượt phạm vi đã kiểm.

[SYNEXIS](https://synexiss.site/explorer) đã công bố góc Sun/Earth, cửa sổ thời gian và so sánh kịch bản. [CLPS Browser](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/main/README.md) cũng mô tả so sánh và timeline. Vì vậy, nhóm trình bày tác vụ, độ rõ ràng và bằng chứng kiểm thử của mình; không tuyên bố đầu tiên, chính xác hơn hoặc dễ dùng hơn khi chưa có phép thử. Các trang này mới được đọc ở mức nội dung công bố, chưa được kiểm chứng chất lượng tính toán.

### 1.1 Must-have cho bản đầu hoàn chỉnh

**Đề xuất Sơn yêu cầu ghi vào kế hoạch ngày 13/11, chưa phải quyết định chung của nhóm.** Must-have là mức ưu tiên sản phẩm được đề xuất; không có nghĩa NASA bắt buộc từng tính năng trong bảng. Các yêu cầu cuộc thi thực tế ở mục 10 vẫn áp dụng khi nhóm đổi phạm vi. Mục tiêu là một web app responsive mở bằng link trên điện thoại và máy tính, giúp trả lời: lịch đáp đổi thì điều kiện thay đổi thế nào, và phương án khác có điểm gì phù hợp hơn theo tiêu chí đang xét.

| Ưu tiên lõi | Người dùng nhận được gì | Ví dụ nghiệm thu |
|---|---|---|
| Hai chế độ so sánh rõ ràng | Cùng điểm khác ngày; khác điểm cùng khoảng UTC. Lựa chọn lấy từ dữ liệu đã kiểm | Đổi ngày giữ điểm và thời lượng; đổi điểm giữ UTC, thời lượng, định nghĩa và tiêu chí |
| Timeline Sun/Earth tương tác | Xem vị trí hai thiên thể so với chân trời, biểu đồ dễ đọc và hai phương án đồng bộ | Đổi thời điểm cập nhật cả hình, biểu đồ và nhãn; tổng số giờ không thay cho trực quan vị trí |
| Kết quả giải thích được | Thời lượng phù hợp định nghĩa nguồn, khoảng giao liên tục dài nhất và chênh lệch giữa hai phương án | Người xem chỉ ra điều gì tăng, giảm hoặc chưa đủ dữ liệu để kết luận; không gán hình học thành điện, liên lạc hay an toàn bảo đảm |
| Bằng chứng cạnh kết quả | Nguồn, phiên bản, đơn vị, UTC, mô hình, miền phủ và giới hạn | Phân biệt không có khoảng đạt với thiếu dữ liệu hoặc sát ngưỡng; truy được vai trò dữ liệu BTC và nguồn bổ sung |
| Trải nghiệm dùng và mở lại được | UI tiếng Anh, điện thoại/máy tính, bàn phím, trạng thái tải/lỗi và link khôi phục so sánh | Link lưu chế độ, lựa chọn, thời lượng, tiêu chí và phiên bản; lỗi phiên bản/đầu vào được giải thích; vẫn xem kết quả khi 3D lỗi |

### 1.2 Should-have sau khi lõi hoạt động đúng

| Ưu tiên tiếp theo | Giá trị đề xuất | Điều kiện đưa vào bản thi |
|---|---|---|
| Tự tìm Plan B | Ngày sớm nhất đạt tiêu chí công khai trong tập đã đánh giá, kèm lý do | Lõi so sánh đã qua kiểm; xử lý đúng thiếu dữ liệu, sát ngưỡng và không có phương án; không hứa ngày tối ưu ngoài miền khảo sát |
| 3D chân thực có ích | Định hướng từ Mặt Trăng tới điểm chọn và giúp hiểu hướng nhìn, giữ cảm giác cao cấp | Hoàn thiện sau lõi; phân biệt cảnh minh họa với phép tính và địa hình đã kiểm; có chế độ nhẹ, dừng/giảm chuyển động |
| Một tình huống hướng dẫn | Nút thử lịch bị lùi giúp người mới đi qua một phép so có thật và đã kiểm | Không dùng số liệu dựng làm kết quả; thử với người chưa làm tính năng, theo mục 9 |
| Bản so sánh in một trang | Giữ câu hỏi, lựa chọn, kết quả, nguồn và giới hạn để chia sẻ | Dùng in trình duyệt trước; không cần dịch vụ xuất PDF riêng |
| Lớp khoa học bổ sung có căn cứ | Xét che khuất địa hình, chiếu sáng hoặc mức phù hợp theo tiêu chí rõ ràng | Chỉ thêm khi dữ liệu/mô hình, quyền dùng, người phụ trách, cách kiểm và thời gian đáp ứng cổng mở rộng ở mục 1; không loại trước hoặc hứa trước khi nhận dữ liệu |

Luồng gợi ý: mở ví dụ đã kiểm → chọn so ngày hoặc so điểm → đổi thời gian → đọc chênh lệch → chia sẻ. Điều khiển gọn, kết quả nổi bật, giải thích kỹ thuật mở khi cần. Nhạc tùy chọn và tắt mặc định; nhạc/SFX không là điều kiện đạt lõi. JSON có phiên bản cấp cho frontend vẫn là phương án ban đầu; chỉ thêm tài khoản, cơ sở dữ liệu, API trực tiếp hoặc chatbot khi có nhu cầu cụ thể. Đây là định hướng, chưa tạo UI hay khóa stack mới.

**Cách cập nhật đề xuất:** nhóm có thể sửa, thêm, bỏ hoặc chuyển mức ưu tiên. Khi đổi, ghi lý do, tác động dữ liệu/giao diện, đầu ra, người nhận và cách kiểm vào mục liên quan; kiểm lại thời gian và điều kiện nộp. Phân biệt đề xuất mới, quyết định nhóm đã nhận và kết quả đã kiểm. Việc Sơn yêu cầu lưu danh sách không xác nhận toàn nhóm đã đồng ý hoặc dữ liệu đã đủ.

## 2 Một luồng sử dụng hoàn chỉnh

1. **Mở tình huống.** Chọn điểm và ngày bắt đầu từ danh sách đã kiểm; xem Sun/Earth so với chân trời, nguồn BTC/phần bổ sung và thời lượng khảo sát. Đây là tình huống để học, không phải khuyến nghị lịch nhiệm vụ NASA.
2. **Giữ điểm, đổi ngày.** So lịch gốc với lịch bị lùi, cùng địa điểm, thời lượng, định nghĩa và tiêu chí. Biểu đồ dùng trục giờ từ lúc bắt đầu và ghi ngày UTC thật ở mỗi bên; các chỉ số chỉ ra khoảng nào thêm hoặc mất.
3. **Giữ ngày, đổi điểm.** So hai địa điểm với cùng ngày giờ UTC tuyệt đối, thời lượng, định nghĩa và tiêu chí. Kéo timeline để thấy vị trí Sun/Earth và các khoảng tương ứng ở cả hai điểm; đọc thời lượng Sun, Earth và đoạn liên tục dài nhất cùng thỏa, với nhãn đúng mô hình ở mục 4. Không đổi cả điểm lẫn ngày rồi quy chênh lệch cho riêng địa điểm.
4. **Tìm phương án tiếp theo.** Sau khi lõi so sánh chạy đúng, chọn H giờ để tìm ngày sớm nhất từ lịch hoãn trở đi tại điểm đang chọn, trong tập đã khảo sát. Nếu lịch hoãn đã đạt hoặc không có ngày đạt, báo đúng kết quả. Ngày Plan B riêng của hai điểm có thể khác nhau; luôn ghi ngày, không đặt chung cột như thể đó là phép so cùng ngày.
5. **Lưu bản so sánh.** Mở trang in hoặc sao chép link chứa chế độ so, hai lựa chọn điểm/ngày, tiêu chí, chỉ số, phiên bản dữ liệu, nguồn và giới hạn. Người khác mở lại phải nhận cùng kết quả khi dùng cùng phiên bản.

H là yêu cầu bài tập do người dùng chọn, không phải tiêu chuẩn NASA hay điều kiện đủ để vận hành thiết bị. “Phương án tiếp theo” chỉ xét lịch trong bộ dữ liệu; đổi địa điểm ở đây là đối chiếu hình học, không khẳng định tàu có thể đổi quỹ đạo để tới nơi đó.

## 3 Dữ liệu chính và quy tắc chọn phạm vi

**Dùng dữ liệu BTC cung cấp trong luồng xử lý chính.** Nguồn ngoài chỉ bổ sung đại lượng, metadata hoặc phép đối chiếu còn thiếu sau khi đã kiểm bộ chính. Mỗi kết quả phải truy được tệp/trường BTC đã tham gia tạo kết quả hoặc xác định đầu vào; chỉ đưa tên BTC vào phần credit không đủ. Hiện chưa có nội dung bộ dữ liệu thực nhận để xác nhận địa điểm, ngày, định dạng hay khả năng hỗ trợ phép so sánh.

**Theo thông tin Sơn cung cấp ngày 12/11, đến lúc thi mới nhận dữ liệu BTC.** Hiện chốt mục tiêu sản phẩm và chuẩn bị danh mục nguồn; không chốt điểm/ngày hoặc giả định bộ BTC đủ mọi đại lượng. Khi nhận: kiểm bộ chính → xác định phần thiếu → chọn nguồn ngoài được phép và tương thích → kiểm bộ kết hợp → chốt miền dùng chung. Nếu BTC thiếu góc Sun/Earth, Trang/Chung đánh giá nguồn bổ sung như Horizons cho đầu vào có căn cứ; không tự bỏ biểu đồ chỉ vì thiếu trường trong bộ chính. Nếu cả nguồn chính và phần bổ sung hợp lệ vẫn không đủ, ghi rõ phần lõi chưa đạt, không dựng số liệu để lấp thiếu.

Đây là yêu cầu lập kế hoạch Sơn xác nhận ngày 12/11. [Thể lệ Hà Nội](https://drive.google.com/file/d/1t_VmkD3v4rESUOwzjytbguesqA4OoIBe/view), IV.4, yêu cầu ít nhất một nguồn dữ liệu mở hoặc tài nguyên khoa học của NASA/đối tác; Phụ lục 2 quy định điều kiện tài nguyên ngoài. Không diễn giải điều khoản này thành bằng chứng đã có một bộ BTC cụ thể. Nguồn bổ sung phải đáp ứng quyền dùng, phân phối và trích dẫn.

Hướng dẫn nộp SEPA ngày 12/11 yêu cầu tên và link ít nhất một dataset NASA hoặc Space Agency Partner ở trường NASA Data / Partner Data. Trang/Chung truy rõ nguồn NASA/đối tác trong bộ BTC hoặc phần bổ sung thực dùng; chỉ ghi “dữ liệu BTC” chưa đủ để hoàn thành trường này. Không thêm tên nguồn chưa tham gia sản phẩm.

**Trang và Chung hoàn thành phiếu dữ liệu trước 09:30 ngày 14**, nếu BTC đã phát hành bộ đầu vào. Phiếu ghi nơi nhận/phiên bản/hash, cấu trúc, ý nghĩa đại lượng, đơn vị, hệ tọa độ và mốc cao độ, thang thời gian, phạm vi địa điểm/ngày, độ phân giải, giá trị thiếu và quyền dùng. Ghi rõ dữ liệu nào là quan trắc, dữ liệu mô hình hoặc sản phẩm tổng hợp; không suy loại này thành loại khác. Nếu bộ dữ liệu chưa được cấp, ghi trạng thái đó và áp dụng cổng cắt phạm vi ở mục 9.

| Quyết định sau khi kiểm dữ liệu | Quy tắc thực hiện | Đầu ra ghi trong bản kê dữ liệu |
|---|---|---|
| Điểm so sánh | Mục tiêu hai điểm có căn cứ trong bộ BTC; dùng nguồn ngoài bổ sung đại lượng còn thiếu, kiểm miền chung, không ấn định tên/tọa độ trước | ID, tọa độ, frame, nguồn và vai trò dữ liệu BTC ở từng điểm |
| Ngày và thời lượng | Chọn một miền hữu hạn có phủ đầy đủ; lịch gốc, lịch hoãn và ứng viên tiếp theo phải dùng cùng thời lượng | Danh sách ngày hợp lệ, ngày mặc định, thời lượng và miền phủ |
| Độ phân giải và mô hình | Giữ nghĩa dữ liệu gốc; chọn phương pháp phù hợp với loại dữ liệu, không làm dày mẫu rồi nhận là chính xác hơn | Bước nguồn, bước xử lý, định nghĩa chân trời/tâm hoặc mép thiên thể, phép chuyển đổi và giới hạn |
| Tiêu chí H | Chọn tập hữu hạn theo thời lượng và độ phân giải đã kiểm; đánh giá mọi ứng viên với cùng tập H | Danh sách H, giá trị mặc định và cách xử lý sát ngưỡng |
| Nguồn bổ sung | Chỉ thêm khi có khoảng thiếu được mô tả và kiểm tương thích; không âm thầm ghi đè hoặc thay bộ BTC | Tệp/trường bổ sung, lý do dùng, nguồn/license, phép kiểm và các khác biệt |

Cửa sổ 72 giờ, H = 3/6/12 giờ, lưới 15 phút và bảng hai điểm × ba ngày chỉ là ví dụ cấu hình sau khi nhận dữ liệu, không phải thông số khóa trước hoặc quy định BTC. Không cố định tháng khảo sát, số dòng, Odysseus/Athena hoặc cao độ 0 km. Bảng so điểm phải dùng cùng ngày ở mỗi cột; ngày Plan B riêng ghi tách rõ. Bản kê của bộ kết hợp đã kiểm là nguồn cấu hình duy nhất. Chỉ giảm phạm vi vì thiếu dữ liệu sau khi đã xét nguồn bổ sung hợp lệ; ghi rõ phần lõi chưa đáp ứng. Các ngày demo không mặc nhiên là toàn bộ miền tìm kiếm.

[JPL Horizons](https://ssd.jpl.nasa.gov/horizons/manual.html) là nguồn bổ sung có thể dùng cho góc Sun/Earth nếu bộ BTC thiếu đại lượng đó và cho phép lập observer tương thích. Khi dùng, kiểm request/header, target, frame, UTC, kinh/vĩ độ, đơn vị và mốc cao độ. Không tự gán quy ước Horizons cho dữ liệu BTC. Các nguồn [NASA LRO Odysseus](https://www.nasa.gov/missions/lro/nasas-lro-images-intuitive-machines-odysseus-lander/) và [NASA PDS Athena](https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.clps_to_prime1_athena&version=1.0) chỉ là tài liệu vị trí đã đọc, không chọn sẵn làm hai điểm demo. Không dùng cao độ khác mốc, thêm chữ số giả hoặc nhận định vị chính xác mét khi nguồn không chứng minh.

## 4 Phương pháp tính và giới hạn kết luận

**Phương pháp tham chiếu đề xuất là chân trời lý tưởng tại vị trí đã kiểm.** Chỉ áp dụng sau khi Trang/Chung xác nhận dữ liệu là góc cao của tâm Mặt Trời/Trái Đất so với chân trời tương ứng, hoặc có phép chuyển đổi hợp lệ để tạo đại lượng đó. Khi ấy xét góc cao > 0°; đúng 0° là biên; giao hai điều kiện tạo khoảng cùng thỏa hình học. Không áp ngưỡng này trực tiếp vào raster trung bình, phần trăm chiếu sáng hoặc cờ che khuất có định nghĩa khác. Nếu dùng sản phẩm đã xét địa hình, giữ đúng định nghĩa của nó và kiểm riêng; không trộn với chân trời lý tưởng rồi gọi cùng một chỉ số.

Bảng dưới áp dụng riêng cho mô hình góc cao tâm thiên thể so với chân trời lý tưởng. Nếu bộ BTC cung cấp khoảng nhìn thấy theo định nghĩa khác, chỉ dùng sau khi kiểm phương pháp của nguồn, đổi nhãn tương ứng và giữ cùng định nghĩa cho mọi phương án; không đổi tên khoảng theo mép đĩa/địa hình thành khoảng tâm > 0°.

| Chỉ số hiển thị | Cách xác định trong cùng thời lượng đã chọn | Ý nghĩa đúng |
|---|---|---|
| Thời gian tâm Mặt Trời ở trên chân trời | Tổng độ dài các khoảng có góc cao Mặt Trời > 0° | Chỉ báo hình học; không phải số giờ có điện thực tế |
| Thời gian tâm Trái Đất ở trên chân trời | Tổng độ dài các khoảng có góc cao Trái Đất > 0° | Chỉ báo hướng nhìn; không phải số giờ liên lạc bảo đảm |
| Khoảng cùng nhìn thấy liên tục dài nhất | Lấy giao hai tập khoảng, chọn độ dài lớn nhất | Đại lượng dùng cho tiêu chí bài tập H giờ |
| Chênh lệch so với lịch gốc | Giá trị phương án trừ giá trị gốc, cùng cách tính | Cho biết tác động của đổi ngày hoặc đổi điểm, không phải điểm an toàn |

Chung triển khai xử lý sau giờ được phép theo năm bước:

1. Lưu nguyên tệp BTC/metadata và request/phản hồi bổ sung nếu có; kiểm nguồn, kiểu dữ liệu, target/observer, thời gian, đơn vị, miền phủ và phiên bản. Từ chối phản hồi lỗi dù HTTP trả thành công; ghi mọi phép chuyển đổi.
2. Chuẩn hóa hai chuỗi về cùng mốc thời gian tăng dần, không trùng. Kiểm đủ mẫu và giá trị hữu hạn; dữ liệu thiếu giữ trạng thái thiếu, không đổi thành 0 và không nối qua khoảng trống.
3. Với chuỗi góc đã kiểm tương thích, tạo khoảng trên chân trời từ bước nguồn đã ghi; nội suy tuyến tính khi hai đầu đổi dấu chỉ là ước tính. Lưu hai mẫu kẹp sự kiện và kiểm giả định nội suy. Dùng cửa sổ nửa mở từ lúc bắt đầu đến trước lúc kết thúc; giữ mẫu ở đầu phải để nội suy nhưng không đếm thêm thời lượng. Với sản phẩm dạng khoảng có sẵn, kiểm định nghĩa/biên của nguồn trước khi dùng.
4. Tính ba chỉ số và chênh lệch, rồi xét các ngày hợp lệ theo thứ tự thời gian. Giữ nguyên điểm khi tìm ngày dự phòng; so điểm khác là thao tác riêng. Chỉ gọi “sớm nhất trong tập đã khảo sát” khi các ứng viên trước đó đủ dữ liệu và đã được đánh giá cùng quy tắc.
5. Pipeline đánh giá trước mọi mức H trong bản kê cho mọi ứng viên. Kiểm các ứng viên sát từng ngưỡng và sự kiện demo bằng dữ liệu mịn hơn nếu nguồn hỗ trợ; không tạo thêm độ chính xác bằng cách chỉ nội suy. Với chuỗi lấy mẫu, sát ngưỡng nghĩa là H nằm trong ngoặc thời lượng suy từ các mẫu kẹp biên; đây là độ nhạy theo lưới, không phải biên sai số vật lý. Nếu dữ liệu không đủ phân xử hoặc kết quả đổi trạng thái, hiển thị “sát ngưỡng” và dừng đề cử chắc chắn. Không bỏ qua ứng viên sớm hơn vì dữ liệu thưa chưa quyết được.

Các lần đổi dấu chỉ xác định sự kiện trong ngoặc thời gian lấy mẫu; không chứng minh không có sự kiện ngắn giữa hai mẫu cùng dấu. So hai độ phân giải là kiểm độ nhạy số, không phải chứng minh độ chính xác thực địa. Khi nguồn không có dữ liệu mịn hơn, giữ khoảng bất định và hạn chế kết luận; không hứa luôn làm mịn được. Không hiển thị giây chính xác hoặc phần trăm “độ tin cậy” tự đặt.

Nếu một khoảng đang dương bị cắt ở cuối cửa sổ, ghi “khoảng bị cắt tại cuối cửa sổ; chưa xác định lúc kết thúc”; chỉ ghi tiếp diễn khi dữ liệu sau đó xác nhận. Sự kiện đúng tại đầu mút được ghi là sự kiện, không phải khoảng tiếp diễn. Nếu không thấy lần lặn trong toàn miền khảo sát, ghi đúng giới hạn miền; không suy ra nhìn thấy mãi mãi. Nếu thiếu dữ liệu trước một ứng viên, không khẳng định đó là phương án sớm nhất. Trường hợp không có phương án đạt phải phân biệt rõ với dữ liệu chưa đủ để đánh giá.

**Giới hạn luôn hiện ngay cạnh kết quả:** chân trời lý tưởng chưa xét núi/hố che khuất, đĩa thiên thể và nhật thực. Nếu dữ liệu BTC đã xét một hiệu ứng, chỉ ghi có xét khi metadata và kiểm tra xác nhận. Phần lõi hiện chưa tính cấu hình pin/tải/pin lưu trữ, antenna/trạm mặt đất/link budget, độ dốc và an toàn hạ cánh; phần bổ sung phải qua điều kiện mở rộng ở mục 1. Địa hình có thể đổi kết luận so sánh; không suy “địa điểm tốt nhất” từ riêng các chỉ số hình học. [NASA SVS](https://svs.gsfc.nasa.gov/4930/) minh họa vai trò địa hình; [NASA về nguồn điện](https://www.nasa.gov/smallsat-institute/sst-soa/power-subsystems/) và [liên lạc](https://www.nasa.gov/smallsat-institute/sst-soa/soa-communications/) cho thấy cần thêm thông số thiết bị để kết luận vận hành.

## 5 Kiến trúc và cách giao việc kỹ thuật

**Chọn web app React + TypeScript + Vite cho frontend; Python xử lý theo lô; JSON có phiên bản làm đầu vào; hosting tĩnh Cloudflare cho bản chia sẻ.** Python chạy khi tạo bản dữ liệu, không phải một API phải giữ hoạt động trong lúc demo. Không thêm đăng nhập, database, chatbot, mô hình học máy hoặc backend trả phí vào bản thi.

Luồng dữ liệu: **bộ BTC → kiểm metadata/phạm vi → bổ sung nguồn ngoài khi có khoảng thiếu được xác định → Python xử lý và kiểm → JSON có phiên bản, nguồn/hash → web so sánh và in báo cáo**. Lưu rõ phần BTC và phần bổ sung, không đổi tên dữ liệu ngoài thành dữ liệu BTC. Nếu dùng JPL, chỉ gọi từ tiến trình chuẩn bị dữ liệu; [chính sách JPL](https://ssd-api.jpl.nasa.gov/doc/index.php) yêu cầu request tuần tự, cache, xử lý lỗi/rate limit, User-Agent phù hợp và không nhúng API trực tiếp vào website.

Chung giữ nguồn dữ liệu thô, script xử lý và kết quả kiểm trong repo sản phẩm theo quyền phân phối của nguồn; dữ liệu lớn dùng liên kết/ID/hash và cách lấy lại. Sơn đọc bản kê đã kiểm để tạo danh sách điểm, ngày, thời lượng và H; không hard-code lựa chọn cũ, tự đổi đơn vị hoặc tính khoa học theo cách khác. Pipeline tạo nhất quán chỉ số và kết luận cho toàn bộ tập H đã phát hành; frontend không nhận giá trị ngoài tập đã kiểm. Trình duyệt chỉ chọn, so và trình bày; kéo timeline dùng đúng dữ liệu kịch bản.

| Nhóm dữ liệu bàn giao | Nội dung bắt buộc | Quy tắc chung |
|---|---|---|
| Phiên bản và nguồn | ID bộ BTC, tệp/trường tham gia xử lý, nguồn bổ sung/lý do dùng, schema/phương pháp, URL, ngày lấy, hash raw | Truy được từng kết quả về đầu vào BTC và phần bổ sung; lưu đúng ID đang hiển thị |
| Điểm quan sát | Danh sách đã kiểm, ID/tên, tọa độ, mốc cao độ, frame, nguồn và phép chuyển đổi | Không mặc định điểm/cao độ; không lẫn m/km hoặc kinh Tây/Đông |
| Chuỗi thời gian | Thang thời gian gốc, phép đổi sang UTC có Z, đại lượng/đơn vị Sun/Earth, độ phân giải và kiểu nguồn | Cùng định nghĩa và timestamp; số hữu hạn hoặc trạng thái thiếu rõ |
| Kịch bản và kết quả | Miền phủ, ngày hợp lệ, thời lượng chung, các khoảng, chỉ số, ngoặc sự kiện, tập H/trạng thái | Toàn cửa sổ phải nằm trong miền đã kiểm; không tính thiếu thành 0 |
| Tái hiện lựa chọn | Chế độ so ngày/so điểm, ID và UTC của cả hai lựa chọn, thời lượng, tiêu chí H, phiên bản dữ liệu | So ngày giữ cùng điểm; so điểm giữ cùng UTC; link sai hiển thị lỗi hữu ích |

**Sơn chốt ngày 12/11: một repo sản phẩm riêng**, dùng chung cho frontend, backend/script dữ liệu, tests và tài liệu tiếng Anh. Repo hiện tại giữ chuẩn bị/điều phối. Tên moon-plan-b còn là đề xuất; URL/owner/branch/quyền ghi được ghi khi bắt đầu. Vai trò Chung tích hợp, Sơn frontend/build dự phòng vẫn là phân công đề xuất.

**Từ 00:00 ngày 14/11 khi bắt đầu:** kiểm checkout/Git/runtime/ownership; chuyển chỉ dẫn sang AGENTS.md và HANDOFF.md tiếng Anh trước task đầu. Giữ English từ bản đầu, mốc thi/nộp, nguồn/AI, đơn vị/giới hạn khoa học, review, bảo mật và tự chọn công cụ. Dẫn nguồn chuẩn bị theo commit, sửa đường dẫn/đích, kiểm tool từng máy; không chuyển tài liệu riêng/bài luyện hoặc tự mở rộng quyền đồng bộ. Ghi URL/owner/branch ở cả hai handoff.

Tạo repo/hosting trong giờ thi theo quyền tài khoản của nhóm; cập nhật này chỉ ghi kế hoạch. Không tự mở dịch vụ trả phí. Nếu thiếu quyền hosting, giữ build local/video dự phòng; Lâm ghi giới hạn truy cập, không gắn link hỏng. Checklist chuyển giao đầy đủ nằm trong AGENTS và COMPETITION_RUNBOOK.

**GitHub dùng trong hồ sơ thi cũng cần tiếng Anh:** README chính, hướng dẫn chạy/build/test và tái hiện dữ liệu, phương pháp, giới hạn, nguồn/license và đóng góp AI do team viết đều dùng tiếng Anh. Giữ nguyên dữ liệu, license và attribution gốc bên thứ ba; thêm giải thích tiếng Anh khi cần. Repo chuẩn bị hiện tại và tin nhắn điều phối tiếng Việt không thay thế tài liệu sản phẩm. Khi được dẫn trong bài nộp, repo phải đọc được không cần đăng nhập; quyền đọc không đồng nghĩa quyền push.

Tối đa hai luồng code đồng thời: dữ liệu/tích hợp của Chung và frontend của Sơn. Mỗi máy lấy cùng commit hợp đồng; người dùng nhiều AI phải ghi rõ file được sửa. Mọi đổi đơn vị, schema, dependency và phép tính qua Chung trước khi ghép; người khác tự chạy kiểm tra, không lấy lời AI báo xong làm bằng chứng.

## 6 Giao diện và nội dung demo

Sơn/Thảo viết toàn bộ UI bài thi bằng **tiếng Anh từ đầu**: nhãn, biểu đồ, đơn vị/thời gian, thông báo loading/empty/error, mô tả cho công cụ hỗ trợ đọc, nguồn/giới hạn và bản in. Các câu tiếng Việt trong kế hoạch mô tả ý nghĩa cần giữ, không phải nội dung để chép nguyên vào app. Lâm chuẩn bị slide/trang nộp bằng tiếng Anh; khi thuyết trình trực tiếp có thể nói Việt hoặc Anh. Video nói Việt phải có phụ đề Anh.

Màn hình chính có hai chế độ rõ: so ngày tại một điểm và so điểm trong cùng ngày giờ UTC, dùng hai thẻ và timeline đồng bộ. Desktop đặt cạnh nhau; mobile xếp dọc, giữ nhãn điểm/ngày/đơn vị dễ đọc. **Ưu tiên biểu đồ góc cao Sun/Earth theo thời gian, kèm hướng nhìn/phương vị khi dữ liệu đã kiểm hỗ trợ**, để giải thích vị trí so với chân trời và các cửa sổ. Nguồn có thể là bộ BTC kết hợp phần ngoài bổ sung; không suy góc từ phần trăm chiếu sáng hoặc cờ nhìn thấy. Màu vàng cho Sun, xanh cho Earth, thêm nhãn/kiểu nét. Mốc 0° chỉ dùng cho mô hình tương ứng; dữ liệu xét địa hình giữ định nghĩa riêng. Chỉ có số giờ hoặc bảng khoảng chưa đạt yêu cầu trực quan vị trí của lõi.

Globe 3D nhẹ lấy marker từ danh sách tọa độ đã kiểm, dùng để định hướng vị trí; góc nhìn chân trời chỉ minh họa khi bản dữ liệu có góc tương thích. Chữ “minh họa” đặt tại hình; không biến màu texture thành bản đồ chiếu sáng theo ngày. Không dựng địa hình giả hoặc bóng 3D rồi dùng làm bằng chứng tính toán. Ảnh NASA chỉ dùng sau khi Trang kiểm credit/điều kiện từng tài nguyên; tránh logo ngụ ý NASA bảo trợ và nhạc có quyền riêng.

Trải nghiệm có bàn phím, focus rõ, nhãn đọc được, chế độ giảm chuyển động và bảng số thay thế khi WebGL lỗi. Animation dừng được, không tự phát âm thanh. Không dành thời gian bản thi cho nhạc, SFX hoặc video trang trí trước khi luồng dữ liệu và demo đạt kiểm tra.

**Bản in một trang** giữ câu hỏi người dùng, hai hoặc ba phương án, chênh lệch, tiêu chí H, tên mô hình, nguồn và phiên bản. Dùng in của trình duyệt để giảm phần phải viết. Không cần xây dịch vụ xuất PDF riêng.

## 7 Phân công có đầu ra cụ thể

Bảng này cụ thể hóa các vai trò đã có trên Sheet thành phương án giao việc của bản kế hoạch. Minh phụ trách kiểm tổng thể; Trang kiểm khoa học; Thảo kiểm trải nghiệm và hỗ trợ nội dung. Cách chia này tách rõ hai cách ghi QA đang khác nhau trên Sheet, không giả rằng Sheet đã được sửa hoặc mọi người đã nhận việc.

| Người | Đầu ra và mốc bàn giao | Người kiểm lại |
|---|---|---|
| Chung | Cùng Trang kiểm bộ BTC và chốt bản kê/hợp đồng trước 09:30 ngày 14; một luồng có dữ liệu BTC thật trước 10:30; pack hỗ trợ hai phép so và trực quan Sun/Earth trước 12:00; release 20:30 | Trang kiểm nghĩa dữ liệu; Minh chạy lại; Sơn giữ build dự phòng |
| Sơn và Thảo | Sơn làm hai chế độ so và biểu đồ Sun/Earth; Thảo làm nhãn, nguồn, mobile/keyboard và trang in. Globe sau lõi. Demo lõi 15:00, bản ổn định 17:00 ngày 14 | Minh thử luồng; Trang đối chiếu số hiển thị |
| Trang | Phiếu kiểm dữ liệu BTC, khoảng thiếu và lý do bổ sung trước 09:30; bảng mẫu kiểm độc lập trước 12:00; nguồn NASA/đối tác, license và AI bằng tiếng Anh trước 20:00 ngày 14 | Chung đối chiếu tệp/metadata; Minh kiểm tái hiện |
| Minh | Kiểm hai phép so, trực quan, ca biên/lỗi dữ liệu và bản chung trước 16:00 ngày 14; ba lượt thử người dùng và biên bản lỗi trước 20:00; kiểm cuối sáng 15 | Chung/Sơn sửa đúng phạm vi; Minh chạy lại |
| Lâm | Kịch bản trình bày 5–7 phút trước 16:00 ngày 14; hồ sơ và tối đa 7 slide tiếng Anh trước 20:00; cùng Team Owner nộp bản đầu sớm sáng 15, bản cuối mục tiêu 10:30; Sơn hỗ trợ dự phòng | Thảo rà tiếng Anh/lời thoại; Trang rà khoa học; Team Owner kiểm quyền nộp |

Các mốc dữ liệu giả định BTC đã cấp đầu vào để nhóm kiểm; nếu chưa có thì Trang ghi tình trạng đó và áp dụng mục 9, không tự thay bằng bộ ngoài. Ngày 13, Lâm/Sơn xác định Team Owner và quyền đã mở; từ 09:00–09:30 ngày 14 kiểm cổng thực tế và ghi vào phiếu release. Team Owner là người bấm Submit theo hướng dẫn; phân công Lâm không tự chứng minh Lâm giữ quyền đó. Sơn chuẩn bị file/checklist dự phòng trong quyền được cấp, không chia sẻ mật khẩu. Sáng 15 nộp một bản đầu trung thực kể cả chưa hoàn thiện, rồi cập nhật trước hạn; không nhận tính năng chưa chạy là đã hoàn thành.

## 8 Lịch thực hiện theo đầu ra

**Ngày 12 và 13 tháng 11:** nhóm đọc và duyệt phương án này; Trang đọc nguồn; Chung/Sơn kiểm công cụ bằng bài luyện không liên quan; Minh kiểm quyền đọc và cách lấy bản chung; Lâm đọc checklist SEPA ngày 12/11 ở mục 10 và kiểm hướng dẫn NASA/thông báo mới ngày 13. Nhóm ghi Team Owner, giờ gặp, nơi làm tối và ngoại lệ tham gia vào bảng điều phối. Không tạo sẵn code, UI, dữ liệu xử lý hay tài sản bài thi.

### Ngày 14 tháng 11

| Giờ Hà Nội | Việc cần xong | Cách kiểm |
|---|---|---|
| 00:00–01:30 rồi nghỉ đến 06:00 | Chung/Sơn mở repo sản phẩm riêng nếu làm ca sớm, chuyển và kiểm chỉ dẫn tiếng Anh trước task đầu; Trang kiểm bộ BTC nếu đã phát hành. Fixture giả chỉ dùng thử kỹ thuật, không làm số liệu demo. Ca sớm là phần đệm | Ghi URL/owner/branch, checkpoint và nhãn fixture; không mở rộng scope hoặc thức xuyên đêm |
| 07:00–09:00 | Check-in 07:00–08:15 và khai mạc 08:15–09:00; giữ máy/bản dự phòng | Không lên lịch mốc code bắt buộc trong nghi thức |
| 09:00–12:00 | Kiểm bộ BTC/chốt bản kê 09:30; một luồng dữ liệu thật 10:30; pack cho so điểm/ngày và trực quan Sun/Earth trước 12:00 | Trang đọc raw/metadata; Minh truy kết quả về BTC và mở bản chung |
| 13:00–17:00 | Nghỉ ăn 12:00–13:00; hoàn thành hai phép so và trực quan Sun/Earth 15:00; tự tìm Plan B sau lõi, kiểm khoa học/UX 16:00, bản demo ổn định và báo cáo tiến độ 17:00 | Các ca chấp nhận mục 9 chạy trên bản tích hợp |
| 17:00–22:00 | Theo thủ tục BTC; rời địa điểm theo khung khóa 17:30–18:00. Ăn/nghỉ; 19:00–20:30 sửa lỗi và hoàn thành hồ sơ, 20:30–21:00 diễn tập, 21:00–22:00 dự phòng; nghỉ đêm | Làm tối ở địa điểm/online nhóm đã bố trí; không mặc định được ở lại trường |

### Ngày 15 tháng 11

| Giờ Hà Nội | Việc cần xong | Cách kiểm |
|---|---|---|
| 06:30–08:00 | Kiểm bản lưu; Team Owner nộp bản đầu sớm khi đã điền trung thực các ô bắt buộc; ăn sáng/di chuyển, check-in 07:30–08:00 | Lâm/Sơn kiểm link và trạng thái submitted; giữ biên nhận |
| 08:00–09:00 | Sửa lỗi ảnh hưởng demo; khóa tính năng 09:00 | Minh xác nhận lỗi nghiêm trọng đã hết hoặc đã cắt nhánh lỗi |
| 09:00–10:00 | Kiểm tiếng Anh, giới hạn demo, link, nguồn/AI; ghi release commit và phiên bản dataset | Mở ẩn danh và trên máy thứ hai; video nộp nếu chọn phải ≤30 giây |
| 10:00–10:30 | Rà hồ sơ và bấm Submit lại để chốt bản địa phương | Lâm lưu biên nhận; Sơn đối chiếu bản mới nhất đã submitted |
| 10:30–11:00 và sau đó | 30 phút đệm; chấm trong 11:00–15:00 theo slot BTC, đến sớm 10 phút; trao giải 16:30; hạn global 23:59 | Giữ snapshot bài địa phương; không dùng hạn global để kéo dài hạn Hà Nội |

Mốc 00:00 dựa trên lời Cẩm Chi do Sơn cung cấp, được Sơn tái xác nhận ngày 12/11 sau khi đọc hướng dẫn mới; chat gốc chưa được xác thực độc lập. Bài SEPA mô tả khai mạc/bắt đầu theo lịch 09:00; kế hoạch giữ quyền làm từ 00:00, không chờ giờ mở cổng. Hạn Hà Nội có trong [timeline trang 2](https://drive.google.com/file/d/1m07k0x7akRQqZ7YQS71hJs_ITXxgOK7e/view) và hướng dẫn mới. Lâm kiểm các thay đổi chính thức và slot riêng của đội. 35 giờ là khoảng lịch, không phải 35 giờ làm liên tục.

## 9 Điều kiện nghiệm thu và cắt phạm vi

| Nhóm kiểm | Điều kiện để bàn giao | Bằng chứng giữ lại |
|---|---|---|
| Nguồn và số liệu | Truy được kết quả về tệp/trường BTC có vai trò thực; nguồn bổ sung có lý do/giấy phép và tương thích. Tọa độ, đại lượng, thời gian, đơn vị, frame và hash khớp; với chuỗi góc kiểm ba mốc cho mỗi điểm/target, gồm gần chân trời nếu có | Phiếu dữ liệu, raw/metadata, bản kê và bảng kiểm theo loại nguồn. So cùng một nguồn qua web/API chỉ kiểm tích hợp, không phải mô hình độc lập |
| Lõi so sánh và trực quan | Chạy cùng điểm/khác ngày và cùng UTC/khác điểm; giữ thời lượng, định nghĩa, H; biểu đồ hoặc hình vị trí Sun/Earth khớp dữ liệu và các khoảng. Không dùng riêng tổng số giờ để thay vị trí | Hai ca tái hiện có nguồn, nhãn thời gian và trạng thái thiếu/sát ngưỡng; thiếu một chiều hoặc trực quan thì ghi lõi chưa đạt |
| Logic khoảng và Plan B | Kiểm all-above, all-below, đổi dấu, đúng 0°, phương vị 359°→1°, chạm hai đầu, thiếu/trùng/lệch timestamp; dữ liệu ngày gốc không trở thành ngày dự phòng quá khứ; không có kết quả/sát ngưỡng phải báo đúng | Các test tổng hợp ghi rõ dữ liệu giả để kiểm thuật toán, tách khỏi dataset demo; Trang/Minh kiểm tay ít nhất một phép giao khoảng |
| Độ nhạy số | Kiểm biên và ứng viên sát mọi H đã phát hành; so dữ liệu mịn hơn khi nguồn hỗ trợ. Không đủ phân xử thì giữ trạng thái không kết luận, không lấy nội suy thay bằng chứng | Bảng độ phân giải/ngoặc sự kiện/sai khác; giữ giới hạn nguồn, không suy thành độ chính xác địa hình |
| Trải nghiệm và truy cập | Desktop/mobile, bàn phím, giảm chuyển động, WebGL lỗi, link sai, dữ liệu không tải; ba người chưa làm phần đó thử tìm thay đổi và nêu một giới hạn trong 2 phút | Thời gian, lỗi hiểu và mức trợ giúp thực; mục tiêu 3/3 hoàn thành, thất bại thì sửa nhãn/luồng |
| Release và hồ sơ | Build/lint/test đạt, không secret, audit dependency; UI/README/hồ sơ/link tài liệu tiếng Anh; demo ≤7 slide gồm bìa hoặc ≤30 giây; nguồn NASA/đối tác, license/AI đủ; mở link ẩn danh | Commit, dataset ID/hash, checklist ngôn ngữ/định dạng, bản local dự phòng và trạng thái submitted sau lần sửa cuối |

**Các cổng cắt phạm vi đã chọn:**

1. Đến 10:30 ngày 14 chưa có luồng dùng dữ liệu BTC thật chạy đúng: dừng globe/animation trang trí, tập trung nguồn, hai phép so và trực quan vị trí. Nếu chưa nhận bộ BTC, Lâm xác nhận nơi/thời điểm phát hành; fixture vẫn chỉ dùng thử kỹ thuật, không đánh dấu đạt cổng dữ liệu.
2. Đến 12:00 pack đầy đủ chưa qua kiểm: thu nhỏ số lựa chọn về miền chung đã kiểm, ưu tiên giữ hai phép so và trực quan Sun/Earth. Xét nguồn ngoài bổ sung trước khi bỏ một chiều vì thiếu dữ liệu BTC. Không khóa hai điểm × ba ngày; thiếu chiều so hoặc vị trí thì công khai lõi chưa đạt đầy đủ, không tự điền số liệu ngoài miền.
3. Đến 15:00 lõi chưa ổn: dừng tự tìm Plan B và globe để hoàn thành hai phép so cùng trực quan. Nếu lõi đã đạt nhưng bộ tìm chưa ổn, giữ so sánh các kịch bản đã kiểm và để người dùng chọn theo tiêu chí; mô tả đúng khả năng, không hứa tự tìm phương án.
4. Đến 17:00 dữ liệu hoặc phép tính cốt lõi vẫn không qua kiểm: ngừng thêm tính năng, sửa hoặc loại kết quả lỗi. Dùng bản BTC/raw đã lấy hợp lệ và kiểm được khi nguồn mất truy cập. Nếu không có dữ liệu BTC phù hợp, chưa đạt nghiệm thu dữ liệu; báo giới hạn và điều chỉnh phạm vi theo hướng dẫn BTC, không thay toàn bộ bằng nguồn ngoài rồi nhận đã đáp ứng kế hoạch. Không dùng fixture làm số liệu khoa học.
5. Sau 09:00 ngày 15 chỉ sửa lỗi ảnh hưởng sử dụng/nộp; không thêm terrain, tính công suất, link budget, người dùng/tài khoản hoặc dịch vụ mới. Bản local/video dự phòng phải gắn đúng release.

## 10 Kịch bản trình bày và hồ sơ nộp

Theo [hướng dẫn SEPA ngày 12/11](https://sepa.org.vn/en/nasa-space-apps-hanoi-2026-submission-guide.htm), demo nộp là **tối đa 7 slide kể cả bìa hoặc video tối đa 30 giây**. Kế hoạch chọn 7 slide tiếng Anh; video là phương án thay thế, không phải thêm một yêu cầu bắt buộc. Buổi chấm riêng dài **15 phút gồm trình bày và hỏi đáp**, BTC khuyến nghị nói **5–7 phút** bằng Việt hoặc Anh; đến sớm 10 phút. Slot cụ thể của đội chưa được xác nhận. Mọi con số lấy từ bản đã kiểm, không viết trước kết quả thắng/thua.

| Thời lượng | Nội dung trình bày |
|---|---|
| 0:00–1:00 | Giới thiệu đội/đề và tình huống học tập bị lùi ngày; nêu người dùng và vấn đề |
| 1:00–3:00 | Demo cùng điểm/khác ngày rồi cùng UTC/khác điểm; dùng hình Sun/Earth giải thích chênh lệch. Tự tìm Plan B theo H chỉ trình bày sau khi lõi đã chạy đúng |
| 3:00–4:30 | Chỉ dataset NASA/đối tác, tệp/trường BTC và phần bổ sung; giải thích mô hình, giới hạn và cách tái hiện |
| 4:30–6:00 | Mở bản so sánh lưu được; báo đúng kết quả thử người dùng, tác động và bước tiếp; phần còn lại dành hỏi đáp |

Trang/Chung chọn mặc định sau khi kiểm dữ liệu: theo thứ tự ID/ngày tăng dần, chọn các ca đã kiểm gồm điểm A ở ngày gốc và ngày hoãn, điểm B ở cùng ngày hoãn, với cùng thời lượng, ghi trong bản kê. Nếu cần minh họa chuyển tiếp chân trời, dùng trường hợp đầu tiên theo thứ tự ngày thỏa điều kiện đó và ghi lý do; không coi là bằng chứng mọi ngày đều cải thiện. Không ấn định địa điểm/ngày trước khi nhận dữ liệu. Nếu kết quả không đổi đáng kể, trình bày đúng điều đó.

**Bố cục 7 slide đề xuất:** tên sản phẩm/đội/đề; vấn đề; giải pháp; dữ liệu NASA và xử lý; demo/kết quả; tác động/bước tiếp; thành viên/nguồn. Link nguồn và danh mục đầy đủ đặt trong repo tiếng Anh. Nếu chọn video, hiển thị sản phẩm hoạt động và tên dữ liệu NASA, không quá 30 giây; giọng Việt có phụ đề Anh; YouTube Unlisted hoặc Drive mở theo link. Video dự phòng dài hơn chỉ dùng hỗ trợ diễn tập, không thay video đúng giới hạn.

### Các ô trên trang nộp NASA

| Ô hồ sơ | Nội dung team chuẩn bị bằng tiếng Anh |
|---|---|
| Project Name | Tên ngắn của sản phẩm |
| High-Level Summary | Đã làm gì, giải quyết phần nào của đề và vì sao hữu ích |
| Project Demo | Link bộ slide tối đa 7 trang hoặc video tối đa 30 giây |
| Final Project | Link riêng tới sản phẩm thực hoặc repo có thể tái hiện |
| Project Details | Cách hoạt động, công nghệ, lợi ích và mục tiêu |
| Use of AI | Từng công cụ thực dùng như ChatGPT/Codex/Gemini và công việc đã hỗ trợ; không ghi No AI used |
| NASA Data / Partner Data | Tên/link ít nhất một dataset NASA hoặc Space Agency Partner thực dùng |
| References | Toàn bộ thư viện, ảnh, nhạc, bài viết, AI và tài nguyên bên ngoài; giữ credit/license |

### Nộp và kiểm bản đã nộp

Team Owner đăng nhập NASA, mở trang đội → Project → Edit, điền hồ sơ, đánh dấu hai xác nhận đã đọc hướng dẫn và đồng ý điều khoản cuộc thi, cùng xác nhận công trình của đội có ghi mọi tài nguyên ngoài, rồi bấm **Submit**. Kiểm trang đội hiển thị đã submitted; email/Zalo không phải kênh nhận bài. Kiểm đủ sáu người ở Members và đăng ký Hanoi, cùng đề đã chọn trong 14 đề chính thức; không đăng ký lại khi chưa có sai lệch. Sau đóng cổng không thêm thành viên.

Sáng 15 nộp bản đầu sớm kể cả còn thiếu tính năng, mô tả trung thực trạng thái; mỗi lần sửa phải **bấm Submit lại**, hoàn tất trước 11:00. Mục tiêu bản cuối là 10:30. Mở mọi link bằng cửa sổ ẩn danh: app/GitHub/Drive/YouTube phải cho người có link đọc không cần đăng nhập. Lưu commit, dataset ID/hash, URL và biên nhận/trạng thái sau lần sửa cuối. SEPA cho phép cải thiện tới hạn global 23:59; giữ snapshot bản chấm Hà Nội, không mặc định sửa sau 11:00 được tính vào chấm địa phương.

### Tiêu chí chấm và điều kiện nguồn

Năm tiêu chí, mỗi tiêu chí 1–10 điểm: **Impact, Creativity, Validity, Relevance, Presentation**. Lâm/Trang chuẩn bị bằng chứng về người được giúp, đóng góp riêng, cơ sở khoa học/khả thi, mức bám đề và vai trò dữ liệu NASA, cùng câu chuyện/demo rõ; không tự chấm điểm hoặc nhận kết quả chưa kiểm.

Lõi sản phẩm làm trong hai ngày hackathon. Ghi nguồn/AI đầy đủ, kiểm quyền ảnh/nhạc/code, không đưa ngày sinh, địa chỉ nhà, số điện thoại hoặc ảnh nhận diện người dưới 18 chưa có đồng ý của phụ huynh vào sản phẩm. Điều kiện ảnh có đồng ý phụ huynh của SEPA không tự giải quyết quy định global chặt hơn về tên/giọng/hình nhận diện người dưới 18 đã ghi trong PREPARATION; kiểm trước khi đưa vào bài. Theo SEPA, dự án nộp là nguồn mở và mặc định Apache 2.0 nếu đội không chọn; Chung kiểm điều khoản cổng và tính tương thích của các license trước phát hành, không tự đổi license bên thứ ba. README tiếng Anh ghi cách dựng lại từ raw/hash, tách fixture test khỏi dữ liệu khoa học. Không sao chép Atlas/NavLunar khi quyền chưa rõ. GitHub/Drive chuẩn bị không thay release bài thi được làm sau giờ bắt đầu.

SEPA thông báo chứng nhận điện tử cho người nộp đúng hạn, giải địa phương ngày 15 và lựa chọn Global Nominees; đây là thông tin điều kiện, không phải nhóm đã nộp hoặc đã nhận giải.

## 11 Nguồn kiểm tra và quyết định để nhóm duyệt

Ngày 12/11 đã đối chiếu đề NASA qua nội dung được lập chỉ mục, bản sao HackAthlone, tài liệu JPL, nguồn vị trí NASA, sản phẩm đối chiếu, bảng phân công và thể lệ địa phương. Bản sửa theo chỉ dẫn Sơn giữ dữ liệu BTC chính, nguồn ngoài bổ sung và không khóa địa điểm/ngày; chưa kiểm nội dung bộ BTC. Đã đọc nguyên văn đề do Sơn chép từ trang NASA; văn bản xác nhận tình huống đổi ngày/địa điểm, trực quan Sun/Earth và tính gợi ý của danh sách tính năng, không chứng minh cấu trúc dữ liệu sắp nhận. Hướng dẫn SEPA ngày 12/11 được đọc toàn văn qua Exa và truy cập HTTP trực tiếp thành công. Link hướng dẫn NASA trong bài gặp lỗi SSL khi lấy qua Exa; chưa kiểm form đăng nhập hoặc quyền Team Owner. Các giới hạn nộp ở mục 10 được dẫn theo SEPA; Lâm kiểm bản chính/thông báo mới khi có. Không coi kế hoạch là kết quả mô phỏng hoặc nhu cầu người dùng đã chứng minh.

| Nhóm nguồn | Dùng vào việc gì |
|---|---|
| Dữ liệu BTC qua kênh phát hành chính thức; [thể lệ Hà Nội](https://drive.google.com/file/d/1t_VmkD3v4rESUOwzjytbguesqA4OoIBe/view) | Đầu vào chính theo chỉ dẫn Sơn; Trang ghi link/ID/version khi nhận. Thể lệ không chứng minh cấu trúc một bộ chưa được cung cấp |
| [Đề NASA](https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/) và [HackAthlone](https://hackathlone.com/challenges/lunar-landing-site-navigator) | Đối chiếu mục tiêu địa điểm/ngày/thiên thể; bản NASA quyết định yêu cầu |
| [Horizons manual](https://ssd.jpl.nasa.gov/horizons/manual.html), [API](https://ssd-api.jpl.nasa.gov/doc/horizons.html), [API policy](https://ssd-api.jpl.nasa.gov/doc/index.php); nguồn vị trí NASA ở mục 3 và [LOLA PGDA](https://pgda.gsfc.nasa.gov/products/78) | Tài liệu/nguồn bổ sung theo khoảng thiếu đã xác định; kiểm tương thích trước khi dùng, không thay bộ chính |
| [Timeline Hà Nội](https://drive.google.com/file/d/1m07k0x7akRQqZ7YQS71hJs_ITXxgOK7e/view), [FAQ](https://www.spaceappschallenge.org/resources/participant-faqs/), [Terms](https://www.spaceappschallenge.org/legal/) | Lịch, điều kiện nộp, ghi nguồn và khai báo AI; kiểm lại thông báo mới |
| [Hướng dẫn nộp SEPA ngày 12/11](https://sepa.org.vn/en/nasa-space-apps-hanoi-2026-submission-guide.htm) | Ô hồ sơ, tiếng Anh, demo 7 slide hoặc 30 giây, Team Owner/Submit, 15 phút chấm và năm tiêu chí; người dùng giữ mốc 00:00 |
| [Kiến trúc đã soạn](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/docs/architecture-proposal/ARCHITECTURE_PROPOSAL.md) và [cơ sở lý thuyết](https://github.com/justsomenewbie/space-apps-2026-preparation/blob/main/docs/architecture-proposal/THEORY_PRIMER.md) | Giải thích nền; các lựa chọn cụ thể của phiên bản Moon Plan B nằm trong kế hoạch này |

**Nhóm duyệt cùng một gói:** Moon Plan B, dữ liệu BTC làm chính, nguồn ngoài bổ sung có căn cứ, lõi gồm so điểm, so ngày và trực quan Sun/Earth trong miền của bộ chính kết hợp nguồn bổ sung đã kiểm; ưu tiên lõi trước tự tìm Plan B/globe, xử lý theo lô, tiêu chí bài tập minh bạch, web React/Vite, phân công mục 7 và lịch mục 8. Địa điểm/ngày/cấu hình được quyết theo phiếu kiểm dữ liệu, không khóa trước. Tiêu chuẩn hoàn thành là phép so sánh truy được nguồn, giải thích được và mở lại được; có demo ngày đầu và hồ sơ nộp trước hạn Hà Nội.

Bước tiếp trong 2 phút: mỗi thành viên đọc dòng nhiệm vụ của mình ở mục 7 và phản hồi nhận việc hoặc nêu đúng một điều chỉnh cụ thể.
