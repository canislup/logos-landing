"use client";

import React, { useState } from "react";
import Image from "next/image";
import TitleTag from "@/components/landing/title-tag";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        businessSize: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate data dispatch delay (Replace this block with your actual API endpoint if needed)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Append user parameters directly to the Calendly URL to pre-fill booking fields
            const baseCalendlyUrl = "https://calendly.com";
            const nameParam = encodeURIComponent(formData.fullName);
            const emailParam = encodeURIComponent(formData.email);
            const targetUrl = `${baseCalendlyUrl}?name=${nameParam}&email=${emailParam}`;

            window.location.href = targetUrl;
        } catch (error) {
            console.error("Transmission failed", error);
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="flex flex-col items-center justify-center py-28 md:py-36 bg-[#FCFAF7] px-4 sm:px-8 md:px-12 relative overflow-hidden selection:bg-amber-100 selection:text-amber-900">
            {/* Structural Minimalist Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Top Luxury Validation Tag */}
            <TitleTag
                text="Ready To Stop Being The Entire Company?"
                textColor="text-slate-800 font-semibold tracking-wider text-xs uppercase"
                bgColor="bg-amber-500/5"
                animation={false}
                borderColor="border-amber-700/20"
                border={true}
            />

            {/* Headline Text Copy Blocks */}
            <div className="text-center mt-8 mb-16 max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.15]">
                    Let's Build Your Growth Team.<br />
                    {/*<span className="font-sans font-normal italic text-slate-500">Tell us a little about your business and your hiring goals.</span>*/}
                </h2>
                <div className="luxury-divider" />
                {/*<p className="supporting-text max-w-xl mx-auto">*/}
                {/*    We'll identify where you're losing the most time, recommend the highest-impact role to hire first, and show you how to build a stronger business without enterprise-level payroll costs.*/}
                {/*</p>*/}

                <p className={"supporting-text"}>Book a free 15-minute Growth Blueprint and we'll show you exactly which role your business should hire first.<br/> What you will leave the call with:</p>
                <div className={"flex items-center justify-center mt-5"}>
                    <ul className="space-y-4 text-slate-500 relative z-10">
                        <li className="flex items-start gap-4"><span className="text-amber-600">✓</span> What's currently slowing your growth</li>
                        <li className="flex items-start gap-4"><span className="text-amber-600">✓</span> Which role will generate the biggest impact</li>
                        <li className="flex items-start gap-4"><span className="text-amber-600">✓</span> How much you could save with pre-vetted global talent</li>
                    </ul>
                </div>
            </div>

            {/* Split Form & Image Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full max-w-5xl">

                {/* Left Side: Luxury Architectural Image Frame */}
                <div className="lg:col-span-5 relative w-full aspect-4/3 lg:aspect-[4/5] rounded-sm group/img lg:mt-4">

                    {/* Decorative Fine Art Border Grid Accent */}
                    <div className="absolute -inset-3 border border-slate-200 pointer-events-none rounded-sm transition-transform duration-500 group-hover/img:-translate-x-1 group-hover/img:-translate-y-1" />

                    {/* Premium Dark Tone Overlay Layer */}
                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10 rounded-sm pointer-events-none" />

                    {/* Main Secure Image Wrapper */}
                    <div className="relative w-full h-full overflow-hidden rounded-sm shadow-xl">
                        <Image
                            src="/coworkers-meeting.webp"
                            alt="Premium confidential executive strategy briefing"
                            fill
                            className="object-cover transition-transform duration-700 scale-100 group-hover/img:scale-103"
                            priority
                        />

                        {/* Minimal High-End Trust Label Overlaid in Card Corner */}
                        <div className="absolute bottom-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-none">
                            <p className="text-[10px] font-mono uppercase tracking-widest text-white/90">
                                100% Private Session
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Premium Intake Form Card */}
                <div className="lg:col-span-7 w-full bg-white border border-slate-100 p-8 sm:p-10 rounded-sm shadow-[0_10px_35px_-8px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_45px_-12px_rgba(180,140,100,0.08)] transition-shadow duration-500">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        {/* Full Name Block */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="fullName" className="text-xs font-mono uppercase tracking-widest text-slate-500 font-medium">
                                Full Name <span className="text-amber-700">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Alex Mitchell"
                                className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm font-light text-slate-900 bg-[#FCFAF7]/40 placeholder-slate-300 focus:outline-none focus:border-amber-700 focus:bg-white transition-all duration-300"
                            />
                        </div>

                        {/* Email Address Block */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-slate-500 font-medium">
                                Email <span className="text-amber-700">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="alex@company.com"
                                className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm font-light text-slate-900 bg-[#FCFAF7]/40 placeholder-slate-300 focus:outline-none focus:border-amber-700 focus:bg-white transition-all duration-300"
                            />
                        </div>

                        {/* Phone Number Block */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="phone" className="text-xs font-mono uppercase tracking-widest text-slate-500 font-medium">
                                Phone Number <span className="text-amber-700">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                                className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm font-light text-slate-900 bg-[#FCFAF7]/40 placeholder-slate-300 focus:outline-none focus:border-amber-700 focus:bg-white transition-all duration-300"
                            />
                        </div>

                        {/* Business Size Dropdown Selection Frame */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="businessSize" className="text-xs font-mono uppercase tracking-widest text-slate-500 font-medium">
                                Current Team Size <span className="text-amber-700">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="businessSize"
                                    name="businessSize"
                                    required
                                    value={formData.businessSize}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm font-light text-slate-900 bg-[#FCFAF7]/40 focus:outline-none focus:border-amber-700 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                                >
                                    <option value="" disabled className="text-slate-300">Select operational scale...</option>
                                    <option value="1-10">1 – 10 professionals</option>
                                    <option value="11-20">11 – 20 professionals</option>
                                    <option value="21-30">21 – 30 professionals</option>
                                    <option value="31-40">31 – 40 professionals</option>
                                    <option value="41-50">41 – 50 professionals</option>
                                    <option value="50+">50+ enterprise scale</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                    <svg className="fill-current h-4 w-4" xmlns="http://w3.org" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Optional Operational Message Block */}
                        {/*<div className="flex flex-col gap-1.5">*/}
                        {/*    <div className="flex justify-between items-baseline">*/}
                        {/*        <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-slate-500 font-medium">*/}
                        {/*            Operational Bottlenecks*/}
                        {/*        </label>*/}
                        {/*        <span className="text-[10px] font-sans text-slate-400 font-light">Optional</span>*/}
                        {/*    </div>*/}
                        {/*    <textarea*/}
                        {/*        id="message"*/}
                        {/*        name="message"*/}
                        {/*        rows={3}*/}
                        {/*        value={formData.message}*/}
                        {/*        onChange={handleChange}*/}
                        {/*        placeholder="Briefly describe your single primary constraint holding back scale..."*/}
                        {/*        className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm font-light text-slate-900 bg-[#FCFAF7]/40 placeholder-slate-300 focus:outline-none focus:border-amber-700 focus:bg-white transition-all duration-300 resize-none"*/}
                        {/*    />*/}
                        {/*</div>*/}

                        {/* High-Converting Final Submission CTA */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group flex items-center justify-center bg-slate-900 hover:bg-amber-950 text-white gap-3 w-full py-4 rounded-none text-xs font-medium uppercase tracking-widest transition-all duration-300 shadow-xl disabled:bg-slate-400 cursor-pointer mt-2"
                        >
                            {isSubmitting ? "Processing Briefing..." : "Build My Team"}
                            <ArrowRightIcon width={14} height={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        {/* Verification Footer Text */}
                        <p className="text-center text-[11px] text-slate-400 font-light leading-relaxed">
                            By submitting this secure form session, you will be instantly routed to our real-time synchronization framework slot on Calendly.
                        </p>
                    </form>
                </div>

            </div>
        </section>
    );
}
