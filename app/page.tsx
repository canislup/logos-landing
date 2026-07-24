import HeroSection from '@/components/landing/heroSection'
import GrowthTeamSection from "@/components/landing/growthTeamSection";
import ProcessSection from "@/components/landing/processSection";
import VideoReviewsSection from "@/components/landing/videoReviewSection";
import ContactFormSection from "@/components/landing/contactFormSection";
import Footer from "@/components/landing/footerSection";
import BeliefShiftSection3 from "@/components/landing/beliefSection3";
import  FounderTrap  from '@/components/landing/founderTrapSection'


export default function Home() {
  return (
      <div>
        <HeroSection/>
        <FounderTrap />
        <BeliefShiftSection3 />
        <GrowthTeamSection/>
        {/*<ProcessSection />*/}
        <VideoReviewsSection/>
        <ContactFormSection />
        <Footer />
      </div>
  );
}
