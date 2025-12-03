# 🚀 Hướng dẫn Triển khai MovieStream

Tài liệu này hướng dẫn chi tiết cách triển khai ứng dụng MovieStream lên GitHub và Vercel.

## 📋 Mục lục

1. [Chuẩn bị](#chuẩn-bị)
2. [Tạo Repository trên GitHub](#tạo-repository-trên-github)
3. [Push Code lên GitHub](#push-code-lên-github)
4. [Triển khai lên Vercel](#triển-khai-lên-vercel)
5. [Cấu hình Domain Tùy chỉnh](#cấu-hình-domain-tùy-chỉnh)
6. [Troubleshooting](#troubleshooting)

---

## 🔧 Chuẩn bị

### Yêu cầu

- ✅ GitHub account (tạo tại [github.com](https://github.com))
- ✅ Vercel account (tạo tại [vercel.com](https://vercel.com))
- ✅ Git cài đặt trên máy tính
- ✅ Node.js 18+ cài đặt

### Kiểm tra cài đặt

```bash
# Kiểm tra Git
git --version

# Kiểm tra Node.js
node --version
npm --version
```

---

## 📦 Tạo Repository trên GitHub

### Bước 1: Đăng nhập GitHub

1. Truy cập [github.com](https://github.com)
2. Nhấp **Sign in** (hoặc **Sign up** nếu chưa có account)
3. Nhập username/email và password

### Bước 2: Tạo Repository Mới

1. Nhấp dấu **+** ở góc trên bên phải → **New repository**
2. Điền thông tin:
   - **Repository name**: `movie-streamer`
   - **Description**: `Ứng dụng xem phim trực tuyến với React, TypeScript, và Tailwind CSS`
   - **Visibility**: Chọn **Public**
3. **Không** chọn "Initialize this repository with:"
4. Nhấp **Create repository**

### Bước 3: Sao chép URL Repository

Trên trang repository vừa tạo, nhấp nút **Code** (xanh lá) và sao chép HTTPS URL:
```
https://github.com/YOUR_USERNAME/movie-streamer.git
```

---

## 📤 Push Code lên GitHub

### Bước 1: Cấu hình Git (Nếu chưa làm)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Bước 2: Thêm Remote Origin

Mở terminal/command prompt tại thư mục `movie-streamer`:

```bash
cd /đường/dẫn/đến/movie-streamer
git remote add origin https://github.com/YOUR_USERNAME/movie-streamer.git
```

### Bước 3: Đổi Tên Branch (Nếu cần)

```bash
git branch -M main
```

### Bước 4: Push Code

```bash
git push -u origin main
```

Nếu được hỏi, nhập:
- **Username**: GitHub username của bạn
- **Password**: GitHub personal access token (hoặc password)

> **Lưu ý**: Nếu dùng GitHub Desktop hoặc SSH, quy trình có thể khác nhau.

### Bước 5: Xác Nhận

Truy cập `https://github.com/YOUR_USERNAME/movie-streamer` để xác nhận code đã được push.

---

## 🌐 Triển khai lên Vercel

### Bước 1: Đăng Nhập Vercel

1. Truy cập [vercel.com](https://vercel.com)
2. Nhấp **Sign Up** hoặc **Log In**
3. Chọn **Continue with GitHub**
4. Xác thực GitHub account

### Bước 2: Import Project

1. Sau khi đăng nhập, nhấp **Add New...** → **Project**
2. Chọn **Import Git Repository**
3. Tìm repository `movie-streamer` trong danh sách
4. Nhấp **Import**

### Bước 3: Cấu Hình Project

Vercel sẽ tự động phát hiện:
- **Framework Preset**: Vite ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

**Không cần thay đổi gì**, nhấp **Deploy**

### Bước 4: Chờ Deploy

Vercel sẽ:
1. Clone repository từ GitHub
2. Cài đặt dependencies
3. Build ứng dụng
4. Deploy lên production

Quá trình này mất khoảng 2-5 phút.

### Bước 5: Truy Cập Ứng Dụng

Sau khi deploy thành công, bạn sẽ nhận được URL:
```
https://movie-streamer-YOUR_USERNAME.vercel.app
```

Nhấp vào link để truy cập ứng dụng! 🎉

---

## 🌍 Cấu Hình Domain Tùy Chỉnh (Tùy chọn)

### Sử dụng Domain Của Riêng Bạn

1. Trên dashboard Vercel, chọn project `movie-streamer`
2. Nhấp tab **Settings** → **Domains**
3. Nhấp **Add Domain**
4. Nhập domain của bạn (ví dụ: `phim.example.com`)
5. Vercel sẽ cung cấp DNS records cần cấu hình
6. Cập nhật DNS records tại nhà cung cấp domain của bạn
7. Chờ DNS cập nhật (có thể mất 24-48 giờ)

---

## 🔄 Cập Nhật Ứng Dụng

Mỗi khi bạn cập nhật code:

```bash
# Thực hiện thay đổi trong code
# ...

# Commit thay đổi
git add .
git commit -m "Mô tả thay đổi của bạn"

# Push lên GitHub
git push origin main
```

Vercel sẽ **tự động**:
1. Phát hiện push mới
2. Rebuild ứng dụng
3. Deploy phiên bản mới

---

## 🐛 Troubleshooting

### Lỗi: "Build failed"

**Nguyên nhân**: Dependencies không được cài đặt đúng hoặc code có lỗi.

**Giải pháp**:
```bash
# Xóa node_modules
rm -rf node_modules package-lock.json

# Cài lại
npm install

# Build cục bộ để test
npm run build

# Nếu thành công, push lên GitHub
git add .
git commit -m "Fix build issues"
git push origin main
```

### Lỗi: "Cannot find module 'react'"

**Nguyên nhân**: Dependencies chưa được cài đặt.

**Giải pháp**:
```bash
npm install
npm run build
```

### Lỗi: "Port already in use"

**Nguyên nhân**: Cổng 5173 đang được sử dụng.

**Giải pháp**:
```bash
npm run dev -- --port 3000
```

### Vercel không tìm thấy repository

**Nguyên nhân**: Repository chưa được push hoặc GitHub account chưa được kết nối.

**Giải pháp**:
1. Kiểm tra repository trên GitHub: `https://github.com/YOUR_USERNAME/movie-streamer`
2. Đảm bảo code đã được push: `git push origin main`
3. Trên Vercel, nhấp **Settings** → **Git** → Kết nối lại GitHub account

### Ứng dụng chạy nhưng không tải phim

**Nguyên nhân**: API phim.nguonc.com có thể bị chặn hoặc không khả dụng.

**Giải pháp**:
1. Kiểm tra API: Truy cập `https://phim.nguonc.com/api/films/phim-moi-cap-nhat?page=1` trong trình duyệt
2. Nếu API không hoạt động, chờ hoặc liên hệ nhà cung cấp
3. Kiểm tra console (F12) để xem lỗi chi tiết

---

## 📞 Hỗ Trợ Thêm

- **GitHub Help**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs
- **Vite Guide**: https://vitejs.dev/guide/

---

**Chúc mừng! 🎉 Ứng dụng MovieStream của bạn đã được triển khai thành công!**
