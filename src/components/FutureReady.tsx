
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Coffee } from 'lucide-react';

const FutureReady: React.FC = () => {
  return (
    <section className="bg-coffee-dark text-coffee-cream section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
            <Coffee size={48} className="text-coffee-accent mb-6" />
            <h2 className="h2 mb-6">More Brews Coming Soon</h2>
            <p className="subtitle text-coffee-beige mb-8 max-w-2xl">
              We're constantly experimenting with new flavors and formulations to bring you the best coffee experience. Stay tuned for our upcoming product launches.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
              <AnimatedSection delay={200} className="bg-coffee-dark/50 border border-coffee-beige/20 p-6 rounded-lg">
                <h4 className="h4 text-coffee-accent mb-3">Flavored Series</h4>
                <p className="text-coffee-beige/70 text-sm">
                  Indulge in our upcoming range of naturally flavored instant coffees
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={300} className="bg-coffee-dark/50 border border-coffee-beige/20 p-6 rounded-lg">
                <h4 className="h4 text-coffee-accent mb-3">Cold Brew Formula</h4>
                <p className="text-coffee-beige/70 text-sm">
                  Perfect for creating refreshing cold coffee drinks in seconds
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={400} className="bg-coffee-dark/50 border border-coffee-beige/20 p-6 rounded-lg">
                <h4 className="h4 text-coffee-accent mb-3">Specialty Blends</h4>
                <p className="text-coffee-beige/70 text-sm">
                  Limited edition single-origin and artisan coffee blends
                </p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FutureReady;
