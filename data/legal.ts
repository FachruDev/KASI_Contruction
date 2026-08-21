export type TermsSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  emphasizedParagraph?: string;
};

export const TERMS_SECTIONS: readonly TermsSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By engaging Terra Paving for services, requesting a quote, or utilizing our website, you expressly agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must refrain from using our services and website.",
      "We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services following the posting of revised terms means that you accept and agree to the changes.",
    ],
  },
  {
    id: "services",
    title: "2. Service Descriptions",
    paragraphs: [
      "Terra Paving provides professional paving, hardscaping, and related foundational services. While we strive to present accurate descriptions, timelines, and material specifications, all project details are subject to site conditions, weather permitting, and material availability.",
      "Quotes provided are estimates based on initial assessments. Final costs may vary if unforeseen structural or geological issues arise once excavation or work commences. Any substantial deviations from the original estimate will be communicated and must be approved via a written change order before proceeding.",
    ],
  },
  {
    id: "responsibilities",
    title: "3. User Responsibilities",
    paragraphs: ["As a client of Terra Paving, you are responsible for:"],
    bullets: [
      "Ensuring clear access to the work site for our crew and heavy machinery.",
      "Obtaining necessary permissions from neighbors or Homeowner Associations if the work impacts shared boundaries or common aesthetic guidelines.",
      "Disclosing any known underground utilities, sprinkler systems, or structural hazards prior to the commencement of digging or paving.",
      "Providing timely payments according to the agreed-upon schedule outlined in your specific contract.",
    ],
  },
  {
    id: "liability",
    title: "4. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, Terra Paving shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:",
    ],
    bullets: [
      "Your access to or use of or inability to access or use the services.",
      "Any conduct or content of any third party regarding the services.",
      "Pre-existing geological instability, soil subsidence, or sinkholes that were not reasonably detectable prior to project commencement.",
    ],
    emphasizedParagraph:
      "In no event shall Terra Paving's total liability to you for all damages, losses, and causes of action exceed the amount paid by you, if any, for accessing or receiving the specific services in dispute.",
  },
  {
    id: "governing",
    title: "5. Governing Law",
    paragraphs: [
      "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Terra Paving operates, without regard to its conflict of law provisions.",
      "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.",
    ],
  },
] as const;
