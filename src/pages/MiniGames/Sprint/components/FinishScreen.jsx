import Btn from './Btn';

const FinishScreen = ({ startGame, userCorrectAnswers, userWrongAnswers, userScore }) => (
  <>
    <div className="game__results">
      <p>Верно: {userCorrectAnswers.toString().split(',').join(', ')}</p>
      <p>Ошибки: {userWrongAnswers.toString().split(',').join(', ')}</p>
      <p>Очки: {userScore}</p>
    </div>
    <Btn onClick={startGame} title={'Играть'} classList={'game-btn sprint__start-btn'} />
  </>
);

export default FinishScreen;
