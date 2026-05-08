import { redirect } from 'next/navigation';

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://lavoiedubienetre.be/fr",
    languages: {
      fr: "https://lavoiedubienetre.be/fr",
      en: "https://lavoiedubienetre.be/en",
      nl: "https://lavoiedubienetre.be/nl",
    },
  },
};

export default function RootPage() {
  redirect('/fr');
}
