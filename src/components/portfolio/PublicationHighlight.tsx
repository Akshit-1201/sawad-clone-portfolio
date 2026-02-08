import { ExternalLink, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";

export const PublicationHighlight = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-secondary/30 border-b border-border" id="publication">
      <div className="container max-w-4xl">
        <AnimatedSection animation="fade-up">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
              <h2 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                Research Publication
              </h2>
            </div>
            <p className="text-muted-foreground text-sm ml-8 sm:ml-9">
              Contribution to the field of AI and Robotics
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-right" delay={100}>
          <Card className="border border-border bg-card hover:shadow-md transition-shadow duration-200 ml-0 sm:ml-9">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <span>Published: March 25, 2025</span>
                <span className="hidden sm:inline text-border">•</span>
                <span className="hidden sm:inline">IEEE Xplore</span>
              </div>

              <h3 className="text-base sm:text-lg font-medium text-foreground mb-3">
                Deep Learning-Based Enhanced Object Detection for Humanoid Robots
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                IEEE Xplore publication exploring advanced deep learning techniques 
                for improving object detection accuracy in humanoid robotic systems, 
                enabling more precise human-robot interaction.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded w-fit">
                  DOI: 10.1109/SETCOM64758.2025.10932364
                </span>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground w-fit"
                >
                  <a
                    href="https://ieeexplore.ieee.org/document/10932364"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>View on IEEE Xplore</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};
