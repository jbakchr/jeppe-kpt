import { useContext } from "react";

import { responseContext } from "../../context/ResponseContext";

export const QuestionAndAnswerList = () => {
  const { questionAndAnswers } = useContext(responseContext);

  console.log(questionAndAnswers);

  return <div>QuestionAndAnswerList</div>;
};
