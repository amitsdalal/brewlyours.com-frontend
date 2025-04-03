
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from './AnimatedSection';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-coffee-cream">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <h2 className="h2 text-coffee-dark mb-4">Get in Touch</h2>
          <p className="subtitle text-coffee-dark/70 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Fill out the form below, and our team will get back to you shortly.
          </p>
          <div className="h-1 w-20 bg-coffee-medium mx-auto mt-6"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-coffee-light/30 focus:border-coffee-medium"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-coffee-light/30 focus:border-coffee-medium"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    className="min-h-[120px] border-coffee-light/30 focus:border-coffee-medium"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-coffee-medium text-white hover:bg-coffee-dark"
              >
                Send Message
              </Button>
            </form>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="h4 text-coffee-dark mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-coffee-dark">Email</p>
                  <a href="mailto:hello@brewlyours.com" className="text-coffee-medium hover:text-coffee-dark transition-colors">
                    hello@brewlyours.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-coffee-dark">Follow Us</p>
                  <div className="flex gap-4 mt-2">
                    {['Instagram', 'Twitter', 'Facebook'].map((social, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className="px-3 py-1 rounded-full text-sm bg-coffee-cream hover:bg-coffee-light transition-colors text-coffee-dark"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-coffee-light/20 mt-6">
                  <p className="text-coffee-dark/70">
                    Join our coffee community and be the first to know about new products, special offers, and brewing tips.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
