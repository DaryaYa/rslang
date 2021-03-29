import { FaBreadSlice } from "react-icons/fa";

interface Props {
  timestamp: number,
  newWords: number,
}

export const MiniStatsItem = ({ timestamp, newWords }: Props) => {
  const day = new Date(timestamp).toString().slice(0, 24);
  return (
    <li className="d-flex justify-content-around miniStats-elem">
      <span>{day} -</span>
      <span>- {newWords}</span>
    </li>
  );
};