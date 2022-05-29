import React, { useState, useEffect } from "react";

const SingleQuizBody = ({ quiz }) => {
  const [loading, setLoading] = useState(true);
  const questions = quiz;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const currentUser = localStorage.getItem("current-user-name");
  const id = localStorage.getItem("current-user-id");
  const [totalScore, setTotalscore] = useState();
  const [data, setData] = useState();
  const currentTotalScore = localStorage.getItem("current-user-totalScore");
  const user = {
    name: currentUser,
    totalScore: parseInt(currentTotalScore) + parseInt(score),
    id,
  };

  const updateTotalscore = (id, user, successCallback) => {
    fetch(`http://localhost:3000/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },

      method: "PUT",

      body: JSON.stringify(user),
    })
      .then((r) => r.json())

      .then((data) => {
        if (data.error === false && typeof successCallback === "function") {
          successCallback(data.data);
        }
      })

      .catch((err) => console.log(err));
  };
  updateTotalscore(id, user, (e, data) => {
    e.preventDefault();
    setTotalscore(data.totalScore);
  });

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
  // useEffect(() => {
  //   fetch(
  //     `http://localhost:3000/users/${localStorage.getItem("current-user-id")}`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((userData) => {
  //       setData(userData);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div>
      {showScore ? (
        <>
          <h2>Hej {currentUser}</h2>

          <form className="userScore" onSubmit={updateTotalscore}>
            <p>
              Zdobyłeś {score} na {questions.length} możliwych
            </p>
            <h3> Aktualnie masz {user.totalScore} punktów</h3>
            <button
              type="submit"
              onClick={() => {
                let generalScore = user.totalScore;
                localStorage.setItem("current-user-totalScore", generalScore);
              }}
            >
              Aktualizuj wynik
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Hej {currentUser}</h2>
          <h3>Aktualnie masz {currentTotalScore} pkt</h3>
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
