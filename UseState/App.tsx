import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Component } from 'react'; we have to extend Component to do a component with class in React 

// now here is the way to do a useState with hooks

function App() {

  const [reverse, setReverse] = useState(false);
  const handleClick = ():void => {
    setReverse((reverse) => !reverse);
  }
  
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className={reverse ? "reverse" : "App-logo"} alt="logo" />
        <button onClick={handleClick} type='button'>{reverse ? "Normal" : "Reverse"}</button>
      </header>
    </div>
  );
}

// Here is a example of 'useState' with class

// class App extends Component {
//   constructor(props: any){
//     super(props);
//     this.state = {
//       reverse: false,
//     }
//   }
//   render(){

//     const { reverse }:any = this.state;
//     return (
//           <div className="App">
//             <header className="App-header">
//               <img src={logo} className={reverse ? "reverse" : "App-logo"} alt="logo" />
//              <button onClick={():void => this.setState({reverse:!reverse})} type="button">{!reverse?"Reverse" : "Normal"}</button>
//             </header>
//           </div>
//         );
//   }
// }

export default App;
