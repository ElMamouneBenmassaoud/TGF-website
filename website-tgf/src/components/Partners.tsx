import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

interface Partner {
    id: number;
    name: string;
    logo_path: string;
}

const Partners = () => {
    const [partners, setPartners] = useState<Partner[]>([]);

    useEffect(() => {
        const fetchPartners = async () => {
            const { data, error } = await supabase
                .from('partenaires')
                .select('id, name, logo_path')
                .order('id', { ascending: true });

            if (error) {
                console.error('Erreur de chargement des partenaires:', error);
                return;
            }
            setPartners(data || []);
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
                        Ils nous font confiance pour leurs projets haut standing.
                    </p>
                </div>

                <div className="bg-white p-10 rounded-lg shadow-lg">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                            1280: { slidesPerView: 6 },
                        }}
                    >
                        {partners.map((partner) => {
                            const logoUrl = supabase.storage
                                .from('promoteur_logo')
                                .getPublicUrl(partner.logo_path).data.publicUrl;

                            return (
                                <SwiperSlide key={partner.id}>
                                    <div className="w-full flex flex-col items-center justify-center">
                                        <div className="aspect-[3/2] w-full max-w-[160px] mx-auto flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition p-3">
                                            <img
                                                src={logoUrl}
                                                alt={partner.name}
                                                className="max-h-[100%] max-w-[100%] object-contain"
                                                title={partner.name}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Partners;
