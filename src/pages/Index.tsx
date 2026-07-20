
import Layout from "../components/Layout";
import HeroSection from "../components/home/HeroSection";
import EventCarousel from "../components/home/EventCarousel";
import FeaturesSection from "../components/home/FeaturesSection";
import FocusAreasSection from "../components/home/FocusAreasSection";
import CallToAction from "../components/home/CallToAction";
import ContactSection from "../components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-heading mb-4">What's Next</h2>
            <p className="text-muted-foreground text-lg">Stay tuned for our upcoming events and workshops</p>
          </div>
          <EventCarousel />
        </div>
      </section>
      
      <FeaturesSection />
      <FocusAreasSection />
      <ContactSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
