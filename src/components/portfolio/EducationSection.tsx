import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";

const education = [
  {
    degree: "B.Tech Information Technology",
    institution: "VIT University",
    location: "Vellore, India",
    period: "2020 – 2024",
    highlights: [
      "Specialization in AI/ML and Data Science",
      "Published IEEE research on Deep Learning for Robotics",
      "Led multiple academic projects in ML and automation",
    ],
  },
];

const certifications = [
  {
    name: "IBM AI Analyst Professional Certificate",
    issuer: "IBM",
  },
  {
    name: "Microsoft Technology Associate - Python",
    issuer: "Microsoft",
  },
];

export const EducationSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-secondary/30 border-b border-border" id="education">
      <div className="container max-w-4xl">
        {/* Education */}
        <div className="mb-8 sm:mb-12">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
              <h2 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                Education
              </h2>
            </div>
            <p className="text-muted-foreground text-sm ml-8 sm:ml-9">
              Academic background and qualifications
            </p>
          </AnimatedSection>

          <div className="space-y-4 sm:space-y-6 ml-0 sm:ml-9 mt-4 sm:mt-6">
            {education.map((edu, index) => (
              <AnimatedSection key={edu.degree} animation="slide-right" delay={index * 150}>
                <Card className="border border-border bg-card hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-medium text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium text-sm sm:text-base">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground text-left sm:text-right">
                        <p className="font-medium">{edu.period}</p>
                        <p>{edu.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0" />
              <h2 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                Certifications
              </h2>
            </div>
            <p className="text-muted-foreground text-sm ml-8 sm:ml-9">
              Professional certifications and credentials
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 ml-0 sm:ml-9 mt-4 sm:mt-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} animation="scale" delay={index * 100}>
                <Badge
                  variant="secondary"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-normal justify-start"
                >
                  <span className="font-medium">{cert.name}</span>
                  <span className="text-muted-foreground ml-2">• {cert.issuer}</span>
                </Badge>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
