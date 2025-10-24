'use client'
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 1.2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return show ? (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed cursor-pointer bottom-6 right-6 z-50  text-background rounded-full p-3 shadow-lg hover:bg-background transition-colors"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
        <ArrowUpIcon className="w-6 h-6 text-secondary" />
        
        
    </button>
  ) : null;
}