"""Loopback-only practice fixtures; no external services or submission data."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
from pathlib import Path
import sys
import time
from urllib.parse import parse_qs, urlsplit

ROOT = Path(__file__).resolve().parent


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        url = urlsplit(self.path)
        if url.path != '/api/count':
            return super().do_GET()
        case = parse_qs(url.query).get('case', ['success'])[0]
        if case in ('slow', 'timeout'):
            time.sleep(0.8 if case == 'slow' else 2.2)
        else:
            time.sleep(0.15)
        values = {'success': 7, 'zero': 0, 'empty': None, 'invalid': 'seven',
                  'slow': 3, 'timeout': 4, 'large': 9007199254740991}
        status = 500 if case == 'error' else 200 if case in values else 400
        body = json.dumps({'count': values.get(case)}).encode()
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        try:
            self.wfile.write(body)
        except (BrokenPipeError, ConnectionResetError):
            pass  # Cancellation is an intentional exercise case.

    def log_message(self, format, *args):
        pass


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8768
    server = ThreadingHTTPServer(('127.0.0.1', port), partial(Handler, directory=ROOT))
    print(f'Practice only: http://127.0.0.1:{server.server_port}', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
