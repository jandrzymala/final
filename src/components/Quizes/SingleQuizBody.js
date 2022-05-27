import React, { useState } from "react";

const SingleQuizBody = ({ quiz }) => {
  const questions = quiz;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [data, setData] = useState(null);
  const [totalScore, setTotalscore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function updateTotalscore(e, name) {
    e.preventDefault();
    fetch(`http://localhost:3000/cars/${name}`, {
      method: "PUT",
    }).then(() => {
      setData((prevState) => {
        return prevState.filter((user) => {
          setTotalscore(user.totalScore + score);
        });
      });
    });
  }

  return (
    <div>
      {showScore ? (
        <>
          <form className="userScore" onSubmit={updateTotalscore}>
            <p>
              Zdobyłeś {score} na {questions.length} możliwych
            </p>

            <button type="submit">Wyślij wynik</button>
          </form>
        </>
      ) : (
        <>
          <div className="question">
            <div className="questionCounter">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="questionText">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer">
            {questions[currentQuestion].answers.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default SingleQuizBody;
