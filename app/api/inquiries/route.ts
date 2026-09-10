import { NextResponse } from "next/server";

const POCKETBASE_URL = (process.env.POCKETBASE_URL ?? "https://kasiservices.ryucode.site").replace(/\/$/, "");

function asText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ message: "Data formulir tidak valid." }, { status: 400 });
  if (asText(body.website, 200)) return NextResponse.json({ ok: true });

  const name = asText(body.name, 160);
  const phone = asText(body.phone, 30);
  const location = asText(body.location, 300);
  const requirement = asText(body.requirement, 40);
  const detail = asText(body.detail, 3000);
  const area = typeof body.area === "number" && Number.isFinite(body.area) && body.area >= 0 ? body.area : 0;
  const requirements = new Set(["road", "housing", "parking", "commercial", "industrial", "repair", "other"]);

  if (!name || !phone || !location || !requirements.has(requirement)) {
    return NextResponse.json({ message: "Mohon lengkapi data wajib pada formulir." }, { status: 400 });
  }

  const email = process.env.PB_SUPERUSER_EMAIL;
  const password = process.env.PB_SUPERUSER_PASSWORD;
  if (!email || !password) {
    return NextResponse.json({ message: "Formulir belum dikonfigurasi di server." }, { status: 503 });
  }

  const authResponse = await fetch(`${POCKETBASE_URL}/api/collections/_superusers/auth-with-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identity: email, password }),
    cache: "no-store",
  });
  if (!authResponse.ok) return NextResponse.json({ message: "Formulir belum dapat diproses." }, { status: 502 });

  const { token } = await authResponse.json() as { token: string };
  const recordResponse = await fetch(`${POCKETBASE_URL}/api/collections/inquiries/records`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ name, phone, location, requirement, area_m2: area, detail, status: "new", source_url: request.headers.get("origin") ?? "" }),
    cache: "no-store",
  });

  if (!recordResponse.ok) return NextResponse.json({ message: "Formulir belum dapat diproses." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
