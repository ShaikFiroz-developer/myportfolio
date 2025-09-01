import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Play, Star, GitBranch, Users } from "lucide-react";
import { motion } from "motion/react";
import reactLogo from "../assets/react.svg";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("featured");

  // Type guard for items that include an impact block
  const hasImpact = (p: any): p is { impact: { metric: string; description: string; additional: string } } =>
    p && typeof p === "object" && "impact" in p && p.impact;

  const projects = {
    featured: [
      {
        title: "Enterprise Network Infrastructure Optimization",
        description: "Led the design and implementation of a high-performance network infrastructure for a Fortune 500 client, achieving 99.9% uptime and 40% latency reduction through advanced OSPF routing and TCP/IP optimization.",
        image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbmV0d29ya2luZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzU2NzM2NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["TCP/IP", "OSPF", "BGP", "Cisco", "Network Analysis", "Performance Optimization"],
        category: "Networking",
        impact: {
          metric: "40%",
          description: "Latency Reduction",
          additional: "99.9% uptime achieved"
        },
        status: "Production",
        complexity: "Enterprise",
        role: "Lead Engineer"
      },
      {
        title: "Carbon Credits Trading Blockchain Platform",
        description: "Architected a transparent blockchain-based carbon credits trading system using smart contracts, enabling secure and verifiable environmental transactions with automatic compliance verification.",
        image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzU2NzM2NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["Ethereum", "Solidity", "Web3.js", "React", "Node.js", "Smart Contracts"],
        category: "Blockchain",
        impact: {
          metric: "100%",
          description: "Transparency Increase",
          additional: "Automated verification"
        },
        status: "Live",
        complexity: "Advanced",
        role: "Blockchain Architect"
      }
    ],
    networking: [
      {
        title: "Multi-Protocol Network Analyzer",
        description: "Developed a comprehensive network analysis tool supporting TCP/IP, OSPF, and BGP protocols with real-time monitoring and advanced troubleshooting capabilities.",
        image: "https://images.unsplash.com/photo-1623715537863-7b1441e0e2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMHRlY2hub2xvZ3klMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2NzM2NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["C++", "Wireshark API", "TCP/IP", "OSPF", "Real-time Analysis"],
        category: "Networking",
        status: "Production",
        complexity: "Advanced"
      },
      {
        title: "IoT Device Communication Framework",
        description: "Created a robust communication framework for STM32446RE-based IoT devices with wireless protocol integration and sensor data aggregation.",
        image: "https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU2NzM2NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["STM32446RE", "Arduino", "C", "Wireless Protocols", "Sensor Integration"],
        category: "IoT",
        status: "Production",
        complexity: "Advanced"
      }
    ],
    blockchain: [
      {
        title: "DeFi Lending Protocol",
        description: "Built a decentralized lending platform with automated liquidation, yield optimization, and cross-chain compatibility for maximum capital efficiency.",
        image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzU2NzM2NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["Solidity", "Hardhat", "DeFi", "Yield Farming", "Cross-chain"],
        category: "Blockchain",
        status: "Development",
        complexity: "Expert"
      }
    ],
    web: [
      {
        title: "Next-Gen Banking System",
        description: "Developed a modern banking application with real-time transactions, advanced security, and microservices architecture serving millions of users.",
        image: "https://images.unsplash.com/photo-1623715537863-7b1441e0e2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMHRlY2hub2xvZ3klMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2NzM2NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "Microservices"],
        category: "Web Development",
        status: "Production",
        complexity: "Enterprise"
      },
      {
        title: "Video Streaming Platform",
        description: "Built a YouTube-like platform with video processing, real-time comments, and CDN integration supporting thousands of concurrent users.",
        image: "https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU2NzM2NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3", "FFmpeg"],
        category: "Web Development",
        status: "Live",
        complexity: "Advanced"
      }
    ]
  };

  const categories = [
    { key: "featured", label: "Featured Work", count: projects.featured.length },
    { key: "networking", label: "Networking & IoT", count: projects.networking.length },
    { key: "blockchain", label: "Blockchain", count: projects.blockchain.length },
    { key: "web", label: "Web Development", count: projects.web.length }
  ];

  const currentProjects = projects[selectedCategory as keyof typeof projects];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-100 text-green-800 border-green-200";
      case "Live": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Development": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Enterprise": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Expert": return "bg-red-100 text-red-800 border-red-200";
      case "Advanced": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
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
            Portfolio Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge projects spanning network infrastructure, blockchain innovation, and scalable web applications
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.key 
                  ? 'text-white shadow-xl' 
                  : 'text-muted-foreground hover:text-foreground bg-card border border-border hover:border-primary/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedCategory === category.key && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl"
                  layoutId="activeProjectCategory"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <Badge variant="secondary" className="bg-primary-foreground/20 text-current border-0">
                  {category.count}
                </Badge>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedCategory === "featured" ? (
            // Featured Projects - Large Format
            <div className="space-y-8">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5 hover:shadow-3xl transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            if (img.src !== reactLogo) img.src = reactLogo;
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                          <Badge className={getComplexityColor(project.complexity)}>
                            {project.complexity}
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-12 space-y-6">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {project.description}
                          </p>
                        </div>

                        {/* Impact Metrics */}
                        {hasImpact(project) && (
                          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-1">
                                  {project.impact.metric}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {project.impact.description}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-sm font-semibold text-foreground">
                                  {project.impact.additional}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Additional Impact
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <GitBranch className="h-4 w-4" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge 
                                  variant="outline" 
                                  className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                          <Button 
                            size="lg"
                            className="group bg-primary hover:bg-primary/90 shadow-lg flex-1"
                          >
                            <Play className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                            View Project
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="border-2 hover:border-primary/50"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            // Regular Projects - Grid Format
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-card to-primary/5 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          if (img.src !== reactLogo) img.src = reactLogo;
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className={getStatusColor(project.status)} variant="secondary">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Let's discuss how we can work together on your next innovative project
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
