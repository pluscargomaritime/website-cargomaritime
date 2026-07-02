"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, Clock, Globe, Users, ArrowRight } from "lucide-react";
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

export default function NosotrosPage() {
  const t = useTranslations("nosotros");
  const router = useRouter();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navigate = (p: string) => {
    router.push(ROUTES[p] || "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const values = [
    { icon: Shield, title: t("value1Title"), desc: t("value1Desc") },
    { icon: Clock, title: t("value2Title"), desc: t("value2Desc") },
    { icon: Globe, title: t("value3Title"), desc: t("value3Desc") },
    { icon: Users, title: t("value4Title"), desc: t("value4Desc") },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Header onNavigate={navigate} onQuote={() => setQuoteOpen(true)} />
      <div className="pt-[105px] pb-20">
        <div className="py-14 bg-ink">
          <div className="max-w-7xl mx-auto px-4">
            <Kicker>{t("kicker")}</Kicker>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">{t("title")}</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">{t("p1")}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{t("p2")}</p>
              <PillBtn onClick={() => setQuoteOpen(true)}>
                {t("cta")} <ArrowRight size={16} />
              </PillBtn>
            </div>
            <div className="relative">
              <Image src="/images/about.png" alt="Operaciones portuarias" width={600} height={400} className="w-full h-80 object-cover rounded-2xl shadow-xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              { title: t("missionTitle"), emoji: t("missionEmoji"), text: t("missionText") },
              { title: t("visionTitle"), emoji: t("visionEmoji"), text: t("visionText") },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 bg-ink">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h2 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h2>
                <p className="text-white/65 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mb-14">
            <div className="text-center mb-10">
              <Kicker>{t("valuesKicker")}</Kicker>
              <h2 className="text-3xl font-bold font-heading text-ink">{t("valuesTitle")}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary/10">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 font-heading text-ink">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-2 font-heading text-ink">{t("alliancesTitle")}</h2>
            <p className="text-gray-500 text-sm mb-4">{t("alliancesDesc")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[t("alliance1"), t("alliance2"), t("alliance3")].map((org) => (
                <div key={org} className="border-2 border-dashed border-gray-300 rounded-xl px-5 py-3 text-gray-400 text-sm">
                  {org}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={navigate} />
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </div>
  );
}
