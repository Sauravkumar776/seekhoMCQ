import React,{createContext,useState} from 'react';
import data from '../data';

export const QuestionContext = createContext({});

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(60);

  return ( 
    <QuestionContext.Provider
      value={{
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        selectedAnswers,
        setSelectedAnswers,
        secondsLeft,
        setSecondsLeft,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
