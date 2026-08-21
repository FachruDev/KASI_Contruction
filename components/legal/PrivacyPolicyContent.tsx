import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function PrivacyPolicyContent() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-grow px-6 py-16 md:py-24">
      <div className="mb-16 space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold text-on-surface md:text-5xl">Privacy Policy</h1>
        <p className="text-lg text-on-surface-variant">Last Updated: October 26, 2023</p>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary opacity-80" />
      </div>

      <article className="space-y-12 rounded-xl bg-surface-container-lowest p-8 text-lg leading-relaxed text-on-surface-variant shadow-[0_4px_20px_rgba(46,50,48,0.06)] md:p-12">
        <section className="space-y-4">
          <p className="font-bold text-on-surface">
            At Terra Paving, rooted in quality and community, we are committed to protecting your privacy and ensuring transparency in how we handle your personal information. This Privacy Policy outlines our practices.
          </p>
        </section>

        <section className="space-y-4 rounded-r-lg border-l-4 border-tertiary-container bg-surface-container-low/50 py-4 pr-4 pl-6">
          <div className="mb-2 flex items-center gap-3">
            <MaterialIcon filled className="text-tertiary">dataset</MaterialIcon>
            <h2 className="m-0 font-headline text-2xl font-bold text-on-surface">1. Information Collection</h2>
          </div>
          <p>
            We collect information that you voluntarily provide to us when expressing an interest in obtaining information about our services, when requesting a quote, or otherwise contacting us. The personal information we collect depends on the context of your interactions with us and the choices you make.
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>Contact Data (e.g., name, phone number, email address, physical address)</li>
            <li>Project specifics and site requirements</li>
            <li>Communication history with our team</li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="mb-2 flex items-center gap-3">
            <MaterialIcon filled className="text-primary">monitoring</MaterialIcon>
            <h2 className="m-0 font-headline text-2xl font-bold text-on-surface">2. Use of Data</h2>
          </div>
          <p>
            We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use collected data to:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>Facilitate project estimates and site evaluations.</li>
            <li>Provide ongoing customer support and service updates.</li>
            <li>Send administrative information, such as changes to terms and policies.</li>
            <li>Improve our website performance and user experience through aggregated, anonymous analytics.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="mb-2 flex items-center gap-3">
            <MaterialIcon filled className="text-secondary">cookie</MaterialIcon>
            <h2 className="m-0 font-headline text-2xl font-bold text-on-surface">3. Cookies &amp; Tracking</h2>
          </div>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
          </p>
          <p>
            Cookies help us understand how visitors interact with our digital presence, ensuring a warm, intuitive, and seamless experience tailored to your needs.
          </p>
        </section>

        <section className="space-y-4">
          <div className="mb-2 flex items-center gap-3">
            <MaterialIcon filled className="text-primary">handshake</MaterialIcon>
            <h2 className="m-0 font-headline text-2xl font-bold text-on-surface">4. Third-Party Sharing</h2>
          </div>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data based on the following legal basis:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li><strong>Vendors and Consultants:</strong> We may share data with trusted third-party service providers who perform services for us or on our behalf.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so.</li>
          </ul>
          <p>We do not sell your personal data to third parties.</p>
        </section>

        <section className="mt-8 space-y-4 rounded-lg bg-surface-container p-6">
          <div className="mb-2 flex items-center gap-3">
            <MaterialIcon filled className="text-primary">contact_support</MaterialIcon>
            <h2 className="m-0 font-headline text-2xl font-bold text-on-surface">5. Contact Information</h2>
          </div>
          <p>
            If you have questions or comments about this notice, you may email us or contact us by post. We value the trust you place in Terra Paving and are dedicated to addressing your concerns promptly and thoughtfully.
          </p>
          <div className="mt-4 text-on-surface">
            <p className="font-bold">Terra Paving Compliance Officer</p>
            <p>privacy@terrapaving.com</p>
            <p>1-800-555-PAVE</p>
          </div>
        </section>
      </article>
    </main>
  );
}
