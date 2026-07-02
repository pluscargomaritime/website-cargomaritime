"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/navigation";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Kicker } from "@/src/components/Kicker";

const ROUTES: Record<string, string> = {
  home: "/", servicios: "/servicios", rutas: "/rutas",
  horario: "/horario", flota: "/flota", nosotros: "/nosotros", contacto: "/contacto",
};

export default function ContactoPage() {
  const t = useTranslations("contacto");
  const router = useRouter();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navigate = (p: string) => {
    router.push(ROUTES[p] || "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fields = [
    { label: t("formName"), placeholder: t("formNamePlaceholder"), sm: 1 },
    { label: t("formEmail"), placeholder: t("formEmailPlaceholder"), sm: 1 },
    { label: t("formPhone"), placeholder: t("formPhonePlaceholder"), sm: 1 },
    { label: t("formCity"), placeholder: t("formCityPlaceholder"), sm: 1 },
    { label: t("formCompany"), placeholder: t("formCompanyPlaceholder"), sm: 1 },
  ];

  const contactItems = [
    { icon: Mail, label: "Email", value: t("contactEmail") },
    { icon: Phone, label: "Teléfono", value: t("contactPhone") },
    { icon: MapPin, label: "Dirección", value: t("contactAddress") },
    { icon: Clock, label: "Horario", value: t("contactHours") },
  ];

  const regions = [
    { label: t("agentCaribe"), placeholder: "Caribe" },
    { label: t("agentCentro"), placeholder: "Centroamérica" },
    { label: t("agentBrasil"), placeholder: "Brasil" },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Header onNavigate={navigate} onQuote={() => setQuoteOpen(true)} />
      <div className="pt-[105px] pb-20">
        <div className="py-14 bg-ink">
          <div className="max-w-7xl mx-auto px-4">
            <Kicker>{t("kicker")}</Kicker>
            <h1 className="text-4xl font-bold text-white font-heading">{t("title")}</h1>
            <p className="text-white/70 mt-3 max-w-xl">{t("desc")}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-6 font-heading text-ink">{t("formTitle")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fields.map((f) => (
                  <div key={f.label}>
                    <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">{f.label}</label>
                    <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none" placeholder={f.placeholder} />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">{t("formQueryType")}</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500">
                    <option>{t("formQueryOption1")}</option>
                    <option>{t("formQueryOption2")}</option>
                    <option>{t("formQueryOption3")}</option>
                    <option>{t("formQueryOption4")}</option>
                    <option>{t("formQueryOption5")}</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">{t("formMessage")}</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none resize-none"
                    placeholder={t("formMessagePlaceholder")}
                  />
                </div>
              </div>
              <button className="mt-5 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 bg-primary hover:bg-primary-dark transition-colors text-sm">
                {t("formSubmit")} <ArrowRight size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl p-6 text-white bg-ink">
                <h3 className="font-bold mb-4 font-heading">{t("contactInfo")}</h3>
                <div className="space-y-4 text-sm">
                  {contactItems.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <Icon size={14} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-white/45 text-xs">{label}</div>
                        <div className="text-white/85">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold mb-3 font-heading text-ink">{t("agentsLabel")}</h3>
                {regions.map((r) => (
                  <div key={r.label} className="border border-dashed border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-400 mb-2">
                    Agente {r.label} — [POR CONFIRMAR]
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
