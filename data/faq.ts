export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSection = {
  title: string;
  items: FaqItem[];
};

export const FAQ_SECTIONS: FaqSection[] = [
  {
    title: "Pricing & Estimates",
    items: [
      {
        question: "What is the average cost per m2 for paving?",
        answer:
          "The cost per square meter varies depending on the material (asphalt, concrete, or block paving), the condition of the existing surface, and the total area. Generally, prices range from £40 to £120 per m2. We recommend requesting a free site survey for an accurate, tailored quote.",
      },
      {
        question: "What factors affect the final price?",
        answer:
          "Key factors include ground preparation requirements (excavation depth, sub-base condition), drainage needs, accessibility to the site for heavy machinery, choice of top surface material, and any custom edging or design features.",
      },
      {
        question: "Are site surveys free?",
        answer:
          "Yes, we offer complimentary, no-obligation site surveys. Our experts will assess your current surface, discuss your requirements, take precise measurements, and provide a detailed written estimate.",
      },
    ],
  },
  {
    title: "Process & Materials",
    items: [
      {
        question: "How long does the paving process usually take?",
        answer:
          "A standard residential driveway usually takes 2 to 4 days from excavation to final rolling. Larger commercial projects will take longer. We always provide a clear timeline during the quoting phase and strive to minimize disruption.",
      },
      {
        question: "What is the difference between Hot Mix Asphalt and other options?",
        answer:
          "Hot Mix Asphalt is heated to high temperatures before application, making it highly durable and flexible once cooled, ideal for driveways and roads. Alternatives like Tar & Chip offer a more rustic look and better traction, while block paving provides superior aesthetic versatility but requires more intensive labor.",
      },
      {
        question: "What is the typical lifespan of a new paved surface?",
        answer:
          "With proper installation and maintenance, an asphalt driveway can last 15-20 years, while concrete and block paving can last 25 years or more. Regular sealcoating and prompt minor repairs extend this lifespan significantly.",
      },
    ],
  },
];
