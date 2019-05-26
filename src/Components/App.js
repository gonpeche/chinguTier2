import React from 'react';
import './index.css';
// @components
import Row from './Row'
// @utlis
import { checkHorizontal, checkVertical, checkDiagonal } from '../Utils/index'
export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Array(6).fill(null).map(a => new Array(7).fill(null)),
      playerOne: true,
      winner: false
    }
    this.addPiece = this.addPiece.bind(this)
  }

  addPiece(columna) {
    const { board, playerOne, winner } = this.state;

    if (winner) return false
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
      playerOne: !player
    })

    if(position !== undefined) {
      this.checkWinner(position[0], position[1], playerOne)
    } 
  }

  checkWinner(x, y, player) {
    const { board } = this.state;
    const vertical = checkVertical(x, y, player, board)
    const horizontal = checkHorizontal(x, player, board)
    const diagonal = checkDiagonal(player, board)

    if (vertical || horizontal || diagonal) {
      this.setState({
        winner: true
      })
    }
  }

  buildHeader() {
    const { playerOne, winner, board } = this.state
    
    let callDraw = checkDraw()
    
    function checkDraw() {
      for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 7; c++) {
          if(board[r][c] === null) return null
        }
      }
      return true
    }

    if (callDraw) {
      return 'Its a draw'
    }
    
    if (winner) {
      if (playerOne) {
        return <header className="App-header-2">Player 2 Wins!</header>
      } else {
        return <header className="App-header-1">Player 1 Wins!</header>
      }
    } 



    return <header className="App-header">Start your game</header>
  }

  resetGame() {
    const board = new Array(6).fill(null).map(a => new Array(7).fill(null))
    this.setState({ board, winner: false })
  }
  
  render() {
    const { board, position } = this.state
    const header = this.buildHeader()

    return (
      <div className="App">
          {header}
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
        <footer className="App-footer" onClick={() => this.resetGame()}>
          Reset Game       
        </footer>
      </div>
    );
  }
}