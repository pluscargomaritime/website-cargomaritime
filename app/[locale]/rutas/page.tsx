"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Ship, Download, ArrowRight } from "lucide-react";
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

export default function RutasPage() {
  const t = useTranslations("rutas");
  const router = useRouter();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [tab, setTab] = useState(0);

  const navigate = (p: string) => {
    router.push(ROUTES[p] || "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openQuote = () => setQuoteOpen(true);

  const corridors = [
    {
      label: t("corridor1"),
      freq: t("corridor1Freq"),
      origin: t.raw("originPorts1") as string[],
      dest: t.raw("destPorts1") as string[],
    },
    {
      label: t("corridor2"),
      freq: t("corridor2Freq"),
      origin: t.raw("originPorts2") as string[],
      dest: t.raw("destPorts2") as string[],
    },
    {
      label: t("corridor3"),
      freq: t("corridor3Freq"),
      origin: t.raw("originPorts3") as string[],
      dest: t.raw("destPorts3") as string[],
    },
    {
      label: t("corridor4"),
      freq: t("corridor4Freq"),
      origin: t.raw("originPorts4") as string[],
      dest: t.raw("destPorts4") as string[],
    },
  ];

  const docs = [t("doc1"), t("doc2"), t("doc3"), t("doc4")];

  return (
    <div className="min-h-screen font-sans">
      <Header onNavigate={navigate} onQuote={openQuote} />
      <div className="pt-[105px] pb-20">
        <div className="py-14 bg-ink">
          <div className="max-w-7xl mx-auto px-4">
            <Kicker>{t("kicker")}</Kicker>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">{t("title")}</h1>
            <p className="text-white/70 mt-3 max-w-xl">{t("desc")}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {corridors.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setTab(i)}
                className="px-5 py-2.5 rounded-full text-sm font-bold transition-all"
                style={
                  tab === i
                    ? { background: "var(--color-primary)", color: "white" }
                    : { border: "2px solid #e5e7eb", color: "#6b7280" }
                }
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="rounded-3xl p-8 mb-10 bg-ink">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <p className="font-bold text-xs uppercase tracking-widest mb-3 text-primary">{t("originTitle")}</p>
                <div className="space-y-2">
                  {corridors[tab].origin.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-white">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-sm">{p}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-3 text-xs hover:underline flex items-center gap-1 text-primary">
                  {t("moreOrigins")}
                </button>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary">
                  <Ship size={28} className="text-white" />
                </div>
                <div className="text-white/55 text-xs mt-2 text-center max-w-[100px]">{corridors[tab].freq}</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-xs uppercase tracking-widest mb-3 text-primary">{t("destTitle")}</p>
                <div className="space-y-2">
                  {corridors[tab].dest.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-white/85">
                      <MapPin size={14} className="text-white/40" />
                      <span className="text-sm">{p}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-3 text-xs hover:underline flex items-center gap-1 text-primary">
                  {t("moreDests")}
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-10 bg-primary">
            <div>
              <h3 className="text-white font-bold text-xl mb-1 font-heading">{t("ctaBanner")}</h3>
              <p className="text-white/80 text-sm">{t("ctaPhone")}</p>
            </div>
            <button
              onClick={openQuote}
              className="shrink-0 bg-white font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm"
              style={{ color: "var(--color-primary)" }}
            >
              {t("ctaButton")} <ArrowRight size={16} />
            </button>
          </div>

          <h2 className="text-xl font-bold mb-4 font-heading text-ink">{t("moreInfo")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {docs.map((doc) => (
              <div
                key={doc}
                className="border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition-shadow cursor-pointer group"
              >
                <span className="text-sm font-medium text-ink">{doc}</span>
                <Download size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer onNavigate={navigate} />
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </div>
  );
}
