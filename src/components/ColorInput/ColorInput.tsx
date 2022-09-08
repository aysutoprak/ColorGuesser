import React, { useState, useContext } from 'react'
import { styled } from '@stitches/react';
import './ColorInput.css';
import { ColorsContext } from '../../contexts/ColorsContext';

const Button = styled('button', {
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  backgroundColor: 'lightskyblue',
  '&:hover': {
    backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
  }
});

const ColorInput = () => {

  const colorContext = useContext(ColorsContext)

  const setShowColorFunc  = () => {
    colorContext!.color ? colorContext!.setShowColor(true) : colorContext!.setShowColor(false)
  }

  const checkIfInputEmpty = () => {
    if(colorContext!.color)
      colorContext!.setCurrentColor(colorContext!.color)
    else
      colorContext!.setCurrentColor("")
  }

  const OnClickFunctions = () => {
    setShowColorFunc();
    checkIfInputEmpty();
  }

  return (
    <div style={
      colorContext!.currentColor === "red" ?
        {"backgroundColor": "#ff3419"} :
        colorContext!.currentColor === "blue" ?
        {"backgroundColor": "#2187fc"} :
        colorContext!.currentColor === "green" ?
        {"backgroundColor": "#40f746"} :
        colorContext!.currentColor === "yellow" ?
        {"backgroundColor": "#ffe44d"} :
        colorContext!.currentColor === "grey" ?
        {"backgroundColor": "#bdbdbd"} :
        colorContext!.currentColor === "brown" ?
        {"backgroundColor": "#5c330c"} :
        colorContext!.currentColor === "purple" ?
        {"backgroundColor": "#854ecf"} :
        colorContext!.currentColor === "pink" ?
        {"backgroundColor": "#f57af3"} :
        colorContext!.currentColor === "orange" ?
        {"backgroundColor": "#ed9342"} :
        colorContext!.currentColor === "rainbow" ?
        {"background": "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)"} :
        {"backgroundColor": "white"}
      }
      className="color-screen">
      <div className="color-box">
        <input
        type="text"
        placeholder="Enter a color"
        onChange={(event) =>{
          colorContext!.setColor(event.target.value);
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