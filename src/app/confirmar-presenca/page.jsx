"use client";

import { Footer } from "@/components/footer";
import { GuestsConfirmation } from "@/components/guests-confirmation";
import { GuestSearch } from "@/components/guests-search";
import { GuestsSelection } from "@/components/guests-selection";
import { GuestsSuccess } from "@/components/guests-success";
import { Header } from "@/components/header";
import React, { useEffect } from "react";

const ConfirmarPresenca = () => {
  const [step, setStep] = React.useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <>
      <Header className="bg-beige" light />

      <main
        className="flex items-center justify-center px-8 py-32 text-center bg-beige"
        style={{ minHeight: "calc(100vh - 190px)" }}
      >
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
