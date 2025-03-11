import React from 'react';

function Statistic({ courseResults }) {
  const scores = courseResults.map(result => result.score);
  const average = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="statistics">
      <p>Average Score: {average}</p>
      <p>Min Score: {min}</p>
      <p>Max Score: {max}</p>
    </div>
  );
}

export default Statistic;