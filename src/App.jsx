import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Logo from "./Logo.jsx";
import { links, projects, journey, skills } from "./data.js";
import { useLang } from "./traduction.jsx";

const ease = [0.22, 1, 0.36, 1];

/* Apparition au scroll (une seule fois) */
function Reveal({ children, delay = 0, className, as = "div" }) {
  const M = motion[as];
  return (
    <M className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.7, delay, ease }}>
      {children}
    </M>
  );
}

/* Titre animé lettre par lettre */
function SplitTitle({ text }) {
  return (
    <h1 className="hero-title" aria-label={text}>
      {[...text].map((c, i) => (
        <motion.span key={i} aria-hidden initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.045, duration: 0.6, ease }} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {c}
        </motion.span>
      ))}
    </h1>
  );
}

/* Un calque de parallaxe : speed = part du scroll répercutée (0 = suit la page) */
function Layer({ speed, className, children, svg = true }) {
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const y = useTransform(scrollY, [0, 1000], [0, reduce ? 0 : 1000 * speed]);
  const P = svg ? motion.svg : motion.div;
  const props = svg ? { viewBox: "0 0 1882 965", preserveAspectRatio: "xMidYMax slice" } : {};
  return <P className={`layer ${className || ""}`} style={{ y }} aria-hidden {...props}>{children}</P>;
}

function Hero() {
  const { ui, cv } = useLang();
  const { scrollY } = useScroll();
  const ty = useTransform(scrollY, [0, 600], [0, -70]);
  const to = useTransform(scrollY, [0, 500], [1, 0]);
  return (
    <header className="hero" id="top">
      <Layer speed={0.5}>
        <g fill="#F1E6D2" fillOpacity=".28">
          <path d="M0 0C120 40 300 60 430 90C520 110 545 170 540 198C400 220 300 280 150 320C90 332 40 336 0 336Z" />
          <path d="M1882 0V295C1700 340 1500 375 1330 362C1150 350 1000 380 890 380C1000 340 1150 300 1250 250C1330 190 1400 150 1500 160C1650 165 1750 110 1800 60C1830 30 1860 10 1882 0Z" />
        </g>
      </Layer>
      <Layer speed={0.4} svg={false} className="sun"><i /><b /></Layer>
      <Layer speed={0.28}><path d="M0 605L205 528L378 628L710 563L890 630L1115 456L1445 603L1553 553L1692 607L1882 375V2000H0Z" fill="#7A6F3A" /></Layer>
      <Layer speed={0.14}><path d="M0 612L52 661L130 628L278 686L320 641L605 729L808 601L1075 697L1460 633L1786 705L1882 637V2000H0Z" fill="#3A4A2A" /></Layer>
      <Layer speed={0}><path d="M0 662L175 759L375 734L512 824L782 799L960 912L1232 922L1412 851L1567 889L1777 783L1882 802V2000H0Z" fill="#1E2A1F" /></Layer>

      <motion.div className="hero-content" style={{ y: ty, opacity: to }}>
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease }}>
          <Logo className="hero-logo" />
        </motion.div>
        <SplitTitle text="Pierre Vanhove" />
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7, ease }}>
          {ui.tagline}
        </motion.p>
        <motion.div className="cta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.7, ease }}>
          <a className="btn solid" href="#projects">{ui.seeProjects}</a>
          <a className="btn ghost" href={cv} download>{ui.cv}</a>
        </motion.div>
      </motion.div>
    </header>
  );
}

function Nav() {
  const { ui, toggle } = useLang();
  const hrefs = ["#top", "#projects", "#about", "#contact"];
  return (
    <div className="nav-wrap">
      <motion.nav className="nav" initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7, ease }}>
        {ui.nav.map((label, i) => <a key={label} href={hrefs[i]}>{label}</a>)}
        <button className="lang" onClick={toggle} aria-label={ui.switchLabel}>{ui.switchTo}</button>
      </motion.nav>
    </div>
  );
}

const Title = ({ children }) => <Reveal as="h2" className="h2">{children}</Reveal>;

function About() {
  const { ui } = useLang();
  return (
    <section id="about" className="wrap about">
      <Reveal className="photo"><img src="/photo.jpg" alt="Pierre Vanhove" onError={(e) => (e.currentTarget.style.display = "none")} /><span>{ui.photo}<br />(public/photo.jpg)</span></Reveal>
      <div>
        <Title>{ui.hello}</Title>
        <Reveal delay={0.1} as="p" className="muted">{ui.about}</Reveal>
        <Reveal delay={0.2} className="facts">
          {ui.facts.map((f, i) => <span key={f} className={i < 2 ? "hot" : ""}>{f}</span>)}
        </Reveal>
      </div>
    </section>
  );
}

