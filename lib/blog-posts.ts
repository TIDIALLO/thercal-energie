export type BlogSection = {
  readonly heading: string;
  readonly content: string;
};

export type BlogPost = {
  readonly title: string;
  readonly excerpt: string;
  readonly slug: string;
  readonly date: string;
  readonly readTime: string;
  readonly category: string;
  readonly image: string;
  readonly sections: readonly BlogSection[];
};

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    title: "Qu'est-ce que le calorifugeage et pourquoi est-il essentiel ?",
    excerpt:
      "Découvrez l'importance du calorifugeage pour réduire les déperditions thermiques et améliorer l'efficacité énergétique de vos installations.",
    slug: "importance-calorifugeage",
    date: "15 Nov 2024",
    readTime: "5 min",
    category: "Calorifugeage",
    image: "/images/thercal1.jpg",
    sections: [
      {
        heading: "Pourquoi isoler vos réseaux ?",
        content:
          "Le calorifugeage évite les pertes d'énergie sur les réseaux de fluide chaud ou froid. Une gaine performante maintient la température idéale sur toute la boucle de distribution.",
      },
      {
        heading: "Quels matériaux privilégier ?",
        content:
          "Nous sélectionnons des mousses élastomères ou des coquilles en laine minérale suivant la température d'usage, toujours avec un pare-vapeur adapté.",
      },
      {
        heading: "Comment garantir la durabilité ?",
        content:
          "Chaque intervention inclut un contrôle qualité et une maintenance planifiée pour prolonger la durée de vie de l'isolant.",
      },
    ],
  },
  {
    title: "Les différents types d'isolation thermique pour votre habitation",
    excerpt:
      "Combles, murs, sols, toiture : comment choisir la meilleure solution d'isolation thermique adaptée à vos besoins spécifiques.",
    slug: "types-isolation-thermique",
    date: "10 Nov 2024",
    readTime: "7 min",
    category: "Isolation",
    image: "/images/thercal2.jpg",
    sections: [
      {
        heading: "Combles et toiture",
        content:
          "Le soufflage de laine minérale est idéal pour traiter rapidement de grandes surfaces. Pour des combles aménagés, nous optons pour des panneaux semi-rigides.",
      },
      {
        heading: "Murs et planchers",
        content:
          "L'isolation thermique par l'extérieur garantit un confort durable sans réduire l'espace intérieur. Les planchers bas profitent de panneaux rigides haute densité.",
      },
      {
        heading: "Choisir la bonne solution",
        content:
          "Nous réalisons un audit thermique pour définir la meilleure combinaison de matériaux et chiffrer précisément les gains d'énergie attendus.",
      },
    ],
  },
  {
    title: "Comment économiser jusqu'à 30% sur vos factures d'énergie",
    excerpt:
      "Les meilleures pratiques et solutions d'isolation pour réduire significativement vos dépenses énergétiques tout en améliorant votre confort.",
    slug: "economies-energie-isolation",
    date: "5 Nov 2024",
    readTime: "6 min",
    category: "Économies",
    image: "/images/thercal3.jpg",
    sections: [
      {
        heading: "Audit énergétique express",
        content:
          "Un relevé infrarouge permet d'identifier les ponts thermiques. Nous priorisons ensuite les interventions pour obtenir un ROI rapide.",
      },
      {
        heading: "Isolation + pilotage",
        content:
          "Coupler une isolation performante avec un pilotage intelligent du chauffage permet d'atteindre jusqu'à 30% d'économies.",
      },
      {
        heading: "Suivi post-travaux",
        content:
          "Nous assurons un suivi trimestriel la première année pour vérifier les performances et ajuster les réglages si nécessaire.",
      },
    ],
  },
  {
    title: "Calorifugeage industriel : normes et réglementations 2024",
    excerpt:
      "Tour d'horizon des nouvelles normes en vigueur pour le calorifugeage dans le secteur industriel et les bâtiments tertiaires.",
    slug: "normes-calorifugeage-2024",
    date: "1 Nov 2024",
    readTime: "8 min",
    category: "Réglementation",
    image: "/images/thercal1.jpg",
    sections: [
      {
        heading: "Les évolutions 2024",
        content:
          "Les prescriptions RE2020 imposent des résistances thermiques minimales sur les réseaux. Nous dimensionnons chaque projet pour être conformes.",
      },
      {
        heading: "Traçabilité des matériaux",
        content:
          "Chaque isolant posé fait l'objet d'une fiche produit et d'une garantie fournisseur, archivée dans votre dossier client.",
      },
      {
        heading: "Contrôles et maintenance",
        content:
          "Nos équipes réalisent des inspections visuelles annuelles et des tests ponctuels pour assurer la tenue dans le temps.",
      },
    ],
  },
  {
    title: "Les matériaux d'isolation écologiques et performants",
    excerpt:
      "Laine de roche, ouate de cellulose, chanvre : comparatif des matériaux écologiques pour une isolation thermique responsable.",
    slug: "materiaux-isolation-ecologiques",
    date: "28 Oct 2024",
    readTime: "6 min",
    category: "Isolation",
    image: "/images/thercal2.jpg",
    sections: [
      {
        heading: "Pourquoi passer au biosourcé ?",
        content:
          "Ces matériaux stockent du carbone et offrent une excellente régulation hygrométrique, parfait pour les bâtiments occupés.",
      },
      {
        heading: "Choisir selon la zone",
        content:
          "Nous alternons laine de bois, chanvre ou ouate selon la structure existante et la résistance mécanique attendue.",
      },
      {
        heading: "Retour sur investissement",
        content:
          "Les aides locales et primes énergie accélèrent l'amortissement tout en valorisant le bâtiment.",
      },
    ],
  },
  {
    title: "Diagnostic thermique : pourquoi est-il indispensable ?",
    excerpt:
      "Avant d'entreprendre des travaux d'isolation, le diagnostic thermique permet d'identifier précisément les points faibles de votre bâtiment.",
    slug: "diagnostic-thermique-indispensable",
    date: "22 Oct 2024",
    readTime: "5 min",
    category: "Calorifugeage",
    image: "/images/thercal3.jpg",
    sections: [
      {
        heading: "Comprendre la consommation actuelle",
        content:
          "Nous analysons votre historique énergétique et relevons les zones de forte déperdition pour prioriser les travaux.",
      },
      {
        heading: "Outils utilisés",
        content:
          "Caméra thermique, sondes connectées et modélisation 3D nous permettent de quantifier précisément les gains possibles.",
      },
      {
        heading: "Plan d'action",
        content:
          "Le rapport final propose une feuille de route phasée, chiffrée et compatible avec les aides financières disponibles.",
      },
    ],
  },
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

