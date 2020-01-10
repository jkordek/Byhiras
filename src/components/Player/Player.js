// @flow
import React from 'react';
import HealthBar from '../HealthBar/HealthBar';

import './Player.scss';

const Player = ({playerType}: String) => (
    <div className='playerContainer'>
      <span className='playerType'>{playerType}</span>
      <div className='playerHP'>
        <HealthBar hpValue={100} />
      </div>
      <div className='playerDice'>
        <span>First Number: </span>
        <span>Second Number: </span>
      </div>
    </div>
)

export default Player;