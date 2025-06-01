import Image from "next/image";
import galleryData from "./GalleryData.json";

export default function Gallery({ ids = [] }) {
  const selectedImages = galleryData.filter((img) => ids.includes(img.id));

  if (selectedImages.length === 0) {
    return (
      <section
        className="py-20 bg-white text-center"
        role="region"
        aria-label="Galerie d’images"
      >
        <p className="text-gray-500">Aucune image disponible pour cette page.</p>
      </section>
    );
  }

  return (
    <section
      className="py-20 bg-white"
      role="region"
      aria-labelledby="gallery-title"
    >
      <h2 id="gallery-title" className="sr-only">Galerie d’images</h2>
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedImages.map((img) => (
          <figure key={img.id} className="overflow-hidden rounded-2xl shadow max-w-[400px]">
            <Image
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
              width={400}
              height={300}
            />
            {img.caption && (
              <figcaption className="mt-2 text-sm text-gray-600 text-center">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
