/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { ProjectDeck, type Project } from "@/components/ui/scroll-stacking-cards";
import { ServicesHoverPreview, type Service } from "@/components/ui/services-hover-preview";
import { HomeEffects } from "./home-effects";
import "./home.css";

export const metadata: Metadata = {
  title: { absolute: "Mouad Ziroudi" },
  description:
    "Mouad Ziroudi designs websites, online shops and product interfaces in Figma, then builds them in WordPress, React and Python. Based in Casablanca.",
  openGraph: { images: ["/share.jpg"] },
};

const MAIL = "mailto:mouad.ziroudi@gmail.com?subject=Project%20brief";
const TOOLS = ["Figma", "WordPress", "WooCommerce", "React", "Next.js", "Python", "PyTorch", "Design systems"];
const STATEMENT = "Same hands from the Figma file to the live site. Nothing gets lost in between.";

const SERVICES: Service[] = [
  { n: "01", title: "Websites", text: "Designed in Figma and built in WordPress, so your team can update the site without calling me.", tags: ["Figma", "WordPress", "Responsive"], image: "/work/ch-primolegno-750.jpg", color: "#1c1712" },
  { n: "02", title: "Online shops", text: "WooCommerce shops with catalogues, checkout and content in French and Arabic.", tags: ["WooCommerce", "Bilingual", "Catalogues"], image: "/work/ch-darnjara-750.jpg", color: "#f3f1ec" },
  { n: "03", title: "Product design", text: "Research, flows, prototypes and design systems for web apps, handed over with specs or built in React.", tags: ["User research", "Design systems", "React"], image: "/work/ch-medicpro-750.jpg", color: "#eef1f3" },
  { n: "04", title: "AI prototypes", text: "Working prototypes with models and retrieval, measured honestly before anyone ships them.", tags: ["Python", "PyTorch", "RAG"], image: "/work/pwave-480.jpg", color: "#ffffff" },
];

const WORK = [
  { slug: "primolegno", accent: "#8a5a35", kind: "Showcase site", name: "Primolegno", year: "2024", url: "https://primolegno.ma/", w: 1200, h: 750, alt: "Primolegno collections page: a black lacquered door, an oak door and walnut wall panels", text: "A showcase for a luxury joinery brand: doors, wall panels and hotel projects, written for architects." },
  { slug: "medicpro", accent: "#7b2d8e", kind: "Accessible site", name: "MedicPro", year: "2024", url: "https://www.medicpro.ma/", w: 1200, h: 750, alt: "MedicPro page on upper-limb prosthetics with a photo of a smiling patient", text: "An accessible site for a prosthetics and orthotics provider, written for patients and their families." },
  { slug: "artsclinic", accent: "#2e6b3f", kind: "Site and booking", name: "Art’s Clinic", year: "2023", url: "https://artsclinic.com/", w: 992, h: 620, alt: "Art’s Clinic home page with its side menu and appointment button", text: "Site and appointment booking for a dental and aesthetic medicine clinic in Casablanca." },
  { slug: "darnjara", accent: "#3f8f3a", kind: "WooCommerce shop", name: "Dar Njara", year: "2022", url: "https://darnjara.ma/", w: 1440, h: 900, alt: "Dar Njara shop with its door categories and a walk-in wardrobe", text: "A WooCommerce shop for doors, wardrobes and kitchens, in French and Arabic." },
  { slug: "hssmaroc", accent: "#d6213a", kind: "Brand site and catalogue", name: "HSS Maroc", year: "2021", url: "https://hssmaroc.com/", w: 1152, h: 720, alt: "HSS Maroc home page with its premium appliances banner over a dark kitchen", text: "The brand site and catalogue of the Moroccan distributor of Franke kitchen appliances." },
  { slug: "touarga", accent: "#a87b00", kind: "Football club site", name: "Touarga Club", year: "2020", url: "https://touargaclub.ma/", w: 1440, h: 900, alt: "Touarga Club home page with the next fixture and the last result over a stadium", text: "A football club site with fixtures, results, news and the youth academy." },
];

