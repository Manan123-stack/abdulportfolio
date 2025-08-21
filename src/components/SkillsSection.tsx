import { Code, Palette, Database, Globe } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Globe,
      title: "Responsive Website Development",
      description: "Creating mobile-first, responsive websites that work seamlessly across all devices and screen sizes.",
      technologies: ["CSS Grid", "Flexbox", "Media Queries", "Bootstrap"]
    },
    {
      icon: Code,
      title: "HTML, CSS, JavaScript",
      description: "Strong foundation in core web technologies with modern ES6+ JavaScript and semantic HTML/CSS.",
      technologies: ["HTML5", "CSS3", "ES6+", "DOM Manipulation"]
    },
    {
      icon: Palette,
      title: "React.js",
      description: "Building dynamic, interactive user interfaces with React hooks, state management, and component architecture.",
      technologies: ["React Hooks", "JSX", "State Management", "Component Design"]
    },
    {
      icon: Database,
      title: "Full Stack Development",
      description: "End-to-end web application development including frontend, backend, and database integration.",
      technologies: ["Node.js", "Express", "MongoDB", "RESTful APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Core Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and specializations that enable me to deliver high-quality web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "JavaScript", level: 85 },
            { name: "React.js", level: 80 },
            { name: "HTML/CSS", level: 90 },
            { name: "Full Stack", level: 75 }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="transparent"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-primary"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${item.level}, 100`}
                    strokeLinecap="round"
                    fill="transparent"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{item.level}%</span>
                </div>
              </div>
              <h4 className="font-semibold text-foreground">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;