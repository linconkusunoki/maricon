"use client";

import { useState } from "react";
import { Accordion } from "./accordion";
import { useLocale } from "./language-context";

export function Faq() {
  const { t } = useLocale();
  const [visible, setVisible] = useState();

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
                onClick={() => setVisible(visible === 1 ? null : 1)}
                visible={visible === 1}
                title={t.q1_title}
                content={
                  <p className="font-primary">
                    {t.q1_answer}
                    <a
                      href="/confirmar-presenca"
                      className="underline text-earth"
                      target="_blank"
                    >
                      {t.confirmar_presenca_arrow}
                    </a>
                  </p>
                }
              />

              <Accordion
                onClick={() => setVisible(visible === 2 ? null : 2)}
                visible={visible === 2}
                title={t.q2_title}
                content={
                  <p className="font-primary">
                    {t.q2_answer}
                    <br />
                    <a
                      href="https://maps.app.goo.gl/daumZvH3X1AKDk3r7"
                      className="underline text-earth"
                      target="_blank"
                    >
                      {t.open_in_maps}
                    </a>
                  </p>
                }
              />

              <Accordion
                onClick={() => setVisible(visible === 3 ? null : 3)}
                visible={visible === 3}
                title={t.q3_title}
                content={<p className="font-primary">{t.q3_answer}</p>}
              />

              <Accordion
                onClick={() => setVisible(visible === 4 ? null : 4)}
                visible={visible === 4}
                title={t.q4_title}
                content={<p className="font-primary">{t.q4_answer}</p>}
              />
            </div>

            <div className="xl:max-w-[338px]">
              <Accordion
                onClick={() => setVisible(visible === 5 ? null : 5)}
                visible={visible === 5}
                title={t.q5_title}
                content={
                  <p className="font-primary">
                    {t.q5_answer}
                    <a
                      href="/vestimenta"
                      className="underline text-earth"
                      target="_blank"
                    >
                      {t.see_palette}
                    </a>
                  </p>
                }
              />

              <Accordion
                onClick={() => setVisible(visible === 6 ? null : 6)}
                visible={visible === 6}
                title={t.q6_title}
                content={<p className="font-primary">{t.q6_answer}</p>}
              />

              <Accordion
                onClick={() => setVisible(visible === 7 ? null : 7)}
                visible={visible === 7}
                title={t.q7_title}
                content={<p className="font-primary">{t.q7_answer}</p>}
              />

              <Accordion
                onClick={() => setVisible(visible === 8 ? null : 8)}
                visible={visible === 8}
                title={t.q8_title}
                content={
                  <p className="font-primary">
                    {t.q8_answer}
                    <a
                      href="/confirmar-presenca"
                      className="underline text-earth"
                      target="_blank"
                    >
                      {t.confirmar_presenca_arrow}
                    </a>
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
