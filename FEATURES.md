# 🎬 Tính Năng MovieStream

Tài liệu này mô tả chi tiết tất cả các tính năng của ứng dụng MovieStream.

---

## ✨ Tính Năng Hiện Tại

### 1. 📺 Danh Sách Phim Mới Cập Nhật

**Mô tả**: Hiển thị danh sách phim mới nhất được cập nhật từ API phim.nguonc.com.

**Tính năng**:
- ✅ Hiển thị phim dưới dạng lưới (grid)
- ✅ Phân trang (pagination) để duyệt nhiều trang
- ✅ Thông tin phim: tên, năm phát hành, trạng thái
- ✅ Responsive design cho tất cả thiết bị

**File liên quan**:
- `src/pages/HomePage.tsx`
- `src/components/FilmCard.tsx`
- `src/utils/api.ts`

---

### 2. 🔍 Tìm Kiếm Phim

**Mô tả**: Tìm kiếm phim theo từ khóa.

**Tính năng**:
- ✅ Tìm kiếm nhanh chóng
- ✅ Hiển thị kết quả tìm kiếm
- ✅ Hỗ trợ tiếng Việt và tiếng Anh

**Cách sử dụng**:
1. Nhấp vào ô tìm kiếm ở header
2. Nhập từ khóa (ví dụ: "Hoa Thiên Cốt")
3. Nhấp nút "Tìm" hoặc nhấn Enter

**File liên quan**:
- `src/components/Header.tsx`
- `src/utils/api.ts` (hàm `searchFilms`)

---

### 3. 📄 Chi Tiết Phim

**Mô tả**: Xem thông tin chi tiết về một bộ phim.

**Tính năng**:
- ✅ Poster phim
- ✅ Tên phim (tiếng Việt + tiếng gốc)
- ✅ Năm phát hành, trạng thái, loại phim
- ✅ Mô tả nội dung
- ✅ Danh sách tập phim
- ✅ Thể loại, quốc gia, diễn viên

**Cách sử dụng**:
1. Nhấp vào một phim trong danh sách
2. Xem chi tiết phim
3. Chọn tập phim để xem

**File liên quan**:
- `src/pages/FilmDetail.tsx`
- `src/utils/api.ts` (hàm `getFilmDetail`)

---

### 4. 🎥 Trình Phát Video HLS

**Mô tả**: Phát video với công nghệ HLS (HTTP Live Streaming) hỗ trợ adaptive streaming.

**Tính năng**:
- ✅ Phát video mượt mà
- ✅ Tự động điều chỉnh chất lượng video theo tốc độ mạng
- ✅ Điều khiển video: play, pause, tua, âm lượng
- ✅ Fullscreen support
- ✅ Hiển thị thời gian video

**Công nghệ sử dụng**:
- HLS.js - Hỗ trợ phát HLS trên các trình duyệt
- Video.js - Trình phát video HTML5

**File liên quan**:
- `src/components/VideoPlayer.tsx`

---

### 5. 🌙 Chế Độ Tối/Sáng

**Mô tả**: Chuyển đổi giữa chế độ tối và chế độ sáng.

**Tính năng**:
- ✅ Nút chuyển đổi theme ở header
- ✅ Lưu tùy chọn vào localStorage
- ✅ Tự động áp dụng theme khi mở lại ứng dụng
- ✅ Giao diện tối ưu cho mắt

**Cách sử dụng**:
1. Nhấp nút 🌙 (tối) hoặc ☀️ (sáng) ở góc trên bên phải header
2. Giao diện sẽ thay đổi ngay lập tức
3. Tùy chọn được lưu tự động

**File liên quan**:
- `src/hooks/useTheme.ts`
- `src/components/Header.tsx`
- `src/styles/globals.css`

---

### 6. 🍪 Quản Lý Cookie

**Mô tả**: Lưu trữ thông tin người dùng và trạng thái ứng dụng.

**Tính năng**:
- ✅ Lưu thông tin phiên (session)
- ✅ Lưu tùy chọn người dùng
- ✅ Lưu trạng thái xem phim
- ✅ Tự động xóa cookie cũ

**File liên quan**:
- `src/hooks/useCookie.ts`

---

### 7. 📱 Responsive Design

**Mô tả**: Ứng dụng hoạt động tốt trên tất cả kích thước màn hình.

**Hỗ trợ**:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

