import React from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Quels sont les bienfaits d’un massage relaxant ?",
    answer:
      "Le massage relaxant réduit le stress, détend les muscles, améliore la circulation et favorise un sommeil réparateur.",
  },
  {
    question: "Quels types de massages proposez-vous ?",
    answer:
      "Nous proposons des massages relaxants, sportifs, anti-cellulite, Shiatsu, Reiki, réflexologie plantaire et plus encore, adaptés à vos besoins spécifiques.",
  },
  {
    question: "Proposez-vous des massages à domicile ?",
    answer:
      "Oui, nous proposons certains soins à domicile dans la région de Halle et ses environs.",
  },
  {
    question: "Est-ce que je dois me déshabiller pour un massage ?",
    answer:
      "Cela dépend du soin choisi. Pour le Shiatsu ou Reiki, vous restez habillé. Pour les massages à l’huile, il est préférable d’être en sous-vêtements.",
  },
  {
    question: "Quels sont les bienfaits d’un massage relaxant ?",
    answer:
      "Il permet de relâcher les tensions, améliorer la circulation, apaiser le système nerveux et favoriser le sommeil.",
  },
  {
    question: "Puis-je offrir un massage en cadeau ?",
    answer: "Absolument ! Nous proposons des bons cadeaux personnalisés.",
  },
  {
    question: "Est-ce que je peux demander à cibler une zone précise ?",
    answer:
      "Bien sûr, chaque séance est personnalisée. N’hésitez pas à nous indiquer les zones où vous ressentez des tensions ou un besoin particulier.",
  },
  {
    question: "Quels sont les effets du Reiki ?",
    answer:
      "Le Reiki favorise la détente, l’équilibre émotionnel, et aide à libérer les blocages énergétiques.",
  },
  {
    question: "Dois-je venir à jeun ?",
    answer:
      "Il est conseillé d’éviter de manger un gros repas avant la séance, mais ne venez pas non plus le ventre vide.",
  },
  {
    question: "Le Reiki est-il efficace contre le stress ?",
    answer:
      "Oui, le Reiki aide à calmer l’esprit, libérer les tensions émotionnelles et induit une détente profonde.",
  },
  {
    question: "Combien de temps dure une séance de réflexologie plantaire ?",
    answer: "Une séance dure en général entre 45 minutes et 1 heure.",
  },
  {
    question: "Le massage shiatsu se fait-il avec ou sans huile ?",
    answer:
      "Le shiatsu se pratique habillé, sans huile, par des pressions sur des points énergétiques.",
  },
  {
    question: "Puis-je recevoir un massage si je suis enceinte ?",
    answer:
      "Oui, certains massages sont adaptés à la grossesse, notamment à partir du 2e trimestre.",
  },
  {
    question: "À quelle fréquence devrais-je me faire masser ?",
    answer:
      "Cela dépend de vos besoins, mais une séance par mois est idéale pour un bien-être constant.",
  },
  {
    question: "Y a-t-il des contre-indications au massage ?",
    answer:
      "Oui, fièvre, maladies contagieuses, phlébite, fractures récentes peuvent être des contre-indications.",
  },
  {
    question: "Faut-il se déshabiller complètement pour un massage ?",
    answer:
      "Non, vous restez tel que vous êtes le plus à l'aise, seules les zones massées sont découvertes.",
  },
  {
    question: "Qu’est-ce que la réflexologie plantaire ?",
    answer:
      "C’est un massage des pieds stimulant des zones réflexes liées aux organes pour rétablir l'équilibre du corps.",
  },
  {
    question: "Quels massages favorisent le sommeil ?",
    answer:
      "Les massages relaxants, Reiki, et cranio-sacrés sont excellents pour améliorer le sommeil.",
  },
  {
    question: "Un massage peut-il soulager les migraines ?",
    answer:
      "Oui, certains massages comme le crânien ou le shiatsu peuvent atténuer les maux de tête.",
  },
  {
    question: "Le Reiki est-il un massage ?",
    answer:
      "Non, c’est une méthode énergétique basée sur l’imposition des mains, sans manipulation physique.",
  },
  {
    question: "Quel massage choisir en cas de douleurs musculaires ?",
    answer:
      "Le massage sportif ou deep tissue est recommandé pour soulager les tensions musculaires profondes.",
  },
  {
    question: "Est-ce que le Reiki nécessite une croyance particulière ?",
    answer:
      "Non, le Reiki fonctionne indépendamment des croyances, il agit naturellement sur l’énergie du corps.",
  },
  {
    question: "Combien de temps dure un massage ?",
    answer:
      "Une séance classique dure entre 60 minutes et 120 minutes selon le type de massage choisi.",
  },
  {
    question: "Peut-on offrir une séance de massage ?",
    answer:
      "Oui, des bons cadeaux sont disponibles pour offrir un moment de bien-être à vos proches.",
  },
  {
    question: "Quel massage pour une récupération après sport ?",
    answer:
      "Le massage sportif est parfait pour détendre les muscles et favoriser une meilleure récupération.",
  },
  {
    question: "Faut-il prendre une douche après un massage ?",
    answer:
      "Ce n’est pas obligatoire. Il est même conseillé de laisser les huiles essentielles pénétrer la peau.",
  },
  {
    question: "Le massage peut-il aider à la digestion ?",
    answer:
      "Oui, certains massages comme le massage du ventre ou la réflexologie favorisent la digestion.",
  },
  {
    question: "Est-ce que le massage sur chaise est efficace ?",
    answer:
      "Oui, il agit rapidement pour détendre le dos, la nuque et les épaules, en seulement 15-20 minutes.",
  },
  {
    question: "Puis-je parler pendant la séance ?",
    answer:
      "Vous êtes libre de parler ou non. La plupart des clients préfèrent se détendre en silence.",
  },
  {
    question: "Qu’est-ce que le massage cranio-sacré ?",
    answer:
      "C’est une méthode douce qui libère les tensions au niveau du crâne, de la colonne vertébrale et du sacrum.",
  },
  {
    question: "Les enfants peuvent-ils recevoir des massages ?",
    answer:
      "Oui, des massages doux adaptés sont proposés pour les enfants à partir de 16 ans.",
  },
  {
    question: "Le massage aide-t-il en cas d’anxiété ?",
    answer:
      "Oui, les massages favorisent la libération d’endorphines et apaisent le système nerveux.",
  },
  {
    question: "Le massage peut-il aider à perdre du poids ?",
    answer:
      "Les massages ne font pas perdre du poids, mais certains comme l’anti-cellulite favorisent la tonicité.",
  },
  {
    question: "Y a-t-il un âge limite pour recevoir un massage ?",
    answer:
      "Non, il n’y a pas d’âge, les massages peuvent être adaptés aux personnes âgées.",
  },
  {
    question: "Dois-je porter quelque chose de spécial pour le massage ?",
    answer:
      "Portez des vêtements confortables, surtout pour les massages habillés comme le shiatsu.",
  },
  {
    question: "Peut-on masser une cicatrice ?",
    answer:
      "Oui, mais il faut attendre la cicatrisation complète. Un avis médical peut être utile.",
  },
  {
    question: "Le massage améliore-t-il la circulation ?",
    answer: "Oui, il active le retour veineux et oxygène mieux les tissus.",
  },
  {
    question: "Le Reiki est-il compatible avec un traitement médical ?",
    answer:
      "Oui, il ne remplace pas un traitement mais peut l’accompagner harmonieusement.",
  },
  {
    question: "Le massage peut-il soulager les douleurs chroniques ?",
    answer:
      "Oui, notamment les tensions du dos, du cou, ou les douleurs liées au stress.",
  },
  {
    question:
      "Quelle est la différence entre massage énergétique et physique ?",
    answer:
      "Le massage énergétique agit sur les flux subtils du corps, tandis que le massage physique travaille les muscles.",
  },
  {
    question: "Le massage peut-il aider à la concentration ?",
    answer:
      "Oui, en réduisant le stress, il permet un meilleur recentrage mental.",
  },
  {
    question: "Puis-je recevoir un massage si je suis fatigué ?",
    answer:
      "Oui, c’est même recommandé. Le massage revitalise le corps et l’esprit.",
  },
  {
    question: "Est-ce que les hommes peuvent aussi recevoir des massages ?",
    answer:
      "Absolument, les soins sont ouverts à tous sans distinction de genre.",
  },
  {
    question: "Les huiles utilisées sont-elles naturelles ?",
    answer:
      "Oui, nous privilégions les huiles végétales et essentielles 100% naturelles.",
  },
  {
    question: "Quels sont les effets après un massage ?",
    answer:
      "Détente, regain d’énergie, meilleure humeur, parfois un peu de fatigue due au relâchement.",
  },
  {
    question: "Y a-t-il des effets secondaires ?",
    answer:
      "Très rarement. Parfois une légère fatigue ou une élimination accrue après le soin.",
  },
  {
    question: "Le massage peut-il aider en cas de burn-out ?",
    answer:
      "Oui, il favorise un retour au calme, à la conscience corporelle et aide à relâcher les tensions mentales.",
  },
  {
    question: "Le massage peut-il équilibrer les émotions ?",
    answer:
      "Oui, en agissant sur le système nerveux et énergétique, il apaise les déséquilibres émotionnels.",
  },
  {
    question: "Faut-il réserver à l’avance ?",
    answer:
      "Oui, les séances sont sur rendez-vous uniquement pour garantir votre confort.",
  },
  {
    question:
      "Quelle est la différence entre un massage à domicile et en cabinet ?",
    answer:
      "À domicile, vous êtes dans votre espace personnel. En cabinet, tout est optimisé pour votre bien-être.",
  },
  {
    question: "Le massage favorise-t-il la méditation ?",
    answer:
      "Oui, certains soins induisent un état méditatif et une conscience accrue du corps.",
  },
  {
    question: "Le massage peut-il m’aider à mieux respirer ?",
    answer:
      "Oui, en libérant les tensions thoraciques et abdominales, il favorise une respiration plus ample.",
  },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Questions fréquentes
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="size-6 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="size-6 group-[&:not([data-open])]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
