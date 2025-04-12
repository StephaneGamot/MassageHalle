export const MetadataHomePage = [
	{
		"@context": "https://schema.org",
		"@type": "HealthAndBeautyBusiness",
		"name": "Shiatsu & Reiki & à Halle Brabant Flamand",
		"description": "Studio de massage à Halle offrant Shiatsu, Reiki, et réflexologie pour une relaxation profonde et une harmonie complète.",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Octaaf de Kerchove d'exaerdestraat 193",
			"addressLocality": "Halle",
			"postalCode": "1501",
			"addressCountry": "BE",
		},
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				"opens": "10:00",
				"closes": "20:00",
			},
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": "Saturday",
				"opens": "10:00",
				"closes": "20:00",
			},
		],
		"telephone": "O477131993",
		"email": "lavoiedubienetre@outlook.com",
		"image": "https://www.lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg",
		"url": "https://www.lavoiedubienetre.be",
		"priceRange": "$$",
		"sameAs": ["https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/"],
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Services de massage",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Massage 'Voyage des Sens' - 2h",
						"url": "https://lavoiedubienetre.be/massage/voyage-des-sens",
						"description":
							"Ce massage doux de 2 h est une invitation à un voyage intérieur, où chaque toucher est conçu pour éveiller les sens et procurer une sensation de bien-être profond.",
						"offers": {
							"@type": "Offer",
							"price": "119",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Massage 'Anti-Cellulite'",
						"url": "https://lavoiedubienetre.be/massage/anti-cellulite",
						"description": "À la croisée des techniques de drainage et de la stimulation circulatoire, ce massage vise à déloger les dépôts de graisse et tonifier la peau.",
						"offers": {
							"@type": "Offer",
							"price": "59",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "'Douceur Dorsale'",
						"url": "https://lavoiedubienetre.be/massage/douceur-dorsale",
						"description": "Une exploration détaillée des points de tension du dos, offrant une libération et une revitalisation de cette zone cruciale.",
						"offers": {
							"@type": "Offer",
							"price": "59",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "'Toucher Shiatsu' ",
						"url": "https://lavoiedubienetre.be/shiatsu/traditionnel",
						"description": "Basé sur les principes de l'énergie vitale, le Shiatsu vise à rétablir la circulation énergétique optimale et favoriser un bien-être global.",
						"offers": {
							"@type": "Offer",
							"price": "59",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Massage sur chaise - Amma 15 mn",
						"url": "https://lavoiedubienetre.be/shiatsu/amma",
						"description": "Dans la dynamique effrénée de la vie moderne, le massage sur chaise offre un moment de pause pour se ressourcer.",
						"offers": {
							"@type": "Offer",
							"price": "15",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Reiki",
						"url": "https://lavoiedubienetre.be/reiki",
						"description": "Au cœur d'un monde en perpétuel mouvement, le Reiki émerge comme un phare de tranquillité, offrant une voie vers l'équilibre et la sérénité. ",
						"offers": {
							"@type": "Offer",
							"price": "49",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Massage 'Anti-Stress' - 1h30",
						"url": "https://lavoiedubienetre.be/massage/relaxant",
						"description": "Conçu pour dénouer les noeuds de tension, revitaliser l'esprit fatigué et restaurer l'équilibre intérieur.",
						"offers": {
							"@type": "Offer",
							"price": "89",
							"priceCurrency": "EUR",
						},
					},
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Massage Sportif",
						"url": "https://lavoiedubienetre.be/massage/sportif",
						"description": "Optimise les performances sportives, accélère la récupération et prévient les blessures. Le muscle est travailler en profondeur afin de denouer les noeuds.",
						"offers": {
							"@type": "Offer",
							"price": "59",
							"priceCurrency": "EUR",
						},
					},
				},{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Reflexologie plantaire",
						"url": "https://lavoiedubienetre.be/reflexologie-plantaire",
						"description": "Considéré comme une médecine douce, elle stimule les points réflexes des pieds pour améliorer la santé physique, emotionnelle et mentale sur le temps.",
						"offers": {
							"@type": "Offer",
							"price": "59",
							"priceCurrency": "EUR",
						},
					},
				},
			],
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "Quels sont les bienfaits du Reiki ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Le Reiki favorise la relaxation profonde, aide à soulager le stress et l'anxiété, et soutient le processus naturel de guérison du corps.",
				},
			},
			{
				"@type": "Question",
				"name": "Combien de temps dure une séance de réflexologie plantaire ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Une séance typique de réflexologie plantaire dure environ 60 minutes, offrant une relaxation tout en stimulant les points réflexes des pieds.",
				},
			},
			{
				"@type": "Question",
				"name": "Le massage Shiatsu peut-il aider à soulager les maux de tête ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Oui, le Shiatsu peut contribuer à soulager les maux de tête en rééquilibrant l'énergie du corps et en réduisant la tension musculaire.",
				},
			},
			{
				"@type": "Question",
				"name": "Puis-je recevoir un massage si je suis enceinte ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Des massages spécifiques sont disponibles pour les femmes enceintes après le premier trimestre, mais une consultation préalable est recommandée.",
				},
			},
			{
				"@type": "Question",
				"name": "Quelle est la différence entre le massage relaxant et le massage sportif ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Le massage relaxant vise à détendre le corps et l'esprit, tandis que le massage sportif cible la récupération musculaire et la prévention des blessures.",
				},
			},
			{
				"@type": "Question",
				"name": "Le massage sur chaise est-il efficace pour le mal de dos ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Oui, le massage sur chaise peut cibler spécifiquement les tensions dans le dos, offrant un soulagement rapide et efficace.",
				},
			},
			{
				"@type": "Question",
				"name": "Comment le Shiatsu diffère-t-il du massage traditionnel ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Le Shiatsu utilise des techniques de pression sur des points spécifiques pour rééquilibrer l'énergie, contrairement aux techniques de pétrissage du massage traditionnel.",
				},
			},
			{
				"@type": "Question",
				"name": "Dois-je apporter quelque chose à ma séance de Reiki ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Rien n'est nécessaire à part une tenue confortable et une ouverture d'esprit à l'expérience de guérison énergétique.",
				},
			},
			{
				"@type": "Question",
				"name": "La réflexologie plantaire est-elle douloureuse ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Bien que certains points réflexes puissent être sensibles, la réflexologie est généralement une expérience relaxante et non douloureuse.",
				},
			},
			{
				"@type": "Question",
				"name": "Combien de séances de Shiatsu sont recommandées pour ressentir des bienfaits ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Bien que des bienfaits puissent être ressentis dès la première séance, un programme de plusieurs séances est souvent recommandé pour des résultats optimaux.",
				},
			},
			{
				"@type": "Question",
				"name": "Quelle est la fréquence idéale pour recevoir un massage relaxant ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Cela varie selon les besoins individuels, mais une séance mensuelle est courante pour maintenir le bien-être général.",
				},
			},
			{
				"@type": "Question",
				"name": "Le Reiki peut-il être pratiqué à distance ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Oui, le Reiki à distance est possible et peut offrir des bienfaits comparables au Reiki en personne.",
				},
			},
			{
				"@type": "Question",
				"name": "Comment dois-je me préparer à une séance de Shiatsu ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Portez des vêtements confortables et évitez de manger un gros repas juste avant votre séance.",
				},
			},
			{
				"@type": "Question",
				"name": "Le massage sur chaise convient-il aux personnes âgées ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Absolument, le massage sur chaise est adapté à tous les âges et peut être particulièrement bénéfique pour les personnes âgées.",
				},
			},
			{
				"@type": "Question",
				"name": "Puis-je recevoir un massage si j'ai des problèmes de santé spécifiques ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Une consultation préalable est nécessaire pour les conditions médicales spécifiques afin d'adapter le soin à vos besoins.",
				},
			},
			{
				"@type": "Question",
				"name": "Quels sont les effets secondaires possibles après une séance de réflexologie plantaire ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "La plupart des gens ressentent une sensation de détente. Rarement, certains peuvent expérimenter une légère fatigue, indiquant que le corps se détoxifie.",
				},
			},
			{
				"@type": "Question",
				"name": "Le Shiatsu est-il adapté aux enfants ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Oui, le Shiatsu peut être bénéfique pour les enfants, en adaptant la pression et en se concentrant sur des séances plus courtes.",
				},
			},
			{
				"@type": "Question",
				"name": "Comment le Reiki agit-il sur le stress ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Le Reiki aide à réduire le stress en favorisant un état de relaxation profonde qui calme l'esprit et le corps.",
				},
			},
			{
				"@type": "Question",
				"name": "La réflexologie plantaire peut-elle aider avec la digestion ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Oui, en stimulant les points réflexes liés au système digestif, la réflexologie peut aider à améliorer la digestion.",
				},
			},
			{
				"@type": "Question",
				"name": "Est-il nécessaire de se déshabiller pour un massage Shiatsu ?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Non, le Shiatsu se pratique habillé, en portant des vêtements souples et confortables.",
				},
			},
		],
	},
];
