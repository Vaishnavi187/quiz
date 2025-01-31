import React, { useState,useEffect } from "react";
import Welcome from "./components/Welcome";
import Myquiz from "./components/Myquiz";
import Result from "./components/Result";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizFinish = (score) => {
    setFinalScore(score);
    setQuizFinished(true);
  };

  const handleRetry = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setFinalScore(0);
  };


  return (
    <>
      {!quizStarted && !quizFinished && <Welcome onStart={handleStartQuiz} />}
      {quizStarted && !quizFinished && <Myquiz onFinish={handleQuizFinish} />}
      {quizFinished && (
        <Result score={finalScore} totalQuestions={10} onRetry={handleRetry} />
      )}
    </>
  );
};

export default App;
