/* eslint-disable react/prop-types */
import React from 'react';
import Stats from './Stats';
import StopWatch  from './StopWatch';

const Header = props => {
  return (
    <header>
      <Stats players={props.players}/>
      <h1>{props.title}</h1>
      <StopWatch/>
    </header>
  );
};

export default Header;
