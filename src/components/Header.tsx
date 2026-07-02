"use client";

import { useEffect, useState } from "react";
import { Globe, Mail, Phone, ArrowRight, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { LogoMark } from "./LogoMark";

const NAV_PAGES = ["servicios", "rutas", "horario", "flota", "nosotros", "contacto"] as const;

export function Header({
  onNavigate,
  onQuote,
}: {
  onNavigate: (p: string) => void;
  onQuote: () => void;
}) {
  const t = useTranslations("nav");
  const common = useTranslations("common");
  const pathname = usePathname();
  const currentPage = pathname === "/" || pathname === "" ? "home" : pathname.split("/")[1] || "home";
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isHome = currentPage === "home";
  const solidNav = scrolled || !isHome;

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0] || "es";

  const switchLocale = (locale: string) => {
    const rest = segments.slice(1).join("/");
    router.push(`/${rest || ""}`, { locale });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <div className="bg-ink" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9 text-xs text-white/75">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail size={11} /> info@cargomaritime.com
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone size={11} /> +34 XXX XXX XXX
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={11} />
            {(["ES", "EN"] as const).map((l, i) => {
              const code = l.toLowerCase();
              return (
                <span key={l} className="contents">
                  {i > 0 && <span className="text-white/25">|</span>}
                  <button
                    onClick={() => switchLocale(code)}
                    className="font-semibold transition-colors"
                    style={{ color: currentLocale === code ? "var(--color-primary)" : undefined }}
                  >
                    {l}
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="transition-all duration-300"
        style={{
          background: solidNav ? "white" : "color-mix(in srgb, var(--color-ink) 55%, transparent)",
          backdropFilter: solidNav ? undefined : "blur(8px)",
          boxShadow: solidNav ? "0 2px 16px rgba(0,0,0,0.08)" : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <button onClick={() => onNavigate("home")} className="shrink-0">
            <LogoMark dark={solidNav} />
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_PAGES.map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className="text-sm font-semibold transition-colors relative group"
                style={{
                  color:
                    currentPage === page
                      ? "var(--color-primary)"
                      : solidNav
                        ? "var(--color-ink)"
                        : "white",
                }}
              >
                {t(page)}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary transition-transform origin-left scale-x-0 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onQuote}
              className="hidden sm:flex items-center gap-2 text-white font-bold text-sm px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark transition-colors"
            >
              {common("quote")} <ArrowRight size={14} />
            </button>
            <button
              className="lg:hidden p-2"
              style={{ color: solidNav ? "var(--color-ink)" : "white" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_PAGES.map((page) => (
              <button
                key={page}
                onClick={() => {
                  onNavigate(page);
                  setMobileOpen(false);
                }}
                className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  color: currentPage === page ? "var(--color-primary)" : "var(--color-ink)",
                  background: currentPage === page ? "rgba(233,195,73,0.08)" : undefined,
                }}
              >
                {t(page)}
              </button>
            ))}
            <button
              onClick={() => {
                onQuote();
                setMobileOpen(false);
              }}
              className="mt-2 text-white font-bold text-sm px-5 py-3 rounded-full flex items-center justify-center gap-2 bg-primary"
            >
              {common("quote")} <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
