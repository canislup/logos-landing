'use client'

import React from 'react';
import { useState } from "react";
import { PlayIcon, CheckBadgeIcon, MapPinIcon, BanknotesIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface CandidateVideoCardProps {
    name: string;
    role: string;
    salary: string;
    country: string;
    thumbnailUrl: string; // URL for the video cover image
    videoUrl: string;
    bottomRightText?: string;
    type?: "ceo" | "talent"
}

export default function CandidateVideoCard({
                                               name,
                                               role,
                                               salary,
                                               country,
                                               thumbnailUrl,
                                               videoUrl,
                                               bottomRightText,
                                               type
                                           }: CandidateVideoCardProps) {


   const [isPlaying, setIsPlaying] = React.useState(false);

   const handlePlay = () => {
       setIsPlaying(true);
   }

   const handleClose = () => {
       setIsPlaying(false);
   }


    return (
        <div className="group relative bg-white border border-slate-200 p-4 rounded-sm shadow-sm hover:border-amber-900/30 hover:shadow-xl transition-all duration-500 flex flex-col">


            {/* Cinematic Video Container */}
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden rounded-sm cursor-pointer">

                {/* Background Image Placeholder Or Playing Video */}
                { isPlaying ? (
                    <div className={"video-container absolute bg-blue-700 top-0 right-0 bottom-0 left-0 z-50"}>
                        <a className={"absolute z-50 top-0 right-0 p-5"}>
                            <XMarkIcon onClick={handleClose} className="h-5 w-5 text-white cursor-pointer" />
                        </a>
                        <video
                            src={videoUrl}
                            controls
                            autoPlay
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover rounded-sm bg-black"
                        />
                    </div>
                    ) :(
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105"
                        style={{ backgroundImage: `url(${thumbnailUrl})` }}
                    />
                )
                }


                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div onClick={handlePlay} className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:bg-amber-900/80 group-hover:border-amber-900 transition-all duration-300">
                        <PlayIcon  className="w-6 h-6 text-white translate-x-0.5" />
                    </div>
                </div>

                {/* Verified Badge Overlay */}
                <div className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur-md border border-slate-700 px-3 py-1.5 flex items-center gap-2 rounded-sm">
                    <CheckBadgeIcon className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-[10px] text-white uppercase tracking-widest">Verified Placement</span>
                </div>
            </div>

            {/* Candidate Data Matrix */}
            <div className="pt-6 pb-2 px-2 flex-1 flex flex-col">
                <div className="mb-4">
                    <h4 className="font-serif text-2xl text-slate-900">{name}</h4>
                    <p className="font-mono text-xs uppercase tracking-widest text-amber-800 mt-1">{role}</p>
                </div>

                { type === "talent" && (
                    <div className="mt-auto pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center gap-1.5 text-slate-400">
                                <MapPinIcon className="w-4 h-4" />
                                <span className="text-[11px] uppercase tracking-wider">Location</span>
                            </div>
                            <span className="text-sm font-medium text-slate-700">{country}</span>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center gap-1.5 text-slate-400">
                                <BanknotesIcon className="w-4 h-4" />
                                <span className="text-[11px] uppercase tracking-wider">{bottomRightText ? bottomRightText : "Hired at"}</span>
                            </div>
                            <span className="text-sm font-medium text-slate-900">{salary}</span>
                        </div>
                    </div>
                )}




            </div>



        </div>
    );
}