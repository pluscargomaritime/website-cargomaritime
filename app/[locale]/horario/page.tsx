"use client";

import { useState } from "react";
import { Calendar, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/navigation";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Kicker } from "@/src/components/Kicker";

const ROUTES: Record<string, string> = {
  home: "/", servicios: "/servicios", rutas: "/rutas",
  horario: "/horario", flota: "/flota", nosotros: "/nosotros", contacto: "/contacto",
};

export default function HorarioPage() {
  const t = useTranslations("horario");
  const router = useRouter();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navigate = (p: string) => {
    router.push(ROUTES[p] || "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const rows = [
    { route: t("row1Route"), vessel: t("row1Vessel"), origin: t("row1Origin"), etd: t("row1Etd"), dest: t("row1Dest"), eta: t("row1Eta"), freq: t("row1Freq") },
    { route: t("row2Route"), vessel: t("row2Vessel"), origin: t("row2Origin"), etd: t("row2Etd"), dest: t("row2Dest"), eta: t("row2Eta"), freq: t("row2Freq") },
    { route: t("row3Route"), vessel: t("row3Vessel"), origin: t("row3Origin"), etd: t("row3Etd"), dest: t("row3Dest"), eta: t("row3Eta"), freq: t("row3Freq") },
    { route: t("row4Route"), vessel: t("row4Vessel"), origin: t("row4Origin"), etd: t("row4Etd"), dest: t("row4Dest"), eta: t("row4Eta"), freq: t("row4Freq") },
    { route: t("row5Route"), vessel: t("row5Vessel"), origin: t("row5Origin"), etd: t("row5Etd"), dest: t("row5Dest"), eta: t("row5Eta"), freq: t("row5Freq") },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Header onNavigate={navigate} onQuote={() => setQuoteOpen(true)} />
      <div className="pt-[105px] pb-20">
        <div className="py-14 bg-ink">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <Kicker>{t("kicker")}</Kicker>
              <h1 className="text-4xl font-bold text-white font-heading">{t("title")}</h1>
            </div>
            <button
              className="flex items-center gap-2 font-bold px-5 py-2.5 rounded-full text-sm transition-colors self-start"
              style={{ border: "2px solid var(--color-primary)", color: "var(--color-primary)" }}
            >
              <Download size={15} /> {t("downloadPDF")}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div
            className="rounded-xl p-4 mb-6 flex items-start gap-3"
            style={{ background: "rgba(233,195,73,0.1)", border: "1px solid rgba(233,195,73,0.27)" }}
          >
            <Calendar size={18} className="text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-ink">
              <strong>{t("note")}</strong> {t("noteText")}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-ink">
                <tr>
                  {["colRoute", "colVessel", "colOrigin", "colEtd", "colDest", "colEta", "colFreq"].map((col) => (
                    <th key={col} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide whitespace-nowrap text-white">
                      {t(col)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold whitespace-nowrap text-ink">{row.route}</td>
                    <td className="px-4 py-3 text-gray-700">{row.vessel}</td>
                    <td className="px-4 py-3 text-gray-700">{row.origin}</td>
                    <td className="px-4 py-3 text-gray-700">{row.etd}</td>
                    <td className="px-4 py-3 text-gray-700">{row.dest}</td>
                    <td className="px-4 py-3 text-gray-700">{row.eta}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: "rgba(233,195,73,0.1)", color: "var(--color-primary)" }}>
                        {row.freq}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
