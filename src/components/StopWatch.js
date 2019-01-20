import React, { Component } from 'react';

export default class StopWatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  };

  handleStopWatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState({
        previousTime: Date.now(),
      });
    }
  };

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  };

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime),
      }));
    }
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  componentWillMount() {
    clearInterval(this.intervalID);
  }

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>StopWatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopWatch}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
