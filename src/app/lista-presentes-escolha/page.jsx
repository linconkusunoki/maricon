"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useLocale } from "@/components/language-context";
import Link from "next/link";
import React from "react";

const ListaPresentesEscolha = () => {
  const { t } = useLocale();

  return (
    <>
      <Header className="bg-beige" light />

      <main
        className="flex items-center justify-center px-8 pt-10 pb-32 text-center bg-beige"
        style={{ minHeight: "calc(100vh - 190px)" }}
      >
        <div className="flex flex-col gap-10">
          <h1 className="text-earth text-[32px] lg:text-[54px] uppercase text-center font-secondary">
            {t.gift_title}
          </h1>

          <div className="flex flex-col items-center lg:flex-row md:gap-16">
            <div className="relative md:min-w-[420px] w-full">
              <img src="euro.png" className="max-w-[200px]" />
              <Link href="/lista-presentes">
                <button className="absolute right-0 px-4 py-2 font-semibold rounded-full -translate-y-1/4 text-nowrap bg-bronze text-beige font-primary top-1/2 md:text-2xl md:py-4 md:px-8">
                  {t.gift_euro}
                </button>
              </Link>
            </div>

            <div className="relative md:min-w-[420px] w-full">
              <img src="real.png" className="max-w-[180px]" />
              <Link href="/lista-presentes">
                <button className="absolute right-0 px-4 py-2 font-semibold rounded-full -translate-y-1/4 text-nowrap bg-bronze text-beige font-primary top-1/2 md:text-2xl md:py-4 md:px-8">
                  {t.gift_real}
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

export default ListaPresentesEscolha;
