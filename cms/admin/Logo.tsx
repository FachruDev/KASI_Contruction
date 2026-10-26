/** Wordmark on the admin login screen. Inline styles: the admin does not load the site's Tailwind CSS. */
export function Logo() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <span style={{ background: "#fb6701", borderRadius: 999, height: 14, width: 14 }} />
      <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.04em" }}>KASI</span>
      <span style={{ fontSize: 13, opacity: 0.55, paddingTop: 10 }}>CMS</span>
    </div>
  );
}
