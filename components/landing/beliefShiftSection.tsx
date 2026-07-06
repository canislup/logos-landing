import TitleTag from "@/components/landing/title-tag";
import MainBtn from "@/components/main-btn";
import {
    SparklesIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    XCircleIcon
} from "@heroicons/react/24/outline";

export default function BeliefShiftSection() {
    const corporateExamples = [
        {
            company: "Deel",
            valuation: "$12B+ Valuation",
            insight: "Scaled to unicorn status by anchoring their entire early infrastructure on decentralized global execution cells, out-pacing regional legacy competitors.",
        },
        {
            company: "GitLab",
            valuation: "100% Remote Architecture",
            insight: "Eliminated geographical hiring constraints completely to secure absolute top-tier talent, engineering a public listing with zero physical office footprint overhead.",
        },
        {
            company: "Wise",
            valuation: "Global Delivery Networks",
            insight: "Systematically cross-engineered engineering and operational squads across international borders to maintain continuous 24/7 product momentum.",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center py-32 md:py-44 bg-[#FCFAF7] px-4 sm:px-8 md:px-12 relative overflow-hidden selection:bg-amber-100 selection:text-amber-900">
            {/* Structural Minimalist Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

            {/* =========================================================================
         SECTION 1: SECRET REVEAL (Oversized Typography & Pure Whitespace)
         ========================================================================= */}
            <div className="flex flex-col items-center text-center max-w-5xl mb-32">
                <TitleTag
                    text="The Hidden Framework"
                    textColor="text-slate-800 font-semibold tracking-wider text-xs uppercase"
                    bgColor="bg-amber-500/5"
                    animation={false}
                    borderColor="border-amber-700/20"
                    border={true}
                />

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight leading-[1.1] mt-8 mb-12 max-w-4xl text-balance">
                    The Secret the Fastest-Growing Companies Figured Out Years Ago
                </h2>

                <div className="w-16 h-[1px] bg-amber-700/30 mb-12"></div>

                {/* High-Impact Prose Cascade */}
                <div className="flex flex-col gap-6 text-lg sm:text-2xl font-light text-slate-600 max-w-3xl leading-relaxed tracking-tight text-balance">
                    <p>Most founders believe growth comes from working harder.</p>
                    <p className="font-serif font-normal italic text-amber-800 text-2xl sm:text-3xl">It doesn't.</p>
                    <p>The companies pulling ahead discovered something years ago.</p>
                    <p className="font-normal text-slate-900 font-serif text-xl sm:text-2xl pt-2">
                        They stopped trying to build everything in-house.
                    </p>
                    <p>Instead, they built global teams.</p>
                    <p className="text-base sm:text-lg text-slate-400 font-mono tracking-wide uppercase pt-4">
                        Not because they couldn't afford local employees.
                    </p>
                    <p className="font-medium text-slate-900 tracking-tight">
                        Because it created an absolute, unfair competitive advantage.
                    </p>
                </div>
            </div>

            {/* =========================================================================
         SECTION 2: PROVE THE SECRET (Recognizable Luxury Case Grids)
         ========================================================================= */}
            <div className="w-full max-w-6xl mb-32 relative">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Institutional Blueprint</span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight mt-2">
                        The Playbook of the Modern Unicorn
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {corporateExamples.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-slate-100 p-8 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_-10px_rgba(180,140,100,0.1)] hover:border-amber-700/20 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-lg font-serif font-medium text-slate-900 mb-1 group-hover:text-amber-800 transition-colors duration-300">
                                    {item.company}
                                </div>
                                <div className="text-[11px] font-mono uppercase tracking-widest text-amber-700/80 mb-6 block">
                                    {item.valuation}
                                </div>
                                <p className="text-sm font-light text-slate-500 leading-relaxed">
                                    {item.insight}
                                </p>
                            </div>
                            <div className="w-6 h-[1px] bg-slate-200 group-hover:bg-amber-700/30 transition-colors mt-8" />
                        </div>
                    ))}
                </div>
            </div>

            {/* =========================================================================
         SECTION 3: OLD THINKING VS MODERN THINKING (The Cognitive Shift Matrix)
         ========================================================================= */}
            <div className="w-full max-w-5xl mb-32">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">The Structural Paradox</span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight mt-2">
                        Dismantling the Outdated Paradigm
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Legacy Vector */}
                    <div className="bg-slate-50/50 border border-slate-200/60 p-8 rounded-sm flex flex-col gap-6">
                        <div className="flex items-center gap-2.5 text-slate-400">
                            <XCircleIcon className="w-5 h-5 shrink-0" />
                            <h4 className="text-xs font-mono uppercase tracking-widest font-semibold">The Outdated Model</h4>
                        </div>
                        <div className="space-y-4 text-sm font-light text-slate-500 leading-relaxed">
                            <p className="text-slate-800 font-medium">Hiring local staff under regional cost constraints.</p>
                            <p>Forcing high overhead expenses onto localized offices while filtering through a hyper-narrow, local geographic talent pool.</p>
                            <p className="text-xs italic pt-2">Result: Fragmented capacity, limited skill options, and massive overhead congestion.</p>
                        </div>
                    </div>

                    {/* Modern Vector */}
                    <div className="bg-white border border-amber-700/10 shadow-[0_4px_25px_-5px_rgba(180,140,100,0.05)] p-8 rounded-sm flex flex-col gap-6 relative">
                        <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-amber-500/10 border border-amber-700/20 text-amber-900 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-none">
                            Strategic Edge
                        </div>
                        <div className="flex items-center gap-2.5 text-amber-700">
                            <CheckCircleIcon className="w-5 h-5 shrink-0" />
                            <h4 className="text-xs font-mono uppercase tracking-widest font-semibold">The Decentralized Model</h4>
                        </div>
                        <div className="space-y-4 text-sm font-light text-slate-500 leading-relaxed">
                            <p className="text-slate-900 font-medium font-serif">Deploying elite global infrastructure cells.</p>
                            <p>Securing the top 1% of global professionals to maximize asset leverage, run operations smoothly across time zones, and protect founder headspace.</p>
                            <p className="text-xs text-amber-800 font-medium pt-2">Result: Scalable infrastructure, hyper-efficient overhead, and extreme speed.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================================
         SECTION 4: REVEAL LOGOS AS THE SOLUTION (The Conversion Closer)
         ========================================================================= */}
            <div className="text-center flex flex-col items-center max-w-2xl border-t border-slate-200/60 pt-16 w-full">
                <div className="flex items-center justify-center p-3 bg-amber-500/5 border border-amber-700/20 rounded-none mb-6">
                    <SparklesIcon className="w-5 h-5 text-amber-700" />
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-amber-800/80 mb-2">The Architecture Switch</span>

                <h4 className="text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight mb-4 text-balance">
                    Stop navigating scale through an obsolete lens.
                </h4>

                <p className="text-sm font-light text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
                    We don't just recruit. We inject the exact decentralized operational team your business requires to successfully offload logistics and regain executive vision.
                </p>

                <div className="group/btn">
                    <MainBtn
                        text="Transition to Global Leverage"
                        href="/#contact"
                        margin="mt-0"
                        textColor="text-white bg-slate-900 hover:bg-amber-950 rounded-none tracking-wide text-sm font-medium transition-all duration-300 shadow-xl px-10 py-5 flex items-center gap-2"
                    />
                </div>

                <p className="mt-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Architect your custom blueprint within 7 business days
                </p>
            </div>

        </section>
    );
}
