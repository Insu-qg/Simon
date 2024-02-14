import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const colors = ['red', 'blue', 'green', 'yellow']

function App() {
  const [sequence, setSequences] = useState(["red", "blue", "red"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState([]);
  const [isPlayerTurn, setIsplayerTurn] = useState(false);
  
  // useEffect(() => {
  //   if (sequence.length > 0 && isPlayerTurn) {
  //     setTimeout(() => {
  //       setCurrentIndex();
  //     }, 1000);
  //   }
  // }, [sequence, isPlayerTurn]);

  // const playSequence = () => {
  //   let i = 0;
  //   const interval = setInterval(() => {
  //     highlightColor(sequence[i]);
  //     i++;
  //     if (i >= sequence.length) {
  //       clearInterval(interval);
  //       setIsplayerTurn(false);
  //     }
  //   }, 1000);
  // };

  // const highlightColor = (color: string) => {
  //   console.log(`Highlight: ${color}`);
  // };


  return (
      <div className='button-container'>
          {colors.map((color) => (
            <button
              className="color-button"
              key={color}
              style={{ backgroundColor: (!isPlayerTurn && sequence[currentIndex] === color) ? "purple" : color}}
            />
          ))}
      </div>
      
  )
}

export default App
