"use client";
import * as React from "react";

import { GuestsContext } from "./guests-context";

export function GuestsSelection({ step, setStep }) {
  const [selected, setSelected] = React.useState();
  const { guestsFound, setConfirmationList, guests, setGuestsFound } =
    React.useContext(GuestsContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const [{ link }] = guests.filter((guest) =>
      guest.link.find((id) => id === selected)
    );

    const confirmationList = link.map((id) =>
      guests.find((guest) => guest.id === id)
    );

    setConfirmationList(confirmationList);
    setStep(3);
  }

  function handleChange(event) {
    setSelected(Number(event.target.value));
  }

  if (step !== 2 || guestsFound.length === 0) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="31"
        fill="none"
        viewBox="0 0 28 31"
      >
        <path
          fill="#A25A44"
          d="M3.6 25.708c.658.803 1.378 1.58 2.156 2.293.402.338.818.66 1.257.953 1.64 1.096 3.607 1.62 5.534 1.924l.432.063c.3.022.602.04.903.05 2.793.087 5.542-.41 8.182-1.31 1.344-.458 2.689-.942 3.934-1.634.57-.317 1.094-.691 1.628-1.062l.117-.08c0-.021 0-.042-.002-.063a43.075 43.075 0 0 1-1.547-.165c-1.324-.159-2.662-.312-3.969-.581-2.77-.57-5.76-.994-8.274-2.367-1.315-.718-2.454-1.764-3.136-3.115-.764-1.515-1.026-3.294-.908-4.982a.38.38 0 0 1-.323.16.266.266 0 0 1-.237-.384c.095-.19.39-.246.55-.103a.233.233 0 0 1 .033.038c.362-3.776 2.486-7.244 5.385-9.612 2.86-2.335 6.439-2.848 9.916-3.635a1.191 1.191 0 0 0-.077-.281c-.486-.255-.988-.481-1.5-.677-3.085-.986-6.325-1.587-9.51-.72-1.854.504-3.571 1.417-5.22 2.388-1.592.939-3.234 1.877-4.606 3.133C1.655 8.377.816 11.948.463 15.416c-.19 1.877-.434 3.875.224 5.689.62 1.71 1.771 3.21 2.913 4.603Zm19.33 2.363c.063.015.116.08.152.106.013.145-.06.235-.158.235-.1 0-.136-.072-.15-.153-.02-.104.062-.21.155-.188Zm-6.337-1.482c.024.064.06.113.047.137-.014.027-.07.04-.11.044-.01 0-.045-.058-.038-.073.017-.035.054-.06.101-.108Zm-1.546.344c.203-.013.328.09.333.272.004.166-.111.287-.27.285-.161-.002-.265-.11-.274-.284-.008-.167.066-.264.211-.273Zm-1.676-1.237c.012.026.038.058.03.076-.008.02-.046.027-.072.04l-.056-.062.098-.054Zm-.349.905.024.032-.031.065c-.009-.01-.025-.023-.023-.03.006-.024.02-.045.03-.067Zm-1.05 3.141a.814.814 0 0 1 .488-.174c.078 0 .169.09.154.151-.004.016-.005.033-.013.046-.129.214-.358.3-.576.208a.175.175 0 0 1-.09-.105c-.01-.038.007-.104.037-.126Zm-1.62-6.085a.423.423 0 0 1 .227-.003c.033.007.053.072.095.133-.058.058-.105.124-.167.164-.07.045-.156.055-.227-.01a.15.15 0 0 1-.04-.085c-.012-.092.035-.17.111-.2ZM6.337 16.91l.063.053-.074.084c-.014-.025-.04-.05-.04-.074.002-.022.033-.042.051-.063Zm-1.677-2.1c.052.006.1.045.178.085-.063.052-.092.095-.128.102-.07.014-.13-.023-.13-.097 0-.032.056-.093.08-.09Zm.017 9.944c.104.259.113.43.042.602-.01.024-.055.056-.074.05-.043-.012-.106-.04-.114-.072-.043-.18-.004-.349.146-.58Zm-1.81-13.25c.017-.004.067.043.063.056-.012.038-.041.07-.077.126l-.094-.121c.035-.022.07-.053.108-.061Z"
        />
      </svg>

      <h2 className="text-3xl font-secondary text-earth">Selecione seu nome</h2>

      {guestsFound.map((guest) => (
        <label
          key={guest.id}
          className="flex gap-2 uppercase hover:bg-opacity-80 p-4 items-center hover:cursor-pointer min-w-[350px] bg-[#D7D5B4] bg-opacity-50"
        >
          <input
            type="radio"
            className="hidden peer"
            name="selected-guest"
            id={`${guest?.id}`}
            value={guest.id}
            onChange={handleChange}
          />
          <div className="flex items-center justify-center w-4 h-4 border rounded-full border-earth peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-earth peer-checked:before:block peer-checked:before:rounded-full" />
          {guest.name}
        </label>
      ))}
      <button type="submit" className="mt-8 btn">
        Continuar
      </button>

      <button
        type="button"
        className="hover:underline"
        onClick={() => {
          setGuestsFound([]);
          setStep(1);
        }}
      >
        Nova Busca
      </button>
    </form>
  );
}
