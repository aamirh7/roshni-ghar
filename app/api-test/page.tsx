import { getCategories, getProducts } from "@/lib/woocommerce";

export default async function ApiTestPage() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <main className="p-10">
      <h1 className="mb-6 text-3xl font-bold">WooCommerce API Test</h1>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Products</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg border p-4">
              {product.images?.[0]?.src && (
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt || product.name}
                  className="mb-3 h-48 w-full rounded-md object-cover"
                />
              )}

              <h3 className="font-semibold">{product.name}</h3>
              <p>SKU: {product.sku}</p>
              <p>Price: Rs {product.price}</p>
              <p>Status: {product.stock_status}</p>
              <p>
                Category:{" "}
                {product.categories.map((category) => category.name).join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Categories</h2>

        <ul className="list-disc pl-6">
          {categories.map((category) => (
            <li key={category.id}>
              {category.name} — {category.slug} — {category.count} products
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}