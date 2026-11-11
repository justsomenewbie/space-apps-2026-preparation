import { increment } from './increment.mjs';

const byId = id => document.getElementById(id);
const scenario = byId('scenario');
let count = 0;
let generation = 0;
let controller;
const REQUEST_TIMEOUT_MS = 1500; // Deliberately short for this local exercise only.

function cancel() {
  generation += 1;
  controller?.abort();
  byId('result').setAttribute('aria-busy', 'false');
}

function clearError() {
  if (document.activeElement === byId('retry')) byId('load').focus();
  byId('retry').hidden = true;
  byId('error').textContent = '';
}

function reset() {
  cancel();
  clearError();
  count = 0;
  byId('count').textContent = '0';
  byId('status').textContent = 'Sẵn sàng.';
}

async function load() {
  cancel();
  clearError();
  const current = generation;
  controller = new AbortController();
  const active = controller;
  let timedOut = false;
  count = 0;
  byId('count').textContent = '—';
  byId('status').textContent = 'Đang tải…';
  byId('result').setAttribute('aria-busy', 'true');
  const timer = setTimeout(() => { timedOut = true; active.abort(); }, REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(`/api/count?case=${encodeURIComponent(scenario.value)}`, {
      signal: active.signal, cache: 'no-store',
    });
    if (!response.ok) throw new Error('http');
    const data = await response.json();
    if (!data || typeof data !== 'object' || !Object.hasOwn(data, 'count') ||
        !(data.count === null || (Number.isSafeInteger(data.count) && data.count >= 0))) {
      throw new Error('shape');
    }
    if (current !== generation) return;
    count = data.count ?? 0;
    byId('count').textContent = data.count === null ? '—' : new Intl.NumberFormat('vi-VN').format(count);
    byId('status').textContent = data.count === null ? 'Chưa có dữ liệu.' : `Đã tải bộ đếm: ${count}.`;
  } catch {
    if (current !== generation) return;
    count = 0;
    byId('status').textContent = '';
    byId('error').textContent = timedOut
      ? 'Đã hết thời gian chờ. Bạn có thể thử lại.'
      : 'Không tải được dữ liệu hợp lệ. Kiểm tra kết nối hoặc thử lại.';
    byId('retry').hidden = false;
  } finally {
    clearTimeout(timer);
    if (current === generation) byId('result').setAttribute('aria-busy', 'false');
  }
}

byId('load').addEventListener('click', load);
byId('retry').addEventListener('click', load);
byId('reset').addEventListener('click', reset);
byId('add').addEventListener('click', () => {
  cancel();
  clearError();
  // Do not render an imprecise integer after the explicit fixture boundary.
  if (count === Number.MAX_SAFE_INTEGER) {
    byId('error').textContent = 'Đã đạt giới hạn số nguyên an toàn của bài tập.';
    byId('status').textContent = '';
    return;
  }
  count = increment(count);
  byId('count').textContent = new Intl.NumberFormat('vi-VN').format(count);
  byId('status').textContent = `Bộ đếm hiện tại: ${count}.`;
});
scenario.addEventListener('change', () => {
  reset();
  byId('scenario-note').textContent = scenario.selectedOptions[0].textContent;
});
