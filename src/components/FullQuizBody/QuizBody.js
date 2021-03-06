import React, { useState } from 'react';
import '../FullQuizBody/QuizBody.scss';


const QuizBody = ({title, singleQuiz}) => {
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
        {singleQuiz}
        <button onClick={(e) => {
        e.preventDefault()
        setIsOpen(false)
        }
        }
        href='#'>
        Zamknij
    </button>
  </div>

   )}
   </ul>
</>
    )}


export default QuizBody