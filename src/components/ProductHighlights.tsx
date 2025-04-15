import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Check, Coffee } from 'lucide-react';
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
  webpSrc: string;
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
  story: string;
  features: ProductFeature[];
  images: ProductImage[];
  link: string;
}

const ProductHighlights: React.FC = () => {
  const products = [
    {
      id: "original",
      title: "Brewlyours Instant Coffee",
      tagline: "Freeze-Dried | Flavor Preservation | Mountain-Grown",
      description: "Experience the pinnacle of flavor preservation with our meticulously freeze-dried instant coffee. Unlike conventional methods, our freeze-drying technology locks in the coffee's complete flavor profile at its peak, creating a cup that's remarkably close to freshly brewed coffee.",
      story: "Born from a passion for authentic coffee experiences, our Instant Coffee began when our founder discovered the remarkable difference freeze-drying made while hiking in the Himalayas. Unable to brew traditional coffee at high altitudes, he found that only freeze-dried coffee retained the complex notes he loved. This revelation led to years of perfecting our proprietary freeze-drying process that preserves not just flavor, but the very soul of each coffee bean.",
      features: [
        { title: "Freeze-Dried Process", description: "Preserves 95% of original coffee compounds" },
        { title: "Complex Flavor Profile", description: "Notes of chocolate, caramel and mild fruitiness" },
        { title: "Extended Freshness", description: "Stays fresh for up to 2 years when sealed" },
        { title: "No Additives", description: "Pure coffee with no preservatives or fillers" },
        { title: "Ultra-Lightweight", description: "Perfect for travel, camping and emergencies" },
        { title: "Quick Dissolution", description: "Dissolves in seconds in hot or cold water" }
      ],
      images: [
        { src: "/assets/product.jpg", webpSrc: "/assets/product.webp", alt: "Brewlyours Instant Coffee - Premium freeze-dried coffee package" },
      ],
      link: "https://www.amazon.in/Brewlyours-Instant-Freshly-Roasted-Energizing/dp/B0DSFBF12G/"
    },
    {
      id: "classic",
      title: "Brewlyours Classic",
      tagline: "Agglomeration Process | Smooth Body | Everyday Essential",
      description: "Our Classic blend leverages the innovative agglomeration process to deliver a consistently smooth, full-bodied experience with every cup. This specially formulated coffee has been engineered for the perfect balance of bold flavor and everyday drinkability.",
      story: "The Classic was created to meet the demand for an exceptional daily coffee experience without the fuss. Our coffee artisans spent months selecting the perfect bean combination that would stand up to the agglomeration process while maintaining a rich, consistent flavor. The result is a coffee that brings quality and convenience together - perfect for busy professionals who refuse to compromise on their coffee experience regardless of their hectic schedules.",
      features: [
        { title: "Agglomeration Process", description: "Creates uniform granules for consistent brewing" },
        { title: "Balanced Flavor", description: "Rich nutty undertones with reduced acidity" },
        { title: "Milk-Compatible", description: "Specially formulated to blend perfectly with milk" },
        { title: "Daily Reliability", description: "Same great taste cup after cup" },
        { title: "Robust Aroma", description: "Strong coffee scent that fills your space" },
        { title: "Value Formula", description: "More cups per jar than standard instant coffee" }
      ],
      images: [
        { src: "/assets/product-classic.jpg", webpSrc: "/assets/product-classic.webp", alt: "Brewlyours Classic Coffee - Premium agglomeration coffee jar" }
      ],
      link: "https://www.amazon.in/dp/B0F3HVQZP9"
    }
  ];

  return (
    <section id="product" className="bg-coffee-light section-padding" aria-label="Our Premium Coffee Products">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-8">
            <img 
              src="/logo.png" 
              alt="Brewlyours Logo" 
              className="mx-auto h-24 mb-4"
              width="96"
              height="96"
              loading="lazy"
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
            id={product.id}
          >
            <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              <AnimatedSection delay={200}>
                <div className={`rounded-lg overflow-hidden h-[500px] shadow-xl relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Carousel className="w-full h-full" aria-label={`${product.title} product images`}>
                    <CarouselContent className="h-full">
                      {product.images.map((image, i) => (
                        <CarouselItem key={i} className="h-full">
                          <picture>
                            <source srcSet={image.webpSrc} type="image/webp" />
                            <source srcSet={image.src} type="image/jpeg" />
                            <div 
                              className="h-full w-full bg-cover bg-center"
                              style={{ backgroundImage: `url('${image.src}')` }}
                              role="img" 
                              aria-label={image.alt}
                            >
                              {/* Fallback image in case background image fails */}
                              <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="opacity-0 w-full h-full object-cover" 
                                loading="lazy"
                                onError={(e) => {
                                  // Replace with a solid color if image fails to load
                                  const target = e.target as HTMLElement;
                                  target.style.opacity = "1";
                                  target.style.backgroundColor = "#D4A76A";
                                }}
                              />
                            </div>
                          </picture>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" aria-label="Previous image" />
                    <CarouselNext className="right-4" aria-label="Next image" />
                  </Carousel>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="h3 text-coffee-dark">{product.title}</h3>
                  <p className="text-coffee-dark/80 text-lg font-medium">{product.tagline}</p>
                  
                  <p className="text-coffee-dark/80">{product.description}</p>
                  
                  <div className="bg-coffee-cream/50 p-5 rounded-lg">
                    <h4 className="font-serif text-coffee-dark text-lg mb-3">The Story Behind Our Coffee</h4>
                    <p className="text-coffee-dark/80 italic text-sm">{product.story}</p>
                  </div>
                  
                  <div className="bg-coffee-cream/50 p-6 rounded-lg mt-6">
                    <h4 className="font-bold text-coffee-dark mb-4 flex items-center">
                      <Coffee size={20} className="mr-2" aria-hidden="true" /> 
                      What Makes It Special
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="bg-coffee-accent rounded-full p-1 mt-1" aria-hidden="true">
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
                      aria-label={`Buy ${product.title} on Amazon`}
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
