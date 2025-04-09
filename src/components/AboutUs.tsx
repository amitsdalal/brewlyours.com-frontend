
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-coffee-cream section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="h2 text-center text-coffee-dark mb-12">Our Story</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection delay={200}>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <div 
                className="h-full bg-[url('/assets/about-us.jpg')] bg-cover bg-center"
                role="img" 
                aria-label="Coffee plantation with workers carefully selecting premium coffee beans"
                loading="lazy"
              ></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="space-y-6">
              <h3 className="h3 text-coffee-dark">Brewed with Passion</h3>
              <p className="text-coffee-dark/80 leading-relaxed">
                Brewlyours was born from a simple belief: everyone deserves an exceptional coffee experience, regardless of how busy their day might be. Our journey began in the coffee plantations of Southern India, where we discovered that instant coffee could be just as rich and satisfying as freshly brewed.
              </p>
              <p className="text-coffee-dark/80 leading-relaxed">
                We meticulously select premium Arabica and Robusta beans, roast them to perfection, and transform them into an instant coffee that maintains the complex flavors and aromas of a café-quality brew. Each cup of Brewlyours is crafted to be truly yours – a moment of indulgence in your daily routine.
              </p>
              
              <h3 className="h3 text-coffee-dark mt-8">The Quality Difference</h3>
              <p className="text-coffee-dark/80 leading-relaxed">
                What sets Brewlyours apart is our dedication to preserving the essence of freshly roasted coffee. Our proprietary freeze-drying process locks in flavors that conventional instant coffees lose. From the rich aroma that greets you upon opening the package to the smooth finish that lingers after your last sip, every aspect of Brewlyours is designed to deliver a premium coffee experience.
              </p>
              <p className="text-coffee-dark/80 leading-relaxed">
                We partner directly with farmers to ensure ethical sourcing practices while securing the highest quality beans. This farm-to-cup approach not only supports sustainable agriculture but also guarantees that only the finest ingredients make it into your Brewlyours coffee.
              </p>
              
              <p className="font-medium text-coffee-dark italic mt-6">
                "Because your coffee moment should be as unique as you are."
              </p>
              
              <div className="mt-8">
                <Button 
                  className="bg-coffee-dark hover:bg-coffee-dark/80 text-coffee-cream"
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
