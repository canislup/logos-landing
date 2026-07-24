import React from 'react';
import Head from 'next/head';

export default function SMSTermsPrivacy() {
    return (
        <>
            <Head>
                <title>SMS Terms & Privacy - Logos Recruiting</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="min-h-screen bg-slate-50 text-slate-700 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
                {/* Header / Navigation Archetype */}
                <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                    <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-2 font-bold text-xl text-slate-900 tracking-tight">
                            {/* Abstract Brand Icon */}
                            <span className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-serif">L</span>
                            <span>Logos <span className="text-blue-600 font-medium text-base">Recruiting</span></span>
                        </div>
                        <a
                            href="/#contact"
                            className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors duration-200 underline underline-offset-4 decoration-transparent hover:decoration-blue-600"
                        >
                            Back to main page
                        </a>
                    </div>
                </header>

                {/* Main Content Container */}
                <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">

                    {/* Document Title Section */}
                    <header className="mb-12 border-b border-slate-200 pb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
                            Legal Information
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                            SMS Terms & Privacy
                        </h1>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            Terms of service and privacy policy for SMS communications
                        </p>
                    </header>

                    {/* Terms of Service Section */}
                    <section className="mb-16 scroll-mt-24" id="terms-of-service">
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                            <span className="text-blue-600">01.</span> Terms of Service
                        </h2>
                        <div className="max-w-none space-y-6 text-slate-600 leading-relaxed">
                            <p>
                                By opting in to SMS messages from Logos Recruiting, you agree to receive text messages for customer support, service updates, and other communications related to your account.
                            </p>

                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
                                <h3 className="font-bold text-slate-900 text-lg">How to Unsubscribe</h3>
                                <p>
                                    You can cancel the SMS service at any time. Just text <span className="inline-block bg-slate-100 text-slate-800 font-mono text-sm px-2 py-0.5 rounded font-bold border border-slate-200">STOP</span>. After you send the SMS message &quot;STOP&quot; to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
                                <h3 className="font-bold text-slate-900 text-lg">Need Help?</h3>
                                <p>
                                    If you are experiencing issues with the messaging program, you can reply with the keyword <span className="inline-block bg-slate-100 text-slate-800 font-mono text-sm px-2 py-0.5 rounded font-bold border border-slate-200">HELP</span> for more assistance.
                                </p>
                            </div>

                            <p className="italic text-slate-500 text-sm">
                                Carriers are not liable for delayed or undelivered messages.
                            </p>

                            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-200/70 text-amber-900 text-sm flex gap-3">
                                <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <div>
                                    <strong className="font-semibold block mb-0.5">Important Notice:</strong>
                                    As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Privacy Policy Section */}
                    <section className="scroll-mt-24" id="privacy-policy">
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                            <span className="text-blue-600">02.</span> Privacy Policy
                        </h2>
                        <div className="max-w-none space-y-6 text-slate-600 leading-relaxed">
                            <p className="text-md font-medium text-slate-900 bg-emerald-50/50 border border-emerald-200 p-5 rounded-xl">
                                Logos Recruiting does not share mobile numbers, text messaging originator opt-in data, or consent with any third parties or affiliates for marketing or promotional purposes.
                            </p>

                            <h3 className="font-bold text-slate-900 text-lg mt-8 mb-2">Limited Information Sharing</h3>
                            <p>
                                Mobile information may be shared only with subcontractors and service providers that support the delivery of SMS services, such as messaging platforms, telecommunications providers, or customer support vendors. This information is used solely to provide and operate the messaging service.
                            </p>
                            <p>
                                All other use case categories exclude text messaging originator opt-in data and consent. This information will not be shared with any third parties.
                            </p>
                        </div>
                    </section>

                </main>

                {/* Footer Area */}
                <footer className="bg-white border-t border-slate-200 mt-24 py-8">
                    <div className="max-w-4xl mx-auto px-6 text-center text-xs text-slate-400">
                        <p>&copy; {new Date().getFullYear()} Logos Recruiting. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
