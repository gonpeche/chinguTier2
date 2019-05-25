import React from 'react';
import './index.css';
// @components
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
        boardUpdated[fila][columna] = playerOne;
        position = [fila, columna]
        break;
      }
    }

    this.setState({
      board: boardUpdated,
      playerOne: !player,
    })


    if(position !== undefined) {
      this.checkWinner(position[0], position[1])
    } 
  }

  checkWinner(x, y) {
    this.checkHorizontal(x, y)
  }

  checkHorizontal(x, y) {
    const { board } = this.state
    console.log('position:',x, '-',y)
    console.log(board)
    for (var i = 0; i < 6; i++) {
      if (board[x-i][y] === undefined) break;
      if (board[x-i][y] === null) break;
      console.log(board[x-i][y])
    }
  }
  
  render() {
    const { board, position } = this.state
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
                      position={position ? position : null}
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