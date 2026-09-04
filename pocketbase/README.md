# PocketBase collection import

`collections.import.json` contains the full PocketBase v0.40 collection configuration for this website. It defines the public website content, relations, and the private `inquiries` inbox. It intentionally contains schema only; it does not insert content records.

## Import safely

1. Back up the PocketBase instance first.
2. Sign in as a PocketBase superuser and use the Dashboard's **Import collections** action.
3. Select `collections.import.json` and keep **delete missing collections** disabled.
4. Import, then create one active record for `site_profile`, `contact_info`, `home_hero`, and `home_cta`.

The import endpoint replaces matching collection definitions. Do not enable deletion on an instance that already contains unrelated collections or data.

## Security model

All public-content collections expose only active or published records. No public create, update, or delete rules are granted.

`inquiries` is entirely locked. The Next.js contact-form endpoint should validate input, rate-limit/bot-check the request, then create this record with server-only PocketBase credentials. The browser must never receive those credentials.

## Important editorial rules

- `site_profile`, `contact_info`, `home_hero`, and `home_cta` are intended as singleton collections: maintain one active/published record each.
- Enter lowercase, hyphenated slugs such as `pengaspalan-jalan`. The JSON validates their format; it does not turn titles into slugs automatically.
- Use `sort_order` ascending when rendering business hours, statistics, features, benefits, categories, testimonials, and FAQs.
- `service_benefits` belongs to one `service`; fetch it with `filter=service='SERVICE_ID'&sort=sort_order`.
- The `rating` field is a whole-star select (1 to 5). Change it to a number field only if half-star ratings are required.
