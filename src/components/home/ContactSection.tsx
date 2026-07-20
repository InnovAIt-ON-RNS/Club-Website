import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading animate-gradient">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to get involved? Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="card-hover group bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto bg-gradient-to-br from-tech-purple to-tech-violet w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="h-6 w-6" />
              </div>
              <CardTitle className="group-hover:text-tech-purple transition-colors">Email Us</CardTitle>
              <CardDescription>We'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <a 
                href="mailto:innovaiton.aiml@rnsit.ac.in" 
                className="text-tech-purple hover:text-tech-violet transition-colors font-medium break-all"
              >
                innovaiton.aiml@rnsit.ac.in
              </a>
            </CardContent>
          </Card>

          <Card className="card-hover group bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto bg-gradient-to-br from-tech-blue to-tech-cyan w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle className="group-hover:text-tech-blue transition-colors">Visit Us</CardTitle>
              <CardDescription>Our campus location</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                InnovAIt-ON Club<br />
                AIML Block 3rd Floor<br />
                RNS Institute of Technology<br />
                Bengaluru, Karnataka
              </address>
              <a 
                href="https://maps.app.goo.gl/wKM71Nw3nYX684ydA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-tech-blue hover:text-tech-cyan transition-colors text-sm font-medium mt-3"
              >
                View on Map →
              </a>
            </CardContent>
          </Card>

          <Card className="card-hover group bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto bg-gradient-to-br from-tech-pink to-tech-fuchsia w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="h-6 w-6" />
              </div>
              <CardTitle className="group-hover:text-tech-pink transition-colors">Call Us</CardTitle>
              <CardDescription>Club Coordinators</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div>
                <p className="font-medium text-sm">Sujal S</p>
                <a 
                  href="tel:+918310630937" 
                  className="text-tech-pink hover:text-tech-fuchsia transition-colors font-medium"
                >
                  +91 83106 30937
                </a>
              </div>
              <div>
                <p className="font-medium text-sm">Syed Javed M</p>
                <a 
                  href="tel:+917899278471" 
                  className="text-tech-pink hover:text-tech-fuchsia transition-colors font-medium"
                >
                  +91 78992 78471
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;