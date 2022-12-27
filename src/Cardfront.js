
import React from 'react'

export default function Cardfront({name, number,month,year}) {


  
  return (
    <div>
       
       <div className="card-front">
        <div className="card-shape">
          <span className="big-circle"></span>
          <span className="small-circle"></span>
        </div>
        <h1 className="card-number-display">{number}</h1>
        <div className="name-date">
          <h3 className="holders-name-display" >{name}</h3>
          <div className="card-date">
          <h3 > {month}</h3>
          <h3>/</h3>
          <h3 > {year}</h3>
          </div>


          
        </div>
      </div>

    </div>
  )
}
