// App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Check if string ends with an operator
  const isEndsWithOperator = (s) => /[+\-*/]$/.test(s);

  // Append value to input safely
  const handleClick = (value) => {
    if (/[+\-*/]/.test(value)) {
      // Don't allow operator as first character
      if (input === "") return;

      // Don't allow consecutive operators
      if (isEndsWithOperator(input)) return;
    }

    if (value === ".") {
      // Prevent multiple decimals in a number
      const parts = input.split(/[+\-*/]/);
      const lastNumber = parts[parts.length - 1];
      if (lastNumber.includes(".")) return;
    }

    setInput((prev) => prev + value);
  };

  // Clear input and result
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  // Evaluate expression
  const handleCalculate = () => {
    const trimmed = input.trim();

    // Invalid cases
    if (
      trimmed === "" ||
      isEndsWithOperator(trimmed) ||
      /^[+\-*/]/.test(trimmed) || // starts with operator
      /[+\-*/]{2,}/.test(trimmed) // consecutive operators
    ) {
      setResult("Error");
      return;
    }

    try {
      const output = Function(`return ${trimmed}`)();

      // Handle division by zero
      if (isNaN(output)) {
        setResult("NaN"); // 0/0
      } else if (output === Infinity || output === -Infinity) {
        setResult(output); // x/0
      } else {
        setResult(output);
      }
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      {/* Input field */}
      <input type="text" value={input} readOnly />

      {/* Result display */}
      <div className="result">{result}</div>

      {/* Buttons */}
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}

export default App;
