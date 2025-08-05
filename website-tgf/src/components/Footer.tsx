import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TGF</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Spécialiste de l'importation, du façonnage et de la pose de marbre, granite et pierres naturelles depuis
              plus de 5 ans.
            </p>
            <div className="flex space-x-4">
              <a href="#"
                 className="w-10 h-10 bg-[#80251E] rounded-full flex items-center justify-center hover:bg-[#6b1f19] transition-colors">
                <Facebook className="w-5 h-5"/>
              </a>
              <a href="#"
                 className="w-10 h-10 bg-[#80251E] rounded-full flex items-center justify-center hover:bg-[#6b1f19] transition-colors">
                <Instagram className="w-5 h-5"/>
              </a>
              <a href="#"
                 className="w-10 h-10 bg-[#80251E] rounded-full flex items-center justify-center hover:bg-[#6b1f19] transition-colors">
                <Linkedin className="w-5 h-5"/>
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('accueil')}
                        className="text-gray-300 hover:text-[#80251E] transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('apropos')}
                        className="text-gray-300 hover:text-[#80251E] transition-colors">
                  À Propos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')}
                        className="text-gray-300 hover:text-[#80251E] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('galerie')}
                        className="text-gray-300 hover:text-[#80251E] transition-colors">
                  Galerie
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projets')}
                        className="text-gray-300 hover:text-[#80251E] transition-colors">
                  Projets
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Importation de matériaux</li>
              <li>Façonnage sur mesure</li>
              <li>Commercialisation</li>
              <li>Pose et installation</li>
              <li>Conseil technique</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#80251E] mr-3 mt-1"/>
                <div className="text-gray-300">
                  <p>Soualem Trifia. Province Berrechid.</p>
                  <p>Casablanca, Maroc</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#80251E] mr-3"/>
                <span className="text-gray-300">+212 661 60 11 67</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#80251E] mr-3"/>
                <span className="text-gray-300">commercial.tgf@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 TGF - Tous droits réservés. Marbre & Granite d'Exception.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#80251E] text-sm transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-gray-400 hover:text-[#80251E] text-sm transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-[#80251E] text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
