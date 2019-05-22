// @core
import React, { Component } from 'react'
import './index.css';

export default class Row extends Component {
    ficha(columna) {
        console.log(columna)
    }
    render() {
        const { row, addPiece } = this.props
        return (
            <div className="Grilla-row">
                {row.map((cell, id) => (
                    <div className="Grilla-celda"
                        onClick={() => addPiece(id)}
                        key={id}>
                        {cell}
                    </div>
                ))}
            </div>  
        )
    }
}