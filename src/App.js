import "./App.css";
import AssessmentApp from "./components/assessmentPage/assessment-page.component";
import { QuestionProvider } from "./context/QuestionContext";
import { ScoreProvider } from "./context/ScoreContext";

function App() {
  return (
    <QuestionProvider>
    <ScoreProvider>
      <AssessmentApp />
      </ScoreProvider>
    </QuestionProvider>
  );
}

export default App;
