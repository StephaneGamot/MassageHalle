import Link from "next/link"

export default function CtaSectionMassagePage({title, soin }) {
    return (
        <section id="reservation" className="py-24 bg-[#f7f7f7]">
        <div className="text-center max-w-xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-900">
            {title}
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Réservez dès aujourd’hui {soin} et profitez d’un
            instant rien qu’à vous.
          </p>
          <div className="mt-8">
            <Link
              href="https://widget.treatwell.be/fr/salon/377730/menu/"
              className="inline-block rounded-md bg-[#556B2F] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6f8e42] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#556B2F]"
            >
              Prendre rendez-vous
            </Link>
            <p className="mt-8 text-lg text-gray-600">Aucune carte bancaire requise – réservez en toute sérénité.</p>
          </div>
        </div>
      </section>
      )
    }