/* eslint-disable react/prop-types */
import Square from "./Square";
import { calculateWinner } from "./CalculateWinner";

export default function SquareBoard({ changingValue, squareValue, onPlay }) {
  //collecting game result
  const winner = calculateWinner(squareValue);

  let status = winner
    ? `Winner : ${winner}`
    : `Next Player : ${changingValue ? "X" : "O"}`;

  //Changing square value
  function handleSquareValue(i) {
    // returning 0 if square has value inside
    // returning winner/true or null
    if (squareValue[i] || calculateWinner(squareValue)) {
      return 0;
    }
    // i value coming from function handleSquareValue
    const nextSquareValue = squareValue.slice();
    // by slice method collecting all array value of squareValue in nextSquareValue. index 0 to 8
    nextSquareValue[i] = changingValue ? "X" : "O";
    0;
    //sending last square/ full array of last square
    onPlay(nextSquareValue);
  }
  // console.log(squareValue);

  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Square
          value={squareValue[0]}
          onSquareClick={() => handleSquareValue(0)}
        />
        <Square
          value={squareValue[1]}
          onSquareClick={() => handleSquareValue(1)}
        />
        <Square
          value={squareValue[2]}
          onSquareClick={() => handleSquareValue(2)}
        />
      </div>
      <div className="flex">
        <Square
          value={squareValue[3]}
          onSquareClick={() => handleSquareValue(3)}
        />
        <Square
          value={squareValue[4]}
          onSquareClick={() => handleSquareValue(4)}
        />
        <Square
          value={squareValue[5]}
          onSquareClick={() => handleSquareValue(5)}
        />
      </div>
      <div className="flex">
        <Square
          value={squareValue[6]}
          onSquareClick={() => handleSquareValue(6)}
        />
        <Square
          value={squareValue[7]}
          onSquareClick={() => handleSquareValue(7)}
        />
        <Square
          value={squareValue[8]}
          onSquareClick={() => handleSquareValue(8)}
        />
      </div>
    </>
  );
}
