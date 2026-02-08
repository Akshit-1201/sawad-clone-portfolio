import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { SkillsMarquee } from "@/components/portfolio/SkillsMarquee";
import { ProjectsGrid } from "@/components/portfolio/ProjectsGrid";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { TechStack } from "@/components/portfolio/TechStack";
import { PublicationHighlight } from "@/components/portfolio/PublicationHighlight";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingResumeButton } from "@/components/portfolio/FloatingResumeButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SkillsMarquee />
      <ProjectsGrid />
      <ExperienceTimeline />
      <EducationSection />
      <TechStack />
      <PublicationHighlight />
      <ContactSection />
      <Footer />
      <FloatingResumeButton />
    </main>
  );
};

export default Index;
