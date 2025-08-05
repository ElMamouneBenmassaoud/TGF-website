import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'marble', name: 'Marbre' },
    { id: 'granite', name: 'Granite' },
    { id: 'kitchen', name: 'Cuisines' },
    { id: 'bathroom', name: 'Salles de bain' },
    { id: 'exterior', name: 'Extérieur' }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "marble",
      title: "Plan de travail en marbre blanc",
      description: "Cuisine moderne avec plan de travail en marbre Carrara"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "granite",
      title: "Comptoir en granite noir",
      description: "Élégant comptoir en granite noir pour cuisine contemporaine"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "bathroom",
      title: "Salle de bain en marbre",
      description: "Salle de bain luxueuse avec revêtement en marbre"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "kitchen",
      title: "Îlot central en granite",
      description: "Îlot de cuisine avec plateau en granite poli"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "exterior",
      title: "Terrasse en pierre naturelle",
      description: "Aménagement extérieur avec dalles en pierre naturelle"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1080711/pexels-photo-1080711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "marble",
      title: "Escalier en marbre",
      description: "Escalier élégant avec marches en marbre blanc"
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="galerie" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Galerie</h2>
          <div className="w-24 h-1 bg-[#C0392B] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos plus belles réalisations en marbre, granite et pierres naturelles
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#C0392B] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-[#f5eaea] hover:text-[#C0392B]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-[#80251E] z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#80251E] z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#80251E] z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-lg">{filteredImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
