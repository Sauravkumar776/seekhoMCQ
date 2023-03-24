import { useContext } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import styles from "./timer.module.css";

const Timer = () => {
  const { secondsLeft } = useContext(QuestionContext);
  return <div className={styles.timerContainer}>Time left: {secondsLeft}s</div>;
};

export default Timer;
