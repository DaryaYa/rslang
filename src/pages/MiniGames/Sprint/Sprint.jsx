import React from 'react';
import './Sprint.scss';
// COMPONENTS
import Timer from './components/Timer';
import StartScreen from './components/StartScreen';
import FinishScreen from './components/FinishScreen';
import CompareWords from './components/CompareWords';
// HARDCODE DB
import book1 from './hardcodeDb';


const Sprint = () => {
  const [timerCounter, setTimerCounter] = React.useState(20);
  const [enWordToCompare, setEnWordToCompare] = React.useState('');
  const [ruWordToCompare, setRuWordToCompare] = React.useState('');
  const [enWordTranslate, setEnWordTranslate] = React.useState('');
  const [isGameOn, setIsGameOn] = React.useState(false);
  const [userCorrectAnswers, setUserCorrectAnswers] = React.useState([]);
  const [userWrongAnswers, setUserWrongAnswers] = React.useState([]);
  const [userScore, setUserScore] = React.useState(0);

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


  React.useEffect(() => {
    const obj1 = book1[randomIndex(book1)];
    const obj2 = book1[randomIndex(book1)];

    const enWordTranslate = obj1.wordTranslate;
    const enWord = obj1.word;
    const ruWord = obj2.wordTranslate;

    const arr = [ruWord, enWordTranslate];
    
    setRuWordToCompare(() => arr[randomIndex(arr)]);
    setEnWordToCompare(() => enWord);
    setEnWordTranslate(() => enWordTranslate);
  }, []);

  const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

  const nextLevel = () => {
    if (timerCounter > 0) {
      const obj1 = book1[randomIndex(book1)];
      const obj2 = book1[randomIndex(book1)];
  
      const enWordTranslate = obj1.wordTranslate;
      const enWord = obj1.word;
      const ruWord = obj2.wordTranslate;
  
      const arr = [ruWord, enWordTranslate];
      setRuWordToCompare(() => arr[randomIndex(arr)]);
      setEnWordToCompare(() => enWord);
      setEnWordTranslate(() => enWordTranslate);
    }
  };


  const startGame = () => {
    setIsGameOn(true);
    setTimerCounter(20);
    setUserScore(0);
    setUserCorrectAnswers([]);
    setUserWrongAnswers([]);
  };


  const yesClickHandler = () => {
    if (ruWordToCompare === enWordTranslate) {
      setUserScore(s => s + 1);
      setUserCorrectAnswers([...userCorrectAnswers, enWordToCompare]);
    } else {
      setUserWrongAnswers([...userWrongAnswers, enWordToCompare]);
    }
    
    nextLevel();
  };


  const noClickHandler = () => {
    if (ruWordToCompare !== enWordTranslate) {
      setUserScore(s => s + 1);
      setUserCorrectAnswers([...userCorrectAnswers, enWordToCompare]);
    } else {
      setUserWrongAnswers([...userWrongAnswers, enWordToCompare]);
    }

    nextLevel();
  };


  // RENDER SCREENS
  let screen;
  if (isGameOn && timerCounter > 0) {
    screen = (
      <>
        <div className="sprint__block-top">
          <div className="sprint__score">Очки: {userScore}</div>
          <Timer timerCounter={timerCounter} />
        </div>
        <CompareWords
          ruWordToCompare={ruWordToCompare}
          enWordToCompare={enWordToCompare}
          yesClickHandler={yesClickHandler}
          noClickHandler={noClickHandler}
        />
      </>
    )
  } else if (!isGameOn) {
    screen = <StartScreen startGame={startGame} />;
  } else if (timerCounter === 0) {
    screen = (
      <FinishScreen
        startGame={startGame}
        userCorrectAnswers={userCorrectAnswers}
        userWrongAnswers={userWrongAnswers}
        userScore={userScore}
      />
    )
  };
  

  return (
    <section className="section-game">
      <div className="game-container">
        <h1 className="game-title">Sprint</h1>
        <div className="game-wrapper">
          {screen}
        </div>
      </div>
    </section>
  );
}

export default Sprint;
