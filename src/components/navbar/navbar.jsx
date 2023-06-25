import { useState, useEffect } from "react";
import "./navbar.css";
import Board from "./board";

const Game = () => {
  const signsInitial = ["", "", "", "", "", "", "", "", ""];
  const [signs, setSigns] = useState([]);
  const [currPlayer, setCurrPlayer] = useState(0);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    setSigns(signsInitial);
  }, []);

  const checkGameStatus = () => {
    if (
      (signs[0] === signs[4] && signs[4] === signs[8] && signs[0] !== "") ||
      (signs[2] === signs[4] && signs[4] === signs[6] && signs[2] !== "")
    ) {
      signs[4]==='X'?setWinner('A'):setWinner('B');
      return false;
    }
    for (let i = 0; i < 3; i++) {
      if (
        signs[i] === signs[i + 3] &&
        signs[i + 3] === signs[i + 6] &&
        signs[i] !== ""
      ) {
        signs[i]==='X'?setWinner('A'):setWinner('B');
        return false;
      }
    }
    for (let j = 0; j < 7; j += 3) {
      if (
        signs[j] === signs[j + 1] &&
        signs[j + 1] === signs[j + 2] &&
        signs[j] !== ""
      ) {
        signs[j]==='X'?setWinner('A'):setWinner('B');
        return false;
      }
    }
    return true;
  };

  const handleClick = (e) => {

    const id = parseInt(e.target.id);
    if (signs[id] !== "") {
      return;
    }
    const newSigns = [...signs];
    if (currPlayer === 0) {
      newSigns[id] = "O";
      setCurrPlayer(1);
      setSigns(newSigns);
      checkGameStatus()
    } else {
      newSigns[id] = "X";
      setCurrPlayer(0);
      setSigns(newSigns);
      checkGameStatus()
    }
    
  };

  const handleReset = () => {
    setSigns(signsInitial);
    setCurrPlayer(0);
    setWinner('');
  };

  return (
    <>
      <div className="score-display">
        <span id={winner} style={{'backgroundColor':`${winner=='A'?'green':'none'}`}} className="score-a">Player A</span>
        <span  className="score-a">Player {currPlayer === 0 ? "A" : "B"}</span>
        <span id = {winner} style={{'backgroundColor':`${winner=='B'?'green':'none'}`}} className="score-a">Player B:</span>
      </div>
      <Board signs={signs} handleClick={handleClick} />
      <div className="button-cont">
        <button className="reset-button" onClick={handleReset}>
          reset
        </button>
      </div>
    </>
  );
};

export default Game;