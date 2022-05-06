import React, {Component} from "react";
import QuizBody from '../FullQuizBody/QuizBody'

const QuizLeague = ({userName}) => {
return (
    <div>
        <ul>
            <li><QuizBody title={'Stolice'}/></li>
            <li><QuizBody title={'Rzeki'} /></li>
            <li><QuizBody title={'Góry'} /></li>
        </ul>
    </div>
        
    
)
}

export default QuizLeague