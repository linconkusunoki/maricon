"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useLocale } from "@/components/language-context";
import React, { useEffect, useState } from "react";

const ListaPresentes = () => {
  const { t } = useLocale();
  const [isEuro, setEuro] = useState(true);
  const [modal, setModal] = useState();

  useEffect(() => {
    setEuro(localStorage.getItem("currency") === "euro");
  }, []);

  return (
    <>
      <Header className="bg-beige" light />

      <main className="flex items-center justify-center px-4 pt-10 pb-32 overflow-x-hidden text-center lg:px-8 bg-beige">
        <div className="flex flex-col w-full gap-10 lg:gap-16">
          <h1 className="text-earth text-[32px] lg:text-[54px] uppercase text-center font-secondary">
            {t.gift_title}
          </h1>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="text-center mb-5 lg:text-left lg:mb-10 text-[20px] lg:text-3xl font-bold font-primary text-earth">
              {t.gift_honeymoon}
            </h2>

            <ul className="grid grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-3 xl:grid-cols-4">
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img src="/cafe.jpg" className="rounded-[20px]" height={230} />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_hotel_coffee}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 30" : "R$ 50,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/cafe.jpg",
                        title: t.gift_hotel_coffee,
                        price: isEuro ? "€ 30" : "R$ 50,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641dc78-adea-46f6-bba2-52e6fd05fe2a",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img src="/japao.jpg" className="rounded-[20px]" height={230} />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_japan_pics}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 150" : "R$ 700,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/japao.jpg",
                        title: t.gift_japan_pics,
                        price: isEuro ? "€ 150" : "R$ 700,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641dd0a-18fd-44aa-ab49-9f78f2cfd345",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/islandia.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_iceland_pics}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 155" : "R$ 710,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/islandia.jpg",
                        title: t.gift_iceland_pics,
                        price: isEuro ? "€ 155" : "R$ 710,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641dd73-681b-4944-9bed-071aae80f551",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/escocia.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_scotland_pics}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 160" : "R$ 720,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/escocia.jpg",
                        title: t.gift_scotland_pics,
                        price: isEuro ? "€ 160" : "R$ 720,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641ddca-c423-4391-a340-876d026b8431",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/nintendo.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_nintendo}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 170" : "R$ 600,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/nintendo.jpg",
                        title: t.gift_nintendo,
                        price: isEuro ? "€ 170" : "R$ 600,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641de15-3948-42f5-8f4c-72628b9fcda0",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img src="/carro.jpg" className="rounded-[20px]" height={230} />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_rent_car}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 200" : "R$ 900,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/carro.jpg",
                        title: t.gift_rent_car,
                        price: isEuro ? "€ 200" : "R$ 900,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641de92-4a78-4e5d-9dbc-c84ecc20115f",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img src="/amem.jpg" className="rounded-[20px]" height={230} />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_inspired}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 500" : "R$ 2.000,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/amem.jpg",
                        title: t.gift_inspired,
                        price: isEuro ? "€ 500" : "R$ 2.000,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641deec-d9c2-4262-9e6e-2c5a093dd458",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/camera.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_camera}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 650" : "R$ 3.000,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/camera.jpg",
                        title: t.gift_camera,
                        price: isEuro ? "€ 650" : "R$ 3.000,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641df27-04ee-4320-8aea-6e913a16cb1c",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
            </ul>
          </section>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="text-center mb-5 lg:text-left lg:mb-10 text-[20px] lg:text-3xl font-bold font-primary text-earth">
              {t.gift_our_hapinness}
            </h2>

            <ul className="grid grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-3 xl:grid-cols-4">
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/tattoo-noiva.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_tattoo_her}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 100" : "R$ 500,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/tattoo-noiva.jpg",
                        title: t.gift_tattoo_her,
                        price: isEuro ? "€ 100" : "R$ 500,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641df9f-5a95-42b2-98a4-df3b02d6c6ba",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/tattoo-noivo.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_tattoo_him}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 105" : "R$ 505,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/tattoo-noivo.jpg",
                        title: t.gift_tattoo_him,
                        price: isEuro ? "€ 105" : "R$ 505,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e03f-8173-4dc2-a7e4-d2185aff2e0d",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img src="/show.jpg" className="rounded-[20px]" height={230} />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_show_ticket}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 180" : "R$ 610,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/show.jpg",
                        title: t.gift_show_ticket,
                        price: isEuro ? "€ 180" : "R$ 610,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e0a6-9104-40d2-8ee2-fdddaa758e08",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/vaquinha.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_vaquinha}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 250" : "R$ 1.234,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/vaquinha.jpg",
                        title: t.gift_vaquinha,
                        price: isEuro ? "€ 250" : "R$ 1.234,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e125-e84f-4ffc-ae48-27c03e0fc81c",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.gift_present}
                </button>
              </li>
            </ul>
          </section>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2 className="text-center mb-5 lg:text-left lg:mb-10 text-[20px] lg:text-3xl font-bold font-primary text-earth">
              {t.gift_jokes}
            </h2>

            <ul className="grid grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-3 xl:grid-cols-4">
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/george.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_pic_george}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 60" : "R$ 120,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/george.jpg",
                        title: t.gift_pic_george,
                        price: isEuro ? "€ 60" : "R$ 120,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e1c1-032a-4799-b753-5cbb6fe1f8d8",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.buy}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img src="/jose.jpg" className="rounded-[20px]" height={230} />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_pic_jose}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 50" : "R$ 100,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/jose.jpg",
                        title: t.gift_pic_jose,
                        price: isEuro ? "€ 50" : "R$ 100,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e207-2833-42c8-b738-d1d434d56d23",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.buy}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/lincon-guitar.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_lincon}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 80" : "R$ 210,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/lincon-guitar.jpg",
                        title: t.gift_lincon,
                        price: isEuro ? "€ 80" : "R$ 210,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e23b-fea8-4461-a3df-3e83c3cc5b6e",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.buy}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/gift_tarot.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_tarot}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 85" : "R$ 200,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/gift_tarot.jpg",
                        title: t.gift_tarot,
                        price: isEuro ? "€ 85" : "R$ 200,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e274-ad2e-476f-9e21-2b350a11c5e6",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.buy}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/gift_bouquet.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_bouquet}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 40" : "R$ 80,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/gift_bouquet.jpg",
                        title: t.gift_bouquet,
                        price: isEuro ? "€ 40" : "R$ 80,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e2b4-278e-493d-b373-9177f30c0ebe",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.buy}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/madrinha.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_tinder_w}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 75" : "R$ 105,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/madrinha.jpg",
                        title: t.gift_tinder_w,
                        price: isEuro ? "€ 75" : "R$ 105,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e2e2-6f1c-40c7-a392-ed5fee001ebe",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.buy}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/padrinho.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_tinder_m}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 70" : "R$ 103,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/padrinho.jpg",
                        title: t.gift_tinder_m,
                        price: isEuro ? "€ 70" : "R$ 103,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e318-818f-45e7-9c71-89baf844a846",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.buy}
                </button>
              </li>
              <li className="bg-[#DFCAB5] p-2.5 lg:p-4 rounded-[26px] flex flex-col gap-[14px] justify-between">
                <img
                  src="/gift-heart.jpg"
                  className="rounded-[20px]"
                  height={230}
                />

                <h3 className="font-bold text-left text-earth font-primary">
                  {t.gift_heart}
                </h3>

                <p className="text-sm text-left text-earth font-primary">
                  {isEuro ? "€ 800" : "R$ 4.235,00"}
                </p>

                <button
                  className="self-start w-full rounded-full btn lg:w-auto"
                  onClick={() => {
                    if (isEuro) {
                      setModal({
                        img: "/gift-heart.jpg",
                        title: t.gift_heart,
                        price: isEuro ? "€ 800" : "R$ 4.235,00",
                      });
                    } else {
                      window.open(
                        "https://nubank.com.br/cobrar/3neeb/6641e35f-cbef-412b-9c02-121e113d7ad8",
                        "_blank"
                      );
                    }
                  }}
                >
                  {t.buy}
                </button>
              </li>
            </ul>
          </section>

          <section className="max-w-[1440px] mx-auto w-full">
            <h2
              className="mb-5 lg:mb-10 text-[20px] lg:text-3xl font-bold font-primary text-earth"
              style={{ lineHeight: "120%" }}
            >
              {t.gift_god_bless}
            </h2>

            <div className="bg-[#DFCAB5] p-4 rounded-[26px] items-center relative flex flex-col gap-[20px] max-w-[520px] mx-auto">
              <svg
                width="92"
                height="134"
                viewBox="0 0 92 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-12 -right-12 md:-right-12"
              >
                <path
                  d="M23.2528 54.806C22.9157 53.854 22.9157 53.221 23.2528 52.901C30.4517 51.635 35.8538 50.204 39.4568 48.608C43.0548 47.022 45.7148 44.32 47.4258 40.507C49.1458 36.694 50.4298 32.644 51.2828 28.355C52.1438 24.065 52.9137 19.703 53.5967 15.249C55.0507 9.90796 54.1097 8.40795 54.1097 0.475952C54.4567 0.163952 55.3178 0 56.6838 0C57.0278 5.086 57.2847 10.172 57.4537 15.25C58.6407 49.181 80.2077 52.666 82.3987 53.852C84.4767 54.626 88.1148 55.757 90.1118 55.757C92.5158 55.757 92.3458 56.079 89.5978 56.711C84.7088 56.711 82.4568 55.842 78.7978 57.188H77.7698C75.7138 58.141 73.1388 60.285 70.0548 63.621C66.9668 66.958 64.2287 72.438 61.8257 80.063C57.4587 100.308 57.1968 100.61 57.1968 103.891C57.1968 105.477 57.0267 107.064 56.6827 108.657H54.1088C54.1088 105.242 53.5958 104.914 53.5958 101.509C52.5838 89.083 53.9688 85.179 51.0248 77.682C48.9668 71.65 45.9698 66.326 42.0248 61.716C38.0878 57.115 31.9958 54.97 23.7668 55.283C23.7668 54.97 23.5968 54.806 23.2528 54.806Z"
                  fill="#CB9470"
                  className="animate-pulse"
                />
                <path
                  d="M0.118633 108.724C-0.0395442 108.277 -0.0395442 107.98 0.118633 107.83C3.49761 107.236 6.03315 106.564 7.72427 105.815C9.41306 105.071 10.6616 103.802 11.4647 102.013C12.272 100.223 12.8746 98.322 13.275 96.3089C13.6791 94.2953 14.0405 92.2479 14.3611 90.1574C15.0436 87.6505 14.6019 86.9464 14.6019 83.2234C14.7648 83.077 15.1689 83 15.8101 83C15.9715 85.3872 16.0921 87.7744 16.1714 90.1578C16.7286 106.084 26.8514 107.72 27.8798 108.276C28.8552 108.64 30.5627 109.17 31.5 109.17C32.6284 109.17 32.5486 109.322 31.2588 109.618C28.9641 109.618 27.9071 109.21 26.1896 109.842H25.7071C24.7421 110.289 23.5335 111.296 22.0859 112.862C20.6365 114.428 19.3514 117 18.2235 120.579C16.1738 130.081 16.0508 130.223 16.0508 131.763C16.0508 132.507 15.971 133.252 15.8096 134H14.6014C14.6014 132.397 14.3606 132.243 14.3606 130.645C13.8856 124.813 14.5357 122.98 13.1539 119.461C12.188 116.63 10.7813 114.131 8.92961 111.967C7.08171 109.808 4.22233 108.801 0.359905 108.948C0.359905 108.801 0.280095 108.724 0.118633 108.724Z"
                  fill="#CB9470"
                  className="animate-pulseDelay"
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
                  className="animate-pulse"
                />
                <path
                  d="M0.118633 108.724C-0.0395442 108.277 -0.0395442 107.98 0.118633 107.83C3.49761 107.236 6.03315 106.564 7.72427 105.815C9.41306 105.071 10.6616 103.802 11.4647 102.013C12.272 100.223 12.8746 98.322 13.275 96.3089C13.6791 94.2953 14.0405 92.2479 14.3611 90.1574C15.0436 87.6505 14.6019 86.9464 14.6019 83.2234C14.7648 83.077 15.1689 83 15.8101 83C15.9715 85.3872 16.0921 87.7744 16.1714 90.1578C16.7286 106.084 26.8514 107.72 27.8798 108.276C28.8552 108.64 30.5627 109.17 31.5 109.17C32.6284 109.17 32.5486 109.322 31.2588 109.618C28.9641 109.618 27.9071 109.21 26.1896 109.842H25.7071C24.7421 110.289 23.5335 111.296 22.0859 112.862C20.6365 114.428 19.3514 117 18.2235 120.579C16.1738 130.081 16.0508 130.223 16.0508 131.763C16.0508 132.507 15.971 133.252 15.8096 134H14.6014C14.6014 132.397 14.3606 132.243 14.3606 130.645C13.8856 124.813 14.5357 122.98 13.1539 119.461C12.188 116.63 10.7813 114.131 8.92961 111.967C7.08171 109.808 4.22233 108.801 0.359905 108.948C0.359905 108.801 0.280095 108.724 0.118633 108.724Z"
                  fill="#CB9470"
                  className="animate-pulseDelay"
                />
              </svg>

              <img
                src="/teamamos.jpg"
                className="rounded-[20px]"
                height={360}
                width={480}
              />

              <h3 className="font-bold text-earth font-primary text-[21px]">
                {t.gift_divine}
              </h3>

              <p className="text-sm text-earth font-primary text-[18px]">
                {isEuro ? "€ 1.000" : "R$ 5.000,00"}
              </p>

              <button
                className="w-full rounded-full btn md:w-auto"
                onClick={() => {
                  if (isEuro) {
                    setModal({
                      img: "/teamamos.jpg",
                      title: t.gift_divine,
                      price: isEuro ? "€ 1.000" : "R$ 5.000,00",
                    });
                  } else {
                    window.open(
                      "https://nubank.com.br/cobrar/3neeb/6641e399-dd75-42bc-9366-3d53fd3a4f36",
                      "_blank"
                    );
                  }
                }}
              >
                {t.gift_ensure_heaven}
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer className="bg-sand" />

      {modal && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full animate-fadeIn">
          <div
            className="absolute top-0 left-0 z-0 w-full h-full bg-black bg-opacity-75"
            onClick={() => setModal()}
          />
          <div className="bg-[#DFCAB5] text-[#A25A44] rounded-[32px] p-4 w-[310px] flex flex-col gap-5 relative z-10 lg:flex-row-reverse lg:w-[790px] items-center">
            <div className="relative shrink-0">
              <img
                src={modal.img}
                alt={modal.title}
                className="rounded-[30px] lg:w-[387px] lg:h-[343px]"
              />
              <button
                onClick={() => setModal()}
                className="absolute flex items-center justify-center w-8 h-8 rounded-full right-3 top-3 bg-beige"
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12.6L5.328 5.688L5.304 6.528L0.24 0H2.16L6.312 5.4L5.592 5.376L9.744 0H11.616L6.504 6.6L6.528 5.688L11.904 12.6H9.96L5.568 6.84L6.24 6.936L1.92 12.6H0Z"
                    fill="#A25A44"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col lg:gap-[30px] gap-5 font-primary">
              <div>
                <h3 className="text-2xl font-bold">{modal.title}</h3>
                <p className="text-2xl font-semibold">{modal.price}</p>
              </div>
              <p className="text-base font-semibold leading-[22px]">
                {t.euro_modal_text}
              </p>
              <a href="https://www.paypal.com/paypalme/maripng/" target="_blank">
              <button className="w-full rounded-full lg:w-auto lg:self-start btn md:w-auto">
                {t.btn_paypal}
              </button></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListaPresentes;
