
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <AnimatedBackground />
      <NavBar />
      <main className="flex-grow pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
