import { Agenda } from "@/components/Agenda";
import { Brands } from "@/components/Brands";
import { Faq } from "@/components/Faq";
import { FeaturedOn } from "@/components/FeaturedOn";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Guarantee } from "@/components/Guarantee";
import { Hero } from "@/components/Hero";
import { Instructor } from "@/components/Instructor";
import { SilentKillers } from "@/components/SilentKillers";
import { SocialProof } from "@/components/SocialProof";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedOn />
      <WhoIsThisFor />
      <Brands />
      <SilentKillers />
      <Agenda />
      <SocialProof />
      <Instructor />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
