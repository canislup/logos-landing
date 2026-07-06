import React from "react";

interface PointCardProps {
    variant: "painpoint" | "pillar" | "timeline";
    icon: React.ReactNode;
    title?: string;
    desc?: string;
    day?: string;
    phase?: string;
    text?: string; // This handles your original "6 hats" plain string text prop
}

export default function PointCard({
                                      variant,
                                      icon,
                                      title,
                                      desc,
                                      day,
                                      phase,
                                      text
                                  }: PointCardProps) {

    // FIXED: The dynamic word splitter utility function
    const renderSplitText = (rawText?: string) => {
        if (!rawText) return null;
        const words = rawText.split(" ");
        // Safely capture the first 2 words for strong emphasis
        const highlighted = words.slice(0, 2).join(" ");
        const remainder = words.slice(2).join(" ");

        return (
            <p className="text-sm sm:text-base font-normal text-slate-500 leading-snug">
        <span className="font-bold text-slate-900 block sm:inline sm:mr-1 tracking-tight group-hover:text-amber-800 transition-colors">
          {highlighted}
        </span>
                {remainder}
            </p>
        );
    };

    // ==========================================
    // VARIANT 1: PAINPOINT CARD (Restored 6-Hats Grid Style)
    // ==========================================
    if (variant === "painpoint") {
        return (
            <div className="group flex md:flex-col items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-rose-100 transition-all duration-300 w-full">
                {/* Retained your original tinted rose background circle icon frame styling */}
                <div className="flex items-center justify-center p-2.5 bg-rose-50 rounded-lg shrink-0 mt-0.5 group-hover:bg-rose-100 transition-colors duration-300">
                    {icon}
                </div>

                {/* FIXED CHECK: If 'text' prop string exists, parse it. Otherwise use title & desc */}
                <div className="shrink">
                    {text ? (
                        renderSplitText(text)
                    ) : (
                        <div className="flex flex-col gap-1.5">
                            <h3 className="text-base font-bold text-slate-900 tracking-tight">{title}</h3>
                            <p className="text-sm font-light text-slate-500 leading-relaxed">{desc}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // ==========================================
    // VARIANT 2: PILLAR CARD (The Right 3 Employees Style)
    // ==========================================
    if (variant === "pillar") {
        return (
            <div className="group relative bg-white border border-slate-100 p-8 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_-10px_rgba(180,140,100,0.12)] hover:border-amber-700/20 transition-all duration-500 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-center p-3 w-11 h-11 bg-slate-50 border border-slate-100 rounded-sm mb-6 group-hover:bg-amber-50 group-hover:border-amber-100 transition-colors duration-500">
                        {icon}
                    </div>
                    {day && (
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-800/80 block mb-1">
              {day}
            </span>
                    )}
                    <h3 className="text-xl font-serif text-slate-900 tracking-tight mb-4 group-hover:text-amber-950 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-sm font-light text-slate-500 leading-relaxed text-pretty">
                        {desc}
                    </p>
                </div>
                <div className="w-full h-[2px] bg-slate-100 group-hover:bg-amber-700/20 transition-colors duration-500 mt-8 rounded-full" />
            </div>
        );
    }

    // ==========================================
    // VARIANT 3: TIMELINE CARD (The 7-Day Architecture Style)
    // ==========================================
    return (
        <div className="group flex flex-col items-start relative w-full">
            <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0 w-full mb-4">
                <div className="flex items-center justify-center p-3 w-11 h-11 bg-white border border-slate-200 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] group-hover:border-amber-700/30 group-hover:bg-amber-50/50 transition-all duration-500 z-10 shrink-0">
                    {icon}
                </div>
                <div className="lg:mt-6 flex flex-row items-center gap-2 lg:w-full">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
            {day}
          </span>
                    {phase && (
                        <span className="text-[10px] font-sans uppercase tracking-wider text-slate-400 font-medium px-2 py-0.5 bg-slate-100/80 rounded-none">
              {phase}
            </span>
                    )}
                </div>
            </div>
            <div className="pl-15 lg:pl-0 mt-1 lg:mt-2">
                <h3 className="text-lg font-serif text-slate-900 tracking-tight mb-3 group-hover:text-amber-950 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm font-light text-slate-500 leading-relaxed text-pretty">
                    {desc}
                </p>
            </div>
        </div>
    );
}
