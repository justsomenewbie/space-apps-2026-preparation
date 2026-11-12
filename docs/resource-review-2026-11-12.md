# Rà tài nguyên còn thiếu — 12/11/2026

**Lượt chuẩn bị, chỉ đọc nguồn và metadata.** Không chạy app/thuật toán, truy vấn khoa học, tải raster/kernel/video hoặc chọn tài sản bài nộp. Ba nhóm dưới đây được chọn vì còn khoảng trống trong DATA_PREPARATION và danh mục R01–R32; không lặp lại bài giải thích trong [THEORY_PRIMER](architecture-proposal/THEORY_PRIMER.md).

## 1. Ba khoảng trống và kết quả

| Ưu tiên | Khoảng trống đã xử lý | Kết quả đúng mức |
| --- | --- | --- |
| 1 | Atlas/NavLunar: source, phương pháp, quyền tái sử dụng | Đã pin Atlas và kiểm nơi công bố giấy phép; chưa có căn cứ cấp quyền sao chép. NavLunar chưa xác định repo/license chính thức và còn mâu thuẫn mô tả. Đóng bước khảo sát, **chưa đóng quyền tái sử dụng**. |
| 2 | SVS 5228/4944: phạm vi, credits và khả năng đối chiếu số | Đã đọc trang gốc/captions/nguồn liên kết. Đủ phân loại là minh họa có phạm vi; chưa đủ metadata để dùng làm chuẩn số cho site/date tùy ý. |
| 3 | PGDA: metadata, đường lấy và khác biệt giữa sản phẩm | Đã truy tới label PDS nhỏ, ghi scale/đơn vị và phát hiện bất nhất vĩ độ trong label Earth. Đường đọc tài liệu được xác minh; tải raster, hiệu năng COG và tính đúng của raster chưa được thử. |

Đã đối chiếu trước sửa: Git local/remote và Drive manifest cùng `4563fb89b4937888eaf3c956d9f62c94cf734f44`; KE_HOACH_NHOM, BOI R01–R32, DATA_PREPARATION, THEORY_PRIMER và checkpoint chat. Sheet đọc lại hai tab; timestamp vẫn `2026-11-11T15:11:45.403Z`, trạng thái Chưa làm, QA C10/G7 vẫn khác nhau. Đây không phải xác nhận người nhận việc hoặc chốt sản phẩm. R01–R32 là danh mục đã đối chiếu, **không phải 32 nguồn ngoài đều được mở lại trong lượt này**.

## 2. Atlas và NavLunar: tham khảo được gì?

