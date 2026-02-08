import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Vulnerable-Bookshelf-AI",
    description: "LLM Security Research Tool — Interactive platform to study and demonstrate GenAI vulnerabilities with real-time prompt injection testing.",
    tags: ["Python", "React", "GenAI", "Docker"],
    github: "https://github.com/akshit-negi/vulnerable-bookshelf-ai",
  },
  {
    title: "Email Phishing Simulation",
    description: "AI-Driven Security Automation — Realistic phishing campaigns with LLM-generated emails and interactive dashboards for awareness training.",
    tags: ["Python", "ZOHO API", "LLMs", "Streamlit"],
    github: "https://github.com/akshit-negi/phishing-simulation",
  },
  {
    title: "BESS Gateway Simulator",
    description: "SCADA & Energy Systems Integration — Real-time battery energy storage simulator with OPC-UA and IEC-104 protocol support.",
    tags: ["Python", "OPC UA", "IEC-104"],
    github: "https://github.com/akshit-negi/bess-gateway",
  },
];

export const ProjectsGrid = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From AI security research to industrial automation — building solutions that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
