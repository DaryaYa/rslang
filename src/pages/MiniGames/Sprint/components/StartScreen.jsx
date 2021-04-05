import Btn from './Btn';

const StartScreen = ({ startGame }) => (
  <>
    <p>Тут должны быть правила игры, но я, может быть, напишу их позже. Успехов!</p>
    <Btn onClick={startGame} title={'Играть'} />
  </>
);

export default StartScreen;
