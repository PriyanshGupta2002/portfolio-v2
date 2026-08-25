"use client";

import { useEffect, useRef } from "react";

/**
 * Fades content up into view when it enters the viewport —
 * the subtle scroll animation Apple uses on its product pages.
 * Pass `as` to control the rendered element (defaults to div).
 */
export default function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const ref = useRef(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
