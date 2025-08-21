import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center py-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent/30 rounded-full px-4 py-2 text-sm font-medium text-accent-foreground">
                👋 Welcome to my portfolio
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight">
                Hi! I Am
                <br />
                <span className="accent-gradient bg-clip-text text-transparent">Abdul Manan</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Full Stack Web Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Building responsive and modern web applications with 1 year of industry experience. 
                Passionate about creating user-friendly digital solutions that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="accent-gradient text-white border-0 hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-2">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-portfolio">
                <img
                  src={heroImage}
                  alt="Abdul Manan - Full Stack Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-portfolio">
                <div className="text-sm font-medium">Best Quality</div>
                <div className="text-xs opacity-90">Always</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-portfolio">
                <div className="text-sm font-medium text-foreground">1+ Year</div>
                <div className="text-xs text-muted-foreground">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;