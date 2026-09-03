// Khởi tạo Service Worker cơ bản để cho phép cài đặt App
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Cho phép app tải dữ liệu trực tiếp từ mạng (Firebase/Internet)
  e.respondWith(fetch(e.request));
});
