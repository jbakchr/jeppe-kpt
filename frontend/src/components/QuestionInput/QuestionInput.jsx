import { useContext } from "react";

import { responseContext } from "../../context/ResponseContext";

import "./QuestionInput.css";

const inputStyles = {
  flexGrow: 1,
  margin: "10px",
  border: "none",
  background: "none",
  outline: "none",
};

export const QuestionInput = () => {
  const { requestAnswer } = useContext(responseContext);

  const keyDown = (e) => {
    if (e.key === "Enter") {
      requestAnswer(e.target.value);
    }
  };

  return (
    <div className="question-input">
      <input
        type="text"
        style={inputStyles}
        placeholder="Spørg Jeppe om alt! Det li'meget .."
        onKeyDown={keyDown}
      />
    </div>
  );
};
