import React from 'react';

const ChoiceButtons = ({ userAnswerOptions, userClickHandler }) => {

  const RenderChoiceBtns = () => {
    return (userAnswerOptions.map((option) => (
      <button
        onClick={() => userClickHandler(option)}
        className="audiocall__choice-buttons__item"
        key={option}
      >
        {option}
      </button>
    )));
  };


  return (
    <div className="audiocall__choice-buttons">
      <RenderChoiceBtns />
    </div>
  );
};

export default ChoiceButtons;
