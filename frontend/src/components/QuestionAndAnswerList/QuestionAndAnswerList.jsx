import { useContext } from "react";

import { responseContext } from "../../context/ResponseContext";

export const QuestionAndAnswerList = () => {
  const { questionAndAnswers } = useContext(responseContext);

  const renderQuestionAndAnswers = () => {
    return questionAndAnswers.map((item, index) => {
      if (item.question) {
        return (
          <div key={index}>
            <p>{item.question}</p>
          </div>
        );
      } else {
        return (
          <div key={index}>
            <p>{item.answer}</p>
          </div>
        );
      }
    });
  };

  if (questionAndAnswers.length == 0) {
    return null;
  }

  return <div>{renderQuestionAndAnswers()}</div>;
};
