import React from "react";

export const AnswerCard = ({ item }) => {
  return (
    <div>
      <p style={{ fontFamily: "arial", lineHeight: "150%" }}>{item.answer}</p>
    </div>
  );
};
