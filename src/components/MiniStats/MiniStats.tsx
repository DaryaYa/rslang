import { MiniStatsItem } from '../MiniStatsItem/MiniStatsItem';

interface StatsInterface {
  audioCall: {
    timestamp: number,
    newWords: number,
  }[];
  sprintGame: {
    timestamp: number,
    newWords: number,
  }[];
}

interface Props {
  stats: StatsInterface
  miniGame: string,
};

// interface Props2 {
//     stats: {
//         [key: string]: {
//             timestamp: number;
//             newWords: number;
//         }[]
//     }
// }

const MiniStats = ({ stats, miniGame }: Props) => {
  let elems = [];
  if (!stats[miniGame as keyof StatsInterface]) return <p className="d-flex justify-content-around miniStats-elem">Данных пока нет</p>

  for (let timestamp in stats[miniGame as keyof StatsInterface]) {
    if (timestamp !== "0") {

      elems.push(
        <MiniStatsItem
          key={elems.length}
          timestamp={stats[miniGame as keyof StatsInterface][timestamp].timestamp}
          newWords={stats[miniGame as keyof StatsInterface][timestamp].newWords}
        />
      );
    }
  }
  return <ul>{elems}</ul>;
};

export default MiniStats;