import React from 'react';

const ChoiceButtons = ({ userAnswerOptions, userClickHandler }) => {

  const RenderChoiceBtns = () => {
    return (userAnswerOptions.map((option) => (
      <button
        onClick={() => userClickHandler(option)}
        className="choice-button"
        key={option}
      >
        {option}
      </button>
    )));
  };


  return (
    <div className="choice-buttons">
      <RenderChoiceBtns />
    </div>
  );
};

export default ChoiceButtons;
