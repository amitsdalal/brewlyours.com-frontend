
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-coffee-cream section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="h2 text-center text-coffee-dark mb-4">Get in Touch</h2>
          <p className="subtitle text-center max-w-2xl mx-auto mb-16">
            Have questions or feedback? We'd love to hear from you
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <h3 className="h3 text-coffee-dark">Contact Us</h3>
              <p className="text-coffee-dark/80">
                We're always looking to improve our products and services. Your feedback helps us create the perfect coffee experience.
              </p>
              
              <div className="space-y-4 mt-8">
                <div>
                  <h4 className="font-medium text-coffee-dark">Email</h4>
                  <p className="text-coffee-dark/70">hello@brewlyours.com</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-coffee-dark">Follow Us</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-coffee-dark/70 hover:text-coffee-dark">
                      Instagram
                    </a>
                    <a href="#" className="text-coffee-dark/70 hover:text-coffee-dark">
                      Twitter
                    </a>
                    <a href="#" className="text-coffee-dark/70 hover:text-coffee-dark">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <form className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-coffee-beige/30 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-accent/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-coffee-beige/30 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-accent/50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-coffee-beige/30 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-accent/50"
                  placeholder="Your message..."
                />
              </div>
              
              <Button className="w-full bg-coffee-dark hover:bg-coffee-dark/80 text-coffee-cream">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
