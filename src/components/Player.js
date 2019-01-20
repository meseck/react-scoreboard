/* eslint-disable react/prop-types */

import React, { PureComponent } from 'react';
import Counter from './Counter';

export default class Player extends PureComponent {
  render() {
    const { index, id, name, score, changeScore, removePlayer } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>
        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}
