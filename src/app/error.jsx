'use client'; // obligatoire pour que ça fonctionne

export default function GlobalError({ error, reset }) {
  console.error(error); // pour voir dans la console

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-title text-olive">Une erreur est survenue</h1>
      <p className="text-grisfonce mt-2">{error.message}</p>
      <button onClick={() => reset()} className="mt-4 bg-olive text-white py-2 px-4 rounded">
        Réessayer
      </button>
    </div>
  );
}
