import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const DressingPage = () => {
  return (
    <div className="bg-green">
      <Header />

      <main className="grid gap-10 p-5 pb-20 md:gap-20">
        <section className="max-w-[785px] mx-auto">
          <h1 className="mb-5 text-[32px] text-center uppercase md:text-5xl font-secondary text-beige">
            O que vestir
          </h1>
          <p className="text-center font-primary text-beige">
            Roupas no estilo casual chique, em tons neutros e terrosos, sem
            estampas. Homens também podem usar branco e bege, só fujam do verde
            ja que essa é a cor do noivo. Qualquer sapato é bem vindo, e não
            precisa de gravata :)
          </p>
        </section>

        <section>
          <h1 className="mb-5 text-2xl text-center md:text-3xl font-secondary text-beige">
            Temperatura
          </h1>

          <img
            src="sol-lua.png"
            className="w-full lg:max-w-[820px] lg:mx-auto"
          />
        </section>

        <section>
          <h2 className="mb-5 text-2xl text-center font-secondary text-beige">
            Paleta de cores
          </h2>

          <img src="paleta-cores.png" className="lg:max-w-[744px] mx-auto" />
        </section>

        <section>
          <h2 className="mb-5 text-2xl text-center font-secondary text-beige">
            Inspirações
          </h2>

          <img src="/grid-mobile.png" className="w-full md:hidden" />
          <img
            src="/grid-desktop.png"
            className="hidden w-full md:block max-w-[1200px] mx-auto"
          />
          <div className="flex justify-center"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DressingPage;
