export default function ShippingPolicyPage() {
  return (
    <main>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Shipping Policy
          </p>
          <h1 className="mb-4 text-5xl font-bold">Delivery Information</h1>
          <p className="max-w-2xl text-neutral-300">
            Learn how Roshni Ghr handles delivery, shipping charges, and order
            processing across Pakistan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 text-neutral-700">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Standard Delivery
            </h2>
            <p className="leading-7">
              We currently offer standard delivery within Pakistan. A flat
              delivery fee of Rs 300 is applied at checkout.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Delivery Location
            </h2>
            <p className="leading-7">
              Orders are currently accepted for customers located in Pakistan.
              Delivery availability may depend on city, area, and courier
              access.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Order Processing
            </h2>
            <p className="leading-7">
              After an order is placed, our team may contact the customer to
              confirm product availability, address details, and delivery
              information before dispatch.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-neutral-950">
              Cash on Delivery
            </h2>
            <p className="leading-7">
              Cash on Delivery is available. Please keep the exact amount ready
              at the time of delivery.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}