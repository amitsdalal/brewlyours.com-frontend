
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
    <section id="product" className="bg-gradient-to-b from-coffee-light via-coffee-beige/50 to-coffee-light section-padding relative overflow-hidden" aria-label="Our Premium Coffee Products">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-coffee-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-coffee-medium rounded-full blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10 px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <img
              src="/logo.png"
              alt="Brewlyours Logo"
              className="mx-auto h-20 md:h-24 mb-6 animate-float drop-shadow-2xl"
              width="96"
              height="96"
              loading="lazy"
              onError={(e) => {
                console.error("Failed to load logo in ProductHighlights");
                const target = e.target as HTMLImageElement;
                // Fallback to alternate path if main path fails
                if (target.src.includes('/logo.png')) {
                  target.src = './logo.png';
                }
              }}
            />
            <h2 className="text-3xl md:text-5xl text-center text-coffee-dark mb-4 font-serif font-bold">Our Premium Collection</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-block w-16 h-0.5 bg-gradient-to-r from-transparent to-coffee-accent"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-coffee-accent"></span>
              <span className="inline-block w-16 h-0.5 bg-gradient-to-l from-transparent to-coffee-accent"></span>
            </div>
            <p className="text-center max-w-2xl mx-auto text-base md:text-lg text-coffee-dark/80 leading-relaxed">
              Experience the rich, aromatic flavor of our signature products
            </p>
          </div>
        </AnimatedSection>

        {products.map((product, index) => (
          <div
            key={product.id}
            className={`mb-32 ${index !== products.length - 1 ? 'pb-20 border-b-2 border-coffee-dark/10' : ''}`}
            id={product.id}
          >
            <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              <AnimatedSection delay={200}>
                <div className={`rounded-2xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-coffee-cream to-coffee-beige ${index % 2 === 1 ? 'md:order-2' : ''} group`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <Carousel className="w-full" aria-label={`${product.title} product images`}>
                    <CarouselContent>
                      {product.images.map((image, i) => (
                        <CarouselItem key={i} className="flex items-center justify-center">
                          <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center p-6 md:p-8">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                console.error("Failed to load image:", image.src);
                                target.style.backgroundColor = "#D4A76A";
                              }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 z-20 bg-coffee-accent/90 hover:bg-coffee-accent text-coffee-dark border-0 shadow-lg" aria-label="Previous image" />
                    <CarouselNext className="right-4 z-20 bg-coffee-accent/90 hover:bg-coffee-accent text-coffee-dark border-0 shadow-lg" aria-label="Next image" />
                  </Carousel>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <div className={`space-y-7 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl text-coffee-dark font-serif font-bold leading-tight">{product.title}</h3>
                    <p className="text-coffee-accent text-base md:text-lg font-semibold tracking-wide uppercase">{product.tagline}</p>
                  </div>

                  <p className="text-coffee-dark/80 leading-relaxed text-base md:text-lg">{product.description}</p>

                  <div className="bg-gradient-to-br from-coffee-cream/70 to-coffee-cream/50 p-7 rounded-2xl border-l-4 border-coffee-accent shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="font-serif text-coffee-dark text-xl mb-4 flex items-center gap-3">
                      <span className="inline-block w-8 h-1 bg-coffee-accent rounded-full"></span>
                      The Story Behind Our Coffee
                    </h4>
                    <p className="text-coffee-dark/75 italic text-sm md:text-base leading-relaxed">{product.story}</p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-coffee-cream/50 p-7 rounded-2xl mt-8 shadow-xl border-2 border-coffee-accent/20 hover:border-coffee-accent/50 transition-all duration-300">
                    <h4 className="font-bold text-coffee-dark mb-6 flex items-center text-xl">
                      <Coffee size={24} className="mr-3 text-coffee-accent" aria-hidden="true" />
                      What Makes It Special
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-coffee-cream/30 transition-colors duration-200 group/feature">
                          <span className="bg-gradient-to-br from-coffee-accent to-coffee-light rounded-full p-2 mt-0.5 shadow-md group-hover/feature:scale-110 transition-transform duration-300 flex-shrink-0" aria-hidden="true">
                            <Check size={18} className="text-coffee-dark" />
                          </span>
                          <div className="flex-1">
                            <h5 className="font-bold text-coffee-dark mb-1.5 text-sm md:text-base">{feature.title}</h5>
                            <p className="text-xs md:text-sm text-coffee-dark/70 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="w-full md:w-auto bg-gradient-to-r from-coffee-accent via-coffee-light to-coffee-accent hover:from-coffee-light hover:via-coffee-accent hover:to-coffee-light text-coffee-dark font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-coffee-accent/50 transition-all duration-300 transform hover:scale-105 rounded-xl"
                    >
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full"
                        aria-label={`Buy ${product.title} on Amazon`}
                      >
                        <span>Buy on Amazon</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M17.5 21L23 12 17.5 3h-11L1 12l5.5 9h11z"/>
                          <path d="M9 19l4-7-4-7"/>
                        </svg>
                      </a>
                    </Button>
                  </div>
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
