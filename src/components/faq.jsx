"use client";

import { Accordion } from "./accordion";
import { useLocale } from "./language-context";

export function Faq() {
  const { t } = useLocale();

  return (
    <section className="py-16 bg-beige">
      <div className="flex flex-col gap-4 mx-auto md:gap-8 text-earth">
        <h2 className="text-3xl text-center font-secondary xl:text-5xl">
          {t.faq_title}
        </h2>

        <div className="md:flex md:justify-center">
          <div className="px-4 xl:flex xl:gap-8">
            <div className="xl:max-w-[417px]">
              <Accordion
                title={t.q1_title}
                content={<p className="font-primary">{t.q1_answer}</p>}
              />

              <Accordion
                title={t.q2_title}
                content={
                  <p className="font-primary">
                    {t.q2_answer}
                    <br />
                    <a
                      href="https://maps.app.goo.gl/daumZvH3X1AKDk3r7"
                      className="underline text-earth"
                    >
                      {t.open_in_maps}
                    </a>
                  </p>
                }
              />

              <Accordion
                title={t.q3_title}
                content={<p className="font-primary">{t.q3_answer}</p>}
              />

              <Accordion
                title={t.q4_title}
                content={<p className="font-primary">{t.q4_answer}</p>}
              />
            </div>

            <div className="xl:max-w-[338px]">
              <Accordion
                title={t.q5_title}
                content={
                  <p className="font-primary">
                    {t.q5_answer}
                    <br />
                    <a href="#" className="underline text-earth">
                      {t.see_palette}
                    </a>
                  </p>
                }
              />

              <Accordion
                title={t.q6_title}
                content={<p className="font-primary">{t.q6_answer}</p>}
              />

              <Accordion
                title={t.q7_title}
                content={<p className="font-primary">{t.q7_answer}</p>}
              />

              <Accordion
                title={t.q8_title}
                content={<p className="font-primary">{t.q8_answer}</p>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
