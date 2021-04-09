import "./card.scss";

export const Card = ({ answers, question, callback, move }) => {
  return (
    <div>
       <p>{question}</p>
      <ul className={move ? "sav-game move" : "sav-game"}>
        {answers.map((answer, ind) => (
          <li
            key={ind}
            onClick={(e) => {
              callback(e);
            }}
          >
            {answer}
          </li>
        ))}
      </ul>
     
    </div>
  );
};
