import React, {Component} from "react";
import SingleQuizBody1 from "../Quizes/SingleQuizBody1";
import SingleQuizBody2 from "../Quizes/SingleQuizBody2";
import SingleQuizBody3 from "../Quizes/SingleQuizBody3";
import QuizBody from '../FullQuizBody/QuizBody'
import questions from '../Quizes/quiz1' 
import questions2 from '../Quizes/quiz2' 
import questions3 from '../Quizes/quiz3' 
import SingleQuizBody from '../Quizes/SingleQuizBody';
import UsersList from "../UsersList/UsersList";

const QuizLeague = ({userName}) => {
return (
    <div>
        <ul>
            <li><QuizBody title={'Stolice'} singleQuiz={<SingleQuizBody1 />}/></li>
            <li><QuizBody title={'Rzeki'} singleQuiz={<SingleQuizBody2 />} questionsData={questions}/></li>
            <li><QuizBody title={'Góry'} singleQuiz={<SingleQuizBody3 />}/></li>
            <li><QuizBody title={'Różne'} singleQuiz={<SingleQuizBody quiz={questions3}/>} /></li>
        </ul>
        <UsersList />
    </div>
        
    
)
}

export default QuizLeague