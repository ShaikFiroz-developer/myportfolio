import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Network, 
  Cpu, 
  Code, 
  Shield,
  Zap,
  Settings,
  Database,
  Globe,
  ChevronRight
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("networking");

  const skillCategories = {
    networking: {
      title: "Network Engineering & Protocols",
      icon: <Network className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "TCP/IP Suite", level: 95, experience: "Expert", projects: 12 },
        { name: "OSPF Routing", level: 92, experience: "Expert", projects: 8 },
        { name: "BGP Protocol", level: 88, experience: "Advanced", projects: 6 },
        { name: "DHCP/ARP", level: 90, experience: "Expert", projects: 10 },
        { name: "Network Security", level: 85, experience: "Advanced", projects: 7 },
        { name: "Wireless Protocols", level: 87, experience: "Advanced", projects: 9 }
      ],
      tools: ["Wireshark", "Cisco IOS", "Juniper", "pfSense", "Nmap", "iperf3", "tcpdump"],
      description: "Advanced networking protocols and infrastructure design with enterprise-level experience"
    },
    embedded: {
      title: "Embedded Systems & IoT",
      icon: <Cpu className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "STM32446RE", level: 88, experience: "Advanced", projects: 5 },
        { name: "Arduino Development", level: 85, experience: "Advanced", projects: 8 },
        { name: "Embedded C/C++", level: 90, experience: "Expert", projects: 12 },
        { name: "Device Drivers", level: 82, experience: "Advanced", projects: 4 },
        { name: "Sensor Integration", level: 87, experience: "Advanced", projects: 7 },
        { name: "RTOS", level: 78, experience: "Intermediate", projects: 3 }
      ],
      tools: ["STM32CubeIDE", "Arduino IDE", "Keil", "GCC", "Oscilloscope", "Logic Analyzer"],
      description: "Microcontroller programming and IoT device development for industrial applications"
    },
    development: {
      title: "Software Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "React.js", level: 90, experience: "Expert", projects: 15 },
        { name: "Node.js", level: 85, experience: "Advanced", projects: 12 },
        { name: "TypeScript", level: 88, experience: "Advanced", projects: 10 },
        { name: "Python", level: 82, experience: "Advanced", projects: 8 },
        { name: "Database Design", level: 80, experience: "Advanced", projects: 9 },
        { name: "API Development", level: 85, experience: "Advanced", projects: 11 }
      ],
      tools: ["React", "Node.js", "MongoDB", "PostgreSQL", "Docker", "Git", "AWS"],
      description: "Full-stack web development with modern frameworks and cloud technologies"
    },
    blockchain: {
      title: "Blockchain & Web3",
      icon: <Shield className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Smart Contracts", level: 85, experience: "Advanced", projects: 4 },
        { name: "Solidity", level: 82, experience: "Advanced", projects: 5 },
        { name: "Web3 Integration", level: 80, experience: "Advanced", projects: 3 },
        { name: "DeFi Protocols", level: 75, experience: "Intermediate", projects: 2 },
        { name: "Blockchain Architecture", level: 88, experience: "Advanced", projects: 6 },
        { name: "Cryptography", level: 78, experience: "Intermediate", projects: 4 }
      ],
      tools: ["Ethereum", "Hardhat", "Web3.js", "MetaMask", "Truffle", "Ganache"],
      description: "Blockchain development and decentralized application architecture"
    }
  };

  const currentCategory = skillCategories[selectedCategory as keyof typeof skillCategories];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent)]"></div>
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
            Technical Mastery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across networking, embedded systems, and modern software development
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === key 
                  ? 'text-white shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground bg-card border border-border hover:border-primary/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedCategory === key && (
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`}
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {category.icon}
                {category.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Category Content */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20">
            <CardHeader className={`${currentCategory.bgColor} border-b border-border/50`}>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className={`p-3 bg-gradient-to-r ${currentCategory.color} rounded-xl text-white`}>
                  {currentCategory.icon}
                </div>
                {currentCategory.title}
              </CardTitle>
              <p className="text-muted-foreground mt-2">{currentCategory.description}</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Skills List */}
                <div className="lg:col-span-2 space-y-6">
                  <h4 className="text-lg font-semibold mb-4">Core Competencies</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentCategory.skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="p-4 hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/30">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <h5 className="font-medium group-hover:text-primary transition-colors">
                                {skill.name}
                              </h5>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${
                                  skill.experience === 'Expert' ? 'bg-green-100 text-green-700 border-green-200' :
                                  skill.experience === 'Advanced' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                                  'bg-yellow-100 text-yellow-700 border-yellow-200'
                                }`}
                              >
                                {skill.experience}
                              </Badge>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Proficiency</span>
                                <span className="font-medium">{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                            </div>
                            
                            <div className="text-xs text-muted-foreground">
                              {skill.projects} projects completed
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Tools & Technologies</h4>
                    <div className="space-y-3">
                      {currentCategory.tools.map((tool, index) => (
                        <motion.div 
                          key={tool}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                          <span className="font-medium">{tool}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                    <CardContent className="p-6">
                      <h5 className="font-semibold mb-4">Category Overview</h5>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Total Skills</span>
                          <span className="font-bold text-primary">{currentCategory.skills.length}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Avg. Proficiency</span>
                          <span className="font-bold text-primary">
                            {Math.round(currentCategory.skills.reduce((acc, skill) => acc + skill.level, 0) / currentCategory.skills.length)}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Projects</span>
                          <span className="font-bold text-primary">
                            {currentCategory.skills.reduce((acc, skill) => acc + skill.projects, 0)}+
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Tools Mastered</span>
                          <span className="font-bold text-primary">{currentCategory.tools.length}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Overall Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Technologies", value: "15", icon: <Settings className="h-5 w-5" /> },
            { label: "Academic Projects", value: "8+", icon: <Globe className="h-5 w-5" /> },
            { label: "Experience", value: "1 Year", icon: <Zap className="h-5 w-5" /> },
            { label: "freelanced projects", value: "6", icon: <Globe className="h-5 w-5" /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-card to-primary/5 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
