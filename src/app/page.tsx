import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SectionLabel } from "@/components/site/section-label";
import { DATA } from "@/data/resume";
import Link from "next/link";

const D = 0.05;

export default function Page() {
  const year = new Date().getFullYear();
  const firstName = DATA.name.split(" ")[0];

  return (
    <main className="relative flex flex-col">
      {/* Masthead — magazine header strip */}
      <header className="flex flex-col gap-6 border-b border-foreground/90 pb-3">
        <BlurFade delay={D}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="text-foreground">Issue 01 · Vol. 07 · {year}</span>
            <span>{DATA.location}</span>
            <span>—</span>
            <span>Portfolio / Monograph</span>
          </div>
        </BlurFade>

        <BlurFade delay={D * 2}>
          <div className="flex items-end justify-between gap-6">
            <h1 className="font-display text-[clamp(3.5rem,14vw,10rem)] font-medium leading-[0.82] tracking-[-0.03em] text-foreground">
              {DATA.name.split(" ")[0]}
              <span className="italic font-light"> {DATA.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="hidden max-w-[18ch] shrink-0 pb-3 text-right font-display text-sm italic leading-tight text-muted-foreground sm:block">
              Product design, systems, and craft — a working archive.
            </p>
          </div>
        </BlurFade>
      </header>

      {/* Thin contents strip */}
      <BlurFade delay={D * 3}>
        <nav className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-border py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-foreground">Contents</span>
          <a href="#work-index" className="transition-colors hover:text-foreground">I. Work</a>
          <a href="#about" className="transition-colors hover:text-foreground">II. Profile</a>
          <a href="#experience" className="transition-colors hover:text-foreground">III. Experience</a>
          <a href="#labs" className="transition-colors hover:text-foreground">IV. Labs</a>
          <a href="#index" className="transition-colors hover:text-foreground">V. Index</a>
          <a href="#contact" className="transition-colors hover:text-foreground">VI. Contact</a>
        </nav>
      </BlurFade>

      {/* Work — contact sheet grid (OPENS THE PAGE) */}
      <section id="work-index" className="scroll-mt-24 border-b border-border py-10 sm:py-14">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-12">
          <BlurFade delay={D * 4}>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">I.</span>
              <h2 className="font-display text-2xl font-medium italic tracking-tight text-foreground sm:text-3xl">
                Selected work
              </h2>
            </div>
          </BlurFade>
          <BlurFade delay={D * 5}>
            <p className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:block">
              {DATA.projects.length} entries · 2020–{year}
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-12">
          {DATA.projects.map((project, id) => {
            // asymmetric magazine grid: alternate wide / narrow spans on desktop
            const spans = [
              "lg:col-span-7",
              "lg:col-span-5",
              "lg:col-span-5",
              "lg:col-span-7",
              "lg:col-span-6",
              "lg:col-span-6",
            ];
            const span = spans[id % spans.length];
            return (
              <BlurFade
                key={project.title}
                delay={D * 6 + id * 0.04}
                className={span}
              >
                <ProjectCard
                  number={String(id + 1).padStart(2, "0")}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links?.map((link) => {
                    const icon =
                      typeof link.icon === "function" ? link.icon({ className: "size-3" }) : link.icon;
                    const type = "type" in link ? link.type : (link as { title?: string }).title ?? "";
                    return { icon, type, href: link.href };
                  })}
                />
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* Profile / About — editorial drop cap */}
      <section id="about" className="scroll-mt-24 border-b border-border py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <BlurFade delay={D * 7}>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">II.</span>
              <h2 className="mt-4 font-display text-3xl font-medium italic leading-[0.95] tracking-tight text-foreground sm:text-4xl">
                Profile
              </h2>
              <p className="mt-5 max-w-[24ch] font-display text-base italic leading-snug text-muted-foreground">
                A Casablanca-based senior product designer.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={D * 8} className="md:col-span-8">
            <p className="dropcap font-display text-xl leading-[1.5] text-foreground sm:text-[22px]">
              {DATA.summary}
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:grid-cols-4">
              <div>
                <dt className="mb-1 text-[9px] tracking-[0.22em]">Based</dt>
                <dd className="text-foreground">Casablanca</dd>
              </div>
              <div>
                <dt className="mb-1 text-[9px] tracking-[0.22em]">Years</dt>
                <dd className="text-foreground">7+</dd>
              </div>
              <div>
                <dt className="mb-1 text-[9px] tracking-[0.22em]">Practice</dt>
                <dd className="text-foreground">Product · UX</dd>
              </div>
              <div>
                <dt className="mb-1 text-[9px] tracking-[0.22em]">Status</dt>
                <dd className="text-foreground">Accepting work</dd>
              </div>
            </dl>
          </BlurFade>
        </div>
      </section>

      {/* Experience — numbered editorial list */}
      <section id="experience" className="scroll-mt-24 border-b border-border py-12 sm:py-16">
        <div className="mb-8 flex items-baseline gap-4 sm:mb-10">
          <BlurFade delay={D * 9}>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">III.</span>
          </BlurFade>
          <BlurFade delay={D * 9}>
            <h2 className="font-display text-3xl font-medium italic tracking-tight text-foreground sm:text-4xl">
              Experience
            </h2>
          </BlurFade>
        </div>

        <ol className="flex flex-col border-t border-border">
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={D * 10 + id * 0.04}>
              <ResumeCard
                index={String(id + 1).padStart(2, "0")}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} — ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </ol>

        {/* Education sub-section */}
        <div className="mt-14 border-t border-border pt-10">
          <BlurFade delay={D * 12}>
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-xl font-medium italic tracking-tight text-foreground">
                Education
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {DATA.education.length} entries
              </span>
            </div>
          </BlurFade>
          <ol className="flex flex-col border-t border-border">
            {DATA.education.map((education, id) => (
              <BlurFade key={education.school + education.start} delay={D * 13 + id * 0.04}>
                <ResumeCard
                  index={String(id + 1).padStart(2, "0")}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} — ${education.end}`}
                />
              </BlurFade>
            ))}
          </ol>
        </div>
      </section>

      {/* Labs — hackathons/experiments */}
      <section id="labs" className="scroll-mt-24 border-b border-border py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <BlurFade delay={D * 14}>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">IV.</span>
              <h2 className="mt-4 font-display text-3xl font-medium italic tracking-tight text-foreground sm:text-4xl">
                Laboratory
              </h2>
              <p className="mt-5 max-w-[26ch] font-display text-base italic leading-snug text-muted-foreground">
                Side experiments — small pieces, loosely joined. Machine-learning trials, interface sketches, weekend builds.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={D * 15} className="md:col-span-8">
            <ol className="flex flex-col border-t border-border">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={D * 16 + id * 0.04}
                >
                  <HackathonCard
                    index={String(id + 1).padStart(2, "0")}
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={"image" in project ? project.image : undefined}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ol>
          </BlurFade>
        </div>
      </section>

      {/* Index — skills list, magazine-style */}
      <section id="index" className="scroll-mt-24 border-b border-border py-12 sm:py-16">
        <div className="mb-8 flex items-baseline gap-4 sm:mb-10">
          <BlurFade delay={D * 17}>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">V.</span>
          </BlurFade>
          <BlurFade delay={D * 17}>
            <h2 className="font-display text-3xl font-medium italic tracking-tight text-foreground sm:text-4xl">
              Index
            </h2>
          </BlurFade>
        </div>
        <BlurFade delay={D * 18}>
          <p className="font-display text-lg leading-[1.7] text-muted-foreground sm:text-xl">
            {DATA.skills.map((skill, i) => (
              <span key={skill}>
                <span className="text-foreground">{skill}</span>
                {i < DATA.skills.length - 1 ? (
                  <span className="text-border"> · </span>
                ) : null}
              </span>
            ))}
          </p>
        </BlurFade>
      </section>

      {/* Contact — editorial closing statement */}
      <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
        <BlurFade delay={D * 19}>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              VI. — Colophon
            </span>
            <p className="font-display text-[clamp(2rem,6vw,4.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-foreground">
              For new work, write to{" "}
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="italic underline decoration-[0.05em] underline-offset-[0.12em] decoration-foreground/40 transition-colors hover:decoration-foreground"
              >
                {DATA.contact.email}
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="text-foreground">{DATA.name} · © {year}</span>
              <span>Issue 01</span>
              <span>Set in Fraunces &amp; Inter</span>
              <span>{DATA.location}</span>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
