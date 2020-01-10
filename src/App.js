import React from 'react';
import GameBoard from './components/GameBoard/GameBoard';

import './App.scss';

function App() {
  return (
    <div className="App">
      <span className='title'>Battle Game</span>
      <GameBoard />
    </div>
  );
}

export default App;
