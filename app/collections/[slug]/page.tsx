import ProductCard from "@/components/ProductCard";
import { getCategories, getProducts } from "@/lib/woocommerce";

type CollectionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;

  const categories = await getCategories();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold">Collection not found</h1>
        <a href="/shop" className="mt-6 inline-block underline">
          Back to shop
        </a>
      </main>
    );
  }

  const products = await getProducts({
    category: category.id,
    per_page: 50,
  });

  return (
    <main>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Collection
          </p>

          <h1 className="mb-4 text-5xl font-bold">{formatTitle(slug)}</h1>

          <p className="max-w-2xl text-neutral-300">
            Explore premium {category.name.toLowerCase()} selected for modern
            homes, offices, lounges, and commercial interiors.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          <a
            href="/shop"
            className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-100"
          >
            All Products
          </a>

          {categories
            .filter((item) => item.slug !== "uncategorized")
            .map((item) => (
              <a
                key={item.id}
                href={`/collections/${item.slug}`}
                className={`rounded-full px-5 py-2 text-sm font-medium ${
                  item.slug === slug
                    ? "bg-black text-white"
                    : "border border-neutral-300 hover:bg-neutral-100"
                }`}
              >
                {item.name}
              </a>
            ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            {products.length} {products.length === 1 ? "Product" : "Products"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}