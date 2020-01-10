import React from 'react';
import Player from '../Player/Player';
import { Button } from '@material-ui/core';

import './GameBoard.scss';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='gameBoardContainer'>
        <Player playerType='Player'/>
        <div className='board'>
          <Button variant='contained' color='secondary'>
            Play!
          </Button>
        </div>
        <Player playerType='Monster'/>
      </div>
    )
  }
}

export default GameBoard;