**Atlas — source có thể truy vết.** Pin [sighmon/space tại `67f91d6`](https://github.com/sighmon/space/tree/67f91d64304d6c8ced399d73a77530b9909c70f2), commit ngày 17/10/2026 08:36:40 UTC; [package tự ghi 0.1.0](https://github.com/sighmon/space/blob/67f91d64304d6c8ced399d73a77530b9909c70f2/moon-south-pole-atlas/atlas/__init__.py). Chưa nối được bản website đang deploy với pin này. Cây Git đầy đủ 264 mục không có LICENSE/COPYING/NOTICE; metadata GitHub trả `license: null`. Trong README gốc, README Atlas/web, scope, data-sources và các tệp chọn lọc đã đọc cũng chưa tìm thấy lời cấp phép. Kết luận chỉ là **chưa xác minh được giấy phép áp dụng**, không phải tuyên bố đã đọc mọi dòng mã. Repo public không tự cấp quyền sửa/phân phối mã; xem [GitHub về licensing](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).

[README Atlas](https://github.com/sighmon/space/blob/67f91d64304d6c8ced399d73a77530b9909c70f2/moon-south-pole-atlas/README.md) tách các lớp trung bình dài hạn khỏi timeline một điểm; ghi giới hạn về vùng thiếu DEM và không coi điểm sàng lọc là quy tắc bay. [ephemeris.py](https://github.com/sighmon/space/blob/67f91d64304d6c8ced399d73a77530b9909c70f2/moon-south-pole-atlas/atlas/ephemeris.py) mô tả DE421/MOON_ME, có light-time, không stellar aberration; reviewer đọc thêm [horizon.py](https://github.com/sighmon/space/blob/67f91d64304d6c8ced399d73a77530b9909c70f2/moon-south-pole-atlas/atlas/horizon.py) và [giới hạn web](https://github.com/sighmon/space/blob/67f91d64304d6c8ced399d73a77530b9909c70f2/moon-south-pole-atlas/web/README.md). Đây là bằng chứng tài liệu/mã thể hiện phương pháp, chưa chứng minh kết quả đúng. Các hiệu chỉnh khác nhau là lý do phải đồng nhất định nghĩa trước khi đối chiếu, không phải căn cứ xếp công cụ nào chính xác hơn.

**NavLunar — mô tả còn mâu thuẫn.** [Trang chủ](https://navlunar.com/) mô tả thời gian tuyến đi trong bóng địa hình; [About → Routing](https://navlunar.com/about) vẫn nói daylight dọc tuyến giả định chân trời trơn, không relief. Chưa thử tuyến để phân xử. About nhắc `DATA_SOURCES.md` nhưng không dẫn repo ứng dụng; các link GitHub đã thấy là thư viện phụ thuộc. Tìm repo theo tên không xác định được source chính thức. Chưa pin được build/commit/license; số test và độ chính xác trên About là tác giả tự báo.

**Khuyến nghị sử dụng:** học cách giải thích nguồn/giới hạn và lần về nguồn NASA/JPL/USGS theo quyền riêng. Chưa chọn sao chép mã, UI hay gói dữ liệu hai app; không dùng chúng làm chuẩn khoa học độc lập. Lượt này không liên hệ tác giả.

## 3. SVS: phạm vi cảnh, thời gian và quyền dùng

| Trang chính thức | Metadata đã đọc ngày 12/11 | Chưa xác định trong nội dung đã đọc |
| --- | --- | --- |
| [5228](https://svs.gsfc.nasa.gov/5228/) | Phát hành/cập nhật 23/02/2024; nhìn từ gần cực Nam; sáu tháng nén thành 2,5 phút. | Tọa độ/cao độ observer và ngày bắt đầu–kết thúc mô phỏng. Ngày xuất bản không thay ngày mô phỏng. |
| [4944](https://svs.gsfc.nasa.gov/4944/) | Phát hành 16/10/2021, cập nhật 23/02/2024; camera trên vành Shackleton hướng Trái Đất; ba tháng trong hai phút. | Không tự biến “vành Shackleton” thành một tọa độ. Chưa có mốc thời gian cho từng frame. |

Hai trang ghi DEM LOLA và DE421, đồng thời nói SVS không giữ chi tiết thêm hoặc bộ dữ liệu tại đó. Chưa xác định DEM/version cụ thể hay cấu hình render đầy đủ. Link JPL dẫn đến [Orbits & Ephemerides](https://ssd.jpl.nasa.gov/orbits.html); [tài liệu DE421](https://ssd.jpl.nasa.gov/planets/eph_export.html) giúp hiểu ephemeris, không phục dựng cấu hình SVS.

[Captions 4944, đoạn 00:59–01:03](https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004944/shackleton_earth_CAPTIONS.en_US.srt) nói tác giả đã làm chậm đoạn eclipse. **Suy luận:** thời gian phát bản có thuyết minh không phải đồng hồ mô phỏng đều. Các cảnh dựng sẵn thiếu metadata trên không thay bảng số cho địa điểm/ngày tùy chọn; hình giống nhau cũng chưa là kiểm định độc lập.

Cả hai yêu cầu ghi công **NASA’s Scientific Visualization Studio**, visualizer Ernie Wright. Bản 4944 có thuyết minh ghi nhạc Universal Production Music, “Enduring Faith” của Frederik Wiedmann; trang cũng liệt kê bản không nhạc/thuyết minh. Đây là kiểm kê, **chưa chọn asset**. [NASA media guidance](https://www.nasa.gov/nasa-brand-center/images-and-media/) yêu cầu xem quyền của nội dung bên thứ ba riêng; credit NASA không tự cấp quyền nhạc đó.

## 4. PGDA/PDS: đường đọc metadata và lỗi cần giữ nguyên

**PGDA 69:** [Data Access](https://pgda.gsfc.nasa.gov/products/69) bổ sung TIF/COG ngày 20/03/2025; cảnh báo overview COG dùng trung bình, giá trị khi zoom xa không nhất thiết là ô gốc. Trang yêu cầu đối chiếu scale/offset với label. [Thư mục IMG/label](https://imbrium.mit.edu/EXTRAS/ILLUMINATION/IMG/) cho phép đọc metadata riêng mà không tải raster.

Đã đọc hai label [Solar](https://imbrium.mit.edu/EXTRAS/ILLUMINATION/IMG/AVGVISIB_85S_060M_201608.LBL) và [Earth](https://imbrium.mit.edu/EXTRAS/ILLUMINATION/IMG/AVGVISIB_85S_060M_201608_EARTH.LBL): `PRODUCT_VERSION_ID=V1.05`; int16 little-endian, scale `0.00004`, offset `0`, bước lưới `60 m/pix`; có frame/projection/pixel registration. Đây là thông tin label IMG, **chưa kiểm giá trị TIF và cách phần mềm đọc áp scale/offset**. Không dùng quy ước của sản phẩm này cho mọi raster.

**Phát hiện bất nhất metadata:** label Earth ghi `MINIMUM_LATITUDE=90` cùng `MAXIMUM_LATITUDE=-82.9` và tâm `-90`; label Solar tương ứng ghi minimum `-90`. Giữ nguyên bằng chứng, chưa tự sửa dấu hoặc kết luận raster lỗi. Hai label có START/STOP 2009–2013 nhưng không giải thích đủ để lấy chúng làm khoảng mô phỏng trung bình 18,6 năm. Phải tìm căn cứ về ý nghĩa trường/epoch trước khi dùng định lượng.

**PGDA 78/90 không đồng nhất mọi đơn vị:** [README 78](https://pgda.gsfc.nasa.gov/data/LOLA_5mpp/README) liệt kê các site riêng và XYZI theo km; [trang 90 → Point clouds](https://pgda.gsfc.nasa.gov/products/90) ghi X/Y/Z theo mét. Trang 90 còn phân biệt LDEM, lớp sai số, độ phân giải hiệu dụng và hillshade; tên tệp ghi giới hạn vĩ độ/bước lưới. Không dùng hillshade làm DEM hoặc suy vùng phủ hợp lệ chỉ từ tên site. Các link raster đã thấy trong manifest HTML; không mở raster, chưa kiểm NoData/header hoặc HTTP range/COG thực tế.

## 5. Hàng đợi có điều kiện hoàn tất rõ

| Việc tiếp theo | Tiêu chí hoàn tất | Có thể làm khi nào? |
| --- | --- | --- |
| Đọc catalog/tài liệu PDS cho hai label đã nêu | Truy được nghĩa START/STOP và khoảng trung bình; tìm ghi chú chính thức về vĩ độ bất nhất, hoặc ghi chính xác vẫn chưa giải quyết. Không tự sửa nguồn. | Đọc tài liệu độc lập ngay trong lượt sau; không cần nhóm chốt sản phẩm. |
| Tìm source/license NavLunar và grant Atlas nếu được công bố | Có URL chính thức nối app với repo/build và văn bản cấp quyền áp dụng đúng phần; nếu không có, giữ trạng thái chưa xác minh. | Rà công bố mới khi có; không mặc định được phép outreach hoặc lấy mã. |
| Đọc hướng dẫn nộp/chấm 2026 khi công bố | Phân biệt tài liệu năm 2026 với 2025, ghi các trường nộp, yêu cầu nguồn/AI và thời hạn có căn cứ. | Theo mốc 13/11 đang ghi trong kế hoạch; đây không phải lịch tự động. |

**Hòa giải R13/R14:** quan sát giao diện ngày 12/11 đã mở điều khiển vị trí/ngày/nguồn của Moon Trek và QuickMap; câu “chưa kiểm tương tác” cũ không còn đủ chính xác. Chưa gửi phép tính, chưa hoàn tất luồng site/date→kết quả, chưa thử với người dùng hoặc kiểm khoa học. BOI mục 5 giữ mô tả và bằng chứng có ngày; không nâng mức xác minh.

**Giới hạn truy cập:** PGDA78 timeout qua web reader nhưng HTML/README đọc được bằng HTTP văn bản; label PDS bị web reader từ chối MIME, bản text nhỏ đọc được trực tiếp. NavLunar HTTP trực tiếp gặp 429 nên dừng đường đó, nội dung lấy từ web reader. SVS dataset-index báo lỗi/no results; không suy dữ liệu đã mất. HTML thô SVS không lấy được bằng đường thử của reviewer; hidden metadata chưa được kiểm. Các nguồn ngoài ba nhóm không được báo là đã xác minh lại.
