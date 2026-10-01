export const links = {
  mail: "mailto:vanhove.pierre@proton.me", // à remplacer
  linkedin: "https://linkedin.com/in/pierre-vanhove",
  github: "https://github.com/Lenfos",
  itch: "https://lenfos.itch.io",
  cv: { fr: "/Pierre_Vanhove_CV_Fr.pdf", en: "/Pierre_Vanhove_CV_English.pdf" },
};

/* featured: true => affiché sur l'accueil. Les autres apparaissent avec "Voir tous les projets".
   Champs optionnels : images ["/projects/x1.jpg"], video (URL .mp4 ou .webm), links { play, code, video } */
export const projects = [
  { id: "p1", featured: true, title: "Mad Space", g: ["#3A4A2A", "#7A6F3A"], tags: ["UE5", "Blueprint", "Game Jam"],
    short: { fr: "Game Jam académique", en: "Academic Game Jam" },
    role: { fr: "Level Designer", en: "Level Designer" },
    long: { fr: "Jeu créé en 48h lors de la Wonder Jam 2024 de l’UQAC, sur le thème « Dimension », avec une équipe de quatre développeurs. En tant que Game/Level Designer, j’ai conçu l’exploration et les mécaniques de gestion de la lumière, de la folie et des ressources. Développé entièrement sous Unreal Engine en Blueprint, avec des assets issus de Fab.com pour respecter les contraintes de temps.",
      en: "Game created in 48 hours during UQAC’s Wonder Jam 2024, based on the theme “Dimension”, with a team of four developers. As the Game/Level Designer, I designed the exploration and mechanics around light, madness, and resource management. Developed entirely in Unreal Engine using Blueprints, with Fab.com assets to meet the project’s tight time constraints." },
    images: ["mad-space.jpg"], video: null, links: { play: "", code: "", video: "" } },

  { id: "p2", featured: true, title: "Learn2Switch", g: ["#7A3E1F", "#E0703A"], tags: ["Game Design", "GDD"],
    short: { fr: "Projet de Game Design en Freelance", en: "Freelance Game Design Project" },
    role: { fr: "Développeur & game designer", en: "Developer & game designer" },
    long: { fr: "GDD réalisé en freelance en 2023 pour un RPG éducatif en 3D destiné aux 14–18 ans, développé autour de six compétences professionnelles.\n" +
          "En tant que Game Designer, j’ai conçu des mécaniques de gameplay permettant de rendre l’apprentissage engageant tout en respectant les contraintes du projet.\n" +
          "J’ai notamment adapté les mécaniques de combat en privilégiant l’étourdissement et la fuite plutôt que des affrontements létaux.\n",
      en: "GDD created as a freelance project in 2023 for a 3D educational RPG aimed at 14–18-year-olds, built around six professional skills.\n" +
          "As the Game Designer, I designed gameplay mechanics to make learning engaging while respecting the project’s constraints.\n" +
          "I adapted the combat system to focus on stunning and escaping rather than lethal encounters.\n" },
    images: ["learn2switchClear.jpg"], video: null, links: { play: "", code: "", video: "" } },

  { id: "p3", featured: true, title: "Ziggy found life", g: ["#26352A", "#4F6B3A"], tags: ["Vertical Slice", "UE5", "Perforce"],
    short: { fr: "Projet Académique avec des artistes", en: "Academic project with artists" },
    role: { fr: "Game Programmer | Firefighter", en: "Game Programmer | Firefighter" },
    long: { fr: "Vertical Slice développé à l’UQAC en collaboration entre développeurs de Chicoutimi et artistes de l’UQAC-NAD, autour d’un jeu d’exploration planétaire à la troisième personne.\n" +
          "J’ai développé plusieurs mécaniques de gameplay, notamment la gestion du carburant et du long tuyau reliant Ziggy à sa source de carburant.\n" +
          "En fin de projet, j’ai également pris en charge les builds, le debugging et la coordination technique afin de stabiliser le jeu avant la livraison.\n",
      en: "Vertical Slice developed at UQAC through a collaboration between developers from Chicoutimi and artists from UQAC-NAD, for a third-person planetary exploration game.\n" +
          "I developed several gameplay mechanics, including the fuel system and the long fuel hose connecting Ziggy to his fuel source.\n" +
          "Towards the end of the project, I also handled builds, debugging, and technical coordination to stabilize the game before delivery.\n" },
    images: ["ziggyClear.jpg"], video: null, links: { play: "", code: "", video: "" } },

  { id: "p4", featured: false, title: "Sidera", g: ["#5A3A20", "#B5622F"], tags: ["Game Design", "One Pager"],
    short: { fr: "Travail académique en Game Design", en: "Game Design academic Work" },
    role: { fr: "Game Designer", en: "Game Designer" },
    long: { fr: "One Pager conçu dans le cadre d’un cours de Game Design à l’UQAC, présentant le concept d’un jeu d’aventure narrative inspiré de l’exploration spatiale.\n" +
          "J’ai développé le concept, les intentions de design, le gameplay et la présentation du projet en suivant les contraintes d’un document professionnel.\n" +
          "Le projet a été présenté dans le cadre d’une compétition évaluée par des professionnels de l’industrie du jeu vidéo.\n",
      en: "One Pager designed as part of a Game Design course at UQAC, presenting the concept of a narrative adventure inspired by space exploration.\n" +
          "I developed the concept, design intentions, gameplay, and presentation while following the constraints of a professional game design document.\n" +
          "The project was submitted to a competition judged by video game industry professionals.\n" },
    images: ["sidera.jpg"], video: null, links: { play: "", code: "", video: "" } },

  { id: "p5", featured: false, title: "Eclipse Arena", g: ["#1E2A1F", "#7A6F3A"], tags: ["C++", "UE5", "Online"],
    short: { fr: "Jeu multijoueur en ligne.", en: "Online multiplayer game" },
    role: { fr: "Développeur", en: "Developer" },
    long: { fr: "Jeu de combat multijoueur développé sous Unreal Engine dans le cadre d’un cours spécialisé en développement réseau à l’UQAC.\n" +
          "J’ai travaillé sur la synchronisation client-serveur, les RPC, le Server Travel, la synchronisation temporelle et la compensation de latence via Server Rewind.\n" +
          "Ce projet m’a permis de mettre en pratique la prédiction côté client, la réconciliation serveur et l’optimisation de la bande passante.\n",
      en: "Multiplayer combat game developed in Unreal Engine as part of a specialized networking course at UQAC.\n" +
          "I worked on client-server synchronization, RPCs, Server Travel, network time synchronization, and latency compensation through Server Rewind.\n" +
          "This project gave me hands-on experience with client-side prediction, server reconciliation, and bandwidth optimization.\n" },
    images: ["eclipse-arena.jpg"], video: null, links: { play: "", code: "", video: "" } },

  { id: "p6", featured: false, title: "Flesh hunt", g: ["#3A4A2A", "#7A6F3A"], tags: ["Godot", "Game Jam"],
    short: { fr: "Première Game Jam", en: "First Game Jam" },
    role: { fr: "Level Designer", en: "Level Designer" },
    long: { fr: "Jeu de plateforme 2D développé sous Godot en équipe de quatre lors de la SpeedJam #6, avec un gameplay conçu autour du speedrunning et du retry rapide.\n" +
          "En tant que Level Designer, j’ai conçu et réalisé l’intégralité du niveau en travaillant notamment sur le rythme, les déplacements et les routes optimales.\n" +
          "J’ai également participé au développement de mécaniques environnementales, comme les sables mouvants et la foudre.\n",
      en: "2D platformer developed in Godot by a team of four during SpeedJam #6, with gameplay designed around speedrunning and rapid retries.\n" +
          "As the Level Designer, I designed and built the entire level, focusing on pacing, movement, and optimal routes.\n" +
          "I also contributed to the development of environmental mechanics such as quicksand and lightning.\n" },
    images: ["fleshHunt.jpg"], video: null, links: { play: "", code: "", video: "" } },

  { id: "p7", featured: false, title: "Dino Rush", g: ["#7A3E1F", "#E0703A"], tags: ["Godot", "Game Jam"],
    short: { fr: "Solo Game Jam", en: "Solo Game Jam" },
    role: { fr: "Développeur | Designer", en: "Developer | Designer" },
    long: { fr: "Beat’em up préhistorique développé en 48h pour la Mini Jam 211 : Dinosaurs, autour du thème « On a Budget ».\n" +
          "J’ai conçu un système de progression basé sur l’XP, permettant au joueur d’améliorer et de changer de dinosaure tous les 10 niveaux.\n" +
          "Le gameplay repose sur une gestion limitée des attaques lourdes, obligeant le joueur à combattre pour récupérer ses ressources et progresser face à des ennemis de plus en plus puissants.\n",
      en: "Prehistoric beat’em up developed in 48 hours for Mini Jam 211: Dinosaurs, based on the theme “On a Budget”.\n" +
          "I designed an XP-based progression system that allows players to upgrade and switch dinosaurs every 10 levels.\n" +
          "The gameplay revolves around limited heavy attacks, forcing players to fight to replenish their resources while facing increasingly powerful enemies.\n" },
    images: ["DinoRush.jpg"], video: null, links: { play: "", code: "", video: "" } },

  { id: "p8", featured: false, title: "Wonder Shop", g: ["#26352A", "#4F6B3A"], tags: ["Game Jam", "UE5"],
    short: { fr: "Solo Game Jam", en: "Solo Game Jam" },
    role: { fr: "Développeur | Designer", en: "Game Programmer | Designer" },
    long: { fr: "Jeu développé en solo en un week-end lors de la Wonder Jam 2025 de l’UQAC, sur le thème « Counterfeit ».\n" +
          "En tant que Game Designer et Developer, j’ai conçu et développé un jeu de gestion basé sur l’identification d’objets contrefaits.\n" +
          "J’ai adapté le scope et pris en charge l’ensemble du développement afin de livrer un jeu complet dans un temps limité.\n",
      en: "Game developed solo over a weekend during UQAC’s 2025 Wonder Jam, based on the theme “Counterfeit”.\n" +
          "As Game Designer and Developer, I designed and developed a management game centered around identifying counterfeit items.\n" +
          "I adapted the project scope and handled the entire development process to deliver a complete game within a limited timeframe.\n" },
    images: ["WonderShopCover.jpg"], video: null, links: { play: "", code: "", video: "" } },
];

