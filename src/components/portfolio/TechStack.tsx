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
  Layers
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
    <section className="py-20 px-4" id="tech-stack">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Premium <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and frameworks I use to build scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((tool, index) => (
            <Card
              key={tool.name}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >
              <CardContent className="p-4 text-center">
                <tool.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
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
