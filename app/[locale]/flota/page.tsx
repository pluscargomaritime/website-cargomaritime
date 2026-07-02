"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/navigation";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Kicker } from "@/src/components/Kicker";

const ROUTES: Record<string, string> = {
  home: "/", servicios: "/servicios", rutas: "/rutas",
  horario: "/horario", flota: "/flota", nosotros: "/nosotros", contacto: "/contacto",
};

export default function FlotaPage() {
  const t = useTranslations("flota");
  const router = useRouter();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navigate = (p: string) => {
    router.push(ROUTES[p] || "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const vessels = [
    { img: "/images/fleet-1.png", name: t("vessel1Name"), tipo: t("vessel1Type"), teu: t("vessel1Teu"), bandera: t("vessel1Flag"), ruta: t("vessel1Route") },
    { img: "/images/fleet-2.png", name: t("vessel2Name"), tipo: t("vessel2Type"), teu: t("vessel2Teu"), bandera: t("vessel2Flag"), ruta: t("vessel2Route") },
    { img: "/images/service-3.png", name: t("vessel3Name"), tipo: t("vessel3Type"), teu: t("vessel3Teu"), bandera: t("vessel3Flag"), ruta: t("vessel3Route") },
  ];

  const fields = [
    { key: "tipo", label: t("colType") },
    { key: "teu", label: t("colCapacity") },
    { key: "bandera", label: t("colFlag") },
    { key: "ruta", label: t("colAssignedRoute") },
  ] as const;

  return (
    <div className="min-h-screen font-sans">
      <Header onNavigate={navigate} onQuote={() => setQuoteOpen(true)} />
      <div className="pt-[105px] pb-20">
        <div className="py-14 bg-ink">
          <div className="max-w-7xl mx-auto px-4">
            <Kicker>{t("kicker")}</Kicker>
            <h1 className="text-4xl font-bold text-white font-heading">{t("title")}</h1>
            <p className="text-white/70 mt-3">{t("desc")}</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vessels.map((vessel) => (
              <div key={vessel.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-52 overflow-hidden relative">
                  <Image src={vessel.img} alt={vessel.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4 font-heading text-ink">{vessel.name}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {fields.map(({ key, label }) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-2.5">
                        <div className="text-xs text-gray-400 uppercase tracking-wide">{label}</div>
                        <div className="text-sm font-semibold mt-0.5 text-ink">{vessel[key]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
