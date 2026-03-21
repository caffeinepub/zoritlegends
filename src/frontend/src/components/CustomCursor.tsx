import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [role='button'], input, select, textarea, label")
      ) {
        setHovered(true);
      }
    };
    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [role='button'], input, select, textarea, label")
      ) {
        setHovered(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.22;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? "12px" : "8px",
          height: hovered ? "12px" : "8px",
          borderRadius: "50%",
          background: hovered ? "oklch(0.82 0.22 295)" : "oklch(0.75 0.20 295)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.2s, height 0.2s, background 0.2s",
          boxShadow:
            "0 0 8px oklch(0.75 0.20 295 / 0.9), 0 0 16px oklch(0.62 0.22 295 / 0.6)",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className={hovered ? "cursor-ring-hovered" : "cursor-ring"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? "48px" : "32px",
          height: hovered ? "48px" : "32px",
          borderRadius: "50%",
          border: hovered
            ? "2px solid oklch(0.82 0.22 295)"
            : "2px solid oklch(0.62 0.22 295 / 0.7)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.25s, height 0.25s, border-color 0.25s",
          animation: "cursor-pulse 2s ease-in-out infinite",
        }}
      />
    </>
  );
}
