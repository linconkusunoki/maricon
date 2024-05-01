"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Link from "next/link";
import React, { useEffect } from "react";

const ConfirmarPresenca = () => {
  const [step, setStep] = React.useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <>
      <Header className="bg-beige" />

      <main className="flex items-center justify-center px-8 pt-24 pb-32 text-center bg-beige">
        <div className="flex flex-col gap-16">
          <h1 className="text-earth text-[54px] uppercase text-center font-secondary">
            Lista de Presentes
          </h1>

          <div className="lg:flex md:gap-16">
            <div className="relative md:min-w-[420px]">
              <img src="euro.png" />
              <Link href="/lista-presentes">
                <button className="absolute px-4 py-2 font-semibold rounded-full -translate-x-1/3 -translate-y-1/4 text-nowrap bg-bronze text-beige font-primary top-1/2 left-1/2 md:text-2xl md:py-4 md:px-8">
                  Presentear em Euro
                </button>
              </Link>
            </div>

            <div className="relative md:min-w-[420px]">
              <img src="real.png" />
              <Link href="/lista-presentes">
                <button className="absolute px-4 py-2 font-semibold rounded-full -translate-x-1/3 -translate-y-1/4 text-nowrap bg-bronze text-beige font-primary top-1/2 left-1/2 md:text-2xl md:py-4 md:px-8">
                  Presentear em Real
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer className="bg-sand" />
    </>
  );
};

export default ConfirmarPresenca;
