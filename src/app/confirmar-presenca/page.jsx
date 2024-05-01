"use client";

import { Footer } from "@/components/footer";
import { GuestsConfirmation } from "@/components/guests-confirmation";
import { GuestSearch } from "@/components/guests-search";
import { GuestsSelection } from "@/components/guests-selection";
import { GuestsSuccess } from "@/components/guests-success";
import { Header } from "@/components/header";
import React from "react";

const ConfirmarPresenca = () => {
  const [step, setStep] = React.useState(1);

  return (
    <>
      <Header className="bg-beige" />

      <main className="flex items-center justify-center min-h-screen px-8 pt-24 pb-32 text-center bg-beige">
        <section className="max-w-[888px] mx-auto flex flex-col gap-10 text-earth">
          <GuestSearch step={step} setStep={setStep} />
          <GuestsSelection step={step} setStep={setStep} />
          <GuestsConfirmation step={step} setStep={setStep} />
          <GuestsSuccess step={step} setStep={setStep} />
        </section>
      </main>

      <Footer className="bg-sand" />
    </>
  );
};

export default ConfirmarPresenca;
