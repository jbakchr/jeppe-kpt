import { useContext } from "react";

import { responseContext } from "../../context/ResponseContext";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { AnswerCard } from "../AnswerCard/AnswerCard";

export const QuestionAndAnswerList = () => {
  const { questionAndAnswers } = useContext(responseContext);

  const renderQuestionAndAnswers = () => {
    return questionAndAnswers.map((item, index) => {
      if (item.question) {
        return <QuestionCard key={index} item={item} />;
      } else {
        return <AnswerCard key={index} item={item} />;
      }
    });
  };

  if (questionAndAnswers.length == 0) {
    return null;
  }

  return <div>{renderQuestionAndAnswers()}</div>;
};
