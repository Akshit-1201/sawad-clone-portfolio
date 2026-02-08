import { Github, Linkedin, Mail, Briefcase, FolderGit2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";
import avatar3d from "@/assets/avatar-3d.png";

const stats = [
  { label: "Years Experience", value: "1+", icon: Briefcase },
  { label: "Projects Completed", value: "4+", icon: FolderGit2 },
  { label: "Certifications", value: "2", icon: Award },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/akshit-negi", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/akshit-negi", label: "GitHub" },
  { icon: Mail, href: "mailto:akshitnegi.office@gmail.com", label: "Email" },
];

export const HeroSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 border-b border-border">
      <div className="container max-w-6xl">
        {/* Header - Google Docs Style */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6 sm:mb-8 pb-6 border-b border-border">
            <img 
              src={avatar3d} 
              alt="Akshit Negi" 
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain shrink-0 drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                Akshit Negi
              </h1>
              <p className="text-primary font-medium text-sm sm:text-base">
                Software Developer • AI/ML Engineer
              </p>
            </div>
            <div className="flex gap-2 sm:ml-auto">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left - Description */}
          <AnimatedSection className="lg:col-span-2" animation="fade-up" delay={100}>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Building intelligent software solutions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Software Developer specializing in AI and Machine Learning. I bring ideas 
              to life through data—from building ML models from scratch to scaling them 
              into real-time production systems that make a measurable difference.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Currently working as an Associate Analyst at Highspring India LLP, 
              developing evaluation frameworks for Google's LLM outputs.
            </p>
          </AnimatedSection>

          {/* Right - Stats */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-4">
              <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Quick Stats
              </h3>
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
                {stats.map(({ label, value, icon: Icon }, index) => (
                  <AnimatedSection key={label} animation="scale" delay={300 + index * 100}>
                    <Card className="border border-border bg-card hover:shadow-sm transition-shadow duration-200">
                      <CardContent className="p-3 sm:p-4 flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-4 text-center lg:text-left">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-medium text-foreground">{value}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
