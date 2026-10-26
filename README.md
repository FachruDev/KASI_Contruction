# KASI — Website & CMS

Website KASI (Kaum Aspal Solusi Indonesia) dan panel admin kontennya dalam satu aplikasi Next.js 16 + [Payload CMS 3](https://payloadcms.com).

- Website: `/`
- Panel admin: `/admin`
- Database: Neon Postgres
- File & gambar: Neon Object Storage (S3-compatible), disajikan lewat `/api/media/file/…`

## Setup lokal

1. Node.js **24.22.1+** dan Bun.
2. Salin `.env.example` ke `.env`, lalu isi kredensial Neon dan `PAYLOAD_SECRET`.
3. Instal dependensi, jalankan migrasi, dan isi konten awal:

   ```bash
   bun install
   bun run migrate
   bun run seed
   bun run dev
   ```

4. Buka `http://localhost:3000/admin` dan buat akun pertama. Akun pertama otomatis menjadi **Admin**.

## Struktur

```
app/(site)/        halaman website
app/(payload)/     route admin & REST API Payload (file generated, jangan diubah manual)
cms/collections/   skema konten: Layanan, Portfolio, Artikel, Testimoni, FAQ, Halaman Legal, Media, Inquiry, Pengguna
cms/globals/       Pengaturan Situs, Beranda, Halaman Lainnya
cms/migrations/    migrasi database (di-commit)
lib/cms.ts         semua query konten untuk halaman (Local API Payload)
lib/types.ts       tipe data yang dipakai komponen
```

## Mengubah skema

Skema tidak di-push otomatis ke database. Setelah mengubah file di `cms/`:

```bash
bun run generate:types
bun run migrate:create nama-perubahan
bun run migrate
```

Commit file migrasi yang dihasilkan bersama perubahan skemanya.

## Deploy ke Vercel

`vercel.json` sudah mengatur build command `bun run ci` (migrasi database lalu `next build`), dan `package.json` mengunci Node 24.

Checklist sebelum go-live:

1. **Buat akun admin pertama** di `/admin` (lokal atau preview) sebelum domain production dibuka. Selama belum ada user, siapa pun yang membuka `/admin` bisa mendaftar sebagai admin.
2. **Environment variables di Vercel** (Production dan Preview): `DATABASE_URL`, `PAYLOAD_SECRET`, `AWS_*`, `S3_BUCKET`, `NEXT_PUBLIC_SITE_URL`, serta SMTP bila email dipakai.
3. **Database Preview terpisah**: pakai integrasi Neon di Vercel agar setiap preview mendapat branch database sendiri, supaya migrasi preview tidak menyentuh production.
4. **CORS bucket** untuk upload langsung dari browser: setelah `NEXT_PUBLIC_SITE_URL` berisi domain production, jalankan `bun run storage:cors`.
5. **Domain**: arahkan domain ke Vercel, lalu cek `/sitemap.xml` dan `/robots.txt`.

## Migrasi konten dari PocketBase

```bash
bun run migrate:pocketbase dry-run        # lihat apa yang akan diimpor
bun run migrate:pocketbase                # impor layanan, portfolio, testimoni, FAQ, artikel, halaman legal
bun run migrate:pocketbase with-inquiries # ikut salin data inquiry (butuh PB_SUPERUSER_*)
```

Aman dijalankan ulang: data dicocokkan berdasarkan slug/nama, dan file hanya diunggah sekali. Pengaturan situs dan teks Beranda tidak diimpor karena sudah dikurasi ulang di Payload.

## Catatan

- Perintah Payload memakai `--use-swc` karena loader `tsx` bawaannya bermasalah di Windows.
- Setiap konten disimpan dari admin, seluruh halaman website diperbarui otomatis (revalidasi on-demand), dengan revalidasi per jam sebagai cadangan.
- Login admin terkunci 15 menit setelah 5 kali salah password.
- Upload gambar langsung dari browser ke bucket (melewati batas 4,5 MB Vercel); server tetap mengecilkan dan mengonversi ke WebP.
