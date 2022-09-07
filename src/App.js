import './App.css';
import React, { useState } from 'react'
import ColorInput from "./components/ColorInput/ColorInput"
import ColorsShow from './components/ColorsShow/ColorsShow';
import { ColorsContext } from './contexts/ColorsContext'

function App() {
  const [showColor, setShowColor] = useState(false);
  const [color, setColor] = useState("")
  const [currentColor, setCurrentColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white")

  return (
    <div className="App">
      <ColorsContext.Provider value={{ color, setColor, setShowColor, showColor, currentColor, setCurrentColor, backgroundColor, setBackgroundColor}}>
        <ColorInput/>
        <ColorsShow/>
      </ColorsContext.Provider>
    </div>
  );
}

export default App;
