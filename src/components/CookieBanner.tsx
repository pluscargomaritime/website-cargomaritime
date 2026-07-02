"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function CookieBanner() {
  const t = useTranslations("common");
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      style={{ background: "var(--color-ink)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p className="text-xs text-white/70 max-w-2xl">
        {t("cookieText")}{" "}
        <a href="#" className="text-primary underline">
          {t("cookiePrivacy")}
        </a>
        .
      </p>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => setVisible(false)}
          className="text-xs border border-white/20 text-white/70 px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors"
        >
          {t("cookieEssential")}
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-xs text-white font-semibold px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark transition-colors"
        >
          {t("cookieAcceptAll")}
        </button>
      </div>
    </div>
  );
}
