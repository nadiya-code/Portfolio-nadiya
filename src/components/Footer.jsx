import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-semibold">Full-Stack AI Developer</span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} | Kola Nadiya
            </span>
          </div>

          <div className="flex items-center gap-8">
            {/* GitHub - Updated to your likely username */}
            <a
              href="https://github.com/nadiya-code/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-125"
            >
              <Github className="h-6 w-6" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kolanadiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-125"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            {/* Email - Standard direct link */}
            <a
              href="mailto:nadiyakola3@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-125"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            Dehradun, Uttarkhand
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;