const DECK: Project[] = WORK.map((c) => ({
  name: c.name,
  summary: c.text,
  url: c.url,
  display: c.year + " · " + c.kind,
  image: `/work/ch-${c.slug}.jpg`,
  accent: c.accent,
}));

const XP = [
  ["2024 to now", "Senior Product Designer", "Evermore Digital"],
  ["2018 to 2023", "UI/UX Designer and Product Developer", "MoreCommunication"],
  ["2020", "Analyst Programmer", "Morservs"],
  ["2020", "Master’s, Application Design and Development", "University of Science and Technology, Settat"],
  ["2017", "Bachelor’s, Application Design and Development", "University of Science and Technology, Settat"],
];

const RAG = [
  ["BM25 only", 1, "1.00"],
  ["Hybrid, rank fusion", 0.88, "0.88"],
  ["Dense only", 0.74, "0.74"],
  ["Hybrid and reranker", 0.36, "0.36"],
] as const;

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

export default function Page() {
  return (
    <div className="v3">
      <a className="skip" href="#main">Skip to content</a>

      <header className="nav">
        <a className="nav__logo" href="#top">Mouad Ziroudi<sup>©</sup></a>
        <nav className="nav__links" aria-label="Main">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="/blog">Journal</a>
        </nav>
        <span className="nav__time mono" data-clock>Casablanca</span>
        <a className="nav__cta" href="#contact">Let’s talk</a>
      </header>

      <main id="main">
        {/* hero */}
        <section className="hero" id="top" aria-labelledby="name">
          <div className="wrap hero__in">
            <div className="hero__meta mono">
              <span><i className="dot" aria-hidden="true" />Available for new projects</span>
              <span>Product designer &amp; engineer</span>
              <span>Casablanca, MA</span>
            </div>
            <h1 className="hero__name" id="name" aria-label="Mouad Ziroudi">
              <span className="line" aria-hidden="true"><span>Mouad<span className="o">.</span></span></span>
              <span className="line line--2" aria-hidden="true"><span>Ziroudi</span></span>
            </h1>
            <div className="hero__foot">
              <div>
                <p className="hero__say">
                  <span className="sr">I design and build websites, online shops, product interfaces and AI prototypes.</span>
                  <span aria-hidden="true">
                    I design &amp; build<br />
                    <span className="swap" data-swap>
                      <span className="on">websites.</span>
                      <span>online shops.</span>
                      <span>product interfaces.</span>
                      <span>AI prototypes.</span>
                    </span>
                  </span>
                </p>
                <p className="hero__lead">Figma first, then I build it myself in WordPress, React or Python. 7+ years for clinics, retailers, a football club and startups.</p>
              </div>
              <a className="badge" href="#work" aria-label="See my work">
                <svg className="badge__ring" viewBox="0 0 200 200" aria-hidden="true">
                  <defs><path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
                  <text fontFamily="Geist Mono, monospace" fontSize="15.5" fontWeight="500" letterSpacing="3.2" fill="#0f0f0e">
                    <textPath href="#circ">SELECTED WORK • 2018 TO 2026 • SCROLL •</textPath>
                  </text>
                </svg>
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 4v16M5 13l7 7 7-7" /></svg>
              </a>
            </div>
          </div>
          <div className="marquee" aria-hidden="true">
            <div className="marquee__track">
              {[...TOOLS, ...TOOLS].map((t, k) => (
                <span key={k} style={{ display: "contents" }}><span>{t}</span><b>✳</b></span>
              ))}
            </div>
          </div>
        </section>

        {/* services */}
        <section className="light" id="services" aria-labelledby="svc-h">
          <div className="wrap sec">
            <div className="sec-head">
              <p className="mono">(01) Services</p>
              <h2 id="svc-h" data-reveal>What I can do<br />for <em>you</em></h2>
            </div>
            <ServicesHoverPreview services={SERVICES} />
          </div>
        </section>

        {/* statement */}
        <section className="statement" aria-label="How I work">
          <div className="wrap sec">
            <span className="mono">How I work</span>
            <p className="big" data-words>
              {STATEMENT.split(" ").map((w, k) => (
                <span key={k}><span className="w">{w}</span>{" "}</span>
              ))}
            </p>
          </div>
        </section>

        {/* work */}
        <section className="work" id="work" aria-labelledby="work-h">
          <div className="wrap work__head work__intro">
            <h2 id="work-h">Client websites<sup>(06)</sup></h2>
            <p className="mono">(02) Selected work, 2020 to now · scroll</p>
          </div>
          <ProjectDeck projects={DECK} />
        </section>

        {/* projects */}
        <section className="light projects" id="projects" aria-labelledby="proj-h">
          <div className="wrap sec">
            <div className="sec-head">
              <p className="mono">(03) On GitHub</p>
              <h2 id="proj-h" data-reveal>AI projects,<br /><em>results</em> included</h2>
            </div>
            <div className="stack">
              <article className="proj" style={v({ "--i": 0 })} data-reveal>
                <div className="proj__txt">
                  <div className="proj__top mono"><span>P-Wave Detection</span><span>Python · PyTorch</span></div>
                  <h3>Detects earthquakes with a Python model</h3>
                  <p>The model reached 97.4%, then I proved it was using a shortcut. An old STA/LTA trigger still raises fewer false alarms, and the write-up says so.</p>
                  <div className="proj__metric"><b>97.4%</b><span>accuracy, before I found the shortcut</span></div>
                  <a className="proj__link" href="https://github.com/mziroudi/P-Wave-Detection">View on GitHub ↗</a>
                </div>
                <div className="proj__vis">
                  <img src="/work/pwave.jpg" srcSet="/work/pwave-480.jpg 480w, /work/pwave.jpg 1200w" sizes="(max-width:860px) 90vw, 44vw" width={1200} height={697} alt="Three seismogram traces of a local earthquake with the P-wave and S-wave arrivals marked" loading="lazy" />
                </div>
              </article>

              <article className="proj proj--o" style={v({ "--i": 1 })} data-reveal>
                <div className="proj__txt">
                  <div className="proj__top mono"><span>RAG over SEC filings</span><span>Python · Retrieval</span></div>
                  <h3>Answers questions over SEC filings</h3>
                  <p>Four retrieval setups scored on 50 questions over Apple and NVIDIA filings. The fancy one lost: plain BM25 won.</p>
                  <div className="proj__metric"><b>1.00</b><span>Recall@10 for plain BM25</span></div>
                  <a className="proj__link" href="https://github.com/mziroudi/rag">View on GitHub ↗</a>
                </div>
                <div className="proj__vis">
                  <div className="bars" role="img" aria-label="Recall at 10: BM25 only 1.00, hybrid with rank fusion 0.88, dense only 0.74, hybrid with reranker 0.36">
                    {RAG.map(([label, val, txt]) => (
                      <div className="bar" style={v({ "--v": val })} key={label}><span>{label}</span><b>{txt}</b><i /></div>
                    ))}
                    <p className="bars__cap mono">Recall@10 · 50 questions</p>
                  </div>
                </div>
              </article>

              <article className="proj proj--w" style={v({ "--i": 2 })} data-reveal>
                <div className="proj__txt">
                  <div className="proj__top mono"><span>AgentPay</span><span>API · Stripe</span></div>
                  <h3>A spending API between AI agents and Stripe</h3>
                  <p>Middleware that gives every agent a budget, sends large payments to a person for approval and keeps an audit trail of each one.</p>
                  <div className="proj__metric"><b>3</b><span>checks before any agent spends: budget, approval, audit</span></div>
                  <a className="proj__link" href="https://github.com/mziroudi/agentpay">View on GitHub ↗</a>
                </div>
                <div className="proj__vis">
                  <div className="flow" role="img" aria-label="An AI agent asks AgentPay to pay. AgentPay checks the budget, pays small amounts through Stripe and sends large ones to a person for approval.">
                    <div className="node"><b>AI agent</b><small>asks to pay</small></div>
                    <span className="vline" />
                    <div className="node node--hl"><b>AgentPay</b><small>budget check</small></div>
                    <span className="vline" />
                    <div className="split">
                      <div className="node node--ok"><b>Stripe</b><small>small amounts, paid</small></div>
                      <div className="node"><b>A person</b><small>approves large ones</small></div>
                    </div>
                    <p className="flow__log">audit trail · every request logged</p>
                  </div>
                </div>
              </article>

              <article className="proj proj--g" style={v({ "--i": 3 })} data-reveal>
                <div className="proj__txt">
                  <div className="proj__top mono"><span>Hdaya</span><span>Desktop · Vision</span></div>
                  <h3>Answers questions about your screen</h3>
                  <p>A desktop tutor: press Ctrl+Space in any app, ask your question, and it reads the screen to answer.</p>
                  <div className="proj__metric"><b>Ctrl+Space</b><span>from any app</span></div>
                  <a className="proj__link" href="https://github.com/mziroudi/hdaya">View on GitHub ↗</a>
                </div>
                <div className="proj__vis">
                  <div>
                    <div className="keys" aria-hidden="true"><kbd>Ctrl</kbd>+<kbd>Space</kbd></div>
                    <div className="chat" role="img" aria-label="Example: in Blender the user asks how to bevel one edge and Hdaya answers: select the edge, then press Ctrl+B.">
                      <div className="chat__head"><b>Hdaya</b><span>BLENDER</span></div>
                      <div className="chat__body">
                        <div className="msg msg--me">How do I bevel just this edge?</div>
                        <div className="msg msg--bot">Select the edge, then press <kbd>Ctrl+B</kbd>. Scroll up to add segments.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* about */}
        <section id="about" aria-labelledby="about-h">
          <div className="wrap sec">
            <div className="sec-head">
              <p className="mono">(04) About</p>
              <h2 id="about-h" data-reveal>Engineer by training,<br />designer by <em>trade</em></h2>
            </div>
            <p className="about__intro" data-reveal>I studied application design and development, then spent 7+ years <span>between Figma and the code editor, for agencies, clinics, retailers and startups.</span></p>
            <ol className="xp">
              {XP.map(([when, role, where]) => (
                <li data-reveal key={role}><span className="mono">{when}</span><b>{role}</b><span>{where}</span></li>
              ))}
            </ol>
            <dl className="facts">
              <div><dt className="mono">Based in</dt><dd>Casablanca, Morocco</dd></div>
              <div><dt className="mono">Languages</dt><dd>Arabic, French, English</dd></div>
              <div><dt className="mono">Design</dt><dd>Figma, Miro, design systems</dd></div>
              <div><dt className="mono">Build</dt><dd>WordPress, WooCommerce, React, Next.js, Python</dd></div>
            </dl>
          </div>
        </section>
      </main>

      {/* contact */}
      <footer className="contact" id="contact" aria-labelledby="contact-h">
        <div className="wrap sec">
          <p className="mono" style={{ marginBottom: 28 }}>(05) Contact</p>
          <h2 id="contact-h">Got a project?<br />Let’s talk.</h2>
          <a className="mail" href={MAIL}>
            mouad.ziroudi@gmail.com
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
          <div className="foot">
            <div><h4>Code</h4><a href="https://github.com/mziroudi">GitHub</a><a href="https://medium.com/@mouad.ziroudi/about">Medium</a></div>
            <div><h4>Social</h4><a href="https://linkedin.com/in/mouad-ziroudi/">LinkedIn</a><a href="https://x.com/mouadziroudi">X</a></div>
            <div><h4>Writing</h4><a href="/blog">Journal</a><p data-clock-plain>Casablanca</p></div>
            <div><h4>© 2026</h4><p>Mouad Ziroudi. Client names and logos belong to their owners.</p></div>
          </div>
          <p className="bigword" aria-hidden="true">Ziroudi</p>
        </div>
      </footer>

      <div className="cursor" aria-hidden="true"><span>Visit</span></div>
      <HomeEffects />
    </div>
  );
}
