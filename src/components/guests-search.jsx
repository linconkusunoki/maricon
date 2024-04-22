"use client";

import { GuestsContext } from "@/components/guests-context";
import * as React from "react";

export function GuestSearch({ step, setStep }) {
  const [name, setName] = React.useState("");
  const { setGuestsFound, guests } = React.useContext(GuestsContext);

  function handleSubmit(event) {
    event.preventDefault();

    const regex = new RegExp(name, "i");
    setGuestsFound(guests.filter((guest) => regex.test(guest.name)));
    setStep(2);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  if (step !== 1) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="justify-center gap-4 mx-auto lg:flex"
    >
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className="bg-[#D7D5B4] bg-opacity-50 text-bronze px-8 py-4 w-full flex-shrink-0 placeholder-bronze outline-bronze uppercase"
        placeholder="Primeiro nome"
      />
      <button
        type="submit"
        className="w-full px-12 mt-4 lg:mt-0 btn disabled:bg-sand"
        disabled={guests.length === 0}
      >
        Buscar
      </button>
    </form>
  );
}
