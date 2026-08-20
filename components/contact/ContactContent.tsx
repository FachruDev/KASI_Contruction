import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export function ContactContent() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-balance font-headline text-5xl font-bold text-on-background">
          Let&apos;s Build Something Solid.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
          Whether you&apos;re planning a new driveway, a commercial parking lot, or need repairs,
          our team is ready to discuss your project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  );
}
