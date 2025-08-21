import { useState } from 'react';
import { Mail, Phone, Github, MapPin, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdulmanan@gmail.com",
      href: "mailto:abdulmanan@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "03305853391",
      href: "tel:03305853391"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Manan123-stack",
      href: "https://github.com/Manan123-stack"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Work <span className="accent-gradient bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about web development. Don't hesitate to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="shadow-portfolio hover:shadow-portfolio-hover transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.label}</h4>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Why Work With Me?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm">Fast response time (within 24 hours)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm">Quality code and clean design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm">Ongoing support and maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm">Competitive pricing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-portfolio">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-green-600 mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for your message. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full accent-gradient text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;