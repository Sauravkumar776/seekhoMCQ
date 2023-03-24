import { useContext } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import styles from './sidebar.module.css';

const Sidebar = () => {
  const { selectedAnswers } = useContext(QuestionContext);

  return (
    <div className={styles.sidebar}>
      <h2>Selected Answers</h2>
      {Object.keys(selectedAnswers).map((questionIndex) => (
        <div key={questionIndex} className={styles.selectedAnswer}>
          <div className={styles.questionNumber}>Q{+questionIndex + 1}:</div>
          <div className={styles.answer}>{selectedAnswers[questionIndex]}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
