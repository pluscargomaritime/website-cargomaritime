"use client";

import { ArrowRight, X } from "lucide-react";
import { useTranslations } from "next-intl";

export function QuoteModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations("common");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 backdrop-blur-sm" style={{ background: "rgba(18,18,18,0.75)" }} />
      <div
        className="relative bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-1 text-ink">
          {t("quoteTitle")}
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          {t("quoteDesc")}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">
              {t("originPort")}
            </label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
              placeholder={t("originPlaceholder")}
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">
              {t("destPort")}
            </label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
              placeholder={t("destPlaceholder")}
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">
              {t("cargoType")}
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500">
              <option>{t("fcl")}</option>
              <option>{t("lcl")}</option>
              <option>{t("breakBulk")}</option>
              <option>{t("bulk")}</option>
              <option>{t("roro")}</option>
              <option>{t("project")}</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">
              {t("estimatedWeight")}
            </label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
              placeholder={t("weightPlaceholder")}
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">
              {t("name")}
            </label>
            <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder={t("namePlaceholder")} />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">
              {t("email")}
            </label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
              placeholder={t("emailPlaceholder")}
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-bold uppercase tracking-wide block mb-1 text-ink">
              {t("estimatedDate")}
            </label>
            <input
              type="date"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500"
            />
          </div>
        </div>
        <button
          className="mt-6 w-full text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark transition-colors"
        >
          {t("submitQuote")} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
