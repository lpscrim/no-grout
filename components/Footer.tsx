import React from "react";
import Link from "next/link";

const Footer = () => (
    <footer className="bg-primary text-onPrimary py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm">&copy; {new Date().getFullYear()} No Grout About It. </span>
            <span className="text-sm">Designed by &nbsp;
                <Link href="https://www.lpscrim.com">lpscrim.com</Link>
            </span>
        </div>
    </footer>
);

export default Footer;