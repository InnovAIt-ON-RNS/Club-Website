import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Code, Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 pt-16 pb-8 mt-20 border-t border-border/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-purple to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start mb-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <button onClick={scrollToTop} className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <Code className="h-8 w-8 text-tech-purple group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-tech-purple/20 blur-xl group-hover:bg-tech-purple/40 transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink bg-clip-text text-transparent">
                InnovAIt-ON
              </span>
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A community of tech enthusiasts exploring cutting-edge technologies, learning together, and building amazing projects at RNSIT.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/innovaiton_rnsit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="group relative p-2 rounded-lg bg-muted/50 hover:bg-tech-pink/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-tech-pink transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/company/innovaiton-rnsit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="group relative p-2 rounded-lg bg-muted/50 hover:bg-tech-blue/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-tech-blue transition-colors" />
              </a>
              <a 
                href="mailto:innovaiton.aiml@rnsit.ac.in" 
                aria-label="Email"
                className="group relative p-2 rounded-lg bg-muted/50 hover:bg-tech-purple/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-tech-purple transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/events', label: 'Events' },
                { to: '/gallery', label: 'Gallery' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to}
                    onClick={scrollToTop}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-tech-purple transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-bold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-3">
              {[
                { to: '/newsletter', label: 'Newsletter' },
                { to: '/members', label: 'Team' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to}
                    onClick={scrollToTop}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-tech-purple transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NavLink>
                </li>
              ))}
              <li>
                <button 
                  onClick={handleContactClick}
                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-tech-purple transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Contact Us
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="text-base font-bold mb-4 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Follow us on social media for the latest updates, events, and tech news.
            </p>
            <button 
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink text-white text-sm font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-tech-purple/50"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} InnovAIt-ON Club, RNSIT. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="text-xs">Empowering Innovation</span>
              <span className="text-tech-purple">•</span>
              <span className="text-xs">Building Tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
