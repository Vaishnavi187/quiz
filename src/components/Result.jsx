import React from "react";

const Result = ({ score, totalQuestions, onRetry }) => {
  return (
    <div className="p-6 mx-auto text-center mt-44">
      <h1 className="text-3xl font-bold animate-bounce">Congratulations!</h1>
      <p className="text-2xl font-semibold animate-bounce">
        Quiz Completed Successfully!!
      </p>
      <p className="mt-6 text-3xl animate-bounce">
        Your Score: <b>{score}</b>
      </p>
      <p className="text-2xl animate-bounce">
        Total Questions: {totalQuestions}
      </p>
      <button
        onClick={onRetry}
        className="mt-4 p-2 bg-blue-500 w-2/5 text-white rounded font-bold"
      >
        Try Again
      </button>
    </div>
  );
};

export default Result;
