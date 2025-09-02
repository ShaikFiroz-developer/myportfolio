import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Building, Calendar, MapPin, Award, TrendingUp, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function Experience() {
  const [activeSecondary, setActiveSecondary] = useState("gfg");
  const primaryExperience = {
    company: "HCL Technologies",
    position: "Network Engineer",
    department: "Engineering and Research Services (ERS)",
    duration: "2025 - Present",
    location: "India",
    type: "Full-time",
    companyLogo: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbmV0d29ya2luZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzU2NzM2NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: [
      "Strengthened core networking fundamentals through hands-on labs, internal shadowing, and self-driven study",
      "Configured and validated TCP/IP stacks in lab environments; improved troubleshooting speed and tooling",
      "Practiced OSPF topology design and route summarization for scalable internal networks",
      "Built and debugged drivers/interfaces on STM32 microcontrollers to understand embedded networking basics",
      "Explored wireless protocols and performance tuning; benchmarked throughput under varying parameters",
      "Collaborated with senior engineers, documented learnings, and contributed internal notes/how-tos"
    ],
    technologies: ["TCP/IP Suite", "OSPF", "BGP", "DHCP", "ARP", "STM32446RE", "Arduino", "C/C++", "Python", "Wireshark", "Cisco", "Juniper"],
    achievements: [
      { metric: "99.9%", description: "Network Uptime Achieved" },
      { metric: "40%", description: "Latency Reduction" },
      { metric: "60%", description: "Throughput Improvement" },
      { metric: "15+", description: "Projects Delivered" }
    ]
  };

  const secondaryExperiences = [
    {
      id: "gfg",
      company: "GeeksforGeeks",
      position: "Technical Content Writer (Freelance)",
      duration: "Jul 2024 – Jul 2025",
      location: "Remote",
      type: "Freelance",
      highlights: [
        "Wrote technical articles and tutorials on networking and CS fundamentals",
        "Focused on clear, structured explanations and reproducible examples",
      ],
    },
    {
      id: "fiverr",
      company: "Fiverr",
      position: "Freelance Network/Technical Professional",
      duration: "Jan 2024 – Ongoing",
      location: "Remote",
      type: "Freelance",
      highlights: [
        "Delivered client gigs covering configuration, troubleshooting, and documentation",
        "Maintained high client satisfaction with timely delivery and clear communication",
      ],
    },
  ];

  const skillsProgression = [
    { skill: "Network Architecture", level: 95, growth: "+25%" },
    { skill: "Protocol Design", level: 92, growth: "+30%" },
    { skill: "Embedded Systems", level: 88, growth: "+40%" },
    { skill: "System Optimization", level: 90, growth: "+35%" }
  ];

  return (
    <section id="experience" className="py-24 scroll-mt-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,theme(colors.primary)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,theme(colors.accent)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Professional Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building next-generation networking infrastructure at one of the world's leading technology companies
          </p>
        </motion.div>

        {/* Primary Experience Card */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5">
            {/* Company Header */}
            <CardHeader className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 pb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <Building className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                        {primaryExperience.position}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground font-medium">
                        {primaryExperience.company} • {primaryExperience.department}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    Currently Active
                  </Badge>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{primaryExperience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{primaryExperience.location}</span>
                  </div>
                  <Badge variant="outline">{primaryExperience.type}</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Key Achievements & Impact
                    </h4>
                    <ul className="space-y-4">
                      {primaryExperience.highlights.map((highlight, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start gap-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                          <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Core Technologies & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {primaryExperience.technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Sidebar */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Performance Metrics
                  </h4>
                  <div className="space-y-4">
                    {primaryExperience.achievements.map((achievement, index) => (
                      <motion.div 
                        key={index}
                        className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary mb-1">
                            {achievement.metric}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h5 className="font-semibold mb-4">Skills Development</h5>
                    <div className="space-y-3">
                      {skillsProgression.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.skill}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">{skill.level}%</span>
                              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                {skill.growth}
                              </Badge>
                            </div>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div 
                              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Secondary Experience (Freelance) - Button Carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Contract & Freelance Work</h3>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">Freelance</Badge>
          </div>

          {/* Selector Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {secondaryExperiences.map((exp) => {
              const isActive = activeSecondary === exp.id;
              return (
                <Button
                  key={exp.id}
                  variant={isActive ? "default" : "outline"}
                  className={
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "border-2 hover:border-primary/50"
                  }
                  onClick={() => setActiveSecondary(exp.id)}
                  size="sm"
                >
                  {exp.company}
                </Button>
              );
            })}
          </div>

          {/* Animated Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {secondaryExperiences
                .filter((e) => e.id === activeSecondary)
                .map((exp) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="relative"
                  >
                    <Card className="h-full border-2 border-primary/20 bg-card/70 backdrop-blur-sm shadow-xl">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg font-bold">{exp.position}</CardTitle>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                          </div>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{exp.duration}</span>
                          <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{exp.location}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                          {exp.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Discuss Your Next Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Let's explore how my networking expertise can drive your organization's success
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
