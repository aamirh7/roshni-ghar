"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero-1.webp",
    label: "Premium Lighting",
    title: "Illuminate Every Corner of Your Home",
    description:
      "Discover stylish lighting solutions that bring comfort, elegance, and a warm atmosphere to every room.",
  },
  {
    image: "/hero-2.webp",
    label: "Modern Designs",
    title: "Elegant Lights for Beautiful Interiors",
    description:
      "Shop chandeliers, wall lamps, hanging lights, and outdoor lighting selected for premium Pakistani homes.",
  },
  {
    image: "/hero-3.webp",
    label: "Roshni Ghar Collection",
    title: "Premium Lighting for Homes and Spaces",
    description:
      "Upgrade your home, lounge, garden, or commercial space with warm and stylish lighting designs.",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-[#fff8ef]">
      <div className="relative min-h-[520px] md:min-h-[560px]">
        {slides.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt={item.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8ef]/65 via-[#fff8ef]/25 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 md:min-h-[560px]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#c89b3c]">
              {slide.label}
            </p>

            <h1 className="mb-5 max-w-[760px] text-5xl font-bold leading-tight text-neutral-950 md:text-6xl">
              {slide.title}
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-8 text-neutral-700">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/shop"
                className="rounded-lg bg-[#c89b3c] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#080706] hover:text-white"
              >
                Shop Now
              </a>

              <a
                href="/shop"
                className="rounded-lg bg-white px-7 py-3 text-sm font-semibold text-neutral-950 shadow-sm transition hover:bg-[#080706] hover:text-white"
              >
                Explore Collections
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === activeSlide
                  ? "w-8 bg-[#c89b3c]"
                  : "w-3 bg-white/80 hover:bg-[#c89b3c]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}