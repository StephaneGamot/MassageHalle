import Image from "next/image";
import galleryData from "./GalleryData.json";
import { getTranslations } from "next-intl/server";

export default async function Gallery({ ids = [] }) {
  const t = await getTranslations("gallery");
  const selectedImages = galleryData.filter((img) => ids.includes(img.id));

  if (selectedImages.length === 0) {
    return (
      <section
        className="py-20 bg-white text-center"
        role="region"
        aria-label={t("emptyLabel")}
      >
        <p className="text-[#595751]">{t("emptyText")}</p>
      </section>
    );
  }

  return (
    <section
      className="py-20 bg-white"
      role="region"
      aria-labelledby="gallery-title"
    >
      <h2 id="gallery-title" className="sr-only">{t("srTitle")}</h2>
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {img.caption && (
              <figcaption className="mt-2 text-sm text-[#595751] text-center">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
