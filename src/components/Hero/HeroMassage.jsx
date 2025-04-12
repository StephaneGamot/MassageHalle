import Image from "next/image";
import Link from "next/link";
import heroImagesData from "./heroImagesData";

export default function HeroMassage({ variant, title, text1, text2 }) {
  const hero = heroImagesData[variant];

  return (
    <section className="relative h-[80vh] overflow-hidden bg-gray-50">
      {/* ✅ Image de fond */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
     
          className="object-cover object-center"
       priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* ✅ Contenu par-dessus l’image */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900">
            {title}
          </h1>
          {text1 && <p className="mt-6 text-lg text-gray-700">{text1}</p>}
          {text2 && <p className="mt-6 text-lg text-gray-700">{text2}</p>}

          <div className="mt-8">
            <Link
              href="https://widget.treatwell.be/fr/salon/377730/menu/"
              className="inline-block rounded-md bg-[#556B2F] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6f8e42] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#556B2F]"
            >
              Réserver ce soin &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
