
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Here you would normally send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <form className="space-y-6 bg-white p-6 rounded-lg shadow-sm" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-coffee-beige/30 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-accent/50"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-coffee-beige/30 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-accent/50"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-coffee-beige/30 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-accent/50"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-coffee-dark hover:bg-coffee-dark/80 text-coffee-cream"
                disabled={isSubmitting}
              >
                <Send size={16} className="mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
