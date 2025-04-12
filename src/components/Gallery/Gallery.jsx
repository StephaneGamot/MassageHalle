import Image from "next/image";
import galleryData from "./GalleryData.json";

export default function Gallery({ ids = [] }) {
  const selectedImages = galleryData.filter((img) => ids.includes(img.id));

  if (selectedImages.length === 0) {
    return (
      <section className="py-20 bg-white text-center">
        <p className="text-gray-500">Aucune image disponible pour cette page.</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedImages.map((img) => (
          <div key={img.id} className="overflow-hidden rounded-2xl shadow max-w-[400]">
            <Image
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover "
               loading="lazy"
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
