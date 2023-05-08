import React, { useState } from 'react'

const Colors = () => {
  const colors = ['red', 'green', 'blue', 'yellow']
  const [color, setColor] = useState(colors[0])
  return (
    <>
      <div style={{backgroundColor: color }}>
      
        {
          colors.map((color) => (
            <button key={color} onClick={() => setColor(color)}>{color}</button>
          ))
        }
      </div>
    </>
  )
}

export default Colors;