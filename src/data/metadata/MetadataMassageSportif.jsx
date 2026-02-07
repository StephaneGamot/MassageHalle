export const MetadataMassageSportif = [
	{
		"@context": "https://schema.org",
		"@type": "HealthAndBeautyBusiness",
		name: "Massage sportif à Halle - Halle",
		description: "Massage sportif Halle. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Oct de kerchove d'exaerdestraat 193",
			addressLocality: "Halle",
			postalCode: "1501",
			addressCountry: "BE",
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				opens: "10:00",
				closes: "20:00",
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Saturday",
				opens: "10:00",
				closes: "20:00",
			},
		],
		telephone: "O477131993",
		email: "lavoiedubienetre@outlook.com",
		image: "https://lavoiedubienetre.be/img/banniere-la-voie-du-bien-etre.webp",
		url: "https://lavoiedubienetre.be",
		priceRange: "$$",
		sameAs: ["https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/"],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Services de massage Sportif",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Massage Sportif",
						url: "https://lavoiedubienetre.be/massage/sportif",
						description:
							"Dans l'univers du sport, la performance et la récupération sont deux piliers essentiels pour tout athlète, qu'il soit amateur passionné ou professionnel aguerri.",
						offers: {
							"@type": "Offer",
							price: "69",
							priceCurrency: "EUR",
						},
					},
				},
			],
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Quels sont les principaux bienfaits du massage sportif ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le massage sportif aide à optimiser les performances sportives, accélérer la récupération après l'effort, réduire les risques de blessures et soulager les tensions musculaires.",
				},
			},
			{
				"@type": "Question",
				name: "Combien de temps avant une compétition devrais-je recevoir un massage sportif ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Il est recommandé de recevoir un massage sportif 2 à 3 jours avant une compétition pour améliorer la performance sans risquer de détendre excessivement les muscles.",
				},
			},
			{
				"@type": "Question",
				name: "Le massage sportif est-il utile uniquement pour les athlètes ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Bien qu'il soit spécialement conçu pour les athlètes, le massage sportif bénéficie à tous ceux qui pratiquent une activité physique régulière, en aidant à maintenir le corps en bonne condition physique.",
				},
			},
			{
				"@type": "Question",
				name: "À quelle fréquence devrais-je recevoir un massage sportif ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "La fréquence idéale peut varier selon vos objectifs et votre niveau d'activité. Pour une maintenance générale, une séance tous les 1 à 2 mois est recommandée. Pour les athlètes en entraînement intensif, une fréquence hebdomadaire peut être bénéfique.",
				},
			},
			{
				"@type": "Question",
				name: "Quelle est la durée d'une séance de massage sportif ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Les séances de massage sportif durent généralement entre 30 minutes et 1 heure, en fonction des besoins spécifiques de la personne.",
				},
			},
			{
				"@type": "Question",
				name: "Le massage sportif peut-il aider à traiter une blessure ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le massage sportif peut être une partie intégrante d'un plan de traitement des blessures, en aidant à soulager la douleur, à réduire l'inflammation et à accélérer la guérison. Toutefois, il doit être réalisé en complément d'un suivi médical approprié.",
				},
			},
			{
				"@type": "Question",
				name: "Y a-t-il des contre-indications au massage sportif ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le massage sportif n'est pas recommandé en cas de blessures aiguës, d'infections, de fièvre ou de certaines conditions médicales chroniques sans l'avis d'un médecin.",
				},
			},
			{
				"@type": "Question",
				name: "Comment le massage sportif diffère-t-il des autres types de massage ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le massage sportif se concentre sur les besoins spécifiques des sportifs, en utilisant des techniques qui ciblent les tissus musculaires profonds pour améliorer la récupération, la flexibilité et les performances.",
				},
			},
			{
				"@type": "Question",
				name: "Dois-je faire quelque chose de particulier après un massage sportif ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Il est conseillé de boire beaucoup d'eau pour aider à éliminer les toxines libérées pendant le massage, et d'éviter les efforts intenses immédiatement après la séance pour permettre au corps de récupérer.",
				},
			},
			{
				"@type": "Question",
				name: "Peut-on ressentir de la douleur pendant ou après un massage sportif ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Il est commun de ressentir une certaine sensibilité pendant ou après un massage sportif, surtout si des techniques profondes sont utilisées. Toutefois, la douleur ne doit pas être extrême et devrait être communiquée au masseur.",
				},
			},
		],
	},
];
