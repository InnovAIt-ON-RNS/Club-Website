import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-pink/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-heading animate-gradient text-glow">
                Ideate.
                <br />
                Innovate.
                <br />
                Ignite.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg lg:max-w-md mx-auto lg:mx-0 leading-relaxed">
              Our project-based club is a dynamic community of passionate individuals dedicated to bring ideas to life. Dive into collaborative projects spanning diverse fields from cutting-edge technology to sustainable design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink hover:opacity-90 px-8 text-base font-semibold shadow-lg hover:shadow-tech-purple/50 transition-all duration-300 group" 
                onClick={scrollToContact}
              >
                Join the Club 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-tech-purple/50 hover:bg-tech-purple/10 px-8 text-base font-semibold"
                onClick={() => navigate('/events')}
              >
                Explore Events
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative mb-8 lg:mb-0">
            <div className="relative group">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
              
              <img 
                src="./images/logo.png" 
                alt="Tech Club" 
                className="relative rounded-2xl mx-auto animate-float drop-shadow-2xl"
                style={{ maxWidth: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;