export const journey = [
  { when: { fr: "3 ans", en: "3 years" }, title: { fr: "IUT de Dijon", en: "University Institute of Technology, Dijon" },
    text: { fr: "BUT Informatique : développement d'application, tests, validations", en: "Computer science degree: application development, tests, validations" } },
  { when: { fr: "Double diplôme", en: "Dual degree" }, title: { fr: "UQAC, Canada", en: "UQAC, Canada" },
    text: { fr: "Baccalauréat en développement de jeux : Unreal Engine, game design, multijoueur en ligne.", en: "Bachelor degree in video game development: Unreal Engine, game design, online multiplayer." } },
  { when: { fr: "En cours", en: "In progress" }, title: { fr: "UQAC, Canada", en: "UQAC, Canada" },
    text: { fr: "Maitrise en développement de jeux vidéo : C++ avancée, Unreal Engine, Moteurs de jeux ", en: "Master's in Game development : advanced C++, Unreal Engine, Game Engine" } },
];

// main: true = mis en avant
export const skills = [
  { name: { fr: "Jeu", en: "Game" }, items: [["Unreal Engine", true], ["C++", true], ["Blueprint"], ["Godot"], ["Perforce"]] },
  { name: { fr: "App", en: "App" }, items: [["C#"], ["Java"], ["Python"], ["SQL"], ["Git"]] },
  { name: { fr: "Web", en: "Web" }, items: [["TypeScript"], ["React"], ["Next.js"], ["PHP"]] },
];
