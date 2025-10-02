import React from "react";
import Link from "next/link";

const Footer = ({ mode }: { mode?: "light" | "dark" }) => (
    <footer className={`${mode === "dark" ? "bg-primary" : "bg-accent"} text-foreground py-6`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm">&copy; {new Date().getFullYear()} No Grout About It. </span>
            <span className="text-sm">Designed by &nbsp;
                <Link href="https://www.lpscrim.com" className="hover:text-accent">Lewis Scrimgeour</Link>
            </span>
        </div>
    </footer>
);

export default Footer;