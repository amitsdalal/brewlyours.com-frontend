
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center overflow-hidden bg-coffee-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark via-coffee-dark/90 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1920"
          alt="Coffee beans background"
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>
      
      <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-white space-y-6">
          <h1 className="h1 animate-fade-in">
            <span className="block text-coffee-beige">Premium Coffee</span>
            <span className="block italic text-coffee-cream">Truly Yours</span>
          </h1>
          <p className="subtitle max-w-md text-coffee-beige/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover the perfect blend of convenience and quality with our premium instant coffee, crafted for those who refuse to compromise.
          </p>
          <div className="flex gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-coffee-accent text-coffee-dark hover:bg-coffee-light">
              <a 
                href="https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Buy on Amazon
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-coffee-accent/20 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=600" 
              alt="Brewlyours Coffee Product" 
              className="relative rounded-2xl shadow-2xl shadow-coffee-dark/40 max-w-[280px] md:max-w-[340px] aspect-[3/4] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
