
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-coffee-dark via-[#3a2a24] to-coffee-dark dark:bg-coffee-dark/80" id="hero" aria-label="Hero Section">
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/70 via-coffee-dark/85 to-coffee-dark dark:from-coffee-dark/90 dark:to-coffee-dark"></div>
        <picture>
          <source srcSet="/assets/hero-bg.webp" type="image/webp" />
          <source srcSet="/assets/hero-bg.jpg" type="image/jpeg" />
          <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-50 dark:opacity-30 animate-[pulse_8s_ease-in-out_infinite]"
               role="img"
               aria-label="Background image of coffee beans and coffee making">
          </div>
        </picture>

        {/* Coffee steam animation overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-1/4 w-32 h-64 bg-gradient-to-t from-coffee-accent/40 to-transparent blur-3xl animate-[steam1_6s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-64 bg-gradient-to-t from-coffee-accent/30 to-transparent blur-3xl animate-[steam2_7s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 left-1/2 w-32 h-64 bg-gradient-to-t from-coffee-light/30 to-transparent blur-3xl animate-[steam3_8s_ease-in-out_infinite]"></div>
        </div>

        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')]"></div>
      </div>
      
      <div className="container-wide relative z-10 flex flex-col items-center justify-center text-center py-16">
        <AnimatedSection>
          <h1 className="text-coffee-cream dark:text-coffee-cream font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            Brewlyours – <span className="text-coffee-accent dark:text-coffee-accent bg-gradient-to-r from-coffee-accent to-coffee-light bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">Truly Yours</span>
          </h1>
          <h2 className="text-coffee-beige dark:text-coffee-beige text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-lg">
            Premium Instant Coffee Experience
          </h2>

          <div className="bg-gradient-to-br from-coffee-dark/50 via-coffee-dark/40 to-coffee-dark/50 dark:bg-coffee-dark/60 backdrop-blur-md p-8 rounded-2xl max-w-3xl mx-auto mb-10 shadow-2xl border border-coffee-accent/20 hover:border-coffee-accent/40 transition-all duration-500 hover:shadow-coffee-accent/20">
            <h2 className="text-coffee-accent dark:text-coffee-accent font-serif text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-coffee-accent/50"></span>
              Exceptional Coffee, Instant Convenience
              <span className="inline-block w-8 h-0.5 bg-coffee-accent/50"></span>
            </h2>
            <p className="text-coffee-beige dark:text-coffee-beige mb-4 leading-relaxed text-balance text-base md:text-lg">
              At Brewlyours, we've revolutionized instant coffee by preserving the complex flavors and aromas that coffee enthusiasts crave. Our proprietary freeze-drying process captures the essence of freshly brewed coffee, delivering a rich, full-bodied experience in seconds.
            </p>
            <p className="text-coffee-beige dark:text-coffee-beige mb-4 leading-relaxed text-balance text-base md:text-lg">
              Each cup of Brewlyours brings you the perfect balance of convenience and quality – meticulously sourced beans, expertly roasted, and carefully processed to maintain their natural characteristics. Experience the pinnacle of flavor preservation with our premium instant coffee varieties.
            </p>
            <p className="text-coffee-beige dark:text-coffee-beige leading-relaxed text-balance text-base md:text-lg">
              Whether you're at home, traveling, or in the great outdoors, Brewlyours ensures you never compromise on your coffee experience. Truly yours – in every moment, anywhere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-coffee-accent to-coffee-light hover:from-coffee-light hover:to-coffee-accent text-coffee-dark font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:shadow-coffee-accent/30 transition-all duration-300 transform hover:scale-105"
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
              className="border-2 border-coffee-accent text-coffee-cream bg-coffee-dark/50 hover:bg-coffee-accent hover:text-coffee-dark font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
