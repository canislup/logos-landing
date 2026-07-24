import React from 'react';
import TitleTag from '@/components/landing/title-tag';
import  PointCard  from '@/components/pointCard';
import CandidateVideoCard from '@/components/candidateVideoCard';
import placements from "@/data/talent_data.json"
import { MagnifyingGlassIcon, IdentificationIcon, UserIcon} from "@heroicons/react/24/outline";

export default function TalentShowcaseSection( ) {

    return (
        <section className="relative w-full bg-[#FCFAF7] text-slate-900 py-32 md:py-44 overflow-hidden">

            {/* 1. Header & Supporting Text */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center mb-24">
                <TitleTag
                    text="The Talent"
                    textColor="text-slate-600"
                    bgColor="bg-white"
                    border={true}
                    borderColor="border-slate-200"
                />

                <h2 className="mt-8 font-serif text-4xl md:text-6xl text-slate-900 tracking-tight max-w-4xl">
                    Meet the People Who Give Founders Their Time Back
                </h2>

                <p className="mt-8 text-lg text-slate-600 max-w-2xl leading-relaxed">
                    These are real examples of the professionals we recruit every day.

                    Watch a few introductions from real professionals we've vetted and imagine what your business could look like with the right team behind you.
                </p>
            </div>

            {/* 2. Candidate Video Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {placements.map((candidate, index) => (
                    <CandidateVideoCard
                        key={index}
                        name={candidate.name}
                        role={candidate.role}
                        salary={candidate.salary}
                        country={candidate.country}
                        thumbnailUrl={candidate.thumbnailUrl}
                        videoUrl={candidate.videoUrl}
                    />
                ))}
            </div>

            <hr className="border-slate-200/60 w-full max-w-5xl mx-auto my-24" />

            {/* 3. Vetting Infrastructure (Using PointCard) */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h3 className="font-serif text-3xl md:text-4xl text-slate-900">How We Find Exceptional Talent</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PointCard
                        variant="pillar"
                        day="Phase 01"
                        title="We Find the Right People"
                        desc="We search across Latin America and other global talent markets to find experienced professionals who have the skills, communication, and mindset to thrive in U.S. businesses."
                        icon={<MagnifyingGlassIcon width={24} height={24} />}
                    />
                    <PointCard
                        variant="pillar"
                        day="Phase 02"
                        title="We Vet Every Candidate"
                        desc="Every candidate goes through multiple interviews, English assessments, experience verification, and role-specific evaluations before they ever reach your inbox."
                        icon={<IdentificationIcon width={24} height={24} />}
                    />
                    <PointCard
                        variant="pillar"
                        day="Phase 03"
                        title="You Only Meet the Best"
                        desc="Instead of reviewing hundreds of resumes, you'll interview a small shortlist of professionals we'd confidently hire ourselves."
                        icon={<UserIcon width={24} height={24} />}
                    />
                </div>
            </div>

        </section>
    );
}