**File liên quan**:
- `src/styles/globals.css`
- `tailwind.config.js`
- Tất cả component sử dụng Tailwind CSS responsive classes

---

### 8. ⚡ Tốc Độ Tải Nhanh

**Mô tả**: Ứng dụng tối ưu hóa để tải nhanh chóng.

**Tính năng**:
- ✅ Sử dụng Vite (build tool cực nhanh)
- ✅ Code splitting tự động
- ✅ Lazy loading cho component
- ✅ CSS minified
- ✅ JavaScript minified

**File liên quan**:
- `vite.config.ts`
- `package.json` (build scripts)

---

## 🔮 Tính Năng Sắp Tới

Các tính năng dự kiến sẽ thêm vào trong tương lai:

- [ ] **Lưu Danh Sách Yêu Thích** - Lưu phim yêu thích vào cookie
- [ ] **Lịch Sử Xem Phim** - Theo dõi phim đã xem
- [ ] **Hỗ Trợ Phụ Đề** - Tải và hiển thị phụ đề
- [ ] **Chặn Quảng Cáo Nâng Cao** - Lọc quảng cáo từ luồng video
- [ ] **Tính Năng Chia Sẻ** - Chia sẻ phim qua mạng xã hội
- [ ] **Danh Mục Phim** - Duyệt phim theo thể loại, quốc gia, năm
- [ ] **Tìm Kiếm Nâng Cao** - Lọc theo nhiều tiêu chí
- [ ] **Bình Luận & Đánh Giá** - Thêm backend để hỗ trợ
- [ ] **PWA Support** - Sử dụng offline
- [ ] **Dark Mode Tự Động** - Theo cài đặt hệ thống
- [ ] **Thông Báo** - Thông báo phim mới
- [ ] **Tài Khoản Người Dùng** - Đăng ký, đăng nhập (cần backend)

---

## 🔧 Cấu Trúc Tính Năng

### Hook (Hooks)

| Hook | Mục đích |
| :--- | :--- |
| `useTheme` | Quản lý chế độ tối/sáng |
| `useCookie` | Quản lý cookie |

### Component (Components)

| Component | Mục đích |
| :--- | :--- |
| `Header` | Header với tìm kiếm và chế độ tối/sáng |
| `FilmCard` | Card hiển thị thông tin phim |
| `VideoPlayer` | Trình phát video HLS |

### Page (Pages)

| Page | Mục đích |
| :--- | :--- |
| `HomePage` | Trang chính với danh sách phim |
| `FilmDetail` | Trang chi tiết phim |

### Utility (Utils)

| Utility | Mục đích |
| :--- | :--- |
| `api.ts` | Tích hợp API phim.nguonc.com |

---

## 🎨 Styling

Ứng dụng sử dụng **Tailwind CSS 4** với các tính năng:

- ✅ Dark mode support
- ✅ Responsive design
- ✅ Custom colors
- ✅ Animations và transitions

---

## 📊 API Được Sử Dụng

Ứng dụng tích hợp API từ **phim.nguonc.com**:

| Endpoint | Mục đích |
| :--- | :--- |
| `/api/films/phim-moi-cap-nhat` | Lấy danh sách phim mới |
| `/api/film/{slug}` | Lấy chi tiết phim |
| `/api/films/search` | Tìm kiếm phim |
| `/api/films/danh-sach/{slug}` | Lấy phim theo danh mục |
| `/api/films/the-loai/{slug}` | Lấy phim theo thể loại |
| `/api/films/quoc-gia/{slug}` | Lấy phim theo quốc gia |
| `/api/films/nam-phat-hanh/{year}` | Lấy phim theo năm |

---

## 🚀 Hiệu Suất

| Chỉ số | Giá trị |
| :--- | :--- |
| **First Contentful Paint (FCP)** | < 1s |
| **Largest Contentful Paint (LCP)** | < 2.5s |
| **Cumulative Layout Shift (CLS)** | < 0.1 |
| **Bundle Size** | ~750KB (gzipped: ~230KB) |

---

## 📝 Ghi Chú

- Tất cả dữ liệu phim được lấy từ API công khai
- Ứng dụng không lưu trữ dữ liệu phim trên server
- Tất cả thông tin người dùng được lưu cục bộ (localStorage/cookie)

---

**Cập nhật lần cuối**: Tháng 12, 2025
