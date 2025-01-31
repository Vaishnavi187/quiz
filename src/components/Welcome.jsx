import React from "react";

const Welcome = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl md:text-5xl font-bold mb-4 animate-bounce">
        Welcome to the Quiz Session
      </h1>
      <p className="text-xl md:text-2xl font-semibold">
        Test your knowledge and have fun!
      </p>
      <button
        onClick={onStart}
        className="bg-purple-400 px-6 mt-5 py-3 w-2/5 rounded-lg hover:bg-purple-500 transition-all text-md md:text-2xl font-bold"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Welcome;
