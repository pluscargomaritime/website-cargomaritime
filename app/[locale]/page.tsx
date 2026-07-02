"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Ship, MapPin, Phone, Mail, Globe, ChevronRight, ArrowRight, Anchor, Package,
  Truck, Shield, Clock, Star, Download, Users, Award, CheckCircle, Send,
} from "lucide-react";
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

export default function HomePage() {
  const t = useTranslations("home");
  const router = useRouter();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navigate = (p: string) => {
    router.push(ROUTES[p] || "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openQuote = () => setQuoteOpen(true);

  const services = [
    { img: "/images/service-1.png", title: "Carga fraccionada", desc: "Manejo de carga general no containerizada con cuidado especializado." },
    { img: "/images/service-2.png", title: "LCL – Consolidada", desc: "Optimiza costes consolidando tu carga con otros clientes en el mismo contenedor." },
    { img: "/images/service-3.png", title: "FCL – Contenedores", desc: "Contenedores completos secos, refrigerados y especializados." },
    { img: "/images/fleet-1.png", title: "Carga a granel", desc: "Transporte de graneles sólidos y líquidos con flota certificada." },
    { img: "/images/fleet-2.png", title: "RoRo / LoLo", desc: "Vehículos, maquinaria rodante y carga sobre ruedas con rampas especializadas." },
    { img: "/images/port.png", title: "Carga de proyecto", desc: "Soluciones para cargas sobredimensionadas y proyectos de alto valor." },
  ];

  const routes = [
    {
      corridor: "Iberia – Caribe",
      ports: ["Vigo", "Bilbao", "Lisboa"],
      dest: ["Cartagena de Indias", "San Juan PR", "República Dom."],
    },
    {
      corridor: "Iberia – Centroamérica",
      ports: ["Vigo", "Bilbao"],
      dest: ["Puerto Quetzal", "Puerto Cortés", "Limón"],
    },
    {
      corridor: "Iberia – Brasil",
      ports: ["Vigo", "Lisboa"],
      dest: ["Santos", "Rio de Janeiro", "Paranaguá"],
    },
  ];

  const whyItems = [
    { icon: Shield, title: t("why1Title"), desc: t("why1Desc") },
    { icon: Clock, title: t("why2Title"), desc: t("why2Desc") },
    { icon: Globe, title: t("why3Title"), desc: t("why3Desc") },
  ];

  const testimonials = [
    { img: "/images/testimonial-1.png", name: t("testimonial1Name"), company: t("testimonial1Company"), text: t("testimonial1Text"), orange: false },
    { img: "/images/testimonial-2.png", name: t("testimonial2Name"), company: t("testimonial2Company"), text: t("testimonial2Text"), orange: true },
    { img: "/images/testimonial-3.png", name: t("testimonial3Name"), company: t("testimonial3Company"), text: t("testimonial3Text"), orange: false },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Header onNavigate={navigate} onQuote={openQuote} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <Image src="/images/hero.png" alt="Buque portacontenedores" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--color-ink) 0%, color-mix(in srgb, var(--color-ink) 60%, transparent) 55%, color-mix(in srgb, var(--color-ink) 27%, transparent) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 py-32 pt-48">
          <div className="max-w-2xl">
            <Kicker>{t("kicker")}</Kicker>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 font-heading">
              {t("title")}
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              {t("desc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <PillBtn onClick={openQuote}>
                {t("ctaQuote")} <ArrowRight size={16} />
              </PillBtn>
              <PillBtn onClick={() => navigate("rutas")} variant="white">
                {t("ctaRoutes")} <ArrowRight size={16} />
              </PillBtn>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/25">
            {[
              { icon: Anchor, label: t("benefit1") },
              { icon: Globe, label: t("benefit2") },
              { icon: Truck, label: t("benefit3") },
              { icon: MapPin, label: t("benefit4") },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col sm:flex-row items-center gap-3 py-5 px-4 text-white">
                <Icon size={26} className="shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-center sm:text-left">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <Image src="/images/about.png" alt="Puerto con grúas de carga" width={600} height={400} className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl" />
            <div className="absolute -bottom-5 -right-5 text-white p-5 rounded-xl shadow-xl hidden md:block bg-primary">
              <div className="text-3xl font-bold font-heading">15+</div>
              <div className="text-xs font-semibold">{t("aboutYears")}</div>
            </div>
          </div>
          <div>
            <Kicker>{t("aboutKicker")}</Kicker>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-ink">
              {t("aboutTitle")}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t("aboutP1")}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{t("aboutP2")}</p>
            <PillBtn onClick={() => navigate("nosotros")} variant="outline">
              {t("aboutCTA")} <ArrowRight size={16} />
            </PillBtn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-ink">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "15+", label: t("stat1") },
            { n: "50+", label: t("stat2") },
            { n: "1.000+", label: t("stat3") },
            { n: "24/7", label: t("stat4") },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-bold font-heading text-primary">{n}</div>
              <div className="text-white/75 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Kicker>{t("servicesKicker")}</Kicker>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-ink">{t("servicesTitle")}</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">{t("servicesDesc")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="h-44 overflow-hidden">
                  <Image src={svc.img} alt={svc.title} width={400} height={200} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold mb-2 text-ink">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <PillBtn onClick={() => navigate("servicios")}>
              {t("servicesCTA")} <ArrowRight size={16} />
            </PillBtn>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <Kicker>{t("routesKicker")}</Kicker>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-ink">{t("routesTitle")}</h2>
          </div>
          <div className="rounded-3xl p-8 md:p-12 bg-ink">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {routes.map((route) => (
                <div key={route.corridor} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div className="font-bold text-sm mb-3 text-primary">{route.corridor}</div>
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-2">Origen</p>
                  {route.ports.map((p) => (
                    <div key={p} className="text-white text-sm flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {p}
                    </div>
                  ))}
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-2 mt-3">Destino</p>
                  {route.dest.map((p) => (
                    <div key={p} className="text-white/80 text-sm flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      {p}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <PillBtn onClick={() => navigate("rutas")}>
                {t("routesCTA")} <ArrowRight size={16} />
              </PillBtn>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Kicker>{t("whyKicker")}</Kicker>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-ink">{t("whyTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-primary/10">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 font-heading text-ink">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Door to door */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Kicker>{t("doorKicker")}</Kicker>
            <h2 className="text-3xl font-bold text-white font-heading">{t("doorTitle")}</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            <div
              className="hidden md:block absolute top-8 h-0.5 border-t-2 border-dashed"
              style={{ left: "calc(10% + 32px)", right: "calc(10% + 32px)", borderColor: "rgba(233,195,73,0.33)" }}
            />
            {[
              { icon: Package, label: t("doorStep1"), sub: t("doorStep1Sub") },
              { icon: Truck, label: t("doorStep2"), sub: t("doorStep2Sub") },
              { icon: Anchor, label: t("doorStep3"), sub: t("doorStep3Sub") },
              { icon: Ship, label: t("doorStep4"), sub: t("doorStep4Sub") },
              { icon: CheckCircle, label: t("doorStep5"), sub: t("doorStep5Sub") },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2 z-10 flex-1 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-primary">
                  <Icon size={26} className="text-white" />
                </div>
                <div className="text-white font-semibold text-sm">{label}</div>
                <div className="text-xs font-mono text-primary">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Kicker>{t("testimonialsKicker")}</Kicker>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-ink">{t("testimonialsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-6"
                style={{ background: t.orange ? "var(--color-primary)" : "#f9fafb" }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      style={{ color: t.orange ? "white" : "var(--color-primary)", fill: t.orange ? "white" : "var(--color-primary)" }}
                    />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-4 ${t.orange ? "text-white" : "text-gray-600"}`}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image src={t.img} alt={t.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className={`font-bold text-sm ${t.orange ? "text-white" : "text-ink"}`}>{t.name}</div>
                    <div className={`text-xs ${t.orange ? "text-white/75" : "text-gray-500"}`}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Kicker>{t("contactKicker")}</Kicker>
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">{t("contactTitle")}</h2>
            <p className="text-white/70 leading-relaxed mb-6">{t("contactDesc")}</p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: t("contactEmail") },
                { icon: Phone, label: "Teléfono", value: t("contactPhone") },
                { icon: Clock, label: "Horario", value: t("contactHours") },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-primary/15">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-white/45 text-xs uppercase tracking-wide">{label}</div>
                    <div className="text-white text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <h3 className="font-bold mb-5 text-ink">{t("contactFormTitle")}</h3>
            <div className="grid grid-cols-2 gap-4">
              {[t("contactFormName"), t("contactFormEmail"), t("contactFormPhone"), t("contactFormCity")].map((field) => (
                <div key={field}>
                  <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">{field}</label>
                  <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none" placeholder={field} />
                </div>
              ))}
              <div className="col-span-2">
                <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">{t("contactFormMessage")}</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none resize-none"
                  placeholder={t("contactFormPlaceholder")}
                />
              </div>
            </div>
            <button className="mt-4 w-full text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark transition-colors text-sm">
              {t("contactSubmit")} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Let's sail together */}
      <section className="relative py-28">
        <Image src="/images/sail-together.png" alt="Puerto" fill className="object-cover" />
        <div className="absolute inset-0 bg-ink" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Kicker>{t("sailKicker")}</Kicker>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 font-heading">{t("sailTitle")}</h2>
          <p className="text-white/80 text-lg mb-8">{t("sailDesc")}</p>
          <PillBtn onClick={openQuote}>
            {t("sailCTA")} <ArrowRight size={16} />
          </PillBtn>
        </div>
      </section>

      <Footer onNavigate={navigate} />
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </div>
  );
}
