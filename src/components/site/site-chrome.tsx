// Shared nav and contact footer for the home page and the journal.
// `home` is true on the home page, where section links are plain anchors.

const MAIL = "mailto:mouad.ziroudi@gmail.com?subject=Project%20brief";

export function SiteNav({ home = false }: { home?: boolean }) {
  const at = (id: string) => (home ? `#${id}` : `/#${id}`);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <a className="nav__logo" href={home ? "#top" : "/"}>Mouad Ziroudi<sup>©</sup></a>
        <nav className="nav__links" aria-label="Main">
          <a href={at("services")}>Services</a>
          <a href={at("work")}>Work</a>
          <a href={at("projects")}>Projects</a>
          <a href={at("about")}>About</a>
          <a href="/blog" aria-current={home ? undefined : "page"}>Journal</a>
        </nav>
        <span className="nav__time mono" data-clock>Casablanca</span>
        <a className="nav__cta" href="#contact">Let’s talk</a>
      </header>
    </>
  );
}

export function SiteFooter({ label = "(05) Contact" }: { label?: string }) {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap sec">
        <p className="mono" style={{ marginBottom: 28 }}>{label}</p>
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
  );
}

export function SiteCursor() {
  return <div className="cursor" aria-hidden="true"><span>Visit</span></div>;
}

/** "2025-09-04" → "4 Sep 2025" without timezone drift. */
export function shortDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}
