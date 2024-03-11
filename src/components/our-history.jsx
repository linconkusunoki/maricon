import Link from "next/link";

export function OurHistory() {
  return (
    <section className="flex flex-col gap-4 px-4 pb-16 text-center pt-28 bg-beige">
      <h2 className="text-3xl font-secondary text-earth">
        Love is free. In time, in peace.
      </h2>
      <p className="font-primary text-earth">
        Depois de 8 anos juntos, uma mudança pro exterior, dois gatos e um
        apartamento, nós finalmente vamos nos casar!
      </p>
      <p className="font-primary text-earth">
        Nós estamos preparando um casamento íntimo em uma das melhores cidades
        do mundo que nós chamamos de casa: Valencia, na Espanha.
      </p>
      <p className="font-primary text-earth">
        Criamos esse site pra tentar responder qualquer dúvida que vocês tenham
        sobre o casamento ou, para aqueles vindo de longe, sobre a viagem.
      </p>
      <p className="font-primary text-earth">
        Não esqueça, sua confirmação de presença é muito importante - e quanto
        mais rápido melhor. Isso vai fazer nossa vida beeem mais fácil hehe
      </p>

      <p className="font-primary text-earth">
        Dá uma olhada em tudo e a gente se vê em outubro!
      </p>

      <Link href="/" className="self-center btn">
        Confirmar presença
      </Link>
    </section>
  );
}
