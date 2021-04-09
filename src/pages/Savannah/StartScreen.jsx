import { Button } from "react-bootstrap";

const StartScreen = ({ startGame, small }) => (
  <>
    <h1>Savanna Game</h1>
    <Button className={small} variant="success" onClick={() => startGame()}>
    Play
  </Button>
  </>
  
);

export default StartScreen;
