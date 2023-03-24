import "./App.css";
import AssessmentApp from "./components/assessmentPage/assessment-page.component";
import { QuestionProvider } from "./context/QuestionContext";

function App() {
  return (
    <QuestionProvider>
      <AssessmentApp />
    </QuestionProvider>
  );
}

export default App;
