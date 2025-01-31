import React, { useState, useEffect } from "react";
import { fetchQuizData } from "./api";

const Quiz = ({ onFinish }) => {
  const [quiz, setQuiz] = useState(null);
  const [Question, setQuestion] = useState(0);
  const [Option, setOption] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const loadQuiz = async () => {
      const data = await fetchQuizData();
      setQuiz(data);
    };
    loadQuiz();
  }, []);

  if (!quiz)
    return (
      <p className="text-center mt-56 text-5xl animate-bounce">
        Loading quiz...
      </p>
    );

  const question = quiz.questions[Question];

  const handleOptionClick = (option) => {
    setOption(option);
  };
  const getButtonClass = (option) => {
    if (!Option) return "bg-gray-200";

    if (option === Option) {
      return option.is_correct
        ? "bg-green-700 text-white"
        : "bg-red-500 text-white";
    }
  };
  const handleNext = () => {
    if (Option?.is_correct) {
      setScore((prevScore) => prevScore + 1);
    }

    if (Question + 1 < quiz.questions.length) {
      setQuestion((prev) => prev + 1);
      setOption(null);
    } else {
      onFinish(score); //
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">{quiz.title}</h1>
      <p className="text-lg">{question.description}</p>

      <div className="mt-4">

        {question.options.map((option) => (
          <button
            key={option.id}
            className={`block w-full p-2 my-2 border rounded ${getButtonClass(
              option
            )}`}
            onClick={() => handleOptionClick(option)}
            disabled={!!Option} // Disable after selecting one time option
          >
            {option.description}{" "}
            {Option && option.is_correct ? "✅" : Option === option ? "❌" : ""}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="mt-4 p-2 bg-blue-500 w-full text-xl font-bold text-white rounded-lg disabled:bg-gray-400"
        disabled={!Option}
      >
        Next Question
      </button>
    </div>
  );
};

export default Quiz;
