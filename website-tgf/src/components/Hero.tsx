import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Award, Users, ArrowRight, Briefcase, Ruler, MapPin, Clock} from "lucide-react";
import {Handshake} from "lucide-react";

function useInView(threshold = 0.35) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const obs = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            {threshold}
        );
        obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);

    return {ref, inView};
}

function useCountUp(target: number, start: boolean, durationMs = 1200) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;
        let raf = 0;
        const t0 = performance.now();

        const tick = (t: number) => {
            const p = Math.min((t - t0) / durationMs, 1);
            // easing douce
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * target));
            if (p < 1) raf = requestAnimationFrame(tick);
        };

        setValue(0);
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, start, durationMs]);

    return value;
}


const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }



    };

    const { ref: statsRef, inView: statsInView } = useInView(0.25);

// chiffres (tu peux ajuster)
    const years = useCountUp(12, statsInView);
    const partners = useCountUp(10, statsInView);
    const projects = useCountUp(20, statsInView);
    const cities = useCountUp(5, statsInView);

// pour 700 000 m²
    const surface = useCountUp(700000, statsInView);

    return (
        <section id="accueil"
                 className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Background image */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/videos/Atlas Concorde - Leffet marbre Marvel dans la salle de bain.mp4"
                            type="video/mp4"/>
                </video>
            </div>

            <div className="absolute inset-0 bg-white bg-opacity-35"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
                <img
                    src="/images/LOGO-COULEUR.png"
                    alt="Logo TGF"
                    style={{height: '182px'}} // entre h-28 (112px) et h-32 (128px)
                    className="w-auto mb-4"
                />


                {/* Texte sous le logo */}
                <span className="text-2xl md:text-3xl font-semibold text-[#80251E] mb-8">
    Marbre & Granite d'Exception
  </span>
                {/*<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-black">*/}
                {/*    Spécialistes de l'importation, du façonnage et de la pose de marbre, granite et pierres naturelles*/}
                {/*    depuis plus de 5 ans*/}
                {/*</p>*/}

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
                <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <Award className="w-8 h-8 text-[#80251E]"/>
                        </div>
                        <div className="text-3xl font-bold mb-2 text-black">{years}+</div>
                        <div className="text-black font-bold">Années d'Expérience</div>
                    </div>

                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <Handshake className="w-8 h-8 text-[#80251E]"/>
                        </div>
                        <div className="text-3xl font-bold mb-2 text-black">+{partners}</div>
                        <div className="text-black font-bold">Partenaires</div>
                    </div>

                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <Briefcase className="w-8 h-8 text-[#80251E]"/>
                        </div>
                        <div className="text-3xl font-bold mb-2 text-black">+{projects}</div>
                        <div className="text-black font-bold">Projets Réalisés</div>
                    </div>

                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <Ruler className="w-8 h-8 text-[#80251E]"/>
                        </div>
                        <div className="text-3xl font-bold mb-2 text-black">
                            +{surface.toLocaleString('fr-FR')} m²
                        </div>
                        <div className="text-black font-bold">Surface Façonnées</div>
                    </div>

                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <MapPin className="w-8 h-8 text-[#80251E]"/>
                        </div>
                        <div className="text-3xl font-bold mb-2 text-black">+{cities}</div>
                        <div className="text-black font-bold">Villes ou régions couvertes</div>
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
