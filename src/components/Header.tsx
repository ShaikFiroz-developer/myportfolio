import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-lg">P</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Portfolio
                  </div>
                  <div className="text-xs text-muted-foreground -mt-1">Network Engineer</div>
                </div>
              </div>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors group rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div 
                  className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="desktopHover"
                />
              </motion.button>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                size="sm"
                className="ml-4 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Connect
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav 
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20
              }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                size="sm"
                className="w-full mt-4 bg-primary hover:bg-primary/90"
              >
                Let's Connect
              </Button>
            </motion.div>
          </div>
        </motion.nav>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </motion.header>
  );
}
