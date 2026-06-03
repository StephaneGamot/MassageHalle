/**
 * Contenu des pages locales par ville.
 *
 * Pourquoi : Treatwell, ringtwice et 2ememain captent aujourd'hui « massage
 * Bruxelles », « massage Uccle », « massage Waterloo » parce qu'on ne leur
 * oppose qu'une mention dans le footer. Une vraie page par ville, avec
 * contenu unique (trajet depuis Halle, témoignages, photos, prix domicile),
 * permet de récupérer ce trafic local en bas du funnel — celui qui réserve.
 *
 * Règle d'or : chaque page doit avoir au moins 500 mots UNIQUES (pas copié
 * d'une autre ville). Sinon Google les fusionne en duplicate content.
 */

export const CITIES = {
  bruxelles: {
    slug: "massage-bruxelles",
    cityNames: { fr: "Bruxelles", en: "Brussels", nl: "Brussel" },
    postalCode: "1000",
    distanceKm: 18,
    travelMin: 25,
    homePrice: { from: 160, fromShort: "160€" },
    // Soins les plus demandés dans cette ville — prix domicile (= la majorité des
    // visiteurs de cette page sont en mode « à domicile »).
    topServices: {
      fr: [
        { name: "Massage relaxant 1h30",    price: "160€", slug: "massage/relaxant" },
        { name: "Shiatsu 1h30",             price: "160€", slug: "shiatsu" },
        { name: "Massage Tao 1h30",         price: "170€", slug: "massage/tao" },
        { name: "Voyage des sens 2 h",      price: "205€", slug: "massage/voyage-des-sens" },
      ],
      en: [
        { name: "Relaxing massage 1h30",    price: "€160", slug: "massage/relaxant" },
        { name: "Shiatsu 1h30",             price: "€160", slug: "shiatsu" },
        { name: "Tao massage 1h30",         price: "€170", slug: "massage/tao" },
        { name: "Sensory journey 2h",       price: "€205", slug: "massage/voyage-des-sens" },
      ],
      nl: [
        { name: "Ontspanningsmassage 1u30", price: "160€", slug: "massage/relaxant" },
        { name: "Shiatsu 1u30",             price: "160€", slug: "shiatsu" },
        { name: "Tao-massage 1u30",         price: "170€", slug: "massage/tao" },
        { name: "Zintuigenreis 2u",         price: "205€", slug: "massage/voyage-des-sens" },
      ],
    },
    // Bloc "trajet & logistique" — rassure et concrétise.
    logistics: {
      fr: "Depuis le cabinet de Halle, je rejoins Bruxelles centre en 25 minutes via le ring R0, sortie 17 (Anderlecht) ou sortie 16 (Halle). Pour le sud de Bruxelles (Uccle, Forest, Saint-Gilles), comptez 30 minutes en heures creuses. Pour l'est et le nord-est (Etterbeek, Schaerbeek, Woluwe), 35 à 40 minutes selon l'heure. J'arrive toujours 5 à 10 minutes en avance pour installer la table et chauffer les huiles. Stationnement : je trouve toujours, ne vous en occupez pas.",
      en: "From the Halle studio, I reach central Brussels in 25 minutes via the R0 ring, exit 17 (Anderlecht) or exit 16 (Halle). For southern Brussels (Uccle, Forest, Saint-Gilles), count 30 minutes off-peak. For the east and north-east (Etterbeek, Schaerbeek, Woluwe), 35 to 40 minutes depending on time. I always arrive 5 to 10 minutes early to set up the table and warm the oils. Parking: I always find a spot, no need to worry.",
      nl: "Vanuit de praktijk in Halle bereik ik het centrum van Brussel in 25 minuten via de R0-ring, afrit 17 (Anderlecht) of afrit 16 (Halle). Voor het zuiden van Brussel (Ukkel, Vorst, Sint-Gillis) reken op 30 minuten buiten de spits. Voor het oosten en noordoosten (Etterbeek, Schaarbeek, Woluwe) 35 tot 40 minuten afhankelijk van het uur. Ik kom altijd 5 tot 10 minuten vroeger om de tafel te installeren en de oliën op te warmen. Parking: ik vind altijd een plek, daar hoeft u zich geen zorgen om te maken.",
    },
    // FAQ locale — 3 questions très spécifiques à cette ville.
    faqLocal: {
      fr: [
        { q: "Vous venez aussi à Ixelles, Saint-Gilles, Etterbeek ?",
          a: "Oui. Aucune commune bruxelloise n'est exclue. Le tarif domicile reste le même partout dans le périmètre 19 communes." },
        { q: "Combien de temps faut-il prévoir au total pour un massage à domicile à Bruxelles ?",
          a: "Pour une séance de 90 minutes : comptez 10 minutes d'installation, 90 minutes de soin, 10 minutes de rangement. Soit environ 1h50 chez vous au total, dont 90 minutes de pure détente." },
        { q: "Faut-il avoir une grande pièce ?",
          a: "Non. Un espace de 2 mètres sur 3 mètres suffit. Pas besoin d'une chambre dédiée : le salon convient parfaitement, je déplace une table basse si nécessaire." },
      ],
      en: [
        { q: "Do you also come to Ixelles, Saint-Gilles, Etterbeek?",
          a: "Yes. No Brussels municipality is excluded. The at-home price is the same anywhere in the 19-municipality perimeter." },
        { q: "How much total time should I plan for an at-home massage in Brussels?",
          a: "For a 90-minute session: count 10 minutes for setup, 90 minutes of treatment, 10 minutes to pack up. So about 1h50 at your place in total, of which 90 minutes of pure relaxation." },
        { q: "Do I need a big room?",
          a: "No. A 2 by 3 metre space is enough. No need for a dedicated room: the living room works perfectly, I move a coffee table if necessary." },
      ],
      nl: [
        { q: "Komt u ook naar Elsene, Sint-Gillis, Etterbeek?",
          a: "Ja. Geen enkele Brusselse gemeente is uitgesloten. De thuisprijs blijft overal in het 19-gemeenten gebied dezelfde." },
        { q: "Hoeveel tijd moet ik in totaal voorzien voor een massage aan huis in Brussel?",
          a: "Voor een sessie van 90 minuten: reken 10 minuten installatie, 90 minuten behandeling, 10 minuten opruimen. In totaal ongeveer 1u50 bij u thuis, waarvan 90 minuten pure ontspanning." },
        { q: "Heb ik een grote kamer nodig?",
          a: "Nee. Een ruimte van 2 op 3 meter volstaat. Geen aparte kamer nodig: de woonkamer is perfect, ik schuif desnoods een salontafel opzij." },
      ],
    },
    // Témoignage local — un seul, vraiment situé dans la ville.
    testimonial: {
      fr: { body: "Stéphane est venu chez nous à Ixelles un dimanche matin. Ponctuel, discret, ultra professionnel. J'ai eu l'impression de partir en weekend sans bouger du salon. On a recommandé à toute la famille.",
            author: "Camille V.", area: "Ixelles" },
      en: { body: "Stéphane came to our place in Ixelles on a Sunday morning. On time, discreet, ultra professional. I felt like I'd been on a weekend break without leaving the living room. We've recommended him to the whole family.",
            author: "Camille V.", area: "Ixelles" },
      nl: { body: "Stéphane kwam bij ons in Elsene op een zondagochtend. Stipt, discreet, ultra professioneel. Het voelde alsof ik op weekend was geweest zonder de woonkamer te verlaten. We hebben hem aan de hele familie aanbevolen.",
            author: "Camille V.", area: "Elsene" },
    },
    meta: {
      title: {
        fr: "Massage à domicile à Bruxelles — Cabinet à 25 min · 4.9★",
        en: "At-home massage in Brussels — Studio 25 min away · 4.9★",
        nl: "Massage aan huis in Brussel — Praktijk op 25 min · 4.9★",
      },
      description: {
        fr: "Massage relaxant, shiatsu, reiki à domicile à Bruxelles (toutes communes). Praticien certifié, 20+ ans d'expérience. Cabinet à Halle, à domicile dès 160€ (1 h 30).",
        en: "At-home relaxing massage, shiatsu, reiki across Brussels. Certified practitioner, 20+ years experience. Studio in Halle, at-home from €160 (1h30).",
        nl: "Ontspanningsmassage, shiatsu, reiki aan huis in Brussel. Gecertificeerd, 20+ jaar ervaring. Praktijk in Halle, aan huis vanaf 160€ (1u30).",
      },
    },
    hero: {
      fr: "Massage à domicile à Bruxelles : la détente sans bouger de chez vous",
      en: "At-home massage in Brussels: the relaxation without leaving home",
      nl: "Massage aan huis in Brussel: ontspanning zonder de deur uit",
    },
    intro: {
      fr: "Je me déplace dans toutes les communes de Bruxelles — Ixelles, Saint-Gilles, Etterbeek, Schaerbeek, Forest, Anderlecht, Woluwe-Saint-Lambert, Auderghem — avec une table professionnelle, des draps propres, des huiles bio chauffées et une enceinte discrète. Un espace calme d'environ 2×3 m suffit. En général, je suis chez vous dans les 25 à 40 minutes de trajet depuis Hal, selon votre quartier et l'heure.",
      en: "I travel across every Brussels municipality — Ixelles, Saint-Gilles, Etterbeek, Schaerbeek, Forest, Anderlecht, Woluwe-Saint-Lambert, Auderghem — with a professional table, clean linens, warmed organic oils and a discreet speaker. A quiet 2×3 m space is enough. I usually reach you in 25 to 40 minutes from Halle, depending on your neighborhood and traffic.",
      nl: "Ik kom in elke Brusselse gemeente — Elsene, Sint-Gillis, Etterbeek, Schaarbeek, Vorst, Anderlecht, Sint-Lambrechts-Woluwe, Oudergem — met een professionele tafel, schone lakens, opgewarmde biologische oliën en een discrete speaker. Een rustige ruimte van 2×3 m volstaat. Meestal sta ik binnen 25 tot 40 minuten bij u, afhankelijk van uw wijk en het verkeer.",
    },
    sectionsTitle: {
      fr: "Pourquoi un massage à domicile à Bruxelles change tout",
      en: "Why an at-home massage in Brussels changes everything",
      nl: "Waarom een massage aan huis in Brussel alles verandert",
    },
    sections: {
      fr: [
        { h: "Pas de trajet retour après le soin", p: "C'est le détail qui change l'expérience. Après 90 minutes de détente profonde, vous n'avez pas à reprendre votre voiture ou le métro. Vous restez dans votre cocon, vous prolongez la séance avec une tisane, vous dormez mieux." },
        { h: "Adapté aux jeunes parents et personnes à mobilité réduite", p: "Beaucoup de mes clients bruxellois sont de jeunes parents qui ne peuvent pas laisser un nouveau-né, ou des personnes pour qui sortir représente un effort important. Le massage à domicile devient leur seul moment vraiment à eux." },
        { h: "Pour les couples : double table possible", p: "Sur demande, je peux venir avec une seconde table et un masseur partenaire pour un massage en duo simultané — idéal pour un anniversaire ou une Saint-Valentin à la maison." },
      ],
      en: [
        { h: "No commute home after the treatment", p: "It's the detail that changes the experience. After 90 minutes of deep relaxation, you don't have to drive or take the metro. You stay in your cocoon, you extend the session with tea, you sleep better." },
        { h: "Suited to new parents and reduced-mobility clients", p: "Many of my Brussels clients are new parents who can't leave a newborn, or people for whom going out is a major effort. At-home massage becomes their only true moment for themselves." },
        { h: "For couples: double table available", p: "On request, I can come with a second table and a partner therapist for a simultaneous duo massage — ideal for a birthday or Valentine's Day at home." },
      ],
      nl: [
        { h: "Geen terugreis na de behandeling", p: "Dat detail verandert de ervaring. Na 90 minuten diepe ontspanning hoeft u niet meer de auto of metro te nemen. U blijft in uw cocon, drinkt nog een thee, slaapt beter." },
        { h: "Geschikt voor jonge ouders en personen met beperkte mobiliteit", p: "Veel van mijn Brusselse klanten zijn jonge ouders die hun baby niet alleen kunnen laten, of mensen voor wie buitenkomen een grote inspanning is. De massage aan huis wordt hun enige echte moment voor zichzelf." },
        { h: "Voor koppels: dubbele tafel mogelijk", p: "Op aanvraag kan ik met een tweede tafel en een collega-therapeut komen voor een gelijktijdige duomassage — ideaal voor een verjaardag of Valentijn thuis." },
      ],
    },
  },

  uccle: {
    slug: "massage-uccle",
    cityNames: { fr: "Uccle", en: "Uccle", nl: "Ukkel" },
    postalCode: "1180",
    distanceKm: 14,
    travelMin: 22,
    homePrice: { from: 160, fromShort: "160€" },
    topServices: {
      fr: [
        { name: "Reiki 1h30",                  price: "160€", slug: "reiki" },
        { name: "Thérapie cranio-sacrée 1h30", price: "160€", slug: "therapie-cranio-sacree" },
        { name: "Shiatsu 1h30",                price: "160€", slug: "shiatsu" },
        { name: "Massage relaxant 1h30",       price: "160€", slug: "massage/relaxant" },
      ],
      en: [
        { name: "Reiki 1h30",              price: "€160", slug: "reiki" },
        { name: "Craniosacral 1h30",       price: "€160", slug: "therapie-cranio-sacree" },
        { name: "Shiatsu 1h30",            price: "€160", slug: "shiatsu" },
        { name: "Relaxing massage 1h30",   price: "€160", slug: "massage/relaxant" },
      ],
      nl: [
        { name: "Reiki 1u30",                   price: "160€", slug: "reiki" },
        { name: "Craniosacrale therapie 1u30",  price: "160€", slug: "therapie-cranio-sacree" },
        { name: "Shiatsu 1u30",                 price: "160€", slug: "shiatsu" },
        { name: "Ontspanningsmassage 1u30",     price: "160€", slug: "massage/relaxant" },
      ],
    },
    logistics: {
      fr: "Le trajet depuis Halle prend 22 minutes via le ring R0, sortie Uccle-Calevoet. En heure de pointe (18 h), comptez 30 à 35 minutes — je préfère donc proposer 17 h ou après 19 h les jours de semaine. Le samedi, c'est fluide toute la journée. Je connais bien les quartiers Bois de la Cambre, Saint-Job, Fort Jaco, Calevoet, Vivier d'Oie. Pour les appartements en étage : aucun souci, ma table portable se transporte facilement.",
      en: "The trip from Halle takes 22 minutes via the R0 ring, Uccle-Calevoet exit. At rush hour (6pm), count 30 to 35 minutes — I prefer 5pm or after 7pm on weekdays. Saturday is smooth all day. I know the Bois de la Cambre, Saint-Job, Fort Jaco, Calevoet and Vivier d'Oie neighborhoods well. For upper-floor apartments: no problem, my portable table is easy to carry.",
      nl: "De rit vanuit Halle duurt 22 minuten via de R0-ring, afrit Ukkel-Calevoet. In de spits (18u) reken op 30 tot 35 minuten — ik stel daarom liever 17u of na 19u voor op weekdagen. Zaterdag is rustig de hele dag. Ik ken de buurten Ter Kameren, Sint-Job, Fort Jaco, Calevoet en Diesdelle goed. Voor appartementen op een verdieping: geen probleem, mijn draagbare tafel is gemakkelijk te dragen.",
    },
    faqLocal: {
      fr: [
        { q: "Je suis très stressé(e), que recommandez-vous ?",
          a: "À Uccle, je conseille souvent un premier reiki ou une thérapie cranio-sacrée pour ouvrir, puis une suite de 3 séances espacées d'une semaine. Effet plus profond et plus durable qu'un massage musculaire isolé." },
        { q: "Faites-vous des forfaits abonnement ?",
          a: "Oui. Pour les clients réguliers, je propose un tarif dégressif sur l'achat de 5 séances payées d'avance — environ 10 % de réduction. Idéal pour un accompagnement burn-out ou anxiété chronique." },
        { q: "Je vis dans une maison avec enfants, c'est compatible ?",
          a: "Absolument. Beaucoup de mes clients ucclois sont des parents qui réservent en fin d'après-midi quand un partenaire garde les enfants à l'étage. Une pièce calme avec porte qui ferme suffit." },
      ],
      en: [
        { q: "I'm very stressed, what do you recommend?",
          a: "In Uccle, I often suggest an initial reiki or craniosacral therapy to open up, then a series of 3 sessions one week apart. Deeper and longer-lasting effect than an isolated muscular massage." },
        { q: "Do you offer subscription packages?",
          a: "Yes. For regular clients, I offer a degressive rate on a pack of 5 prepaid sessions — about 10% discount. Ideal for a burnout or chronic anxiety support journey." },
        { q: "I live in a house with children, is that compatible?",
          a: "Absolutely. Many of my Uccle clients are parents who book in late afternoon while a partner watches the kids upstairs. A quiet room with a door that closes is enough." },
      ],
      nl: [
        { q: "Ik ben erg gestrest, wat raadt u aan?",
          a: "In Ukkel raad ik vaak eerst een reiki of craniosacrale therapie aan om te openen, en daarna een reeks van 3 sessies met een week tussen. Diepere en langduriger effect dan een geïsoleerde spiermassage." },
        { q: "Biedt u abonnementsformules aan?",
          a: "Ja. Voor vaste klanten bied ik een degressief tarief op 5 vooraf betaalde sessies — ongeveer 10 % korting. Ideaal voor begeleiding bij burn-out of chronische angst." },
        { q: "Ik woon in een huis met kinderen, is dat compatibel?",
          a: "Absoluut. Veel van mijn Ukkelse klanten zijn ouders die laat in de namiddag boeken terwijl een partner de kinderen boven houdt. Een rustige kamer met een deur die sluit volstaat." },
      ],
    },
    testimonial: {
      fr: { body: "Après un burn-out, j'avais besoin de douceur. La thérapie cranio-sacrée chez moi à Saint-Job a été une vraie révélation : 90 minutes où je n'ai plus pensé à rien. Je continue depuis 6 mois et mon sommeil a profondément changé.",
            author: "Inès D.", area: "Saint-Job" },
      en: { body: "After a burnout, I needed gentleness. Craniosacral therapy at my place in Saint-Job was a real revelation: 90 minutes where I stopped thinking. I've continued for 6 months and my sleep has deeply changed.",
            author: "Inès D.", area: "Saint-Job" },
      nl: { body: "Na een burn-out had ik zachtheid nodig. Craniosacrale therapie bij mij thuis in Sint-Job was een echte openbaring: 90 minuten waarin ik nergens aan dacht. Ik ga al 6 maanden door en mijn slaap is diep veranderd.",
            author: "Inès D.", area: "Sint-Job" },
    },
    meta: {
      title: {
        fr: "Massage à domicile à Uccle — Praticien certifié dès 160€ (1 h 30)",
        en: "At-home massage in Uccle — Certified practitioner from €160 (1h30)",
        nl: "Massage aan huis in Ukkel — Gecertificeerd vanaf 160€ (1u30)",
      },
      description: {
        fr: "Massage relaxant, shiatsu, reiki à domicile à Uccle (1180). 22 min depuis Halle. Bois de la Cambre, Saint-Job, Fort Jaco, Calevoet. Dès 160€ (1 h 30).",
        en: "Relaxing massage, shiatsu, reiki at home in Uccle (1180). 22 min from Halle. Bois de la Cambre, Saint-Job, Fort Jaco, Calevoet. From €160 (1h30).",
        nl: "Ontspanningsmassage, shiatsu, reiki aan huis in Ukkel (1180). 22 min vanuit Halle. Ter Kameren, Sint-Job, Fort Jaco, Calevoet. Vanaf 160€ (1u30).",
      },
    },
    hero: {
      fr: "Massage à domicile à Uccle : un soin sur-mesure, dans votre quartier",
      en: "At-home massage in Uccle: a tailored treatment, in your neighborhood",
      nl: "Massage aan huis in Ukkel: een persoonlijke behandeling, in uw buurt",
    },
    intro: {
      fr: "Uccle est l'une des communes que je connais le mieux : Bois de la Cambre, Saint-Job, Fort Jaco, Calevoet, Vivier d'Oie. Le trajet depuis le cabinet de Hal prend 22 minutes en voiture via le ring R0. J'arrive avec tout l'équipement : table professionnelle, draps propres et huiles bio. Aucun besoin de matériel chez vous, juste un espace calme.",
      en: "Uccle is one of the municipalities I know best: Bois de la Cambre, Saint-Job, Fort Jaco, Calevoet, Vivier d'Oie. The drive from the Halle studio takes 22 minutes via the R0 ring road. I arrive with everything: professional table, clean linens and organic oils. You need no equipment, just a quiet space.",
      nl: "Ukkel is een van de gemeenten die ik het beste ken: Ter Kameren, Sint-Job, Fort Jaco, Calevoet, Diesdelle. De rit vanuit de praktijk in Halle duurt 22 minuten via de R0-ring. Ik kom met alle uitrusting: professionele tafel, schone lakens en biologische oliën. U heeft niets nodig, alleen een rustige ruimte.",
    },
    sectionsTitle: {
      fr: "Ce qui plaît particulièrement à mes clients ucclois",
      en: "What my Uccle clients particularly enjoy",
      nl: "Wat mijn Ukkelse klanten bijzonder waarderen",
    },
    sections: {
      fr: [
        { h: "Soins reiki et cranio-sacrée demandés", p: "À Uccle, beaucoup de clients viennent pour les soins énergétiques — reiki et thérapie cranio-sacrée — plus que pour les massages musculaires. Souvent suite à un burn-out, une anxiété chronique, des troubles du sommeil." },
        { h: "Discrétion absolue", p: "Je sais que la discrétion compte. Voiture banalisée, matériel transporté dans une housse souple, ponctualité au quart d'heure. Personne dans votre immeuble ne saura que vous recevez un masseur." },
        { h: "Créneaux soir et week-end", p: "Les Ucclois travaillent souvent à Bruxelles centre ou européen avec des journées chargées. Je propose volontiers des créneaux après 18 h en semaine et le samedi matin." },
      ],
      en: [
        { h: "Reiki and craniosacral are popular", p: "In Uccle, many clients come for energy treatments — reiki and craniosacral therapy — more than for muscular massages. Often after burnout, chronic anxiety, sleep disorders." },
        { h: "Absolute discretion", p: "I know discretion matters. Unmarked car, equipment carried in a soft case, on-time to the quarter hour. No one in your building will know you're receiving a therapist." },
        { h: "Evening and weekend slots", p: "Uccle clients often work in central or European Brussels with heavy days. I gladly offer slots after 6pm on weekdays and Saturday morning." },
      ],
      nl: [
        { h: "Reiki en craniosacraal zijn populair", p: "In Ukkel komen veel klanten voor energetische behandelingen — reiki en craniosacrale therapie — meer dan voor spiermassages. Vaak na een burn-out, chronische angst, slaapstoornissen." },
        { h: "Absolute discretie", p: "Ik weet dat discretie belangrijk is. Anonieme wagen, materiaal in een zachte tas, stipt op tijd. Niemand in uw gebouw zal weten dat u een therapeut ontvangt." },
        { h: "Avond- en weekendslots", p: "Ukkelaars werken vaak in centraal of Europees Brussel met drukke dagen. Ik bied graag slots na 18 u op weekdagen en zaterdagochtend." },
      ],
    },
  },

  waterloo: {
    slug: "massage-waterloo",
    cityNames: { fr: "Waterloo", en: "Waterloo", nl: "Waterloo" },
    postalCode: "1410",
    distanceKm: 16,
    travelMin: 24,
    homePrice: { from: 160, fromShort: "160€" },
    topServices: {
      fr: [
        // Sportif 1h en cabinet (85€) — sportifs Waterloo viennent souvent au cabinet après le golf.
        { name: "Massage sportif 1 h (cabinet)", price: "85€",  slug: "massage/sportif" },
        { name: "Deep-tissue 1h30 à domicile",   price: "160€", slug: "massage/deep-tissues" },
        { name: "Massage relaxant 1h30",         price: "160€", slug: "massage/relaxant" },
        { name: "Douceur dorsale 1 h (cabinet)", price: "85€",  slug: "massage/douceur-dorsale" },
      ],
      en: [
        { name: "Sports massage 1h (studio)",    price: "€85",  slug: "massage/sportif" },
        { name: "Deep-tissue 1h30 at home",      price: "€160", slug: "massage/deep-tissues" },
        { name: "Relaxing massage 1h30",         price: "€160", slug: "massage/relaxant" },
        { name: "Back relaxation 1h (studio)",   price: "€85",  slug: "massage/douceur-dorsale" },
      ],
      nl: [
        { name: "Sportmassage 1u (praktijk)",    price: "85€",  slug: "massage/sportif" },
        { name: "Deep-tissue 1u30 aan huis",     price: "160€", slug: "massage/deep-tissues" },
        { name: "Ontspanningsmassage 1u30",      price: "160€", slug: "massage/relaxant" },
        { name: "Rugontspanning 1u (praktijk)",  price: "85€",  slug: "massage/douceur-dorsale" },
      ],
    },
    logistics: {
      fr: "Depuis Halle, j'arrive à Waterloo en 24 minutes par la N5 ou le ring R0 sortie 26. Les quartiers que je dessert régulièrement : le Chenois, le Lion, la Bergère, Mont-Saint-Jean, la Bruyère. Pour les golfeurs du Royal Waterloo Golf Club, je peux intervenir directement à la maison après votre partie — table chauffante prête en 5 minutes. Les samedis matin sont mes créneaux les plus demandés à Waterloo : pensez à réserver 10 jours à l'avance.",
      en: "From Halle, I reach Waterloo in 24 minutes via the N5 or R0 ring exit 26. The neighborhoods I regularly serve: Chenois, the Lion, the Bergère, Mont-Saint-Jean, the Bruyère. For golfers at the Royal Waterloo Golf Club, I can come straight home after your round — heated table ready in 5 minutes. Saturday mornings are my most-requested slots in Waterloo: book 10 days ahead.",
      nl: "Vanuit Halle bereik ik Waterloo in 24 minuten via de N5 of de R0-ring afrit 26. De buurten die ik regelmatig bedien: Chenois, de Leeuw, de Bergère, Mont-Saint-Jean, de Bruyère. Voor golfers van de Royal Waterloo Golf Club kan ik direct na uw ronde langskomen — verwarmde tafel klaar in 5 minuten. Zaterdagochtenden zijn mijn meest gevraagde slots in Waterloo: reserveer 10 dagen vooraf.",
    },
    faqLocal: {
      fr: [
        { q: "J'ai mal au dos chronique depuis le télétravail, qu'est-ce qui marche le mieux ?",
          a: "À Waterloo, le combo gagnant est : 1 massage deep-tissue de 90 minutes pour casser les nœuds installés, puis un massage relaxant 60 min toutes les 3 semaines pour entretenir. Plus efficace qu'une séance unique tous les 2 mois." },
        { q: "Je fais du trail / vélo. Quand programmer le massage ?",
          a: "Idéalement 24 à 48 h après l'effort pour la récupération, ou 3 à 5 jours avant une grosse échéance (semi, marathon, Liège-Bastogne-Liège cyclo). Pas dans les 12 h qui suivent l'effort intense : le muscle est trop enflammé." },
        { q: "Vous prenez les chèques sport-culture employeur ?",
          a: "Pas encore intégré au réseau Edenred / Sodexo. En revanche, les chèques cadeaux émis par le cabinet sont acceptés bien sûr, et je peux fournir une facture nominative pour vos remboursements éventuels." },
      ],
      en: [
        { q: "I have chronic back pain from remote work, what works best?",
          a: "In Waterloo, the winning combo is: 1 deep-tissue massage of 90 minutes to break up established knots, then a 60-min relaxing massage every 3 weeks for maintenance. More effective than a single session every 2 months." },
        { q: "I do trail running / cycling. When should I plan the massage?",
          a: "Ideally 24 to 48 hours after the effort for recovery, or 3 to 5 days before a major event (half-marathon, marathon, Liège-Bastogne-Liège cyclo). Not within 12 hours of intense effort: the muscle is too inflamed." },
        { q: "Do you accept employer sport-culture vouchers?",
          a: "Not yet integrated with the Edenred / Sodexo network. However, gift cards issued by the practice are of course accepted, and I can provide a named invoice for any reimbursements." },
      ],
      nl: [
        { q: "Ik heb chronische rugpijn door telewerk, wat werkt het best?",
          a: "In Waterloo is de winnende combinatie: 1 deep-tissue massage van 90 minuten om gevestigde knopen los te maken, dan een ontspanningsmassage van 60 min om de 3 weken voor onderhoud. Doeltreffender dan één enkele sessie om de 2 maanden." },
        { q: "Ik doe trail / fietsen. Wanneer plan ik de massage?",
          a: "Idealiter 24 tot 48 uur na de inspanning voor herstel, of 3 tot 5 dagen voor een belangrijke wedstrijd (halve, marathon, Luik-Bastenaken-Luik cyclo). Niet binnen 12 uur na intense inspanning: de spier is te ontstoken." },
        { q: "Aanvaardt u sport-cultuurcheques van de werkgever?",
          a: "Nog niet aangesloten bij het Edenred / Sodexo-netwerk. Wel worden cadeaubonnen uitgegeven door de praktijk uiteraard aanvaard, en ik kan een factuur op naam leveren voor eventuele terugbetalingen." },
      ],
    },
    testimonial: {
      fr: { body: "Je fais un marathon par an et le massage sportif chez moi à Mont-Saint-Jean est devenu un rituel : 3 jours avant l'épreuve. Les jambes répondent mieux et la récup est plus rapide. Stéphane connaît parfaitement les coureurs.",
            author: "Marc T.", area: "Mont-Saint-Jean" },
      en: { body: "I run one marathon a year and the sports massage at my place in Mont-Saint-Jean has become a ritual: 3 days before the race. Legs respond better and recovery is faster. Stéphane knows runners perfectly.",
            author: "Marc T.", area: "Mont-Saint-Jean" },
      nl: { body: "Ik loop één marathon per jaar en de sportmassage bij mij thuis in Mont-Saint-Jean is een ritueel geworden: 3 dagen voor de wedstrijd. De benen reageren beter en het herstel is sneller. Stéphane kent lopers perfect.",
            author: "Marc T.", area: "Mont-Saint-Jean" },
    },
    meta: {
      title: {
        fr: "Massage à domicile à Waterloo — Sportif, relaxant, deep-tissue dès 160€ (1 h 30)",
        en: "At-home massage in Waterloo — Sports, relaxing, deep-tissue from €160 (1h30)",
        nl: "Massage aan huis in Waterloo — Sport, ontspanning, deep-tissue vanaf 160€ (1u30)",
      },
      description: {
        fr: "Massage à domicile à Waterloo (1410) : sportif, relaxant, deep-tissue, shiatsu. 24 min depuis Halle. Dès 85€ (1 h cabinet) ou 160€ (1 h 30 domicile).",
        en: "At-home massage in Waterloo (1410): sports, relaxing, deep-tissue, shiatsu. 24 min from Halle. From €85 (1h studio) or €160 (1h30 at home).",
        nl: "Massage aan huis in Waterloo (1410): sport, ontspanning, deep-tissue, shiatsu. 24 min vanuit Halle. Vanaf 85€ (1u praktijk) of 160€ (1u30 aan huis).",
      },
    },
    hero: {
      fr: "Massage à domicile à Waterloo : récupération, détente, lâcher-prise",
      en: "At-home massage in Waterloo: recovery, relaxation, letting go",
      nl: "Massage aan huis in Waterloo: herstel, ontspanning, loslaten",
    },
    intro: {
      fr: "Waterloo, c'est 24 minutes de route depuis Hal via la N5 ou le ring. J'y interviens régulièrement dans le quartier du Chenois, à proximité du Royal Waterloo Golf Club, ainsi qu'au Lion. Pour les sportifs, le massage sportif et le deep-tissue sont parfaits après une partie de golf, un trail ou un weekend vélo en forêt de Soignes.",
      en: "Waterloo is a 24-minute drive from Halle via the N5 or ring road. I work regularly in the Chenois neighborhood, near the Royal Waterloo Golf Club, and at the Lion. For athletes, sports massage and deep-tissue are perfect after a round of golf, a trail run or a cycling weekend in Soignes forest.",
      nl: "Waterloo ligt op 24 minuten rijden vanuit Halle via de N5 of de ring. Ik werk er regelmatig in de wijk Chenois, vlakbij de Royal Waterloo Golf Club, en bij de Leeuw. Voor sporters zijn sportmassage en deep-tissue perfect na een rondje golf, een trail of een fietsweekend in het Zoniënwoud.",
    },
    sectionsTitle: {
      fr: "Pourquoi mes clients waterlootois reviennent",
      en: "Why my Waterloo clients come back",
      nl: "Waarom mijn klanten uit Waterloo terugkomen",
    },
    sections: {
      fr: [
        { h: "Massage sportif après golf ou trail", p: "Je propose un massage sportif de 60 min (115€ à domicile) ciblé sur les zones les plus sollicitées : épaules et bas du dos pour le golf, ischio-jambiers et mollets pour la course. Travail en profondeur, étirements ciblés." },
        { h: "Forfait couple disponible", p: "Pour les couples de Waterloo, je propose un duo massage simultané sur demande (deux tables, deux praticiens). Format apprécié pour les anniversaires et les fêtes de fin d'année." },
        { h: "Discrétion et matériel professionnel", p: "Table chauffante, draps en éponge, huiles bio chauffées au degré près. Vous ne fournissez rien à part une serviette de bain si vous préférez la vôtre." },
      ],
      en: [
        { h: "Sports massage after golf or trail", p: "I offer a 60-min sports massage (€115 at home) focused on the most-used zones: shoulders and lower back for golf, hamstrings and calves for running. Deep work, targeted stretching." },
        { h: "Couple package available", p: "For Waterloo couples, I offer a simultaneous duo massage on request (two tables, two therapists). A favorite for birthdays and end-of-year celebrations." },
        { h: "Discretion and professional gear", p: "Heated table, terry linens, organic oils warmed to the degree. You provide nothing except a towel if you prefer your own." },
      ],
      nl: [
        { h: "Sportmassage na golf of trail", p: "Ik bied een sportmassage van 60 min aan (115€ aan huis) gericht op de meest belaste zones: schouders en onderrug voor golf, hamstrings en kuiten voor loopsport. Diepgaand werk, gerichte stretching." },
        { h: "Koppelarrangement beschikbaar", p: "Voor koppels uit Waterloo bied ik op aanvraag een gelijktijdige duomassage aan (twee tafels, twee therapeuten). Populair voor verjaardagen en eindejaarsfeesten." },
        { h: "Discretie en professioneel materiaal", p: "Verwarmde tafel, badstof lakens, biologische oliën op temperatuur. U brengt niets mee behalve een handdoek als u uw eigen verkiest." },
      ],
    },
  },
};
