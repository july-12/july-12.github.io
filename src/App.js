import React, { Component } from 'react';
import './App.css';
import AvatarGame from './avatarGame.js';
import TimeLine from './timeLine.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AvatarGame />
        <TimeLine />
      </div>
    );
  }
}

export default App;
