
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { ArrowRight, Coffee } from 'lucide-react';

const FutureReady: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/90 to-coffee-dark z-10" />
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1920"
          alt="Coffee shop background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container-wide relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center text-white">
          <div className="bg-coffee-accent text-coffee-dark p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-8">
            <Coffee size={28} />
          </div>
          <h2 className="h2 text-coffee-cream mb-6">More Brews Coming Soon</h2>
          <p className="subtitle text-coffee-beige/90 max-w-2xl mx-auto mb-8">
            We're brewing up an exciting range of new products to delight your taste buds. 
            Our team is hard at work crafting flavored varieties, single-origin collections, 
            and eco-friendly packaging options.
          </p>
          <Button className="bg-coffee-accent text-coffee-dark hover:bg-coffee-light group">
            <span className="flex items-center gap-2">
              Join the Waitlist
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {['Flavored Collection', 'Single Origin Series', 'Cold Brew Packs', 'Gift Boxes'].map((item, index) => (
            <AnimatedSection key={index} delay={200 + index * 100} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col items-center justify-center border border-white/10 hover:border-coffee-accent/50 transition-colors">
                <p className="font-serif text-white font-medium text-lg">{item}</p>
                <span className="text-coffee-accent/80 text-sm mt-2">Coming Soon</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureReady;
