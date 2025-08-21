import { GraduationCap, Briefcase, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Personal Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                  <p className="text-muted-foreground">
                    I am a full stack web developer with one year of experience, specializing in building 
                    responsive and modern web applications using HTML, CSS, JavaScript, and React. 
                    I'm passionate about creating user-friendly digital solutions that solve real-world problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Currently pursuing BSc in Computer Science (4 years) from Arid University. 
                    This academic journey has provided me with strong fundamentals in programming, 
                    algorithms, and software engineering principles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    1 year of professional experience in eCommerce web development at BCDapps. 
                    During this time, I've worked on various projects involving full-stack development, 
                    user interface design, and database management.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Key Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
            
            <Card className="shadow-portfolio hover:shadow-portfolio-hover transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <h4 className="font-semibold">Full Stack eCommerce Development</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Successfully developed complete eCommerce solutions with user authentication, 
                  product management, and responsive UI.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-portfolio hover:shadow-portfolio-hover transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <h4 className="font-semibold">Modern Web Technologies</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Proficient in modern web technologies including React.js, JavaScript ES6+, 
                  and responsive design principles.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-portfolio hover:shadow-portfolio-hover transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <h4 className="font-semibold">User-Centric Approach</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Focus on creating intuitive user experiences and clean, maintainable code 
                  that delivers real value to clients and users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;