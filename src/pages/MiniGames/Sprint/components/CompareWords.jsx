import Btn from './Btn';

const CompareWords = ({ yesClickHandler, noClickHandler, ruWordToCompare, enWordToCompare }) => (
  <>
    <div className="sprint__compare-words">
      <div className="sprint__compare-words__item">{enWordToCompare}</div>
      <div className="sprint__compare-words__item">{ruWordToCompare}</div>
    </div>
    <div className="sprint__buttons">
      <Btn onClick={yesClickHandler} title={'Да'} classList={'game-btn sprint__choice_true'} />
      <Btn onClick={noClickHandler} title={'Нет'} classList={'game-btn sprint__choice_false'} />
    </div>
  </>
)

export default CompareWords;
