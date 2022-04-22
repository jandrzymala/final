import React from 'react'

const QuizQuestion = ({q, a1, a2, a3, a4}) => {
return (
<div className='quizQuestion'>
    <h3>{q}</h3>
    <ul>
        <li>{a1}</li>
        <li>{a2}</li>
        <li>{a3}</li>
        <li>{a4}</li>
    </ul>
</div>
)
}

export default QuizQuestion