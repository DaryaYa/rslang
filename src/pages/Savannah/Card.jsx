import "./card.scss";

export const Card = ({ answers, question, callback, move }) => {
  return (
    <div>
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
      <p>{question}</p>
    </div>
  );
};
