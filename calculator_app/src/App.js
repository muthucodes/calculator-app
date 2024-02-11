import logo from "./logo.svg";
import "./App.css";
import React, {useState} from 'react';

function App() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);

  const clickHandler = (e) =>{
    // console.log(e.target);
    const value = e.target.value;
    if(value==='C'){
      setInput('');
      setAnswer('');
    }
    else if(value==='='){
      setIsAnswering(true);
      if(input === '0/0'){
        setAnswer('Nan');
      }
      else if(input === '1/0'){
        setAnswer('Infinity');
      }
      else if(input===''){
        setAnswer('Error');
      }
      else{
        console.log('calculating');
        setAnswer((prevInput) => eval(input))
      }
      ;
    }
    else if(value){

      setInput((prevInput) => prevInput+value);
    }


  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input readOnly value={input}></input>
      {isAnswering && <p className="answer">{answer}</p>}
      <div onClick={(e)=>{
        clickHandler(e);
      }}className="container">
        <button  value={7}>7</button>
        <button  value={8}>8</button>
        <button value={9}>9</button>
        <button value={'+'}>+</button>
        <button value={4}>4</button>
        <button value={5}>5</button>
        <button value={6}>6</button>
        <button value={'-'}>-</button>
        <button value={1}>1</button>
        <button value={2}>2</button>
        <button value={3}>3</button>
        <button value={'*'}>*</button>
        <button value={'C'}>C</button>
        <button value={0}>0</button>
        <button value={'='}>=</button>
        <button value={'/'}>/</button>
      </div>
    </div>
  );
}

export default App;
