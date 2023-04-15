import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  const [multiply, setMultiply] = useState(0);

  const handleSum = () => {
    setSum(Number(number1) + Number(number2));
  };

  const handleMultiply = () => {
    setMultiply(Number(number1) * Number(number2));
  };

  return (
    <div>
      <div>
        <label htmlFor="number1">Number 1:</label>
        <input
          type="number"
          id="number1"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number2">Number 2:</label>
        <input
          type="number"
          id="number2"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSum}>Sum</button>
        <button onClick={handleMultiply}>Multiply</button>
      </div>
      <div>
        <p>Sum: {sum}</p>
        <p>Multiply: {multiply}</p>
      </div>
    </div>
  );
}

export default Calculator;