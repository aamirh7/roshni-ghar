export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Privacy Policy
          </p>
          <h1 className="mb-4 text-5xl font-bold">Your Privacy Matters</h1>
          <p className="max-w-2xl text-neutral-300">
            This policy explains how Roshni Ghr collects and uses customer
            information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 text-neutral-700">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Information We Collect
            </h2>
            <p className="leading-7">
              We may collect customer information such as name, phone number,
              email address, shipping address, billing address, and order
              details when an order is placed.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              How We Use Information
            </h2>
            <p className="leading-7">
              Customer information is used to process orders, confirm delivery,
              provide support, and improve the shopping experience.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Payment Information
            </h2>
            <p className="leading-7">
              Roshni Ghr currently supports Cash on Delivery. We do not collect
              online card payment details on this website at this stage.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Data Protection
            </h2>
            <p className="leading-7">
              We aim to keep customer information secure and do not sell
              customer personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Contact
            </h2>
            <p className="leading-7">
              For privacy-related questions, please contact Roshni Ghr through
              the contact page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}