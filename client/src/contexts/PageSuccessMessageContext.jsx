import { createContext } from "react";
import { useState } from "react";

export const PageSuccessMessageContext = createContext();

export const PageSuccessMessageProvider = ({ children }) => {
  const [successMessage, setSuccessMessage] = useState({
    message: "",
    isOpen: false,
  });

  return (
    <PageSuccessMessageContext.Provider
      value={{ successMessage, setSuccessMessage }}
    >
      {children}
    </PageSuccessMessageContext.Provider>
  );
};
