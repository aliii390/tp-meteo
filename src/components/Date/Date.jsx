import React from 'react'
import './Date.css'

function Date({onDateSelect}) {
  const handleDateClick = (day) => {
    onDateSelect(day)
  }
  return (
 <>
 

      <div className="date-buttons">
      <button className="date-button" onClick={() => handleDateClick(0)}>Aujourd'hui</button>
      <button className="date-button" onClick={() => handleDateClick(1)}>Mardi</button>
      <button className="date-button" onClick={() => handleDateClick(2)}>Mercredi</button>
      <button className="date-button" onClick={() => handleDateClick(3)}>Jeudi</button>
      <button className="date-button" onClick={() => handleDateClick(4)}>Vendredi</button>
    </div>

 
 
  </>
  )
}

export default Date