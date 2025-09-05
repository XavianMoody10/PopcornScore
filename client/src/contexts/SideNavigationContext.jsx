import { createContext, useState } from "react";

export const SideNavigationContext = createContext();

export const SideNavigationProvider = ({ children }) => {
  const [isSideNavigationOpen, setIsSideNavigationOpen] = useState(false);

  return (
    <SideNavigationContext
      value={{ isSideNavigationOpen, setIsSideNavigationOpen }}
    >
      {children}
    </SideNavigationContext>
  );
};
