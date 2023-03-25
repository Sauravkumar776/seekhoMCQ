import React, { createContext, useState } from "react";

export const ScoreContext = createContext({});

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
        showScore,
        setShowScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
