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

- Build command: `bun run ci` (menjalankan `payload migrate` lalu `next build`).
- Environment variables: semua isi `.env.example`, untuk Production dan Preview.
- Gunakan branch database Neon terpisah untuk Preview agar migrasi preview tidak menyentuh data production.

## Catatan

- Perintah Payload memakai `--use-swc` karena loader `tsx` bawaannya bermasalah di Windows.
- Setiap konten disimpan dari admin, seluruh halaman website diperbarui otomatis (revalidasi on-demand).
