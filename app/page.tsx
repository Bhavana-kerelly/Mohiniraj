import HomepageHero from "@/components/hero/HomepageHero";
import WhatAreYouCarrying from "@/components/sections/WhatAreYouCarrying";
import FourWords from "@/components/sections/FourWords";
import MohinirajBio from "@/components/sections/MohinirajBio";
import ExperiencesOverview from "@/components/sections/ExperiencesOverview";
import TransformationsSection from "@/components/sections/TransformationsSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main className="relative w-full bg-brand-bg min-h-screen">
      <HomepageHero />
      <WhatAreYouCarrying />
      <FourWords />
      <MohinirajBio />
      <ExperiencesOverview />
      <TransformationsSection />
      <FinalCTA />
    </main>
  );
}
