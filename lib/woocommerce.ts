const siteUrl = process.env.WOOCOMMERCE_URL;
const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

if (!siteUrl || !consumerKey || !consumerSecret) {
  throw new Error("WooCommerce environment variables are missing.");
}

type WooFetchParams = Record<string, string | number | boolean>;

async function wooFetch<T>(
  endpoint: string,
  params: WooFetchParams = {}
): Promise<T> {
  const url = new URL(`${siteUrl}/wp-json/wc/v3/${endpoint}`);

  url.searchParams.set("consumer_key", consumerKey!);
  url.searchParams.set("consumer_secret", consumerSecret!);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });

  const response = await fetch(url.toString(), {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(
      `WooCommerce API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

function fixImageUrl(imageUrl: string) {
  return imageUrl
    .replace(
      "https://www.roshnighar.com",
      "https://api.roshnighar.com"
    )
    .replace(
      "https://roshnighar.com",
      "https://api.roshnighar.com"
    );
}

export type WooProduct = {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price: string;
  sale_price: string;
  stock_status: string;
  sku: string;
  short_description: string;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
};

export type WooCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
  image?: {
    src: string;
    alt: string;
  };
};

export async function getProducts(params: WooFetchParams = {}) {
  const products = await wooFetch<WooProduct[]>("products", {
    per_page: 12,
    status: "publish",
    ...params,
  });

  return products.map((product) => ({
    ...product,
    images: product.images.map((image) => ({
      ...image,
      src: fixImageUrl(image.src),
    })),
  }));
}

export async function getCategories() {
  return wooFetch<WooCategory[]>("products/categories", {
    per_page: 20,
    hide_empty: false,
  });
}