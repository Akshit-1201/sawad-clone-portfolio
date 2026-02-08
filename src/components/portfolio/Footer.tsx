import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/akshit-negi", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/akshit-negi", label: "GitHub" },
  { icon: Mail, href: "mailto:akshitnegi.office@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-secondary/30">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Akshit Negi. All rights reserved.
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
        </div>
      </div>
    </footer>
  );
};
