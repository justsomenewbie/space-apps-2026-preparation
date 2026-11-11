# Bài luyện async frontend ngoài NASA

Chạy từ gốc repo đã tải về. Cần Python 3 và browser hiện đại có sẵn; Node chỉ cần cho checker. Đây là bài tập không liên quan NASA, không dùng làm thành phần bài nộp:

```sh
python3 practice-tally/server.py 8768
```

Mở [bài luyện cục bộ](http://127.0.0.1:8768). Dừng bằng Ctrl+C. Server chỉ nghe `127.0.0.1`, phục vụ đúng thư mục bài tập. Không có tài khoản, dữ liệu thật, framework, deployment hoặc dịch vụ ngoài. Để chuyển máy, chép nguyên thư mục nhỏ này rồi dùng `python3 server.py 8768`; cần Python 3 và browser hiện đại trên máy đó. Việc chuyển/chạy trên máy đồng đội chưa được xác minh.

1. Chọn Thành công → Tải bộ đếm: đang tải rồi nhận 7. Giá trị 0 phải hiện 0; null phải hiện “Chưa có dữ liệu”, không bị coi là 0.
2. Chọn lỗi máy chủ/sai kiểu/quá thời gian: có thông báo, giữ lựa chọn, hết busy và có Thử lại. Fixture lỗi luôn lỗi; muốn phục hồi thủ công thì đổi sang Thành công. Automated test riêng mô phỏng server phục hồi ở cùng URL để kiểm Retry.
3. Chọn Phản hồi chậm → tải → Đặt lại hoặc Cộng một: phản hồi cũ không được ghi đè. Khi bắt đầu tải mới, bộ đếm nền về 0, nên Cộng một trong lúc tải tạo 1.
4. Dùng Tab/Enter/Space; thu viewport 320 px; tăng chữ: nút vẫn thao tác được, tiếng Việt không bị cắt. Kịch bản số nguyên lớn nhất giữ nguyên giá trị và từ chối cộng quá giới hạn. Selector có mô tả giá trị đầy đủ bên dưới khi nội dung bị rút gọn bởi control native.
5. Ghi tên người thử, OS/browser, lệnh chạy, ca lỗi và ảnh nếu cần. Đây là bài luyện; không tái nhãn các con số/fixture thành dữ liệu NASA.

Kiểm ba ca tăng số bằng Node có sẵn (checker này không kiểm HTTP/async/UI):

```sh
node practice-tally/check.mjs
```

Bằng chứng lịch sử ngày 11/11 trên Mac của Sơn: 12 nhóm kiểm browser và 6 nhóm kiểm độc lập đã được ghi nhận. Script/ảnh/JSON riêng của Mac không nằm trong gói này; không coi đây là bộ browser test có thể chạy lại ngay từ repo. Kiểm cũ dùng fixture HTTP, mô phỏng offline và race; tăng chữ bằng root font-size 200%, chưa kiểm native zoom, VoiceOver hoặc cảm ứng thật. Bước thử thủ công ở trên và kết quả trên máy từng đồng đội vẫn cần làm.

Tham khảo: [MDN fetch/HTTP errors/AbortController](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [W3C reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow). Timeout 1.5 giây và giá trị fixture chỉ phục vụ bài tập; không phải khuyến nghị cấu hình cho sản phẩm thi.
