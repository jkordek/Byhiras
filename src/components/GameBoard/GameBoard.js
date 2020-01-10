import React from 'react';
import Player from '../Player/Player';
import { Button, Modal } from '@material-ui/core';

import './GameBoard.scss';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerHP: 100,
      monsterHP: 100,
      playersNumber: [0, 0],
      monstersNumber: [0, 0],
    }

  }

  componentDidMount() {
    if (this.state.playerHP> 0 && this.state.monsterHP <= 0) {
      console.log('Player won! :)')
    } else if (this.state.playerHP <= 0 && this.state.monsterHP > 0) {
      console.log('Player loose! :(')
    }
  }

  rollDices = () => {
    let playerDiceOne = Math.floor(Math.random() * 6) + 1;
    let playerDiceTwo = Math.floor(Math.random() * 6) + 1;
    let monsterDiceOne = Math.floor(Math.random() * 6) + 1;
    let monsterDiceTwo = Math.floor(Math.random() * 6) + 1;
    let playerHP = this.state.playerHP;
    let monsterHP = this.state.monsterHP;
    if ((playerDiceOne + playerDiceTwo) > (monsterDiceOne + monsterDiceTwo)) {
      this.setState(state => ({
        monsterHP: monsterHP - ((playerDiceOne + playerDiceTwo) - (monsterDiceOne + monsterDiceTwo)),
        playersNumber: [playerDiceOne, playerDiceTwo],
        monstersNumber: [monsterDiceOne, monsterDiceTwo],
      }))
    } else {
      this.setState(state => ({
        playerHP: playerHP - ((monsterDiceOne + monsterDiceTwo) - (playerDiceOne + playerDiceTwo)),
        playersNumber: [playerDiceOne, playerDiceTwo],
        monstersNumber: [monsterDiceOne, monsterDiceTwo],
      }))
    }
  }

  render() {
    // var modal;
    // if (this.state.playerHP >= 0) {
    //   modal = <Modal aria-labelledby='You win' open={true}>You win!</Modal>
    // } else if (this.state.monsterHP >= 0) {
    //   modal = <Modal aria-labelledby='Game over' open={true}>Game over.</Modal>
    // }

    return (
      <div className='gameBoardContainer'>
        <Player 
          playerType='Player' 
          hp={this.state.playerHP} 
          diceOne={this.state.playersNumber[0]}
          diceTwo={this.state.playersNumber[1]}
        />
        <div className='board'>
          <Button 
            className='playBtn' 
            onClick={this.rollDices}
            size='large'
            variant='contained' 

          >
            Play
          </Button>
        </div>
        <Player 
          playerType='Monster'
          hp={this.state.monsterHP}
          diceOne={this.state.monstersNumber[0]}
          diceTwo={this.state.monstersNumber[1]}  
        />
        {/* <div className='modal'>
          {modal}
        </div> */}
      </div>
    )
  }
}

export default GameBoard;