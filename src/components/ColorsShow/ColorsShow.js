import React, { useState, useContext } from 'react'
import '../ColorInput/ColorInput.css';
import { ColorsContext } from '../../contexts/ColorsContext';


const ColorsShow = () => {
  const { currentColor, showColor } = useContext(ColorsContext)
  return (
    <div className="text-div">
      <div className="texts">
        {showColor && <h3 className="color-style">The color you picked was: <span             className="color-text"> {currentColor}</span></h3>}
      </div>
    </div>
  )
}

export default ColorsShow