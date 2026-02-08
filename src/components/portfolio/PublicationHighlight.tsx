import { FileText, ExternalLink, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PublicationHighlight = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20" id="publication">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Publication</span>
          </h2>
          <p className="text-muted-foreground">
            Research contribution to the field of AI and Robotics.
          </p>
        </div>

        <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in-up overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3">
              {/* Left side - Icon/Visual */}
              <div className="bg-primary/10 p-8 flex items-center justify-center">
                <div className="relative">
                  <FileText className="w-20 h-20 text-primary" />
                  <BookOpen className="w-8 h-8 text-accent absolute -bottom-2 -right-2" />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 md:col-span-2 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Published: March 25, 2025</span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                  Deep Learning-Based Enhanced Object Detection for Humanoid Robots
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  IEEE Xplore publication exploring advanced deep learning techniques 
                  for improving object detection accuracy in humanoid robotic systems, 
                  enabling more precise human-robot interaction.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="text-xs text-muted-foreground font-mono">
                    DOI: 10.1109/SETCOM64758.2025.10932364
                  </span>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <a
                      href="https://ieeexplore.ieee.org/document/10932364"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>View on IEEE Xplore</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
