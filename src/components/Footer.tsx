
import React from 'react';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from './ui/use-toast';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates about our products and promotions.",
    });
    setEmail('');
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#about" },
        { name: "Products", href: "#product" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Instant Coffee", href: "#original" },
        { name: "Classic Blend", href: "#classic" },
        { name: "Coming Soon", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Brewing Guide", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Privacy Policy", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12 px-6" role="contentinfo">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Brewlyours Logo" 
                className="h-8 w-auto" 
                width="32" 
                height="32"
                loading="lazy"
              />
            </div>
            <p className="text-coffee-beige/80 max-w-xs">
              Premium instant coffee crafted to preserve the rich, complex flavors of freshly brewed coffee.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/_brewlyours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-beige/80 hover:text-coffee-accent transition-colors p-2"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} aria-hidden="true" />
              </a>
              <a 
                href="https://www.facebook.com/people/Brewlyours-India/61555444964865/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-beige/80 hover:text-coffee-accent transition-colors p-2"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} aria-hidden="true" />
              </a>
              <a 
                href="https://x.com/pirated_jat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-beige/80 hover:text-coffee-accent transition-colors p-2"
                aria-label="Follow us on X"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  stroke="none"
                  className="lucide lucide-twitter"
                  aria-hidden="true"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {footerLinks.map((category, i) => (
            <div key={i}>
              <h4 className="font-serif text-xl text-coffee-accent mb-4">{category.title}</h4>
              <ul className="space-y-3">
                {category.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-coffee-beige/80 hover:text-coffee-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-coffee-beige/20 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-serif text-xl text-coffee-accent mb-4">Stay Updated</h4>
              <p className="text-coffee-beige/80 mb-4">
                Subscribe to our newsletter for new product announcements and brewing tips.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-coffee-dark/50 border-coffee-beige/30 text-coffee-cream placeholder:text-coffee-beige/50"
                  aria-label="Email for newsletter"
                  required
                />
                <Button type="submit" className="bg-coffee-accent hover:bg-coffee-light text-coffee-dark">
                  <ArrowRight size={18} />
                </Button>
              </form>
            </div>
            
            <div className="text-coffee-beige/60 text-sm md:text-right">
              <p>&copy; {new Date().getFullYear()} Brewlyours. All rights reserved.</p>
              <p className="mt-2">
                <a href="#" className="hover:text-coffee-accent">Privacy Policy</a> • 
                <a href="#" className="hover:text-coffee-accent ml-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
