import React, { useState } from 'react';
import CountDownTimer from '../CountDownTimer/CountDownTimer';
import '../FullQuizBody/QuizBody.scss';


const QuizBody = ({title, singleQuiz, quiz}) => {
const [isOpen, setIsOpen] = useState(false)
return (
    <>
    <ul>
        <li className='quizListElement'>
			<strong>Quiz</strong>
		    <h3> {title} </h3>
            <button onClick={(e) => {
            e.preventDefault()
            setIsOpen(true)
          }}
          >
              Rozwiązuj!
          </button>
          </li>
    {isOpen && (
        <div className='quizBody'>
    <CountDownTimer />
        {singleQuiz}
        <button onClick={(e) => {
        e.preventDefault()
        setIsOpen(false)
        }
        }
        href='#'>
        Zakończ QUIZ
    </button>
  </div>

   )}
   </ul>
</>
    )}


export default QuizBody