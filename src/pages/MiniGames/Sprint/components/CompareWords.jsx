import Btn from './Btn';

const CompareWords = ({ yesClickHandler, noClickHandler, ruWordToCompare, enWordToCompare }) => (
  <div>
    <div>{enWordToCompare}</div>
    <div>{ruWordToCompare}</div>
    <Btn onClick={yesClickHandler} title={'Да'} />
    <Btn onClick={noClickHandler} title={'Нет'} />
  </div>
)


export default CompareWords;
