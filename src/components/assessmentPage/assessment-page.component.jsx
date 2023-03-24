import React, { useState, useEffect } from 'react';
import QuestionCard from '../cards/question-card/question-card.component';
import styles from './assessment-page.module.css';
import { QuestionContext } from '../../context/QuestionContext';

const AssessmentApp = () => {
  const { questions, currentQuestion, setCurrentQuestion, selectedAnswers, setSelectedAnswers } = React.useContext(
    QuestionContext
  );

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(30);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: selectedOption });

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSecondsLeft(30);
    setSelectedAnswers({});
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    if (secondsLeft === 0) {
      setShowScore(true);
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [secondsLeft]);

  return (
    <div className={styles.appContainer}>
      {showScore ? (
        <div className={styles.scoreContainer}>
          <h2>You scored {score} out of {questions.length}!</h2>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <div className={styles.quizContainer}>
          <div className={styles.questionContainer}>
            <QuestionCard
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              handleAnswer={handleAnswer}
            />
            <div className={styles.timerContainer}>
              Time left: {secondsLeft}s
            </div>
          </div>
          <div className={styles.sidebar}>
            <h2>Selected Answers</h2>
            {Object.keys(selectedAnswers).map((questionIndex) => (
              <div key={questionIndex} className={styles.selectedAnswer}>
                <div className={styles.questionNumber}>Q{+questionIndex + 1}:</div>
                <div className={styles.answer}>{selectedAnswers[questionIndex]}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentApp;
