
import React from 'react';
import { Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark text-white py-12 px-6">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <Coffee size={24} className="text-coffee-accent" />
              <span className="font-serif text-xl font-medium text-coffee-cream">Brewlyours</span>
            </div>
            <p className="text-coffee-beige/70 mt-2 text-sm">
              Premium instant coffee, truly yours.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div>
              <h4 className="font-medium mb-3 text-coffee-cream">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Product', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-coffee-beige/70 hover:text-coffee-accent transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-coffee-cream">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-coffee-beige/70 hover:text-coffee-accent transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-coffee-beige/50">
            <p>© {new Date().getFullYear()} Brewlyours. All rights reserved.</p>
            <p>Crafted with passion and precision.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
