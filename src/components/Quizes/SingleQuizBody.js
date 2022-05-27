import React, { useState } from "react";

const SingleQuizBody = ({ quiz }) => {
  const questions = quiz;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [data, setData] = useState(null);
  const [totalScore, setTotalscore] = useState(0);
  const currentUser = localStorage.getItem('current-user-name');
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
  function addScores() {
    let finalScore = totalScore + score;
    setTotalscore(finalScore)
  }
  function updateTotalscore(e, name, totalScore, id) {
    
    e.preventDefault();
    fetch(`http://localhost:3000/users/${localStorage.getItem('current-user-id')}`, {
      method: "PUT",
      body: {
        name,
        totalScore: addScores,
        id
      }
    }).then(() => {
      setData((prevState) => {
          setTotalscore(addScores);
      });
    });
  }

  return (
    <div>
      {showScore ? (
        <>
          <h2>Hej {currentUser}</h2>
          <form className="userScore" onSubmit={updateTotalscore}>
            <p>
              Zdobyłeś {score} na {questions.length} możliwych
            </p>

            <button type="submit">Aktualizuj wynik</button>
          </form>
        </>
      ) : (
        <>
          <h2>Hej {currentUser}</h2>
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
