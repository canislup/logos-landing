import TitleTag from "@/components/landing/title-tag";
import MainBtn from "@/components/main-btn";
import { PlayIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import caseStudies  from "@/data/testimonials_data.json"
import CandidateVideoCard from "@/components/candidateVideoCard";
import React from "react";


const VideoReviewsSection = ( ) => {

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
                    <CandidateVideoCard
                        key={index}
                        name={study.founder}
                        role={study.company}
                        salary={study.timeframe}
                        country={study.metric}
                        thumbnailUrl={study.videoThumbnail}
                        videoUrl={study.videoUrl}
                        bottomRightText={"Hired within"}
                        type={"ceo"}
                    />
                ))}
            </div>

            {/* Bottom Conversion Section Hook */}
            <div className="mt-24 text-center flex flex-col items-center max-w-xl border-t border-slate-200/60 pt-12">
                <span className="text-xl font-mono uppercase tracking-widest text-amber-800/80 mb-2">Your Turn to Scale</span>
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

                {/*<p className="mt-4 text-xs font-light text-slate-400">*/}
                {/*    Strictly confidential brief. No pitch. Pure operational engineering analysis.*/}
                {/*</p>*/}
            </div>

        </section>
    );
};

export default VideoReviewsSection;
