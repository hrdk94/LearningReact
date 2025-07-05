import { useState } from "react";

function LudoB(){
    let[moves, setMoves] = useState({blue: 0, red:0, yellow: 0, green:0})
    function inc(color) {
    setMoves(prevMoves => ({
      ...prevMoves,
      [color]: prevMoves[color] + 1
    }));
  }

    return(
        
        <div className="Board">
      <p>Game Begins!</p>

      <p>Blue : {moves.blue}</p>
      <button style={{ backgroundColor: "blue", color: "white" }} onClick={() => inc("blue")}>+1</button>

      <p>Red : {moves.red}</p>
      <button style={{ backgroundColor: "red", color: "white" }} onClick={() => inc("red")}>+1</button>

      <p>Yellow : {moves.yellow}</p>
      <button style={{ backgroundColor: "yellow", color:"black" }} onClick={() => inc("yellow")}>+1</button>

      <p>Green : {moves.green}</p>
      <button style={{ backgroundColor: "green", color: "white" }} onClick={() => inc("green")}>+1</button>
    </div>
    )
}

export default LudoB;