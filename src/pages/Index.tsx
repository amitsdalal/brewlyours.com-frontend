import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import ProductHighlights from '@/components/ProductHighlights';
import FutureReady from '@/components/FutureReady';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowUp } from 'lucide-react';

const Index: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const [showBackToTop, setShowBackToTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show back to top button after scrolling down 500px
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Implement smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu when clicking an anchor link
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Product', href: '#product' },
    { label: 'Contact', href: '#contact' },
  ];

  // Sticky buy button for mobile
  const [showStickyButton, setShowStickyButton] = React.useState(false);
  
  useEffect(() => {
    if (!isMobile) return;
    
    const handleScrollForButton = () => {
      const productSection = document.getElementById('product');
      if (productSection) {
        const rect = productSection.getBoundingClientRect();
        if (rect.top < 0 && rect.bottom > window.innerHeight) {
          setShowStickyButton(true);
        } else {
          setShowStickyButton(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollForButton);
    return () => window.removeEventListener('scroll', handleScrollForButton);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-coffee-dark/95 backdrop-blur-sm shadow-md' 
            : 'py-5 bg-transparent'
        }`}
        role="banner"
      >
        <div className="container-wide flex justify-between items-center">
          <a href="#" className="flex items-center gap-2" aria-label="Brewlyours - Home">
            <img 
              src="/logo.png" 
              alt="Brewlyours Logo" 
              className="h-8 w-auto" 
              width="32"
              height="32"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main Navigation">
            {navItems.map((item, i) => (
              <a 
                key={i}
                href={item.href} 
                className={`transition-colors text-lg py-2 px-3 ${
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
              className="bg-coffee-accent text-coffee-dark hover:bg-coffee-light text-base py-2 px-6"
            >
              <a 
                href="https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buy Brewlyours Coffee on Amazon"
              >
                Buy Now
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-3"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
          <div className="md:hidden bg-coffee-dark/95 backdrop-blur-sm py-4" id="mobile-menu">
            <div className="container-wide flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <a 
                  key={i}
                  href={item.href} 
                  className="text-coffee-beige/80 hover:text-coffee-accent py-3 px-4 text-lg transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                size="sm" 
                className="bg-coffee-accent text-coffee-dark hover:bg-coffee-light w-full mt-2 py-3 text-base"
              >
                <a 
                  href="https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  Buy Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main role="main">
        <Hero />
        <AboutUs />
        <ProductHighlights />
        <FutureReady />
        <ContactSection />
      </main>

      {/* Sticky Buy Now button for mobile */}
      {isMobile && showStickyButton && (
        <div className="fixed bottom-5 left-0 right-0 z-40 px-4 flex justify-center">
          <Button 
            size="lg" 
            className="bg-coffee-accent hover:bg-coffee-light text-coffee-dark font-medium shadow-lg w-full max-w-xs py-4 text-base"
          >
            <a 
              href="https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              Buy on Amazon
            </a>
          </Button>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-5 z-40 bg-coffee-accent hover:bg-coffee-light text-coffee-dark p-3 rounded-full shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Index;
