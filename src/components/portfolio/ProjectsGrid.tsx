import { ExternalLink, Github, Code2 } from "lucide-react";
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
    <section className="py-16 px-4 border-b border-border" id="projects">
      <div className="container max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-medium text-foreground">
              Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-sm ml-9">
            From AI security research to industrial automation — building solutions that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-9">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="border border-border bg-card hover:shadow-md transition-shadow duration-200 group"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal"
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
