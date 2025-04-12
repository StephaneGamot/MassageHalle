import Link from "next/link";
import Image from "next/image";
import Masseur1 from "./../../../public/Images/massage/masseur-massant-le-dos-une-femme.webp"
import Masseur2 from "./../../../public/Images/massage/seance-de-shiatsu-meridien-de-la-vessie.webp"
import Masseur3 from "./../../../public/Images/massage/masseur-faisant-un-massage-relaxant.webp"
import Masseur4 from "./../../../public/Images/massage/une-femme-dont-epaule-se-fait-masser.webp"

export default function Cta() {
  return (
    <section className="overflow-hidden bg-white pt-12 sm:p-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        {/* Texte + grande image */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Texte */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Offrez un moment de bien-être à ceux que vous aimez
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Un massage, c’est plus qu’un soin : c’est un geste d’amour. Offrez un instant
              de détente inoubliable avec une carte cadeau.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Soins thérapeutiques et massages relaxants à Halle – Bruxelles, en cabinet ou à
              domicile.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-block rounded-md bg-[#556B2F] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6f8e42] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#556B2F]"
              >
                Offrir un instant de douceur &rarr;
              </Link>
            </div>
          </div>

          {/* Bloc image pour iPad et GSM */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
            <div className="col-span-2">
              <Image
                src={Masseur1}
                alt="Massage relaxant"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,..."
                loading="lazy"
                width={1152}
                height={824}
                className="aspect-[7/5] w-full rounded-2xl object-cover"
              />
            </div>
            <Image
              src={Masseur2}
              alt="Massage shiatsu"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,..."
              loading="lazy"
              width={768}
              height={604}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <Image
              src={Masseur3}
              alt="Massage aux huiles"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,..."
              loading="lazy"
              width={1152}
              height={842}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="hidden lg:block lg:col-span-2">
              <Image
                src={Masseur4}
                alt="Cabinet de massage"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,..."
                loading="lazy"
                width={768}
                height={604}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Grande image pour Desktop uniquement */}
          <div className="hidden lg:block">
            <Image
              src={Masseur1}
              alt="Massage relaxant"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,..."
              loading="lazy"
              width={1152}
              height={824}
              className="aspect-[7/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Bloc secondaire : 3 images pour desktop uniquement */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image
            src={Masseur2}
            alt="Massage shiatsu"
            width={768}
            height={604}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,..."
            loading="lazy"
            className="w-full aspect-[4/3] rounded-2xl object-cover"
          />
          <Image
            src={Masseur3}
            alt="Massage aux huiles"
            width={1152}
            height={842}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,..."
            loading="lazy"
            className="w-full aspect-[4/3] rounded-2xl object-cover"
          />
          <Image
            src={Masseur4}
            alt="Cabinet de massage"
            width={768}
            height={604}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,..."
            loading="lazy"
            className="w-full aspect-[4/3] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
