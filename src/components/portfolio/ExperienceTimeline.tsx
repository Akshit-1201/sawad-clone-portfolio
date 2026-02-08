import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

const experiences = [
  {
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
];

export const ExperienceTimeline = () => {
  return (
    <section className="py-12 sm:py-16 px-4 border-b border-border" id="experience">
      <div className="container max-w-4xl">
        <AnimatedSection animation="fade-up">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
              <h2 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                Work Experience
              </h2>
            </div>
            <p className="text-muted-foreground text-sm ml-8 sm:ml-9">
              Professional journey in AI and software development
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4 sm:space-y-6 ml-0 sm:ml-9">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} animation="slide-right" delay={index * 150}>
              <Card className="border border-border bg-card hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium text-sm sm:text-base">
                        {exp.company}
                      </p>
                      {exp.client && (
                        <p className="text-sm text-muted-foreground">
                          {exp.client}
                        </p>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground text-left sm:text-right">
                      <p className="font-medium">{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
