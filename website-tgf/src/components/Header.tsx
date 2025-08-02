import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#505050] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2"/>
              <span>+212 661 60 11 67</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2"/>
              <span>commercial.tgf@gmail.com</span>
            </div>
          </div>
          <div className="text-sm">
            Spécialiste en Marbre & Granite
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
                src="../../assets/logo-tgf.png"
                alt="Logo TGF"
                className="h-12 w-auto"
            />
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('accueil')}
                    className="text-gray-700 hover:text-[#80251E] transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('apropos')}
                    className="text-gray-700 hover:text-[#80251E] transition-colors">
              À Propos
            </button>
            <button onClick={() => scrollToSection('services')}
                    className="text-gray-700 hover:text-[#80251E] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('projets')}
                    className="text-gray-700 hover:text-[#80251E] transition-colors">
              Projets
            </button>
            <button onClick={() => scrollToSection('partenaires')}
                    className="text-gray-700 hover:text-[#80251E] transition-colors">
              Partenaires
            </button>
            <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#80251E] text-white px-4 py-2 rounded-lg hover:bg-[#6b1f19] transition-colors"
            >
              Contact
            </button>
          </nav>


          {/* Mobile menu button */}
          <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('accueil')}
                        className="text-gray-700 hover:text-[#80251E] transition-colors text-left">
                  Accueil
                </button>
                <button onClick={() => scrollToSection('apropos')}
                        className="text-gray-700 hover:text-[#80251E] transition-colors text-left">
                  À Propos
                </button>
                <button onClick={() => scrollToSection('services')}
                        className="text-gray-700 hover:text-[#80251E] transition-colors text-left">
                  Services
                </button>
                <button onClick={() => scrollToSection('galerie')}
                        className="text-gray-700 hover:text-[#80251E] transition-colors text-left">
                  Galerie
                </button>
                <button onClick={() => scrollToSection('projets')}
                        className="text-gray-700 hover:text-[#80251E] transition-colors text-left">
                  Projets
                </button>
                <button onClick={() => scrollToSection('partenaires')}
                        className="text-gray-700 hover:text-[#80251E] transition-colors text-left">
                  Partenaires
                </button>
                <button onClick={() => scrollToSection('contact')}
                        className="bg-[#80251E] text-white px-4 py-2 rounded-lg hover:bg-[#6b1f19] transition-colors text-left">
                  Contact
                </button>
              </div>
            </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
