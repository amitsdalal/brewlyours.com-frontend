
import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-coffee-cream">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <h2 className="h2 text-coffee-dark mb-4">Our Story</h2>
          <div className="h-1 w-20 bg-coffee-medium mx-auto"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={200} className="order-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-coffee-dark/80 mb-4">
                Brewlyours was born from a simple yet profound belief: that everyone deserves a moment of coffee perfection, regardless of how busy life gets.
              </p>
              <p className="text-lg text-coffee-dark/80 mb-4">
                Our journey began in the coffee fields of South India, where we discovered that instant coffee doesn't have to mean instant compromise. We partnered with local farmers who share our passion for quality and sustainability.
              </p>
              <p className="text-lg text-coffee-dark/80 font-medium">
                Every cup of Brewlyours is a testament to our commitment to excellence – because when something is truly yours, you make it perfect.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-coffee-medium/10 -z-10 transform -rotate-3"></div>
              <div className="absolute -inset-4 rounded-xl bg-coffee-accent/10 -z-20 transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800" 
                alt="Coffee plantation" 
                className="rounded-lg shadow-xl w-full aspect-video object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
