# 💻 Hướng dẫn Cài Đặt Cục Bộ

Hướng dẫn này giúp bạn cài đặt và chạy ứng dụng MovieStream trên máy tính của bạn.

---

## 📋 Yêu Cầu Hệ Thống

Trước khi bắt đầu, hãy đảm bảo bạn có:

- **Node.js 18+** - [Tải tại nodejs.org](https://nodejs.org/)
- **npm 9+** - Thường đi kèm với Node.js
- **Git** - [Tải tại git-scm.com](https://git-scm.com/)
- **Terminal/Command Prompt** - Có sẵn trên tất cả OS

### Kiểm Tra Cài Đặt

Mở terminal và chạy:

```bash
node --version    # Nên là v18.0.0 hoặc cao hơn
npm --version     # Nên là 9.0.0 hoặc cao hơn
git --version     # Nên có Git cài đặt
```

---

## 🚀 Cài Đặt Nhanh (5 phút)

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/movie-streamer.git
cd movie-streamer
```

**Thay `YOUR_USERNAME` bằng username GitHub của bạn**

### 2. Cài Đặt Dependencies

```bash
npm install
```

Quá trình này sẽ tải tất cả các thư viện cần thiết (mất 2-3 phút).

### 3. Chạy Development Server

```bash
npm run dev
```

Bạn sẽ thấy output như:

```
  VITE v7.2.6  ready in 240 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://169.254.0.21:5173/
  ➜  press h + enter to show help
```

### 4. Mở Trình Duyệt

Truy cập: **http://localhost:5173**

✅ Ứng dụng sẽ chạy và bạn có thể bắt đầu sử dụng!

---

## 📝 Các Lệnh Hữu Ích

### Chạy Development Server
```bash
npm run dev
```
Chạy ứng dụng ở chế độ phát triển với hot reload (tự động cập nhật khi bạn sửa code).

### Build cho Production
```bash
npm run build
```
Tạo bản build tối ưu hóa trong thư mục `dist/`.

### Preview Build
```bash
npm run preview
```
Xem trước bản build production cục bộ.

### Kiểm Tra Lỗi TypeScript
```bash
npx tsc --noEmit
```
Kiểm tra lỗi TypeScript mà không cần build.

---

## 📂 Cấu Trúc Thư Mục

```
movie-streamer/
├── src/                      # Mã nguồn chính
│   ├── components/           # React components
│   │   ├── Header.tsx
│   │   ├── FilmCard.tsx
│   │   └── VideoPlayer.tsx
│   ├── pages/                # Các trang
│   │   ├── HomePage.tsx
│   │   └── FilmDetail.tsx
│   ├── hooks/                # Custom React hooks
│   │   ├── useTheme.ts
│   │   └── useCookie.ts
│   ├── utils/                # Utility functions
│   │   └── api.ts
│   ├── styles/               # CSS files
│   │   └── globals.css
│   ├── App.tsx               # Component chính
│   └── main.tsx              # Entry point
├── public/                   # Static files (nếu có)
├── dist/                     # Build output (tạo sau khi chạy build)
├── node_modules/             # Dependencies (tạo sau khi chạy npm install)
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project metadata & dependencies
├── README.md                 # Tài liệu chính
├── QUICK_START.md            # Hướng dẫn nhanh
├── DEPLOYMENT.md             # Hướng dẫn triển khai
├── FEATURES.md               # Mô tả tính năng
└── INSTALLATION.md           # File này
```

---

## 🔧 Cấu Hình (Tùy Chọn)

### Thay Đổi Port

Mặc định, ứng dụng chạy ở port `5173`. Để thay đổi:

```bash
npm run dev -- --port 3000
```

### Thay Đổi Host

```bash
npm run dev -- --host 0.0.0.0
```

---

## 🐛 Troubleshooting

### Lỗi: "npm: command not found"

**Nguyên nhân**: Node.js/npm chưa được cài đặt.

**Giải pháp**:
1. Tải Node.js từ https://nodejs.org/
2. Cài đặt theo hướng dẫn
3. Khởi động lại terminal
4. Chạy lại `npm install`

### Lỗi: "Cannot find module 'react'"

**Nguyên nhân**: Dependencies chưa được cài đặt.

**Giải pháp**:
```bash
npm install
```

### Lỗi: "Port 5173 already in use"

**Nguyên nhân**: Cổng 5173 đang được sử dụng bởi ứng dụng khác.

**Giải pháp**:
```bash
# Cách 1: Sử dụng port khác
npm run dev -- --port 3000

# Cách 2: Tìm và dừng ứng dụng sử dụng port 5173
# Trên Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Trên Mac/Linux:
lsof -i :5173
kill -9 <PID>
```

### Lỗi: "git: command not found"

**Nguyên nhân**: Git chưa được cài đặt.

**Giải pháp**:
1. Tải Git từ https://git-scm.com/
2. Cài đặt theo hướng dẫn
3. Khởi động lại terminal
4. Chạy lại `git clone`

### Build Thất Bại

**Nguyên nhân**: Dependencies cũ hoặc lỗi trong code.

**Giải pháp**:
```bash
# Xóa node_modules và package-lock.json
rm -rf node_modules package-lock.json

# Cài lại
npm install

# Build lại
npm run build
```

### Ứng Dụng Không Tải Phim

**Nguyên nhân**: API phim.nguonc.com không khả dụng hoặc bị chặn.

**Giải pháp**:
1. Kiểm tra kết nối internet
2. Truy cập https://phim.nguonc.com/api/films/phim-moi-cap-nhat?page=1 để kiểm tra API
3. Nếu API không hoạt động, chờ hoặc liên hệ nhà cung cấp
4. Kiểm tra console (F12) để xem lỗi chi tiết

---

## 📚 Tài Liệu Thêm

- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/
- **TypeScript Docs**: https://www.typescriptlang.org/
- **Tailwind CSS Docs**: https://tailwindcss.com/
- **React Router Docs**: https://reactrouter.com/

---

## 💡 Mẹo Phát Triển

### Sử Dụng VS Code

Tôi khuyến nghị sử dụng **Visual Studio Code** với các extension:

1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
3. **TypeScript Vue Plugin** - Vue.volar
4. **Prettier** - esbenp.prettier-vscode

### Hot Module Replacement (HMR)

Vite hỗ trợ HMR - khi bạn sửa code, trình duyệt sẽ tự động cập nhật mà không cần reload.

### React Developer Tools

Cài đặt extension "React Developer Tools" cho trình duyệt để debug React components.

---

## 🎉 Hoàn Tất!

Bạn đã cài đặt thành công MovieStream cục bộ!

Bây giờ bạn có thể:
- ✅ Phát triển tính năng mới
- ✅ Sửa lỗi
- ✅ Tùy chỉnh giao diện
- ✅ Test ứng dụng

Sau khi hoàn thành, bạn có thể triển khai lên Vercel theo hướng dẫn trong `DEPLOYMENT.md`.

---

**Cần giúp đỡ?** Xem `QUICK_START.md` hoặc `README.md`.
