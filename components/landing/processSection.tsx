import TitleTag from "@/components/landing/title-tag";
import MainBtn from "@/components/main-btn";
import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  SparklesIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

const ProcessSection = () => {
  const steps = [
    {
      day: "Days 1–2",
      phase: "Phase 01",
      title: "The Friction Audit",
      desc: "We dive into your current architecture to pinpoint the exact low-leverage tasks draining your time, isolating where your growth is bottlenecked.",
      icon: <MagnifyingGlassIcon className="w-5 h-5 text-amber-700" />,
    },
    {
      day: "Days 3–4",
      phase: "Phase 02",
      title: "Precision Sourcing",
      desc: "We deploy our global scouting network to source and vet elite professionals tailored precisely to your company's operational stack.",
      icon: <UserGroupIcon className="w-5 h-5 text-amber-700" />,
    },
    {
      day: "Day 5",
      phase: "Phase 03",
      title: "Elite Curated Matching",
      desc: "Skip the hiring fatigue. We present only the top 1% pre-qualified candidates who match your culture and are fully prepared to execute from day one.",
      icon: <SparklesIcon className="w-5 h-5 text-amber-700" />,
    },
    {
      day: "Day 7",
      phase: "Phase 04",
      title: "The CEO Handoff",
      desc: "We manage the onboarding contracts, continuous payroll, and legal infrastructure. You step backward from the noise and safely forward into true vision.",
      icon: <RocketLaunchIcon className="w-5 h-5 text-amber-700" />,
    },
  ];

  return (
    <section id="process" className="flex flex-col items-center justify-center py-28 md:py-36 bg-[#FCFAF7] px-4 sm:px-8 md:px-12 relative overflow-hidden selection:bg-amber-100 selection:text-amber-900">

      {/* Structural Minimalist Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Luxury Accent Badge */}
      <TitleTag
        text="The 7-Day Architecture"
        textColor="text-slate-800 font-semibold tracking-wider text-xs uppercase"
        bgColor="bg-amber-500/5"
        animation={false}
        borderColor="border-amber-700/20"
        border={true}
      />

      {/* Conversion-Driven Editorial Headlines */}
      <div className="text-center mt-8 mb-24 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.15]">
          How We Restore Your Executive Freedom.<br />
          <span className="font-sans font-normal italic text-slate-500">From tactical gridlock to strategic leverage in one week.</span>
        </h2>
        <div className="w-12 h-[1px] bg-amber-700/30 my-6 mx-auto"></div>
        <p className="supporting-text max-w-xl mx-auto">
          We handle the sourcing risk, operational onboarding, and infrastructure. You simply meet the elite.
        </p>
      </div>

      {/* Timeline Layout Container */}
      <div className="w-full max-w-6xl relative">

        {/* Central Connecting Timeline Line (Desktop-Only Horizontal Grid) */}
        <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[1px] bg-slate-200/80 -z-10" />

        {/* 4-Step Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          {steps.map((step, index) => (
            <div key={index} className="group flex flex-col items-start relative">

              {/* Top Node Frame Area */}
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0 w-full mb-4">

                {/* Minimal Square Node Dot Container */}
                <div className="flex items-center justify-center p-3 w-11 h-11 bg-white border border-slate-200 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] group-hover:border-amber-700/30 group-hover:bg-amber-50/50 transition-all duration-500 z-10 shrink-0">
                  {step.icon}
                </div>

                {/* Micro Meta Information Blocks */}
                <div className="lg:mt-6 flex flex-row items-center gap-2 lg:w-full">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                    {step.day}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-slate-400 font-medium px-2 py-0.5 bg-slate-100/80 rounded-none">
                    {step.phase}
                  </span>
                </div>
              </div>

              {/* Text Description Stack */}
              <div className="pl-15 lg:pl-0 mt-1 lg:mt-2">
                <h3 className="text-lg font-serif text-slate-900 tracking-tight mb-3 group-hover:text-amber-950 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-slate-500 leading-relaxed text-pretty">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Bottom Conversion Area Hook */}
      <div className="mt-24 text-center flex flex-col items-center max-w-xl border-t border-slate-200/60 pt-12">
        <h4 className="text-xl font-serif text-slate-900 tracking-tight mb-4">
          One week from today, you could finally step out of the engine room.
        </h4>
        <p className="text-sm font-light text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
          Stop postponing your expansion. Let our team engineer your infrastructure while you get back to leading your company.
        </p>

        <MainBtn
          text="Initiate Your 7-Day Growth Handoff"
          href="/#contact"
          margin="mt-0"
          textColor="text-white bg-slate-900 hover:bg-amber-950 rounded-none tracking-wide text-sm font-medium transition-all duration-300 shadow-xl px-10 py-5"
        />

        <p className="mt-4 text-[11px] font-mono uppercase tracking-widest text-slate-400">
          Next Cohort Induction: Enrolling Now
        </p>
      </div>

    </section>
  );
};

export default ProcessSection;
