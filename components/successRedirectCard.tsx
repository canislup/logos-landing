'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface SuccessRedirectCardProps {
    destinationUrl: string;
    delayMs?: number;
}

export default function SuccessRedirectCard({
                                                destinationUrl,
                                                delayMs = 4500
                                            }: SuccessRedirectCardProps) {
    const router = useRouter();

    useEffect(() => {
        // Automatically route the user to the Calendly page after the delay
        const redirectTimer = setTimeout(() => {
            router.push(destinationUrl);
        }, delayMs);

        return () => clearTimeout(redirectTimer);
    }, [destinationUrl, delayMs, router]);

    return (
        <div className="relative w-full max-w-2xl mx-auto bg-white border border-slate-200 p-10 md:p-16 rounded-sm shadow-2xl text-center overflow-hidden animate-in fade-in zoom-in duration-500">

            {/* Subtle Background Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                <div className="h-full bg-amber-900 transition-all duration-[4500ms] ease-linear" style={{ width: '100%' }} />
            </div>

            <div className="flex justify-center mb-8">
                <CheckCircleIcon className="w-16 h-16 text-amber-900 stroke-[1.5]" />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-4 tracking-tight">
                Congratulations!
            </h2>

            <p className="text-lg md:text-xl text-amber-950 font-medium italic mb-8">
                You've just taken the first step toward becoming the CEO again.
            </p>

            <div className="space-y-6 text-slate-600 leading-relaxed text-left md:text-center">
                <p className="font-semibold text-slate-900">
                    Your request has been received successfully.
                </p>
                <p>
                    The next step is to book your free Growth Blueprint session.
                </p>
            </div>

            <hr className="border-slate-200 my-10" />

            {/* Redirect Status Indicator */}
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center space-x-3 text-slate-900 font-mono text-sm tracking-widest uppercase">
                    {/* Custom Elegant Spinner */}
                    <div className="w-4 h-4 border-2 border-slate-200 border-t-amber-900 rounded-full animate-spin" />
                    <span>Redirecting to our calendar...</span>
                </div>
                <p className="text-sm text-slate-400">
                    Please don't close this page. You'll be redirected automatically in just a few seconds.
                </p>
            </div>
        </div>
    );
}