export const Card = ({ answers, question, callback }) => {
    
    return (
      <div>
        <p>{question}</p>
        <ul>
          {answers.map((answer, ind) => (
            
              <li key={ind} onClick={(e)=>callback(e)}>
                {answer}
              </li>
            
          ))}
        </ul>
      </div>
    ); 
}