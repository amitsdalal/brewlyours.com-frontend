
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';
import { Coffee, Check, Star } from 'lucide-react';

const benefits = [
  {
    title: "Freshly Roasted",
    icon: Coffee,
    description: "Our beans are roasted in small batches and sealed to preserve freshness and aroma."
  },
  {
    title: "Instant Brew",
    icon: Check,
    description: "Perfect coffee in seconds - just add hot water and enjoy the full-bodied flavor."
  },
  {
    title: "Natural Energy Boost",
    icon: Star,
    description: "Carefully selected beans provide a smooth, consistent energy boost without the crash."
  }
];

const ProductHighlights: React.FC = () => {
  return (
    <section id="product" className="section-padding bg-white">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <h2 className="h2 text-coffee-dark mb-4">Product Highlights</h2>
          <p className="subtitle text-coffee-medium max-w-2xl mx-auto">
            Experience the difference of premium instant coffee crafted with care and expertise.
          </p>
          <div className="h-1 w-20 bg-coffee-medium mx-auto mt-6"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-coffee-light/10 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1695653422259-8a74ffe90401?q=80&w=800" 
                alt="Brewlyours Coffee Product" 
                className="rounded-lg shadow-xl w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-coffee-dark text-white rounded-full p-4 shadow-lg">
                <div className="text-center">
                  <span className="block font-serif text-xl font-bold">4.8</span>
                  <div className="flex gap-0.5 text-coffee-accent">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" className="text-coffee-accent/60" />
                  </div>
                  <span className="text-xs block">Amazon Rating</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400} className="space-y-8">
            <h3 className="h3 text-coffee-dark">Premium Instant Coffee</h3>
            <p className="text-coffee-dark/80">
              Our signature product combines convenience with exceptional quality, setting a new standard for instant coffee. Each jar contains carefully selected coffee beans, processed to preserve their natural flavors and aroma.
            </p>
            
            <div className="grid gap-6 mt-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-coffee-light/20 bg-coffee-cream/30">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="bg-coffee-medium text-white p-3 rounded-full">
                      <benefit.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-coffee-dark mb-1">{benefit.title}</h4>
                      <p className="text-coffee-dark/70">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
