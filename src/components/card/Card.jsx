import React from 'react'
import './Card.css'

function Card({char}) {
  return (
    <div className='card'>
      <img src={char.image} alt={char.image}/>
      <p>{char.name}</p>
    </div>
  )
}

export default Card