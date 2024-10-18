# DATN_SystemEdu

-- Các bước để chạy dự án -- 

note: Cần có composer, nodeJs, PHP 8 (kích hoạt extension=zip ở file php.ini và đã setup file cacert.pem), Ampps/Xampps

1. Trỏ vào dự án, mở Terminal cd SysEdu

2. Tạo 1 file .env trong folder SysEdu

3. Copy toàn bộ nội dung từ file .env.example dán cho file .env đã tạo trước đó

4. Chạy lệnh: composer i

5. Chạy lệnh: npm i

6. Chạy lệnh: php artisan key:generate

7. Thiết lập database trong file .env

add 
GOOGLE_CLIENT_ID=24498965782-on05sddh442dp1jrv6cg8a5jpnnfd0vd.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_REDIRECT=http://127.0.0.1:8000/auth/callback/google

8. Chạy lệnh: php artisan migrate

9. Mở 2 Terminal mới, cd vào SysEdu
    - Terminal 1 chạy lệnh: php artisan serve
    - Terminal 2 chạy lệnh: npm run dev

10. Mở trình duyệt vào đường dẫn của Terminal 1