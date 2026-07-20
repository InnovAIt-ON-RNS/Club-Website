import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    // If clicking on the current page, scroll to top
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/members', label: 'Team' },
    { to: '/newsletter', label: 'Newsletter' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/70 backdrop-blur-xl shadow-lg border-b border-border/50' 
          : 'bg-background/30 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center space-x-2 group">
          <div className="relative">
            <Code className="h-8 w-8 text-tech-purple transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <div className="absolute inset-0 bg-tech-purple/20 blur-xl group-hover:bg-tech-purple/30 transition-all duration-300 -z-10" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink bg-clip-text text-transparent animate-gradient">
            InnovAIt-ON
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={(e) => handleNavClick(e, link.to)}
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                  isActive 
                    ? 'text-tech-purple' 
                    : 'text-foreground/80 hover:text-foreground'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink transition-all duration-300 ${
                    isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`} />
                </>
              )}
            </NavLink>
          ))}
          <button
            onClick={handleContactClick}
            className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group text-foreground/80 hover:text-foreground"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink transition-all duration-300 w-0 group-hover:w-3/4" />
          </button>
          <div className="ml-2 pl-2 border-l border-border/50">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-tech-purple rounded-lg transition-colors hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={({ isActive }) => 
                  `px-4 py-2.5 text-sm font-medium hover:bg-muted/50 rounded-lg transition-all duration-200 ${
                    isActive ? 'text-tech-purple bg-muted' : 'text-foreground/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={handleContactClick}
              className="px-4 py-2.5 text-sm font-medium hover:bg-muted/50 rounded-lg transition-all duration-200 text-foreground/80 text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
