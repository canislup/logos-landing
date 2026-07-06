import TitleTag from "@/components/landing/title-tag";
import MainBtn from "@/components/main-btn";
import {
    SparklesIcon,
    ArrowRightIcon,
    CheckIcon,
    GlobeAmericasIcon,
    BuildingOfficeIcon,
    CpuChipIcon,
    ShoppingBagIcon,
    CloudIcon
} from "@heroicons/react/24/outline";

export default function BeliefShiftSection2() {
    const globalCompanies = [
        {
            name: "Apple",
            desc: "Manufactures products across multiple countries to access world-class production capabilities and improve efficiency.",
            icon: <CpuChipIcon className="w-5 h-5 text-slate-700" />,
        },
        {
            name: "Microsoft",
            desc: "Operates engineering, product, and support teams across the globe to access exceptional talent wherever it exists.",
            icon: <CloudIcon className="w-5 h-5 text-slate-700" />,
        },
        {
            name: "Amazon",
            desc: "Runs customer support, technology, and operations through globally distributed teams.",
            icon: <ShoppingBagIcon className="w-5 h-5 text-slate-700" />,
        },
        {
            name: "Google",
            desc: "Builds products using engineering teams located across multiple continents.",
            icon: <GlobeAmericasIcon className="w-5 h-5 text-slate-700" />,
        },
    ];

    const coreFeatures = [
        "Pre-Vetted Professionals",
        "Pay Only When You Hire",
        "Replacement Guarantee",
        "Fast Placements",
        "Global Talent. Local Accountability."
    ];

    return (
        <section className="flex flex-col items-center justify-center py-28 md:py-36 bg-[#FCFAF7] px-4 sm:px-8 md:px-12 relative overflow-hidden selection:bg-amber-100 selection:text-amber-900">
            {/* Structural Minimalist Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* =========================================================================
         SEGMENT 1: SECRET REVEAL & THE GLOBAL COMPANIES PLAYBOOK
         ========================================================================= */}
            <div className="flex flex-col items-center text-center max-w-5xl mb-24">
                <TitleTag
                    text="The Hidden Framework"
                    textColor="text-slate-800 font-semibold tracking-wider text-xs uppercase"
                    bgColor="bg-amber-500/5"
                    animation={false}
                    borderColor="border-amber-700/20"
                    border={true}
                />

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.12] mt-8 mb-6 max-w-4xl text-balance">
                    The Secret the Fastest-Growing Companies Figured Out Years Ago
                </h2>

                <p className="supporting-text max-w-xl mx-auto mb-16 text-slate-500 font-light">
                    The World's Best Companies Don't Limit Themselves to One City.
                </p>

                {/* 4 Premium Horizontal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl text-left">
                    {globalCompanies.map((company, index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-4 bg-white p-5 border border-slate-100 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_-8px_rgba(180,140,100,0.06)] hover:border-amber-700/10 transition-all duration-500"
                        >
                            <div className="flex items-center justify-center w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm shrink-0 mt-0.5 group-hover:bg-amber-50 group-hover:border-amber-100 transition-colors duration-500">
                                {company.icon}
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-base font-serif font-medium text-slate-900 group-hover:text-amber-800 transition-colors duration-300">
                                    {company.name}
                                </h4>
                                <p className="text-xs font-light text-slate-500 leading-relaxed">
                                    {company.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Highlighted Memorable Statement */}
                <div className="mt-16 text-center max-w-2xl px-4 border-l-2 border-amber-700/30 py-2">
                    <p className="font-serif text-lg sm:text-xl text-slate-800 leading-relaxed font-light">
                        “They don't build globally because they have to.<br />
                        <span className="font-sans font-medium text-amber-800 tracking-tight not-italic text-base uppercase block mt-1 tracking-widest text-xs">
              They build globally because it gives them an advantage.”
            </span>
                    </p>
                </div>
            </div>

            {/* =========================================================================
         SEGMENT 2: TWO WAYS TO BUILD A BUSINESS (Old vs Modern Model)
         ========================================================================= */}
            <div className="w-full max-w-4xl mb-32">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Two Ways to Build a Business</span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight mt-2">
                        Old Model vs Modern Model
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Left Card: Traditional Hiring */}
                    <div className="bg-slate-50/60 border border-slate-200/50 p-8 rounded-sm flex flex-col justify-between gap-8">
                        <div>
                            <h4 className="text-sm font-mono uppercase tracking-widest font-semibold text-slate-400 mb-6">
                                Traditional Hiring
                            </h4>

                            {/* Flow Hierarchy Display */}
                            <div className="flex flex-col items-center gap-1.5 font-mono text-xs text-slate-500 mb-8 bg-slate-100/50 py-6 border border-slate-200/40 rounded-sm">
                                <span className="font-medium text-slate-700">Founder</span>
                                <span>↓</span>
                                <span>Sales</span>
                                <span>↓</span>
                                <span>Marketing</span>
                                <span>↓</span>
                                <span>Operations</span>
                                <span>↓</span>
                                <span>Support</span>
                            </div>

                            {/* Supporting Points */}
                            <ul className="space-y-3 text-sm font-light text-slate-500 pl-2">
                                <li className="flex items-center gap-2">⏱️ Limited local talent</li>
                                <li className="flex items-center gap-2">💰 Higher payroll costs</li>
                                <li className="flex items-center gap-2">⏳ Slower hiring</li>
                                <li className="flex items-center gap-2">🔄 Founder stays involved in everything</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Card: Modern Growth Infrastructure (Noticeably Aspirational) */}
                    <div className="bg-white border border-amber-700/20 shadow-[0_12px_40px_-12px_rgba(180,140,100,0.1)] p-8 rounded-sm flex flex-col justify-between gap-8 relative overflow-hidden group">
                        {/* Corner Decorative Luxury Hue Line */}
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-700 via-amber-500 to-amber-800" />

                        <div>
                            <div className="flex justify-between items-baseline mb-6">
                                <h4 className="text-sm font-mono uppercase tracking-widest font-semibold text-amber-800">
                                    Modern Growth Infrastructure
                                </h4>
                            </div>

                            {/* Flow Hierarchy Display with Country Flag Tokens */}
                            <div className="flex flex-col items-center gap-1.5 font-mono text-xs text-slate-800 mb-8 bg-amber-500/5 py-6 border border-amber-700/10 rounded-sm group-hover:bg-amber-50/50 transition-colors duration-500">
                                <span className="font-serif font-bold text-slate-900 text-sm">Founder</span>
                                <span className="text-amber-700/60 font-bold">↓</span>
                                <span className="flex items-center gap-1.5 font-medium">Sales <span className="not-italic text-sm">🇧🇷</span></span>
                                <span className="text-amber-700/60 font-bold">↓</span>
                                <span className="flex items-center gap-1.5 font-medium">Marketing <span className="not-italic text-sm">🇨🇴</span></span>
                                <span className="text-amber-700/60 font-bold">↓</span>
                                <span className="flex items-center gap-1.5 font-medium">Operations <span className="not-italic text-sm">🇲🇽</span></span>
                                <span className="text-amber-700/60 font-bold">↓</span>
                                <span className="flex items-center gap-1.5 font-medium">Support <span className="not-italic text-sm">🇵🇭</span></span>
                            </div>

                            {/* Supporting Points */}
                            <ul className="space-y-3 text-sm font-light text-slate-600 pl-2">
                                <li className="flex items-center gap-2.5">
                                    <CheckIcon className="w-4 h-4 text-amber-700 shrink-0" />
                                    <span>Access to global talent</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckIcon className="w-4 h-4 text-amber-700 shrink-0" />
                                    <span>Faster hiring windows</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckIcon className="w-4 h-4 text-amber-700 shrink-0" />
                                    <span>Optimized asset cost efficiency</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckIcon className="w-4 h-4 text-amber-700 shrink-0" />
                                    <span className="font-medium text-slate-900">Founder focuses purely on growth</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================================
         SEGMENT 3: THE BELIEF SHIFT (Dramatic Standalone Reflection Block)
         ========================================================================= */}
            <div className="w-full text-center max-w-4xl py-24 my-12 border-y border-slate-200/50 relative">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-800/80 font-medium">
          The Belief Shift
        </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-900 tracking-tight mt-4 mb-8">
                    The Question Every Founder Should Ask
                </h3>
                <div className="flex flex-col gap-4 max-w-2xl mx-auto text-lg sm:text-2xl font-light text-slate-600 leading-relaxed text-balance">
                    <p>“If the largest companies in the world build global teams...</p>
                    <p className="font-serif italic font-normal text-slate-900 pt-1">
                        Why would a growing business limit itself to hiring within driving distance of the office?”
                    </p>
                </div>
            </div>

            {/* =========================================================================
         SEGMENT 4: THE REVEAL (Introducing Logos & Five Modern Feature Cards)
         ========================================================================= */}
            <div className="text-center flex flex-col items-center w-full max-w-5xl pt-16">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">The Reveal</span>
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 tracking-tight mt-3 mb-6">
                    That's Exactly Why Logos Exists.
                </h4>

                {/* Narrative Copy Cascade */}
                <div className="text-sm sm:text-base font-light text-slate-500 max-w-2xl mx-auto leading-relaxed flex flex-col gap-3 text-pretty mb-16">
                    <p>We help ambitious businesses build the same type of global infrastructure used by today's fastest-growing companies.</p>
                    <p className="font-mono uppercase tracking-widest text-xs font-semibold text-slate-800 pt-1">Not with freelancers. Not with temporary contractors.</p>
                    <p>With carefully vetted professionals who become valuable members of your internal corporate framework.</p>

                    {/* Micro Skill Track Row */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-xs font-medium text-amber-900 uppercase font-mono tracking-wider">
                        <span>Sales</span> • <span>Marketing</span> • <span>Operations</span> • <span>Executive Support</span> • <span>Customer Success</span>
                    </div>
                    <p className="text-xs italic text-slate-400 mt-1">All selected through our proprietary vetting process.</p>
                </div>

                {/* 5 Modern Minimalist Feature Flex Cards */}
                <div className="flex flex-wrap gap-3 justify-center w-full max-w-4xl mb-20">
                    {coreFeatures.map((feature, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2.5 px-5 py-3 bg-white border border-slate-100 rounded-sm shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)]"
                        >
                            <CheckIcon className="w-4 h-4 text-amber-700 shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-slate-800 tracking-tight">
                {feature}
              </span>
                        </div>
                    ))}
                </div>

                {/* Final Trigger CTA */}
                <div className="group/btn flex flex-col items-center">
                    <MainBtn
                        text="Build Your Global Infrastructure"
                        href="/#contact"
                        margin="mt-0"
                        textColor="text-white bg-slate-900 hover:bg-amber-950 rounded-none tracking-wide text-sm font-medium transition-all duration-300 shadow-xl px-10 py-5 flex items-center gap-2"
                    />
                    <p className="mt-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        Vetting and replacement guarantees handled entirely by us
                    </p>
                </div>
            </div>

        </section>
    );
}
