import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectLink: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  // Send with FormData to FormSubmit standard endpoint (supports file uploads)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('subject', formData.subject);
      fd.append('message', formData.message);
      if (formData.projectLink) fd.append('projectLink', formData.projectLink);
      // FormSubmit controls
      fd.append('_subject', 'New message from Portfolio');
      fd.append('_template', 'table');
      fd.append('_captcha', 'false');
      // Attach files if any (use multiple common field names for compatibility)
      if (files && files.length > 0) {
        const names: string[] = [];
        Array.from(files).forEach((file) => {
          names.push(file.name);
          fd.append('file', file, file.name);       // some services expect 'file'
          fd.append('attachment', file, file.name); // others expect 'attachment'
        });
        // Include filenames in the submission for inbox context
        fd.append('attached_filenames', names.join(', '));
      }

      const res = await fetch('https://formsubmit.co/firozshaik.ce.10@gmail.com', {
        method: 'POST',
        // let browser set multipart boundary
        body: fd,
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
      toast.success("Message received! I’ll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '', projectLink: '' });
      setFiles(null);
    } catch (err) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "firozshaik.ce.10@gmail.com",
      link: "mailto:firozshaik.ce.10@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 8333886963",
      link: "tel:+918333886963"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Vijayawada, Andhra Pradesh, India",
      link: "#"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/firoz-shaik-711384250"
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "github.com/ShaikFiroz-developer",
      link: "https://github.com/ShaikFiroz-developer"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or discussing opportunities? I'd love to hear from you. 
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitted && (
                <div
                  className="mb-4 flex items-center gap-3 rounded-md border border-green-600/30 bg-green-500/10 px-3 py-2 text-sm"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>
                    Message sent successfully — I will connect back. Thank you!
                  </span>
                </div>
              )}
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                {/* Optional project link */}
                <div className="space-y-2">
                  <Label htmlFor="projectLink">Project Link (optional)</Label>
                  <Input
                    id="projectLink"
                    name="projectLink"
                    type="url"
                    value={formData.projectLink}
                    onChange={handleInputChange}
                    placeholder="https://github.com/your/project or live demo"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                  />
                </div>

                {/* Optional file attachments */}
                <div className="space-y-2">
                  <Label htmlFor="attachments">Attachments (optional)</Label>
                  <Input
                    id="attachments"
                    name="attachments"
                    type="file"
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                  />
                  <p className="text-xs text-muted-foreground">Attach relevant files (resume, screenshots, docs). Max size per file depends on email provider limits.</p>
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities, innovative projects, 
                  or potential collaborations. Whether you have a question about my work 
                  or want to explore how we can work together, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Networking & Infrastructure</p>
                      <p className="text-sm text-muted-foreground">TCP/IP, OSPF, network optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Blockchain Development</p>
                      <p className="text-sm text-muted-foreground">DeFi, smart contracts, Web3</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">IoT & Embedded Systems</p>
                      <p className="text-sm text-muted-foreground">Microcontrollers, sensors, edge computing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Full-Stack Development</p>
                      <p className="text-sm text-muted-foreground">Modern web technologies, APIs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
