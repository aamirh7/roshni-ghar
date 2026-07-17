import type { ReactNode } from "react";

const contactDetails = {
  phone: "+92 300 1234567",
  phoneLink: "+923001234567",
  email: "faqdadasaslam@gmail.com",
  location: "Lahore, Pakistan",
};

const contactCards = [
  {
    title: "Call Us",
    value: contactDetails.phone,
    description: "Speak directly with our support team.",
    href: `tel:${contactDetails.phoneLink}`,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 4H9L11 9L8.5 10.5C9.6 12.8 11.2 14.4 13.5 15.5L15 13L20 15V19C20 20.1 19.1 21 18 21C9.72 21 3 14.28 3 6C3 4.9 3.9 4 5 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Email Us",
    value: contactDetails.email,
    description: "Send product or order-related questions.",
    href: `mailto:${contactDetails.email}`,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M4 7L12 13L20 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Our Location",
    value: contactDetails.location,
    description: "Serving customers across Pakistan.",
    href: "#location",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.58 7.58 3 12 3C16.42 3 20 5.58 20 10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        <circle
          cx="12"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: "Delivery Support",
    value: "Nationwide Delivery",
    description: "Standard delivery charges are Rs 300.",
    href: "/shipping-policy",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 7H15V17H3V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        <path
          d="M15 10H19L22 13V17H15V10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        <circle
          cx="7"
          cy="18"
          r="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="18"
          cy="18"
          r="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How can I confirm product availability?",
    answer:
      "Contact us through phone or email with the product name or SKU. Our team will confirm stock availability for you.",
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Yes, Cash on Delivery is available for orders delivered across supported locations in Pakistan.",
  },
  {
    question: "What are the standard delivery charges?",
    answer:
      "Our standard delivery charge is Rs 300. Charges may vary for large, fragile or custom lighting products.",
  },
  {
    question: "Can I ask for help selecting a light?",
    answer:
      "Yes. Share your room type, size and preferred style, and our team will help you choose suitable lighting products.",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#090909] text-white">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#c89b3c]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[#c89b3c]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#d7ad4e]">
              Contact Us
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Let&apos;s Talk About Your Lighting Needs
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-neutral-300">
              Have questions about products, delivery, orders or lighting
              selection? Our team is ready to guide you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${contactDetails.phoneLink}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white"
              >
                Call Now

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={`mailto:${contactDetails.email}`}
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b78316]">
              Contact Information
            </p>

            <h2 className="text-3xl font-bold text-neutral-950 md:text-4xl">
              We&apos;re Here to Help
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-600">
              Choose the most convenient way to connect with Roshni Ghr for
              product guidance, order updates and delivery support.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-3xl border border-[#eadfce] bg-white p-7 shadow-[0_12px_35px_rgba(63,43,15,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#c89b3c] hover:shadow-[0_22px_50px_rgba(63,43,15,0.14)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#c89b3c] opacity-0 transition group-hover:opacity-100" />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89b3c]/12 text-[#b78316] transition group-hover:bg-[#c89b3c] group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mb-2 text-xl font-bold text-neutral-950">
                  {item.title}
                </h3>

                <p className="mb-3 break-words text-sm font-semibold text-[#b78316]">
                  {item.value}
                </p>

                <p className="text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  View Details
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT AND INFORMATION */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-[#eadfce] bg-[#fffaf4] p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b78316]">
              Need Assistance?
            </p>

            <h2 className="mb-5 text-3xl font-bold text-neutral-950 md:text-4xl">
              Get Expert Guidance Before You Order
            </h2>

            <p className="mb-7 max-w-2xl leading-7 text-neutral-700">
              Whether you need help choosing the right chandelier, wall lamp,
              hanging light or outdoor light, our team will guide you according
              to your space and requirements.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <SupportItem title="Product Guidance">
                Help selecting lighting according to your room and interior.
              </SupportItem>

              <SupportItem title="Order Confirmation">
                Assistance with product availability and order details.
              </SupportItem>

              <SupportItem title="Delivery Updates">
                Get information regarding shipping and expected delivery.
              </SupportItem>

              <SupportItem title="Custom Requirements">
                Discuss special lighting needs for homes and businesses.
              </SupportItem>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#090909] p-8 text-white md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c89b3c]/20 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c89b3c]/40 bg-[#c89b3c]/10 text-[#d7ad4e]">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 5H20V16H8L4 20V5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M8 9H16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M8 12H13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h2 className="mb-5 text-3xl font-bold">
                Quick Contact Information
              </h2>

              <p className="mb-8 leading-7 text-neutral-300">
                Contact us during business hours for faster assistance with
                products, orders and delivery information.
              </p>

              <div className="space-y-5 border-t border-white/10 pt-7">
                <InfoRow label="Phone" value={contactDetails.phone} />

                <InfoRow label="Email" value={contactDetails.email} />

                <InfoRow label="Payment" value="Cash on Delivery" />

                <InfoRow label="Delivery" value="Standard charges Rs 300" />
              </div>

              <a
                href={`mailto:${contactDetails.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white"
              >
                Contact Our Team
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section
        id="location"
        className="border-y border-[#eadfce] bg-[#fff8ef]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b78316]">
                Our Location
              </p>

              <h2 className="text-3xl font-bold text-neutral-950 md:text-4xl">
                Find Us in Lahore
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-neutral-600 md:text-right">
              We are based in Lahore and provide premium lighting products to
              customers across Pakistan.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-[#dfc99f] bg-white shadow-[0_18px_50px_rgba(52,35,10,0.12)] lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89b3c]/15 text-[#b78316]">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.58 7.58 3 12 3C16.42 3 20 5.58 20 10Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-neutral-950">
                Roshni Ghr
              </h3>

              <p className="mb-6 leading-7 text-neutral-600">
                Lahore, Pakistan
                <br />
                Serving residential and commercial customers nationwide.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Lahore+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c89b3c] hover:text-black"
              >
                Open in Google Maps
                <span>→</span>
              </a>
            </div>

            <div className="min-h-[380px] bg-neutral-200">
              <iframe
                title="Roshni Ghr location in Lahore"
                src="https://www.google.com/maps?q=Lahore%20Pakistan&z=12&output=embed"
                className="h-full min-h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b78316]">
              Common Questions
            </p>

            <h2 className="text-3xl font-bold text-neutral-950 md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-600">
              Find quick answers regarding products, payment and delivery.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-[#eadfce] bg-[#fffaf4] p-6 transition open:border-[#c89b3c] open:bg-white open:shadow-lg"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-neutral-950 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#b78316]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d8b35d] text-[#b78316] transition group-open:rotate-45 group-open:bg-[#c89b3c] group-open:text-white">
                    +
                  </span>
                </summary>

                <p className="ml-10 mt-4 max-w-3xl leading-7 text-neutral-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 pb-20">
        <div className="relative mx-auto overflow-hidden rounded-3xl bg-[#090909] px-8 py-14 text-center text-white shadow-[0_22px_60px_rgba(20,15,7,0.18)] md:px-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#c89b3c]/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d7ad4e]">
              Still Need Help?
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Let Us Help You Find the Perfect Lighting
            </h2>

            <p className="mx-auto mb-8 max-w-2xl leading-7 text-neutral-300">
              Contact our team for product recommendations, availability and
              delivery details.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${contactDetails.phoneLink}`}
                className="rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white"
              >
                Call Our Team
              </a>

              <a
                href={`mailto:${contactDetails.email}`}
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SupportItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#eadfce] bg-white p-5 transition hover:border-[#c89b3c] hover:shadow-md">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#c89b3c]/15 text-sm font-bold text-[#b78316]">
        ✓
      </div>

      <h3 className="mb-2 font-bold text-neutral-950">{title}</h3>

      <p className="text-sm leading-6 text-neutral-600">{children}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center sm:gap-6">
      <span className="text-sm text-neutral-500">{label}</span>

      <span className="break-all text-sm font-semibold text-white sm:text-right">
        {value}
      </span>
    </div>
  );
}