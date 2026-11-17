"use client";

import { useEffect } from "react";

// Client-side motion for the home page: Casablanca clock, rotating word,
// scroll reveals, statement word highlight, pinned horizontal work gallery,
// nav colour per section and the custom cursor.
export function HomeEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".v3");
    if (!root) return;
    const cleanups: Array<() => void> = [];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const raf = requestAnimationFrame(() => root.classList.add("is-loaded"));
    cleanups.push(() => cancelAnimationFrame(raf));

    // Casablanca clock
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Casablanca" });
    const tick = () => {
      const t = fmt.format(new Date());
      root.querySelectorAll("[data-clock]").forEach((el) => (el.textContent = "Casablanca " + t));
      root.querySelectorAll("[data-clock-plain]").forEach((el) => (el.textContent = t + " in Casablanca"));
    };
    tick();
    const clock = setInterval(tick, 15000);
    cleanups.push(() => clearInterval(clock));

    // rotating word
    const swap = root.querySelector("[data-swap]");
    if (swap && !reduce) {
      const words = Array.from(swap.children);
      let i = 0;
      const id = setInterval(() => {
        const cur = words[i];
        i = (i + 1) % words.length;
        const nxt = words[i];
        cur.classList.remove("on");
        cur.classList.add("out");
        nxt.classList.remove("out");
        nxt.classList.add("on");
        setTimeout(() => cur.classList.remove("out"), 700);
      }, 2200);
      cleanups.push(() => clearInterval(id));
    }

    // reveal on scroll
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    const st = root.querySelector<HTMLElement>("[data-words]");
    const words = st ? Array.from(st.querySelectorAll(".w")) : [];
    const nav = root.querySelector<HTMLElement>(".nav")!;
    const lightSecs = Array.from(root.querySelectorAll<HTMLElement>(".light, .statement, .contact"));

    // pinned horizontal work gallery (desktop only)
    const work = root.querySelector<HTMLElement>(".work")!;
    const track = root.querySelector<HTMLElement>("[data-track]")!;
    const bar = work.querySelector<HTMLElement>(".work__bar")!;
    const desk = matchMedia("(min-width: 900px) and (min-height: 600px)");
    let pinned = false;
    let dist = 0;

    const onScroll = () => {
      if (pinned) {
        const r = work.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -r.top / (work.offsetHeight - innerHeight || 1)));
        track.style.transform = `translate3d(${-p * dist}px,0,0)`;
        bar.style.setProperty("--p", String(p));
      } else {
        const max = track.scrollWidth - track.clientWidth;
        bar.style.setProperty("--p", String(max ? track.scrollLeft / max : 0));
      }
      let bg = "dark";
      for (const s of lightSecs) {
        const r = s.getBoundingClientRect();
        if (r.top <= 30 && r.bottom > 30) {
          bg = s.matches(".light") ? "light" : "orange";
          break;
        }
      }
      nav.dataset.bg = bg;
      nav.classList.toggle("solid", scrollY > innerHeight * 0.6);
      if (st && words.length) {
        const r = st.getBoundingClientRect();
        const p = (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35);
        const n = reduce ? words.length : Math.round(Math.min(1, Math.max(0, p)) * words.length);
        words.forEach((w, k) => w.classList.toggle("on", k < n));
      }
    };
    const layout = () => {
      pinned = desk.matches && !reduce;
      work.classList.toggle("is-pinned", pinned);
      track.style.transform = "";
      if (pinned) {
        dist = Math.max(0, track.scrollWidth - innerWidth);
        work.style.height = dist + innerHeight + "px";
      } else {
        work.style.height = "";
      }
      onScroll();
    };
    addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", layout);
    addEventListener("load", layout);
    layout();
    // images may change the track width after they load
    const imgs = Array.from(track.querySelectorAll("img"));
    imgs.forEach((im) => im.addEventListener("load", layout));
    cleanups.push(() => {
      removeEventListener("scroll", onScroll);
      track.removeEventListener("scroll", onScroll);
      removeEventListener("resize", layout);
      removeEventListener("load", layout);
      imgs.forEach((im) => im.removeEventListener("load", layout));
      work.style.height = "";
    });

    // cursor
    const cur = root.querySelector<HTMLElement>(".cursor");
    if (cur && matchMedia("(hover: hover) and (pointer: fine)").matches && !reduce) {
      let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y, frame = 0;
      const move = (e: PointerEvent) => {
        x = e.clientX;
        y = e.clientY;
        cur.classList.add("on");
      };
      const leave = () => cur.classList.remove("on");
      addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerleave", leave);
      const loop = () => {
        cx += (x - cx) * 0.2;
        cy += (y - cy) * 0.2;
        cur.style.transform = `translate3d(${cx}px,${cy}px,0)`;
        frame = requestAnimationFrame(loop);
      };
      loop();
      const big = () => cur.classList.add("big");
      const small = () => cur.classList.remove("big");
      const targets = Array.from(root.querySelectorAll("[data-cursor]"));
      targets.forEach((el) => {
        el.addEventListener("pointerenter", big);
        el.addEventListener("pointerleave", small);
      });
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        removeEventListener("pointermove", move);
        document.removeEventListener("pointerleave", leave);
        targets.forEach((el) => {
          el.removeEventListener("pointerenter", big);
          el.removeEventListener("pointerleave", small);
        });
      });
    }

    return () => cleanups.forEach((f) => f());
  }, []);

  return null;
}
