// @core
import React, { Component } from 'react'
import './index.css';

export default class Row extends Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this)
    }

    clicked(column) {
        this.props.addPiece(column)
    }
    
    render() {
        const { row } = this.props;
        return (
            <div className="Grilla-row">
                {row.map((cell, id) => (
                    <Cell 
                        key={id}
                        id={id}
                        value={cell}
                        clicked={this.clicked}
                    />
                ))}
            </div>  
        )
    }
}

const Cell = ({ value, id, clicked }) => {
    let color = 'Grilla-celda'
    if (value === true) {
        color = 'Grilla-celda-red'
    } else if (value === false) {
        color = 'Grilla-celda-blue'
    }

    return (
        <div className={color} onClick={() => clicked(id)}>
            {value}
        </div>

    )
}