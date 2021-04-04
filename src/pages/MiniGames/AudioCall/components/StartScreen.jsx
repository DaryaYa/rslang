import React from 'react';
import StartGameBtn from './StartGameBtn';

const StartScreen = ({ startGame }) => {
  return (
    <>
      <div className="audiocall__tutorial">После начала игры вы услышите английское слово, Вам нужно будет выбрать правильный вариант перевода этого слова на русский язык. У Вас будет 5 секунд для выбора</div>
      <StartGameBtn startGame={startGame} />
    </>
  );
};

export default StartScreen;
