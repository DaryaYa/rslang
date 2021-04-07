import Btn from './Btn';

const StartScreen = ({ startGame }) => (
  <>
    <div className="game__tutorial">Тут должны быть правила игры, но я, может быть, напишу их позже. Успехов!</div>
    <Btn onClick={startGame} title={'Играть'} classList={'game-btn sprint__start-btn'} />
  </>
);

export default StartScreen;
