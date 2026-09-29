const collectionLinks = [
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
  {
    label: "Wall Lights",
    href: "/collections/wall-lights",
  },
];

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fff8ef]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 py-4">
          <a href="/" className="flex shrink-0 items-center">
            <img
              src="/logo.jpeg"
              alt="Roshni Ghar"
              className="h-20 w-auto object-contain md:h-24"
            />
          </a>

          <form
            action="/shop"
            className="hidden flex-1 items-center overflow-hidden rounded-xl border border-[#eadfce] bg-white shadow-sm md:flex"
          >
            <input
              type="search"
              name="search"
              placeholder="Search for lights, lamps and more..."
              className="h-12 flex-1 border-none bg-transparent px-5 text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
            />

            <select
              name="category"
              className="h-12 border-l border-[#eadfce] bg-white px-4 text-sm font-medium text-neutral-700 outline-none"
              defaultValue=""
            >
              <option value="">All Categories</option>
              <option value="chandeliers">Chandeliers</option>
              <option value="wall-lamps">Wall Lamps</option>
              <option value="hanging-lights">Hanging Lights</option>
              <option value="outdoor-lights">Outdoor Lights</option>
              <option value="outdoor-lights">Wall Lights</option>
            </select>

            <button
              type="submit"
              className="flex h-12 w-14 items-center justify-center bg-[#c89b3c] text-black transition hover:bg-[#080706] hover:text-white"
              aria-label="Search"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>

          <div className="hidden shrink-0 items-center gap-6 md:flex">
            <a
              href="/my-account"
              className="flex items-center gap-2 text-sm font-semibold text-neutral-800 transition hover:text-[#c89b3c]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              My Account
            </a>

            <a
              href="/cart"
              className="relative flex items-center gap-2 text-sm font-semibold text-neutral-800 transition hover:text-[#c89b3c]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6H21L19 14H8L6 6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L5 3H2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 21C9.55228 21 10 20.5523 10 20C10 19.4477 9.55228 19 9 19C8.44772 19 8 19.4477 8 20C8 20.5523 8.44772 21 9 21Z"
                  fill="currentColor"
                />
                <path
                  d="M18 21C18.5523 21 19 20.5523 19 20C19 19.4477 18.5523 19 18 19C17.4477 19 17 19.4477 17 20C17 20.5523 17.4477 21 18 21Z"
                  fill="currentColor"
                />
              </svg>

              <span>Cart</span>

              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#c89b3c] text-xs font-bold text-black">
                0
              </span>
            </a>
          </div>

          <details className="relative md:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#eadfce] bg-white text-[#080706] shadow-sm transition hover:bg-[#f8efe1] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>

              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </summary>

            <div className="absolute right-0 mt-4 w-80 rounded-2xl border border-[#eadfce] bg-[#fff8ef] p-4 shadow-xl">
              <form
                action="/shop"
                className="mb-4 overflow-hidden rounded-xl border border-[#eadfce] bg-white"
              >
                <input
                  type="search"
                  name="search"
                  placeholder="Search products..."
                  className="h-11 w-full border-b border-[#eadfce] bg-transparent px-4 text-sm outline-none"
                />

                <button
                  type="submit"
                  className="h-11 w-full bg-[#c89b3c] text-sm font-semibold text-black transition hover:bg-[#080706] hover:text-white"
                >
                  Search
                </button>
              </form>

              <nav className="flex flex-col">
                <a
                  href="/"
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-[#f8efe1] hover:text-[#c89b3c]"
                >
                  Home
                </a>

                <a
                  href="/about-us"
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-[#f8efe1] hover:text-[#c89b3c]"
                >
                  About Us
                </a>

               <div className="rounded-xl">
  <a
    href="/shop"
    className="rounded-xl px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-[#f8efe1] hover:text-[#c89b3c]"
  >
    Shop
  </a>

  <div className="ml-4">
    {collectionLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="rounded-xl px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-[#f8efe1] hover:text-[#c89b3c]"
      >
        {link.label}
      </a>
    ))}
  </div>
</div>

                <a
                  href="/blog"
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-[#f8efe1] hover:text-[#c89b3c]"
                >
                  Blog
                </a>

                <a
                  href="/contact-us"
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-[#f8efe1] hover:text-[#c89b3c]"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </details>
        </div>

        <div className="hidden items-center justify-center border-t border-[#eadfce] py-3 md:flex">
          <nav className="flex items-center gap-10 text-sm font-semibold text-neutral-800">
            <a href="/" className="transition hover:text-[#c89b3c]">
              Home
            </a>

            <a href="/about-us" className="transition hover:text-[#c89b3c]">
              About Us
            </a>

            <div className="group relative">
  <a
    href="/shop"
    className="flex items-center gap-1 transition hover:text-[#c89b3c]"
  >
    Shop
    <span className="flex items-center text-xs leading-none -translate-y-[3px]">
      ⌄
    </span>
  </a>

  <div
    className="
      invisible absolute left-1/2 top-full z-50 mt-4 w-56
      -translate-x-1/2 rounded-2xl border border-[#eadfce]
      bg-[#fff8ef] p-2 opacity-0 shadow-xl
      transition-all duration-200
      group-hover:visible group-hover:opacity-100
    "
  >

  <div>
    {collectionLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="
  block rounded-xl px-4 py-3 text-sm font-semibold
  text-neutral-800 transition
  hover:bg-[#f8efe1] hover:text-[#c89b3c]
"
      >
        {link.label}
      </a>
    ))}
  </div>
</div>
  </div>
            <a href="/blog" className="transition hover:text-[#c89b3c]">
              Blog
            </a>

            <a href="/contact-us" className="transition hover:text-[#c89b3c]">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}