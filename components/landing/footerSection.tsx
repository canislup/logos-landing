import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: "About us", href: "#pillars" },
            { name: "Looking to get hired", href: "#process" },
            { name: "Testimonials", href: "#results" },
        ],
        resources: [
            { name: "How it works", href: "#contact" },
            { name: "FAQ", href: "/briefings" },
            { name: "Blog", href: "/standards" },
        ],
        legal: [
            { name: "Privacy Protocol", href: "/privacy" },
            { name: "Nondisclosure Terms", href: "/nda" },
            { name: "Service Agreement", href: "/terms" },
        ],
    };

    return (
        <footer className="bg-slate-900 text-[#FCFAF7] pt-20 pb-10 px-4 sm:px-8 md:px-12 relative overflow-hidden border-t border-slate-800 selection:bg-amber-900 selection:text-amber-100">
            {/* Decorative Grid Artifact */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Top Segment: Brand Pitch & Link Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800">

                    {/* Brand Manifesto Column */}
                    <div className="lg:col-span-4 flex flex-col items-start gap-6">
                        <div className="logo-container">
                            <a href="#">
                                <Image
                                    src="/horizontal-no-bg.png"
                                    alt="Logos Recruiting"
                                    className="logo"
                                    fill
                                    priority
                                />
                            </a>
                        </div>
                        <p className="text-sm font-light text-slate-400 leading-relaxed max-w-sm">Building high-performing global teams for businesses ready to scale. Faster hiring. Better talent. Smarter growth.
                        </p>
                        {/* Status Indicator */}
                        <div className="flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700/60 rounded-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">Cohort Induction Open</span>
                        </div>
                    </div>

                    {/* Dynamic Link Menus Grid Mapping */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Column 1: System */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">
                                Company
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm font-light text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-0.5 group">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Firm */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">
                                Resources
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm font-light text-slate-400 hover:text-white transition-colors duration-300">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Protocols */}
                        <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">
                                Contact
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm font-light text-slate-400 hover:text-white transition-colors duration-300">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Segment: Copyright & Trust Footprint */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Copyright Data */}
                    <div className="text-xs font-light text-slate-500 tracking-normal text-center sm:text-left">
                        © {currentYear} Logos Recruiting. All rights classified reserved.
                    </div>

                    {/* Secure Execution Link Accent */}
                    <div className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-slate-500 hover:text-amber-700 transition-colors duration-300 cursor-pointer group">
                        <span>Secure Encryption Active</span>
                        <ArrowUpRightIcon className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                </div>

            </div>
        </footer>
    );
}
