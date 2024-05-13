"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useLocale } from "@/components/language-context";

const DressingPage = () => {
  const { t } = useLocale();
  return (
    <div className="bg-green">
      <Header className="bg-green" />

      <main className="grid gap-10 p-5 pb-20 md:gap-20">
        <section className="max-w-[785px] mx-auto">
          <h1 className="mb-5 text-[32px] text-center uppercase md:text-5xl font-secondary text-beige">
            {t.dress_title}
          </h1>
          <p className="text-center font-primary text-beige">{t.dress_p1}</p>
        </section>

        <section>
          <h1 className="mb-5 text-2xl text-center md:text-3xl font-secondary text-beige">
            {t.dress_temperature}
          </h1>

          <img
            src="sol-lua.png"
            className="w-full lg:max-w-[820px] lg:mx-auto"
          />
        </section>

        <section>
          <h2 className="mb-5 text-2xl text-center font-secondary text-beige">
            {t.dress_palette}
          </h2>

          <img src="paleta-cores.png" className="lg:max-w-[744px] mx-auto" />
        </section>

        <section>
          <h2 className="mb-5 text-2xl text-center font-secondary text-beige">
            {t.dress_inspirations}
          </h2>

          <img src="/grid-mobile.png" className="w-full md:hidden" />
          <img
            src="/grid-desktop.png"
            className="hidden w-full md:block max-w-[1200px] mx-auto"
          />
          <div className="flex justify-center"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DressingPage;
