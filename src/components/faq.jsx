import { Accordion } from "./accordion";

export function Faq() {
  return (
    <section className="py-16 bg-beige">
      <div className="flex flex-col gap-4 mx-auto md:gap-8 text-earth">
        <h2 className="text-3xl text-center font-secondary xl:text-5xl">
          Perguntas frequentes
        </h2>

        <div className="md:flex md:justify-center">
          <div className="px-4 xl:flex xl:gap-8">
            <div className="xl:max-w-[417px]">
              <Accordion
                title="Como confirmo minha presença?"
                content={
                  <p>
                    Na página de confirmação de presença, escreva o seu nome e
                    clique em Buscar. Seu nome aparecerá e você poderá confirmar
                    sua presença e daqueles vindo com você :)
                  </p>
                }
              />

              <Accordion
                title="Onde será a cerimônia?"
                content={
                  <p>
                    Cerimônia, recepção e festa seráo na Masía Xamandreu, no pueblo de Godella localizado a 20min do centro de Valencia, na Espanha. <a href="https://maps.app.goo.gl/daumZvH3X1AKDk3r7" className="text-earth"> Abrir google maps →</a>
                  </p>
                }
              />

              <Accordion
                title="Como eu chego lá?"
                content={
                  <p>
                    Estamos trabalhando para conseguir um serviço de transporte do centro da cidade até o casamento para todos os convidados, porém você também pode dirigir ou agendar um Uber, Cabify ou FreeNow. Só nos deixe saber já que temos que organizar o transporte em grupo por número de lugares!
                  </p>
                }
              />

              <Accordion
                title="Que horas eu devo chegar?"
                content={
                  <p>
                    Nossa cerimônia começará às 18:30h, e pedimos que os convidados cheguem de 15 a 30 minutos antes do horário de início da cerimônia. Isso te dará tempo suficiente para tomar uma bebida e escolher seu lugar!
                  </p>
                }
              />
            </div>

            <div className="xl:max-w-[338px]">
              <Accordion
                title="O que eu devo vestir?"
                content={
                  <p>
                    Roupas no estilo casual chique, em tons neutros e terrosos, sem estampas. Homens também podem usar branco e bege, só fujam do verde ja que essa é a cor do noivo. Qualquer sapato é bem vindo e não precisa de gravata. <a href="#" className="text-earth">Ver paleta de cores e referências →</a>
                  </p>
                }
              />

              <Accordion
                title="Posso trazer um acompanhante?"
                content={
                  <p>
                   Se o nome do seu convidado está listado na página de confirmação de presença, então sim! Caso contrário, adoraríamos manter nosso casamento como um evento íntimo apenas com familiares e amigos próximos.
                  </p>
                }
              />

              <Accordion
                title="Posso tirar e postar fotos?"
                content={
                  <p>
                    Durante a cerimônia gostaríamos de todos presentes, sem os celulares na mão. Depois disso, fotos estão liberadas!
                  </p>
                }
              />

              <Accordion
                title="Não posso ir :( o que eu faço?"
                content={
                  <p>
                    Nós vamos sentir sua falta :( Se você não puder ir, deixe a gente saber o mais rápido possível e confirme "NÃO comparecerá" na página de confirmação de presença para que possamos nos planejar de acordo.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
