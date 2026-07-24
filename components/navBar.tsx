"use client";

import { useState } from "react";
import Image from "next/image";
import MainBtn from "@/components/main-btn";
import {ArrowRightCircleIcon} from "@heroicons/react/24/outline";

interface NavLink {
    label: string;
    href: string;
}

const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Why Logos", href: "/#pain-points" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Success Stories", href: "/#results" },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="navbar bg-background-gold">
            <div className="logo-container">
                <a href="#">
                    <Image
                        src="/images/horizontal-no-bg.png"
                        alt="Logos Recruiting"
                        className="logo"
                        fill
                        priority
                    />
                </a>
            </div>

            {/* Desktop links */}
            <div className="nav-links">
                {NAV_LINKS.map((link) => (
                    <a key={link.label} className="nav-link" href={link.href}>
                        {link.label}
                    </a>
                ))}

                <MainBtn text={"Start Building My Team"} href={"/#contact"} textColor={"text-white"} icon={"arrow-circle"} />
            </div>

            {/* Mobile toggle */}
            <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span
                    className={`mobile-menu-bar mb-1.5 ${
                        isOpen ? "translate-y-[6px] rotate-45" : ""
                    }`}
                />
                <span
                    className={`mobile-menu-bar ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                    className={`mobile-menu-bar mt-1.5 ${
                        isOpen ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                />
            </button>

            {/* Mobile menu */}
            {isOpen && (
                <div className="mobile-menu">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            className="mobile-nav-link"
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        className="mobile-nav-cta"
                        href="/#contact"
                        onClick={() => setIsOpen(false)}
                    >
                        Start Building My Team
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;