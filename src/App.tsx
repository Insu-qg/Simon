import { useEffect, useState } from 'react'
import './App.css'

const colors = ['red', 'blue', 'green', 'yellow']

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

function App() {
  const [sequence, setSequence] = useState(["red", "blue", "red"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayerTurn, setIsplayerTurn] = useState(false);
  
  useEffect(() => {
    if(!isPlayerTurn){
      if (currentIndex < sequence.length) {
        setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
        }, 1000);
      }
      else {
        setIsplayerTurn(true)
        setCurrentIndex(0)
        console.log("PLAYER TURN")
      }
    }
  }, [currentIndex, sequence, isPlayerTurn]);

  console.log('state', {currentIndex, sequence, isPlayerTurn});

  const handleColorClick = (color: string) => {
    if (isPlayerTurn) {
      if(sequence[currentIndex] == color) {
        console.log("COULEUR CORRECT : " + color);
        if(currentIndex < sequence.length - 1){
          setCurrentIndex(currentIndex + 1)
        }
        else {
          setCurrentIndex(0)
          setSequence([...sequence, getRandomColor()])
          setIsplayerTurn(false)
        }
      }else{
        console.log("MAUVAISE COULEUR: " + color);
        setIsplayerTurn(false)
        setSequence(["red", "blue", "red"])
        alert("GAME OVER !");
      }
    }
  }




  return (
    <>
          <p>SIIIMOOOON</p>
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
      
    </>

  )
}

export default App
