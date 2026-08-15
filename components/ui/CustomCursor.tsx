"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/lib/animations/gsapUtils";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const cursor = document.getElementById("custom-cursor");
    const cursorFollower = document.getElementById("custom-cursor-follower");
    if (!cursor || !cursorFollower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const onMouseEnterInteractive = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-cursor") || "";
      setCursorText(text);
      setIsHovered(true);
    };

    const onMouseLeaveInteractive = () => {
      setCursorText("");
      setIsHovered(false);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Attach hover listeners to elements with data-cursor or interactive tags
    const interactiveElements = document.querySelectorAll("a, button, [data-cursor]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive as EventListener);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive as EventListener);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        id="custom-cursor"
        className="aria-hidden pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-champagne w-2 h-2 transition-transform duration-200"
      />
      <div
        id="custom-cursor-follower"
        className={`aria-hidden pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-champagne/40 transition-all duration-300 flex items-center justify-center text-[9px] uppercase tracking-widest text-brand-ivory ${
          isHovered
            ? "w-16 h-16 bg-brand-champagne/10 backdrop-blur-xs border-brand-champagne scale-110"
            : "w-8 h-8 opacity-60"
        }`}
      >
        {cursorText}
      </div>
    </>
  );
}
