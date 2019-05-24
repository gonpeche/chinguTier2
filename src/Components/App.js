import React from 'react';
import './index.css';
// @components
// import Grilla from './Grilla'
import Row from './Row'


export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Array(6).fill(null).map(a => new Array(7).fill(null)),
      playerOne: true
    }
    this.addPiece = this.addPiece.bind(this)
  }

  addPiece(columna) {
    const { board, playerOne } = this.state;
    const boardUpdated = board.slice();
    const player = playerOne
    let position;

    for (let fila = 5; fila >= 0; fila--) {
      if (boardUpdated[fila][columna] === null) {
        position = [fila, columna]
        
        boardUpdated[fila][columna] = playerOne;

        break;
      }
    }

    this.setState({
      board: boardUpdated,
      playerOne: !player
    })
    console.log(board)
    return position
  }

  position(fila,columa) {

  }
    
  
  render() {
    const { board } = this.state

    return (
      <div className="App">
        <header className="App-header">
         Chingu Tier 2 Challenge - Connect 4
        </header>
        <content className="App-content">
          <div className="Grilla">
              {board ? board.map((row,i) => (
                  <Row 
                      addPiece={this.addPiece}
                      board={board ? board : null}
                      row={row}
                      key={i}
                  />
              )) : null}
          </div>
        </content>
        <footer className="App-footer">
         Reset Game
        </footer>
      </div>
    );
  }
}