"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const intitialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(intitialState);

  const resetRange = () => {
    setRange(intitialState);
  };

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) throw new Error("context used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
