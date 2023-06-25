import { useState, useEffect } from "react";
import "./navbar.css";
import Board from "./board";

const Game = () => {
  const signsInitial = ["", "", "", "", "", "", "", "", ""];
  const [signs, setSigns] = useState(signsInitial);
  const [currPlayer, setCurrPlayer] = useState(0);

  useEffect(() => {
    setSigns(signsInitial);
  }, []);

  const checkGameStatus = () => {
    if (
      (signs[0] === signs[4] && signs[4] === signs[8] && signs[0] !== "") ||
      (signs[2] === signs[4] && signs[4] === signs[6] && signs[2] !== "")
    ) {
      return false;
    }
    for (let i = 0; i < 3; i++) {
      if (
        signs[i] === signs[i + 3] &&
        signs[i + 3] === signs[i + 6] &&
        signs[i] !== ""
      ) {
        return false;
      }
    }
    for (let j = 0; j < 7; j += 3) {
      if (
        signs[j] === signs[j + 1] &&
        signs[j + 1] === signs[j + 2] &&
        signs[j] !== ""
      ) {
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
    } else {
      newSigns[id] = "X";
      setCurrPlayer(0);
    }
    setSigns(newSigns);
    //const gameStatus = checkGameStatus();
    //if (!gameStatus) {
      //alert("Game Over!");
    //}
  };

  const handleReset = () => {
    setSigns(signsInitial);
    setCurrPlayer(0);
  };

  return (
    <>
      <div className="score-display">
        <span className="score-a">Score A</span>
        <span className="score-a">Player {currPlayer === 0 ? "A" : "B"}</span>
        <span className="score-a">Score B:</span>
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