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
    
    
    const handleReset = () =>{
      setScore(0);
    }
  return (
   <MainContainer>
    <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector/>
    </div>
    <RoleDice/>
    <div className="btns">
        <OutlineButton onClick={handleReset}>Reset score</OutlineButton>
        <Button onClick={()=>setShow((prev)=>!prev)}>{show?'Hide':'Show '} Rules</Button>
        {show&&<Rules/>}
    </div>

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
