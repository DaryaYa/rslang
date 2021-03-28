import React, { useState, useEffect } from 'react';
import './Statistics.scss';

import { Line } from 'react-chartjs-3';
import ProgressBar from "react-bootstrap/ProgressBar";
import { ProgressLabel } from '../../components/ProgressLabel/ProgressLabel';


 const wordsNow = 50; // Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
  const totalWords = 300; //4000

// const progressInstance = <ProgressBar now={wordsNow*100/totalWords}
//               label={`${(wordsNow*100/totalWords).toFixed(1)}%`} />
export const Statistics = () => {

 

   const [dataChart, setDataChart] = useState ({}); 

   useEffect(()=> {
     setDataChart({ 
        labels: [1,2,3,4,5,6,7,8,9,10], // props.dataLabels,
        datasets: [{ 
           label: 'Общий прогресс',
          borderColor: "rgba(0,0,0,1)",
          backgroundColor: "cyan",
          borderWidth: 2,
          data: [2,7,8,14,17,24,34,37,41,50], //...props.totalNewWords
        },
      { 
          label: "Изучено за день",
          borderColor: "darkblue",
          backgroundColor: "darkblue",
          data: [2,5,1,6,3,7,10,3,4,9], //...props.dailyNew,
          fill: false,
        },
      ]
      });
   },[])

  return (
    <React.Fragment>
      <div className="graph longStatsElem col-md-9">
      <Line
            data={ dataChart }
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
              variant="success"
              now={wordsNow*100/totalWords}
              label={`${(wordsNow*100/totalWords).toFixed(1)}%`}
            />
            <ProgressLabel />
      </div>
    </React.Fragment>
  )
}


