import TitleTag from "@/components/landing/title-tag";
import { CheckCircleIcon, GlobeAmericasIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

const benefits = [
    "Pay Only When You Hire",
    "Replacement Guarantees",
    "Pre-Vetted Professionals",
    "Results In One Week"
]

export default function HeroSection(){
    return (
        <section className="min-h-[95dvh] flex flex-col justify-center items-center bg-[#FCFAF7] px-4 sm:px-10 py-16 md:py-24 relative overflow-hidden selection:bg-amber-100 selection:text-amber-900">
            {/* Architectural Subtle Grid Background Artifacts */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Top Luxury Badge */}
            <TitleTag
                text="Global Talent. Smarter Hiring."
                textColor="text-slate-800 font-semibold tracking-wider text-xs uppercase"
                icon={<GlobeAmericasIcon className="text-amber-700" width={16} height={16} />}
                bgColor="bg-amber-500/5"
                animation={false}
                border={true}
                borderColor="border-amber-700/20"
            />

            {/* Split Editorial Header Styling */}
            <h1 className="hero-title max-w-5xl">
                Stop Doing Everything.<br className="hidden sm:inline" />
                <span className="font-sans font-normal italic text-slate-400 block sm:inline mt-1 sm:mt-0">
                    Start Being The CEO Again.
                </span>
            </h1>

            {/* Fine Geometric Separation Rule */}
            <div className="w-12 h-[1px] bg-amber-700/30 my-6"></div>

            {/* Clean Supporting Context Layout */}
            <p className="supporting-text max-w-2xl mx-auto">
                Build a high-performing global team without enterprise-level overhead. Reclaim your calendar, protect your energy, and scale your vision.
            </p>

            {/* Premium Minimalist Benefit Layout Frame */}
            <div className="flex flex-wrap gap-3 w-full max-w-4xl justify-center mt-10">
                {benefits.map(benefit => {
                    return (
                        <TitleTag
                            text={benefit}
                            textColor="text-slate-800 font-medium text-sm tracking-tight"
                            animation={false}
                            key={benefit}
                            icon={<CheckCircleIcon className="text-amber-700" width={16} height={16}/>}
                            bgColor="bg-white"
                            border={true}
                            borderColor="border-slate-200/80 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]"
                        />
                    )
                })}
            </div>

            {/* High-Converting Executive Action Layout */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-14 w-full sm:w-auto">
                <div className="w-full sm:w-auto">
                    <a href="#contact" className="group flex items-center justify-center bg-slate-900 hover:bg-amber-950 text-white gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-none text-sm font-medium tracking-wide transition-all duration-300 shadow-xl shadow-slate-900/10 text-center w-full sm:w-auto">
                        Start Building My Growth Team
                        <ArrowRightIcon width={16} height={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
                <div className="text-center w-full sm:w-auto">
                    <a href="#pain-points" className="text-sm font-medium text-slate-600 hover:text-slate-900 border-b border-transparent hover:border-slate-900 tracking-wide transition-all duration-300 py-2 block">
                        See How It Works
                    </a>
                </div>
            </div>

            {/* Micro-Copy Trust Element */}
            <p className="mt-6 text-xs font-light text-slate-400 tracking-normal text-center">
                 15-min brief. Zero commitment. Walk away with a hiring plan.
            </p>
        </section>
    )
}
