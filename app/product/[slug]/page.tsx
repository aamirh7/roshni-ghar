import { getProducts } from "@/lib/woocommerce";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const products = await getProducts({
    slug,
    per_page: 1,
  });

  const product = products[0];

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <a href="/shop" className="mt-6 inline-block underline">
          Back to shop
        </a>
      </main>
    );
  }

  const mainImage = product.images?.[0];
  const checkoutUrl = `${process.env.WOOCOMMERCE_URL}/checkout/?add-to-cart=${product.id}`;

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
            {mainImage?.src ? (
              <img
                src={mainImage.src}
                alt={mainImage.alt || product.name}
                className="h-[520px] w-full object-cover"
              />
            ) : (
              <div className="flex h-[520px] items-center justify-center text-neutral-400">
                No image
              </div>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.images.slice(1, 5).map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt || product.name}
                  className="h-28 w-full rounded-xl border border-neutral-200 object-cover"
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            {product.categories.map((category) => category.name).join(", ")}
          </p>

          <h1 className="mb-4 text-5xl font-bold leading-tight">
            {product.name}
          </h1>

          <div className="mb-6 flex items-center gap-3 text-2xl">
            {product.regular_price && product.sale_price ? (
              <>
                <span className="text-neutral-400 line-through">
                  Rs {product.regular_price}
                </span>
                <span className="font-bold text-neutral-950">
                  Rs {product.sale_price}
                </span>
              </>
            ) : (
              <span className="font-bold text-neutral-950">
                Rs {product.price}
              </span>
            )}
          </div>

          <div
            className="mb-6 text-lg leading-8 text-neutral-700"
            dangerouslySetInnerHTML={{ __html: product.short_description }}
          />

          <div className="mb-6 rounded-2xl border border-neutral-200 p-5">
            <p className="mb-2">
              <strong>SKU:</strong> {product.sku}
            </p>
            <p className="capitalize">
              <strong>Availability:</strong>{" "}
              {product.stock_status === "instock"
                ? "In stock"
                : product.stock_status}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={checkoutUrl}
              className="rounded-full bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Buy Now
            </a>

            <a
              href="/shop"
              className="rounded-full border border-neutral-300 px-8 py-4 text-sm font-semibold hover:bg-neutral-100"
            >
              Back to Shop
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="mb-4 text-3xl font-bold">Product Details</h2>

          <div
            className="prose max-w-none text-neutral-700"
            dangerouslySetInnerHTML={{ __html: product.short_description }}
          />
        </div>
      </section>
    </main>
  );
}