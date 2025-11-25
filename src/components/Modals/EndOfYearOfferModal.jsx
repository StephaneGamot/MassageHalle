"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { GiftIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function EndOfYearOfferModal() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-40">
      {/* Fond assombri */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      {/* Conteneur centré */}
      <div className="fixed inset-0 z-40 flex w-screen items-center justify-center p-4">
        <DialogPanel
          transition
          className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white px-6 pb-6 pt-6 text-left shadow-2xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:px-8 sm:pb-8 sm:pt-7"
        >
          {/* Bouton X */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7EA23F]"
            aria-label="Fermer l’offre de fin d’année"
          >
            <XMarkIcon className="h-4 w-4" aria-hidden="true" />
          </button>

          {/* Icône cadeau */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7EA23F]/10">
            <GiftIcon aria-hidden="true" className="h-7 w-7 text-[#7EA23F]" />
          </div>

          {/* Titre + texte */}
          <div className="mt-4 text-center sm:mt-6">
            <DialogTitle className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Offre de fin d&apos;année 🎄
            </DialogTitle>

            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Pour terminer l&apos;année en douceur, profitez d&apos;une remise
              exceptionnelle sur vos massages :
            </p>

            <ul className="mt-4 space-y-1.5 text-sm text-slate-800 text-left mx-auto max-w-md">
              <li>
                • <span className="font-semibold">-10 % à -20 %</span>{" "}
                selon le massage choisi
              </li>
              <li>
                • Valable sur les massages relaxants, sportifs, deep tissues,
                tao, douceur dorsale, reiki, voyage des sens et à domicile
              </li>
              <li>• Offre limitée, sur rendez-vous uniquement</li>
            </ul>

            <p className="mt-3 text-xs text-slate-500">
              Remise appliquée directement lors de la réservation sur Treatwell.
            </p>
          </div>

          {/* Boutons */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:justify-center">
            {/* ➜ CTA vers Treatwell */}
            <a
              href="https://widget.treatwell.be/fr/salon/la-voie-du-bien-etre/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-[#7EA23F] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#6b8f36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7EA23F]"
            >
              Réserver sur Treatwell
            </a>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300"
            >
              Peut-être plus tard
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

