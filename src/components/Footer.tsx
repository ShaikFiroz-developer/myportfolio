import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Passionate CSE graduate and Network Engineer at HCL, specializing in 
              networking protocols, blockchain technology, and full-stack web development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Projects
              </button>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ShaikFiroz-developer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/firoz-shaik-711384250"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:firozshaik.ce.10@gmail.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Always open to new opportunities and collaborations!
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Portfolio. Built with passion and modern web technologies.
          </p>
          
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={scrollToTop}
            className="flex items-center gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
