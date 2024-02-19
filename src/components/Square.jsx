/* eslint-disable react/prop-types */

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-400 h-14 w-14 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
