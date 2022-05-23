import React, {Component} from "react";
import QuizBody from '../FullQuizBody/QuizBody'
import questions from '../Quizes/quiz1' 
import questions2 from '../Quizes/quiz2' 
import questions3 from '../Quizes/quiz3' 
import SingleQuizBody from '../Quizes/SingleQuizBody';

const QuizLeague = () => {
return (
    <div>
        <ul>
            <li><QuizBody title={'Stolice'} singleQuiz={<SingleQuizBody quiz={questions}/>}/></li>
            <li><QuizBody title={'Rzeki'} singleQuiz={<SingleQuizBody quiz={questions2}/>} questionsData={questions}/></li>
            <li><QuizBody title={'Góry'} singleQuiz={<SingleQuizBody quiz={questions3}/>}/></li>
            <li><QuizBody title={'Różne'} singleQuiz={<SingleQuizBody quiz={questions}/>} /></li>
        </ul>
    </div>
        
    
)
}

export default QuizLeague