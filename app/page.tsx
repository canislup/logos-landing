import Hero from '@/components/landing/hero'
import Hero2 from '@/components/landing/hero2'
import FounderTrap2 from "@/components/landing/founderTrap2";
import GrowthTeamSection from "@/components/landing/growthTeamSection";

export default function Home() {
  return (
      <div>
        <Hero2/>
        <FounderTrap2 />
        <GrowthTeamSection/>
      </div>
  );
}
