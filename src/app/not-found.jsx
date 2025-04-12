import Link from "next/link";



export default function NotFound() {
    return (
        <main className="isolate min-h-full">
        <img
          alt="Page 404"
          src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
          className="absolute inset-0 -z-10 size-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Vous êtes perdu
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-white/70 sm:text-xl/8">
            Désolé mais la page que vous recherchez n'existe pas 
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/" className="text-sm/7 font-semibold text-white">
              <span aria-hidden="true">&larr;</span> retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
    );
  }
  