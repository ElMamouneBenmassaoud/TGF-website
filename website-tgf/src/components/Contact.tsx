import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    surface: '',
    budget: '',
    location: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        surface: '',
        budget: '',
        location: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 p-12 rounded-lg">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Merci pour votre demande !</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous avons bien reçu votre demande de devis. Notre équipe vous contactera dans les plus brefs délais.
              </p>
              <p className="text-amber-600 font-semibold">
                Réponse garantie sous 24h
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-Nous</h2>
          <div className="w-24 h-1 bg-[#C0392B] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Remplissez notre formulaire pour recevoir un devis personnalisé
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#f5eaea] rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-[#80251E]"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+212 661 60 11 67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#f5eaea] rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-[#80251E]"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">commercial.tgf@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#f5eaea] rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-[#80251E]"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      KM 4.8, Route provinciale de Sidi Rahal N°3603 (200m Derrière Station SHELL).
                    </p>
                    <p className="text-gray-600">
                      Soualem Trifia. Province Berrechid.
                    </p>
                    <p className="text-gray-600">Grand Casablanca - Settat Maroc</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#e6f5ec] rounded-lg">
                <h4 className="font-bold text-[#217946] mb-2">Réponse Rapide Garantie</h4>
                <p className="text-[#2c8a54] text-sm">
                  Nous nous engageons à vous répondre dans les 24h suivant votre demande.
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Demander de Devis</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nom Complet *</label>
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80251E] focus:border-transparent"
                      placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80251E] focus:border-transparent"
                      placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone *</label>
                  <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80251E] focus:border-transparent"
                      placeholder="+212 6XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Entreprise</label>
                  <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80251E] focus:border-transparent"
                      placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Type de Projet *</label>
                  <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80251E] focus:border-transparent"
                  >
                    <option value="mur">Revêtement de mur</option>
                    <option value="sol">Revêtement de sol</option>
                    <option value="cuisine">Cuisine</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Description du Projet
                  <span className="text-sm text-gray-600 mt-4 text-center"> (facultatif)</span>
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80251E] focus:border-transparent"
                    placeholder="Décrivez votre projet en détail..."
                ></textarea>
              </div>

              <button
                  type="submit"
                  className="w-full bg-[#80251E] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#6b1f19] transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2"/>
                Envoyer ma Demande
              </button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
