import TitleTag from "@/components/landing/title-tag";
import MainBtn from "@/components/main-btn";
import PointCard from "@/components/pointCard"; // Imported here
import { UserPlusIcon, MegaphoneIcon, InboxStackIcon } from "@heroicons/react/24/outline";

const GrowthTeamSection = () => {
    const corePillars = [
        {
            role: "Sales Professional",
            valueProp: "The Rainmaker",
            desc: "Engineers modern outbound funnels, qualifies premium deal pipelines, and closes opportunities while you sleep.",
            icon: <UserPlusIcon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors" />,
        },
        {
            role: "Marketing Professional",
            valueProp: "The Growth Catalyst",
            desc: "Architects your digital presence, commands industry authority, and consistently attracts qualified corporate intent.",
            icon: <MegaphoneIcon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors" />,
        },
        {
            role: "Executive Assistant",
            valueProp: "The Shield",
            desc: "Intercepts administrative noise, structures your operations, and completely frees up your focus for high-leverage vision.",
            icon: <InboxStackIcon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors" />,
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center py-28 md:py-36 bg-[#FCFAF7] px-4 sm:px-8 md:px-12 relative overflow-hidden">
            <TitleTag text="The Leverage Frame" textColor="text-slate-800 font-semibold tracking-wider text-xs uppercase" bgColor="bg-amber-500/5" border={true} borderColor="border-amber-700/20" />

            <div className="text-center mt-8 mb-20 max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.15]">
                    You Don't Need Ten Employees.<br />
                    <span className="font-sans font-normal italic text-slate-500">You simply need the right three.</span>
                </h2>
                <div className="luxury-divider" />
                <p className="supporting-text max-w-xl mx-auto">
                    Scale isn't built through massive payroll chaos. It is unlocked by installing three dedicated pillars of elite leverage.
                </p>
            </div>

            {/* Grid mapping out utilizing the Unified Component */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl items-stretch">
                {corePillars.map((pillar, index) => (
                    <PointCard
                        key={index}
                        variant="pillar"
                        icon={pillar.icon}
                        title={pillar.role}
                        desc={pillar.desc}
                        day={pillar.valueProp} // Map the valueProp title string securely to the day parameters slot
                    />
                ))}
            </div>

            <div className="mt-20 text-center flex flex-col items-center max-w-2xl border-t border-slate-200/60 pt-12">
                <p className="text-base md:text-lg font-light text-slate-600 mb-8 leading-relaxed">
                    Imagine how much faster your architecture could expand if you weren't forcing yourself to perform all three roles simultaneously.
                </p>
                <MainBtn text="Build My Core Team" href="/#contact" margin="mt-0" textColor="text-white bg-slate-900 hover:bg-amber-950 rounded-none tracking-wide text-sm font-medium transition-all duration-300 shadow-xl px-10 py-5" />
            </div>
        </section>
    );
};

export default GrowthTeamSection;
