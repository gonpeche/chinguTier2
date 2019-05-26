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
      this.checkWinner(position[0], position[1], playerOne)
    } 
  }

  checkWinner(x, y, player) {
    const vertical = this.checkVertical(x, y, player)
    const horizontal = this.checkHorizontal(x, y, player)

    if (vertical || horizontal) {
      console.log('WINER')
    }
  }

  checkVertical(x, y, player) {
    const { board } = this.state;
    if (x <= 2 && x >= 0) {
      let count = 0;
      for (var i = 0; i < 4; i++) {
        if (board[x+i][y] !== player) break;
        if (board[x+i][y] === player) count++;
        if (count === 4) return true
      }
    }
    return false
  }

  checkHorizontal(x, y, player) {
    const { board } = this.state;
    
    function checkRight() {
      let count = 0;
      for (var i = 1; i < 4; i++) {
        if (board[y+i] === undefined || board[x][y+i] !== player) break; 
        if (board[x][y+i] === player) count++;
        if (count === 3) return true
      }
      return false
    }

    function checkLeft() {
      let count = 0;
      for (var i = 1; i < 4; i++) {
        if (board[y-i] === undefined || board[x][y-i] !== player) break; 
        if (board[x][y-i] === player) count++;
        if (count === 3) return true
      }
      return false
    }

    if (checkRight() || checkLeft()) return true
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