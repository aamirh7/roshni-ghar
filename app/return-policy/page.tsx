export default function ReturnPolicyPage() {
  return (
    <main>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Return Policy
          </p>
          <h1 className="mb-4 text-5xl font-bold">Returns & Exchanges</h1>
          <p className="max-w-2xl text-neutral-300">
            Please review our return and exchange policy before placing your
            order.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 text-neutral-700">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Return Eligibility
            </h2>
            <p className="leading-7">
              Products may be eligible for return or exchange if they are
              damaged, defective, or different from the ordered item at the time
              of delivery.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Inspection at Delivery
            </h2>
            <p className="leading-7">
              Customers are advised to inspect the product at the time of
              delivery. If there is visible damage or an incorrect item, please
              contact us as soon as possible.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Non-Returnable Cases
            </h2>
            <p className="leading-7">
              Products damaged due to misuse, incorrect installation, or
              customer handling may not be eligible for return or exchange.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Contact for Returns
            </h2>
            <p className="leading-7">
              For return or exchange requests, contact us with your order
              details, product photos, and reason for return.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}