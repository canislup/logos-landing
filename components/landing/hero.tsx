import TitleTag from "@/components/landing/title-tag";
import Image from "next/image";
import { CheckCircleIcon, GlobeAmericasIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline"

const benefits = [
    "Pay Only When You Hire",
    "Replacement Guarantees",
    "Pre-Vetted Professionals",
    "Results In One Week"
]

const Hero = () => {

    return (
        <div className={"min-h-[90dvh] flex flex-col justify-center items-center bg-background-gold p-5 sm:px-10 py-12"}>
            <TitleTag
                text={"Global Talent. Smarter Hiring."}
                textColor={"text-salmon-pink"}
                icon={<GlobeAmericasIcon className={"text-red-600"} width={24} height={24} />}
                iconColor={"outline-red-500"}
                bgColor={'bg-red-500/10'}
                animation={true} borderColor={"border-red-400/30"}/>

            <h1 className="hero-title">
                Stop Doing Everything.<br className="hidden sm:inline" /> Start Being The CEO Again.
            </h1>
            <p className="supporting-text max-w-3xl mx-auto">
                Build a high-performing team without enterprise-level salaries so you can stop wearing every hat in your business and finally focus on growth.
            </p>


            <div className={"flex flex-wrap gap-2 sm:gap-4 w-full max-w-4xl justify-center mt-7"}>
                {benefits.map(benefit => {
                    return (
                        <TitleTag
                            text={benefit}
                            textColor={"text-blue-950"}
                            animation={false}
                            key={benefit}
                            icon={<CheckCircleIcon className={"text-green-600"} width={24} height={24}/>}
                            bgColor={"bg-light-green"} />
                    )
                })}
            </div>

            <div className={"flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto"}>
                <div className="w-full sm:w-auto">
                    <a href="#" className={"flex items-center justify-center bg-blue-700 text-white gap-2 btn-primary px-6 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-2xl shadow-blue-500/30 pulse-glow text-center"}>
                        Get My Free Growth Blueprint
                        <span>
                            <ArrowRightCircleIcon width={24} height={24} />
                        </span>
                    </a>
                </div>
                <div className="text-center">
                    <a href="#" className="text-slate-700 hover:text-blue-700 font-semibold transition-colors py-2 block">
                        See How It Works
                    </a>
                </div>
            </div>

            <p className={"mt-4 text-sm sm:text-base text-center text-gray-500"}>Free 20-min call. Zero Obligation. Walk away with a custom hiring plan.</p>
        </div>
    )
}

export default Hero;