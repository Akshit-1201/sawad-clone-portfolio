import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section className="py-16 px-4 bg-secondary/30 border-b border-border" id="education">
      <div className="container max-w-4xl">
        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-medium text-foreground">Education</h2>
          </div>
          <p className="text-muted-foreground text-sm ml-9">
            Academic background and qualifications
          </p>

          <div className="space-y-6 ml-9 mt-6">
            {education.map((edu) => (
              <Card
                key={edu.degree}
                className="border border-border bg-card hover:shadow-md transition-shadow duration-200"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground text-left md:text-right">
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
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-medium text-foreground">
              Certifications
            </h2>
          </div>
          <p className="text-muted-foreground text-sm ml-9">
            Professional certifications and credentials
          </p>

          <div className="flex flex-wrap gap-3 ml-9 mt-6">
            {certifications.map((cert) => (
              <Badge
                key={cert.name}
                variant="secondary"
                className="px-4 py-2 text-sm font-normal"
              >
                <span className="font-medium">{cert.name}</span>
                <span className="text-muted-foreground ml-2">• {cert.issuer}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
