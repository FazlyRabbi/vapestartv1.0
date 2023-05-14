import { createContext, useState } from "react";

export const AgeGateContext = createContext();

export const AgeGateProvider = ({ children }) => {
  const [isOver18, setIsOver18] = useState(false);

  return (
    <AgeGateContext.Provider value={{ isOver18, setIsOver18 }}>
      {children}
    </AgeGateContext.Provider>
  );
};
