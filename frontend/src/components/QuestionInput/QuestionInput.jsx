import "./QuestionInput.css";

export const QuestionInput = () => {
  return (
    <div className="question-input">
      <input
        type="text"
        style={{
          flexGrow: 1,
          margin: "10px",
          border: "none",
          background: "none",
          outline: "none",
        }}
      />
      <p>icon</p>
    </div>
  );
};
