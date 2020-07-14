import React from 'react';
import Canvas from './components/Canvas';
import Rules from './components/Rules'
import './App.css';

function App() 
{
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Canvas/>
      <Rules/>
    </div>
  );
}

export default App;
