import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Qui Sommes-Nous ?</h2>
          <div className="w-24 h-1 bg-[#C0392B] mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="../../public/main-page.jpg"
              alt="Atelier TGF"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">TGF - Votre Expert en Marbre et Granite</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              TGF est une entreprise spécialisée dans l'importation, le façonnage, la commercialisation et la pose de toutes sortes de marbre, granite et pierres naturelles.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nous sommes constamment à la recherche de nouveaux matériaux et de nouvelles solutions à offrir, en essayant de maintenir un bon rapport qualité / prix.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Notre mission est de répondre aux plus hautes exigences d'une large clientèle : décorateurs, architectes, promoteurs, particuliers...
            </p>
            <p className="text-gray-700 leading-relaxed">
              La parfaite maîtrise du métier nous permet de proposer des produits personnalisés et très sophistiqués pour tous aménagements d'espaces intérieurs et extérieurs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#f5eaea] rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#C0392B]" />

            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Notre Mission</h4>
            <p className="text-gray-600">
              Répondre aux plus hautes exigences de notre clientèle avec des solutions personnalisées
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#f5eaea] rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-[#C0392B]" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Notre Vision</h4>
            <p className="text-gray-600">
              Être le leader dans l'importation et la transformation de pierres naturelles au Maroc
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#f5eaea] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#C0392B]" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Qualité</h4>
            <p className="text-gray-600">
              Contrôle strict et rigoureux de la qualité avec des matériaux de très haute qualité
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#f5eaea] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#C0392B]" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Équipe</h4>
            <p className="text-gray-600">
              Personnel qualifié et régulièrement formé aux nouvelles technologies
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nos Engagements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#C0392B] mb-3">Écoute Permanente</h4>
              <p className="text-gray-600">
                Nous sommes à l'écoute de vos besoins pour vous proposer les meilleures solutions
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#C0392B] mb-3">Respect des Délais</h4>
              <p className="text-gray-600">
                Nous respectons scrupuleusement les délais convenus dans nos contrats
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#C0392B] mb-3">Satisfaction Client</h4>
              <p className="text-gray-600">
                Notre exigence quotidienne est la satisfaction totale de notre chère clientèle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
