import React, { useState } from 'react'

const SQUARES = 500

const Square = () => {
  const [active, setActive] = useState(false)

  const colors = ['#3498db', '#e67e22', '#2ecc71', '#e74c3c', '#8e44ad']

  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  const squareStyle = active
    ? {
        background: randomColor,
        boxShadow: `0 0 2px ${randomColor}, 0 0 10px ${randomColor}
    }`,
      }
    : { background: '#1d1d1d', boxShadow: '0 0 2px #000' }

  return (
    <div
      className='square'
      style={squareStyle}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    ></div>
  )
}

const Hoverboard = () => {
  const squares = []

  for (let i = 0; i < SQUARES; i++) {
    squares.push(<Square key={i} />)
  }

  return (
    <div className='container' id='container'>
      {squares}
    </div>
  )
}

export default Hoverboard
