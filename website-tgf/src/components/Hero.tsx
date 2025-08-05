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
                backgroundImage: 'url("../../assets/main-page.jpg")'
            }}
        ></div>
        <div className="absolute inset-0 bg-white bg-opacity-35"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
              <img
                  src="/assets/LOGO-COULEUR.png"
                  alt="Logo TGF"
                  style={{height: '182px'}} // entre h-28 (112px) et h-32 (128px)
                  className="w-auto mb-4"
              />


              {/* Texte sous le logo */}
              <span className="text-2xl md:text-3xl font-semibold text-[#80251E] mb-8">
    Marbre & Granite d'Exception
  </span>

              {/* Boutons */}
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
                  <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                          <Award className="w-8 h-8 text-[#80251E]"/>
                      </div>
                      <div className="text-3xl font-bold mb-2 text-black">5+</div>
                      <div className="text-black font-bold">Années d'Expérience</div>
                  </div>

                  <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                          <Users className="w-8 h-8 text-[#80251E]"/>
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
