export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits: readonly string[];
  idealFor: string;
  price: string;
};

export const SERVICES: readonly ServiceItem[] = [
  {
    title: "Road Paving",
    description:
      "Comprehensive asphalt paving for public and private roads, ensuring smooth, durable, and safe travel surfaces.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQMP0Ii9f_lC3doDS0xbPUVNJC4MuCF9j3-XeiRIE1QXDdTfNYMStGPeWiVqoQKwR6LE8fcP9dMC2oKOyh6VIkuxBPn4A7lfg3pNDa8fcSJhsL5XLRjE8HL8YFuTDzZViCmv7XBXPpE0ZYkc8dtvf280_PQAz6wxmGZ--DmCjC2n00XKvmggwg1PoGsAa2OOOJoLA5DN9QjTXH_Zt1qWK3dTqqwn30byuULfF8Fck_BTowCkd1cOAt",
    imageAlt:
      "A freshly paved, smooth asphalt road winding gently through a dense, green forest. The scene is illuminated by warm, dappled sunlight filtering through the canopy, highlighting the rich texture of the new road surface. The overall mood is grounded, earthy, and peaceful, showcasing the harmony between human infrastructure and natural surroundings in a warm, inviting style.",
    benefits: ["High durability", "Smooth ride quality"],
    idealFor: "Municipal roads, large developments",
    price: "Rp125,000",
  },
  {
    title: "Residential Road Paving",
    description:
      "Tailored paving solutions for neighborhoods and private estates, focusing on aesthetics and longevity.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBj4C7LF3BGadNynvY8yz8xj_fE8zh9kmcWTn_CtAdLTmyCFZiFhGoMXxGKCS3oUa22VPpJci4my-fRbnXpc_96v2kWXb2Zn5kFYxtBpYrCWl2W1ZUWCvvqV9rDohWRjgDDiBUqSeSn5spO9qmwZKAkXzCVxg5ouhu5WohlpLnEmLv4jSvOSkfApCObPYcVHPGIUOfEZcm7NINBn7-3GCuYkwZdougnTMPbH1MtfBZD37mRtVILv8HQ",
    imageAlt:
      "A beautifully paved, sweeping residential driveway leading up to a warm, inviting home. The asphalt is pristine and dark, contrasting nicely with lush green landscaping and subtle, earthy-toned retaining walls. Shot during golden hour, the soft, warm light emphasizes a calm, grounded, and welcoming neighborhood atmosphere.",
    benefits: ["Enhanced curb appeal", "Quiet surface"],
    idealFor: "Subdivisions, private driveways",
    price: "Rp110,000",
  },
  {
    title: "Parking Lot Paving",
    description:
      "Design and construction of durable commercial parking areas that can handle high traffic volumes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGNAbFEFrobZ9PQpggaQWG5AR9uF7e-vxO_3_gSF4d7HM_Xv9DxjLcHrNwsHqQspEz-bRvp2MT2-TUUrwo3yWC7BKawrCkTrM3yzsqsWHKAp63PimfU56YqfNSeP50JB-OWCAyLaX0oy1BS9lPQ8D3a62-flxlX7Jbo0U8fCFNPi844E3YVp-rcuk6435oOIHiO0OPvMhOoCbQtAXFytdPlzY_BJave_VgfHWjE9VfkGH2HGAA0ohj",
    imageAlt:
      "A newly finished, spacious commercial parking lot with crisp, clean white painted lines against the deep black of fresh asphalt. The setting is surrounded by soft, organic landscaping with mature trees casting gentle shadows. The lighting is bright but soft, conveying a clean, organized, and high-quality commercial environment rooted in natural surroundings.",
    benefits: ["Optimized layout", "Heavy load capacity"],
    idealFor: "Retail centers, office complexes",
    price: "Rp130,000",
  },
  {
    title: "Industrial Area Paving",
    description:
      "Heavy-duty asphalt solutions engineered specifically to withstand the extreme demands of industrial operations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-FcORvuTxlpfbimIsND7cimTj6e4yeph4MC0RgpQ2twfOtCOXdr5LggQiUKLG06p5T_S76Vxn5v4Jeha-f5KYVXD91qAh0lFDBIXh45bJg1LWgrmox1tYhZLpp9VhU_WjHnUoejQpw8ngENxUDJxSlbzTpr86-kMKvu_synMpN0dq3YpofIj4Zv8_ooku1f-UQf1PWXoLc3kFVSVBF3QH3_5NXVjaQn_QUTM-qKfI2TqzX0P5R6ID",
    imageAlt:
      "A heavy-duty, exceptionally thick asphalt surface being laid down in an expansive industrial park setting. The image highlights the robust texture of the pavement, capable of supporting heavy machinery. The atmosphere is industrious yet maintains a grounded, earthy color palette with warm undertones, avoiding stark, sterile industrial cliches.",
    benefits: ["Maximum load bearing", "Chemical resistance options"],
    idealFor: "Factories, logistics hubs",
    price: "Rp150,000",
  },
  {
    title: "Road Repair & Rehab",
    description:
      "Targeted patching, resurfacing, and comprehensive rehabilitation to extend the life of existing pavements.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNwdzMrEB-RaBFjEf2MT2mfM7tfsHipZ2li_wYvjZNZw38w3D_LfyXdhsdV_D38Ft8859nGE55zDiRhFFGvSBxpmeQFu7t6B5fVLgc9yelRX2NCFMFKJrr-uCxlv2BXVj4cbgF7YbDB0NtfrprxSzZ5Qe3Xq4QV7FXWWRyvGpQO298meXYF3PdVcn6Qy-_ansTDCGjtwY4HKAz94J9Zq1NlEMsmjNkoiS_UNZ-wCfK1Ar2KZ54ooQt",
    imageAlt:
      "A close-up view of a beautifully executed asphalt patch on an older road, showing the seamless integration between the old, weathered surface and the new, dark repair. The surrounding environment features soft, earthy tones with a focus on the texture of the materials. The mood is constructive, careful, and focused on restoration.",
    benefits: ["Cost-effective", "Prevents further damage"],
    idealFor: "Aging roads, pothole repair",
    price: "Rp85,000",
  },
  {
    title: "Hot Mix Asphalt",
    description:
      "Premium quality hot mix asphalt supply and installation for superior weather resistance and durability.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWHHpwRMEoHzIrtjh8h26FouExet-1UcY7djM1Mu5syLP_VQmQn4OneWZ1I9zgoDsqqp-e2FmsW8E59bipN0khfXLkXB4Oyuw39KHmTp1GICjZEfQme5vXTKOYtBpzma1AcBBwJfqvad27rByvQzZoKL8ko4OKLFPEgkMIT8pmXrNXpBbqGyLeJE5lz7xir_UvQOeSfHJ1ESp6L9SjKwNlMLbD3Xgr5VK4Ks3B0BppAAVjb0DZHR73",
    imageAlt:
      "A stylized, artistic shot of steaming hot mix asphalt being poured from a commercial truck into a paver. The steam rising catches warm, golden sunlight, highlighting the rich, dark, gravelly texture of the material. The image avoids harsh industrial glare, instead focusing on the earthy, elemental nature of the paving process in a warm, cinematic style.",
    benefits: ["Weather resistant", "Fast curing time"],
    idealFor: "Main arteries, highways",
    price: "Rp140,000",
  },
] as const;
