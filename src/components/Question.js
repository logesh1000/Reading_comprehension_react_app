import React from "react";
import Option from "./Option";

const Question = ({ question, options, onOptionClick }) => {
  return (
    <div className="question">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <Option
            key={index}
            optionText={option}
            onClick={onOptionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
