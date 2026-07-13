import ProductCard from "@/components/ProductCard";
import { getCategories, getProducts } from "@/lib/woocommerce";

export default async function ShopPage() {
  const products = await getProducts({ per_page: 50 });
  const categories = await getCategories();

  const visibleCategories = categories.filter(
    (category) => category.slug !== "uncategorized"
  );

  return (
    <main>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Shop
          </p>
          <h1 className="mb-4 text-5xl font-bold">All Lighting Products</h1>
          <p className="max-w-2xl text-neutral-300">
            Browse premium chandeliers, wall lamps, hanging lights, and outdoor
            lighting products for modern homes and commercial spaces.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          <a
            href="/shop"
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
          >
            All Products
          </a>

          {visibleCategories.map((category) => (
            <a
              key={category.id}
              href={`/collections/${category.slug}`}
              className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-100"
            >
              {category.name}
            </a>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">{products.length} Products</h2>
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