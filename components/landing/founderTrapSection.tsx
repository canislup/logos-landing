import Image from "next/image";
import TitleTag from "@/components/landing/title-tag";
import { BriefcaseIcon, ClockIcon, PlusIcon, EnvelopeIcon, PhoneIcon, SparklesIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import MainBtn from "@/components/main-btn";
import PointCard from "@/components/pointCard";

const FounderTrap = () => {
    const painPoints = [
        {
            icon: <BriefcaseIcon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors duration-300" />,
            title: "CEO & Closer",
            desc: "Stuck managing high-stakes client acquisition cycles manually.",
        },
        {
            icon: <ClockIcon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors duration-300" />,
            title: "Midnight Operations",
            desc: "Burning execution stamina at odd hours with zero personal switch-off.",
        },
        {
            icon: <PlusIcon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors duration-300" />,
            title: "Leads Slipping",
            desc: "Premium opportunities falling through due to fragmented follow-up systems.",
        },
        {
            icon: <EnvelopeIcon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors duration-300" />,
            title: "Operational Chaos",
            desc: "Drowning under high inbox volumes and overlapping operational tasks.",
        },
        {
            icon: <PhoneIcon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors duration-300" />,
            title: "The Ticket Trap",
            desc: "Reactive customer service blocks your highest-leverage deep work.",
        },
        {
            icon: <SparklesIcon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors duration-300" />,
            title: "Zero Strategy Space",
            desc: "No white-space left to safely forecast, engineer, and lead corporate vision.",
        },
    ];

    return (
        <section id={"pain-points"} className="flex flex-col items-center justify-center pt-32 pb-24 bg-[#FCFAF7] px-4 sm:px-8 md:px-12 selection:bg-amber-100 selection:text-amber-900">
            {/* Elegant Luxury Badge Header */}
            <TitleTag
                text="The Operational Bottleneck"
                textColor="text-slate-800 font-semibold tracking-wider text-xs uppercase"
                icon={<ExclamationTriangleIcon width={16} height={16} className="text-amber-700" />}
                bgColor="bg-amber-500/5"
                animation={false}
                borderColor="border-amber-700/20"
                border={true}
            />

            {/* High-Converting Editorial Headline */}
            <div className="text-center mt-8 mb-20 max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.12]">
                    You’re Wearing Six Hats.<br />
                    <span className="font-sans font-normal italic text-slate-500">That is why scale feels impossible.</span>
                </h2>
                <div className="w-16 h-[1px] bg-amber-700/30 mx-auto mt-6 mb-6"></div>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed text-balance">
                    Every hour spent managing ground-level logistics is an hour your elite competitors leverage to safely out-pace you.
                </p>
            </div>

            {/* Split Composition Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full max-w-6xl">

                {/* Left Frame: Luxury Editorial Border Graphic Image */}
                <div className="lg:col-span-5 relative w-full aspect-4/3 lg:aspect-[3/4] rounded-sm group/img">
                    {/* Architectural Luxury Shadow Frame Lines */}
                    <div className="absolute -inset-3 border border-slate-200 pointer-events-none rounded-sm transition-transform duration-500 group-hover/img:-translate-x-1 group-hover/img:-translate-y-1"></div>
                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10 rounded-sm"></div>

                    <div className="relative w-full h-full overflow-hidden rounded-sm shadow-xl">
                        <Image
                            src="/burned-out-business-owner.webp"
                            alt="High-performing executive processing severe burnout"
                            fill
                            className="object-cover transition-transform duration-700 scale-100 group-hover/img:scale-105"
                            priority
                        />
                    </div>
                </div>

                {/* Right Frame: Monochromatic Clean Pain Points Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {painPoints.map((item, index) => (
                        <PointCard key={index}
                                   variant="painpoint"
                                   icon={item.icon}
                                   title={item.title}
                                   text={item.desc} />
                    ))}
                </div>

            </div>

            {/* Conversational Bottom Closer Wrap */}
            <div className="mt-20 text-center flex flex-col items-center max-w-md border-t border-slate-200/60 pt-10">
                {/*<span className="text-xs font-mono uppercase tracking-widest text-amber-800/80 mb-2">The Solution</span>*/}
                <h4 className="text-lg md:text-xl font-medium text-slate-900 tracking-tight mb-6">
                    Let’s reclaim your executive focus this week.
                </h4>
                <MainBtn
                    text="Get My Time Back"
                    href="/#contact"
                    margin="mt-0"
                    textColor="text-white bg-slate-900 hover:bg-amber-900 rounded-none tracking-wide text-sm font-medium transition-all duration-300 shadow-lg px-8 py-4"
                    icon={"arrow-right"}
                />
            </div>
        </section>
    );
};

export default FounderTrap;
