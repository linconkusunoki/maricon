import { CountdownTimer } from "@/components/countdown";
import { Header } from "@/components/header";
import { OurHistory } from "@/components/our-history";
import { Playlist } from "@/components/playlist";

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative px-4 pt-8 overflow-hidden">
        <img
          src="/nozes.png"
          alt="Mariana e Lincon"
          className="w-full rounded-t-full"
          height={430}
        />

        <div className="absolute w-full text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-beige font-tertiary">
          <h1 className="text-4xl font-medium uppercase">
            Mariana <br /> & <br /> Lincon
          </h1>

          <div className="flex items-center justify-center my-8">
            <div className="text-2xl font-light">Out</div>
            <div className="px-4 mx-4 text-5xl font-semibold border-x border-x-beige">
              6
            </div>
            <div className="text-2xl font-light">2024</div>
          </div>

          <p>
            <span className="italic font-medium"> 18h, Masía Xamandreu</span>
            <br />
            <span className="font-semibold uppercase">Valencia, Span</span>
          </p>
        </div>

        <div className="absolute bottom-0 flex justify-center w-full -translate-x-1/2 translate-y-1/2 left-1/2">
          <img
            src="/card-sun.svg"
            alt="card sun"
            className="z-20 translate-x-4 -translate-y-4 w-28"
          />
          <img
            src="/card-moon.svg"
            alt="card moon"
            className="z-10 -translate-x-4 w-28"
          />
        </div>
        <img
          src="/star-1.svg"
          alt="star"
          className="absolute top-0 right-0 w-20 top-2 -rotate-12"
        />

        <img
          src="/star-2.svg"
          alt="star"
          className="absolute w-20 rotate-45 -top-10"
        />
      </main>

      <OurHistory />

      <section className="flex flex-col gap-4 py-16 text-center">
        <div className="px-4">
          <h2 className="text-3xl font-secondary text-bronze">
            Conheça mais da nossa história
          </h2>
          <p className="font-primary text-bronze">
            Você pode escutar algumas das músicas que serão parte da cerimônia e
            representam muito pra nós
          </p>
        </div>

        <Playlist />
      </section>

      <section className="px-4 py-16 text-center bg-bronze">
        <h2 className="text-3xl text-green font-secondary">
          Estamos ansiosos pra te ver :)
        </h2>
        <CountdownTimer futureDate="2024-10-05T12:00:00" />
      </section>

      <section className="py-10 text-xs text-center bg-beige font-primary">
        <p>Por Mari & Lincon, com amor 🖤</p>
      </section>
    </>
  );
}
