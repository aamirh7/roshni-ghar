import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/woocommerce";
import HeroSlider from "@/components/HeroSlider";

const categories = [
  {
    name: "Chandeliers",
    href: "/collections/chandeliers",
    description: "Luxury ceiling lights for premium interiors.",
    buttonText: "Shop Chandeliers",
  },
  {
    name: "Wall Lamps",
    href: "/collections/wall-lamps",
    description: "Elegant wall lighting for bedrooms and lounges.",
    buttonText: "Shop Wall Lamps",
  },
  {
    name: "Hanging Lights",
    href: "/collections/hanging-lights",
    description: "Decorative pendant lights for modern spaces.",
    buttonText: "Shop Hanging Lights",
  },
  {
    name: "Outdoor Lights",
    href: "/collections/outdoor-lights",
    description: "Durable lighting for gardens, patios, and entrances.",
    buttonText: "Shop Outdoor Lights",
  },
];

const features = [
  {
    title: "Nationwide Delivery",
    description: "Standard delivery across Pakistan.",
  },
  {
    title: "Cash on Delivery",
    description: "Pay safely when your order arrives.",
  },
  {
    title: "Quality Selection",
    description: "Lighting products selected for homes and interiors.",
  },
  {
    title: "Customer Support",
    description: "Help available for product and order questions.",
  },
];

const blogPosts = [
  {
    title: "How to Choose the Perfect Wall Light",
    description:
      "Simple tips for selecting wall lights for bedrooms, lounges, and hallways.",
    href: "/blog/how-to-choose-wall-light",
  },
  {
    title: "Lighting Ideas for Modern Pakistani Homes",
    description:
      "Use warm lighting to create a premium and comfortable home atmosphere.",
    href: "/blog/modern-home-lighting-ideas",
  },
  {
    title: "Outdoor Lighting for Gardens and Entrances",
    description: "Improve exterior spaces with durable and stylish outdoor lights.",
    href: "/blog/outdoor-lighting-ideas",
  },
];

function getCategoryImage(
  products: Awaited<ReturnType<typeof getProducts>>,
  categoryName: string
) {
  const product = products.find((item) =>
    item.categories?.some((category) => category.name === categoryName)
  );

  return product?.images?.[0]?.src || "";
}

export default async function HomePage() {
  const products = await getProducts({ per_page: 12 });

  const newArrivals = products.slice(0, 4);
  const trendingProducts = products.slice(4, 8);
  const featuredProducts = products.slice(0, 6);

  const promoImageOne =
    products[1]?.images?.[0]?.src || products[0]?.images?.[0]?.src || "";
  const promoImageTwo =
    products[3]?.images?.[0]?.src || products[2]?.images?.[0]?.src || "";

  return (
    <main>
      <HeroSlider />

      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b3c]">
                Categories
              </p>
              <h2 className="text-3xl font-bold">Shop by Category</h2>
            </div>

            <a
              href="/shop"
              className="hidden text-sm font-semibold underline decoration-[#c89b3c] underline-offset-4 md:inline-flex"
            >
              View all products
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {categories.map((category) => {
              const image = getCategoryImage(products, category.name);

              return (
                <a
                  key={category.name}
                  href={category.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadfce] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-44 overflow-hidden bg-[#f8efe1]">
                    {image ? (
                      <img
                        src={image}
                        alt={category.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5 text-center">
                    <h3 className="mb-2 text-xl font-semibold">
                      {category.name}
                    </h3>

                    <p className="mb-5 text-sm leading-6 text-neutral-600">
                      {category.description}
                    </p>

                    <span className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#080706] px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-[#c89b3c] group-hover:text-black">
                      {category.buttonText}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <a
            href="/shop"
            className="mt-8 inline-flex text-sm font-semibold underline decoration-[#c89b3c] underline-offset-4 md:hidden"
          >
            View all products
          </a>
        </div>
      </section>

      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid overflow-hidden rounded-3xl border border-[#eadfce] bg-white md:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border-b border-[#eadfce] p-7 text-center md:border-b-0 md:border-r last:md:border-r-0"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c89b3c]/15 text-xl font-bold text-[#c89b3c]">
                  ✓
                </div>

                <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>

                <p className="text-sm leading-6 text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b3c]">
                New Arrivals
              </p>
              <h2 className="text-3xl font-bold">Latest Lighting Products</h2>
            </div>

            <a
              href="/shop"
              className="hidden text-sm font-semibold underline decoration-[#c89b3c] underline-offset-4 md:inline-flex"
            >
              View all new arrivals
            </a>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">
          <a
            href="/collections/wall-lamps"
            className="group relative min-h-72 overflow-hidden rounded-3xl bg-[#080706] text-white"
          >
            {promoImageOne && (
              <img
                src={promoImageOne}
                alt="Indoor lighting"
                className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <h3 className="mb-3 text-3xl font-bold">
                Elevate your home ambience with elegant indoor lighting.
              </h3>

              <span className="mt-4 inline-flex w-fit rounded-full bg-[#c89b3c] px-6 py-3 text-sm font-semibold text-white transition group-hover:bg-[#080706] group-hover:text-[#e7c56a]">
                Shop Indoor Lights
              </span>
            </div>
          </a>

          <a
            href="/collections/outdoor-lights"
            className="group relative min-h-72 overflow-hidden rounded-3xl bg-[#080706] text-white"
          >
            {promoImageTwo && (
              <img
                src={promoImageTwo}
                alt="Outdoor lighting"
                className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <h3 className="mb-3 text-3xl font-bold">
                Bright, durable outdoor lights for gardens and entrances.
              </h3>

              <span className="mt-4 inline-flex w-fit rounded-full bg-[#c89b3c] px-6 py-3 text-sm font-semibold text-white transition group-hover:bg-[#080706] group-hover:text-[#e7c56a]">
                Shop Outdoor Lights
              </span>
            </div>
          </a>
        </div>
      </section>

      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b3c]">
                Trending Products
              </p>
              <h2 className="text-3xl font-bold">Popular Lighting Products</h2>
            </div>

            <a
              href="/shop"
              className="hidden text-sm font-semibold underline decoration-[#c89b3c] underline-offset-4 md:inline-flex"
            >
              View all products
            </a>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-4">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b3c]">
                Featured Products
              </p>
              <h2 className="text-3xl font-bold">Shop Premium Lighting</h2>
            </div>

            <a
              href="/shop"
              className="hidden text-sm font-semibold underline decoration-[#c89b3c] underline-offset-4 md:inline-flex"
            >
              View all products
            </a>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#c89b3c]">
                Lighting Guide
              </p>
              <h2 className="text-3xl font-bold">Latest from Our Blog</h2>
            </div>

            <a
              href="/blog"
              className="hidden text-sm font-semibold underline decoration-[#c89b3c] underline-offset-4 md:inline-flex"
            >
              View all articles
            </a>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {blogPosts.map((post, index) => {
              const image = products[index]?.images?.[0]?.src || "";

              return (
                <a
                  key={post.title}
                  href={post.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadfce] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-52 overflow-hidden bg-[#f8efe1]">
                    {image ? (
                      <img
                        src={image}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold">{post.title}</h3>

                    <p className="mb-5 text-sm leading-6 text-neutral-600">
                      {post.description}
                    </p>

                    <span className="mt-auto inline-flex w-fit rounded-full bg-[#080706] px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-[#c89b3c] group-hover:text-black">
                      Read Article
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}