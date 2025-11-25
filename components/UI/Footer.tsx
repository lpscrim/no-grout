import React from "react";
import Link from "next/link";
import AnimateMe from "./AnimateMe";

const Footer = ({ mode }: { mode?: "light" | "dark" }) => (
    <footer className={`relative z-10 ${mode === "dark" ? "bg-primary" : "bg-accent"} text-foreground py-6`}>
        <div className="container mx-auto px-2 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm">&copy; {new Date().getFullYear()} No Grout About It. </span>
            <div>
                <span className="text-sm mx-5">
                    <Link href="https://www.facebook.com/nogroutaboutit/" className="hover:text-background transition-colors duration-300">Facebook</Link>
                </span>
                <span>|</span>
                <span className="text-sm mx-5">
                    <Link href="https://www.mybuilder.com/profile/no_grout_about_it_-_tiling_services" className="hover:text-background transition-colors duration-300">MyBuilder</Link>
                </span>
            </div>
            <div className="flex flex-row ">
                <span className="text-sm">Site by: &nbsp; </span>
                <AnimateMe />
            </div>
        </div>
    </footer>
);

export default Footer;