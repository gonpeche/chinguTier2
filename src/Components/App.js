import React from 'react';
import './index.css';
import Grilla from './Grilla'

export default class Main extends React.Component {
  state = {
    board: new Array(6).fill(null).map(a => new Array(6).fill(1))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Chingu Tier 2 Challenge - Connect 4
        </header>
        <content className="App-content">
          <Grilla 
            board={this.state.board}
          />
        </content>
        <footer className="App-footer">
         Reset Game
        </footer>
      </div>
    );
  }
}