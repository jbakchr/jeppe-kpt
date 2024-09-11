import { createContext } from "react";

const responseContext = createContext();

const ResponseProvider = ({ children }) => {
  return (
    <responseContext.Provider value={{ responses: [] }}>
      {children}
    </responseContext.Provider>
  );
};

export { responseContext, ResponseProvider };
