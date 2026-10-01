import { createContext, useContext, useEffect, useState } from "react";
import { links } from "./data.js";

const STR = {
  fr: {
    nav: ["Accueil", "Projets", "À propos", "Contact"],
    switchTo: "EN", switchLabel: "Switch to English",
    tagline: "Développeur de jeux vidéo & game designer · Unreal Engine, C++",
    seeProjects: "Voir mes projets", cv: "Télécharger le CV",
    hello: "Bonjour, je suis Pierre",
    about: "Je crée des jeux vidéo. Après un BUT Informatique à Dijon et un baccalauréat en développement de jeux vidéo à l’UQAC au Canada, je prépare actuellement un master en développement de jeux vidéo.\n",
    facts: ["Unreal Engine", "C++", "Multijoueur", "Maitrise développement de jeux"],
    photo: "Ta photo", projects: "Projets", showAll: "Voir tous les projets", showLess: "Voir moins",
    close: "Fermer", role: "Rôle", play: "Jouer", code: "Code source", video: "Vidéo", noMedia: "Capture / GIF",
    journey: "Parcours", skills: "Compétences",
    contactTitle: "Travaillons ensemble", contactText: "Stage ou collaboration en jeu vidéo.", mail: "Écrire un mail",
  },
  en: {
    nav: ["Home", "Projects", "About", "Contact"],
    switchTo: "FR", switchLabel: "Passer en français",
    tagline: "Game developer & game designer · Unreal Engine, C++",
    seeProjects: "See my projects", cv: "Download CV",
    hello: "Hello, I'm Pierre",
    about: "I make video games. After a computer science degree in Dijon and a game development degree at UQAC in Canada, I'm now studying for a master's in Game Development.",
    facts: ["Unreal Engine", "C++", "Multiplayer", "Master's in Game Development"],
    photo: "Your photo", projects: "Projects", showAll: "See all projects", showLess: "Show less",
    close: "Close", role: "Role", play: "Play", code: "Source code", video: "Video", noMedia: "Screenshot / GIF",
    journey: "Journey", skills: "Skills",
    contactTitle: "Let's work together", contactText: "Internship, work-study or collaboration in video games.", mail: "Send an email",
  },
};

const Ctx = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { const s = localStorage.getItem("lang"); if (s === "fr" || s === "en") return s; } catch {}
    return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);
  // t({fr, en}) renvoie le texte dans la langue courante
  const t = (o) => (o && typeof o === "object" ? o[lang] ?? o.en : o);
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return <Ctx.Provider value={{ lang, toggle, ui: STR[lang], t, cv: links.cv[lang] }}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);
