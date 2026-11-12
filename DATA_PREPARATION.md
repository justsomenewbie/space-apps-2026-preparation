# Chuẩn bị dữ liệu và nguồn tái sử dụng — Lunar

**Đặc tả đề xuất Moon Plan B ngày 12/11:** [kế hoạch mục 3–4](KE_HOACH_NHOM.md) chọn tọa độ Odysseus từ NASA LRO và Athena từ NASA PDS, cao độ mô hình 0 km, Horizons Sun/Earth center, 14/11–14/12/2026 UTC, lưới 15 phút, cửa sổ 72 giờ và tiêu chí bài tập 3/6/12 giờ. Đây là lựa chọn cụ thể để nhóm duyệt, thay các trường chưa chọn trong phiếu đọc bên dưới; chưa tạo request chạy, dataset hoặc kết quả khoa học. Terrain/PGDA không nằm trên đường giao bản thi này. Nguồn mới: [PDS Athena 1.0](https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.clps_to_prime1_athena&version=1.0), đã đọc 12/11.

Cập nhật 12/11/2026, giờ Hà Nội. **Đã kiểm luật 2026 và chọn nguồn/phần tái sử dụng ở mục 3. Chưa tạo dataset hay mã bài nộp.** Đây là đề xuất kỹ thuật theo yêu cầu của Sơn; chưa thay quyết định stack/phạm vi của nhóm.

