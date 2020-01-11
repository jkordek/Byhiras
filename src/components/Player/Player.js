// @flow
import React from 'react';
import HealthBar from '../HealthBar/HealthBar';

import './Player.scss';

type args = {
  playerType:String,
  hp:Number,
  diceOne:Number,
  diceTwo:Number,
}

const Player = (args) => (
    <div className='playerContainer'>
      <span className='playerType'>{args.playerType}</span>
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