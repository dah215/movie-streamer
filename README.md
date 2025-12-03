# 🎬 MovieStream - Ứng dụng Xem Phim Trực Tuyến

Một ứng dụng web xem phim hiện đại được xây dựng bằng **React**, **TypeScript**, **Tailwind CSS**, và **Vite**.

## ✨ Tính năng chính

- ✅ **Danh sách phim mới cập nhật** - Lấy dữ liệu từ API phim.nguonc.com
- ✅ **Tìm kiếm phim** - Tìm kiếm nhanh chóng theo từ khóa
- ✅ **Chi tiết phim** - Xem thông tin chi tiết và danh sách tập phim
- ✅ **Trình phát video HLS** - Phát video với adaptive streaming (tự điều chỉnh chất lượng)
- ✅ **Chế độ Tối/Sáng** - Giao diện tối ưu cho mắt, lưu tùy chọn vào localStorage
- ✅ **Lưu Cookie** - Lưu trữ thông tin người dùng và trạng thái ứng dụng
- ✅ **Responsive Design** - Tương thích với tất cả thiết bị (desktop, tablet, mobile)
- ✅ **Tốc độ Tải Nhanh** - Sử dụng Vite và code splitting để tối ưu hiệu suất

## 🛠 Công nghệ sử dụng

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router
- **Video Player**: HLS.js + Video.js
- **HTTP Client**: Axios
- **Package Manager**: npm

## 📋 Yêu cầu hệ thống

- Node.js 18+ 
- npm 9+

## 🚀 Hướng dẫn cài đặt và chạy cục bộ

### 1. Clone repository
```bash
git clone https://github.com/YOUR_USERNAME/movie-streamer.git
cd movie-streamer
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Chạy development server
```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

### 4. Build cho production
```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`

### 5. Preview build
```bash
npm run preview
```

## 📦 Cấu trúc dự án

```
movie-streamer/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Header với tìm kiếm & chế độ tối/sáng
│   │   ├── FilmCard.tsx        # Card hiển thị thông tin phim
│   │   └── VideoPlayer.tsx     # Trình phát video HLS
│   ├── pages/
│   │   ├── HomePage.tsx        # Trang chính
│   │   └── FilmDetail.tsx      # Trang chi tiết phim
│   ├── hooks/
│   │   ├── useTheme.ts         # Quản lý theme (tối/sáng)
│   │   └── useCookie.ts        # Quản lý cookie
│   ├── utils/
│   │   └── api.ts              # Tích hợp API phim.nguonc.com
│   ├── styles/
│   │   └── globals.css         # CSS toàn cục
│   ├── App.tsx                 # Component chính với routing
│   └── main.tsx                # Entry point
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 🌐 Triển khai lên Vercel

### Bước 1: Tạo repository trên GitHub

1. Đăng nhập vào [GitHub](https://github.com)
2. Nhấp vào dấu **+** ở góc trên bên phải → **New repository**
3. Đặt tên: `movie-streamer`
4. Chọn **Public**
5. Nhấp **Create repository**

### Bước 2: Push code lên GitHub

```bash
# Thêm remote origin
git remote add origin https://github.com/YOUR_USERNAME/movie-streamer.git

# Đổi tên branch thành main (nếu cần)
git branch -M main

# Push code lên GitHub
git push -u origin main
```

### Bước 3: Triển khai lên Vercel

1. Truy cập [Vercel](https://vercel.com)
2. Nhấp **Sign Up** → Chọn **Continue with GitHub**
3. Xác thực GitHub account
4. Nhấp **Import Project**
5. Chọn repository `movie-streamer`
6. Vercel sẽ tự động phát hiện cấu hình Vite
7. Nhấp **Deploy**

✅ Ứng dụng sẽ được triển khai tại `https://movie-streamer-YOUR_USERNAME.vercel.app`

## 🔄 Cập nhật ứng dụng

Sau khi triển khai lên Vercel, mỗi khi bạn push code lên GitHub, Vercel sẽ tự động rebuild và deploy ứng dụng.

```bash
# Thực hiện thay đổi
# ...

# Commit và push
git add .
git commit -m "Mô tả thay đổi"
git push origin main
```

## 📝 API được sử dụng

Ứng dụng sử dụng API từ [phim.nguonc.com](https://phim.nguonc.com):

- **Phim mới cập nhật**: `GET /api/films/phim-moi-cap-nhat?page={page}`
- **Thông tin phim**: `GET /api/film/{slug}`
- **Tìm kiếm**: `GET /api/films/search?keyword={keyword}`
- **Phim theo danh mục**: `GET /api/films/danh-sach/{slug}?page={page}`
- **Phim theo thể loại**: `GET /api/films/the-loai/{slug}?page={page}`
- **Phim theo quốc gia**: `GET /api/films/quoc-gia/{slug}?page={page}`
- **Phim theo năm**: `GET /api/films/nam-phat-hanh/{year}?page={page}`

## 🐛 Troubleshooting

### Lỗi: "Cannot find module 'react'"
```bash
npm install
```

### Lỗi: "Port 5173 already in use"
```bash
npm run dev -- --port 3000
```

### Lỗi: "Build failed"
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Vui lòng:

1. Fork repository
2. Tạo branch cho feature (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Liên hệ

Nếu bạn có câu hỏi hoặc gợi ý, vui lòng tạo một Issue trên GitHub.

---

**Được tạo bởi Manus AI** 🚀
