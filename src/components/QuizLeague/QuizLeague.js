import React, {useState, useEffect} from "react";
import QuizBody from '../FullQuizBody/QuizBody'
import questions from '../Quizes/quiz1' 
import questions2 from '../Quizes/quiz2' 
import questions3 from '../Quizes/quiz3' 
import SingleQuizBody from '../Quizes/SingleQuizBody';
import UsersList from "../UsersList/UsersList";


const QuizLeague = () => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

// useEffect(() => {
//     fetch('http://localhost:3000/users')
//     .then((response) => {
//     return response.json()
//     })
//     .then((userData) => {
//     setData(userData)
//     setLoading(false)
//     })
//     }, [])

return (
    <div>
        <UsersList />
        <ul>
            <li><QuizBody title={'Stolice'} singleQuiz={<SingleQuizBody quiz={questions}/>}/></li>
            <li><QuizBody title={'Rzeki'} singleQuiz={<SingleQuizBody quiz={questions2}/>}/></li>
            <li><QuizBody title={'Góry'} singleQuiz={<SingleQuizBody quiz={questions3}/>}/></li>
            <li><QuizBody title={'Różne'} singleQuiz={<SingleQuizBody quiz={questions}/>} /></li>
        </ul>
    </div>
        
    
)
}

export default QuizLeague