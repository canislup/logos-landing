
import TitleTag from "@/components/landing/title-tag";
import PointCard from "@/components/pointCard";
import MainBtn from "@/components/main-btn";
import { ArrowRightIcon} from "@heroicons/react/24/outline";
import {
    BanknotesIcon,
    BriefcaseIcon,
    ScaleIcon,
    ReceiptPercentIcon,
    UserGroupIcon,
    GlobeAmericasIcon,
    ShieldCheckIcon,
    ChatBubbleBottomCenterTextIcon,
    UserPlusIcon,
} from '@heroicons/react/24/outline';

export default function BeliefShiftSection3() {
    return (
        <section className="relative w-full bg-[#FCFAF7] text-slate-900 overflow-hidden">
            {/* Subtle Geometric Mesh Background Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#1E293B08_1px,transparent_1px),linear-gradient(to_bottom,#1E293B08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* ==========================================
          SECTION 1: LARGE HERO STATEMENT
          ========================================== */}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-25 flex flex-col items-center text-center">
                <TitleTag
                    text="The Hidden Architecture"
                    textColor="text-amber-900"
                    bgColor="bg-amber-900/5"
                    border={true}
                    borderColor="border-amber-900/20"
                />

                <h2 className="hero-title">
                    The Secret the Fastest-Growing Founders Figured Out Years Ago
                </h2>

                <div className="mt-12 text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed space-y-6">
                    <p>Most business owners believe they&apos;re stuck because they need more leads. Or better marketing. Or another software tool.</p>
                    <p className="font-medium text-slate-800">The truth is much simpler. They&apos;re stuck because they&apos;re trying to run an entire company by themselves.</p>
                </div>

                {/* Animated Responsibilities Waterfall */}
                <div className="mt-16 flex flex-col items-center space-y-4 text-slate-400 font-mono text-sm tracking-widest uppercase">
                    <span className="animate-pulse duration-500 delay-100">While they&apos;re answering emails...</span>
                    <span className="animate-pulse duration-500 delay-200">Scheduling meetings...</span>
                    <span className="animate-pulse duration-500 delay-300">Following up with leads...</span>
                    <span className="animate-pulse duration-500 delay-400">Managing customer support...</span>
                    <span className="animate-pulse duration-500 delay-500">Posting on social media...</span>
                </div>

                <p className="mt-12 text-xl text-slate-800 max-w-2xl">
                    Their competitors are spending that same time building partnerships, closing deals, improving products, and growing their business.
                </p>

                <div className="mt-10 border-t border-slate-200 pt-16">
                    <h3 className="font-serif text-4xl md:text-5xl text-amber-950 italic">
                        &ldquo;The real difference isn&apos;t intelligence. It&apos;s time.&rdquo;
                    </h3>
                </div>
            </div>

            <hr className="border-slate-200/60 w-full max-w-7xl mx-auto" />

            {/* ==========================================
          SECTION 2: THE GROWTH GAP
          ========================================== */}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-25">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-stretch">

                    {/* Left Side: Overwhelmed Founder */}
                    <div className="group relative bg-white border border-slate-200 p-12 lg:p-16 flex flex-col rounded-sm transition-all duration-500 hover:border-slate-300 shadow-sm">
                        <div className="mb-10">
                            <h3 className="font-serif text-3xl text-slate-900">Most Founders</h3>
                            <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-mono">The Centralized Bottleneck</p>
                        </div>

                        {/* Chaotic Task Cloud */}
                        <div className="relative flex-1 flex items-center justify-center min-h-[300px]">
                            <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-3 opacity-60">
                                {['Customer Support', 'Scheduling', 'CRM Updates', 'Lead Follow-Up', 'Emails', 'Marketing', 'Admin', 'Operations', 'Sales'].map((task) => (
                                    <span key={task} className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-2 text-xs uppercase tracking-wider rounded-sm">
                    {task}
                  </span>
                                ))}
                            </div>
                            <div className="relative z-10 bg-slate-900 text-white font-serif italic px-8 py-4 rounded-sm shadow-xl">
                                The Founder
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Calm CEO */}
                    <div className="group relative bg-slate-900 border border-slate-800 p-12 lg:p-16 flex flex-col rounded-sm transition-all duration-500 hover:border-amber-900/30 shadow-xl">
                        <div className="mb-10">
                            <h3 className="font-serif text-3xl text-white">Founders Who Scale</h3>
                            <p className="text-amber-700 mt-2 text-sm uppercase tracking-widest font-mono">Distributed Execution</p>
                        </div>

                        {/* Structured Execution Layout */}
                        <div className="flex-1 flex flex-col justify-between space-y-6">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <span className="text-white font-serif text-xl">The Founder</span>
                                <span className="text-slate-400 text-sm">Strategy, Growth & Leadership</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {['Sales', 'Marketing', 'Operations', 'Executive Assistant', 'Customer Support'].map((role) => (
                                    <div key={role} className="border border-slate-800 bg-slate-800/50 text-slate-300 px-4 py-3 text-xs uppercase tracking-wider rounded-sm">
                                        {role}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-800">
                            <p className="text-amber-400 text-lg font-medium">
                                Growth begins when the founder stops being the entire company.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ==========================================
          SECTION 3: THE SECRET ISN'T WORKING HARDER
          ========================================== */}
            <div className="bg-slate-900 text-white py-32 md:py-44">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                    <h2 className="font-serif text-4xl md:text-6xl text-white">
                        The Secret Isn&apos;t Working Harder.<br/>
                        <span className="text-amber-700 italic">It&apos;s Buying Back Your Time.</span>
                    </h2>

                    <div className="mt-12 text-lg text-slate-400 max-w-3xl mx-auto space-y-6">
                        <p>Every successful founder eventually realizes something.</p>
                        <p className="text-2xl text-white font-serif">The most valuable asset in their business isn&apos;t money. It&apos;s attention.</p>
                        <p>Every hour spent on repetitive work is an hour that can&apos;t be invested into growth. The companies pulling ahead aren&apos;t run by superhuman founders. They&apos;re run by founders who stopped doing everyone else&apos;s job.</p>
                    </div>

                    {/* Minimalist Attention Shift Infographic */}
                    <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="w-full md:w-1/3 flex flex-col space-y-4">
                            <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">Repetitive Work</span>
                            <div className="h-1 w-full bg-slate-800 rounded-none relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-amber-900 w-1/4"></div>
                            </div>
                        </div>
                        <div className="hidden md:block text-slate-600 font-mono">→</div>
                        <div className="w-full md:w-1/3 flex flex-col space-y-4">
                            <span className="text-xs uppercase tracking-widest text-amber-500 font-mono">Revenue Growth</span>
                            <div className="h-1 w-full bg-slate-800 rounded-none relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-amber-500 w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==========================================
          SECTION 4: SO HOW DO THEY DO IT?
          ========================================== */}
            {/*<div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 md:py-44 text-center">*/}
            {/*    <TitleTag text="The Misconception" textColor="text-slate-600" bgColor="bg-white" border={true} borderColor="border-slate-200" />*/}

            {/*    <h2 className="mt-8 font-serif text-4xl md:text-5xl text-slate-900">Here&apos;s Where Most Small Business Owners Get It Wrong</h2>*/}
            {/*    <p className="mt-6 text-slate-600">Most founders assume building a team means:</p>*/}

            {/*    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">*/}
            {/*        /!* Polymorphic Implementation: variant="painpoint" with HeroIcons *!/*/}
            {/*        <PointCard*/}
            {/*            variant="painpoint"*/}
            {/*            text="Expensive local salaries"*/}
            {/*            icon={<BanknotesIcon className="w-6 h-6 text-amber-700 shrink-0" />}*/}
            {/*        />*/}
            {/*        <PointCard*/}
            {/*            variant="painpoint"*/}
            {/*            text="Complicated HR and compliance"*/}
            {/*            icon={<BriefcaseIcon className="w-6 h-6 text-amber-700 shrink-0" />}*/}
            {/*        />*/}
            {/*        <PointCard*/}
            {/*            variant="painpoint"*/}
            {/*            text="International legal paperwork"*/}
            {/*            icon={<ScaleIcon className="w-6 h-6 text-amber-700 shrink-0" />}*/}
            {/*        />*/}
            {/*        <PointCard*/}
            {/*            variant="painpoint"*/}
            {/*            text="Payroll headaches and taxes"*/}
            {/*            icon={<ReceiptPercentIcon className="w-6 h-6 text-amber-700 shrink-0" />}*/}
            {/*        />*/}
            {/*        <PointCard*/}
            {/*            variant="painpoint"*/}
            {/*            text="Endless interviews and vetting"*/}
            {/*            icon={<UserGroupIcon className="w-6 h-6 text-amber-700 shrink-0" />}*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    <h3 className="mt-24 font-serif text-4xl text-amber-900 italic">None of that has to be true.</h3>*/}
            {/*</div>*/}

            {/*<hr className="border-slate-200/60 w-full max-w-7xl mx-auto" />*/}

            {/* ==========================================
          SECTION 5: THE MODERN WAY TO SCALE
          ========================================== */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 md:py-44">
                <h2 className="font-serif text-4xl md:text-6xl text-slate-900 max-w-4xl leading-tight">
                    The Fastest-Growing Companies Stopped Limiting Themselves to Local Hiring Years Ago
                </h2>

                <div className="mt-8 text-lg text-slate-600 max-w-3xl space-y-6">
                    <p>The world&apos;s most successful companies don&apos;t build every part of their business in one office. They manufacture globally. They build technology globally. They operate customer support globally.</p>
                    <p className="font-medium text-slate-900">They recruit talent wherever exceptional people can be found. Not because they&apos;re looking for cheaper labor. Because they&apos;re building smarter businesses.</p>
                </div>

                {/* Global Infrastructure Row */}
                <div className="mt-20 flex flex-wrap items-center justify-between gap-12 opacity-60 grayscale">
                    <span className="text-2xl font-serif font-bold text-slate-900 tracking-tighter">Apple</span>
                    <span className="text-2xl font-sans font-bold text-slate-900">Microsoft</span>
                    <span className="text-2xl font-sans font-bold text-slate-900">Google</span>
                    <span className="text-2xl font-sans font-bold text-slate-900 tracking-tighter">amazon</span>
                </div>

                <div className="mt-24 border-l-2 border-amber-800 pl-8">
                    <h3 className="font-serif text-3xl md:text-4xl text-slate-900">
                        &ldquo;Global hiring isn&apos;t a shortcut. <br/>
                        <span className="text-slate-500 italic">It&apos;s modern business infrastructure.</span>&rdquo;
                    </h3>
                </div>
            </div>

            {/* ==========================================
          SECTION 6: WHY DOESN'T EVERY FOUNDER DO THIS?
          ========================================== */}
            <div className="bg-slate-50 border-y border-slate-200 py-32 md:py-44">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-900 max-w-3xl">
                        Because Most People Think It&apos;s Too Expensive. Or Too Complicated.
                    </h2>

                    <div className="mt-8 text-lg text-slate-600 max-w-3xl space-y-6">
                        <p>Most business owners assume hiring internationally means legal complexity, difficult payroll, language barriers, and endless administration. The reality is very different.</p>
                        <p>You can hire highly educated, experienced professionals from countries like Brazil, Colombia, and the Philippines for a fraction of traditional U.S. hiring costs.</p>
                        <p className="text-amber-900 font-medium">Even better... You don&apos;t have to manage the process yourself.</p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Polymorphic Implementation: variant="timeline" with HeroIcons */}
                        <PointCard
                            variant="timeline"
                            phase="Step 01"
                            day="Sourcing"
                            title="We Source"
                            desc="Identifying top-tier global talent."
                            icon={<GlobeAmericasIcon className="w-6 h-6 text-amber-700 shrink-0" />}
                        />
                        <PointCard
                            variant="timeline"
                            phase="Step 02"
                            day="Vetting"
                            title="We Vet"
                            desc="Rigorous skills and language checks."
                            icon={<ShieldCheckIcon className="w-6 h-6 text-amber-700 shrink-0" />}
                        />
                        <PointCard
                            variant="timeline"
                            phase="Step 03"
                            day="Interviewing"
                            title="We Interview"
                            desc="Filtering down to the absolute best."
                            icon={<ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-amber-700 shrink-0" />}
                        />
                        <PointCard
                            variant="timeline"
                            phase="Step 04"
                            day="Placement"
                            title="You Decide"
                            desc="Meet exceptional candidates and hire."
                            icon={<UserPlusIcon className="w-6 h-6 text-amber-700 shrink-0" />}
                        />
                    </div>
                </div>
            </div>

            {/* ==========================================
          SECTION 7: IMAGINE GETTING YOUR WEEK BACK
          ========================================== */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 md:py-44">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-5xl md:text-6xl text-slate-900">Imagine Starting Monday Like This</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Today */}
                    <div className="bg-white border border-slate-200 p-10 md:p-14 rounded-sm shadow-sm group hover:border-slate-300 transition-all duration-500">
                        <h4 className="font-mono text-sm tracking-widest text-slate-400 uppercase mb-8">Today</h4>
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex items-start gap-4"><span className="text-slate-300">✕</span> Founder answers emails.</li>
                            <li className="flex items-start gap-4"><span className="text-slate-300">✕</span> Schedules meetings.</li>
                            <li className="flex items-start gap-4"><span className="text-slate-300">✕</span> Follows up with leads.</li>
                            <li className="flex items-start gap-4"><span className="text-slate-300">✕</span> Handles support.</li>
                            <li className="flex items-start gap-4"><span className="text-slate-300">✕</span> Posts on social media.</li>
                            <li className="flex items-start gap-4"><span className="text-slate-300">✕</span> Puts out fires.</li>
                            <li className="flex items-start gap-4"><span className="text-slate-300">✕</span> Works until late.</li>
                            <li className="flex items-start gap-4 pt-4 border-t border-slate-100 font-medium text-slate-900 mt-4">Repeat tomorrow.</li>
                        </ul>
                    </div>

                    {/* Six Months From Now */}
                    <div className="bg-slate-900 border border-slate-800 p-10 md:p-14 rounded-sm shadow-xl group hover:border-amber-900 transition-all duration-500 relative overflow-hidden">
                        {/* Decorative Background Mesh for Premium Card */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none"></div>

                        <h4 className="font-mono text-sm tracking-widest text-amber-600 uppercase mb-8 relative z-10">Six Months From Now</h4>
                        <ul className="space-y-4 text-slate-300 relative z-10">
                            <li className="flex items-start gap-4"><span className="text-amber-600">✓</span> Your inbox is organized.</li>
                            <li className="flex items-start gap-4"><span className="text-amber-600">✓</span> Your calendar runs smoothly.</li>
                            <li className="flex items-start gap-4"><span className="text-amber-600">✓</span> Your sales pipeline is growing.</li>
                            <li className="flex items-start gap-4"><span className="text-amber-600">✓</span> Marketing is consistently executed.</li>
                            <li className="flex items-start gap-4"><span className="text-amber-600">✓</span> Customers are supported.</li>
                            <li className="flex items-start gap-4"><span className="text-amber-600">✓</span> Operations keep moving.</li>
                            <li className="flex items-start gap-4 pt-4 border-t border-slate-800 font-serif text-xl text-white mt-4">You spend your day leading the company instead of running every department.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <p className="font-serif text-3xl md:text-4xl text-slate-900 max-w-4xl mx-auto">
                        Businesses don&apos;t scale because founders work harder.<br/>
                        <span className="italic text-amber-900">They scale because founders finally have time to lead.</span>
                    </p>
                </div>
            </div>

            {/* ==========================================
          TRANSITION CTA PANEL
          ========================================== */}
            <div className="flex-col justify-items-center bg-white border-t border-slate-200 py-24 px-6 text-center">
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
                    Ready to Build the Team That Gives You Your Time Back?
                </h2>
                <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
                    The right people don&apos;t just reduce your workload. They multiply your ability to grow.
                </p>

                {/* MainBtn Implementation matching your Global Signatures */}
                <MainBtn
                    href="#contact"
                    text="Build My Team"
                    textColor="text-white"
                    margin="mx-auto"
                    icon={<ArrowRightIcon width={24} height={24}/>}
                />
            </div>

        </section>
    );
}