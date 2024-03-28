import React, { useState } from 'react';

const dates = Array(7 * 6) // Calendar with 6 weeks
  .fill(0)
  .map((n, i) => i + 1);

const colors = {
  available: 'white',
  reserved: 'lightgray',
  unavailable: 'lightblue',
};

function Calendar() {
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(1); // February is 1
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date

  const handlePrevMonth = () => {
    setMonth(month === 0 ? 11 : month - 1);
  };

  const handleNextMonth = () => {
    setMonth(month === 11 ? 0 : month + 1);
  };

  // Function to split array into chunks (handles missing chunk method)
  const chunk = (arr, size = 7) => {
    const chunks = [];
    while (arr.length > 0) {
      chunks.push(arr.slice(0, size));
      arr = arr.slice(size);
    }
    return chunks;
  };

  const getDayClass = (date) => {
    // Replace with your logic to check available, reserved, or unavailable
    const isReserved = date % 3 === 0;
    return selectedDate === date
      ? 'lightgreen' // Highlight selected date
      : isReserved
      ? colors.reserved
      : colors.available;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const renderWeeks = (weeks) => {
    return chunk(weeks).map((week, i) => (
      <tr key={i}>
        {week.map((day) => (
          <td
            key={day}
            className={getDayClass(day)}
            style={{ backgroundColor: getDayClass(day), width: '68px' }} // Adjust width
            onClick={() => handleDateClick(day)}
          >
            {day}
          </td>
        ))}
      </tr>
    ));
  };

  const firstDay = new Date(year, month, 1).getDay();

  return (
    <div className="calendar"> {/* Set width and height */}
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Prev</button>
        <div>{`${new Date(year, month, 1).toLocaleDateString('en-US', {
          month: 'long', 
          year: 'numeric',
        })}`}</div>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th> 
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{renderWeeks(dates.slice(firstDay))}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
