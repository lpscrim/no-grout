'use client'
import { useRef, useEffect, useState, ReactNode } from "react";

interface AnimatedOnViewProps {
  children: ReactNode;
  animationClass?: string;
  className?: string;
  threshold?: number;
}

export default function AnimatedOnView({
  children,
  animationClass = "slide-in-right",
  className = "",
  threshold = 0.3,
}: AnimatedOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true); // Only set to true, never back to false
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? animationClass : ""}`}
    >
      {children}
    </div>
  );
}