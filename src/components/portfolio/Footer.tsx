import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/akshit-negi", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/akshit-negi", label: "GitHub" },
  { icon: Mail, href: "mailto:akshitnegi.office@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Akshit Negi
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
