export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <h2 className="mb-3 text-2xl font-bold">Roshni Ghr</h2>
          <p className="text-sm leading-6 text-neutral-300">
            Premium lighting solutions for homes, offices, lounges, gardens,
            and commercial interiors across Pakistan.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Shop</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>
              <a href="/collections/chandeliers">Chandeliers</a>
            </li>
            <li>
              <a href="/collections/wall-lamps">Wall Lamps</a>
            </li>
            <li>
              <a href="/collections/hanging-lights">Hanging Lights</a>
            </li>
            <li>
              <a href="/collections/outdoor-lights">Outdoor Lights</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Customer Support</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/shipping-policy">Shipping Policy</a>
            </li>
            <li>
              <a href="/return-policy">Return Policy</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Contact</h3>
          <p className="text-sm leading-6 text-neutral-300">
            Lahore, Pakistan
            <br />
            Cash on Delivery available
            <br />
            Standard Delivery: Rs 300
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-800 px-6 py-4 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Roshni Ghr. All rights reserved.
      </div>
    </footer>
  );
}