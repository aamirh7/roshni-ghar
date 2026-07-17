import type { ReactNode } from "react";

const contactInfo = {
  phone: "+92 300 1234567",
  phoneLink: "+923001234567",
  email: "info@roshnighr.com",
  location: "Lahore, Pakistan",
};

const shopLinks = [
  {
    label: "Chandeliers",
    href: "/collections/chandeliers",
  },
  {
    label: "Wall Lamps",
    href: "/collections/wall-lamps",
  },
  {
    label: "Hanging Lights",
    href: "/collections/hanging-lights",
  },
  {
    label: "Outdoor Lights",
    href: "/collections/outdoor-lights",
  },
];

const supportLinks = [
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "Shipping Policy",
    href: "/shipping-policy",
  },
  {
    label: "Return Policy",
    href: "/return-policy",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#c89b3c]/30 bg-[#090909] text-white">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#c89b3c]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#c89b3c]/10 blur-3xl" />

      {/* Service highlights */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-7 sm:grid-cols-3">
          {/* Nationwide delivery */}
          <div className="flex items-center gap-4 sm:justify-self-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c89b3c]/40 bg-[#c89b3c]/10 text-[#d7ad4e]">
              <svg
                width="21"
                height="21"
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
            </div>

            <div>
              <p className="font-semibold text-white">Nationwide Delivery</p>

              <p className="mt-1 text-sm text-neutral-400">
                Shipping across Pakistan
              </p>
            </div>
          </div>

          {/* Cash on delivery */}
          <div className="flex items-center gap-4 sm:justify-self-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c89b3c]/40 bg-[#c89b3c]/10 text-[#d7ad4e]">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20V18H4V7Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                <path
                  d="M8 7V5H16V7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M8 12H16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <p className="font-semibold text-white">Cash on Delivery</p>

              <p className="mt-1 text-sm text-neutral-400">
                Pay safely at your doorstep
              </p>
            </div>
          </div>

          {/* Customer support */}
          <div className="flex items-center gap-4 sm:justify-self-end">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c89b3c]/40 bg-[#c89b3c]/10 text-[#d7ad4e]">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12V17C20 18.1 19.1 19 18 19H16V13H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M4 13H8V19H6C4.9 19 4 18.1 4 17V13Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                <path
                  d="M16 19C16 20.1 15.1 21 14 21H12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <p className="font-semibold text-white">Customer Support</p>

              <p className="mt-1 text-sm text-neutral-400">
                Help whenever you need it
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto grid w-full max-w-7xl gap-x-12 gap-y-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div className="lg:justify-self-start">
          <a href="/" className="inline-flex">
            <div className="overflow-hidden rounded-2xl bg-[#fff8ef] p-2 shadow-lg shadow-black/20">
              <img
                src="/logo.jpeg"
                alt="Roshni Ghar"
                className="h-24 w-auto object-contain"
              />
            </div>
          </a>

          <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
            Premium lighting solutions for homes, offices, lounges, gardens,
            and commercial interiors across Pakistan.
          </p>

          <a
            href="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c89b3c]/50 px-5 py-2.5 text-sm font-semibold text-[#e0b957] transition hover:border-[#c89b3c] hover:bg-[#c89b3c] hover:text-black"
          >
            Explore Collection

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
        </div>

        {/* Shop column */}
        <div className="lg:justify-self-center">
          <FooterHeading>Shop</FooterHeading>

          <ul className="space-y-3">
            {shopLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition duration-200 hover:translate-x-1 hover:text-[#d7ad4e]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#c89b3c] opacity-60 transition group-hover:opacity-100" />

                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer support column */}
        <div className="lg:justify-self-center">
          <FooterHeading>Customer Support</FooterHeading>

          <ul className="space-y-3">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition duration-200 hover:translate-x-1 hover:text-[#d7ad4e]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#c89b3c] opacity-60 transition group-hover:opacity-100" />

                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className="w-full lg:max-w-[290px] lg:justify-self-end">
          <FooterHeading>Contact Us</FooterHeading>

          <div className="space-y-5">
            {/* Phone */}
            <a
              href={`tel:${contactInfo.phoneLink}`}
              className="group flex items-start gap-3"
            >
              <ContactIcon>
                <svg
                  width="18"
                  height="18"
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
              </ContactIcon>

              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">
                  Phone
                </p>

                <p className="mt-1 text-sm text-neutral-300 transition group-hover:text-[#d7ad4e]">
                  {contactInfo.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="group flex items-start gap-3"
            >
              <ContactIcon>
                <svg
                  width="18"
                  height="18"
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
              </ContactIcon>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-neutral-500">
                  Email
                </p>

                <p className="mt-1 break-all text-sm text-neutral-300 transition group-hover:text-[#d7ad4e]">
                  {contactInfo.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-3">
              <ContactIcon>
                <svg
                  width="18"
                  height="18"
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
              </ContactIcon>

              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">
                  Location
                </p>

                <p className="mt-1 text-sm text-neutral-300">
                  {contactInfo.location}
                </p>
              </div>
            </div>

            {/* Shipping information */}
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm font-semibold text-white">
                Standard Delivery
              </p>

              <p className="mt-1 text-sm leading-6 text-neutral-400">
                Flat shipping charges:{" "}
                <span className="font-semibold text-[#d7ad4e]">Rs 300</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-neutral-500 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-neutral-300">Roshni Ghr</span>. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href="/privacy-policy"
              className="transition hover:text-[#d7ad4e]"
            >
              Privacy
            </a>

            <a
              href="/return-policy"
              className="transition hover:text-[#d7ad4e]"
            >
              Returns
            </a>

            <a
              href="/shipping-policy"
              className="transition hover:text-[#d7ad4e]"
            >
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold text-white">{children}</h3>

      <div className="mt-3 h-0.5 w-10 rounded-full bg-[#c89b3c]" />
    </div>
  );
}

function ContactIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c89b3c]/30 bg-[#c89b3c]/10 text-[#d7ad4e]">
      {children}
    </span>
  );
}