
import React from 'react';
import { Brain, Globe, Smartphone, Cloud, Cpu, Shield } from 'lucide-react';

const FocusAreasSection = () => {
  const focusAreas = [
    {
      title: "Artificial Intelligence",
      description: "Exploring machine learning algorithms, neural networks, and AI applications for real-world problems.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development",
      description: "Building modern web applications using cutting-edge frameworks and technologies.",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications for iOS and Android ecosystems.",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Cloud Computing",
      description: "Leveraging cloud platforms for scalable, reliable, and distributed applications.",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Robotics & IoT",
      description: "Designing and programming robots and IoT devices for automation and innovation.",
      icon: Cpu,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Cybersecurity",
      description: "Learning security principles, ethical hacking, and protecting digital infrastructure.",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading animate-gradient">
            Our Focus Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We explore diverse domains in technology through hands-on workshops, collaborative projects, and innovation challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-tech-purple/50 transition-all duration-300 card-hover overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${area.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-tech-purple transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {area.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
