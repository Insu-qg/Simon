import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const colors = ['red', 'blue', 'green', 'yellow']

function App() {
  const [sequence, setSequences] = useState(["red", "blue", "red"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayerTurn, setIsplayerTurn] = useState(false);
  
  useEffect(() => {
    if (sequence.length > 0 && !isPlayerTurn) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000);
    }
    if( currentIndex >= sequence.length && !isPlayerTurn) {
      setIsplayerTurn(true)
      setCurrentIndex(0)
      console.log("PLAYER TURN")
    }
  }, [currentIndex]);

  const handleColorClick = useCallback((color: string) => {
    if (isPlayerTurn && !(currentIndex >= sequence.length)) {
        if(sequence[currentIndex] == color) {
          console.log("COULEUR CORRECT : " + color);
          setCurrentIndex(currentIndex + 1)
        }else{
          console.log("MAUVAISE COULEUR: " + color);
          setIsplayerTurn(false)
        }
      }
    }, [currentIndex])

  return (
      <div className='button-container'>
          {colors.map((color) => (
            <button
              className="color-button"
              key={color}
              style={{ backgroundColor: (!isPlayerTurn && sequence[currentIndex] === color) ? "purple" : color}}
              onClick={()=>handleColorClick(color)}
            />
          ))}
      </div>
      
  )
}

export default App
