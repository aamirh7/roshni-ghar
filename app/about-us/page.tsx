import CollectionSlider from "@/components/CollectionSlider";

const values = [
  {
    number: "01",
    title: "Our Mission",
    img: "/about-mission.webp",
    text: "To provide modern, energy-efficient and reliable lighting solutions that enhance every space.",
  },
  {
    number: "02",
    title: "Our Vision",
    img: "/about-vision.webp",
    text: "To become Pakistan's leading lighting brand, recognised for quality, innovation and service.",
  },
  {
    number: "03",
    title: "Quality Products",
    img: "/about-quality.webp",
    text: "To deliver premium lighting products with dependable quality, performance and lasting value.",
  },
];

const stats = [
  {
    value: "5+",
    title: "Years Experience",
    description: "Serving customers with dedication",
  },
  {
    value: "500+",
    title: "Products",
    description: "Modern lighting options",
  },
  {
    value: "1000+",
    title: "Happy Customers",
    description: "Across homes and businesses",
  },
  {
    value: "150+",
    title: "Projects Delivered",
    description: "Residential and commercial",
  },
];

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate min-h-[460px] overflow-hidden bg-neutral-950 md:min-h-[500px]">
        <img
          src="/about-hero.webp"
          alt="Premium lighting showroom"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,rgba(0,0,0,0.35))]" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl items-center justify-center px-6 py-20 text-center text-white md:min-h-[500px]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#e7c56a]">
              Discover Our Story
            </p>

            <h1 className="mb-5 text-5xl font-bold leading-tight md:text-6xl">
              About Us
            </h1>

            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-[#c89b3c]" />

            <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-100">
              Bringing stylish, reliable and high-quality lighting solutions to
              homes and businesses across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="border-b border-[#efe4d1] bg-gradient-to-br from-[#fff8ef] via-[#fffdf9] to-[#fff8ef]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border border-[#d8ae52] md:block" />

            <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_24px_70px_rgba(40,28,12,0.18)]">
              <img
                src="/about-welcome.webp"
                alt="Roshni Ghr lighting collection"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 rounded-full bg-[#c89b3c]/20 blur-2xl md:block" />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b3c]">
              Welcome to Roshni Ghr
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-neutral-950">
              Lighting That Brings Beauty and Comfort to Every Space
            </h2>

            <p className="mb-4 text-base leading-7 text-neutral-700">
              Roshni Ghr is your trusted destination for modern, reliable and
              premium lighting solutions. We provide stylish lights designed to
              enhance homes, offices and commercial spaces.
            </p>

            <p className="text-base leading-7 text-neutral-700">
              Our mission is to bring comfort, elegance and beautiful lighting
              experiences to every space through carefully selected products,
              dependable quality and customer-focused service.
            </p>

            <div className="mt-8 flex gap-4 rounded-2xl border border-[#e3bd69] bg-white p-6 shadow-[0_14px_40px_rgba(70,49,18,0.10)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c89b3c]/15 text-[#c89b3c]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 18H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M10 22H14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M8.5 15C6.95 13.92 6 12.12 6 10C6 6.69 8.69 4 12 4C15.31 4 18 6.69 18 10C18 12.12 17.05 13.92 15.5 15C14.61 15.62 14 16.55 14 17H10C10 16.55 9.39 15.62 8.5 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-1 text-lg font-bold text-[#b78316]">
                  Elegant Lighting. Trusted Service.
                </h3>

                <p className="text-sm leading-6 text-neutral-600">
                  Quality products, honest service and complete customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION AND QUALITY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b3c]">
              What Defines Us
            </p>

            <h2 className="text-3xl font-bold text-neutral-950 md:text-4xl">
              Built on Trust, Quality and Vision
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="group relative h-[330px] overflow-hidden rounded-3xl border border-[#eadfce] bg-[#fff8ef] shadow-[0_14px_40px_rgba(40,28,12,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(40,28,12,0.16)]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf2]/95 via-[#fffaf2]/80 to-[#fffaf2]/20" />

                <div className="relative z-10 flex h-full max-w-[76%] flex-col p-7">
                  <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#c89b3c] text-sm font-bold text-white shadow-lg">
                    {item.number}
                  </span>

                  <h3 className="mb-4 text-2xl font-bold text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-neutral-700">
                    {item.text}
                  </p>

                  <div className="mt-auto h-1 w-14 rounded-full bg-[#c89b3c]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#efe4d1] bg-[#fff8ef]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-14 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-[#dfb85f] bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#c89b3c]" />

              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#c89b3c]/15 text-[#c89b3c]">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3L14.4 8.1L20 8.8L15.9 12.7L17 18.3L12 15.5L7 18.3L8.1 12.7L4 8.8L9.6 8.1L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mb-1 text-4xl font-bold leading-none text-[#c89b3c]">
                {item.value}
              </h3>

              <p className="mt-3 text-base font-bold text-neutral-950">
                {item.title}
              </p>

              <p className="mt-2 text-xs leading-5 text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION SLIDER */}
      <section className="bg-white">
        <CollectionSlider />
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20">
        <div className="relative mx-auto min-h-[380px] max-w-7xl overflow-hidden rounded-3xl bg-neutral-950 shadow-[0_25px_70px_rgba(20,15,8,0.22)]">
          <img
            src="/about-cta.webp"
            alt="Explore premium lighting collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />

          <div className="relative z-10 flex min-h-[380px] items-center px-8 py-14 text-white md:px-14 lg:px-16">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#e7c56a]">
                Find Your Perfect Light
              </p>

              <h2 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
                Explore Lighting That Transforms Your Space
              </h2>

              <p className="mb-8 max-w-xl text-base leading-7 text-neutral-200">
                Browse our collection and discover elegant lighting for your
                home, office, lounge, garden or commercial space.
              </p>

              <a
                href="/shop"
                className="inline-flex items-center gap-3 rounded-full bg-[#c89b3c] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black"
              >
                Shop Collection

                <svg
                  width="18"
                  height="18"
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
          </div>
        </div>
      </section>
    </main>
  );
}