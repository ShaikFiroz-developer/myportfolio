import { Button } from "./ui/button";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import profileImage from "../assets/firoz.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for opportunities
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Network Engineer
                </span>
                <br />
                <span className="text-primary relative">
                  & Blockchain Innovator
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Elite Network Engineer at{" "}
                <span className="font-semibold text-foreground">
                  HCL Technologies
                </span>{" "}
                specializing in
                <span className="text-primary font-medium">
                  {" "}
                  TCP/IP protocols, OSPF routing, and embedded
                  systems
                </span>
                . Building the future of networking
                infrastructure with cutting-edge solutions.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={() => scrollToSection("experience")}
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Expertise
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 hover:border-primary/50"
                onClick={() => scrollToSection("contact")}
              >
                <Download className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/ShaikFiroz-developer", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/firoz-shaik-711384250", label: "LinkedIn" },
                { icon: Mail, href: "mailto:firozshaik.ce.10@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group relative p-3 rounded-full bg-muted/50 hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  <span className="sr-only">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Professional Image Section */}
          <motion.div
            className="relative lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <div className="relative group max-w-sm">
              {/* Main Image Container */}
              <motion.div
                className="relative z-10 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 p-2"
                whileHover={{ scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={profileImage}
                    alt="Professional portrait"
                    className="w-full h-[350px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Achievement Cards anchored to the image container (desktop only) */}
              <div className="hidden lg:block">
                {/* Company / Role */}
                <motion.div
                  className="absolute -left-10 top-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/50 z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, x: -10 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-medium">HCL Technologies</p>
                      <p className="text-xs text-muted-foreground">Network Engineer</p>
                    </div>
                  </div>
                </motion.div>

                {/* Years Experience */
                }
                <motion.div
                  className="absolute -right-8 bottom-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/50 z-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">1</p>
                    <p className="text-xs text-muted-foreground">Year Experience</p>
                  </div>
                </motion.div>

                {/* Uptime Metric */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-border/50 z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <p className="text-sm font-bold text-primary">99.9%</p>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </div>
                </motion.div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl -z-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-full blur-2xl -z-20"></div>
            </div>
          </motion.div>
        </div>

        {/* Floating Achievement Cards moved into image container above to avoid overlapping text */}

        {/* Mobile Achievement Cards */}
        <div className="lg:hidden mt-8">
          <div className="flex justify-center gap-4">
            <motion.div
              className="bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-border/50 flex-1 max-w-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                <p className="text-xs font-medium">HCL Tech</p>
                <p className="text-xs text-muted-foreground">
                  Active
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-border/50 flex-1 max-w-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="text-center">
                <p className="text-sm font-bold text-primary">1</p>
                <p className="text-xs text-muted-foreground">Year</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={() => scrollToSection("experience")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm font-medium">
            Discover More
          </span>
          <ChevronDown className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
}
