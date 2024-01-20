// src/DateDisplay.tsx

import React from 'react';

interface DateDisplayProps {
  dates: string[]; // Define the type of the 'dates' prop
}

const DateDisplay: React.FC<DateDisplayProps> = ({ dates }) => {
  const today = new Date();
  let displayDate = dates[dates.length - 1]; // Default to the last date

  for (let i = 0; i < dates.length; i++) {
    const targetDate = new Date(dates[i].split('/').reverse().join('-'));
    if (today < targetDate) {
      displayDate = dates[i];
      break;
    }
  }

  return (
    <div>
      {displayDate}
    </div>
  );
};

export default DateDisplay;
