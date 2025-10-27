
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-coffee-cream via-white to-coffee-cream section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-coffee-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-coffee-medium rounded-full blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection>
          <h2 className="h2 text-center text-coffee-dark mb-4 font-serif">Our Story</h2>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="inline-block w-16 h-0.5 bg-gradient-to-r from-transparent to-coffee-accent"></span>
            <span className="inline-block w-2 h-2 rounded-full bg-coffee-accent"></span>
            <span className="inline-block w-16 h-0.5 bg-gradient-to-l from-transparent to-coffee-accent"></span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={200}>
            <div className="rounded-2xl overflow-hidden h-[400px] shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-coffee-accent/30 group">
              <picture>
                <source srcSet="/assets/about-us.webp" type="image/webp" />
                <source srcSet="/assets/about-us.jpg" type="image/jpeg" />
                <div
                  className="h-full bg-[url('/assets/about-us.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  role="img"
                  aria-label="Coffee plantation with workers carefully selecting premium coffee beans"
                ></div>
              </picture>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="space-y-6">
              <h3 className="h3 text-coffee-dark font-serif flex items-center gap-2">
                <span className="inline-block w-8 h-0.5 bg-coffee-accent"></span>
                Brewed with Passion
              </h3>
              <p className="text-coffee-dark/80 leading-relaxed text-base">
                Brewlyours was born from a simple belief: everyone deserves an exceptional coffee experience, regardless of how busy their day might be. Our journey began in the coffee plantations of Southern India, where we discovered that instant coffee could be just as rich and satisfying as freshly brewed.
              </p>
              <p className="text-coffee-dark/80 leading-relaxed text-base">
                We meticulously select premium Arabica and Robusta beans, roast them to perfection, and transform them into an instant coffee that maintains the complex flavors and aromas of a café-quality brew. Each cup of Brewlyours is crafted to be truly yours – a moment of indulgence in your daily routine.
              </p>

              <h3 className="h3 text-coffee-dark mt-8 font-serif flex items-center gap-2">
                <span className="inline-block w-8 h-0.5 bg-coffee-accent"></span>
                The Quality Difference
              </h3>
              <p className="text-coffee-dark/80 leading-relaxed text-base">
                What sets Brewlyours apart is our dedication to preserving the essence of freshly roasted coffee. Our proprietary freeze-drying process locks in flavors that conventional instant coffees lose. From the rich aroma that greets you upon opening the package to the smooth finish that lingers after your last sip, every aspect of Brewlyours is designed to deliver a premium coffee experience.
              </p>
              <p className="text-coffee-dark/80 leading-relaxed text-base">
                We partner directly with farmers to ensure ethical sourcing practices while securing the highest quality beans. This farm-to-cup approach not only supports sustainable agriculture but also guarantees that only the finest ingredients make it into your Brewlyours coffee.
              </p>

              <div className="bg-gradient-to-r from-coffee-accent/10 to-coffee-light/10 border-l-4 border-coffee-accent p-5 rounded-r-lg mt-6">
                <p className="font-semibold text-coffee-dark italic text-lg">
                  "Because your coffee moment should be as unique as you are."
                </p>
              </div>

              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-coffee-dark to-coffee-medium hover:from-coffee-medium hover:to-coffee-dark text-coffee-cream shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-6"
                >
                  <a href="#product" aria-label="Discover our premium coffee products">
                    Discover Our Products
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
