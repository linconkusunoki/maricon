import Link from "next/link";

export function Header() {
  return (
    <header className="p-4 md:py-8 xl:p-8">
      <nav className="flex items-center justify-between">
        <Link href="/" className="hidden md:block">
          <img src="/logo.png" alt="logo" />
        </Link>

        <Link
          href="/"
          className="underline uppercase font-primary text-bronze md:ml-auto md:mr-8 xl:hidden"
        >
          Menu
        </Link>

        <div className="flex items-center gap-6 font-primary text-bronze">
          <Link href="/" className="hidden hover:underline lg:block">
            Como chegar
          </Link>
          <Link href="/" className="hidden hover:underline lg:block">
            O que vestir
          </Link>
          <Link href="/" className="hidden hover:underline lg:block">
            O dia
          </Link>
          <Link href="/" className="hidden hover:underline lg:block">
            Para os viajantes
          </Link>
          <Link href="/" className="hidden hover:underline lg:block">
            Lista de presentes
          </Link>
          <button className="btn">Confirmar presença</button>
        </div>
      </nav>
    </header>
  );
}
