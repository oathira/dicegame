import { useState } from "react"
import GamePlay from "./components/GamePlay"
import StartGame from "./components/StartGame"



function App() {
  const [isGameStarted,setIsGameSatrted] = useState(false);
  const handleToggle = ()=>{
    setIsGameSatrted(prev=>!prev);
  }

  return (
    <>
    {isGameStarted?<GamePlay/>:<StartGame toggle={handleToggle}/>}
     
      
    </>
  )
}

export default App
