import React from "react";

const Footer = () => (
    <footer className="bg-primary text-onPrimary py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm">&copy; {new Date().getFullYear()} No Grout. All rights reserved.</span>
        </div>
    </footer>
);

export default Footer;