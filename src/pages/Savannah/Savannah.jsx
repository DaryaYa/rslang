import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import "./savannah.scss";
//import QuestionCard from './QuestionCard';
import { Card } from "./Card";
import { shuffleArray, getRandomInt } from "./utils";
import good from "./assets/good.mp3";
import bad from "./assets/bad.mp3";
import rez from "./assets/rez.mp3";

// type Question = {
//   word: string;
//   wordTranslate: string;
//    question: string;
//   // type: string;
// }

// type QuestionState = Question & { answers: string[]}

const TOTAL_QUESTIONS = 4;

const Savannah = () => {
  const [group, setGroupe] = useState(1);
  const [wordsArray, setWordsArray] = useState([]); //wrong words
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(10);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [data, setData] = useState([]);
  const [shots, setShots] = useState(10);

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  //  useEffect(()=>{
  const fetchWords = async () => {
    setLoading(true);
    setGameOver(false);
    const page = getRandomInt(30);
    const endpoint = `https://darya-rslang.herokuapp.com/words?group=${group}&page=${page}`;
    const data = await (await fetch(endpoint)).json();
    //  const wordArray = data.json();
    //  return wordArray;
    //setWordsArray(data);
    //   setScore(0);
    setData(data);
    setNumber(0);
    setLoading(false);
    const newArr = shuffleArray(data);
    setQuestion(newArr[0].word);
    setCorrectAnswer(newArr[0].wordTranslate);
    const ansArr1 = [
      ...data.map((el) => el.wordTranslate).splice(1, 4),
      newArr[0].wordTranslate,
    ];
    const ansArr = shuffleArray(ansArr1);
    console.log(ansArr1);

    setAnswers(ansArr);

    // console.log(question, answers)
    // return question, answers;
  };
  // fetchWords();
  //   },[group])
  console.log(answers);

  useEffect(()=>{

       const time = setInterval(() => {
      setTimer(timer -1);
      console.log(timer)
    }, 1000);

      return () => {
        clearTimeout(time);
      };

  }, [timer])

  const checkAnswer = (e) => {
    console.log(e.target.innerText, correctAnswer);
    if (!gameOver && timer > 0) {
      
         if (e.target.innerText == correctAnswer ) {
        setScore(score + 1);
        const audio = new Audio(good);
        audio.play();
        nextQu();
      } else {
        setWordsArray((prev) => [...prev, e.target.innerText]);
        const audio = new Audio(bad);
        audio.play();
        nextQu()
      }
  
      } else {
      
         console.log("TIME") 
     
        
      }
     
    
  };

  const nextQu = () => {
     setShots((prev) => prev - 1);
     setTimer(10)
    if (shots === 1) {
      setGameOver(true);
    } else {
      const newArr = shuffleArray(data);
      setQuestion(newArr[0].word);
      setCorrectAnswer(newArr[0].wordTranslate);
      const ansArr1 = [
        ...data.map((el) => el.wordTranslate).splice(1, 4),
        newArr[0].wordTranslate,
      ];
      const ansArr = shuffleArray(ansArr1);
      console.log(ansArr1);
      setAnswers(ansArr);
    }
  };

  console.log(wordsArray);

  return (
    <div className="savannah">
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Choose difficulty level
        </Dropdown.Toggle>
        <div>Level {group}</div>
        <Dropdown.Menu>
          <Dropdown.Item onClick={(e) => setGroupe(1)}>1</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setGroupe(2)}>2</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setGroupe(3)}>3</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setGroupe(4)}>4</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setGroupe(5)}>5</Dropdown.Item>
          {/* <Dropdown.Item onClick={(e) => setGroupe(6)}>6</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
      <h1>Game Savanna</h1>
      {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
        <button onClick={fetchWords}>START</button>
      ) : null}

      {!gameOver ? <p className="score">Score : {score}</p> : null}
      <div>Shots: {shots}</div>
      {loading && <p>Loading...</p>}
      {!loading && !gameOver && (
        //    <QuestionCard
        //   questionNr={number +1}
        //   totalQuestions={TOTAL_QUESTIONS}
        //   question={questions[number].question}
        //   answers={questions[number].answers}
        //   userAnswer={userAnswer ? userAnswer[number] : undefined}
        //   callback={checkAnswer}
        // />
        // <div>
        //    <div className="question">{question}</div>
        // <ul className="answers">
        //   {
        //     answers.map((el,ind)=>{
        //       return(
        //        <li key={ind}>{el}</li>
        //       )

        //     })
        //   }
        // </ul>
        // </div>
        <Card
          answers={answers}
          question={question}
          correctAnswer={correctAnswer}
          callback={checkAnswer}
        />
      )}
      <div>{timer}</div>
      {/* <button onClick={fetchWords}>NEXT</button> */}
    </div>
  );
};

export default Savannah;
