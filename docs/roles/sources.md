# Nghiên cứu nguồn và khoa học

**Đầu ra của vai:** bảng nguồn có nghĩa, quyền dùng, giới hạn và mẫu kiểm để Backend/QA đối chiếu. [Về 6 vai trò](README.md)

## Đọc theo thứ tự

| Ưu tiên | Nguồn cần mở | Cần rút ra |
|---|---|---|
| 1. Sun/Earth | [Horizons tutorial](https://ssd.jpl.nasa.gov/horizons/tutorial.html), [manual](https://ssd.jpl.nasa.gov/horizons/manual.html), [API](https://ssd-api.jpl.nasa.gov/doc/horizons.html), [chính sách](https://ssd-api.jpl.nasa.gov/doc/index.php) | Target/observer, ý nghĩa góc, tọa độ/cao độ, thời gian/đơn vị, header và cách lưu raw. Đây là nguồn chính đã chọn cho kế hoạch, chưa phải dataset đã kiểm. |
| 2. Vị trí | [CLPS](https://www.nasa.gov/commercial-lunar-payload-services/landing-sites/), [LRO/Odysseus](https://www.nasa.gov/missions/lro/nasas-lro-images-intuitive-machines-odysseus-lander/), [NAIF CLPS](https://naif.jpl.nasa.gov/pub/naif/pds/pds4/clps/clps_spice/document/spiceds_v003.html); [QuickMap](https://quickmap.lroc.asu.edu/), [Moon Trek](https://trek.nasa.gov/moon/) để tra cứu | Lần về nguồn tọa độ/cao độ cụ thể; phân biệt đã đáp, dự kiến, vùng ứng viên. Chưa chọn sẵn điểm hoặc điền cao độ 0 khi thiếu nguồn. |
| 3. Bối cảnh và giải thích | [CSA](https://www.asc-csa.gc.ca/eng/astronomy/moon-exploration/), [lý thuyết của nhóm](../architecture-proposal/THEORY_PRIMER.md), [PGDA 69](https://pgda.gsfc.nasa.gov/products/69) | Phân biệt vị trí Sun/Earth, che khuất, điện và liên lạc; bản đồ trung bình dài hạn không thay timeline ngày cụ thể. |
| 4. Terrain khi thật sự cần | [PDS LOLA](https://pds-geosciences.wustl.edu/missions/lro/lola.htm), [PGDA 78](https://pgda.gsfc.nasa.gov/products/78), [README](https://pgda.gsfc.nasa.gov/data/LOLA_5mpp/README), [PGDA 90](https://pgda.gsfc.nasa.gov/products/90) | Miền phủ, frame/CRS, mốc cao độ, NoData, độ phân giải và sai số. Đọc catalog trước; không tải cả kho. |
| 5. Ảnh/code/quyền tham khảo | [Bảng nguồn và code đã rà](../../DATA_PREPARATION.md), [SVS và app tham khảo](../resource-review-2026-11-12.md), [quyền media/code/AI](../media-rights-2026-11-13.md) | Chọn đúng item/version/license, giữ credit; ứng viên chưa phải asset hoặc thư viện đã được duyệt. |

Bốn đầu mối trong Resources của [đề Lunar](https://www.spaceappschallenge.org/2026/challenges/lunar-landing-site-navigator/) là Horizons, QuickMap, Moon Trek và CSA. Không chờ gói BTC riêng chưa xác nhận. Chỉ dùng SPICE bổ sung nếu có nhu cầu mà nguồn chính không đáp ứng và có người kiểm được; [DATA_PREPARATION](../../DATA_PREPARATION.md) giữ nguồn và điều kiện.

## Chuẩn bị hôm nay

1. Đọc manual và điền ghi chú tài liệu vào phiếu dưới; để trống các ô cần dữ liệu thật. Ghi rõ câu nào là tài liệu nguồn, câu nào là lựa chọn mô hình của nhóm.
2. Ghi danh sách nguồn vị trí có thể dùng, cùng câu hỏi về frame/cao độ/quyền; không tạo catalog tọa độ bài thi trước giờ bắt đầu.
3. Với ảnh/code ứng viên, lưu trang nguồn và điều kiện sử dụng; chưa tạo asset cuối hoặc chép code vào sản phẩm. License phải phù hợp app, demo, trình bày và phân phối repo.
4. Đọc [hướng dẫn chính thức đã đối chiếu](../official-challenge-check-2026-11-13.md). Cần ít nhất một NASA resource thực dùng cho Global Award; chỉ dẫn nguồn đối tác không thay điều kiện này.

## Phiếu kiểm nguồn để điền khi có dữ liệu thật

| Nhóm thông tin | Ô cần điền |
|---|---|
| Danh tính và quyền | Tên/ID/URL/DOI/version, thời điểm lấy, license/credit, phạm vi được phân phối, nguồn NASA thực dùng |
| Vị trí và thời gian | Target/observer, nguồn site, quy ước tọa độ, frame, cao độ/datum/đơn vị, start/stop/time scale/cadence/coverage |
| Đại lượng và mô hình | Ý nghĩa cột, đơn vị, apparent/geometric, chân trời đang dùng, NoData, nội suy/độ phân giải/giới hạn |
| Bằng chứng | Request/raw/header/label/path/hash, ba timestamp mỗi site/target gồm gần chân trời nếu có, expected/actual, reviewer và sai khác |
| Trạng thái | Đã đọc nguồn / đã kiểm dữ liệu phù hợp / đã chọn dùng; ai quyết định, phần còn thiếu và việc tiếp |

Horizons quantity 4 là góc phương vị/góc cao **biểu kiến**; mặt phẳng tham chiếu vuông góc thiên đỉnh địa phương chưa phải đường chân trời địa hình. Tọa độ geodetic dùng cao độ **km trên ellipsoid tham chiếu**; không đổi trực tiếp DEM mét thành cao độ observer khi chưa kiểm datum/frame. Header thực quyết định cách đọc kết quả. [Manual](https://ssd.jpl.nasa.gov/horizons/manual.html), [ghi chú kỹ thuật](../../DATA_PREPARATION.md)

## Giao cho ai và thế nào là đạt

Backend nhận phiếu nguồn, các câu hỏi đã giải quyết và mẫu đối chiếu; giữ raw/request và tạo kết quả có phiên bản. Sources đọc lại raw/header và kiểm nghĩa của phép tính. QA nhận mẫu expected có nguồn để tự chạy lại. Demo nhận nguồn/quyền/giới hạn bằng tiếng Anh, gắn với thứ thật sự có trong release.

**Mục tiêu nhóm ngày 14:** phiếu nguồn 09:30, bảng mẫu kiểm trước 12:00, provenance/license/AI tiếng Anh trước 20:00. Web/API từ cùng Horizons khớp nhau chỉ kiểm tích hợp, không chứng minh một mô hình độc lập. Nếu nguồn không đủ cho kết luận, ghi “chưa xác định” và báo Backend thu miền hoặc tìm nguồn tương thích; không tự bịa giá trị hay gọi kết quả “điểm đáp an toàn”. [Nghiệm thu §9](../../KE_HOACH_NHOM.md)

**Việc tiếp trong 2 phút:** mở Horizons manual và ghi một trường metadata cần Backend giữ nguyên.
