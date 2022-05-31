import './quizLeague.scss';
import React, { useState } from "react";
import QuizBody from "../FullQuizBody/QuizBody";
import questions from "../Quizes/quiz1";
import questions2 from "../Quizes/quiz2";
import questions3 from "../Quizes/quiz3";
import SingleQuizBody from "../Quizes/SingleQuizBody";
import UsersList from "../UsersList/UsersList";

const QuizLeague = () => {
  const [showQuizes, setShowQuizes] = useState(false);
  const handleClickToShowQuizes = () => {
    setShowQuizes(true)
}
  if (localStorage.getItem("current-user-name") === null) {
    return (
      <div>
        <UsersList setShowQuizes={handleClickToShowQuizes}/>
      </div>
    );
  } else {
    return (
      <section className='quizLeague'>
        <h2>Witaj <strong>{localStorage.getItem("current-user-name")}</strong></h2>
        <p>Aktualnie masz {localStorage.getItem("current-user-totalScore")} pkt</p>
        <div className="quizesList">
            <QuizBody
              title={"Stolice"}
              singleQuiz={<SingleQuizBody quiz={questions} />}
            />
         
            <QuizBody
              title={"Rzeki"}
              singleQuiz={<SingleQuizBody quiz={questions2} />}
            />
          
            <QuizBody
              title={"Góry"}
              singleQuiz={<SingleQuizBody quiz={questions3} />}
            />
          
            <QuizBody
              title={"Różne"}
              singleQuiz={<SingleQuizBody quiz={questions} />}
            />
          </div>
      </section>
    );
  }
};

export default QuizLeague;
