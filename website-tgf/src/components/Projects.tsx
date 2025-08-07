import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { supabase } from '../supabaseClient'; // adapte le chemin si nécessaire

type Project = {
  id: number;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  description: string;
  surface: string;
  materials: string[];
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 6;

  // ✅ Charger les projets depuis Supabase
  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('year', { ascending: false });

      if (error) {
        console.error('Erreur de chargement :', error);
      } else {
        setProjects(data || []);
      }
    };

    fetchProjects();
  }, []);

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projects.length) {
      setCurrentIndex(currentIndex + projectsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - projectsPerPage >= 0) {
      setCurrentIndex(currentIndex - projectsPerPage);
    }
  };

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Grands Projets</h2>
          <div className="w-24 h-1 bg-[#C0392B] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations les plus prestigieuses qui témoignent de notre savoir-faire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
              <div key={project.id}
                   className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div
                      className="absolute top-4 right-4 bg-[#C0392B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>

                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2"/>
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2"/>
                    <span className="text-sm">{project.year}</span>
                    <Users className="w-4 h-4 ml-4 mr-2"/>
                    <span className="text-sm">{project.surface}</span>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Matériaux utilisés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, index) => (
                          <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                        {material}
                      </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <div className="flex justify-center mt-12 space-x-6">
          <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-lg font-semibold border ${
                  currentIndex === 0
                      ? 'bg-gray-300 text-white cursor-not-allowed'
                      : 'bg-[#80251E] text-white hover:bg-[#6b1f19]'
              }`}
          >
            ◀ Précédents
          </button>

          <button
              onClick={handleNext}
              disabled={currentIndex + projectsPerPage >= projects.length}
              className={`px-4 py-2 rounded-lg font-semibold border ${
                  currentIndex + projectsPerPage >= projects.length
                      ? 'bg-gray-300 text-white cursor-not-allowed'
                      : 'bg-[#80251E] text-white hover:bg-[#6b1f19]'
              }`}
          >
            Suivants ▶
          </button>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#80251E] to-[#6b1f19] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Un Projet en Tête ?</h3>
            <p className="text-lg mb-6">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-white text-[#80251E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander un Devis
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
