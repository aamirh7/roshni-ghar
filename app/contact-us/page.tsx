export default function ContactPage() {
  return (
    <main>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Contact Us
          </p>
          <h1 className="mb-4 text-5xl font-bold">Get in Touch</h1>
          <p className="max-w-2xl text-neutral-300">
            Have questions about products, delivery, or orders? Contact Roshni
            Ghr for support.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-8">
          <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>

          <div className="space-y-4 text-neutral-700">
            <p>
              <strong>Location:</strong> Lahore, Pakistan
            </p>
            <p>
              <strong>Email:</strong> faqdadasaslam@gmail.com
            </p>
            <p>
              <strong>Payment:</strong> Cash on Delivery available
            </p>
            <p>
              <strong>Delivery:</strong> Standard delivery Rs 300
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-8">
          <h2 className="mb-4 text-2xl font-bold">Need Help?</h2>

          <p className="mb-6 leading-7 text-neutral-700">
            For order confirmation, product details, delivery updates, or custom
            lighting requirements, contact us through email. Our team will guide
            you with available products and delivery options.
          </p>

          <a
            href="mailto:faqdadasaslam@gmail.com"
            className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Send Email
          </a>
        </div>
      </section>
    </main>
  );
}