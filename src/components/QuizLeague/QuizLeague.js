import React, { useState, useEffect, useTransition } from "react";
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
  if (localStorage.getItem("current-user-id") === null) {
    return (
      <div>
        <UsersList setShowQuizes={handleClickToShowQuizes}/>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Witaj {localStorage.getItem("current-user-name")}</h2>
        <p>Aktualnie masz {localStorage.getItem("current-user-totalScore")} pkt</p>
        <ul>
          <li>
            <QuizBody
              title={"Stolice"}
              singleQuiz={<SingleQuizBody quiz={questions} />}
            />
          </li>
          <li>
            <QuizBody
              title={"Rzeki"}
              singleQuiz={<SingleQuizBody quiz={questions2} />}
            />
          </li>
          <li>
            <QuizBody
              title={"Góry"}
              singleQuiz={<SingleQuizBody quiz={questions3} />}
            />
          </li>
          <li>
            <QuizBody
              title={"Różne"}
              singleQuiz={<SingleQuizBody quiz={questions} />}
            />
          </li>
        </ul>
      </div>
    );
  }
};

export default QuizLeague;
