import React from 'react';
import './index.css';
import Grilla from './Grilla'

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        Chingu Tier 2 Challenge - Connect 4
      </header>
      <content className="App-content">
        <Grilla />
      </content>
      <footer className="App-footer">
        Reset Game
      </footer>
    </div>
  );
}

export default Main;