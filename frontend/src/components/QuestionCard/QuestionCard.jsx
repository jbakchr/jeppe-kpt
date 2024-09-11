export const QuestionCard = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <p
        style={{
          backgroundColor: "lightgray",
          borderRadius: "20px",
          padding: "10px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {item.question}
      </p>
    </div>
  );
};
