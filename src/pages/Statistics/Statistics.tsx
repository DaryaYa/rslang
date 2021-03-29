import React, { useState, useEffect } from 'react';
import './Statistics.scss';

import { Line } from 'react-chartjs-3';
import ProgressBar from "react-bootstrap/ProgressBar";
import { ProgressLabel } from '../../components/ProgressLabel/ProgressLabel';
import { BtnsBar } from '../../components/BtnsBar/BtnsBar';
import { MiniStats } from '../../components/MiniStats/MiniStats';


const wordsNow = 50; // Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
const totalWords = 300; //4000

// const progressInstance = <ProgressBar now={wordsNow*100/totalWords}
//               label={`${(wordsNow*100/totalWords).toFixed(1)}%`} />
export const Statistics = () => {

  const [dataChart, setDataChart] = useState({});
  const [gameName, setGameName] = useState('');
  const items = [
    { _id: 1, apiName: "audioCall" },
    { _id: 2, apiName: "sprintGame" },
    { _id: 3, apiName: "statsSavanna" },

    { _id: 4, apiName: "speakIt" },

  ];

  const stats = {
    audioCall: [{
      timestamp: 1617035518016, newWords: 5
    }],
    sprintGame: [{
      timestamp: 1617037518016, newWords: 3
    },
    {
      timestamp: 1234345144444, newWords: 10
    },
    {
      timestamp: 1617051730146, newWords: 8
    }],
  }

  useEffect(() => {
    setDataChart({
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // props.dataLabels,
      datasets: [{
        label: 'Общий прогресс',
        borderColor: "rgba(0,0,0,1)",
        backgroundColor: "lightblue",
        borderWidth: 2,
        data: [2, 7, 8, 14, 17, 24, 34, 37, 41, 50], //...props.totalNewWords
      },
      {
        label: "Изучено за день",
        borderColor: "darkblue",
        backgroundColor: "darkblue",
        data: [2, 5, 1, 6, 3, 7, 10, 3, 4, 9], //...props.dailyNew,
        fill: false,
      },
      ]
    });
  }, []);

  const showStats = (id: number): string => {
    setGameName(items[id - 1].apiName); //alexger
    return gameName;
  };
  return (
    <React.Fragment>
      <div className="graph longStatsElem col-md-9">
        <Line
          data={dataChart}
          options={{
            title: {
              display: true,
              text: "Все слова",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "bottom",
            },
            tooltips: {
              mode: "index",
              intersect: true,
            },
            maintainAspectRatio: false,
          }}
        />

        <ProgressBar
          variant="info"
          now={wordsNow * 100 / totalWords}
          label={`${(wordsNow * 100 / totalWords).toFixed(1)}%`}
        />
        <ProgressLabel />
      </div>
      <div className="gameBtns">
        <div><p>Статистика по мини-играм</p></div>
        <BtnsBar items={items} showStats={showStats} />
        <div className="longStatsElem-field">
          <MiniStats
            stats={stats}
            miniGame={gameName}
          />
        </div>
      </div>
    </React.Fragment>
  )
}