Căn cứ: `NASAChallenge202611.pptx` ở chat “Review NASA project and install frontend…”, nhất là slide 9–11, 25–26; cùng mục 5–8 của `BOI_CANH_AI.md` bản 10/11. Đã đối chiếu file gốc và đọc lại ảnh năm slide liên quan. Slide khuyên dùng ephemerides, DEM, địa điểm có nguồn và kết quả tái lập; chữ “bắt buộc” trong slide chưa được xác nhận là luật thi. [Thông báo Space Apps 2026](https://www.spaceappschallenge.org/blog/explore-the-next-frontier-at-the-2026-nasa-space-apps-challenge/) xác nhận dùng dữ liệu mở NASA/đối tác. Trang đề gốc và trang Hà Nội vẫn lỗi trong lần kiểm tra này; giữ giới hạn chuẩn bị của RUNBOOK.

Đọc [cơ sở lý thuyết tiếng Việt](docs/architecture-proposal/THEORY_PRIMER.md) để phân biệt hình học quan sát, địa hình, chiếu sáng, điện và liên lạc; có ví dụ giả định và kế hoạch kiểm. Tài liệu không chọn mô hình hay xác nhận độ chính xác khoa học.

**Rà tài nguyên 12/11:** [bằng chứng và hàng đợi](docs/resource-review-2026-11-12.md) cập nhật Atlas/NavLunar, SVS 5228/4944 và metadata PGDA/PDS. Đã phát hiện vĩ độ không nhất quán trong một Earth label; chưa kết luận raster sai. Có việc đọc catalog tiếp tục độc lập, không cần đợi nhóm chốt.

## 1. Năm nhóm dữ liệu cần chuẩn bị

| Nhóm | Nguồn và cách lấy khi được triển khai | Dùng cho việc gì; giới hạn cần giữ |
| --- | --- | --- |
| **Vị trí Mặt Trời và Trái Đất theo thời gian** | [Horizons tutorial](https://ssd.jpl.nasa.gov/horizons/tutorial.html), [manual](https://ssd.jpl.nasa.gov/horizons/manual.html), [API](https://ssd-api.jpl.nasa.gov/doc/horizons.html). Xuất bảng observer cho vị trí/ngày đã chốt; giữ nguyên header và kết quả gốc. | Nguồn ứng viên cho góc phương vị/góc cao. Đây là ephemerides tính từ mô hình; góc cao trên mặt phẳng tiếp tuyến chưa xét núi che khuất. |
| **Địa hình và sai số** | Ưu tiên đọc [PGDA 78](https://pgda.gsfc.nasa.gov/products/78) và [README sản phẩm](https://pgda.gsfc.nasa.gov/data/LOLA_5mpp/README) nếu vùng chọn có phủ. [PGDA 90](https://pgda.gsfc.nasa.gov/products/90) cho vùng rộng hơn. | GeoTIFF địa hình, độ dốc, sai số và số đo. Chỉ chọn sau khi biết vùng cần xét; không dùng ảnh hillshade thay độ cao. |
| **Địa điểm có nguồn** | [NASA CLPS Landing Sites](https://www.nasa.gov/commercial-lunar-payload-services/landing-sites/) là trang tổng quan; [ảnh/vị trí Odysseus do LRO ghi nhận](https://www.nasa.gov/missions/lro/nasas-lro-images-intuitive-machines-odysseus-lander/) là ví dụ nguồn dễ đọc. [NAIF CLPS archive](https://naif.jpl.nasa.gov/pub/naif/pds/pds4/clps/clps_spice/document/spiceds_v003.html) phân biệt vị trí thực tế, dự kiến và tái dựng. | CLPS và vùng ứng viên Artemis là hai danh mục khác nhau. [Thông báo Artemis tháng 10/2024](https://www.nasa.gov/news-release/nasa-provides-update-on-artemis-iii-moon-landing-regions/) là nguồn tên vùng có ngày, không tự cho tọa độ điểm đáp. Chưa chọn điểm cho nhóm; link bản đồ 3D từ trang CLPS hiện trả 404. |
| **Chiếu sáng dài hạn để hiểu bối cảnh** | [PGDA 69](https://pgda.gsfc.nasa.gov/products/69): sản phẩm IMG/label, JP2 và các liên kết GeoTIFF. | Nhiều lớp là trung bình theo giờ trên khoảng 18,6 năm; không thay chuỗi thời gian cho ngày chọn. Thấy một phần đĩa Trái Đất chưa chứng minh đường truyền tới một trạm cụ thể. |
| **Ảnh và công cụ tra cứu** | [Moon Trek](https://trek.nasa.gov/moon/jpl/config/textAbout.html), [LROC QuickMap](https://quickmap.lroc.asu.edu/), [NASA SVS](https://svs.gsfc.nasa.gov/5228/). Lần theo metadata tới sản phẩm gốc. | Tra địa hình, hiểu cách trình bày và tìm nguồn. Moon Trek/QuickMap đã có quan sát điều khiển giới hạn ngày 12/11, chưa gửi phép tính. SVS được rà metadata/credits 12/11, chưa dùng làm bảng đo hoặc chọn asset. Xem bản rà tài nguyên. |

**Chi tiết DEM đã đọc:** PGDA 78 có raster 5 m/pixel, hệ MOON_ME/DE421, chiếu cực nam, X/Y theo mét tại tâm pixel. `*_surf.tif` là độ cao mét; `*_slp.tif` là độ dốc độ; `*_toterr.tif`, `*_slperr.tif`, `*_ldec.tif` cung cấp sai số/số đo. Point cloud `.xyzi` lại dùng km. Pixel nội suy và khoảng cách lưới không đồng nghĩa độ chính xác. Giữ metadata đi kèm; chưa kiểm header raster thực tế hay mốc cao độ để ghép với Horizons. [README](https://pgda.gsfc.nasa.gov/data/LOLA_5mpp/README)

**Giới hạn dung lượng:** PGDA 90 liệt kê DEM 20 m vùng 80–90°S là `2.6G`, bản độ dốc `3.6G`, DEM 80 m là `181M`; đây là số trên trang, chưa đo tải thật. COG cho phép hướng tới đọc vùng nhỏ bằng công cụ phù hợp, nhưng đường tải từng vùng chưa được thử. Không tải cả cực nam chỉ để chuẩn bị. [Danh mục PGDA 90](https://pgda.gsfc.nasa.gov/products/90)

**Chốt nguồn:** chọn Horizons cho ephemerides; PDS/LOLA cho địa hình khi phạm vi cần; nguồn NASA/LROC cho vị trí; Moon Trek để tìm metadata/đối chiếu. PGDA 69 chỉ dùng làm bối cảnh dài hạn. Chưa cần Astroquery hay thư viện mới để xuất vài bảng nhỏ.

**SPICE để dự phòng:** [NAIF Generic Kernels](https://naif.jpl.nasa.gov/naif/data_generic.html) cung cấp SPK, PCK, LSK và FK; cần người hiểu cách phối hợp phiên bản/hệ trục. [NAIF Rules](https://naif.jpl.nasa.gov/naif/rules.html) cho tải/dùng kernel, cho phân phối lại kernel không sửa; kernel sửa có yêu cầu metadata/ghi công riêng. Mirror nguyên SPICE Toolkit cần chấp thuận bằng văn bản, còn đóng gói module trong công cụ SPICE tự xây có quy định cho phép riêng. Không gọi chung SPICE là MIT/public domain. Chưa chọn bộ kernel, cài SpiceyPy hoặc tải toolkit.

**Ảnh minh họa:** [NASA media guidance](https://www.nasa.gov/nasa-brand-center/images-and-media/) cho dùng nội dung NASA cho giáo dục/thông tin theo điều kiện ghi công; tài sản bên thứ ba và logo có quy định riêng. Chọn đúng asset/credit rồi mới dùng, không coi toàn bộ ảnh trong repo hoặc slide là được phép sao chép. NASA SVS là đầu mối tìm ảnh, chưa chọn tài sản cho bài nộp.

## 2. Cách lấy và kiểm dữ liệu đã chuẩn bị

Đây là phiếu đọc tài liệu, chưa phải request chạy hoặc hợp đồng frontend. [Horizons API 1.3](https://ssd-api.jpl.nasa.gov/doc/horizons.html) mô tả các trường sau:

| Mục cần chốt | Thiết lập ứng viên / điều phải kiểm |
| --- | --- |
| Target và observer | Mặt Trời `10`, Trái Đất `399`, observer bề mặt Mặt Trăng `coord@301`; hai target là hai truy vấn. |
| Vị trí | `COORD_TYPE=GEODETIC`; `SITE_COORD` gồm kinh độ, vĩ độ, cao độ. Tọa độ cụ thể chưa điền. |
| Loại kết quả | `EPHEM_TYPE=OBSERVER`, `QUANTITIES=4`, `APPARENT=AIRLESS`; đọc ý nghĩa azimuth/elevation trong header. |
| Thời gian | Start/stop/step phải do nhóm chọn; `TIME_TYPE=UT`, `TIME_ZONE=+00:00` là ứng viên để trao đổi nhất quán. |
| Bản lưu | Giữ request, ngày lấy, header, raw response, phiên bản và checksum. JSON API chứa bảng trong `result`, không phải sẵn các hàng số JSON; kiểm `error` và `signature.version`. |

**Làm rõ ngày 12/11:** `AIRLESS` không biến tọa độ biểu kiến thành tọa độ hình học không hiệu chỉnh. `APPARENT` chọn hiệu chỉnh khúc xạ khí quyển cho observer bề mặt Trái Đất; mục số 4 vẫn là azimuth/elevation biểu kiến. Đọc ý nghĩa đại lượng và header, không suy từ tên tùy chọn. [Horizons API](https://ssd-api.jpl.nasa.gov/doc/horizons.html), [manual](https://ssd.jpl.nasa.gov/horizons/manual.html#apparent-azimuth--elevation-az-el-).

Với tọa độ bề mặt Mặt Trăng, manual dùng kinh Đông dương, vĩ Bắc dương, cao độ **km trên ellipsoid tham chiếu**, hệ mean-Earth DE421; không trộn với principal-axis. Góc azimuth/elevation theo độ; với ngày hiện đại UT của Horizons là UTC. Hệ trục vị trí và phiên bản ephemeris động lực học là hai thông tin khác nhau. Đọc header thực tế trước khi đổi đơn vị hoặc ghép DEM. [Horizons manual](https://ssd.jpl.nasa.gov/horizons/manual.html)

[Chính sách SSD API](https://ssd-api.jpl.nasa.gov/doc/index.php) yêu cầu truy vấn tuần tự, tái sử dụng kết quả khi hợp lý, lùi nhịp khi lỗi, User-Agent nhận diện ứng dụng/phiên bản/liên hệ và kiểm phiên bản API; không nhúng API vào website. **Khuyến nghị:** sau giờ được phép, lấy một bản nhỏ có nguồn rồi cho app dùng bản lưu. Chưa hứa API luôn hoạt động hoặc app tự chạy offline. Reviewer đọc được chính sách trong lượt này; lần mở lại của người tổng hợp bị timeout.

Theo [PDS Geosciences FAQ](https://pds-geosciences.wustl.edu/faq.html), dữ liệu lưu trữ PDS thuộc public domain và cần dẫn nguồn thích hợp. Với mỗi sản phẩm dùng thật, ghi ID/version, URL/DOI, thời điểm lấy, label, checksum và cách xử lý. Không mở rộng kết luận này sang mọi repo, ảnh hay dịch vụ được NASA dẫn link.

## 3. Luật 2026 và phần đã chọn để tận dụng

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

Hai LICENSE được đọc qua GitHub connector. Liên kết cố định: [CLPS LICENSE](https://github.com/EmanuelAbasto/CLPS-Lunar-Mission-Browser/blob/7f2cd2756c3667abe2bc4ee78f8eb2a179956b57/LICENSE), [PolarWindow LICENSE](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/LICENSE). Giấy phép repo không tự bao trùm ảnh/dữ liệu bên thứ ba, dependency hay logo. Khi thực sự dùng, ghi tác giả/repo, commit/file, license, phần sửa, phần nhóm làm và kết quả kiểm vào hồ sơ; hiện chưa có thành phần được tích hợp để khai là đã sử dụng.

**Kiểm cần làm trong giờ thi:** với `build_windows()`, xác nhận thời gian tăng nghiêm ngặt, cùng quy ước múi giờ, `range_end` sau mẫu cuối và độ dài khớp; kiểm rỗng, một mẫu, đổi trạng thái, cửa sổ chạm biên. Hàm chưa tự kiểm hết đầu vào đó. `rankLabel()` chỉ diễn đạt backend: nếu dùng phải kiểm cờ đồng hạng/giới hạn/sai số và bản dịch, không coi đây là thuật toán xếp hạng đã kiểm định.

**Loại khỏi phần định mượn:** [useProvenance.ts](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/frontend/src/lib/useProvenance.ts) gán nhãn `measured` từ trạng thái tải kernel/DEM, chưa chứng minh kết quả là số đo. Mục *Candidate sites* của [data-sources.md](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/docs/data-sources.md) chọn điểm theo thuật toán quanh mốc LPI, gồm nhóm cao độ cao nhất và ngưỡng dốc 12°: đó là lựa chọn riêng, không phải tiêu chuẩn an toàn NASA. Không lấy catalog này hoặc [test_synthetic_golden.py](https://github.com/MdAhbab/PolarWindow/blob/84075e5f36f49ccf22b7100ae3f68a4ac02e62d1/backend/app/tests/golden/test_synthetic_golden.py) làm dữ liệu đo. Không suy rằng toàn bộ app dùng số giả.

## 4. Thứ tự làm khi nhóm chốt và được phép triển khai

1. **Chọn một trường hợp có nguồn:** địa điểm, khoảng thời gian, định nghĩa visibility và mô hình chân trời; người kiểm đọc lại tọa độ/đơn vị. Điền cùng người cung cấp vào [FRONTEND_HANDOFF](FRONTEND_HANDOFF.md), không lấy catalog mẫu làm dữ liệu thật.
2. **Lấy đúng phần dữ liệu cần:** giữ bản gốc và cấu hình; chỉ lấy vùng DEM tương ứng nếu phạm vi đòi hỏi. Kiểm dung lượng trước tải. Không sửa đè file nguồn.
3. **Kiểm số trước giao diện:** thời gian tăng, đủ/thiếu hàng, đơn vị và frame, giá trị lỗi/NoData, đầu–giữa–cuối. Đối chiếu web/API cùng Horizons kiểm đường lấy dữ liệu, chưa phải mô hình khoa học độc lập.
4. **Chọn tối đa một phần mã mượn trước:** pin commit, giữ license, đọc callers/tests và kiểm ca biên trên phần đã chọn. Với cửa sổ thời gian: ngưỡng, mẫu thưa, cửa sổ chạm mép khoảng khảo sát và dữ liệu thiếu phải rõ. Không coi hai công cụ chung dữ liệu nền là hai chứng minh độc lập.
5. **Bàn giao có thể mở lại:** nguồn/phiên bản, giả định, người kiểm, file thật và bước tái tạo; phân biệt dữ liệu đo, ephemerides tính, nội suy và dữ liệu minh họa. Góc nhìn, độ dốc và mô hình bóng địa hình riêng lẻ vẫn chưa chứng minh đủ điện, bảo đảm liên lạc hay đáp an toàn. Ghi phần AI hỗ trợ và phần mượn trong hồ sơ.

## 5. Trạng thái để tiếp tục

| Hạng mục | Trạng thái 11/11 |
| --- | --- |
| Nguồn dữ liệu, đường lấy, giới hạn và quyền dùng | Chọn Horizons/PDS-LOLA/NASA-LROC; Moon Trek tra cứu, SPICE dự phòng. Đã đọc thêm NAIF Rules/NASA media guidance; chưa thử toàn bộ đường tải hoặc chọn asset. |
| Slide và file bối cảnh AI | Slide giữ nguyên. Theo yêu cầu tiếp theo ngày 11/11, đã cập nhật BOI_CANH_AI.md trên Drive với nguồn/license/lựa chọn; folder 02 và file mở ai có link xem, giữ năm quyền sửa riêng. Đã thử không đăng nhập và so khớp bytes. |
| Dataset khoa học / xử lý / pipeline | Chưa có; không tải DEM, kernel hay bộ dữ liệu repo; không tạo dữ liệu nộp trước giờ cho phép. |
| Code tái sử dụng / app bên ngoài | Luật 2026 và lựa chọn mục 3 đã kiểm. Chọn helper CLPS làm ứng viên, cách ghi nguồn PolarWindow; chưa sao chép, chạy hay xác minh khoa học. |
| Quyết định nhóm cần điền | Địa điểm, thời gian, baseline/địa hình, người lấy/người kiểm và stack vẫn chưa được xác nhận trong lượt này. |

Hash bản gốc trước cập nhật AI-context: PPTX SHA-256 `873e78597191b6f7c8bb0aae9dc3679fa63c8c9d9cc7a1a4f51f8008453244e2`; BOI_CANH_AI SHA-256 `ac4efb4d8f3d03c97a414980da22f55b7cd979627ef76db0fcf7f3a7415a1a8c`. Dùng Codex App để tìm đúng chat, Context Mode để tra tài liệu, web NASA/JPL/PDS và GitHub connector để kiểm nguồn. Không sửa Drive/Sheet, gửi tin, cài dependency, clone repo hay công bố tài liệu.

Lượt chuẩn bị trước đã kiểm hash hai nguồn gốc và RUNBOOK/PLUGIN_ROUTING không đổi, liên kết nội bộ và `git diff --check`; hai reviewer đọc nguồn khoa học/tái sử dụng. Lượt kiểm luật tiếp theo ngày 11/11 cập nhật cả RUNBOOK, dùng Exa để đọc Terms/FAQ và GitHub để rà lựa chọn. Đây là kiểm tài liệu, chưa phải kiểm pipeline hay chứng nhận kết quả khoa học.

**Việc đọc nguồn tiếp theo:** đối chiếu catalog PDS để giải thích thời gian và vĩ độ bất nhất của hai label đã ghi trong [hàng đợi](docs/resource-review-2026-11-12.md). Việc này độc lập với lựa chọn sản phẩm. Trong 2 phút, mở hàng đầu của bảng để nhận đúng cặp label. Hướng dẫn nộp/chấm 13/11 là mốc cần đối chiếu tiếp, chưa thiết lập nhắc việc tự động.

**Lần chia sẻ AI-context trước đó ngày 11/11, đã được thay thế về trạng thái quyền bởi lượt đồng bộ dưới đây:** đã đưa các lựa chọn vào [BOI_CANH_AI.md trên Drive](https://drive.google.com/file/d/19SMq037jiJ9OnIXdfJWUOdafD3EIALDr/view), giữ ID cũ; [folder 02](https://drive.google.com/drive/folders/1k7bv1WYQFrlkXx6xtKiiCkgYShXW3BBT) và file có anyone/reader, không bật tìm kiếm. Đây là thay đổi sau ghi nhận “không sửa Drive/công bố” phía trên. Không đổi Sheet/quyền root, không tạo mã/dataset. Bản gốc, bản đọc lại, kiểm byte và ảnh mở không đăng nhập ở `../nasa-preparation-deliverables/ai-context-update-2026-11-11/`.

**Lượt đồng bộ toàn bộ tiếp theo ngày 11/11:** cả 10 mục Drive hiện cho người có link xem, giữ năm người sửa riêng; root cũng đã mở xem. Word/PDF/index/AI đã cập nhật tại ID cũ. Repo chuẩn bị đã chuyển public theo yêu cầu. Xem PREPARATION_COVERAGE và HANDOFF để biết bản phát hành, kiểm không đăng nhập và giới hạn cloud. Chỉ tài liệu và bài luyện không liên quan; không dựng sản phẩm hoặc dataset Lunar.
