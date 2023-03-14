import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log("o h1 foi clicado")
}

function App() {

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = ():void => {
    setCounter((counter) => counter + 1);
  }

  const handleClick2 = ():void => {
    setCounter2((counter) => counter + 2);
  }

  // componentDidUpdate - everytime
  useEffect(()=>console.log("updated"));

  // comonentDidMount  - just once
  useEffect(() => console.log("Once") ,[]);
  useEffect(()=>{
    document.querySelector('h1')?.addEventListener('click', eventFn);

    return ():void => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    }
  }, [])

    // with dependency  - just when the component counter change, and if i use the 
    // variable in the function i have to put the dependency, mandatory
    useEffect(() => console.log("When the component counter change", counter) ,[counter, counter2])


  return(
  <div>
    <h1>Counter1: {counter}, Counter2:{counter2}</h1>
    <button onClick={handleClick}>+</button>
    <button onClick={handleClick2}>+2</button>
  </div>)
}

export default App;
