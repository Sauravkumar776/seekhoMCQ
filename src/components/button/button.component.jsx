import React from 'react';

function Button({prevQuestionHandler}) {
    return (
        <button
        className="previous-button"
        onClick={prevQuestionHandler}
      >
        Previous
      </button>
    );
}

export default Button;