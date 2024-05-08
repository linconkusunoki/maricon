"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";

const ListaPresentes = () => {
  return (
    <>
      <Header className="bg-beige" />

      <main className="flex items-center justify-center px-8 pt-10 pb-32 text-center bg-beige">
        <div className="flex flex-col w-full gap-16">
          <h1 className="text-earth text-[54px] uppercase text-center font-secondary">
            Lista de Presentes
          </h1>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="mb-10 text-3xl font-bold text-left font-primary text-earth">
              Brincadeiras
            </h2>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/george.jpg"
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
                  <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/jose.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                      Foto com José
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 100,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
                  <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                      Pedir pro Lincon tocar Raul
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 210,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
                  <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                      Tarot: Pergunte algo pra noiva
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 200,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
               <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                  Jogar o bouquet na sua direção
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 80,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
              <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/madrinha.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                  Pra me apresentar pra madrinha solteira da noiva
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 105,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
              <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/padrinho.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                  Pra me apresentar pro padrinho solteiro do noivo
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 103,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
              <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                  Ganhe um lugar especial no nosso coração
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 4235,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Comprar
                    </button>
                  </li>
            </ul>
          </section>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="mb-10 text-3xl font-bold text-left font-primary text-earth">
              Lua de Mel
            </h2>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/cafe.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                     Café da manhã no hotel
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 50,00
                    </p>

                    <button className="self-start rounded-full btn">
                     Presentear os noivos
                    </button>
                  </li>
               <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/japao.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                     Sessão de fotos no Japão
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 700,00
                    </p>

                    <button className="self-start rounded-full btn">
                     Presentear os noivos
                    </button>
                  </li>
               <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/islandia.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                     Sessão de fotos na Islândia
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 710,00
                    </p>

                    <button className="self-start rounded-full btn">
                     Presentear os noivos
                    </button>
                  </li>
              <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/escocia.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                     Sessão de fotos na Escócia
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 720,00
                    </p>

                    <button className="self-start rounded-full btn">
                     Presentear os noivos
                    </button>
                  </li>
               <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/nintendo.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                    Entradas para o parque da Nintendo
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 600,00
                    </p>

                    <button className="self-start rounded-full btn">
                     Presentear os noivos
                    </button>
                  </li>
              <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/carro.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                    Aluguel de carro pra conhecermos a Espanha toda
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$900,00
                    </p>

                    <button className="self-start rounded-full btn">
                     Presentear os noivos
                    </button>
                  </li>
              <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/amem.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                    Você acordou inspirado e resolveu bancar parte da viagem
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$2.000,00
                    </p>

                    <button className="self-start rounded-full btn">
                     Presentear os noivos
                    </button>
                  </li>
              <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/camera.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                   Uma camera nova pros noivos tirarem fotos em HD da aurora boreal
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$3.000,00
                    </p>

                    <button className="self-start rounded-full btn">
                     Presentear os noivos
                    </button>
                  </li>
            </ul>
          </section>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="mb-10 text-3xl font-bold text-left font-primary text-earth">
              Para nossa alegria
            </h2>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/tattoo-noiva.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                      Tatuagem pra noiva
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 500,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Presentear os noivos
                    </button>
                  </li>
               <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/tattoo-noivo.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                      Tatuagem pro noivo
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 505,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Presentear os noivos
                    </button>
                  </li>
              <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/show.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                   Ingressos pra curtirmos um showzin
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 610,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Presentear os noivos
                    </button>
                  </li>
               <li
                    className="bg-[#DFCAB5] p-4 rounded-[26px] flex flex-col gap-[14px]"
                  >
                    <img
                      src="/vaquinha.jpg"
                      className="rounded-[20px]"
                      height={230}
                    />

                    <h3 className="font-bold text-left text-earth font-primary">
                   Vaquinha para ajudar os noivos quebrados
                    </h3>

                    <p className="text-sm text-left text-earth font-primary">
                      R$ 1.234,00
                    </p>

                    <button className="self-start rounded-full btn">
                      Presentear os noivos
                    </button>
                  </li>
              
            </ul>
          </section>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="mb-10 text-3xl font-bold font-primary text-earth">
              Você tem uma categoria propria de tanta luz que voce emite
            </h2>

            <div className="bg-[#DFCAB5] p-4 rounded-[26px] items-center relative flex flex-col gap-[20px] max-w-[520px] mx-auto">
              <svg
                width="92"
                height="134"
                viewBox="0 0 92 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-12 -right-8 md:-right-12"
              >
                <path
                  d="M23.2528 54.806C22.9157 53.854 22.9157 53.221 23.2528 52.901C30.4517 51.635 35.8538 50.204 39.4568 48.608C43.0548 47.022 45.7148 44.32 47.4258 40.507C49.1458 36.694 50.4298 32.644 51.2828 28.355C52.1438 24.065 52.9137 19.703 53.5967 15.249C55.0507 9.90796 54.1097 8.40795 54.1097 0.475952C54.4567 0.163952 55.3178 0 56.6838 0C57.0278 5.086 57.2847 10.172 57.4537 15.25C58.6407 49.181 80.2077 52.666 82.3987 53.852C84.4767 54.626 88.1148 55.757 90.1118 55.757C92.5158 55.757 92.3458 56.079 89.5978 56.711C84.7088 56.711 82.4568 55.842 78.7978 57.188H77.7698C75.7138 58.141 73.1388 60.285 70.0548 63.621C66.9668 66.958 64.2287 72.438 61.8257 80.063C57.4587 100.308 57.1968 100.61 57.1968 103.891C57.1968 105.477 57.0267 107.064 56.6827 108.657H54.1088C54.1088 105.242 53.5958 104.914 53.5958 101.509C52.5838 89.083 53.9688 85.179 51.0248 77.682C48.9668 71.65 45.9698 66.326 42.0248 61.716C38.0878 57.115 31.9958 54.97 23.7668 55.283C23.7668 54.97 23.5968 54.806 23.2528 54.806Z"
                  fill="#CB9470"
                />
                <path
                  d="M0.118633 108.724C-0.0395442 108.277 -0.0395442 107.98 0.118633 107.83C3.49761 107.236 6.03315 106.564 7.72427 105.815C9.41306 105.071 10.6616 103.802 11.4647 102.013C12.272 100.223 12.8746 98.322 13.275 96.3089C13.6791 94.2953 14.0405 92.2479 14.3611 90.1574C15.0436 87.6505 14.6019 86.9464 14.6019 83.2234C14.7648 83.077 15.1689 83 15.8101 83C15.9715 85.3872 16.0921 87.7744 16.1714 90.1578C16.7286 106.084 26.8514 107.72 27.8798 108.276C28.8552 108.64 30.5627 109.17 31.5 109.17C32.6284 109.17 32.5486 109.322 31.2588 109.618C28.9641 109.618 27.9071 109.21 26.1896 109.842H25.7071C24.7421 110.289 23.5335 111.296 22.0859 112.862C20.6365 114.428 19.3514 117 18.2235 120.579C16.1738 130.081 16.0508 130.223 16.0508 131.763C16.0508 132.507 15.971 133.252 15.8096 134H14.6014C14.6014 132.397 14.3606 132.243 14.3606 130.645C13.8856 124.813 14.5357 122.98 13.1539 119.461C12.188 116.63 10.7813 114.131 8.92961 111.967C7.08171 109.808 4.22233 108.801 0.359905 108.948C0.359905 108.801 0.280095 108.724 0.118633 108.724Z"
                  fill="#CB9470"
                />
              </svg>

              <svg
                width="92"
                height="134"
                viewBox="0 0 92 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-6 -left-12"
              >
                <path
                  d="M23.2528 54.806C22.9157 53.854 22.9157 53.221 23.2528 52.901C30.4517 51.635 35.8538 50.204 39.4568 48.608C43.0548 47.022 45.7148 44.32 47.4258 40.507C49.1458 36.694 50.4298 32.644 51.2828 28.355C52.1438 24.065 52.9137 19.703 53.5967 15.249C55.0507 9.90796 54.1097 8.40795 54.1097 0.475952C54.4567 0.163952 55.3178 0 56.6838 0C57.0278 5.086 57.2847 10.172 57.4537 15.25C58.6407 49.181 80.2077 52.666 82.3987 53.852C84.4767 54.626 88.1148 55.757 90.1118 55.757C92.5158 55.757 92.3458 56.079 89.5978 56.711C84.7088 56.711 82.4568 55.842 78.7978 57.188H77.7698C75.7138 58.141 73.1388 60.285 70.0548 63.621C66.9668 66.958 64.2287 72.438 61.8257 80.063C57.4587 100.308 57.1968 100.61 57.1968 103.891C57.1968 105.477 57.0267 107.064 56.6827 108.657H54.1088C54.1088 105.242 53.5958 104.914 53.5958 101.509C52.5838 89.083 53.9688 85.179 51.0248 77.682C48.9668 71.65 45.9698 66.326 42.0248 61.716C38.0878 57.115 31.9958 54.97 23.7668 55.283C23.7668 54.97 23.5968 54.806 23.2528 54.806Z"
                  fill="#CB9470"
                />
                <path
                  d="M0.118633 108.724C-0.0395442 108.277 -0.0395442 107.98 0.118633 107.83C3.49761 107.236 6.03315 106.564 7.72427 105.815C9.41306 105.071 10.6616 103.802 11.4647 102.013C12.272 100.223 12.8746 98.322 13.275 96.3089C13.6791 94.2953 14.0405 92.2479 14.3611 90.1574C15.0436 87.6505 14.6019 86.9464 14.6019 83.2234C14.7648 83.077 15.1689 83 15.8101 83C15.9715 85.3872 16.0921 87.7744 16.1714 90.1578C16.7286 106.084 26.8514 107.72 27.8798 108.276C28.8552 108.64 30.5627 109.17 31.5 109.17C32.6284 109.17 32.5486 109.322 31.2588 109.618C28.9641 109.618 27.9071 109.21 26.1896 109.842H25.7071C24.7421 110.289 23.5335 111.296 22.0859 112.862C20.6365 114.428 19.3514 117 18.2235 120.579C16.1738 130.081 16.0508 130.223 16.0508 131.763C16.0508 132.507 15.971 133.252 15.8096 134H14.6014C14.6014 132.397 14.3606 132.243 14.3606 130.645C13.8856 124.813 14.5357 122.98 13.1539 119.461C12.188 116.63 10.7813 114.131 8.92961 111.967C7.08171 109.808 4.22233 108.801 0.359905 108.948C0.359905 108.801 0.280095 108.724 0.118633 108.724Z"
                  fill="#CB9470"
                />
              </svg>

              <img
                src="/teamamos.jpg"
                className="rounded-[20px]"
                height={360}
                width={480}
              />

              <h3 className="font-bold text-earth font-primary text-[21px]">
                Se por uma intervenção divina você se sentir tocado
              </h3>

              <p className="text-sm text-earth font-primary text-[18px]">
                R$ 5.000,00
              </p>

              <button className="w-full rounded-full btn md:w-auto">
                Garanta seu lugar no céu
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer className="bg-sand" />
    </>
  );
};

export default ListaPresentes;
