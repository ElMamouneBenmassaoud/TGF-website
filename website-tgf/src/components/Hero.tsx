import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <section id="accueil"
               className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Background image */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
            }}
        ></div>
        <div className="absolute inset-0 bg-white bg-opacity-35"></div>

          <div className="relative z-10 container mx-auto px-4 text-center">
              <div className="flex flex-col items-center justify-center text-center py-12">
                  {/* Logo centré et agrandi */}
                  <img
                      src="../../assets/logo-tgf-removebg-preview.png" // remplace par ton chemin réel
                      alt="Logo TGF"
                      className="h-24 w-auto mb-4"
                  />

                  {/* Texte sous le logo */}
                  <span className="text-2xl font-semibold text-[#80251E]">
    Marbre & Granite d'Exception
  </span>
              </div>


              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-black">
                  Spécialistes de l'importation, du façonnage et de la pose de marbre, granite et pierres naturelles
                  depuis plus de 5 ans
              </p>


              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <button
                      onClick={scrollToContact}
                      className="bg-[#80251E] hover:bg-[#6b1f19] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                  >

                      Demander un Devis
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                  </button>
                  <button
                      onClick={() => document.getElementById('projets')?.scrollIntoView({behavior: 'smooth'})}
                      className="border-2 border-[#505050] hover:bg-[#505050] hover:text-white text-[#505050] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                  >
                      Voir nos Projets
                  </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                          <Award className="w-8 h-8 text-[#80251E]"/>
                      </div>
                      <div className="text-3xl font-bold mb-2 text-black">5+</div>
                      <div className="text-black font-bold">Années d'Expérience</div>
                  </div>
                  <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                          <Users className="w-8 h-8 text-[#80251E]" />
                      </div>
                      <div className="text-3xl font-bold mb-2 text-black">500+</div>
                      <div className="text-black font-bold">Projets Réalisés</div>
                  </div>
                  <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                          <Clock className="w-8 h-8 text-[#80251E]"/>
                      </div>
                      <div className="text-3xl font-bold mb-2 text-black">24h</div>
                      <div className="text-black font-bold">Réponse Garantie</div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Hero;
