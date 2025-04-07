
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface ProductImage {
  src: string;
  alt: string;
}

interface Product {
  id: string;
  title: string;
  tagline: string;
  images: ProductImage[];
  link: string;
}

const ProductHighlights: React.FC = () => {
  const commonBenefits = [
    { title: "Freshly Roasted", description: "We roast in small batches to ensure peak flavor and freshness" },
    { title: "Instant Brew", description: "Perfect coffee in seconds, anytime and anywhere" },
    { title: "Natural Energy Boost", description: "Carefully processed to preserve natural caffeine and antioxidants" },
    { title: "Rich Aroma", description: "The enticing scent of freshly brewed coffee in every cup" },
    { title: "No Additives", description: "Pure coffee with no artificial ingredients or preservatives" },
    { title: "Sustainable Sourcing", description: "Supporting ethical farming practices and communities" }
  ];

  const products: Product[] = [
    {
      id: "original",
      title: "Brewlyours Instant Coffee",
      tagline: "Freshly Roasted | Rich Flavor | Smooth Aroma | Ideal for Every Coffee Lover | Energizing Morning Brew",
      images: [
        { src: "/assets/product.jpg", alt: "Brewlyours Instant Coffee" },
        { src: "/assets/product-old.jpg", alt: "Brewlyours Instant Coffee Package" }
      ],
      link: "https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
    },
    {
      id: "classic",
      title: "Brewlyours Classic",
      tagline: "Classic Instant Coffee | Rich & Aromatic | Smooth & Balanced Flavor | Quick & Easy to Prepare",
      images: [
        { src: "/assets/product-classic.jpg", alt: "Brewlyours Classic Coffee" },
        { src: "/lovable-uploads/0abdeb94-b549-4524-b46e-7f20500e9a38.png", alt: "Brewlyours Logo" }
      ],
      link: "https://www.amazon.in/dp/B0F3HVQZP9"
    }
  ];

  // State to track the currently displayed image for each product
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({
    original: 0,
    classic: 0
  });

  // Function to handle image navigation
  const navigateImage = (productId: string, direction: 'prev' | 'next') => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const totalImages = product.images.length;
    setCurrentImageIndex(prev => {
      const currentIndex = prev[productId] || 0;
      if (direction === 'prev') {
        return { ...prev, [productId]: (currentIndex - 1 + totalImages) % totalImages };
      } else {
        return { ...prev, [productId]: (currentIndex + 1) % totalImages };
      }
    });
  };

  return (
    <section id="product" className="bg-coffee-light section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/0abdeb94-b549-4524-b46e-7f20500e9a38.png" 
              alt="Brewlyours Logo" 
              className="mx-auto h-24 mb-4"
            />
            <h2 className="h2 text-center text-coffee-dark mb-4">Our Premium Collection</h2>
            <p className="subtitle text-center max-w-2xl mx-auto mb-16">
              Experience the rich, aromatic flavor of our signature products
            </p>
          </div>
        </AnimatedSection>

        {products.map((product, index) => (
          <div 
            key={product.id}
            className={`mb-24 ${index !== products.length - 1 ? 'pb-16 border-b border-coffee-dark/10' : ''}`}
          >
            <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              <AnimatedSection delay={200}>
                <div className={`rounded-lg overflow-hidden h-[500px] shadow-xl relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div 
                    className="h-full bg-cover bg-center transition-opacity duration-500"
                    style={{ backgroundImage: `url('${product.images[currentImageIndex[product.id] || 0].src}')` }}
                  ></div>
                  
                  {/* Image navigation controls */}
                  {product.images.length > 1 && (
                    <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
                      <Button 
                        onClick={() => navigateImage(product.id, 'prev')}
                        size="icon"
                        variant="secondary"
                        className="bg-white/80 text-coffee-dark hover:bg-white rounded-full shadow-md"
                      >
                        <ChevronLeft size={20} />
                      </Button>
                      
                      <div className="flex gap-2 items-center">
                        {product.images.map((_, imgIndex) => (
                          <span 
                            key={imgIndex}
                            className={`block w-2 h-2 rounded-full transition-colors ${
                              (currentImageIndex[product.id] || 0) === imgIndex 
                                ? 'bg-coffee-accent' 
                                : 'bg-white/60'
                            }`}
                          ></span>
                        ))}
                      </div>
                      
                      <Button 
                        onClick={() => navigateImage(product.id, 'next')}
                        size="icon"
                        variant="secondary"
                        className="bg-white/80 text-coffee-dark hover:bg-white rounded-full shadow-md"
                      >
                        <ChevronRight size={20} />
                      </Button>
                    </div>
                  )}
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
