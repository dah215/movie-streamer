# ⚡ Hướng dẫn Nhanh - Triển khai MovieStream

Hướng dẫn này giúp bạn triển khai ứng dụng trong **5 phút**.

---

## 🎯 5 Bước Triển khai

### Bước 1️⃣: Tạo Repository trên GitHub (2 phút)

```bash
# Truy cập https://github.com/new
# Điền:
# - Repository name: movie-streamer
# - Visibility: Public
# - Nhấp "Create repository"
```

### Bước 2️⃣: Push Code lên GitHub (1 phút)

Mở terminal tại thư mục `movie-streamer`:

```bash
git remote add origin https://github.com/YOUR_USERNAME/movie-streamer.git
git branch -M main
git push -u origin main
```

**Thay `YOUR_USERNAME` bằng username GitHub của bạn**

### Bước 3️⃣: Đăng Nhập Vercel (30 giây)

1. Truy cập https://vercel.com
2. Nhấp "Sign Up" → "Continue with GitHub"
3. Xác thực GitHub

### Bước 4️⃣: Import Project (1 phút)

1. Nhấp "Add New..." → "Project"
2. Chọn "Import Git Repository"
3. Tìm `movie-streamer` trong danh sách
4. Nhấp "Import"

### Bước 5️⃣: Deploy (1 phút)

1. Vercel sẽ tự động phát hiện cấu hình
2. Nhấp "Deploy"
3. Chờ hoàn thành (2-5 phút)

✅ **Xong! Ứng dụng của bạn sẽ chạy tại:**
```
https://movie-streamer-YOUR_USERNAME.vercel.app
```

---

## 🔄 Cập Nhật Ứng Dụng

Mỗi khi bạn thay đổi code:

```bash
git add .
git commit -m "Mô tả thay đổi"
git push origin main
```

**Vercel sẽ tự động rebuild và deploy!** 🚀

---

## 📚 Tài liệu Chi Tiết

- Xem `README.md` để hiểu thêm về ứng dụng
- Xem `DEPLOYMENT.md` để có hướng dẫn chi tiết từng bước

---

## ❓ Gặp Vấn Đề?

### "Build failed" trên Vercel
```bash
# Cài lại dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
git add .
git commit -m "Fix build"
git push origin main
```

### "Cannot find module"
```bash
npm install
npm run build
```

### Ứng dụng không tải phim
- Kiểm tra console (F12) để xem lỗi
- Đảm bảo API phim.nguonc.com khả dụng

---

## 🎉 Hoàn tất!

Ứng dụng MovieStream của bạn đã được triển khai vĩnh viễn trên Vercel!

Mỗi push lên GitHub sẽ tự động cập nhật ứng dụng.
