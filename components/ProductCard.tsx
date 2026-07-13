import type { WooProduct } from "@/lib/woocommerce";

type ProductCardProps = {
  product: WooProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  const image = product.images?.[0];

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:shadow-lg">
      <div className="overflow-hidden bg-neutral-100">
        {image?.src ? (
          <img
            src={image.src}
            alt={image.alt || product.name}
            className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-64 items-center justify-center text-neutral-400">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-sm font-medium text-[#c89b3c]">
          {product.categories.map((category) => category.name).join(", ")}
        </p>

        <h3 className="mb-2 text-lg font-semibold text-neutral-900">
          {product.name}
        </h3>

        <div className="mb-3 flex items-center gap-2">
          {product.regular_price && product.sale_price ? (
            <>
              <span className="text-sm text-neutral-400 line-through">
                Rs {product.regular_price}
              </span>
              <span className="font-semibold text-neutral-900">
                Rs {product.sale_price}
              </span>
            </>
          ) : (
            <span className="font-semibold text-neutral-900">
              Rs {product.price}
            </span>
          )}
        </div>

        <p className="mb-4 text-sm capitalize text-green-700">
          {product.stock_status === "instock"
            ? "In stock"
            : product.stock_status}
        </p>

        <a
          href={`/product/${product.slug}`}
          className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#080706] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#c89b3c] hover:text-black"
        >
          View Product
        </a>
      </div>
    </div>
  );
}