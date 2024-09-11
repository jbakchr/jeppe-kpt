import { createContext } from "react";

const responseContext = createContext();

const ResponseProvider = ({ children }) => {
  const requestAnswer = (response) => {
    console.log(response);
  };

  return (
    <responseContext.Provider value={{ requestAnswer }}>
      {children}
    </responseContext.Provider>
  );
};

export { responseContext, ResponseProvider };
