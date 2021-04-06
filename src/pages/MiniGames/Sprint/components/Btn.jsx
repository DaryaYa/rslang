const Btn = ({ title, onClick, classList }) => (
  <button onClick={() => onClick()} className={classList}>{title}</button>
);

export default Btn;
