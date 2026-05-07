import { useState } from 'react'
import './App.css'

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  const handleToggle = (e) => {
    setIsOn(!isOn);
    setClickCount(clickCount + 1);
  };

  const jsxElements = <>
    <button className={isOn ? 'light-on' : ''} onClick={handleToggle}>
      Toggle Light
    </button>
    <p>The light is currently <strong>{isOn ? 'ON' : 'OFF'}</strong></p>
    <p>Clicks: {clickCount}</p>
  </>;

  console.log(jsxElements);
  
  return (
    jsxElements
  );
}

export default function App() {
  return (
    <main>
      <h1>Light Switch</h1>
      <LightSwitch />
    </main>
  );
}