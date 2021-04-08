import rez from "./assets/rez.mp3";
import { Button } from "react-bootstrap";

const StatScreen = ({ wordsArray, score, shots, startGame }) => {
  const audio = new Audio(rez);
  if (score >= 0) {
    audio.play();
  }

  return (
    <div>
      <p>Ошибки: {wordsArray.toString().split(",").join(", ")}</p>
      <p>Score: {score}</p>
      <p>
        процент правильных ответов:{" "}
        {((shots - wordsArray.length) * 100) / shots} %
      </p>
      <p>количество изученных слов: {shots}</p>
      <Button
        variant="success"
        onClick={() => {
          startGame();
        }}
      >
        Start
      </Button>
    </div>
  );
};

export default StatScreen;
