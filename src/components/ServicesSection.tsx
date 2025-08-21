import { Code2, Smartphone, ShoppingCart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Full Stack Web Development",
      description: "Complete web application development from database design to user interface, ensuring scalable and maintainable solutions.",
      features: ["Frontend & Backend", "Database Integration", "API Development", "Testing & Deployment"],
      popular: false
    },
    {
      icon: Smartphone,
      title: "Responsive Website Design",
      description: "Mobile-first responsive websites that provide optimal user experience across all devices and screen sizes.",
      features: ["Mobile Optimization", "Cross-browser Compatibility", "Performance Optimization", "SEO Friendly"],
      popular: true
    },
    {
      icon: ShoppingCart,
      title: "eCommerce Website Development",
      description: "Full-featured eCommerce solutions with secure payment integration, inventory management, and user-friendly admin panels.",
      features: ["Payment Integration", "Inventory Management", "User Authentication", "Admin Dashboard"],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/30 rounded-full px-4 py-2 text-sm font-medium text-accent-foreground mb-4">
            <Zap className="w-4 h-4 mr-2" />
            My Awesome Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What I Can Do <span className="accent-gradient bg-clip-text text-transparent">For You</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services tailored to meet your business needs and exceed your expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="accent-gradient text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`service-card h-full ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your ideas and bring them to life with clean, modern, and functional web solutions.
            </p>
            <Button size="lg" className="accent-gradient text-white" onClick={scrollToContact}>
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;