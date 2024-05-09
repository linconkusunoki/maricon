"use client";

import { useLocale } from "./language-context";

export function Footer({ className }) {
  const { t } = useLocale();

  return (
    <section
      className={`py-10 text-xs text-center bg-beige font-primary text-earth ${className}`}
    >
      <p>{t.footer_text}</p>
    </section>
  );
}
