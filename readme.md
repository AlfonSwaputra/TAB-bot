**TAB — Tanya Apa Bisa**

TAB (Tanya Apa Bisa) merupakan chatbot yang dibuat menggunakan teknologi AI DeepSeek V3.1 yang yang dapat berbincang dengan pengguna dengan menggunakan bahasa Indonesia. Chatbot ini juga cocok untuk dijadikan tempat menanyakan pertanyaan simple dan bisa dijawab layaknya teman yang sedang membantu teman lainnya yang sedang butuh lawan bicara.

**Fitur Utama**

- Chatbot interaktif dengan tampilan sederhana dan responsif
- Komunikasi real-time antara pengguna dan AI
- Menggunakan OpenRouter API (DeepSeek Chat V3.1) secara gratis

**Cara Instalasi dan Menjalankan Proyek**

**1. Clone Repository**

Jika proyek ini sudah diunggah ke GitHub, jalankan perintah berikut:

git clone https://github.com/username/tab.git

cd tab

Atau jika file sudah kamu dapatkan langsung, cukup buka folder proyek di terminal.

**2. Instal Dependensi**

Pastikan Node.js sudah terpasang di perangkat kamu (versi minimal v18). Kemudian jalankan:

npm install

**3. Buat File .env**

Buat file baru bernama .env di root folder proyek, lalu isi dengan format seperti berikut:

OPENROUTER\_API\_KEY=MASUKKAN\_API\_KEY\_ANDA

SITE\_URL=http://localhost:3000

SITE\_NAME=TAB-bot

**Penting:**

- Jangan pernah unggah file .env ke GitHub karena berisi data sensitif seperti API key
- Kamu bisa mendapatkan API Key gratis dari <https://openrouter.ai>
- lakukan login ke <https://openrouter.ai/> untuk mendapatkan API key untuk mengisi file .env

**4. Jalankan Server**

Setelah semua dependensi terinstal dan file .env dibuat, jalankan server dengan:

npm start

Jika berhasil, kamu akan melihat pesan di terminal:

Server sudah berjalan di http://localhost:3000

**5. Akses Chatbot**

Buka browser, lalu kunjungi:

http://localhost:3000

Sekarang kamu bisa mencoba chatbot TAB langsung dari browser.

**Teknologi yang Digunakan**

- **Node.js** — runtime environment untuk server
- **Express.js** — framework backend untuk menangani route dan API
- **OpenRouter (DeepSeek V3.1)** — model AI untuk percakapan
- **HTML, CSS, JavaScript** — frontend chatbot

**Catatan** 

- File frontend (index.html, style.css, script.js) berada di folder public dan views
- Endpoint utama untuk interaksi AI ada di POST /api/chat
- Respon dari AI diformat dalam Bahasa Indonesia yang sopan dan natural

**Lisensi**

Proyek ini bersifat open source dan dapat digunakan oleh orang lain, serta jika ada yang ingin mengembangkannya lebih luas akan sangat bagus.

