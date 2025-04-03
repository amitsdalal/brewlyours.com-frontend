
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Check } from 'lucide-react';

const ProductHighlights: React.FC = () => {
  const benefits = [
    { title: "Freshly Roasted", description: "We roast in small batches to ensure peak flavor and freshness" },
    { title: "Instant Brew", description: "Perfect coffee in seconds, anytime and anywhere" },
    { title: "Natural Energy Boost", description: "Carefully processed to preserve natural caffeine and antioxidants" },
    { title: "Rich Aroma", description: "The enticing scent of freshly brewed coffee in every cup" },
    { title: "No Additives", description: "Pure coffee with no artificial ingredients or preservatives" },
    { title: "Sustainable Sourcing", description: "Supporting ethical farming practices and communities" }
  ];

  return (
    <section id="product" className="bg-coffee-light section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="h2 text-center text-coffee-dark mb-4">Premium Instant Coffee</h2>
          <p className="subtitle text-center max-w-2xl mx-auto mb-16">
            Experience the rich, aromatic flavor of our signature product
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <AnimatedSection delay={200}>
            <div className="rounded-lg overflow-hidden h-[500px] shadow-xl">
              <div className="h-full bg-[url('/assets/product.jpg')] bg-cover bg-center"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-coffee-cream/50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="bg-coffee-accent rounded-full p-1 mt-1">
                        <Check size={16} className="text-coffee-dark" />
                      </span>
                      <div>
                        <h4 className="font-bold text-coffee-dark mb-1">{benefit.title}</h4>
                        <p className="text-sm text-coffee-dark/70">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
