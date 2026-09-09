import Hero from "@/components/home/Hero";
import StoresMarquee from "@/components/home/StoresMarquee";
import PartnerCTA from "@/components/home/PartnerCTA";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="bg-easy-cream">
      <Hero />
      <StoresMarquee />
      <Location />
      <PartnerCTA />
    </main>
  );
}
