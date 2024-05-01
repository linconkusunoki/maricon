"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header({ className }) {
  const path = usePathname();

  return (
    <header className={`p-4 md:pt-8 xl:p-8 xl:pb-4 ${className}`}>
      <nav className="flex items-center justify-between">
        <Link href="/" className="hidden md:block">
          <img src="/logo.png" alt="logo" />
        </Link>

        <label
          htmlFor="menu"
          className="underline uppercase font-primary text-bronze md:ml-auto md:mr-8 lg:hidden"
        >
          Menu
        </label>

        <input id="menu" name="menu" type="checkbox" className="hidden peer" />

        <label
          htmlFor="menu"
          className="fixed top-0 left-0 z-30 hidden w-full h-full bg-black lg:mr-10 lg:ml-auto lg:block lg:bg-opacity-0 lg:static animate-fadeIn lg:animate-none lg:w-auto bg-opacity-30 peer-checked:block text-beige font-primary "
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 -translate-x-full lg:translate-x-0 lg:w-auto lg:animate-none animate-slideIn lg:bg-opacity-0 lg:whitespace-nowrap lg:flex-row bg-bronze lg:text-bronze w-72">
            <Link href="/" className="lg:hidden">
              <img src="/logo.png" alt="logo" />
            </Link>

            <Link
              href="/"
              className={`hover:underline ${
                path === "/como-chegar" &&
                "font-bold hover:no-underline text-beige"
              }`}
            >
              Como chegar
            </Link>
            <Link
              href="/vestimenta"
              className={`hover:underline ${
                path === "/vestimenta" &&
                "font-bold hover:no-underline text-beige"
              }`}
            >
              O que vestir
            </Link>
            <Link
              href="/"
              className={`hover:underline ${
                path === "/o-dia" && "font-bold hover:no-underline text-beige"
              }`}
            >
              O dia
            </Link>
            <Link
              href="/"
              className={`hover:underline ${
                path === "/viajantes" &&
                "font-bold hover:no-underline text-beige"
              }`}
            >
              Para os viajantes
            </Link>
            <Link
              href="/"
              className={`hover:underline ${
                path === "/lista-presentes" &&
                "font-bold hover:no-underline text-beige"
              }`}
            >
              Lista de presentes
            </Link>
          </div>
        </label>

        <a className="btn" href="/confirmar-presenca">
          Confirmar presença
        </a>
      </nav>
    </header>
  );
}
