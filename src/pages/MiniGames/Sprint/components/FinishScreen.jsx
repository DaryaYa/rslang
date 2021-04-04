import Btn from './Btn';

const FinishScreen = ({ startGame, userCorrectAnswers, userWrongAnswers, userScore }) => (
  <>
    <div>Верно: {userCorrectAnswers.toString().split(',').join(', ')}</div>
    <div>Ошибки: {userWrongAnswers.toString().split(',').join(', ')}</div>
    <div>Очки: {userScore}</div>
    <Btn onClick={startGame} title={'Играть'} />
  </>
);

export default FinishScreen;
