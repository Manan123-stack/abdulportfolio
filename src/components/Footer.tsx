import { Heart, Mail, Phone, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Abdul<span className="text-primary">Manan</span>
            </h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Full Stack Web Developer passionate about creating modern, 
              responsive web applications that deliver exceptional user experiences.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:abdulmanan@gmail.com"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:03305853391"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/Manan123-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Services', id: 'services' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Full Stack Web Development</li>
              <li>Responsive Website Design</li>
              <li>eCommerce Development</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Website Maintenance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Abdul Manan. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-400" fill="currentColor" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;