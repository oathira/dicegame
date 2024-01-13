import styled from "styled-components";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { useState } from "react";
import Rules from "./Rules";
import { Button,OutlineButton } from "../styled/Button";

const GamePlay = () => {
    const [show,setShow] = useState(false);
    const [score,setScore] = useState(0);
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] =useState('');
    
    const generateRandomNumber = (min, max) =>{
      return Math.floor(Math.random() * (max - min) + min)
    }
    const roleDice = () =>{
      if(!selectedNumber){
          setError('Please select a number');
          return;
      }
      const randomNumber = generateRandomNumber(1,7);
      setCurrentDice((prev)=>randomNumber);
      if(selectedNumber === randomNumber){
        setScore((prev)=>prev+randomNumber);
      }
      else{
        setScore((prev)=>prev-2);
      }
      setSelectedNumber();
    }
    
    
    const handleReset = () =>{
      setScore(0);
    }
  return (
   <MainContainer>
    <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}/>
    </div>
    <RoleDice roleDice={roleDice} currentDice={currentDice}/>
    <div className="btns">
        <OutlineButton onClick={handleReset}>Reset score</OutlineButton>
        <Button onClick={()=>setShow((prev)=>!prev)}>{show?'Hide':'Show '} Rules</Button>
     
    </div>
    {show&&<Rules/>}
   </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
