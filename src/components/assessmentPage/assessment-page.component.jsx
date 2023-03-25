import React, { useEffect, useContext } from "react";
import QuestionCard from "../cards/question-card/question-card.component";
import styles from "./assessment-page.module.css";
import { QuestionContext } from "../../context/QuestionContext";
import ShowScore from "../showScore/show-score.component";
import Sidebar from "../sidebar/sidebar.component";
import Timer from "../timer/timer.component";
import { ScoreContext } from "../../context/ScoreContext";

const AssessmentApp = () => {
  const {
    questions,
    currentQuestion,
    setCurrentQuestion,
    selectedAnswers,
    setSelectedAnswers,
    secondsLeft,
    setSecondsLeft,
  } = useContext(QuestionContext);

  const {
    score,
    setScore,
    showScore,
    setShowScore,

  } = useContext(ScoreContext);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: selectedOption,
    });

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
        <ShowScore />
      ) : (
        <div className={styles.quizContainer}>
          <div className={styles.questionContainer}>
            <QuestionCard
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              handleAnswer={handleAnswer}
            />
            <Timer />
          </div>
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default AssessmentApp;
