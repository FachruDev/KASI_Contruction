/**
 * Lets the admin upload straight from the browser to the Neon bucket (clientUploads).
 * Run once per bucket, and again whenever the production domain changes:
 *
 *   bun run storage:cors
 *
 * Allowed origins: NEXT_PUBLIC_SITE_URL, any *.vercel.app preview, and http://localhost:3000.
 */
import { GetBucketCorsCommand, PutBucketCorsCommand, S3Client } from "@aws-sdk/client-s3";

const bucket = process.env.S3_BUCKET;
if (!bucket) throw new Error("S3_BUCKET is not set.");

const origins = [process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""), "https://*.vercel.app", "http://localhost:3000"].filter(
  (origin): origin is string => Boolean(origin),
);

const s3 = new S3Client({
  endpoint: process.env.AWS_ENDPOINT_URL_S3,
  region: process.env.AWS_REGION,
  forcePathStyle: true,
  requestChecksumCalculation: "WHEN_REQUIRED",
  responseChecksumValidation: "WHEN_REQUIRED",
  credentials: { accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "", secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "" },
});

await s3.send(
  new PutBucketCorsCommand({
    Bucket: bucket,
    CORSConfiguration: {
      CORSRules: [{ AllowedOrigins: origins, AllowedMethods: ["GET", "PUT", "HEAD"], AllowedHeaders: ["*"], ExposeHeaders: ["ETag"], MaxAgeSeconds: 3600 }],
    },
  }),
);

const { CORSRules } = await s3.send(new GetBucketCorsCommand({ Bucket: bucket }));
console.log(`CORS for ${bucket}:`, JSON.stringify(CORSRules, null, 2));
