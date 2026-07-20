
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from 'lucide-react';

const CallToAction = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-purple/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass relative rounded-3xl p-8 md:p-16 overflow-hidden border-2 border-tech-purple/20 shadow-2xl">
          {/* Animated top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink"></div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-tech-purple/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-tech-blue/20 to-transparent rounded-tr-full"></div>
          
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Icon badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-tech-purple/30 mb-2">
                <Zap className="w-4 h-4 text-tech-purple animate-pulse" />
                <span className="text-sm font-medium">Join the Movement</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-heading animate-gradient">
                  Ready to Join the Tech Revolution?
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Whether you're a coding expert or just starting out, our community welcomes all tech enthusiasts. Join us to learn, build, and grow together.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink hover:opacity-90 px-8 text-base font-semibold shadow-lg hover:shadow-tech-purple/50 transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;