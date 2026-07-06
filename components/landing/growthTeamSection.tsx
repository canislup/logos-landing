import { UserPlusIcon, MegaphoneIcon, InboxStackIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import TitleTag from "@/components/landing/title-tag";
import MainBtn from "@/components/main-btn";

const GrowthTeamSection = () => {
    const corePillars = [
        {
            role: "Sales Professional",
            valueProp: "The Rainmaker",
            desc: "Engineers modern outbound funnels, qualifies premium deal pipelines, and closes opportunities while you sleep.",
            icon: <UserPlusIcon className="w-5 h-5 text-amber-700" />,
        },
        {
            role: "Marketing Professional",
            valueProp: "The Growth Catalyst",
            desc: "Architects your digital presence, commands industry authority, and consistently attracts qualified corporate intent.",
            icon: <MegaphoneIcon className="w-5 h-5 text-amber-700" />,
        },
        {
            role: "Executive Assistant",
            valueProp: "The Shield",
            desc: "Intercepts administrative noise, structures your operations, and completely frees up your focus for high-leverage vision.",
            icon: <InboxStackIcon className="w-5 h-5 text-amber-700" />,
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center py-28 md:py-36 bg-[#FCFAF7] px-4 sm:px-8 md:px-12 relative overflow-hidden selection:bg-amber-100 selection:text-amber-900">

            {/* Sub-Header Luxury Badge Element */}
            <TitleTag
                text="The Leverage Frame"
                textColor="text-slate-800 font-semibold tracking-wider text-xs uppercase"
                bgColor="bg-amber-500/5"
                animation={false}
                borderColor="border-amber-700/20"
                border={true}
            />

            {/* High-Converting Editorial Header Hook */}
            <div className="text-center mt-8 mb-20 max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.15]">
                    You Don't Need Ten Employees.<br />
                    <span className="font-sans font-normal italic text-slate-500">You simply need the right three.</span>
                </h2>

                {/* Established Signature Luxury Divider Rule */}
                <div className="w-12 h-[1px] bg-amber-700/30 my-6 mx-auto"></div>

                <p className="supporting-text max-w-xl mx-auto">
                    Scale isn't built through massive payroll chaos. It is unlocked by installing three dedicated pillars of elite leverage.
                </p>
            </div>

            {/* The 3-Column Luxury Architecture Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl items-stretch">
                {corePillars.map((pillar, index) => (
                    <div
                        key={index}
                        className="group relative bg-white border border-slate-100 p-8 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_-10px_rgba(180,140,100,0.12)] hover:border-amber-700/20 transition-all duration-500 flex flex-col justify-between"
                    >
                        {/* Top Structural Card Area */}
                        <div>
                            {/* Minimalist Muted Gold Icon Frame Wrapper */}
                            <div className="flex items-center justify-center p-3 w-11 h-11 bg-slate-50 border border-slate-100 rounded-sm mb-6 group-hover:bg-amber-50 group-hover:border-amber-100 transition-colors duration-500">
                                {pillar.icon}
                            </div>

                            {/* Subtitle Value Tagging */}
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-800/80 block mb-1">
                {pillar.valueProp}
              </span>

                            {/* Core Role Main String Header */}
                            <h3 className="text-xl font-serif text-slate-900 tracking-tight mb-4 group-hover:text-amber-950 transition-colors duration-300">
                                {pillar.role}
                            </h3>

                            {/* Detailed High-End Context Description Copy */}
                            <p className="text-sm font-light text-slate-500 leading-relaxed text-pretty">
                                {pillar.desc}
                            </p>
                        </div>

                        {/* Subtle structural floor indicator line inside the card grid frame */}
                        <div className="w-full h-[2px] bg-slate-100 group-hover:bg-amber-700/20 transition-colors duration-500 mt-8 rounded-full" />
                    </div>
                ))}
            </div>

            {/* High-Converting Close Section Component Wrapper */}
            <div className="mt-20 text-center flex flex-col items-center max-w-2xl border-t border-slate-200/60 pt-12">
                <p className="text-base md:text-lg font-light text-slate-600 leading-relaxed max-w-lg mx-auto text-balance mb-8">
                    Imagine how much faster your architecture could expand if you weren't forcing yourself to perform all three roles simultaneously.
                </p>

                {/* Core Component Luxury Action Button Alignment */}
                <div className="group/btn">
                    <MainBtn
                        text="Build My Core Team"
                        href="/#contact"
                        margin="mt-0"
                        textColor="text-white bg-slate-900 hover:bg-amber-950 rounded-none tracking-wide text-sm font-medium transition-all duration-300 shadow-xl px-10 py-5 flex items-center gap-2"
                    />
                </div>

                <p className="mt-4 text-xs font-light text-slate-400">
                    Vetting, deployment, and performance guarantees managed completely by us.
                </p>
            </div>

        </section>
    );
};

export default GrowthTeamSection;
