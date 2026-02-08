import { HeroSection } from "@/components/portfolio/HeroSection";
import { SkillsMarquee } from "@/components/portfolio/SkillsMarquee";
import { ProjectsGrid } from "@/components/portfolio/ProjectsGrid";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { TechStack } from "@/components/portfolio/TechStack";
import { PublicationHighlight } from "@/components/portfolio/PublicationHighlight";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <HeroSection />
      <SkillsMarquee />
      <ProjectsGrid />
      <ExperienceTimeline />
      <TechStack />
      <PublicationHighlight />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
