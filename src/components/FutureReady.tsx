
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Coffee } from 'lucide-react';

const FutureReady: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-coffee-dark via-[#3a2a24] to-coffee-dark text-coffee-cream section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coffee-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coffee-light rounded-full blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-coffee-accent/20 to-coffee-light/20 p-4 rounded-full mb-6">
              <Coffee size={48} className="text-coffee-accent animate-float" />
            </div>
            <h2 className="h2 mb-6 font-serif">More Brews Coming Soon</h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="inline-block w-16 h-0.5 bg-gradient-to-r from-transparent to-coffee-accent"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-coffee-accent"></span>
              <span className="inline-block w-16 h-0.5 bg-gradient-to-l from-transparent to-coffee-accent"></span>
            </div>
            <p className="subtitle text-coffee-beige mb-8 max-w-2xl text-lg">
              We're constantly experimenting with new flavors and formulations to bring you the best coffee experience. Stay tuned for our upcoming product launches.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
              <AnimatedSection delay={200} className="bg-gradient-to-br from-coffee-dark/70 to-coffee-dark/50 border-2 border-coffee-accent/30 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-coffee-accent/20 hover:border-coffee-accent/60 transition-all duration-300 transform hover:scale-105 group">
                <h4 className="h4 text-coffee-accent mb-3 font-serif group-hover:text-coffee-light transition-colors">Flavored Series</h4>
                <p className="text-coffee-beige/80 text-sm leading-relaxed">
                  Indulge in our upcoming range of naturally flavored instant coffees
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300} className="bg-gradient-to-br from-coffee-dark/70 to-coffee-dark/50 border-2 border-coffee-accent/30 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-coffee-accent/20 hover:border-coffee-accent/60 transition-all duration-300 transform hover:scale-105 group">
                <h4 className="h4 text-coffee-accent mb-3 font-serif group-hover:text-coffee-light transition-colors">Cold Brew Formula</h4>
                <p className="text-coffee-beige/80 text-sm leading-relaxed">
                  Perfect for creating refreshing cold coffee drinks in seconds
                </p>
              </AnimatedSection>

              <AnimatedSection delay={400} className="bg-gradient-to-br from-coffee-dark/70 to-coffee-dark/50 border-2 border-coffee-accent/30 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-coffee-accent/20 hover:border-coffee-accent/60 transition-all duration-300 transform hover:scale-105 group">
                <h4 className="h4 text-coffee-accent mb-3 font-serif group-hover:text-coffee-light transition-colors">Specialty Blends</h4>
                <p className="text-coffee-beige/80 text-sm leading-relaxed">
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
