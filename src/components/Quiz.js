import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import quizData from "../data/Quizdata";

export function Quiz () {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === quizData.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="quiz">
      {quizCompleted ? (
        <Result score={score} totalQuestions={quizData.length} />
      ) : (
        <Question
          question={quizData[currentQuestionIndex].question}
          options={quizData[currentQuestionIndex].options}
          onOptionClick={handleOptionClick}
        />
      )}
    </div>
  );
};

