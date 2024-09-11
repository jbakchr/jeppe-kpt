import { useState, useContext } from "react";

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
  const [inputValue, setInputValue] = useState("");
  const { requestAnswer } = useContext(responseContext);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAnswerRequest = (e) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      setInputValue("");
      requestAnswer(e.target.value);
    }
  };

  return (
    <div className="question-input">
      <input
        type="text"
        style={inputStyles}
        placeholder="Spørg Jeppe om alt! Det li'meget .."
        onKeyDown={handleAnswerRequest}
        onChange={handleOnChange}
        value={inputValue}
      />
    </div>
  );
};
