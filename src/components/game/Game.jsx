import { useState } from "react";
import SquareBoard from "../SquareBoard";

export default function Game() {
  //filling null in array index 0 to 8 in another array
  const [squareValue, setSquareValue] = useState([Array(9).fill(null)]);
  // for changing value X to O, O to X;
  const [changingValue, setChangingValue] = useState(true);

  const [currentMove, setCurrentMove] = useState(0);

  // last square move / full array of last move
  const currentSquares = squareValue[currentMove];
  //adding new square array to squareValue Array and changing value of X/O
  function handleGame(nextSquareValue) {
    setChangingValue(!changingValue);
    const history = [...squareValue.slice(0, currentMove + 1), nextSquareValue];
    setSquareValue(history);
    setCurrentMove(history.length - 1);
  }
  // for jumping to move
  function jumpTo(move) {
    setCurrentMove(move);
    setChangingValue(move % 2 === 0);
  }

  //showing game all moves
  const moves = squareValue.map((squares, move) => {
    let description = move > 0 ? `Go to the move → ${move}` : `Start the game`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <SquareBoard
          changingValue={changingValue}
          squareValue={currentSquares}
          onPlay={handleGame}
        />
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
