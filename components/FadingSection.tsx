'use client'
import { useRef, useEffect } from "react";

export default function FadingSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const distanceFromTop = rect.top;

      // Fade only in the top 1/4 of the element
      const fadeZone = elementHeight * 0.25;
      let opacity = 1;
      if (distanceFromTop < fadeZone) {
        opacity = distanceFromTop / fadeZone;
      }
      opacity = Math.max(0, Math.min(1, opacity)); // Clamp between 0 and 1
      ref.current.style.opacity = String(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}