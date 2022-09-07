import React, { useState, useContext } from 'react'
import { styled } from '@stitches/react';
import './ColorInput.css';
import { ColorsContext } from '../../contexts/ColorsContext';

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  backgroundColor: 'lightskyblue',
  '&:hover': {
    backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
  }
});

const ColorInput = () => {

  const { currentColor, color, setCurrentColor, setShowColor, setColor } = useContext(ColorsContext)

  const setShowColorFunc  = () => {
    color ? setShowColor(true) : setShowColor(false)
  }

  const checkIfInputEmpty = () => {
    if(color)
      setCurrentColor(color)
    else
      setCurrentColor("")
  }

  const OnClickFunctions = () => {
    setShowColorFunc();
    checkIfInputEmpty();
  }

  return (
    <div style={
        currentColor === "red" ?
        {"background-color": "#ff3419"} :
        currentColor === "blue" ?
        {"background-color": "#2187fc"} :
        currentColor === "green" ?
        {"backgroundColor": "#40f746"} :
        currentColor === "yellow" ?
        {"backgroundColor": "#ffe44d"} :
        currentColor === "grey" ?
        {"backgroundColor": "#bdbdbd"} :
        currentColor === "brown" ?
        {"backgroundColor": "#5c330c"} :
        currentColor === "purple" ?
        {"backgroundColor": "#854ecf"} :
        currentColor === "pink" ?
        {"backgroundColor": "#f57af3"} :
        currentColor === "orange" ?
        {"backgroundColor": "#ed9342"} :
        currentColor === "rainbow" ?
        {"background": "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)"} :
        {"background-color": "white"}
      }
      className="color-screen">
      <div className="color-box">
        <input
        type="text"
        placeholder="Enter a color"
        onChange={(event) =>{
          setColor(event.target.value);
        }}
        />
      <Button onClick={() => {
        OnClickFunctions()
      }}>
        Guess the color
      </Button>
      </div>
    </div>
  )
}

export default ColorInput