import "./QuestionInput.css";

const inputStyles = {
  flexGrow: 1,
  margin: "10px",
  border: "none",
  background: "none",
  outline: "none",
};

export const QuestionInput = () => {
  const keyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed");
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
