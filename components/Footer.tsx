import React from "react";
import Link from "next/link";

const Footer = ({ mode }: { mode?: "light" | "dark" }) => (
    <footer className={`${mode === "dark" ? "bg-primary" : "bg-accent"} text-foreground py-6`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm">&copy; {new Date().getFullYear()} No Grout About It. </span>
            <div>
                <span className="text-sm mx-2">
                    <Link href="https://www.facebook.com/nogroutaboutit/" className="hover:text-accent">Facebook</Link>
                </span>
                <span className="text-sm">
                    <Link href="https://www.mybuilder.com/profile/no_grout_about_it_-_tiling_services" className="hover:text-accent">MyBuilder</Link>
                </span>
            </div>
            <span className="text-sm">Site by: &nbsp;
                <Link href="https://www.lpscrim.com" className="hover:text-accent">Lpscrim</Link>
            </span>
        </div>
    </footer>
);

export default Footer;