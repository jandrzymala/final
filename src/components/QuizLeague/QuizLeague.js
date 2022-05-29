import React, { useState, useEffect, useTransition } from "react";
import QuizBody from "../FullQuizBody/QuizBody";
import questions from "../Quizes/quiz1";
import questions2 from "../Quizes/quiz2";
import questions3 from "../Quizes/quiz3";
import SingleQuizBody from "../Quizes/SingleQuizBody";
import UsersList from "../UsersList/UsersList";

const QuizLeague = () => {
  const [showQuizes, setShowQuizes] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (localStorage.getItem("current-user-id") === null) {
    return (
      <div>
        <UsersList />
      </div>
    );
  } else if (
    localStorage.getItem("current-user-id") === null ||
    showQuizes === false
  ) {
    return (
      <div>
        <h2>Witaj {localStorage.getItem("current-user-name")}</h2>
        <button
          onClick={() => {
            setShowQuizes(true);
          }}
        >
          Rozpocznij
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Witaj {localStorage.getItem("current-user-name")}</h2>
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
