# Chuẩn bị bảo mật và tự chọn công cụ

Ngày 12/11/2026. **Đã kiểm repo chuẩn bị, chưa kiểm ứng dụng Lunar hoàn chỉnh.** AI chọn công cụ theo tác vụ, không cần người dùng gọi tên. Chưa bật CI, bot, Git hook hay quét nền.

## Kết quả đã kiểm

| Kiểm tra | Kết quả | Giới hạn |
| --- | --- | --- |
| Codex Security Standard | Hoàn tất tại `91b3644769a44679976863d80af15162bdc9200d`: reviewer đọc đủ 27 tệp văn bản, reviewer kiến trúc độc lập, Codex kiểm lại luồng chính. Không có lỗ hổng đủ bằng chứng để báo cáo. | Rà mã tĩnh; loại nội dung nhị phân PNG và `.DS_Store`. Không kiểm implementation dependency, dịch vụ ngoài, app chạy thật hoặc pentest. |
| Gitleaks 8.30.1 | Cây hiện tại và 31 commit thuộc các ref có sẵn không có match secret. Bắt đúng mẫu secret giả; mẫu sạch không bị báo. | Rules không tìm được mọi secret; không thử credential, không bao phủ lịch sử chưa tải hoặc mọi dữ liệu mã hóa/nhị phân. |
| OSV-Scanner 2.7.1 + npm audit | Lockfile bài luyện có 193 package; cả hai trả 0 lỗ hổng tại thời điểm kiểm. | Advisory có thể thiếu; hai nguồn không hoàn toàn độc lập. Không phải chứng minh dependency an toàn. |
| Kiểm OSV độc lập | Lockfile giả `lodash@4.17.11`: exit 1, 6 advisory, có `GHSA-jf85-cpcp-j695`; không cài/chạy package. | Kiểm đường đọc lockfile/tra advisory, chưa đo toàn bộ độ chính xác hoặc exploitability. |
| Cài đặt | Hai binary ARM64 khớp SHA-256 release chính thức, version chạy đúng; license giữ cạnh binary. Tổng tệp cài ban đầu 77.115.426 byte, chưa tính tài liệu bổ sung. | Hash xác minh artifact đã chọn, không chứng minh binary vô hại. SkillGuard rà văn bản/hướng dẫn, không phân tích mã máy. |

Server luyện cố định `127.0.0.1`, trả fixture và render bằng `textContent`; không có tài khoản, DB hay dữ liệu nhạy cảm. Loopback không phải xác thực/sandbox. Không public server luyện hoặc đặt secret trong thư mục được phục vụ. Backend/API/hosting của sơ đồ vẫn là đề xuất.

Báo cáo đã seal và chứng cứ gốc ở kho artifact Codex Security ngoài repo, scan `b4d81dac-93da-4085-9c59-270caa72d172`. Không phát hành nguyên văn chat/log tài khoản. Tài khoản chưa có Daybreak nên một số kết quả thuộc diện bảo vệ có thể không hiển thị. Preflight cho phép tiếp tục; chưa xác định năng lực sáu worker, phiên tuân thủ giới hạn bốn agent kể cả root. Không sửa quyền/config để vượt kiểm tra.

## Các lựa chọn đã đối chiếu

