'use client';

const texts = {
  fr: { title: "Une erreur est survenue", retry: "Réessayer" },
  en: { title: "An error occurred", retry: "Try again" },
  nl: { title: "Er is een fout opgetreden", retry: "Opnieuw proberen" },
};

function getLocale() {
  if (typeof window === "undefined") return "fr";
  const lang = (navigator.language || "fr").slice(0, 2);
  return texts[lang] ? lang : "fr";
}

export default function GlobalError({ error, reset }) {
  const t = texts[getLocale()];

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-title text-olive">{t.title}</h1>
      <p className="text-grisfonce mt-2">
        {process.env.NODE_ENV === "development" ? error.message : t.title}
      </p>
      <button onClick={() => reset()} className="mt-4 bg-olive text-white py-2 px-4 rounded">
        {t.retry}
      </button>
    </div>
  );
}
