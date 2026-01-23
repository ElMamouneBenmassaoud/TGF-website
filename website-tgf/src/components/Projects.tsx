import React, { useEffect, useState } from 'react';
import { MapPin, Ruler } from 'lucide-react';
import { supabase } from '../supabaseClient';

type Project = {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string; // path dans bucket photo_project
  project_logo?: string | null; // path dans bucket project_logo
  description: string;
  surface: string;
  promoter_name?: string | null;
  promoter_logo_path?: string | null; // path dans bucket promoteur_logo
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
          .from('projects')
          .select(
              'id, title, location, category, image, project_logo, description, surface, promoter_name, promoter_logo_path'
          )
          .order('id', { ascending: false });

      if (error) console.error('Erreur de chargement :', error);
      else setProjects(data || []);
    };

    fetchProjects();
  }, []);

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projects.length) setCurrentIndex(currentIndex + projectsPerPage);
  };

  const handlePrev = () => {
    if (currentIndex - projectsPerPage >= 0) setCurrentIndex(currentIndex - projectsPerPage);
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
            {visibleProjects.map((project) => {
              // 1) Photo projet
              const projectImageUrl = supabase.storage
                  .from('photo_project')
                  .getPublicUrl(project.image).data.publicUrl;

              // 2) Logo projet (optionnel)
              const projectLogoUrl = project.project_logo
                  ? supabase.storage.from('project_logo').getPublicUrl(project.project_logo).data.publicUrl
                  : null;

              // 3) Logo promoteur (optionnel)
              const promoterLogoUrl = project.promoter_logo_path
                  ? supabase.storage.from('promoteur_logo').getPublicUrl(project.promoter_logo_path).data.publicUrl
                  : null;
console.log(promoterLogoUrl)
              return (
                  <div
                      key={project.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                          src={projectImageUrl}
                          alt={project.title}
                          className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                      />

                      {/* Badge Catégorie */}
                      <div className="absolute top-4 right-4 bg-[#C0392B] text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                        {project.category}
                      </div>

                      {/* Bandeau bas sur l'image (logos) */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                        {/* Logo projet */}
                        <div className="bg-white/85 backdrop-blur-md border border-white/60 rounded-md px-2 py-1 shadow-sm">
                          {projectLogoUrl ? (
                              <img
                                  src={projectLogoUrl}
                                  alt="Logo projet"
                                  className="h-7 w-auto object-contain"
                                  loading="lazy"
                              />
                          ) : (
                              <span className="text-xs font-semibold text-gray-700">Projet</span>
                          )}
                        </div>

                        {/* Promoteur */}
                        <div className="bg-white/85 backdrop-blur-md border border-white/60 rounded-md px-2 py-1 shadow-sm max-w-[55%]">
                          {promoterLogoUrl ? (
                              <img
                                  src={promoterLogoUrl}
                                  alt={project.promoter_name || 'Promoteur'}
                                  title={project.promoter_name || ''}
                                  className="h-7 w-auto object-contain ml-auto"
                                  loading="lazy"
                              />
                          ) : (
                              <span className="text-xs font-semibold text-gray-700 truncate block">
                          {project.promoter_name || 'Promoteur'}
                        </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>

                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2"/>
                        <span className="text-sm">{project.location}</span>
                      </div>

                      <div className="flex items-center text-gray-600 mb-4">
                        <Ruler className="w-4 h-4 mr-2"/>
                        <span className="text-sm">{project.surface}</span>
                      </div>


                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                    </div>
                  </div>
              );
            })}
          </div>

          {/* Pagination */}
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

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#80251E] to-[#6b1f19] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Un Projet en Tête ?</h3>
              <p className="text-lg mb-6">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>
              <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
