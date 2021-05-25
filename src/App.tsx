import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuiz, Difficulty, QuestionState } from './api';

import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};
const total_questions = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);
		const newQuestions = await fetchQuiz(total_questions, Difficulty.EASY);
		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;
			const correct = questions[number].correct_answer === answer;
			if (correct) setScore((prev) => prev + 1);
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};
	const nextQuestion = () => {
		const nextQuestion = number + 1;
		if (nextQuestion === total_questions) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<h1>But What Do You Know</h1>
				{gameOver || userAnswers.length === total_questions ? (
					<button className='start' onClick={startTrivia}>
						Start
					</button>
				) : null}

				{!gameOver ? <p className='score'>Score: {score}</p> : null}
				{loading && <p>Loading Questions...</p>}
				{!loading && !gameOver && (
					<QuestionCard
						questionNr={number + 1}
						totalQuestions={total_questions}
						question={questions[number].question}
						answers={questions[number].answers}
						userAnswer={userAnswers ? userAnswers[number] : undefined}
						callback={checkAnswer}
					/>
				)}
				{!gameOver &&
				!loading &&
				userAnswers.length === number + 1 &&
				number !== total_questions - 1 ? (
					<button className='next' onClick={nextQuestion}>
						Next Question
					</button>
				) : null}
			</Wrapper>
		</>
	);
};

export default App;
