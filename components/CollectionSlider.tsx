"use client";

import { useState } from "react";

const collections = [
  {
    name: "Outdoor Lights",
    image: "/hero-3.webp",
    href: "/collections/outdoor-lights",
  },
  {
    name: "Indoor Lights",
    image: "/about-welcome.webp",
    href: "/collections/indoor-lights",
  },
  {
    name: "Hanging Pendants",
    image: "/hero-1.webp",
    href: "/collections/hanging-lights",
  },
  {
    name: "Wall Lights",
    image: "/about-quality.webp",
    href: "/collections/wall-lights",
  },
];

export default function CollectionSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % collections.length);
  };

  const previous = () => {
    setIndex((prev) =>
      prev === 0 ? collections.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">
            Our Collections
          </h2>
        </div>


        <div className="relative overflow-hidden">

          <div className="grid gap-5 md:grid-cols-3">

            {collections
              .slice(index, index + 3)
              .concat(
                collections.slice(
                  0,
                  Math.max(0, index + 3 - collections.length)
                )
              )
              .map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="group relative h-80 overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  h-full 
                  w-full 
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                  "
                />


                <div className="
                  absolute
                  inset-0
                  bg-black/30
                  "
                />


                <h3
                  className="
                  absolute
                  bottom-6
                  left-0
                  right-0
                  text-center
                  text-2xl
                  font-bold
                  text-white
                  "
                >
                  {item.name}
                </h3>


              </a>

            ))}

          </div>


          <button
            onClick={previous}
            className="
            absolute
            left-2
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-white
            px-4
            py-2
            shadow
            "
          >
            ←
          </button>


          <button
            onClick={next}
            className="
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-white
            px-4
            py-2
            shadow
            "
          >
            →
          </button>


        </div>

      </div>
    </section>
  );
}