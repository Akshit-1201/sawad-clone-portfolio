import { Building2, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    type: "work",
    title: "Associate Analyst",
    company: "Highspring India LLP",
    client: "Client: Google",
    location: "Gurugram, India",
    period: "Jan 2025 – Present",
    achievements: [
      "Automated LLM evaluation pipelines, reducing manual review time by 10+ hours/week",
      "Developed AutoRater tool achieving 85% F1 score for GenAI quality assessment",
      "Designed evaluation frameworks for Google's LLM outputs using Python & SQL",
    ],
  },
  {
    type: "education",
    title: "B.Tech Information Technology",
    company: "VIT University",
    location: "Vellore, India",
    period: "2020 – 2024",
    achievements: [
      "Specialization in AI/ML and Data Science",
      "Published IEEE research on Deep Learning for Robotics",
      "Led multiple academic projects in ML and automation",
    ],
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20" id="experience">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span> & Education
          </h2>
          <p className="text-muted-foreground">
            My professional journey in AI and technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300 ml-0 md:ml-16 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[3.5rem] top-6 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center hidden md:flex">
                    {exp.type === "work" ? (
                      <Building2 className="w-5 h-5 text-primary" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-primary" />
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        {exp.client && (
                          <p className="text-sm text-muted-foreground">{exp.client}</p>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground text-left md:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
