
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const ProductHighlights: React.FC = () => {
  const commonBenefits = [
    { title: "Freshly Roasted", description: "We roast in small batches to ensure peak flavor and freshness" },
    { title: "Instant Brew", description: "Perfect coffee in seconds, anytime and anywhere" },
    { title: "Natural Energy Boost", description: "Carefully processed to preserve natural caffeine and antioxidants" },
    { title: "Rich Aroma", description: "The enticing scent of freshly brewed coffee in every cup" },
    { title: "No Additives", description: "Pure coffee with no artificial ingredients or preservatives" },
    { title: "Sustainable Sourcing", description: "Supporting ethical farming practices and communities" }
  ];

  const products = [
    {
      id: "original",
      title: "Brewlyours Instant Coffee",
      tagline: "Freshly Roasted | Rich Flavor | Smooth Aroma | Ideal for Every Coffee Lover | Energizing Morning Brew",
      image: "/assets/product.jpg",
      link: "https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
    },
    {
      id: "classic",
      title: "Brewlyours Classic",
      tagline: "Classic Instant Coffee | Rich & Aromatic | Smooth & Balanced Flavor | Quick & Easy to Prepare",
      image: "/assets/product-classic.jpg",
      link: "https://www.amazon.in/dp/B0F3HVQZP9"
    }
  ];

  return (
    <section id="product" className="bg-coffee-light section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="h2 text-center text-coffee-dark mb-4">Our Premium Collection</h2>
          <p className="subtitle text-center max-w-2xl mx-auto mb-16">
            Experience the rich, aromatic flavor of our signature products
          </p>
        </AnimatedSection>

        {products.map((product, index) => (
          <div 
            key={product.id}
            className={`mb-24 ${index !== products.length - 1 ? 'pb-16 border-b border-coffee-dark/10' : ''}`}
          >
            <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              <AnimatedSection delay={200}>
                <div className={`rounded-lg overflow-hidden h-[500px] shadow-xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}></div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="h3 text-coffee-dark">{product.title}</h3>
                  <p className="text-coffee-dark/80 text-lg">{product.tagline}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {commonBenefits.slice(0, 4).map((benefit, i) => (
                      <div key={i} className="bg-coffee-cream/50 p-4 rounded-lg">
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
                  
                  <Button 
                    size="lg" 
                    className="bg-coffee-accent hover:bg-coffee-light text-coffee-dark font-medium mt-6 px-8 py-6"
                  >
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Buy on Amazon
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlights;
