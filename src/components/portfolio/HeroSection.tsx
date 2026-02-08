import { Github, Linkedin, Mail, Briefcase, FolderGit2, Award } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-16 px-4 border-b border-border">
      <div className="container max-w-6xl">
        {/* Header - Google Docs Style */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
          <Avatar className="w-16 h-16 border-2 border-primary">
            <AvatarImage src="/placeholder.svg" alt="Akshit Negi" />
            <AvatarFallback className="bg-primary/10 text-primary text-xl font-medium">
              AN
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-medium text-foreground">Akshit Negi</h1>
            <p className="text-primary font-medium">
              Software Developer • AI/ML Engineer
            </p>
          </div>
          <div className="flex gap-2 ml-auto">
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Description */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-medium text-foreground mb-4">
              Building intelligent software solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Software Developer specializing in AI and Machine Learning. I bring ideas 
              to life through data—from building ML models from scratch to scaling them 
              into real-time production systems that make a measurable difference.
            </p>
            <p className="text-muted-foreground">
              Currently working as an Associate Analyst at Highspring India LLP, 
              developing evaluation frameworks for Google's LLM outputs.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Quick Stats
            </h3>
            <div className="space-y-3">
              {stats.map(({ label, value, icon: Icon }) => (
                <Card 
                  key={label} 
                  className="border border-border bg-card hover:shadow-sm transition-shadow duration-200"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-medium text-foreground">{value}</div>
                      <div className="text-sm text-muted-foreground">{label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
