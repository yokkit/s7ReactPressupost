import { createContext, useState } from "react";

export default function Provider({ children }) {
  const [pressupost, setPressupost] = useState({
    total: 0,
    numPaginas: 0,
    numIdiomas: 0,
    preuWeb: 0,
    preuConsult: 0,
    preuAds: 0,
  });
  return (
    <PressupostContext.Provider value={[pressupost, setPressupost]}>
      {children}
    </PressupostContext.Provider>
  );
}

export const PressupostContext = createContext();
