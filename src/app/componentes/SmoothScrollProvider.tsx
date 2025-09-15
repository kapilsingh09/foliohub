"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: 0.9,
      // Smooth, less floaty easing. Linear if reduced motion.
      easing: (t: number) => (prefersReduced ? t : 1 - Math.pow(1 - t, 1.8)),
      // Improve responsiveness
      wheelMultiplier: 0.9,
      touchMultiplier: 1.0,
      smoothWheel: !prefersReduced,
      // Dampen overshoot wobble
      lerp: 0.1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
