
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Check, ChevronLeft, ChevronRight, Coffee } from 'lucide-react';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductFeature {
  title: string;
  description: string;
}

interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: ProductFeature[];
  images: ProductImage[];
  link: string;
}

const ProductHighlights: React.FC = () => {
  const products: Product[] = [
    {
      id: "original",
      title: "Brewlyours Instant Coffee",
      tagline: "Freshly Roasted | Rich Flavor | Smooth Aroma",
      description: "Brewlyours Instant coffee is made through freeze-drying process, freshly brewed coffee is quickly frozen to preserve its natural flavors. Then, the frozen coffee undergoes a vacuum process where ice sublimates directly into steam, leaving only concentrated coffee granules. This method locks in the coffee's rich aroma, taste, and nutrients, ensuring a smooth and flavorful cup every time. Our freeze-dried coffee is lightweight, convenient, and retains its freshness for longer, delivering the perfect brew whenever you need.",
      features: [
        { title: "Freeze-Dried Process", description: "Preserves natural flavors and aromas" },
        { title: "Rich Body", description: "Full-bodied taste with complex notes" },
        { title: "Longer Shelf Life", description: "Stays fresh for extended periods" },
        { title: "Pure Coffee Experience", description: "No additives or preservatives" },
        { title: "Lightweight", description: "Perfect for travel and outdoor activities" },
        { title: "Quick Preparation", description: "Dissolves easily in hot water" }
      ],
      images: [
        { src: "/assets/product.jpg", alt: "Brewlyours Instant Coffee" },
        { src: "/assets/product-old.jpg", alt: "Brewlyours Instant Coffee Package" }
      ],
      link: "https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
    },
    {
      id: "classic",
      title: "Brewlyours Classic",
      tagline: "Premium Agglomeration | Full-Bodied | Balanced Profile",
      description: "Brewlyours – The Classic is a premium agglomeration instant coffee crafted for true coffee lovers who crave rich flavor with unmatched convenience. Made from carefully selected beans and perfected through the agglomeration process, it delivers a smooth, full-bodied taste in every cup. With its deep aroma and balanced profile, The Classic is ideal for your daily brew—whether at home, in the office, or on the go. Just add hot water and stir to awaken the essence of authentic coffee, instantly.",
      features: [
        { title: "Agglomeration Process", description: "Creates perfect granules for quick dissolving" },
        { title: "Balanced Flavor", description: "Smooth taste with less acidity" },
        { title: "Versatile Brewing", description: "Works well with milk or as black coffee" },
        { title: "Consistent Quality", description: "Every cup tastes just as good as the last" },
        { title: "Deep Aroma", description: "Fills your space with inviting coffee scent" },
        { title: "Everyday Luxury", description: "Premium taste for your daily routine" }
      ],
      images: [
        { src: "/assets/product-classic.jpg", alt: "Brewlyours Classic Coffee" },
        { src: "/logo.png", alt: "Brewlyours Logo" }
      ],
      link: "https://www.amazon.in/dp/B0F3HVQZP9"
    }
  ];

  return (
    <section id="product" className="bg-coffee-light section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-8">
            <img 
              src="/logo.png" 
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
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                      {product.images.map((image, i) => (
                        <CarouselItem key={i} className="h-full">
                          <div 
                            className="h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${image.src}')` }}
                          ></div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="h3 text-coffee-dark">{product.title}</h3>
                  <p className="text-coffee-dark/80 text-lg font-medium">{product.tagline}</p>
                  
                  <p className="text-coffee-dark/80">{product.description}</p>
                  
                  <div className="bg-coffee-cream/50 p-6 rounded-lg mt-8">
                    <h4 className="font-bold text-coffee-dark mb-4 flex items-center">
                      <Coffee size={20} className="mr-2" /> 
                      What Makes It Special
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="bg-coffee-accent rounded-full p-1 mt-1">
                            <Check size={16} className="text-coffee-dark" />
                          </span>
                          <div>
                            <h5 className="font-bold text-coffee-dark mb-1">{feature.title}</h5>
                            <p className="text-sm text-coffee-dark/70">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
