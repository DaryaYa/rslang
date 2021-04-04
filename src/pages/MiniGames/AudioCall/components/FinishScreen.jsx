import React from 'react';
import StartGameBtn from './StartGameBtn';

const FinishScreen = ({
  startGame, userCorrectAnswers, userNotAnswer, userWrongAnswers
}) => (
  <>
    <p>Верно: {userCorrectAnswers.toString().split(',').join(', ')}</p>
    <p>Нет ответа: {userNotAnswer.toString().split(',').join(', ')}</p>
    <p>Ошибки: {userWrongAnswers.toString().split(',').join(', ')}</p>
    <StartGameBtn startGame={startGame} />
  </>
);

export default FinishScreen;
