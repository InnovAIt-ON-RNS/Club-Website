
import { NavLink } from 'react-router-dom';
import { Calendar, Image, FileText, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Upcoming Events",
      description: "Stay updated with our latest workshops, hackathons, and tech talks.",
      link: "/events",
      linkText: "View Events",
      gradient: "from-tech-blue to-tech-cyan"
    },
    {
      icon: <Image className="h-6 w-6" />,
      title: "Gallery",
      description: "Check out photos and videos from our past events and activities.",
      link: "/gallery",
      linkText: "Browse Gallery",
      gradient: "from-tech-purple to-tech-violet"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Newsletter",
      description: "Read our latest tech articles, tutorials, and community updates.",
      link: "/newsletter",
      linkText: "Read Articles",
      gradient: "from-tech-pink to-tech-fuchsia"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Join Our Community",
      description: "Become part of our growing community of tech enthusiasts.",
      link: "/members",
      linkText: "Meet the Team",
      gradient: "from-tech-cyan to-tech-teal"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading animate-gradient">
            Discover What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay connected with our vibrant tech community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative bg-card/50 backdrop-blur-sm border-2 border-border/50 card-hover overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              
              <CardHeader>
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-xl w-14 h-14 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-tech-purple transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <NavLink 
                  to={feature.link}
                  className={`inline-flex items-center gap-2 font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-300 relative z-10`}
                >
                  {feature.linkText} 
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
