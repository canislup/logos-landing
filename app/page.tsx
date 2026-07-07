import Hero from '@/components/landing/hero'
import HeroSection from '@/components/landing/heroSection'
import FounderTrap2 from "@/components/landing/founderTrapSection";
import GrowthTeamSection from "@/components/landing/growthTeamSection";
import ProcessSection from "@/components/landing/processSection";
import VideoReviewsSection from "@/components/landing/videoReviewSection";
import ContactFormSection from "@/components/landing/contactFormSection";
import Footer from "@/components/landing/footerSection";
import BeliefShiftSection from "@/components/landing/beliefShiftSection";
import BeliefShiftSection2 from "@/components/landing/beliefSection2";
import BeliefShiftSection3 from "@/components/landing/beliefSection3";
import FounderTrapSection from "@/components/landing/founderTrapSection";
import  FounderTrap  from '@/components/landing/founderTrapSection'

export default function Home() {
  return (
      <div>
        <HeroSection/>
        <FounderTrap />
        {/*<FounderTrap2 />*/}
        {/*<BeliefShiftSection />*/}
        {/*  <BeliefShiftSection2 />*/}
        <BeliefShiftSection3 />
        <GrowthTeamSection/>
        {/*<ProcessSection />*/}
        <VideoReviewsSection/>
        <ContactFormSection />
        <Footer />
      </div>
  );
}
