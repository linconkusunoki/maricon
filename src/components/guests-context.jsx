"use client";

import * as React from "react";

export const GuestsContext = React.createContext();

export const GuestsProvider = ({ children }) => {
  const [guestsFound, setGuestsFound] = React.useState([]);
  const [confirmationList, setConfirmationList] = React.useState([]);
  const [guests, setGuests] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwx5i5V0qdrQg3Aq8A8xyXeqsXhPlm2rpr2tp8I_CjYXsm8JcvkzCGHM6TARrfO5yTb/exec"
    )
      .then((data) => data.json())
      .then((data) => {
        const guests = data.slice(1).map((guest) => {
          const [id, name, answer, menu, transport, link] = guest;
          return {
            id,
            name,
            answer,
            menu,
            transport,
            link: link.split(",").map(Number),
          };
        });

        setGuests(guests);
      });
  }, []);

  return (
    <GuestsContext.Provider
      value={{
        guestsFound,
        setGuestsFound,
        confirmationList,
        setConfirmationList,
        guests,
      }}
    >
      {children}
    </GuestsContext.Provider>
  );
};
