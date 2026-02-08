import { useState } from "react";
import { Send, Mail, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <Card className="glass border-border/50 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 group"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <p className="text-muted-foreground text-sm mb-3">
                Or reach out directly:
              </p>
              <a
                href="mailto:akshitnegi.office@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>akshitnegi.office@gmail.com</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
