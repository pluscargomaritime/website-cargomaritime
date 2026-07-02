"use client";

import { ChevronRight, Share2, Mail, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { LogoMark } from "./LogoMark";
import { CookieBanner } from "./CookieBanner";
import { LinkedIn } from "./social/LinkedIn";
import { Instagram } from "./social/Instagram";
import { WhatsApp } from "./social/WhatsApp";

export function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  const t = useTranslations("common");
  const nav = useTranslations("nav");

  const pages = [
    { key: "servicios", label: nav("servicios") },
    { key: "rutas", label: nav("rutas") },
    { key: "horario", label: nav("horario") },
    { key: "flota", label: nav("flota") },
    { key: "nosotros", label: nav("nosotros") },
    { key: "contacto", label: nav("contacto") },
  ];

  const legalLinks = [
    "Condiciones generales",
    "Condiciones B/L",
    "Procedimiento de reclamos",
    "Aviso legal",
    "Política de privacidad",
    "Política anticorrupción",
  ];

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <LogoMark dark={false} />
            <p className="mt-4 text-white/65 text-sm leading-relaxed">
              Conectamos puertos clave de Europa, el Caribe, Centroamérica y la costa Atlántica
              de Brasil para fortalecer tu cadena de suministro.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                aria-label="LinkedIn"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-primary"
              >
                <LinkedIn className="w-4 h-4 text-white" />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/pluscargomaritime?igsh=aXdmNDJ5aXI0aHRu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-primary"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                aria-label="WhatsApp"
                href="https://wa.me/34610781452"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-primary"
              >
                <WhatsApp className="w-4 h-4 text-white" />
              </a>
              <button
                aria-label="Compartir"
                onClick={() => {
                  const url = window.location.href;
                  if (navigator.share) {
                    navigator.share({ title: "Cargo Maritime", url });
                  } else {
                    navigator.clipboard.writeText(url);
                    alert("Enlace copiado al portapapeles");
                  }
                }}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-primary"
              >
                <Share2 size={14} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-primary">
              {t("pages")}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {pages.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => onNavigate(item.key)}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={12} className="text-primary" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-primary">
              {t("moreInfo")}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {legalLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight size={12} className="text-primary" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-primary">
              {t("newsletter")}
            </h4>
            <p className="text-white/65 text-sm mb-4">
              {t("newsletterDesc")}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("newsletterPlaceholder")}
                className="flex-1 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              />
              <button className="px-3.5 py-2 rounded-lg bg-primary hover:bg-primary-dark transition-colors">
                <Send size={14} />
              </button>
            </div>
            <div className="mt-6 space-y-2 text-sm text-white/65">
              <p className="flex items-center gap-2">
                <Mail size={13} className="text-primary" /> info@cargomaritime.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={13} className="text-primary" /> +34 XXX XXX XXX
              </p>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p>© 2026 Cargo Maritime Global Lines &amp; Trading PLC. Todos los derechos reservados.</p>
        </div>
      </div>
      <CookieBanner />
    </footer>
  );
}
