import { createContext } from "react";

import axios from "axios";

const responseContext = createContext();

const ResponseProvider = ({ children }) => {
  const requestAnswer = (response) => {
    console.log(response);

    axios
      .post("http://localhost:3000/api/question", { question: response })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <responseContext.Provider value={{ requestAnswer }}>
      {children}
    </responseContext.Provider>
  );
};

export { responseContext, ResponseProvider };
