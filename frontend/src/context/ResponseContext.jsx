import { createContext, useState } from "react";

import axios from "axios";

const responseContext = createContext();

const ResponseProvider = ({ children }) => {
  const [questionAndAnswers, setQuestionAndAnswers] = useState([]);

  const requestAnswer = (question) => {
    setQuestionAndAnswers([...questionAndAnswers, { question }]);
    axios
      .post("http://localhost:3000/api/question", { question: question })
      .then((response) => {
        setQuestionAndAnswers((prev) => [
          ...prev,
          { answer: response.data.answer },
        ]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <responseContext.Provider value={{ questionAndAnswers, requestAnswer }}>
      {children}
    </responseContext.Provider>
  );
};

export { responseContext, ResponseProvider };
