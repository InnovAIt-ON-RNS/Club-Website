
import React from 'react';
import { Brain, Globe, Smartphone, Cloud, Cpu, Shield } from 'lucide-react';

const FocusAreasSection = () => {
  const focusAreas = [
    {
      title: "Artificial Intelligence",
      description: "Exploring machine learning, deep learning, and AI applications for real-world impact.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development",
      description: "Building modern, responsive web applications with cutting-edge frameworks.",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile Development",
      description: "Creating native and cross-platform mobile apps for iOS and Android.",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Cloud Computing",
      description: "Leveraging cloud platforms for scalable and distributed applications.",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Robotics & IoT",
      description: "Designing smart devices and robots for automation and innovation.",
      icon: Cpu,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Cybersecurity",
      description: "Learning ethical hacking and security principles to protect systems.",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tech-purple/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold uppercase tracking-wider text-tech-purple">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink bg-clip-text text-transparent">
              Domain Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore diverse tech domains through hands-on workshops, real-world projects, and innovation challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-card/40 backdrop-blur-xl p-8 rounded-3xl border-2 border-border/50 hover:border-tech-purple/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Glow effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${area.color} opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${area.color} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-tech-purple transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
                
                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${area.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
