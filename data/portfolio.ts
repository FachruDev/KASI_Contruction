export const PORTFOLIO_FILTERS = [
  "Semua",
  "Jalan & Akses",
  "Perumahan",
  "Area Parkir",
  "Kawasan Usaha",
  "Industri",
] as const;

export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  categories: readonly string[];
  meta?: string;
  location?: string;
  area?: string;
  year?: string;
  beforeAfter?: boolean;
  featured?: "primary" | "secondary";
  showDetails?: boolean;
};

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    title: "Maplewood Estate Drive",
    description:
      "Complete excavation and repaving of a 4,500 sq ft custom driveway, featuring integrated Belgian block curbing and enhanced drainage solutions to integrate seamlessly with the natural slope.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzhZiix9TiCWtZBJ_G4DbOHYHWTpPQPKB3IpwSuJdlzhX3rdci5jx8lulV-m2L-hVwKGJi2UaKFFn3cdmZnT8Z7PbU5nfkwFCVRWJQU88G17191uuKr6krA-OvARiLbUqKYdSvvwCtyn97p8_TxeDAJFsqbJMrPT3MaPhuKLiOmiDoLagfr1qbpqOYVFN7ayHmYITtDMMoWeDouDSvmMKLnSPy7RbB3q05GVkg3kDXOR6cdwQI4LbN",
    imageAlt:
      "A newly paved residential driveway sweeping toward a modern earthy home with green landscaping and natural stone retaining walls.",
    categories: ["Residential"],
    year: "2023",
    location: "Pine Ridge, Valley",
    area: "4,500 sq ft",
    beforeAfter: true,
    featured: "primary",
    showDetails: true,
  },
  {
    title: "Oak Plaza Center",
    description:
      "Full lot milling, resurfacing, and ADA-compliant line striping for a busy retail plaza.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCecW9lg19oVvDtKTUZf1gip-lW_wO5qMf9L8gDNo9r-34gFpPcwooqIDHDeVCsx1zpEy4k87yBFUyZqApZe8A2gwid8c0-Q5VBAuWwN_ebXni-lHYbfo6S2e6Fp4XzgYF2tRjByXn8259Q7xVcdVfMMKRGMzBD25WHcA2Jxbciq0EaiiBue2kHALnRto1pIzEEKsMNMWYT2zrBQ8Wo3WdR_MNW5Xr5op0T860gbb9SXp2QzEAs4Cfr",
    imageAlt:
      "A newly paved commercial parking lot with crisp parking lines outside a modern office building.",
    categories: ["Commercial"],
    meta: "25,000 sq ft • 2024",
  },
  {
    title: "County Route 9 Patching",
    description:
      "Targeted deep patching and crack sealing to extend the lifespan of a high-traffic municipal road.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH51qCkNxgBXmt66iH9UMmRN9WSvfi5mmx-Z2Axf52TtBXPNlN_VgMat8ZI2X6hVjcHJfPENI2a6xGuuCZA_ozOC7lX6PYUA_x452LnL_opIPfq5xoitTvps3lUQBV-D_ptgTcPS3fGXvUwyLOJJ6Suw0-XGbHZMd61Srmy4xec6ZvfwS9vnOeySyMSlv1D61jODdoc33D06CyqHLtR5jqln4DAOAaZLAYA4Gq43_MAA3UI0J1K9Zw",
    imageAlt:
      "A recently repaired municipal roadway showing precise new asphalt patching against an older surface.",
    categories: ["Road Repair"],
    meta: "Linear Mile • 2023",
  },
  {
    title: "Apex Logistics Hub",
    description:
      "Heavy-duty asphalt installation designed to withstand constant high-weight trailer traffic.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhDOcNBZtJdcWDPsfME6yqp-ep0kvHDdORftgO6tu9D7OESwtDTXnSTZygI33Wp5SgDdKg_xXYJOyBYfu43y8-uVoW56EMmKa6c4giqfJjys0W_NZxO_2jcbnM4QhuKxcr-_zEo1D6UEliE0m0b0rS9z2WMj8aixCFSSfi1ApkX4pS8RAeox-ue4iuPhlAeGCarHn05jgad9uQtHfKySKXueimuGhUFzuv7XUNj2byNZj9OHU45LTd",
    imageAlt:
      "A large industrial loading dock with a sprawling newly paved heavy-duty asphalt surface.",
    categories: ["Industrial"],
    meta: "50,000 sq ft • 2022",
    beforeAfter: true,
  },
  {
    title: "Heritage Walkway & Patio",
    description:
      "A specialized project utilizing stamped and colored asphalt to replicate the historic look of cobblestone, providing a durable yet aesthetically pleasing entranceway that honors the neighborhood's character.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1MeIhzENE6dwupf67zWua-_zxRyAdmFHdgBNf0HZMXXzhk7nUNW-CNaHeITolKxu2LLhjkdRY1IKswNaw10XToGx-N_Q43VF87rKKLKjmoeK9Kb-wH7uasocJnVPtQPUsAX5Q7v7Wwfw4IVcYqJWvbpkRGJE-LESn5PjV5y3nvW00IO_Hl2yMWlmbL8oo7t1_wxBmJBKoQUhIVBve299YMbZ5ODi8XisuagagHzKy9HyzsQ3Qn8rK",
    imageAlt:
      "Decorative stamped asphalt on a residential walkway and patio with warm stone-like tones and garden beds.",
    categories: ["Residential", "Decorative"],
    location: "Historic District",
    area: "1,200 sq ft",
    featured: "secondary",
  },
] as const;
