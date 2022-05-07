import React, { useState } from 'react';
import quiz3 from './quiz3'
const SingleQuizBody = ({quiz}) => {
	const questions = {quiz};
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div>
			{showScore ? (
				<div className='userScore'>
					you scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question'>
						<div className='questionCounter'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='questionText'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer'>
						{questions[currentQuestion].answers.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default SingleQuizBody