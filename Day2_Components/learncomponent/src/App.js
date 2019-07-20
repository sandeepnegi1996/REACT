import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetComp from './components/Greet';
function App() {
  return (
    <div className="App">
      <GreetComp name="sandeep"></GreetComp>
    </div>
  );
}

export default App;
