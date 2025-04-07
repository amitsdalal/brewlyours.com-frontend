
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import ProductHighlights from '@/components/ProductHighlights';
import FutureReady from '@/components/FutureReady';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Product', href: '#product' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-coffee-dark/95 backdrop-blur-sm shadow-md' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container-wide flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Brewlyours Logo" 
              className={`h-8 ${isScrolled ? '' : 'filter brightness-0 invert'}`} 
            />
            {/* Text removed as requested */}
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <a 
                key={i}
                href={item.href} 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-coffee-beige/80 hover:text-coffee-accent' 
                    : 'text-white hover:text-coffee-accent'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              size="sm" 
              className="bg-coffee-accent text-coffee-dark hover:bg-coffee-light"
            >
              <a 
                href="https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-coffee-dark/95 backdrop-blur-sm py-4">
            <div className="container-wide flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <a 
                  key={i}
                  href={item.href} 
                  className="text-coffee-beige/80 hover:text-coffee-accent py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                size="sm" 
                className="bg-coffee-accent text-coffee-dark hover:bg-coffee-light w-full mt-2"
              >
                <a 
                  href="https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main>
        <Hero />
        <AboutUs />
        <ProductHighlights />
        <FutureReady />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
