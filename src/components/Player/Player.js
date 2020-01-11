// @flow
import React from 'react';
import HealthBar from '../HealthBar/HealthBar';
import monsterName from '../../common/assets/monsterName';

import './Player.scss';

type args = {
  playerType:String,
  hp:Number,
  diceOne:Number,
  diceTwo:Number,
}

let randomId = Math.floor(Math.random() * 10) + 1;

const Player = (args) => (
  <div className='playerContainer'>
    <span className='playerType'>{
      args.playerType === 'Player' ?
        args.playerType :
        monsterName.map(name => {
          if(randomId === name.id) {
            return name.name
          }
        })
    }
    </span>
    <div className='playerHP'>
      <HealthBar hpValue={args.hp} />
    </div>
    <div className='playerDice'>
      <span>First Dice: {args.diceOne}</span>
      <span>Second Dice: {args.diceTwo}</span>
    </div>
  </div>
)

export default Player;