import TitleTag from "@/components/landing/title-tag";
import MainBtn from "@/components/main-btn";
import { PlayIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const VideoReviewsSection = () => {
    const caseStudies = [
        {
            founder: "Christian Vance",
            company: "Vance Capital Group",
            metric: "74% Revenue Expansion",
            timeframe: "First 90 Days",
            videoThumbnail: "/thumbnails/case-study-1.jpg", // Replace with your image asset paths
            headline: "From 70-hour operational gridlock to an automated outbound machine.",
        },
        {
            founder: "Elena Rostova",
            company: "Aether Digital Architecture",
            metric: "Scale from $40k to $185k/mo",
            timeframe: "6 Months Post-Handoff",
            videoThumbnail: "/thumbnails/case-study-2.jpg",
            headline: "Stepping completely out of delivery allowed us to safely triple our capacity.",
        },
        {
            founder: "Marcus Thorne",
            company: "Thorne Global Logistics",
            metric: "320+ Executive Hours Reclaimed",
            timeframe: "Within 45 Days",
            videoThumbnail: "/thumbnails/case-study-3.jpg",
            headline: "I replaced myself with their elite 3-pillar framework. The best ROI of my career.",
        },
        {
            founder: "Sarah Jenkins",
            company: "Core Health Systems",
            metric: "2.4x Deal Pipeline Velocity",
            timeframe: "First 120 Days",
            videoThumbnail: "/thumbnails/case-study-4.jpg",
            headline: "The screening rigor is unparalleled. Our sales professional closed 3 premium contracts in week two.",
        },
    ];

    return (
        <section id="results" className="flex flex-col items-center justify-center py-28 md:py-36 bg-[#FCFAF7] px-4 sm:px-8 md:px-12 relative overflow-hidden selection:bg-amber-100 selection:text-amber-900">

            {/* Luxury Trust Badge */}
            <TitleTag
                text="The Results Speak for Themselvs"
                textColor="text-slate-800 font-semibold tracking-wider text-xs uppercase"
                bgColor="bg-amber-500/5"
                animation={false}
                borderColor="border-amber-700/20"
                border={true}
            />

            {/* Copywriting Architecture: High-Intent Headers */}
            <div className="text-center mt-8 mb-24 max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.15]">
                    Hear It From Founders Who Got Their Time Back<br />
                    <span className="font-sans font-normal italic text-slate-500">Real founders. Real scale.</span>
                </h2>
                <div className="luxury-divider" />
                <p className="supporting-text max-w-2xl mx-auto">
                    See how business owners like you built stronger teams, reclaimed their time, and started focusing on growing their companies again.
                </p>
            </div>

            {/* 4-Video Grid Framework */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl items-stretch">
                {caseStudies.map((study, index) => (
                    <div
                        key={index}
                        className="group bg-white border border-slate-100 p-6 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_-12px_rgba(180,140,100,0.15)] hover:border-amber-700/20 transition-all duration-500 flex flex-col justify-between"
                    >
                        {/* Cinematic Video Container Box */}
                        <div className="relative w-full aspect-video bg-slate-900 rounded-sm overflow-hidden mb-6 group/video shadow-inner cursor-pointer">

                            {/* Luxury Image Background Thumbnail */}
                            <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply z-10 transition-opacity group-hover/video:opacity-40" />
                            <img
                                src={study.videoThumbnail}
                                alt={`${study.founder} Case Study`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-102"
                            />

                            {/* Verified Badge Tag Inside Video */}
                            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-none">
                                <ShieldCheckIcon className="w-3.5 h-3.5 text-amber-500" />
                                <span className="text-[10px] font-mono uppercase tracking-widest text-white/90">Verified Record</span>
                            </div>

                            {/* Luxury Minimal Center Play Trigger Button */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-slate-100 text-slate-900 transform transition-all duration-500 scale-100 group-hover/video:scale-110 group-hover/video:bg-amber-700 group-hover/video:text-white">
                                    <PlayIcon className="w-6 h-6 sm:w-7 sm:h-7 pl-1" />
                                </div>
                            </div>

                            {/* Running Timeframe Overlay */}
                            <div className="absolute bottom-4 right-4 z-20 bg-slate-900/60 backdrop-blur-sm px-2 py-1 text-[10px] font-mono text-white/80">
                                {study.timeframe}
                            </div>
                        </div>

                        {/* Content Metrics Layer Below Video */}
                        <div className="flex flex-col flex-grow justify-between">
                            <div>
                                {/* Massive High-Ticket Impact Metric */}
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 border-b border-slate-100 pb-3">
                                    <h3 className="text-2xl font-serif font-medium text-amber-800 tracking-tight">
                                        {study.metric}
                                    </h3>
                                    <div className="text-xs font-light text-slate-400">
                                        <span className="font-semibold text-slate-800">{study.founder}</span> — {study.company}
                                    </div>
                                </div>

                                {/* Direct High-Converting Quote Headline */}
                                <p className="text-base font-normal text-slate-800 tracking-tight leading-snug mb-2 text-balance">
                                    "{study.headline}"
                                </p>
                            </div>

                            {/* Micro Subtle Structural End-Line */}
                            <div className="w-8 h-[1px] bg-slate-200 mt-6" />
                        </div>

                    </div>
                ))}
            </div>

            {/* Bottom Conversion Section Hook */}
            <div className="mt-24 text-center flex flex-col items-center max-w-xl border-t border-slate-200/60 pt-12">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800/80 mb-2">Your Turn to Scale</span>
                <h4 className="text-xl font-serif text-slate-900 tracking-tight mb-4">
                    Are you ready to become our next corporate success narrative?
                </h4>
                <p className="text-sm font-light text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
                    The bottlenecks crushing your growth can be systematically offloaded within 7 business days. Let’s construct your custom leverage layout.
                </p>

                <MainBtn
                    text="Engineer My Growth Infrastructure"
                    href="/#contact"
                    margin="mt-0"
                    textColor="text-white bg-slate-900 hover:bg-amber-950 rounded-none tracking-wide text-sm font-medium transition-all duration-300 shadow-xl px-10 py-5"
                />

                <p className="mt-4 text-xs font-light text-slate-400">
                    Strictly confidential brief. No pitch. Pure operational engineering analysis.
                </p>
            </div>

        </section>
    );
};

export default VideoReviewsSection;
