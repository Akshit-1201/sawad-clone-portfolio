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
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Profile Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Card className="glass border-border/50 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 mb-6 ring-4 ring-primary/20">
                    <AvatarImage src="/placeholder.svg" alt="Akshit Negi" />
                    <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">
                      AN
                    </AvatarFallback>
                  </Avatar>
                  
                  <h1 className="text-3xl font-bold mb-2">Akshit Negi</h1>
                  <p className="text-lg text-primary font-medium mb-4">
                    AI Engineer who builds ML solutions from 0→1→100
                  </p>
                  
                  <div className="flex gap-4 mt-4">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Title & Stats */}
          <div className="space-y-8">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">AI ENGINEER</span>
                <br />
                <span className="text-muted-foreground text-3xl lg:text-4xl font-normal">
                  & Data Analyst
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-lg">
                Bringing ideas to life through data—from building ML models from scratch 
                to scaling them into real-time solutions that make a difference.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {stats.map(({ label, value, icon: Icon }) => (
                <Card 
                  key={label} 
                  className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-4 text-center">
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-2xl lg:text-3xl font-bold gradient-text">{value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{label}</div>
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
