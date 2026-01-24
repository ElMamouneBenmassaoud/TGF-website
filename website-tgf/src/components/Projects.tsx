import React, { useEffect, useMemo, useState } from 'react';
import { MapPin, Ruler } from 'lucide-react';
import { supabase } from '../supabaseClient';

type Project = {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string; // bucket: photo_project
  project_logo?: string | null; // bucket: project_logo
  description: string;
  surface: string;
  promoter_name?: string | null;
  promoter_logo_path?: string | null; // bucket: promoteur_logo
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

  const visibleProjects = useMemo(
      () => projects.slice(currentIndex, currentIndex + projectsPerPage),
      [projects, currentIndex]
  );

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projects.length) setCurrentIndex(currentIndex + projectsPerPage);
  };

  const handlePrev = () => {
    if (currentIndex - projectsPerPage >= 0) setCurrentIndex(currentIndex - projectsPerPage);
  };

  const getPublicUrl = (bucket: string, path?: string | null) => {
    if (!path) return null;
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  };

  return (
      <section id="projets" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Grands Projets</h2>
            <div className="w-24 h-1 bg-[#C0392B] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations les plus prestigieuses qui témoignent de notre savoir-faire
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => {
              const projectImageUrl = getPublicUrl('photo_project', project.image);
              const projectLogoUrl = getPublicUrl('project_logo', project.project_logo);
              const promoterLogoUrl = getPublicUrl('promoteur_logo', project.promoter_logo_path);

              return (
                  <article
                      key={project.id}
                      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                  >
                    {/* Image */}
                    <div className="relative h-72 w-full">
                      <img
                          src={projectImageUrl || ''}
                          alt={project.title}
                          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                      />

                      {/* Top badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                        {/* Project logo (small pill) */}
                        <div className="flex items-center gap-2">
                          {projectLogoUrl ? (
                              <div className="bg-white/85 backdrop-blur-md border border-white/60 rounded-xl px-3 py-2 shadow-sm">
                                <img
                                    src={projectLogoUrl}
                                    alt="Logo projet"
                                    className="h-7 w-auto object-contain"
                                    loading="lazy"
                                />
                              </div>
                          ) : null}
                        </div>

                        {/* Category + promoter logo */}
                        <div className="flex items-center gap-2">



                            <div
                                className="bg-white/85 backdrop-blur-md border border-white/60 rounded-xl px-3 py-2 shadow-sm max-w-[150px]">
                            {promoterLogoUrl ? (
                                <img
                                    src={promoterLogoUrl}
                                    alt={project.promoter_name || 'Promoteur'}
                                    title={project.promoter_name || ''}
                                    className="h-7 w-auto object-contain"
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

                      {/* Bottom gradient info */}
                      <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                        <div className="relative z-10">
                          <h3 className="text-white text-xl font-bold leading-snug line-clamp-2">
                            {project.title}
                          </h3>

                            <div className="mt-3 flex items-center gap-4 text-white/90">
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2"/>
                                    <span className="text-sm line-clamp-1">{project.location}</span>
                                </div>

                                <div className="flex items-center">
                                    <Ruler className="w-4 h-4 mr-2"/>
                                    <span className="text-sm">{project.surface || '—'}</span>
                                </div>

                                <span
                                    className="absolute bottom-4 right-4 bg-[#C0392B] text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                      </div>

                        {/* Hover description panel (desktop) */}
                        <div className="hidden md:block pointer-events-none">
                        {/* voile sombre léger */}
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* description - positionnée AU-DESSUS du bloc infos */}
                        <div className="absolute left-5 right-5 bottom-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/55 backdrop-blur-sm rounded-xl p-4">
                            <p className="text-white/95 text-sm leading-relaxed line-clamp-4">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Mobile description (keeps it readable on phone) */}
                    <div className="md:hidden p-5">
                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                    </div>
                  </article>
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
