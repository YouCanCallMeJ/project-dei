import {useState} from 'react';
import React from 'react'
import NavBarElements from '../components/NavBarElements';
import Calendar from 'react-calendar'

const Holiday = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header>
        <h1>Calendar</h1>
        <NavBarElements></NavBarElements>
      </header>
      <h1 className="header">For you all holiday</h1>
      <div className="calendar-container">
        <Calendar className="calCss" onChange={setDate} value={date} />
      </div>
      <div className="text-center">
        Selected date: {date.toDateString()}
      </div>
    </div>
  )
};

export default Holiday;