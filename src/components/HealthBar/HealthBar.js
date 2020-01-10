// @flow
import React from 'react';
import { LinearProgress } from '@material-ui/core';

import './HealthBar.scss';

const HealthBar = ({hpValue}: number) => (
  <div className='hpBarContainer'>
    <span className='barLabel'>{`HP:` + hpValue}</span>
    <LinearProgress variant='determinate' color='secondary' value={hpValue} />
  </div>
);

export default HealthBar;