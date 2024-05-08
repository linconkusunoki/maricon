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

      <main className="flex items-center justify-center px-8 pt-10 pb-32 text-center xl:text-left bg-beige">
        <div className="xl:max-w-[1200px] xl:mx-auto">
          <div className="xl:flex xl:justify-between xl:gap-10">
            <div className="flex flex-col gap-10">
              <div>
                <h1 className="text-earth text-[32px] lg:text-[54px] uppercase font-secondary mb-5">
                  {t.how_to_get}
                </h1>

                <p className="mb-2 font-semibold uppercase font-primary text-earth">
                  📍Masía Xamandreu
                </p>
                <p className="text-sm uppercase font-primary text-earth">
                  Carretera Godella - Bétera CV310, Km 4, 46110 Godella,
                  Valencia
                </p>
              </div>

              <div className="xl:hidden">
                <img src="masia.png" className="rounded-t-full" />
                <div className="flex justify-center -mt-7">
                  <Link
                    className="btn"
                    target="_blank"
                    href="https://www.google.com/maps/place/Masia+Xamandreu/@39.5567107,-0.4406944,17z/data=!3m1!4b1!4m6!3m5!1s0xd6044bd18eab309:0x50ed46abbf68bce!8m2!3d39.5567107!4d-0.4381195!16s%2Fg%2F1td54s1c?entry=ttu"
                  >
                    {t.see_in_maps}
                  </Link>
                </div>
              </div>

              <div className="text-base">
                <p className="font-primary text-earth">
                  {t.how_to_get_p1}{" "}
                  <span className="font-bold">{t.how_to_get_p1_b}</span>
                </p>
                <p className="mt-4 font-primary text-earth">
                  {t.how_to_get_p2}
                </p>
              </div>

              <div className="text-base">
                <h2 className="text-2xl xl:text-[32px] text-earth font-secondary">
                  {t.how_to_get_hour_title}
                </h2>
                <p className="mt-4 font-primary text-earth">
                  {t.how_to_get_more_details_soon}
                </p>
              </div>
            </div>

            <div className="hidden xl:block">
              <img src="masia.png" className="rounded-t-full" />
              <div className="flex justify-center -mt-7">
                <Link
                  className="btn"
                  target="_blank"
                  href="https://www.google.com/maps/place/Masia+Xamandreu/@39.5567107,-0.4406944,17z/data=!3m1!4b1!4m6!3m5!1s0xd6044bd18eab309:0x50ed46abbf68bce!8m2!3d39.5567107!4d-0.4381195!16s%2Fg%2F1td54s1c?entry=ttu"
                >
                  {t.see_in_maps}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer className="bg-sand" />
    </>
  );
};

export default ListaPresentesEscolha;
