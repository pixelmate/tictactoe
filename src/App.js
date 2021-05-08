import './App.css';
import React from 'react';
import Board from './components/Board';
function App() {
  return (
    <div className='App'>
      <div className='game'>
        <h1>Tic Tac Toe</h1>
        <Board />
        <div className='Reset_button'>
          <button className='btn btn-primary'>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
