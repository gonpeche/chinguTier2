// @core
import React, { Component } from 'react'
import './index.css';

export default class Row extends Component {
    state = {
        position: ''
    }

    clicked(column) {
        const position = this.props.addPiece(column)
        this.setState({ position })
    }
    
    render() {
        const { row, board } = this.props;
        const { position } = this.state
        let cellColor = "Grilla-celda"
            // let x = position[0];
            // let y = position[1];
        if (board && position) {
            // console.log(board[x][y])

            // if (board[x][y] === true) {
            //     cellColor += '-red'

            // } else if (board[x][y] === false) {
            //     cellColor += '-blue'
                
            // } else {
            //     cellColor = "Grilla-celda"
            // }
        }


        return (
            <div className="Grilla-row">
                {row.map((cell, id) => (
                    <div
                        className={cellColor}
                        onClick={() => this.clicked(id)}
                        key={id}>
                        {cell}
                    </div>
                ))}
            </div>  
        )
    }
}