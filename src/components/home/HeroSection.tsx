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
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300/90 max-w-lg lg:max-w-md mx-auto lg:mx-0 leading-relaxed font-medium backdrop-blur-sm">
              Transform your ideas into <span className="text-transparent bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text font-semibold">cutting-edge projects</span>. Join a community of innovators building the future through <span className="text-transparent bg-gradient-to-r from-tech-purple to-tech-pink bg-clip-text font-semibold">collaborative tech</span>, hands-on workshops, and <span className="text-gray-900 dark:text-white font-semibold">real-world impact</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink hover:shadow-2xl hover:shadow-tech-purple/60 px-8 py-6 text-base font-bold transition-all duration-300 group overflow-hidden rounded-xl border-0"
                onClick={scrollToContact}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10 flex items-center">
                  Join the Club 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="relative border-2 border-tech-purple/50 hover:border-tech-purple bg-transparent hover:bg-tech-purple/10 px-8 py-6 text-base font-bold transition-all duration-300 group rounded-xl overflow-hidden backdrop-blur-sm"
                onClick={() => navigate('/events')}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/0 via-tech-purple/20 to-tech-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10 bg-gradient-to-r from-gray-800 via-tech-purple to-tech-pink bg-clip-text group-hover:text-transparent transition-all duration-300 dark:from-white">
                  Explore Events
                </span>
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