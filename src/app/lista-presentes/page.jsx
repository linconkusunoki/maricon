"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";

const ListaPresentes = () => {
  return (
    <>
      <Header className="bg-beige" />

      <main className="flex items-center justify-center px-8 pt-24 pb-32 text-center bg-beige">
        <div className="flex flex-col w-full gap-16">
          <h1 className="text-earth text-[54px] uppercase text-center font-secondary">
            Lista de Presentes
          </h1>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="mb-10 text-3xl font-bold text-left font-primary text-earth">
              Brincadeiras
            </h2>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                return (
                  <li
                    key={i}
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                      Foto com George
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 120,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="mb-10 text-3xl font-bold text-left font-primary text-earth">
              Lua de Mel
            </h2>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                return (
                  <li
                    key={i}
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                      Foto com George
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 120,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="mb-10 text-3xl font-bold text-left font-primary text-earth">
              Para nossa alegria
            </h2>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4].map((i) => {
                return (
                  <li
                    key={i}
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                      Foto com George
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 120,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>

      <Footer className="bg-sand" />
    </>
  );
};

export default ListaPresentes;
