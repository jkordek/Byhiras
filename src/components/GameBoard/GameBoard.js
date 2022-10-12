import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import { Button } from '@material-ui/core';

import './GameBoard.scss';

const GameBoardNew = () => {
  const [playerHP, setPlayerHP] = useState(100)
  const [monsterHP, setMonsterHP] = useState(100)
  const [playerDices, setPlayerDices] = useState([0, 0])
  const [monsterDices, setMonsterDices] = useState([0, 0])

  useEffect(() => {
    (playerHP > 0 && monsterHP <= 0) ?
      console.log('Player won! :)')
    :
      console.log('Player loose! :(')
  }, [])

  rollDices = () => {
    let randomNumbers = [0, 0, 0, 0];
    randomNumbers.map((number, index) => {
      randomNumbers[index] = Math.floor(Math.random() * 6) + 1;
    })
    if ((randomNumbers[0] + randomNumbers[1]) > (randomNumbers[2], randomNumbers[3])) {
      this.setState(state => ({
        monsterHP: this.state.monsterHP - ((randomNumbers[0] + randomNumbers[1]) - (randomNumbers[2] + randomNumbers[3])),
        playersNumber: [randomNumbers[0], randomNumbers[1]],
        monstersNumber: [randomNumbers[2], randomNumbers[3]],
      }))
    } else {
      this.setState(state => ({
        monsterHP: this.state.monsterHP - ((randomNumbers[2] + randomNumbers[3]) - (randomNumbers[0] + randomNumbers[1])),
        playersNumber: [randomNumbers[0], randomNumbers[1]],
        monstersNumber: [randomNumbers[2], randomNumbers[3]],
      }))
    }
  }

  startEndGame = (pHP, mHP) => {
    if (pHP > 0 && mHP > 0) {
      return <Button 
            className='playBtn' 
            onClick={this.rollDices}
            size='large'
            variant='contained' 
          >
            Play
          </Button>
    } else if (pHP <= 0) {
      return (
        <div className='endContainer loss'>
          <h2>Game over :(</h2> 
          <Button d
            className='playBtn' 
            onClick={() => this.setState(state => ({
              playerHP: 100,
              monsterHP: 100,
              playersNumber: [0, 0],
              monstersNumber: [0, 0],
            }))}
            size='large'
            variant='contained' 
          >
            Restart
          </Button>
        </div>
      );
    } else if (mHP <= 0) {
      return (
        <div className='endContainer win'>
          <h2>You win!</h2> 
          <Button d
            className='playBtn' 
            onClick={() => this.setState(state => ({
              playerHP: 100,
              monsterHP: 100,
              playersNumber: [0, 0],
              monstersNumber: [0, 0],
            }))}
            size='large'
            variant='contained' 

          >
            Restart
          </Button>
        </div>
      );
    }
  } 

  return (
    <div className='gameBoardContainer'>
      <Player 
        playerType='Player' 
        hp={this.state.playerHP} 
        diceOne={this.state.playersNumber[0]}
        diceTwo={this.state.playersNumber[1]}
      />
      <div className='board'>
        {this.startEndGame(this.state.playerHP, this.state.monsterHP)}
      </div>
      <Player 
        playerType='Monster'
        hp={this.state.monsterHP}
        diceOne={this.state.monstersNumber[0]}
        diceTwo={this.state.monstersNumber[1]}  
      />
    </div>
  )
}

export default GameBoardNew;