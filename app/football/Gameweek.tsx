// src/App.js

import React from 'react';
import DateDisplay from './DateDisplay';

function Gameweek() {
  const dates = [
    "30/01/2024", "03/02/2024", "10/02/2024", "17/02/2024", "23/02/2024",
    "02/03/2024", "09/03/2024", "16/03/2024", "30/03/2024", "02/04/2024",
    "06/04/2024", "13/04/2024", "20/04/2024", "27/04/2024", "04/05/2024",
    "11/05/2024", "19/05/2024"
  ];

  return (
    <div className="App">
      <header className="App-header">
        <DateDisplay dates={dates} />
      </header>
    </div>
  );
}

export default Gameweek;
