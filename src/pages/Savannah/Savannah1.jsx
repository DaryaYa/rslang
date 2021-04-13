import React, { useState, useEffect, useCallback } from "react";
import { Dropdown } from "react-bootstrap";
import "./savannah.scss";
import { shuffleArray, getRandomInt } from "./utils";
import good from "./assets/good.mp3";
import bad from "./assets/bad.mp3";
import StatScreen from "./StatScreen";
import StartScreen from "./StartScreen";
import { Card } from "./Card";

const Savannah = () => {
  const [group, setGroupe] = useState(0);
  const [wordsArray, setWordsArray] = useState([]); //wrong words
  const [timer, setTimer] = useState(100);
  const [data, setData] = useState([]); // async data (array of words) from endpoint
  const [shots, setShots] = useState(10); // questions in game
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOn, setGameOn] = useState(false);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]); // all answers: right & wrong
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [move, setMove] = useState(false);

  const fetchWords = async () => {
    setLoading(true);
    setGameOn(true);
    const page = getRandomInt(30);
    const endpoint = `https://darya-rslang.herokuapp.com/words?group=${group}&page=${page}`;
    const data = await (await fetch(endpoint)).json();
    setData(data);
    setLoading(false);
    // set State
    const newArr = shuffleArray(data);
    setQuestion(newArr[0].word);
    setCorrectAnswer(newArr[0].wordTranslate);
    const ansArr1 = [
      ...data.map((el) => el.wordTranslate).splice(1, 4),
      newArr[0].wordTranslate,
    ];
    const ansArr = shuffleArray(ansArr1);
    console.log(data);
    setAnswers(ansArr);
    //handleToggle();
   // setMove((m) => !m);
  };

  // const handleToggle = useCallback(() => {
  //   setMove(!move);
  // },[]) 
  //setMove(m => !m)

const nextShot = useCallback(() => {
  if (shots > 0) {
    setShots((prev) => prev - 1);
    setTimer(10);
 //   handleToggle();
 setMove((m) => !m);
    const newArr = shuffleArray(data);
    setQuestion(newArr[0].word);
    setCorrectAnswer(newArr[0].wordTranslate);
    const ansArr1 = [
      ...data.map((el) => el.wordTranslate).splice(1, 4),
      newArr[0].wordTranslate,
    ];
    const ansArr = shuffleArray(ansArr1);
   // console.log(ansArr1);
    setAnswers(ansArr);
  } else {
    setGameOn(false);
  }
}, [data, shots]);

  useEffect(() => {
    const time = setInterval(() => {
      setTimer(timer - 1);
 //     console.log(timer);
    }, 1000);
    if (timer === 0) {
      setTimer(10);
      setWordsArray((prev) => [...prev, correctAnswer]);
      nextShot();
    }
    return () => {
      clearTimeout(time);
    };
  }, [timer, correctAnswer, nextShot]);

  

  const startGame = () => {
   // handleToggle();
  // setMove((m) => !m);
    fetchWords();
    setShots(10);
    setGameOn(true);
    setTimer(10);
    setScore(0);
    setWordsArray([]);
  };

  const handleClick = (e) => {
    if (e.target.innerText === correctAnswer) {
      setScore(score + 1);
      const audio = new Audio(good);
      audio.play();
    } else {
      setWordsArray((prev) => [...prev, e.target.innerText]);
      const audio = new Audio(bad);
      audio.play();
    }
    nextShot();
  };
 // console.log(wordsArray);
  // RENDER SCREENS
  let screen;
  if (gameOn && shots > 0) {
    screen = (
      <>
        <div className="sprint__block-top">
          <div className="sprint__score">Score: {score}</div>
          <div>{timer}</div>
        </div>
        {
          <Card
            answers={answers}
            question={question}
            correctAnswer={correctAnswer}
            callback={handleClick}
            move={move}
          />
        }
      </>
    );
  } else if (!gameOn) {
    screen = <StartScreen startGame={startGame} small={"small"} />;
  } else if (shots === 0) {
    screen = (
      <StatScreen
        wordsArray={wordsArray}
        score={score}
        shots={10}
        startGame={startGame}
      />
    );
  }

  return (
    <section className="savannah section-game">
      {/* <h1>Savanna Game</h1> */}
      <div className="game-container">
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Choose difficulty
          </Dropdown.Toggle>
          <div>Level {group + 1}</div>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => setGroupe(0)}>1</Dropdown.Item>
            <Dropdown.Item onClick={(e) => setGroupe(1)}>2</Dropdown.Item>
            <Dropdown.Item onClick={(e) => setGroupe(2)}>3</Dropdown.Item>
            <Dropdown.Item onClick={(e) => setGroupe(3)}>4</Dropdown.Item>
            <Dropdown.Item onClick={(e) => setGroupe(4)}>5</Dropdown.Item>
            <Dropdown.Item onClick={(e) => setGroupe(5)}>6</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div>Shots: {shots}</div>
        {loading && <p>Loading...</p>}
        {!loading ? <div className="game-wrapper">{screen}</div> : null}
      </div>
    </section>
  );
};

export default Savannah;
