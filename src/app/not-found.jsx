"use client";

import Link from "next/link";

const texts = {
  fr: { title: "Vous êtes perdu", text: "Désolé, la page que vous recherchez n’existe pas.", link: "Retour à l’accueil" },
  en: { title: "Page not found", text: "Sorry, the page you’re looking for doesn’t exist.", link: "Back to home" },
  nl: { title: "Pagina niet gevonden", text: "Sorry, de pagina die u zoekt bestaat niet.", link: "Terug naar de startpagina" },
};

function getLocale() {
  if (typeof window === "undefined") return "fr";
  const lang = (navigator.language || "fr").slice(0, 2);
  return texts[lang] ? lang : "fr";
}

export default function NotFound() {
  const t = texts[getLocale()];
  return (
    <main className="notfound-wrapper">
      <div className="notfound-overlay" />

      <div className="notfound-content">
        <h1 className="text-5xl sm:text-7xl font-semibold !text-white">
          {t.title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl !text-white/80">
          {t.text}
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="text-white font-semibold text-xl underline">
            &larr; {t.link}
          </Link>
        </div>
      </div>
    </main>
  );
}
