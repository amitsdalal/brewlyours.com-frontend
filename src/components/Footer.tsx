
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12 px-6">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Brewlyours Logo" className="h-8" />
            {/* Text removed as requested */}
          </div>
          
          <div>
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a href="#" className="text-coffee-beige/80 hover:text-coffee-accent transition-colors">Home</a>
              <a href="#about" className="text-coffee-beige/80 hover:text-coffee-accent transition-colors">About</a>
              <a href="#product" className="text-coffee-beige/80 hover:text-coffee-accent transition-colors">Product</a>
              <a href="#contact" className="text-coffee-beige/80 hover:text-coffee-accent transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/_brewlyours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-beige/80 hover:text-coffee-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/people/Brewlyours-India/61555444964865/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-beige/80 hover:text-coffee-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/pirated_jat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-beige/80 hover:text-coffee-accent transition-colors"
                aria-label="X"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  stroke="none"
                  className="lucide lucide-twitter"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                </svg>
              </a>
            </div>
            <p className="text-coffee-beige/60 text-sm">&copy; {new Date().getFullYear()} Brewlyours. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
