# 🌿 La Voie du Bien-Être – Site Vitrine Multilingue

Ce dépôt contient le code source du site [La Voie du Bien-Être](https://www.lavoiedubienetre.be), un site vitrine élégant dédié au bien-être et aux soins holistiques (massages, Reiki, Shiatsu…).
Conçu avec une attention particulière à la **performance**, à l’**accessibilité** et au **référencement naturel (SEO)**, ce site incarne un équilibre entre design, émotion et technologie.

---

## ✨ Objectifs du projet

- 💆‍♀️ Présenter les différents **soins & massages**
- 💬 Mettre en avant des **témoignages humains et sincères**
- 🌍 Offrir une expérience multilingue : **Français, Anglais, Néerlandais**
- 📈 Optimiser la visibilité SEO pour des recherches locales et thématiques
- ♿ Garantir un site **accessible et responsive** pour tous les publics

---

## 🛠️ Stack technique

- **Framework** : [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Internationalisation** : [`next-intl`](https://next-intl.js.org/) – i18n dynamique
- **Accessibilité** : WCAG 2.1 AA compliant (`jest-axe`, ARIA, contrastes, tabIndex…)
- **SEO** :
  - Balises dynamiques (`title`, `description`, `Open Graph`, `Twitter`)
  - Données structurées JSON-LD (`Website`, `Service`, `FAQ`, `Person`)
  - Canonical URLs, sitemap et redirections optimisées
- **Performance** : Lazy loading, CDN Vercel, Turbopack

---

## 📁 Structure du projet

```
/src
 ├─ /app
 │   └─ [locale]              // Pages multilingues dynamiques
 ├─ /components               // Composants UI (Hero, Cards, Footer…)
 ├─ /messages                 // Traductions i18n (fr, en, nl)
 ├─ /i18n                     // Configuration routing i18n
 ├─ /data                     // Données structurées (massages, témoignages, FAQ…)
```

---

## 🧠 Fonctionnalités

- 🌍 **Navigation multilingue fluide** (FR / EN / NL)
- 🧩 **Composants réutilisables** (massages, CTA, témoignages…)
- 🪷 **Pages massages individuelles** avec : images, bénéfices, description, tarifs, SEO
- 🧾 **FAQ dynamique** traduite
- 📞 **Page Contact** ergonomique
- 📊 **Tracking Analytics** + Vercel Insights

---

## 🧪 Tests ( en cours )

- **Accessibilité** avec `jest-axe`
- **CI/CD** via GitHub Actions (tests automatiques)
- **SEO audit** via Lighthouse & SEO meta testing tools

---

## 👤 Auteur

**Stéphane Gamot**  
🎯 Développeur Front-End spécialisé React / Next.js  
📍 Basé en Belgique – Freelance / Consultant  
📫 [stephanegamot@outlook.com](mailto:stephanegamot@outlook.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/stephanegamot/) • [Site](https://www.lavoiedubienetre.be)

---

## 📄 Licence

Ce projet est sous licence MIT.  
Merci de respecter le contenu, les visuels et la philosophie du site dans toute réutilisation.