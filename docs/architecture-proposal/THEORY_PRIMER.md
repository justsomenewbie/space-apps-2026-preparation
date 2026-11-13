# Cơ sở lý thuyết cho kiến trúc Lunar web app

**Cập nhật phối hợp cuối ngày 13/11:** frontend hiện theo Next.js + Tailwind. Sơn báo Chung làm backend bằng Claude và chuẩn bị server, chưa có API/deploy được kiểm. Những mô tả web tĩnh/API ngoài phạm vi bên dưới thuộc phương án lý thuyết trước cập nhật; dùng FRONTEND_HANDOFF và kế hoạch §5 cho hợp đồng hiện hành. Cơ sở vật lý và yêu cầu nguồn/đơn vị vẫn cần kiểm độc lập trên dữ liệu thật.

**Áp dụng theo hướng chốt ngày 13/11:** [kế hoạch Moon Plan B](../../KE_HOACH_NHOM.md) mục 3–4 chọn Horizons làm nguồn Sun/Earth chính; vị trí/ngày/cấu hình quyết sau kiểm raw/header và nguồn tọa độ. Primer giải thích kiến thức nền NASA/JPL; không tự gán frame, UTC hoặc mô hình Horizons cho nguồn bổ sung chưa kiểm. Quy tắc chân trời tham chiếu chỉ dùng với đại lượng tương thích. Đây là kế hoạch kiểm, chưa phải dataset đã xử lý hoặc mô hình đã xác thực.

Ngày đọc nguồn: 12/11/2026, giờ Hà Nội. **Tài liệu học và thảo luận; chưa phải mô hình đã triển khai hoặc kiểm định.** Thời gian đọc dự kiến: 8 phút. Đọc cùng [sơ đồ kiến trúc](ARCHITECTURE_PROPOSAL.md) và [phiếu nguồn dữ liệu](../../DATA_PREPARATION.md).

Mục tiêu là giải thích được dữ liệu có nghĩa gì, kết luận nào được phép rút ra và cần kiểm gì trước khi trình bày kết quả. Các ví dụ dưới đây là tình huống tưởng tượng để học, không phải quan trắc hay kết quả của nhóm. Không chốt địa điểm, chỉ số, ngưỡng, trọng số, stack backend hoặc hợp đồng dữ liệu.

## 1. Trình duyệt hiển thị; phép tính cần căn cứ riêng

Trong mô hình client/server, trình duyệt gửi yêu cầu và nhận phản hồi từ server. Hosting tĩnh có thể gửi các tệp đã chuẩn bị; server động có thể tạo phản hồi khi nhận yêu cầu. Vì vậy, một web app có tương tác không bắt buộc phải tính lại mọi thứ trên server mỗi lần bấm. [MDN, Client-server overview — Static sites và Dynamic sites](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview).

**Đề xuất hiện tại:** phần xử lý theo lô tạo kết quả có phiên bản cho một tập lựa chọn hữu hạn để frontend đọc; API là phương án lịch sử ngoài bản thi đang đề xuất. Đây là đề xuất kỹ thuật còn chờ nhóm thống nhất. Đã đọc tài liệu nguồn không có nghĩa đã kiểm dữ liệu phù hợp hoặc nhóm đã chọn dùng. Giao diện chạy đúng chỉ chứng minh khả năng hiển thị/giao tiếp; muốn chứng minh số liệu đúng phải kiểm nguồn, định nghĩa và phép xử lý riêng.

Ví dụ giả định: một biểu đồ vẽ thành công dữ liệu gắn nhầm đơn vị vẫn là một biểu đồ sai về ý nghĩa. Vì thế, đơn vị và nguồn cần đi cùng kết quả từ lúc xử lý đến lúc hiển thị.

## 2. “Nhìn từ đâu, theo hệ nào, vào lúc nào?”

