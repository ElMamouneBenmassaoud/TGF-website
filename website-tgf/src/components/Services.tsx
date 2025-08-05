import React from 'react';
import { Truck, Hammer, ShoppingCart, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-[#C0392B]" />,
      title: "Importation",
      description: "Import direct des meilleurs marbres et granites du monde entier avec une sélection rigoureuse de nos fournisseurs.",
      features: ["Sélection mondiale", "Qualité garantie", "Prix compétitifs", "Logistique optimisée"]
    },
    {
      icon: <Hammer className="w-12 h-12 text-[#C0392B]" />,
      title: "Façonnage",
      description: "Transformation et façonnage sur mesure de vos pierres naturelles selon vos spécifications exactes.",
      features: ["Découpe précise", "Finitions variées", "Formes complexes", "Équipement moderne"]
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-[#C0392B]" />,
      title: "Commercialisation",
      description: "Large gamme de produits disponibles avec un vaste choix de couleurs et de finitions pour tous vos projets.",
      features: ["Showroom complet", "Échantillons disponibles", "Conseil personnalisé", "Stock permanent"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-[#C0392B]" />,
      title: "Pose & Installation",
      description: "Installation professionnelle par nos équipes qualifiées pour un résultat parfait et durable.",
      features: ["Équipe experte", "Matériel professionnel", "Garantie travaux", "Suivi post-installation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <div className="w-24 h-1 bg-[#C0392B] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De l'importation à la pose, nous vous accompagnons dans tous vos projets de marbre et granite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#C0392B] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#505050] via-[#3e3e3e] to-[#2e2e2e] text-white p-12 rounded-2xl shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Pourquoi Choisir TGF ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-[#B94B3C] mb-3">Expertise Reconnue</h4>
                <p className="text-gray-300">
                  Plus de 5 ans d'expérience dans le domaine des pierres naturelles
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#B94B3C] mb-3">Matériaux Premium</h4>
                <p className="text-gray-300">
                  Sélection rigoureuse des meilleurs matériaux du monde entier
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#B94B3C] mb-3">Service Complet</h4>
                <p className="text-gray-300">
                  De la conception à la réalisation, nous gérons votre projet de A à Z
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
