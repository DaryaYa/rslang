import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import './savannah.scss';
import QuestionCard from './QuestionCard';
import { shuffleArray } from './utils';

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
 const [wordsArray, setWordsArray] = useState([]);

 const [loading, setLoading] = useState(false);
 //const [questions, setQuestions] = useState([]);
 const [number, setNumber] = useState(0);
 const [userAnswer, setUserAnswer] = useState([]);
 const [score, setScore] = useState(0);
 const [gameOver, setGameOver] = useState(true);
 

  //  useEffect(()=>{
    const fetchWords = async() => {
      setLoading(true);
      setGameOver(false);
      const endpoint = `https://darya-rslang.herokuapp.com/words?group=${group}&page=10`;
      const data = await (await fetch(endpoint)).json();
    //  const wordArray = data.json();
    //  return wordArray;
    setWordsArray(data);
    setScore(0);
    setNumber(0);
    setLoading(false);
  //  const question = shuffleArray(data)[0].word;
  //  const answers = data.map(el=>el.wordTranslate);
  //  console.log(question, answers)
  // return question, answers;
    }
// fetchWords();
//   },[group])

  const checkAnswer = (e) => {

  }

  const nextQu = () => {

  }

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
          </Dropdown.Menu>
        </Dropdown>
        <h1>Game Savanna</h1>
        {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
          <button onClick={fetchWords}>START</button>
        ) : null }
        
        {!gameOver ? <p className="score">Score : </p> : null}
        {loading ? <p>Loading...</p> : null}
        {/* <QuestionCard 
          questionNr={number +1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
   */}
        <button onClick={fetchWords}>NEXT</button>
      </div>
    );    
}


export default Savannah;

