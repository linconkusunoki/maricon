import Link from "next/link";

export function Header() {
  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <Link href="/" className="underline uppercase font-primary text-bronze">
          Menu
        </Link>
        <button className="btn">Confirmar presença</button>
      </nav>
    </header>
  );
}
