import React from 'react';
import Canvas from './components/Canvas';
import Button from './components/Button';
import Rules from './components/Rules'
import './App.css';

function App() 
{
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <h3>Generation: #</h3>
      <Canvas/>
      <Button text='Play'/>
      <Button text='Pause'/>
      <Button text='Stop'/>
      <Rules/>
    </div>
  );
}

export default App;
