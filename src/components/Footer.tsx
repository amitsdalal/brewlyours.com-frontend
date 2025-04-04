
import React from 'react';
import { Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12 px-6">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Coffee size={24} className="text-coffee-accent" />
            <span className="font-serif text-xl font-medium">Brewlyours</span>
          </div>
          
          <div>
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a href="#" className="text-coffee-beige/80 hover:text-coffee-accent transition-colors">Home</a>
              <a href="#about" className="text-coffee-beige/80 hover:text-coffee-accent transition-colors">About</a>
              <a href="#product" className="text-coffee-beige/80 hover:text-coffee-accent transition-colors">Product</a>
              <a href="#contact" className="text-coffee-beige/80 hover:text-coffee-accent transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <p className="text-coffee-beige/60 text-sm">&copy; {new Date().getFullYear()} Brewlyours. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
