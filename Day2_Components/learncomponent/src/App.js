import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Greet name="sandeep"></Greet>

      <Welcome myprops="SandeepClassComp"  name="Ranaji"></Welcome>
    </div>
  );
}

export default App;
