"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "./language-context";
import { useState } from "react";

export function Header({ className, light }) {
  const path = usePathname();
  const { t, locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className={`p-4 md:pt-8 xl:p-8 xl:pb-4 ${className}`}>
      <nav className="flex items-center justify-between">
        <Link href="/" className="hidden md:block">
          <img
            className="w-[35px]"
            src={light && !open ? "/logo-dark.png" : "/logo.png"}
            alt="Mariana & Lincon"
          />
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="underline uppercase font-primary text-bronze md:ml-auto md:mr-8 lg:hidden"
        >
          Menu
        </button>

        <div
          className={`fixed top-0 left-0 z-30 ${
            open ? "block" : "hidden"
          } w-full h-full bg-black lg:mr-10 lg:ml-auto lg:block lg:bg-opacity-0 lg:static animate-fadeIn lg:animate-none lg:w-auto bg-opacity-30 text-beige font-primary`}
        >
          <div
            onClick={() => setOpen(false)}
            className="w-full h-full bg-black lg:mr-10 lg:ml-auto lg:block lg:bg-opacity-0 lg:static animate-fadeIn lg:animate-none lg:w-auto bg-opacity-30"
          />
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full gap-8 -translate-x-full lg:relative lg:translate-x-0 lg:w-auto lg:animate-none animate-slideIn lg:bg-opacity-0 lg:whitespace-nowrap lg:flex-row bg-bronze lg:text-bronze w-72">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-4 right-4 lg:hidden"
              onClick={() => setOpen(false)}
            >
              <rect width="14" height="14" rx="7" fill="#DFCAB5" />
              <path
                d="M4.19995 10.08L6.68635 6.85435L6.67515 7.24635L4.31195 4.19995H5.20795L7.14555 6.71995L6.80955 6.70875L8.74715 4.19995H9.62075L7.23515 7.27995L7.24635 6.85435L9.75515 10.08H8.84795L6.79835 7.39195L7.11195 7.43675L5.09595 10.08H4.19995Z"
                fill="#CB9470"
              />
            </svg>

            <Link href="/" className="lg:hidden">
              <img
                className="w-[55px]"
                src={light && !open ? "/logo-dark.png" : "/logo.png"}
                alt="logo"
              />
            </Link>
            <Link
              href="/"
              className={`hover:underline ${
                path === "/" &&
                `font-bold hover:no-underline ${
                  className ? "text-earth" : "text-beige"
                }`
              }`}
            >
              {t.home}
            </Link>
            <Link
              href="/como-chegar"
              className={`hover:underline ${
                path === "/como-chegar" &&
                `font-bold hover:no-underline ${
                  className ? "text-earth" : "text-beige"
                }`
              }`}
            >
              {t.como_chegar}
            </Link>
            <Link
              href="/vestimenta"
              className={`hover:underline ${
                path === "/vestimenta" &&
                `font-bold hover:no-underline ${
                  className ? "text-earth" : "text-beige"
                }`
              }`}
            >
              {t.o_que_vestir}
            </Link>
            <Link
              href="https://organized-script-04e.notion.site/Bienvenidos-a-Valencia-cd7635a00d6d42818be1532c46dbc709"
              target="_blank"
              className={`hover:underline ${
                path === "/viajantes" &&
                `font-bold hover:no-underline ${
                  className ? "text-earth" : "text-beige"
                }`
              }`}
            >
              {t.para_os_viajantes}
            </Link>
            <Link
              href="/lista-presentes-escolha"
              className={`hover:underline ${
                path === "/lista-presentes" &&
                `font-bold hover:no-underline ${
                  className ? "text-earth" : "text-beige"
                }`
              }`}
            >
              {t.lista_presentes}
            </Link>

            <div className="flex gap-1 text-beige text-[12px] lg:hidden lg:ml-4">
              <div
                onClick={() => setLocale("pt")}
                className={locale === "pt" ? "font-bold" : "cursor-pointer"}
              >
                PT
              </div>
              |
              <div
                onClick={() => setLocale("es")}
                className={locale === "es" ? "font-bold" : "cursor-pointer"}
              >
                ES
              </div>
              |
              <div
                onClick={() => setLocale("en")}
                className={locale === "en" ? "font-bold" : "cursor-pointer"}
              >
                EN
              </div>
            </div>
          </div>
        </div>

        <a className="btn" href="/confirmar-presenca">
          {t.confirmar_presenca}
        </a>

        <div className="hidden gap-1 text-bronze text-[12px] lg:flex lg:ml-4">
          <div
            onClick={() => setLocale("pt")}
            className={locale === "pt" ? "font-bold" : "cursor-pointer"}
          >
            PT
          </div>
          |
          <div
            onClick={() => setLocale("es")}
            className={locale === "es" ? "font-bold" : "cursor-pointer"}
          >
            ES
          </div>
          |
          <div
            onClick={() => setLocale("en")}
            className={locale === "en" ? "font-bold" : "cursor-pointer"}
          >
            EN
          </div>
        </div>
      </nav>
    </header>
  );
}
