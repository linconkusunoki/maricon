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
                    Na página de confirmação de presença, escreva o seu nome e
                    clique em Buscar. Seu nome aparecerá e você poderá confirmar
                    sua presença e daqueles vindo com você :)
                  </p>
                }
              />

              <Accordion
                title="Como eu chego lá? Tem estacionamento?"
                content={
                  <p>
                    Na página de confirmação de presença, escreva o seu nome e
                    clique em Buscar. Seu nome aparecerá e você poderá confirmar
                    sua presença e daqueles vindo com você :)
                  </p>
                }
              />

              <Accordion
                title="Que horas eu devo chegar?"
                content={
                  <p>
                    Na página de confirmação de presença, escreva o seu nome e
                    clique em Buscar. Seu nome aparecerá e você poderá confirmar
                    sua presença e daqueles vindo com você :)
                  </p>
                }
              />
            </div>

            <div className="xl:max-w-[338px]">
              <Accordion
                title="O que eu devo vestir?"
                content={
                  <p>
                    Na página de confirmação de presença, escreva o seu nome e
                    clique em Buscar. Seu nome aparecerá e você poderá confirmar
                    sua presença e daqueles vindo com você :)
                  </p>
                }
              />

              <Accordion
                title="Posso trazer um acompanhante?"
                content={
                  <p>
                    Na página de confirmação de presença, escreva o seu nome e
                    clique em Buscar. Seu nome aparecerá e você poderá confirmar
                    sua presença e daqueles vindo com você :)
                  </p>
                }
              />

              <Accordion
                title="Posso tirar e postar fotos?"
                content={
                  <p>
                    Na página de confirmação de presença, escreva o seu nome e
                    clique em Buscar. Seu nome aparecerá e você poderá confirmar
                    sua presença e daqueles vindo com você :)
                  </p>
                }
              />

              <Accordion
                title="Não posso ir :( o que eu faço?"
                content={
                  <p>
                    Na página de confirmação de presença, escreva o seu nome e
                    clique em Buscar. Seu nome aparecerá e você poderá confirmar
                    sua presença e daqueles vindo com você :)
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
