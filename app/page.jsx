import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import FeaturedWork from "@/components/FeaturedWork";
import BentoSkills from "@/components/BentoSkills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Certifications from "@/components/Certifications";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <FeaturedWork />
        <BentoSkills />
        <ExperienceTimeline />
        <Certifications />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
