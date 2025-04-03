
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee-dark" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/80 to-coffee-dark/95"></div>
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-40"></div>
      </div>
      
      <div className="container-wide relative z-10 flex flex-col items-center justify-center text-center py-16">
        <AnimatedSection>
          <h1 className="text-coffee-cream font-serif text-5xl md:text-7xl font-bold mb-6">
            Truly <span className="text-coffee-accent">Yours</span>
          </h1>
          <p className="text-coffee-beige text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            Premium instant coffee crafted for those who value quality in every cup
          </p>
          
          <Button 
            size="lg" 
            className="bg-coffee-accent hover:bg-coffee-light text-coffee-dark font-medium text-lg px-8 py-6"
          >
            <a 
              href="https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Buy on Amazon
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
