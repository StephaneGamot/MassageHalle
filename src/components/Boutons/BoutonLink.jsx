import React from "react";
import Link from "next/link";

export default function BoutonLink() {
  return (
    <a
              href="https://wa.me/32477131993"
              target="_blank"
              rel="noreferrer"
        className="rounded-md bg-[#1EBE5D] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8FBC8F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#556B2F]"
      >
              WhatsApp
            </a>
    
  );
}

