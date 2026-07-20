import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from 'lucide-react';

const EventCarousel = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl glass border-2 border-tech-purple/20 h-[400px] md:h-[450px] flex items-center justify-center group">
      {/* Animated top gradient line */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink h-1"></div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="text-center px-6 relative z-10 space-y-6">
        {/* Animated icon */}
        <div className="relative inline-block">
          <Calendar className="mx-auto text-tech-purple h-16 w-16 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-tech-purple/20 blur-2xl animate-pulse-slow"></div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-heading animate-gradient">
            Coming Soon !!!
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Stay tuned for exciting upcoming events. We're working on something amazing for you!
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <Sparkles className="w-5 h-5 text-tech-blue animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">Events will be announced soon</span>
          <Sparkles className="w-5 h-5 text-tech-pink animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-tech-purple/10 to-transparent rounded-tl-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-tech-blue/10 to-transparent rounded-br-full"></div>
    </div>
  );
};

export default EventCarousel;