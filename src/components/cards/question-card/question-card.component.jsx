import React from 'react';
import './question-card.styles.css';
import PropTypes from 'prop-types';

const QuestionCard = ({ question, options, handleAnswer }) => {
  return (
    <div className="question-card-container">
      <h2 className="question">{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAnswer: PropTypes.func.isRequired,
};
export default QuestionCard;
