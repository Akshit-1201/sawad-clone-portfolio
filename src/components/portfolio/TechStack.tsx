import { 
  Code2, 
  Database, 
  Cloud, 
  Container, 
  GitBranch, 
  Cpu, 
  Server, 
  Sparkles,
  Brain,
  Layers,
  Wrench
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tools = [
  { name: "Python", category: "Programming", icon: Code2 },
  { name: "TensorFlow", category: "ML Framework", icon: Brain },
  { name: "Flask", category: "Backend", icon: Server },
  { name: "Docker", category: "DevOps", icon: Container },
  { name: "AWS / Azure", category: "Cloud", icon: Cloud },
  { name: "Gemini / GPT", category: "AI Tools", icon: Sparkles },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "Git / GitHub", category: "Version Control", icon: GitBranch },
  { name: "LangChain", category: "LLM Framework", icon: Layers },
  { name: "REST APIs", category: "Integration", icon: Cpu },
];

export const TechStack = () => {
  return (
    <section className="py-16 px-4 border-b border-border" id="tech-stack">
      <div className="container max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-medium text-foreground">
              Tools & Technologies
            </h2>
          </div>
          <p className="text-muted-foreground text-sm ml-9">
            Technologies and frameworks I use to build scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ml-9">
          {tools.map((tool) => (
            <Card
              key={tool.name}
              className="border border-border bg-card hover:shadow-sm hover:border-primary/30 transition-all duration-200 group"
            >
              <CardContent className="p-4 text-center">
                <tool.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <h3 className="font-medium text-sm text-foreground mb-0.5">
                  {tool.name}
                </h3>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
