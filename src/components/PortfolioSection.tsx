import { ExternalLink, Github, ShoppingCart, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "Full Stack",
      description: "Developed a complete full stack eCommerce website with user authentication, product management, and responsive UI. Features include shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: true,
      status: "Completed"
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Frontend",
      description: "Modern, responsive portfolio website showcasing clean design principles and smooth user interactions. Built with React and modern CSS techniques.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: false,
      status: "Completed"
    },
    {
      id: 3,
      title: "Business Landing Page",
      category: "Frontend",
      description: "Professional business landing page with modern design, optimized for conversions and mobile responsiveness. Includes contact forms and service showcases.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: false,
      status: "In Progress"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Recent <span className="accent-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my recent work and projects that demonstrate my skills and expertise in web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className="lg:col-span-2">
              <Card className="overflow-hidden shadow-portfolio hover:shadow-portfolio-hover transition-all duration-300 group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <ShoppingCart className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="default" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-portfolio hover:shadow-portfolio-hover transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Projects Placeholder */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-muted to-accent/10 rounded-3xl p-8 border-2 border-dashed border-muted-foreground/20">
            <div className="w-16 h-16 bg-muted-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
            <p className="text-muted-foreground">
              I'm constantly working on new projects and learning new technologies. 
              Check back soon for more exciting work!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
