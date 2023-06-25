import { useState, useEffect } from "react";
import "./navbar.css";
import Board from "./board";

const Game = () => {
  const signsInitial = ["", "", "", "", "", "", "", "", ""];
  const [signs, setSigns] = useState([]);
  const [currPlayer, setCurrPlayer] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countA, setCountA] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setSigns(signsInitial);
  }, []);

  const checkGameStatus = () => {
    if (
      (signs[0] === signs[4] && signs[4] === signs[8] && signs[0] !== "") ||
      (signs[2] === signs[4] && signs[4] === signs[6] && signs[2] !== "") && !gameOver
    ) {
      signs[4]==='X'?setCountA(countA+1):setCountB(countB+1);
      setGameOver(true);
      return false;
    }
    for (let i = 0; i < 3; i++) {
      if (
        signs[i] === signs[i + 3] &&
        signs[i + 3] === signs[i + 6] &&
        signs[i] !== "" && !gameOver
      ) {
        signs[i]==='X'?setCountA(countA+1):setCountB(countB+1);
        setGameOver(true);
        return false;
      }
    }
    for (let j = 0; j < 7; j += 3) {
      if (
        signs[j] === signs[j + 1] &&
        signs[j + 1] === signs[j + 2] &&
        signs[j] !== "" && !gameOver
      ) {
        signs[j]==='X'?setCountA(countA+1):setCountB(countB+1);
        setGameOver(true);
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
    if (gameOver){
    setSigns(signsInitial);
    setCurrPlayer(0);
    setGameOver(false);}
  };

  return (
    <>
      <div className="score-display">
        <span  className="score-a">Player A: {countA}</span>
        <span  className="score-a">Player {currPlayer === 0 ? "A" : "B"}</span>
        <span className="score-a">Player B: {countB}</span>
      </div>
      <Board signs={signs} handleClick={handleClick} />
      <div className="button-cont">
        <button className="reset-button" onClick={handleReset}>
         {gameOver?'reset':currPlayer==0?'PlayerA':'PlayerB'}
        </button>
      </div>
    </>
  );
};

export default Game;