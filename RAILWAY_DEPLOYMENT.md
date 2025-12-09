# 🚂 Hướng dẫn Triển khai lên Railway

Hướng dẫn này giúp bạn triển khai ứng dụng MovieStream lên Railway trong **5 phút**.

---

## 🎯 5 Bước Triển khai

### Bước 1️⃣: Truy cập Railway (30 giây)

1. Truy cập https://railway.app
2. Nhấp **Login**
3. Chọn **Continue with GitHub**
4. Xác thực GitHub account

---

### Bước 2️⃣: Tạo Project Mới (1 phút)

1. Sau khi đăng nhập, nhấp **New Project**
2. Chọn **Deploy from GitHub repo**
3. Tìm repository `movie-streamer` trong danh sách
4. Nhấp **Deploy**

---

### Bước 3️⃣: Cấu Hình Project (1 phút)

Railway sẽ tự động:
- ✅ Phát hiện Node.js project
- ✅ Cài đặt dependencies
- ✅ Build ứng dụng
- ✅ Deploy

**Không cần thay đổi gì!**

---

### Bước 4️⃣: Chờ Deploy (2-3 phút)

Railway sẽ:
1. Clone repository từ GitHub
2. Cài đặt dependencies (`npm install`)
3. Build ứng dụng (`npm run build`)
4. Deploy lên production

Bạn có thể xem logs để theo dõi tiến trình.

---

### Bước 5️⃣: Truy Cập Ứng Dụng ✅

Sau khi deploy thành công:

1. Nhấp tab **Deployments**
2. Tìm domain được tạo (ví dụ: `movie-streamer-production.up.railway.app`)
3. Nhấp vào link để truy cập ứng dụng

🎉 **Ứng dụng của bạn đang chạy!**

---

## 📊 Dashboard Railway

Trên dashboard Railway, bạn có thể:

- ✅ Xem logs của ứng dụng
- ✅ Xem metrics (CPU, memory, network)
- ✅ Cấu hình environment variables
- ✅ Cấu hình domain tùy chỉnh
- ✅ Quản lý deployments

---

## 🔄 Cập Nhật Ứng Dụng

Mỗi khi bạn cập nhật code:

```bash
git add .
git commit -m "Mô tả thay đổi"
git push origin main
```

Railway sẽ **tự động**:
1. Phát hiện push mới
2. Rebuild ứng dụng
3. Deploy phiên bản mới

---

## 🌍 Cấu Hình Domain Tùy Chỉnh (Tùy chọn)

### Sử Dụng Domain Của Riêng Bạn

1. Trên Railway dashboard, chọn project
2. Nhấp **Settings** → **Domains**
3. Nhấp **Add Custom Domain**
4. Nhập domain của bạn (ví dụ: `phim.example.com`)
5. Railway sẽ cung cấp CNAME record
6. Cập nhật DNS records tại nhà cung cấp domain
7. Chờ DNS cập nhật (24-48 giờ)

---

## 🔐 Environment Variables

Nếu bạn cần thêm biến môi trường:

1. Trên Railway dashboard, chọn project
2. Nhấp **Variables**
3. Thêm các biến cần thiết
4. Railway sẽ tự động restart ứng dụng

---

## 🐛 Troubleshooting

### Build Failed

**Nguyên nhân**: Lỗi trong code hoặc dependencies.

**Giải pháp**:
1. Kiểm tra logs trên Railway
2. Sửa lỗi cục bộ
3. Push lên GitHub
4. Railway sẽ tự động rebuild

### Ứng Dụng Không Tải Phim

**Nguyên nhân**: API phim.nguonc.com không khả dụng.

**Giải pháp**:
1. Kiểm tra console (F12)
2. Truy cập https://phim.nguonc.com/api/films/phim-moi-cap-nhat?page=1
3. Nếu API không hoạt động, chờ hoặc liên hệ nhà cung cấp

### Ứng Dụng Bị Crash

**Nguyên nhân**: Lỗi runtime hoặc memory không đủ.

**Giải pháp**:
1. Xem logs trên Railway
2. Sửa lỗi
3. Push lên GitHub
4. Railway sẽ tự động restart

---

## 📈 Monitoring

Railway cung cấp metrics:

- **CPU Usage**: Mức sử dụng CPU
- **Memory Usage**: Mức sử dụng RAM
- **Network**: Lưu lượng mạng
- **Requests**: Số request
- **Response Time**: Thời gian phản hồi

Bạn có thể xem metrics này trên dashboard.

---

## 💰 Chi Phí

Railway cung cấp:
- ✅ **$5/tháng** free tier
- ✅ Đủ cho ứng dụng nhỏ
- ✅ Không cần credit card để bắt đầu

---

## 🎉 Hoàn Tất!

Ứng dụng MovieStream của bạn đã được triển khai thành công lên Railway!

Mỗi push lên GitHub sẽ tự động cập nhật ứng dụng.

---

## 📚 Tài Liệu Thêm

- **Railway Docs**: https://docs.railway.app/
- **Railway CLI**: https://docs.railway.app/cli/quick-start

---

**Chúc mừng! 🚀 Ứng dụng của bạn đang chạy trên Railway!**
