import { useContext } from "react"
import { QuestionContext } from "../../context/QuestionContext";
import { ScoreContext } from "../../context/ScoreContext";
import styles from './show-score.module.css';

const ShowScore = () => {

    const {
        questions,
        setCurrentQuestion,
        setSelectedAnswers,
        // score,
        // setScore,
        // setShowScore,
        setSecondsLeft
      } = useContext(QuestionContext);

      const {score,setScore, setShowScore} = useContext(ScoreContext);

      
    const handleRestart = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSecondsLeft(60);
        setSelectedAnswers({});
      };

    return(
        <div className={styles.scoreContainer}>
        <h2>
          You scored {score} out of {questions.length}!
        </h2>
        <button onClick={handleRestart}>Restart</button>
      </div>
    )
}

export default ShowScore