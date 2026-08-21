export type ArticleCardTone = "primary" | "tertiary" | "secondary";

export type ArticleCard = {
  title: string;
  category: string;
  description: string;
  image?: string;
  imageAlt?: string;
  icon?: string;
  tone: ArticleCardTone;
  layout?: "standard" | "wide";
  href: string;
};

export const FEATURED_ARTICLE = {
  title: "The Future of Permeable Paving Systems",
  category: "Industry News",
  description:
    "As climate considerations become integral to hardscaping, permeable paving systems are evolving. We explore the latest organic materials and structural designs that manage runoff while maintaining the warm, grounded aesthetic of traditional stone.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBeehloDy4_IS1QepTWhRJmxM1w0iEcyRpkV0QBzAtlMcu1z20THwL3cnAZpZWhAWOZaIuaphqYiDJLCslfjbDV6pRvWcoAA_BJ50ebAGIVobKgrZg4ojEmwtPV2MieTTLwD4-9bpsymH0mHutZ9eBKOOUa9fPmTGtAyHRFeDrNBHcMNWe0YvpJXUMNlknBXLIISv8H-5Kia-giWissb4hW6d3rj1u1au1O0OWhv5Rraa-nQROY66fK",
  imageAlt:
    "A newly paved asphalt road winding through a lush green forest during warm golden-hour light.",
  href: "#",
} as const;

export const ARTICLE_CARDS: readonly ArticleCard[] = [
  {
    title: "Seasonal Care for Your Concrete Driveway",
    category: "Maintenance Tips",
    description:
      "Transitioning between seasons can stress concrete surfaces. Learn our organic approach to sealing and cleaning that protects your investment without relying on harsh, synthetic chemicals.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtZ_7VpjsAwTkynMx93LXkVwyjpCywPT1ly6K844L-JX2CKlL8NVG9Rt1zeiqIuwhKHCsIoqcLysuHIeGgmAJLz8K23wUKDLVRqirO7mNsD5fPi7vIW8s6pBFuCtX4EtzNfc2FeDu5tn4HgU7WuVVZomXGg9XZDyz0vpBt-EJUecLblcC1V1rVEv5R9SNQpc-H31B6XFyodxHC2k8ukcwK2e2ECl5VoTkF2I3SyauRqm6F5S2kJQ6p",
    imageAlt: "Hands smoothing fresh concrete on a residential driveway.",
    tone: "primary",
    href: "#",
  },
  {
    title: "Blending Hardscapes with Natural Landscapes",
    category: "Design Ideas",
    description:
      "Discover how to select paver colors and patterns that complement your garden's earthy tones. We discuss the philosophy of rooted warmth in exterior spatial planning.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzXRY0B8edKjzjX-S6CLb_Vh3F3NvBAtfP0fGsbAnRoo6doVOBMetyvPuIQd8XXcwsuj5p9-WM79BmblQYQPHE1piG2NiJPgTGXe1Vt-EpqfjWujS84PSS4vbYZyJiZjkYCwlYrTww5v2NSd75bDOxSk648SIWBTzW4lP4DxtDCvlwAheRMWCJ91m_LF_8NwgYEia6kW0XPe0tN8PF9I4tng9KoEF1u2_tpzBfQuGxmlLSS-T4XJFi",
    imageAlt: "A patterned paver patio in an earthy landscaped backyard.",
    tone: "tertiary",
    href: "#",
  },
  {
    title: "Understanding Asphalt Mix Varieties",
    category: "Material Science",
    description:
      "Not all blacktop is created equal. Dive into the composition of different asphalt mixes and how specific aggregates contribute to longevity and a softer, more integrated visual presence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7UiThknrxGbUnX5leftphi-MjsZpYIGOYDjkpekLTttfNazTuG5xEfxLbGZUsPD_do2oPKscl1nm3D9fNif6xq5Pb6LUhU-s5Etrv4fwvA-EB1mwWCCqKa6cRLWykSdLrMEk3tHPbdgyqmt9eWwBOYGkGGFDIkVMi0IrwH3wW1zKbxBAohbzjaW69tAQsgcmjmwADY3Nm-vQtOrBPEYGGV2Eb2z1RQHSDMLDHbE1sXVyRy9w-9HA8",
    imageAlt: "A detailed macro view of warm-toned asphalt aggregate texture.",
    tone: "secondary",
    href: "#",
  },
  {
    title: "Restoring Historic Walkways in the Oakwood District",
    category: "Project Spotlights",
    description:
      "A deep dive into our recent project where we replaced aging concrete with era-appropriate natural stone pavers, bringing a renewed, grounded warmth to a beloved neighborhood.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH5WDQ9TDW5IJt4cBUE3yBjzJ02JbxqVzVdYkt8SZSPWjLDTt_1czvh_b8QH2xKs-6xbDDL20k4FTeR-eYs5HV-2p_wB7d7Rjh2kXswdHmUxiUB21J6sXdYf0AnoYRt7RH5Y28SQavRLZ58PaIKoClKh2EBi21mODXWB51qcbct3bZUEKhKvCKn0K1SYjhGmhUQ2_EFjOkD5260SqiNuRJ7ql8-oOzMQYFV1U9xc04JUG9TDPBnJFW",
    imageAlt: "A paving crew restoring a walkway beneath mature trees.",
    tone: "primary",
    layout: "wide",
    href: "#",
  },
  {
    title: "Eco-Friendly Alternatives in Modern Paving",
    category: "Sustainability",
    description:
      "From recycled aggregates to solar-reflective coatings, explore how Terra Paving is incorporating sustainable practices to reduce environmental impact while maintaining quality.",
    icon: "energy_savings_leaf",
    tone: "tertiary",
    href: "#",
  },
] as const;

export const ASPHALT_DRAINAGE_ARTICLE = {
  slug: "the-importance-of-proper-asphalt-drainage",
  category: "Maintenance Insights",
  date: "Oct 14, 2024",
  title: "The Importance of Proper Asphalt Drainage",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBIojz-eM9kptCAwF5p-qIb74H3npEHhvTy8WyZJay_FoCYL-IEio6jJ-7sLEybAzJd38r2HixhZqOfibar2v8_RhwVsZ9hquSj6OywMgaoohzE2oSerskT3JH39W2YwZVWFgEPdmhPfGiX_jMv898umx1vThA_MkWp22pNvqRZW0pmBHBRM9BmtQvfDIT86LyIQHqkqUqjuKi56V_iW1uvI_MgGmiHXkW_NcmKj7xfHho6lk2zzp3-",
  imageAlt: "Freshly paved asphalt surface with clear drainage slope",
} as const;
