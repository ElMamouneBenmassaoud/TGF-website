import React, { useEffect, useState } from 'react';
import { Building, Users, Award, Handshake } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules';


interface Partner {
  id: number;
  name: string;
  url: string;
  category: string;
}

const iconMap: Record<string, JSX.Element> = {
  architectes: <Building className="w-8 h-8 text-[#C0392B]" />,
  promoteurs: <Users className="w-8 h-8 text-[#C0392B]" />,
  hotels: <Award className="w-8 h-8 text-[#C0392B]" />,
  entreprises: <Handshake className="w-8 h-8 text-[#C0392B]" />,
};

const Partners = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const { data, error } = await supabase.from('partenaires').select('*');
      if (error) {
        console.error('Erreur de chargement des partenaires:', error);
      } else {
        setPartners(data || []);
      }
    };

    fetchPartners();
  }, []);
  return (
      <section id="partenaires" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Partenaires</h2>
                  <div className="w-24 h-1 bg-[#C0392B] mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Nous collaborons avec les plus grands noms de l'architecture, de la promotion immobilière et de
                      l'hôtellerie au Maroc
                  </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-lg">
                  <Swiper
                      modules={[Autoplay]}
                      spaceBetween={30}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{delay: 2000}}
                      breakpoints={{
                          640: {slidesPerView: 2},
                          768: {slidesPerView: 3},
                          1024: {slidesPerView: 4},
                          1280: {slidesPerView: 5},
                      }}
                  >
                      {partners.map((partner) => (
                          <SwiperSlide key={partner.id}>
                              <div
                                  className="aspect-[3/2] w-full max-w-[160px] mx-auto flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition">
                                  <img
                                      src={partner.url}
                                      alt={partner.name}
                                      className="max-h-[100%] max-w-[100%] object-contain"
                                      title={partner.name}
                                  />
                              </div>
                          </SwiperSlide>
                      ))}
                  </Swiper>
              </div>

          </div>
      </section>
  );
}

export default Partners;


