"use client";

import { useEffect, useState } from "react";

type ProductImage = {
  id: number;
  src: string;
  alt?: string;
};

type ProductGalleryProps = {
  images: ProductImage[];
  productName: string;
};

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(
    images?.[0] || null
  );

  const [isZoomed, setIsZoomed] = useState(false);

  const [zoomPosition, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    setSelectedImage(images?.[0] || null);
  }, [images]);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({
      x,
      y,
    });
  }

  function handleMouseLeave() {
    setIsZoomed(false);

    setZoomPosition({
      x: 50,
      y: 50,
    });
  }

  function selectImage(image: ProductImage) {
    setSelectedImage(image);
    setIsZoomed(false);

    setZoomPosition({
      x: 50,
      y: 50,
    });
  }

  if (!selectedImage) {
    return (
      <div className="flex h-[520px] items-center justify-center rounded-3xl border border-neutral-200 bg-neutral-100 text-neutral-400">
        No image
      </div>
    );
  }

  return (
    <div>
      {/* MAIN IMAGE */}
      <div
        onMouseEnter={() => setIsZoomed(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[520px] cursor-zoom-in overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100"
      >
        <img
          src={selectedImage.src}
          alt={selectedImage.alt || productName}
          draggable={false}
          className="h-full w-full select-none object-cover"
          style={{
            transform: isZoomed ? "scale(1.7)" : "scale(1)",
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            transition: isZoomed
              ? "transform 180ms ease-out"
              : "transform 300ms ease-out",
          }}
        />
      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {images.map((image) => {
            const isActive = selectedImage.id === image.id;

            return (
              <button
                key={image.id}
                type="button"
                onClick={() => selectImage(image)}
                className={`cursor-pointer overflow-hidden rounded-xl border-2 bg-neutral-100 transition duration-300 ${
                  isActive
                    ? "border-[#c89b3c] shadow-md"
                    : "border-neutral-200 hover:border-[#c89b3c] hover:shadow-md"
                }`}
                aria-label={`View ${image.alt || productName}`}
              >
                <img
                  src={image.src}
                  alt={image.alt || productName}
                  draggable={false}
                  className="h-28 w-28 select-none object-cover transition duration-300 hover:scale-105"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}