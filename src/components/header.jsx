"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "./language-context";
import { useEffect, useState } from "react";

export function Header({ className, light }) {
  const path = usePathname();
  const { t, locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsHeaderVisible(!isScrollingDown || window.scrollY < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const CustomLink = ({ href, children, target }) => {
    const active = path === href;

    return (
      <Link
        href={href}
        className={`group relative ${
          active && `font-bold ${light ? "lg:text-earth" : "lg:text-beige"}`
        }`}
        target={target}
      >
        {children}
        <svg
          width="9"
          height="11"
          viewBox="0 0 9 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute transition-all ease-in -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 left-1/2 ${
            active && "opacity-100 translate-y-0"
          }`}
        >
          <path
            d="M4.66482 0C4.88226 2.34443 6.59826 4.6647 8.62854 5.19642H8.62866V5.22069C6.67095 5.77655 5.02751 8.00013 4.68909 10.248H4.56823C4.18152 7.97598 2.53808 5.8007 0.628662 5.24484V5.22057C2.97309 4.713 4.37482 2.36869 4.61653 0H4.66482Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    );
  };

  return (
    <header
      className={`p-4 md:pt-8 xl:p-8 xl:pb-4 transition-all duration-200 sticky ${className} top-0 z-50 ${
        isHeaderVisible ? "" : "-translate-y-full"
      }`}
    >
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

            <CustomLink href="/">{t.home}</CustomLink>
            <CustomLink href="/como-chegar">{t.como_chegar}</CustomLink>
            <CustomLink href="/vestimenta">{t.o_que_vestir}</CustomLink>
            <CustomLink
              href="https://organized-script-04e.notion.site/Bienvenidos-a-Valencia-cd7635a00d6d42818be1532c46dbc709"
              target="_blank"
            >
              {t.para_os_viajantes}
            </CustomLink>
            <CustomLink href="/lista-presentes-escolha">
              {t.lista_presentes}
            </CustomLink>

            <div className="flex gap-1 text-beige text-[12px] lg:hidden lg:ml-4">
              <button
                onClick={() => {
                  localStorage.setItem("locale", "pt");
                  setLocale("pt");
                }}
                className={locale === "pt" ? "font-bold" : "cursor-pointer"}
              >
                PT
              </button>
              |
              <button
                onClick={() => {
                  localStorage.setItem("locale", "es");
                  setLocale("es");
                }}
                className={locale === "es" ? "font-bold" : "cursor-pointer"}
              >
                ES
              </button>
              |
              <button
                onClick={() => {
                  localStorage.setItem("locale", "en");
                  setLocale("en");
                }}
                className={locale === "en" ? "font-bold" : "cursor-pointer"}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        <Link className="btn" href="/confirmar-presenca">
          {t.confirmar_presenca}
        </Link>

        <div className="hidden gap-1 text-bronze text-[12px] lg:flex lg:ml-4">
          <button
            onClick={() => {
              localStorage.setItem("locale", "pt");
              setLocale("pt");
            }}
            className={locale === "pt" ? "font-bold" : "cursor-pointer"}
          >
            PT
          </button>
          |
          <button
            onClick={() => {
              localStorage.setItem("locale", "es");
              setLocale("es");
            }}
            className={locale === "es" ? "font-bold" : "cursor-pointer"}
          >
            ES
          </button>
          |
          <button
            onClick={() => {
              localStorage.setItem("locale", "en");
              setLocale("en");
            }}
            className={locale === "en" ? "font-bold" : "cursor-pointer"}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
