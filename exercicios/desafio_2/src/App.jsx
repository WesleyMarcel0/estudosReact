import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [values, setValues] = useState([]);
  const [result, setResult] = useState(0);

  const handleValueChange = (event) => {
    const newValue = parseInt(event.target.value);
    const operation = event.target.dataset.operation;

    if (operation === "add") {
      setValues([...values, newValue]);
      setResult(result + newValue);
    } else if (operation === "subtract") {
      setValues([...values, newValue]);
      setResult(result - newValue);
    }
  };

  return (
    <div>
      <input type="number" data-operation="add" onChange={handleValueChange} />
      <input type="number" data-operation="subtract" onChange={handleValueChange} />
      <p>Values: {values.join(", ")}</p>
      <p>Result: {result}</p>
    </div>
  );
};

export default App