| Công cụ | Quyết định | Nguồn và lưu ý |
| --- | --- | --- |
| Gitleaks | **Đã cài 8.30.1**; secret files/Git. | [Release](https://github.com/gitleaks/gitleaks/releases/tag/v8.30.1), [MIT/README](https://github.com/gitleaks/gitleaks). Upstream chỉ tiếp tục vá bảo mật. CLI khác Gitleaks Action. |
| OSV-Scanner | **Đã cài 2.7.1**; dependency đa hệ. | [Release/Apache-2.0](https://github.com/google/osv-scanner/releases/tag/v2.7.1), [offline](https://google.github.io/osv-scanner/usage/offline-mode/). Online gửi metadata package; offline cần DB đã chuẩn bị. |
| npm audit | Dùng npm đã có. | [Tài liệu](https://docs.npmjs.com/cli/v11/commands/npm-audit/). Gửi metadata tới registry; không tự `fix --force`. |
| actionlint | Thêm khi có Actions YAML. | [MIT; workflow/script injection](https://github.com/rhysd/actionlint). Repo hiện chưa có workflow. |
| Semgrep CE | Khi có mã app cần SAST bổ sung. | [Giới hạn CE](https://docs.semgrep.dev/semgrep-ce-languages), [metrics](https://docs.semgrep.dev/metrics), [license rules](https://semgrep.dev/legal/rules-license/). Engine LGPL-2.1; rules có license riêng, không đưa bộ rules hạn chế phân phối vào ZIP public. |
| Trivy | Khi có container/IaC hoặc gap phù hợp. | [Apache-2.0](https://github.com/aquasecurity/trivy), [air-gap](https://trivy.dev/docs/latest/advanced/air-gap/). DB/checks cần mạng/dung lượng; `--offline-scan` không tắt mọi đường mạng. |
| ZAP | Khi có local/staging app và mục tiêu quét được phép. | [Download](https://www.zaproxy.org/download/), [baseline](https://www.zaproxy.org/docs/docker/baseline-scan/). Baseline vẫn spider/gửi HTTP, không phải đọc repo offline. Chưa cài Java/Docker/ZAP. |
| Dependabot / CodeQL | Xem xét ở repo triển khai khi có phạm vi/owner. | [Dependabot](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts), [CodeQL](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning). Cần quyền/cấu hình GitHub; lượt này chưa bật hoặc xác minh theo dõi liên tục. |
| Betterleaks | Chưa cài vì trùng Gitleaks. | [1.10.0](https://github.com/betterleaks/betterleaks/releases/tag/v1.10.0), [README pin](https://github.com/betterleaks/betterleaks/blob/v1.10.0/README.md). Có HTTP credential validation; không bật. Chưa có phép so để kết luận chính xác hơn. |

Codex Security và Agent SkillGuard đã có trước lượt này và đã được dùng. Tìm danh mục plugin không xác định thêm integration phù hợp; kết quả tìm không phải danh sách đầy đủ. Hai CLI đã chọn không cần thêm tài khoản/dịch vụ trả phí.

## Khi nào AI tự dùng

1. **Trước commit/push/release:** xem diff/tệp mới, quét secret với redaction. Lần audit đầu quét lịch sử Git có sẵn. Đọc config/ignore trước khi tin kết quả; không thêm ngoại lệ rộng.
2. **Khi đổi dependency/lockfile hoặc trước release:** OSV trên lockfile cụ thể; npm audit nếu dùng npm. Không chạy install script/call analysis chỉ để kiểm. Lỗi mạng là chưa kiểm được, không phải kết quả sạch; không gửi metadata package riêng nếu chưa có quyền.
3. **Khi sửa auth/API/đầu vào/render/tệp/dịch vụ:** rà trust boundary theo mã thật; Codex Security full scan cho repo, diff scan cho thay đổi. Kiểm quyền phía server, secret, URL outbound, giới hạn tải và lỗi theo tính năng thực tế.
4. **Trước thêm skill/plugin:** SkillGuard và review nguồn/quyền. Trước deploy: chọn kiểm HTTPS, header, secret, CORS/CSRF và DAST phù hợp; không coi sơ đồ là kiểm chứng cấu hình.
5. **Sau sửa lỗi:** kiểm lỗi gốc và hành vi bị ảnh hưởng; ghi scope/commit/tool version và phần chưa kiểm. Không biến không tìm thấy lỗi thành chứng nhận an toàn.

Mac đọc `/Users/nns/.codex/workflows/security-tools/LOCAL_USE.md` để lấy lệnh/pin thật; `INSTALLATION.json` giữ hash/URL. Cloud/máy khác phải kiểm availability trước; tài liệu đồng bộ không tự cài runtime. Không có bảo đảm mọi AI luôn chọn đúng tool.

**Bước tiếp dưới hai phút:** khi chốt repo triển khai, ghi URL và owner vào handoff để áp dụng trên đúng mã; nhóm có thể đọc kết quả hiện tại ngay.
