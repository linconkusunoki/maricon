import { CountdownTimer } from "@/components/countdown";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { OurHistory } from "@/components/our-history";
import { Playlist } from "@/components/playlist";

export default function Home() {
  return (
    <>
      <Header className="bg-green" />
      <main className="bg-green">
        <figure className="relative w-full px-4 pt-8 md:-mb-10">
          <img
            src="/nozes.png"
            alt="Mariana e Lincon"
            height={430}
            className="rounded-t-full max-w-[500px] mx-auto w-full"
          />

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="/star-1.svg"
              alt="star"
              className="absolute left-0 w-20 rotate-45 -top-4 md:top-auto md:bottom-[10%] md:rotate-0 md:w-32 xl:left-[15%] xl:w-44"
            />

            <img
              src="/star-2.svg"
              alt="star"
              className="absolute right-2 w-20 top-2 -rotate-12 md:rotate-[-5deg] md:w-44 md:right-[5%] md:top-[5%] xl:right-[20%]"
            />

            <div className="md:absolute md:top-0 md:left-0 md:w-full md:h-[750px] md:overflow-hidden md:pointer-events-none">
              <img
                src="/card-sun.svg"
                alt="card sun"
                className="absolute z-20 -translate-x-20 -bottom-16 left-1/2 w-28 md:left-0 md:translate-x-0 md:top-28 md:rotate-[-15deg] md:w-44 xl:w-64"
              />
              <img
                src="/card-moon.svg"
                alt="card moon"
                className="absolute z-10 -translate-x-2 -bottom-16 left-1/2 w-28 md:right-0 md:translate-x-0 md:bottom-0 md:left-auto md:w-48 xl:w-72"
              />
            </div>
          </div>
        </figure>

        <div className="absolute w-full text-center -translate-x-1/2 top-[200px] left-1/2 text-beige font-tertiary md:top-[230px] xl:top-[230px]">
          <h1 className="text-4xl font-medium uppercase md:leading-relaxed md:text-6xl">
            Mariana <br /> & <br /> Lincon
          </h1>

          <div className="flex items-center justify-center my-8">
            <div className="text-2xl font-light md:text-4xl">Out</div>
            <div className="px-4 mx-4 text-5xl font-semibold md:mx-8 md:px-8 border-x border-x-beige md:text-8xl">
              6
            </div>
            <div className="text-2xl font-light md:text-4xl">2024</div>
          </div>

          <p>
            <span className="italic font-medium md:text-2xl">
              {" "}
              18h, Masía Xamandreu
            </span>
            <br />
            <span className="font-semibold uppercase md:text-2xl">
              Valencia, Span
            </span>
          </p>
        </div>
      </main>

      <OurHistory />

      <section className="flex flex-col gap-4 py-16 text-center bg-green xl:flex-row xl:justify-center xl:text-left">
        <div className="px-4 xl:w-2/6">
          <h2 className="mb-8 text-3xl font-secondary text-bronze xl:text-5xl">
            Conheça mais da nossa história
          </h2>
          <p className="font-primary text-bronze">
            Você pode escutar algumas das músicas que serão parte da cerimônia e
            representam muito pra nós
          </p>
        </div>

        <div className="xl:w-2/5 xl:-mt-28">
          <Playlist />
        </div>
      </section>

      <Faq />

      <section className="px-4 py-16 text-center bg-bronze">
        <h2 className="text-3xl text-green font-secondary xl:text-5xl">
          Estamos ansiosos pra te ver :)
        </h2>
        <CountdownTimer futureDate="2024-10-05T12:00:00" />
      </section>

      <Footer />
    </>
  );
}
