import React from "react";
import Link from "next/link";

export default function BoutonLink({ label }) {
  return (
    <Link href="https://widget.treatwell.be/fr/salon/377730/menu/">
      <button
        type="button"
        className="rounded-md bg-[#556B2F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8FBC8F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#556B2F]"
      >
        {label}
      </button>
    </Link>
  );
}
