
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
    <section id="contact" className="bg-gradient-to-b from-coffee-cream via-coffee-beige/30 to-coffee-cream section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-coffee-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-coffee-medium rounded-full blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection>
          <h2 className="h2 text-center text-coffee-dark mb-4 font-serif">Get in Touch</h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-16 h-0.5 bg-gradient-to-r from-transparent to-coffee-accent"></span>
            <span className="inline-block w-2 h-2 rounded-full bg-coffee-accent"></span>
            <span className="inline-block w-16 h-0.5 bg-gradient-to-l from-transparent to-coffee-accent"></span>
          </div>
          <p className="subtitle text-center max-w-2xl mx-auto mb-16 text-lg">
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
            <form className="space-y-6 bg-gradient-to-br from-white to-coffee-cream/30 p-8 rounded-2xl shadow-2xl border border-coffee-accent/20 hover:shadow-coffee-accent/20 transition-shadow duration-300" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-coffee-dark mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-coffee-beige/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-accent/50 focus:border-coffee-accent transition-all"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-coffee-dark mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-coffee-beige/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-accent/50 focus:border-coffee-accent transition-all"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-coffee-dark mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-coffee-beige/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-accent/50 focus:border-coffee-accent transition-all"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-coffee-dark to-coffee-medium hover:from-coffee-medium hover:to-coffee-dark text-coffee-cream shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 py-6"
                disabled={isSubmitting}
              >
                <Send size={18} className="mr-2" />
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
