import path from "path";
import { fileURLToPath } from "url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { en } from "@payloadcms/translations/languages/en";
import { id } from "@payloadcms/translations/languages/id";
import { buildConfig } from "payload";
import sharp from "sharp";
import { ArticleCategories, Articles } from "@/cms/collections/Articles";
import { FaqCategories, Faqs } from "@/cms/collections/Faqs";
import { Inquiries } from "@/cms/collections/Inquiries";
import { LegalPages } from "@/cms/collections/LegalPages";
import { Media } from "@/cms/collections/Media";
import { ProjectCategories, Projects } from "@/cms/collections/Projects";
import { Services } from "@/cms/collections/Services";
import { Testimonials } from "@/cms/collections/Testimonials";
import { Users } from "@/cms/collections/Users";
import { HomePage } from "@/cms/globals/HomePage";
import { PageContent } from "@/cms/globals/PageContent";
import { SiteSettings } from "@/cms/globals/SiteSettings";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const siteURL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
// Admin requests are only trusted from the production domain, this deployment's Vercel URLs, and local dev.
const trustedOrigins = [
  siteURL,
  process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
  process.env.VERCEL_BRANCH_URL && `https://${process.env.VERCEL_BRANCH_URL}`,
  process.env.NODE_ENV !== "production" && "http://localhost:3000",
].filter((origin): origin is string => Boolean(origin));

// Email is optional: without SMTP settings Payload logs messages to the console instead of sending them.
const email = process.env.SMTP_HOST
  ? nodemailerAdapter({
      defaultFromAddress: process.env.SMTP_FROM ?? "no-reply@kasi.com",
      defaultFromName: "KASI CMS",
      transportOptions: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: Number(process.env.SMTP_PORT ?? 587) === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      },
    })
  : undefined;

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",
  serverURL: siteURL,
  csrf: trustedOrigins,
  cors: trustedOrigins,
  email,
  admin: {
    user: Users.slug,
    meta: { titleSuffix: " · KASI CMS" },
    components: { graphics: { Logo: "/cms/admin/Logo#Logo", Icon: "/cms/admin/Icon#Icon" } },
    importMap: { baseDir: path.resolve(dirname) },
  },
  i18n: { supportedLanguages: { id, en }, fallbackLanguage: "id" },
  collections: [Services, Projects, ProjectCategories, Articles, ArticleCategories, Testimonials, Faqs, FaqCategories, LegalPages, Media, Inquiries, Users],
  globals: [HomePage, PageContent, SiteSettings],
  editor: lexicalEditor(),
  graphQL: { disable: true },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL },
    // Schema changes always go through committed migrations so dev and production never drift.
    push: false,
    migrationDir: path.resolve(dirname, "cms/migrations"),
  }),
  plugins: [
    s3Storage({
      collections: { media: true },
      // Browsers upload straight to the bucket, sidestepping Vercel's 4.5 MB request limit; Payload still
      // fetches the original afterwards to resize and convert it.
      clientUploads: true,
      bucket: process.env.S3_BUCKET ?? "",
      config: {
        endpoint: process.env.AWS_ENDPOINT_URL_S3,
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
        },
        // Neon Object Storage only accepts path-style requests and rejects the SDK's default upload checksums.
        forcePathStyle: true,
        requestChecksumCalculation: "WHEN_REQUIRED",
        responseChecksumValidation: "WHEN_REQUIRED",
      },
    }),
  ],
  sharp,
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
});
