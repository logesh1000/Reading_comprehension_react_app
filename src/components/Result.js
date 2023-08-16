import React from "react";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>Your score: {score}/{totalQuestions}</p>
    </div>
  );
};

export default Result;
