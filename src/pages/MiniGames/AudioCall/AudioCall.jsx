import React from 'react';
import './AudioCall.scss';
import { Dropdown } from "react-bootstrap";
// components
import ChoiceButtons from './components/ChoiceButtons';
import Timer from './components/Timer';
import StartScreen from './components/StartScreen';
import FinishScreen from './components/FinishScreen';
// custom functions
import { fillAnArray, getRandomItem, shuffleArr } from './utils';
// hardcode db
 //import book1 from './hrdcdDb';

import { getRandomInt } from '../../Savannah/utils';


const AudioCall = () => {
  const [userAnswerOptions, setUserAnswerOptions] = React.useState([]);
  const [lengthOfAnswerOptions] = React.useState(5);
  const [correctAnswer, setCorrectAnswer] = React.useState("");
  const [timerCounter, setTimerCounter] = React.useState(5);
  const [isGameOn, setIsGameOn] = React.useState(false);
  const [userCorrectAnswers, setUserCorrectAnswers] = React.useState([]);
  const [userWrongAnswers, setUserWrongAnswers] = React.useState([]);
  const [userNotAnswer, setUserNotAnswer] = React.useState([]);
  const [stepsToFinish, setStepsToFinish] = React.useState(5);

 // const [fetchData, setFetchData] = React.useState([]); // async data (array of words) from endpoint
  const [group, setGroupe] = React.useState(0); // difficulty level
  const [loading, setLoading] = React.useState(false);
  const [book1, setBook2] = React.useState([]);

  /// --- TO FIX!!! - first game start !!!!!!!!!!

  const fetchWords = async () => {
    setLoading(true);
    setIsGameOn(true); //--------
    const page = getRandomInt(30);
    const endpoint = `https://darya-rslang.herokuapp.com/words?group=${group}&page=${page}`;
    const data = await (await fetch(endpoint)).json();
 //   setFetchData(data); 
    const book = data.map(elem => {
     const audio = elem.audio, 
     wordTranslate = elem.wordTranslate
     return {audio, wordTranslate}
    });
    console.log(book)
    console.log(group, page) 
    // console.log(book1)
    setBook2(book)
    setLoading(false);
  };

  const audioPlay = (audioFile) => {
    const audio = new Audio(
      `https://raw.githubusercontent.com/DaryaYa/react-rslang-be/main/${audioFile}`
    );

    audio.play();
  };

  React.useEffect(() => {
    let timer;

    if (timerCounter > 0) {
      timer = setTimeout(() => setTimerCounter((c) => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timerCounter]);

  const getArrOfUserOptions = (duplicate) => {
    return fillAnArray(book1, lengthOfAnswerOptions - 1, duplicate);
  };

  const startGame = () => {
    fetchWords();
    setStepsToFinish(5);
    setIsGameOn(true);
    setUserCorrectAnswers([]);
    setUserWrongAnswers([]);
    setUserNotAnswer([]);
    setTimerCounter(5);
    

    const randomObj = getRandomItem(book1);
    setCorrectAnswer(randomObj.wordTranslate);
    audioPlay(randomObj.audio);
    let userAnswersOpt = [
      randomObj.wordTranslate,
      ...getArrOfUserOptions(randomObj.wordTranslate),
    ];
    let shuffledUserAnswersOpt = shuffleArr(userAnswersOpt);
    setUserAnswerOptions(shuffledUserAnswersOpt);
  };

  const nextLevel = () => {
    if (stepsToFinish > 1 && isGameOn) {
      setTimerCounter(5);
      setStepsToFinish((c) => c - 1);

      const randomObj = getRandomItem(book1);
      setCorrectAnswer(randomObj.wordTranslate);
      audioPlay(randomObj.audio);
      let userAnswersOpt = [
        randomObj.wordTranslate,
        ...getArrOfUserOptions(randomObj.wordTranslate),
      ];
      let shuffledUserAnswersOpt = shuffleArr(userAnswersOpt);
      setUserAnswerOptions(shuffledUserAnswersOpt);
    } else {
      setIsGameOn(false);
      return;
    }
  };

  const nextBtnClickHandler = () => {
    setUserNotAnswer([...userNotAnswer, correctAnswer]);
    nextLevel();
  };

  const userClickHandler = (option) => {
    option === correctAnswer
      ? setUserCorrectAnswers([...userCorrectAnswers, option])
      : setUserWrongAnswers([...userWrongAnswers, option]);

    if (stepsToFinish > 0) {
      nextLevel();
    }
  };

  // IF RUN OUT OF TIME => NEXT LEVEL
  if (timerCounter === 0 && isGameOn) {
    setUserNotAnswer([...userNotAnswer, correctAnswer]);
    nextLevel();
  }

  // RENDER SCREENS
  let screen;
  if (isGameOn && stepsToFinish > 0) {
    screen = (
      <>
        <Timer timerCounter={timerCounter} />
        <ChoiceButtons
          userAnswerOptions={userAnswerOptions}
          correctAnswer={correctAnswer}
          userClickHandler={userClickHandler}
        />
        <button
          className="game-btn audiocall__next-btn"
          onClick={() => nextBtnClickHandler()}
        >
          Пропустить
        </button>
      </>
    );
  } else if (!isGameOn && stepsToFinish > 1) {
    screen = <StartScreen startGame={startGame} />;
  } else if (stepsToFinish === 1) {
    screen = (
      <FinishScreen
        startGame={startGame}
        userCorrectAnswers={userCorrectAnswers}
        userNotAnswer={userNotAnswer}
        userWrongAnswers={userWrongAnswers}
      />
    );
  }

  return (
    <section className="section-game">
      <div className="game-container">
        <h1 className="game-title">AudioCall</h1>
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
        {loading && <p>Loading...</p>}
        {!loading ? <div className="game-wrapper">{screen}</div> : null}
      </div>
    </section>
  );
};

export default AudioCall;
