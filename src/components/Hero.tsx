
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee-dark" id="hero" aria-label="Hero Section">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/80 to-coffee-dark/95"></div>
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-40" 
             role="img" 
             aria-label="Background image of coffee beans and coffee making">
        </div>
      </div>
      
      <div className="container-wide relative z-10 flex flex-col items-center justify-center text-center py-16">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <AnimatedSection>
          <h1 className="text-coffee-cream font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Brewlyours – <span className="text-coffee-accent">Truly Yours</span>
          </h1>
          <h2 className="text-coffee-beige text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Premium Instant Coffee Experience
          </h2>
          
          <div className="bg-coffee-dark/40 backdrop-blur-sm p-6 rounded-lg max-w-3xl mx-auto mb-10">
            <h2 className="text-coffee-accent font-serif text-2xl font-semibold mb-4">Exceptional Coffee, Instant Convenience</h2>
            <p className="text-coffee-beige mb-4 leading-relaxed text-balance">
              At Brewlyours, we've revolutionized instant coffee by preserving the complex flavors and aromas that coffee enthusiasts crave. Our proprietary freeze-drying process captures the essence of freshly brewed coffee, delivering a rich, full-bodied experience in seconds.
            </p>
            <p className="text-coffee-beige mb-4 leading-relaxed text-balance">
              Each cup of Brewlyours brings you the perfect balance of convenience and quality – meticulously sourced beans, expertly roasted, and carefully processed to maintain their natural characteristics. Experience the pinnacle of flavor preservation with our premium instant coffee varieties.
            </p>
            <p className="text-coffee-beige leading-relaxed text-balance">
              Whether you're at home, traveling, or in the great outdoors, Brewlyours ensures you never compromise on your coffee experience. Truly yours – in every moment, anywhere.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-coffee-accent hover:bg-coffee-light text-coffee-dark font-medium text-lg px-8 py-6"
            >
              <a 
                href="#product"
                className="flex items-center gap-2"
                aria-label="Explore our coffee products"
              >
                Explore Our Products
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-coffee-accent text-coffee-cream bg-coffee-dark/50 hover:bg-coffee-dark/70 font-medium text-lg px-8 py-6"
            >
              <a 
                href="#about"
                className="flex items-center gap-2"
                aria-label="Learn about our coffee story"
              >
                Our Story
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
