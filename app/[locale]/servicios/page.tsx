"use client";

import { useState } from "react";
import Image from "next/image";
import { Package, Ship, Anchor, Globe, Truck, Award, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/navigation";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { QuoteModal } from "@/src/components/QuoteModal";
import { Kicker } from "@/src/components/Kicker";
import { PillBtn } from "@/src/components/PillBtn";

const ROUTES: Record<string, string> = {
  home: "/", servicios: "/servicios", rutas: "/rutas",
  horario: "/horario", flota: "/flota", nosotros: "/nosotros", contacto: "/contacto",
};

export default function ServiciosPage() {
  const t = useTranslations("servicios");
  const router = useRouter();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navigate = (p: string) => {
    router.push(ROUTES[p] || "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openQuote = () => setQuoteOpen(true);

  const services = [
    {
      icon: Package, title: t("service1Title"), desc: t("service1Desc"),
      cases: t.raw("service1Cases") as string[], img: "/images/service-1.png",
    },
    {
      icon: Ship, title: t("service2Title"), desc: t("service2Desc"),
      cases: t.raw("service2Cases") as string[], img: "/images/service-2.png",
    },
    {
      icon: Anchor, title: t("service3Title"), desc: t("service3Desc"),
      cases: t.raw("service3Cases") as string[], img: "/images/service-3.png",
    },
    {
      icon: Globe, title: t("service4Title"), desc: t("service4Desc"),
      cases: t.raw("service4Cases") as string[], img: "/images/fleet-1.png",
    },
    {
      icon: Truck, title: t("service5Title"), desc: t("service5Desc"),
      cases: t.raw("service5Cases") as string[], img: "/images/fleet-2.png",
    },
    {
      icon: Award, title: t("service6Title"), desc: t("service6Desc"),
      cases: t.raw("service6Cases") as string[], img: "/images/port.png",
    },
  ];

  const subs = [
    { emoji: "🌾", label: t("sub1") },
    { emoji: "⚙️", label: t("sub2") },
    { emoji: "🌲", label: t("sub3") },
    { emoji: "⚡", label: t("sub4") },
    { emoji: "🏗️", label: t("sub5") },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Header onNavigate={navigate} onQuote={openQuote} />
      <div className="pt-[105px] pb-20">
        <div className="py-14 bg-ink">
          <div className="max-w-7xl mx-auto px-4">
            <Kicker>{t("kicker")}</Kicker>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">{t("title")}</h1>
            <p className="text-white/70 mt-3 max-w-2xl">{t("desc")}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-52 overflow-hidden relative">
                  <Image src={svc.img} alt={svc.title} width={600} height={300} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center bg-primary">
                    <svc.icon size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-heading text-ink">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs font-bold uppercase tracking-wide mb-2 text-ink">{t("casesLabel")}</p>
                    <ul className="space-y-1">
                      {svc.cases.map((c: string) => (
                        <li key={c} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle size={12} className="text-primary" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 mb-10 bg-ink">
            <div className="text-center mb-8">
              <Kicker>{t("subKicker")}</Kicker>
              <h2 className="text-2xl font-bold text-white font-heading">{t("subTitle")}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {subs.map((sub) => (
                <div key={sub.label} className="rounded-xl p-4 text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div className="text-3xl mb-2">{sub.emoji}</div>
                  <div className="text-white font-semibold text-sm">{sub.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center mb-6">
              <Kicker>Logística integral</Kicker>
              <h2 className="text-2xl font-bold font-heading text-ink">{t("incotermsTitle")}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {["EXW", "FCA / FAS", "FOB", "CFR", "CIF / CPT", "DAP / DAT", "DDP"].map((inco) => (
                <div key={inco} className="bg-white border border-gray-200 rounded-xl p-3 text-center">
                  <div className="font-bold text-sm text-primary">{inco}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <PillBtn onClick={openQuote}>
                Solicitar cotización <ArrowRight size={16} />
              </PillBtn>
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={navigate} />
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </div>
  );
}
