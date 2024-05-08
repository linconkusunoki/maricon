"use client";

import { useLocale } from "./language-context";

export function Footer({ className }) {
  const { t, locale, setLocale } = useLocale();

  return (
    <section
      className={`py-10 text-xs text-center bg-beige font-primary text-earth ${className}`}
    >
      <p>{t.footer_text}</p>
      <select
        value={locale}
        onChange={(e) => {
          setLocale(e.target.value);
          localStorage.setItem("locale", e.target.value);
        }}
      >
        <option value="pt">Português</option>
        <option value="en">English</option>
      </select>
    </section>
  );
}
