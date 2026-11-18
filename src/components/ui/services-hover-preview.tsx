/**
 * Services list with a hover preview that follows the cursor.
 * Based on "Services with Animated Hover Modal" by cnippet-dev
 * (21st.dev/@cnippet-dev/components/services-with-animated-hover-modal), rebuilt with motion springs
 * instead of GSAP, with the preview fixed to the viewport and hidden on touch screens.
 */
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export type Service = {
  n: string;
  title: string;
  text: string;
  tags: string[];
  /** Preview image shown while the row is hovered. */
  image: string;
  /** Background behind the preview image. */
  color: string;
};

const scale = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
} as const;

export function ServicesHoverPreview({ services }: { services: Service[] }) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // the preview trails the cursor a little; the label circle follows more tightly
  const px = useSpring(mx, { stiffness: 150, damping: 20, mass: 0.6 });
  const py = useSpring(my, { stiffness: 150, damping: 20, mass: 0.6 });
  const cx = useSpring(mx, { stiffness: 300, damping: 28, mass: 0.4 });
  const cy = useSpring(my, { stiffness: 300, damping: 28, mass: 0.4 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [mx, my]);

  const state = modal.active ? "enter" : "closed";

  return (
    <div className="svc-wrap">
      <ol className="svc">
        {services.map((s, index) => (
          <li
            key={s.n}
            data-reveal
            onPointerEnter={(e) => e.pointerType === "mouse" && setModal({ active: true, index })}
            onPointerLeave={() => setModal({ active: false, index })}
          >
            <span className="svc__n mono">{s.n}</span>
            <h3>{s.title}</h3>
            <div>
              <p>{s.text}</p>
              <ul className="tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>

      <motion.div className="svc-modal" aria-hidden variants={scale} initial="initial" animate={state} style={{ left: px, top: py }}>
        <div className="svc-modal__slider" style={{ top: `${modal.index * -100}%` }}>
          {services.map((s) => (
            <div className="svc-modal__slide" key={s.n} style={{ backgroundColor: s.color }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div className="svc-modal__cursor" aria-hidden variants={scale} initial="initial" animate={state} style={{ left: cx, top: cy }}>
        {services[modal.index]?.n}
      </motion.div>
    </div>
  );
}
