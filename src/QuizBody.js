import './QuizBody.scss';
import React, { useState } from 'react'
import CountDownTimer from './CountDownTimer'
import QuizQuestion from './QuizQuestion'
const QuizBody = ({title}) => {
const [isOpen, setIsOpen] = useState(false)
return (
    <>
    <div>
    <ul>
        <li className='quizListElement'>
            <span><strong>Quiz 1</strong> {title} </span>
            <button onClick={(e) => {
            e.preventDefault()
            setIsOpen(true)
          }}
          >
              Rozwiązuj!
          </button>
          </li>
        <div title={"Stolice"}/>
    {isOpen && (
        <div className='quizBody'>
    <CountDownTimer />
    <>
       <h3 className='quizTitle'>{title}</h3>
       <QuizQuestion q={'Stolica Kirgistanu to:'} a1={'Adeny'} a2={'Taszkient'} a3={'Sana'} a4={'Biszkek'}/>
       <QuizQuestion q={'Stolica Mali to:'} a1={'Bamako'} a2={'Banakoro'} a3={'Safo'} a4={'Kati'}/>
       <QuizQuestion q={'Stolica Afganistanu'} a1={'Kabul'} a2={'Islamabad'} a3={'Dżalalabad'} a4={'Biszkek'}/>
       <QuizQuestion q={'Stolica Mongolii'} a1={'Ułan Bator'} a2={'Baraguin Dugang Khid'} a3={'Sana'} a4={'Biszkek'}/>
    </>
        <a onClick={(e) => {
        e.preventDefault()
        setIsOpen(false)
        }
        }
        href='#'>
        Zakończ QUIZ
    </a>
  </div>
   )}
   </ul>
</div>
</>
    )}


export default QuizBody
