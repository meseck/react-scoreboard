/* eslint-disable react/prop-types */
import React from 'react';
import Stats from './Stats';
import StopWatch  from './StopWatch';

const Header = ({ players, title })  => {
  return (
    <header>
      <Stats players={players}/>
      <h1>{title}</h1>
      <StopWatch/>
    </header>
  );
};

export default Header;
