import { Button } from "react-bootstrap";


const StartScreen = ({ startGame, small }) => (
  <Button className={small} variant="success" onClick={() => startGame()}>
    Play
  </Button>
);

export default StartScreen;
