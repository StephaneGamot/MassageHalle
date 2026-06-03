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
    homePrice: { from: 110, fromShort: "110 €" },
    meta: {
      title: {
        fr: "Massage à domicile à Bruxelles — Cabinet à 25 min · 4.9★",
        en: "At-home massage in Brussels — Studio 25 min away · 4.9★",
        nl: "Massage aan huis in Brussel — Praktijk op 25 min · 4.9★",
      },
      description: {
        fr: "Massage relaxant, shiatsu, reiki à domicile à Bruxelles (toutes communes). Praticien certifié, 10+ ans d'expérience. Cabinet à Halle, déplacement dès 110 €.",
        en: "At-home relaxing massage, shiatsu, reiki across Brussels. Certified practitioner, 10+ years experience. Studio in Halle, at-home from €110.",
        nl: "Ontspanningsmassage, shiatsu, reiki aan huis in Brussel. Gecertificeerd, 10+ jaar ervaring. Praktijk in Halle, aan huis vanaf 110 €.",
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
    homePrice: { from: 110, fromShort: "110 €" },
    meta: {
      title: {
        fr: "Massage à domicile à Uccle — Praticien certifié dès 110 €",
        en: "At-home massage in Uccle — Certified practitioner from €110",
        nl: "Massage aan huis in Ukkel — Gecertificeerd vanaf 110 €",
      },
      description: {
        fr: "Massage relaxant, shiatsu, reiki à domicile à Uccle (1180). Praticien expérimenté, 22 min depuis Halle. Bois de la Cambre, Saint-Job, Fort Jaco, Calevoet.",
        en: "Relaxing massage, shiatsu, reiki at home in Uccle (1180). Experienced practitioner, 22 min from Halle. Bois de la Cambre, Saint-Job, Fort Jaco, Calevoet.",
        nl: "Ontspanningsmassage, shiatsu, reiki aan huis in Ukkel (1180). Ervaren beoefenaar, 22 min vanuit Halle. Ter Kameren, Sint-Job, Fort Jaco, Calevoet.",
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
    homePrice: { from: 115, fromShort: "115 €" },
    meta: {
      title: {
        fr: "Massage à domicile à Waterloo — Sportif, relaxant, deep-tissue dès 115 €",
        en: "At-home massage in Waterloo — Sports, relaxing, deep-tissue from €115",
        nl: "Massage aan huis in Waterloo — Sport, ontspanning, deep-tissue vanaf 115 €",
      },
      description: {
        fr: "Massage à domicile à Waterloo (1410) : sportif, relaxant, deep-tissue, shiatsu. Praticien certifié, 24 min depuis Halle. Idéal après le golf, le trail ou le bureau.",
        en: "At-home massage in Waterloo (1410): sports, relaxing, deep-tissue, shiatsu. Certified practitioner, 24 min from Halle. Ideal after golf, trail or office.",
        nl: "Massage aan huis in Waterloo (1410): sport, ontspanning, deep-tissue, shiatsu. Gecertificeerd, 24 min vanuit Halle. Ideaal na golf, trail of kantoor.",
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
        { h: "Massage sportif après golf ou trail", p: "Je propose un massage sportif de 60 min (115 € à domicile) ciblé sur les zones les plus sollicitées : épaules et bas du dos pour le golf, ischio-jambiers et mollets pour la course. Travail en profondeur, étirements ciblés." },
        { h: "Forfait couple disponible", p: "Pour les couples de Waterloo, je propose un duo massage simultané sur demande (deux tables, deux praticiens). Format apprécié pour les anniversaires et les fêtes de fin d'année." },
        { h: "Discrétion et matériel professionnel", p: "Table chauffante, draps en éponge, huiles bio chauffées au degré près. Vous ne fournissez rien à part une serviette de bain si vous préférez la vôtre." },
      ],
      en: [
        { h: "Sports massage after golf or trail", p: "I offer a 60-min sports massage (€115 at home) focused on the most-used zones: shoulders and lower back for golf, hamstrings and calves for running. Deep work, targeted stretching." },
        { h: "Couple package available", p: "For Waterloo couples, I offer a simultaneous duo massage on request (two tables, two therapists). A favorite for birthdays and end-of-year celebrations." },
        { h: "Discretion and professional gear", p: "Heated table, terry linens, organic oils warmed to the degree. You provide nothing except a towel if you prefer your own." },
      ],
      nl: [
        { h: "Sportmassage na golf of trail", p: "Ik bied een sportmassage van 60 min aan (115 € aan huis) gericht op de meest belaste zones: schouders en onderrug voor golf, hamstrings en kuiten voor loopsport. Diepgaand werk, gerichte stretching." },
        { h: "Koppelarrangement beschikbaar", p: "Voor koppels uit Waterloo bied ik op aanvraag een gelijktijdige duomassage aan (twee tafels, twee therapeuten). Populair voor verjaardagen en eindejaarsfeesten." },
        { h: "Discretie en professioneel materiaal", p: "Verwarmde tafel, badstof lakens, biologische oliën op temperatuur. U brengt niets mee behalve een handdoek als u uw eigen verkiest." },
      ],
    },
  },
};
