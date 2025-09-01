import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Award, Target, TrendingUp, Zap, Download, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Network Infrastructure Excellence",
      description: "Led enterprise-level network optimization projects achieving 99.9% uptime and 40% latency reduction",
      metric: "99.9%",
      metricLabel: "Uptime"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Advanced Protocol Mastery",
      description: "Deep expertise in TCP/IP, OSPF, and BGP protocols with hands-on implementation experience",
      metric: "5+",
      metricLabel: "Protocols"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Innovation in Blockchain",
      description: "Architected transparent carbon trading systems using smart contracts and Web3 technologies",
      metric: "100%",
      metricLabel: "Transparency"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Embedded Systems Integration",
      description: "Proficient in STM32446RE and Arduino programming for IoT and industrial applications",
      metric: "10+",
      metricLabel: "Projects"
    }
  ];

  const professionalValues = [
    "Network Excellence",
    "Innovation Leadership", 
    "Problem Solving",
    "Continuous Learning",
    "Technical Precision",
    "Team Collaboration"
  ];

  const stats = [
    { value: "3+", label: "Years Experience", description: "Professional Development" },
    { value: "50+", label: "Projects", description: "Successfully Delivered" },
    { value: "15+", label: "Technologies", description: "Mastered" },
    { value: "99.9%", label: "Success Rate", description: "Project Completion" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
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
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driven by passion for network engineering excellence and innovation in emerging technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Professional Story */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  My Mission
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    As a passionate <span className="text-foreground font-semibold">Network Engineer at HCL Technologies</span>, 
                    I specialize in designing and implementing cutting-edge network infrastructure solutions that drive 
                    enterprise success. My expertise spans from traditional networking protocols to emerging technologies 
                    like blockchain and IoT.
                  </p>
                  <p>
                    During my journey as a <span className="text-foreground font-semibold">Computer Science Engineering graduate</span>, 
                    I've consistently pushed the boundaries of what's possible, from developing transparent carbon 
                    trading systems using blockchain technology to optimizing enterprise network performance with 
                    advanced routing protocols.
                  </p>
                  <p>
                    My current focus at <span className="text-foreground font-semibold">HCL's ERS department</span> involves 
                    deep-dive networking solutions, microcontroller programming, and building robust communication 
                    systems that serve mission-critical applications across various industries.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-lg"
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Experience
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 hover:border-primary/50"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Professional Values */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Core Values & Principles</h4>
                <div className="grid grid-cols-2 gap-3">
                  {professionalValues.map((value, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements & Stats */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Key Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Key Achievements</h3>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gradient-to-br from-card to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                            <div className="text-right">
                              <div className="text-xl font-bold text-primary">{achievement.metric}</div>
                              <div className="text-xs text-muted-foreground">{achievement.metricLabel}</div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Professional Stats */}
            <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-6 text-center">Professional Impact</h4>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm font-medium text-foreground">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Focus */}
            <Card className="bg-gradient-to-br from-card to-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Current Focus Areas
                </h4>
                <div className="space-y-3">
                  {[
                    "Advanced Network Protocol Optimization",
                    "Enterprise Infrastructure Architecture", 
                    "IoT Device Integration & Communication",
                    "Blockchain Technology Innovation"
                  ].map((focus, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{focus}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
