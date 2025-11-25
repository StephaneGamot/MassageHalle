"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Testimonials({ ids = [] }) {
  const t = useTranslations("testimonials");
  const selectedTestimonials = ids.map((id) => ({
    id,
    body: t(`list.${id}.body`),
    alt: t(`list.${id}.alt`),
    author: {
      name: t(`list.${id}.author`),
      imageUrl: `/Images/testimonials/${id}.webp`,
    },
  }));

  if (selectedTestimonials.length === 0) {
    return (
      <div className="bg-white py-24 text-center" role="region" aria-label={t("title")}>
        <p className="text-gray-500">{t("none")}</p>
      </div>
    );
  }

  return (
    <div
      className="bg-black py-12 sm:py-16"
      role="region"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="testimonials-title" className="text-xl/7 !text-gray-100 font-semibold">
            {t("title")}
          </h2>
          <p className="mt-2 text-balance text-3xl font-semibold tracking-tight !text-gray-300 sm:text-4xl">
            {t("subtitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {selectedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure
                  className="rounded-2xl bg-gray-50 p-8 text-sm/6"
                  aria-label={`${testimonial.author.name}: ${testimonial.body}`}
                >
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      alt={testimonial.alt}
                      src={testimonial.author.imageUrl}
                      className="size-10 rounded-full bg-gray-50"
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
