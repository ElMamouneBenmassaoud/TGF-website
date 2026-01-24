import React from "react";
import { ChefHat, LayoutGrid, ArrowRight } from "lucide-react";

const ExtraServices = () => {
    return (
        <section id="parquet" className="py-20 bg-white">
            <div id={"cuisine"}> </div>
            <div className="container mx-auto px-4">

                {/* Header "Lancement" */}
                {/* Title */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Prestations Complémentaires
                    </h2>
                    <div className="w-24 h-1 bg-[#C0392B] mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nous élargissons notre offre pour répondre à tous vos besoins de finition haut standing.
                    </p>
                </div>

                {/* Layout asymétrique */}
                <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Big card - Parquet (mise en avant) */}
                    <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                        {/* background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#80251E]/10 via-white to-gray-50" />
                        {/* shimmer */}
                        <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-white/40 blur-xl animate-shimmer" />

                        <div className="relative p-10">
                            <div className="flex items-start justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-[#C0392B]/10 flex items-center justify-center">
                                        <LayoutGrid className="w-7 h-7 text-[#C0392B]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Revêtement Parquet{" "}
                                            <span className="relative -top-2 ml-1 text-[11px] font-bold text-red-600 badge-wiggle">
                        Nouveau
                      </span>
                                        </h3>
                                        <p className="text-sm text-gray-600 font-medium mt-1">
                                            Pose & finitions modernes, rendu chaleureux
                                        </p>
                                    </div>
                                </div>

                                {/* badge top right */}
                                <span className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-[12px] font-semibold text-white shadow-sm">
                  Lancement
                </span>
                            </div>

                            <p className="mt-6 text-gray-700 leading-relaxed">
                                Une nouvelle prestation TGF pour compléter vos projets : alignements parfaits,
                                découpes nettes, finitions impeccables. Idéal pour donner du caractère à vos espaces.
                            </p>

                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-4">
                                    <div className="text-sm font-semibold text-gray-900">Rendu premium</div>
                                    <div className="text-sm text-gray-600">Textures modernes</div>
                                </div>
                                <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-4">
                                    <div className="text-sm font-semibold text-gray-900">Pose propre</div>
                                    <div className="text-sm text-gray-600">Finition nette</div>
                                </div>
                                <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-4">
                                    <div className="text-sm font-semibold text-gray-900">Durable</div>
                                    <div className="text-sm text-gray-600">Qualité sélectionnée</div>
                                </div>
                            </div>

                            <button
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="mt-8 inline-flex items-center gap-2 text-[#80251E] font-semibold hover:text-[#6b1f19] transition"
                            >
                                Obtenir un devis parquet
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Compact card - Cuisine */}
                    <div className="lg:col-span-5 rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
                        <div className="p-10 bg-gray-50">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#C0392B]/10 flex items-center justify-center">
                                    <ChefHat className="w-7 h-7 text-[#C0392B]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Cuisine</h3>
                                    <p className="text-sm text-gray-600 font-medium mt-1">
                                        Plans de travail & crédences
                                    </p>
                                </div>
                            </div>

                            <p className="mt-6 text-gray-700 leading-relaxed">
                                Habillage cuisine en marbre, granite ou pierre naturelle : esthétique, résistance,
                                finitions haut standing.
                            </p>

                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-[#C0392B]" />
                                    Découpe sur mesure
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-[#C0392B]" />
                                    Pose soignée
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-[#C0392B]" />
                                    Finitions premium
                                </div>
                            </div>

                            <button
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="mt-8 inline-flex items-center gap-2 text-[#80251E] font-semibold hover:text-[#6b1f19] transition"
                            >
                                Obtenir un devis cuisine
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* bottom strip accent */}
                        <div className="h-2 bg-gradient-to-r from-[#80251E] to-[#C0392B]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtraServices;