**Ephemeris** là thông tin vị trí/chuyển động thiên thể theo thời gian được tính từ mô hình. [JPL, Horizons manual — Introduction](https://ssd.jpl.nasa.gov/horizons/manual.html#intro). Trong Horizons, **target** là đối tượng muốn khảo sát; **observer** là nơi quan sát. Chọn tâm Mặt Trăng và chọn một vị trí trên bề mặt là hai bài toán quan sát khác nhau. [JPL, Horizons tutorial — Select a Target Body, Specify Observer Location](https://ssd.jpl.nasa.gov/horizons/tutorial.html).

| Khái niệm | Cách hiểu và câu hỏi khi đọc dữ liệu |
| --- | --- |
| Observer và target | Đứng ở đâu, nhìn vật nào? Vị trí thiết bị có cùng vị trí tham chiếu với dữ liệu không? |
| Hệ quy chiếu | Các trục hướng theo đâu? Hệ gắn với thiên thể khác hệ quán tính; ghi tên hệ và nguồn định nghĩa. |
| Mốc cao độ | “Cao” so với ellipsoid, mặt cầu tham chiếu hay mặt đất tại chỗ? Không cộng/trừ khi chưa biết hai mốc có tương thích. |
| Thời gian | Ghi cả thang thời gian và cách hiển thị múi giờ. UTC, TT, TDB là các thang khác nhau; đổi múi giờ không tự đổi được giữa chúng. |
| Đơn vị | Đọc từng trường: độ hay radian, mét hay kilômét. Tên trường giống nhau chưa đủ để ghép hai nguồn. |

Hệ quy chiếu xác định hướng các trục dùng biểu diễn vị trí. Vì vậy, hai bộ tọa độ của cùng một điểm có thể khác khi dùng hệ khác; cần định nghĩa hoặc phép biến đổi thích hợp trước khi so sánh. [NAIF, Frames Required Reading — Using Frames — Frame Transformation Functions](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/frames.html).

Với vị trí bề mặt Mặt Trăng trong Horizons, manual quy định kinh Đông/vĩ Bắc dương, góc theo độ, cao độ theo km trên ellipsoid tham chiếu; dùng hệ lunar mean-Earth DE421, phân biệt với principal-axis. Với ngày hiện đại, UT trong Horizons là UTC. **Khuyến nghị:** trao đổi thời gian bằng một quy ước thống nhất, giữ nguyên thông tin nguồn; đây chưa phải hợp đồng nhóm. [Horizons manual — User-defined topocentric site coordinates, Lunar mean-Earth frame of DE421, Time](https://ssd.jpl.nasa.gov/horizons/manual.html).

**Góc phương vị và góc cao:** với mục kết quả số 4 của Horizons, phương vị đi từ Bắc về Đông; góc cao đo so với mặt phẳng vuông góc thiên đỉnh địa phương, đơn vị độ. Đây là tọa độ biểu kiến, có các hiệu chỉnh quan sát như thời gian truyền ánh sáng; không phải góc đã xét từng ngọn núi. [Horizons manual — Apparent azimuth & elevation](https://ssd.jpl.nasa.gov/horizons/manual.html#apparent-azimuth--elevation-az-el-).

**Chữ `AIRLESS` dễ gây nhầm:** API dùng `APPARENT` để chọn có/không thêm hiệu chỉnh khúc xạ khí quyển cho observer bề mặt Trái Đất. `AIRLESS` không biến tọa độ biểu kiến thành tọa độ hình học không hiệu chỉnh. Vì thế phải đọc ý nghĩa đại lượng và header, không suy từ tên tùy chọn. [Horizons API — Ephemeris-specific parameters](https://ssd-api.jpl.nasa.gov/doc/horizons.html).

## 3. Ephemeris không thay cho địa hình

Ephemeris giúp biết hình học thiên thể theo thời gian; **DEM** mô tả cao độ bề mặt. NASA dùng riêng dữ liệu ephemeris và DEM LOLA khi minh họa chiếu sáng cực Nam: địa hình cùng góc Mặt Trời thấp tạo ra vùng sáng và bóng phức tạp. [NASA SVS 4930 — mô tả và Datasets used](https://svs.gsfc.nasa.gov/4930/).

**Diễn giải mô hình:** ở đây chân trời lý tưởng là mặt phẳng vuông góc thiên đỉnh địa phương; chân trời địa hình còn xét vật cản theo từng hướng. Tưởng tượng đứng trong một hố: Mặt Trời có thể đã ở trên mốc lý tưởng nhưng vẫn bị mép hố che. Đây chỉ là ví dụ khái niệm. Nếu sản phẩm muốn kết luận về che khuất, cần dữ liệu và mô hình địa hình tương ứng; biểu đồ góc cao đơn thuần chưa trả lời được câu hỏi đó.

**Pixel nhỏ không có nghĩa sai số nhỏ bằng pixel.** PGDA 78 cho biết các ô địa hình có nội suy; bất định chịu ảnh hưởng của phân bố phép đo và địa hình, và sai số cao độ có thể ảnh hưởng kết quả chiếu sáng. “5 m/pixel” mô tả bước lưới theo phương ngang. Không diễn giải nó thành “mọi cao độ đúng trong 5 m”. [NASA PGDA 78 — mô tả sản phẩm và nghiên cứu](https://pgda.gsfc.nasa.gov/products/78).

Trong riêng bộ LOLA này, `*_surf.tif` chứa cao độ có nội suy; `*_ldec.tif` cho số phép đo trong ô; `*_toterr.tif` và `*_slperr.tif` mô tả bất định RMS của cao độ và độ dốc. README còn ghi phép chiếu, đơn vị, tâm pixel và hệ MOON_ME của DE421. Đây là thông tin để đánh giá dữ liệu, không phải bằng chứng rằng nhóm đã tải/kiểm các raster. [README LOLA 5 m/pixel](https://pgda.gsfc.nasa.gov/data/LOLA_5mpp/README).

**Hệ trục gắn với DE421 và phiên bản ephemeris là hai việc cần ghi riêng.** Nhìn thấy cùng chuỗi “DE421” trong tài liệu không đủ chứng minh mọi trường dữ liệu đã tương thích. Khi triển khai, phải kiểm label/header thực tế, mốc cao độ, vùng phủ và cách biểu diễn điểm quan sát trước khi ghép.

## 4. Ánh sáng, điện và liên lạc là các mức kết luận khác nhau

**Có ánh sáng chưa chứng minh đủ điện.** Pin mặt trời chuyển năng lượng ánh sáng thành điện; đầu ra phụ thuộc góc chiếu, đặc tính pin, nhiệt độ và suy giảm trong vận hành. NASA cũng phân biệt công suất thử nghiệm với điều kiện vận hành. [NASA, Power Subsystems — §3.2.1 Solar Cells, §3.2.2 Solar Panels & Arrays](https://www.nasa.gov/smallsat-institute/sst-soa/power-subsystems/).

Suy luận cho việc đọc kết quả: để đánh giá đủ điện còn phải biết tấm pin/hướng đặt, tổn hao, tải tiêu thụ và lưu trữ năng lượng. Ví dụ giả định: hai thiết bị cùng được chiếu sáng có thể có khả năng hoạt động khác vì tải khác nhau. Một chỉ số hình học chiếu sáng chưa cho phép kết luận “đủ điện”, “hoạt động liên tục” hoặc “an toàn”. Nguồn trên trình bày nguyên lý hệ thống tàu vũ trụ, chưa xác nhận hiệu năng của thiết kế Mặt Trăng nào của nhóm.

**Nhìn thấy Trái Đất chưa chứng minh liên lạc được.** Thiết kế liên lạc còn xét trạm mặt đất, antenna, công suất phát, tốc độ dữ liệu, điều chế/mã hóa, hướng antenna và điều kiện đường truyền. [NASA, Communications — §9.2.4 Design Considerations](https://www.nasa.gov/smallsat-institute/sst-soa/soa-communications/). Link budget cân đối công suất, độ lợi, suy hao và nhiễu xuyên suốt liên kết. [NASA, Ground Data Systems and Mission Operations — §11.3.1 Frequency Selection: Link Budget](https://www.nasa.gov/smallsat-institute/sst-soa/ground-data-systems-and-mission-operations/).

Suy luận: thấy một phần đĩa Trái Đất chưa chứng minh thấy đúng trạm cần dùng; thấy trạm cũng chưa chứng minh tín hiệu đủ cho tốc độ yêu cầu. Ví dụ giả định: cùng hình học quan sát nhưng antenna đặt sai hướng có thể khiến kết quả liên lạc khác. Không chuyển thông số hay link margin ví dụ của một nhiệm vụ khác thành ngưỡng cho nhóm.

## 5. Kế hoạch kiểm chứng ở mức khái niệm

**Đề xuất cho giai đoạn được phép triển khai**, chưa phải các bài kiểm đã chạy. Trước khi tách việc, người phụ trách tích hợp và dữ liệu cần thống nhất định nghĩa; bảng này không ấn định schema hoặc ngưỡng chấp nhận.

| Bước | Cần chuẩn bị hoặc đối chiếu | Bằng chứng và giới hạn |
| --- | --- | --- |
| 1. Chốt câu hỏi | Đại lượng nào, observer/target nào, địa điểm/thời gian nào; có xét địa hình không? | Mô tả bằng lời đủ rõ để người khác kiểm cùng câu hỏi. Tách hình học, chiếu sáng, điện và liên lạc. |
| 2. Giữ nguồn và metadata | ID/version/URL, ngày lấy, request/header/label và checksum; frame, mốc cao độ, đơn vị, thang thời gian; miền phủ, bước thời gian, NoData, nội suy và bất định được cung cấp. | Truy lại được dữ liệu gốc và cách xử lý. Metadata chưa rõ phải ghi chưa rõ; không tự điền sai số. |
| 3. Đối chiếu phù hợp | So các mẫu có cùng định nghĩa, thời gian, vị trí và hiệu chỉnh. Kiểm truyền/đọc dữ liệu riêng với kiểm mô hình; dùng nguồn hoặc cách triển khai độc lập khi phù hợp. | Web và API của cùng Horizons có thể kiểm cách truy vấn/đọc nhưng không tạo mô hình độc lập. Hai công cụ dùng cùng kernel vẫn có thể chia sẻ sai số; ghi mức độc lập thực tế. |
| 4. Kiểm độ nhạy và trường hợp biên | Khi có mô hình: khảo sát ảnh hưởng bước thời gian, dữ liệu thiếu/vùng biên, nội suy, cao độ observer và trường hợp gần đường chân trời. | Lấy mẫu thưa có thể bỏ qua biến đổi giữa hai mẫu; phép so tại vài điểm chưa xác nhận cả miền. Chưa đặt bước lấy mẫu hoặc dung sai. |
| 5. Ghi kết luận đúng mức | Lưu các ca đã kiểm, khác biệt còn lại, phạm vi áp dụng và phiên bản phương pháp; kiểm frontend giữ đúng đơn vị/nhãn nguồn/trạng thái thiếu. | Hiển thị thành công khác kiểm khoa học thành công. Không biến NoData thành 0; không suy ra điểm đáp tốt nhất, độ an toàn, đủ điện hoặc chất lượng liên lạc từ chỉ số chưa hỗ trợ. |

**Hiện đã có:** giải thích khái niệm, ví dụ giả định, nguồn và kế hoạch kiểm để thảo luận. **Chưa có:** mô hình toán được chọn, thuật toán, dữ liệu xử lý hoặc kết quả kiểm định. Đọc nguồn và review tài liệu không thay cho những việc này. AI hỗ trợ tổng hợp, rà khẳng định và đối chiếu nguồn; nhóm cần ghi đóng góp AI trong hồ sơ khi sử dụng tài liệu.

Bước tiếp theo trong 2 phút: mỗi người chọn một câu ở mục 4 và giải thích vì sao dữ liệu hình học chưa đủ để kết luận về điện hoặc liên lạc.
