
import React from 'react';
import AnimatedSection from './AnimatedSection';

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
              <div className="h-full bg-[url('/assets/about-us.jpg')] bg-cover bg-center"></div>
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
              <p className="font-medium text-coffee-dark italic">
                "Because your coffee moment should be as unique as you are."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
