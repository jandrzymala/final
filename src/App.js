import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevState => prevState + 1);
    }, 1000)
  }, []);
 
  
  return (
    <div className="App">
      <>
        <h1>Welcome to the QUiZ <span>League</span></h1>
        <h2>Twój czas to {counter}</h2>
      </>
    </div>
  );
}

export default App;
