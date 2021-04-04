import React from 'react';
// components
import ChoiceButtons from './components/ChoiceButtons';
import Timer from './components/Timer';
import StartScreen from './components/StartScreen';
import FinishScreen from './components/FinishScreen';
// custom functions
import { fillAnArray, getRandomItem, shuffleArr } from './utils';
// hardcode db
import book1 from './hrdcdDb';


const AudioCall = () => {
  const [userAnswerOptions, setUserAnswerOptions] = React.useState([]);
  const [lengthOfAnswerOptions] = React.useState(5);
  const [correctAnswer, setCorrectAnswer] = React.useState('');
  const [timerCounter, setTimerCounter] = React.useState(5);
  const [isGameOn, setIsGameOn] = React.useState(false);
  const [userCorrectAnswers, setUserCorrectAnswers] = React.useState([]);
  const [userWrongAnswers, setUserWrongAnswers] = React.useState([]);
  const [userNotAnswer, setUserNotAnswer] = React.useState([]);
  const [stepsToFinish, setStepsToFinish] = React.useState(5);


  const audioPlay = (audioFile) => {
    const audio = new Audio(
      `https://raw.githubusercontent.com/Nickolay-Dudaryk/rslang-data/master/files/${audioFile}`
    );

    audio.play();
  };


  React.useEffect(() => {
    let timer;
    
    if (timerCounter > 0) {
      timer = setTimeout(() => setTimerCounter(c => c - 1), 1000);
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
      ...getArrOfUserOptions(randomObj.wordTranslate)
    ];
    let shuffledUserAnswersOpt = (shuffleArr(userAnswersOpt));
    setUserAnswerOptions(shuffledUserAnswersOpt);
  }


  const nextLevel = () => {
    if (stepsToFinish > 1 && isGameOn) {
      setTimerCounter(5);
      setStepsToFinish(c => c - 1);

      const randomObj = getRandomItem(book1);
      setCorrectAnswer(randomObj.wordTranslate);
      audioPlay(randomObj.audio);
      let userAnswersOpt = [
        randomObj.wordTranslate,
        ...getArrOfUserOptions(randomObj.wordTranslate)
      ];
      let shuffledUserAnswersOpt = (shuffleArr(userAnswersOpt));
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
  };


  // RENDER SCREENS
  let screen;
  if (isGameOn && stepsToFinish > 0) {
    screen = (
      <>
        <Timer timerCounter={timerCounter} />
        <button onClick={() => nextBtnClickHandler()}>next</button>
        <ChoiceButtons
          userAnswerOptions={userAnswerOptions}
          correctAnswer={correctAnswer}
          userClickHandler={userClickHandler}
        />
      </>
    )
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
    )
  };


  return (
    <>
      {screen}
    </>
  )
};

export default AudioCall;