/* Popup de détail d'un projet */
function ProjectModal({ p, onClose }) {
  const { ui, t } = useLang();
  const closeRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);
  const l = p.links || {};
  const btns = [["play", ui.play], ["code", ui.code], ["video", ui.video]].filter(([k]) => l[k]);
  return (
    <motion.div className="overlay" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <motion.div className="modal" role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.98 }} transition={{ duration: 0.35, ease }}>
        <button ref={closeRef} className="close" onClick={onClose} aria-label={ui.close}>×</button>
        <div className="modal-media" style={{ background: `linear-gradient(135deg, ${p.g[0]}, ${p.g[1]})` }}>
          {p.video ? <video src={p.video} controls playsInline /> : p.images?.[0] ? <img src={p.images[0]} alt={p.title} /> : <span>{ui.noMedia}</span>}
        </div>
        <div className="modal-body">
          <h3>{p.title}</h3>
          <p className="role"><b>{ui.role} :</b> {t(p.role)}</p>
          <div>{p.tags.map((x) => <span className="tag" key={x}>{x}</span>)}</div>
          <p className="muted">{t(p.long)}</p>
          {p.images?.length > 1 && <div className="gallery">{p.images.slice(1).map((src) => <img key={src} src={src} alt="" loading="lazy" />)}</div>}
          {btns.length > 0 && <div className="cta left">{btns.map(([k, label]) => <a key={k} className="btn ghost" href={l[k]} target="_blank" rel="noreferrer">{label}</a>)}</div>}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const { ui, t } = useLang();
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(null);
  const list = showAll ? projects : projects.filter((p) => p.featured);
  const extra = projects.length > projects.filter((p) => p.featured).length;
  return (
    <section id="projects" className="wrap">
      <Title>{ui.projects}</Title>
      <div className="grid">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.1}>
            <motion.button className="card" onClick={() => setOpen(p)} whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
              <div className="thumb" style={{ background: `linear-gradient(135deg, ${p.g[0]}, ${p.g[1]})`, backgroundSize: "cover"}}>
                {p.images?.[0] ? <img src={p.images[0]} alt="" loading="lazy" style={{backgroundSize: "cover"}}/> : <span>{ui.noMedia}</span>}
              </div>
              <div className="card-body">
                <h3>{p.title}</h3><p>{t(p.short)}</p>
                {p.tags.map((x) => <span className="tag" key={x}>{x}</span>)}
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>
      {extra && (
        <div className="cta" style={{ marginTop: 32 }}>
          <button className="btn ghost" onClick={() => setShowAll(!showAll)}>{showAll ? ui.showLess : `${ui.showAll} (${projects.length})`}</button>
        </div>
      )}
      <AnimatePresence>{open && <ProjectModal key={open.id} p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}

function Journey() {
  const { ui, t } = useLang();
  return (
    <section className="wrap">
      <Title>{ui.journey}</Title>
      <div className="timeline">
        {journey.map((j, i) => (
          <Reveal key={i} delay={i * 0.15} className="step">
            <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease }} />
            <small>{t(j.when)}</small><h3>{t(j.title)}</h3><p>{t(j.text)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const { ui, t } = useLang();
  return (
    <section className="wrap">
      <Title>{ui.skills}</Title>
      <div className="skills">
        {skills.map((group, g) => (
          <Reveal key={g} delay={g * 0.12}>
            <h3>{t(group.name)}</h3>
            {group.items.map(([name, main], i) => (
              <motion.span key={name} className={`chip ${main ? "main" : ""}`} initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease }} whileHover={{ y: -3 }}>
                {name}
              </motion.span>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const { ui } = useLang();
  return (
    <section id="contact" className="wrap">
      <Reveal className="contact">
        <Logo className="contact-logo" />
        <h2 className="h2">{ui.contactTitle}</h2>
        <p className="muted">{ui.contactText}</p>
        <div className="cta">
          <a className="btn hot-btn" href={links.mail}>{ui.mail}</a>
          <a className="btn ghost" href={links.linkedin}>LinkedIn</a>
          <a className="btn ghost" href={links.github}>GitHub</a>
          <a className="btn ghost" href={links.itch}>itch.io</a>
        </div>
      </Reveal>
      <footer>© {new Date().getFullYear()} Pierre Vanhove</footer>
    </section>
  );
}

export default function App() {
  return (<><Nav /><Hero /><main><About /><Projects /><Journey /><Skills /><Contact /></main></>);
}
