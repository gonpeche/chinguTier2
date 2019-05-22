import React, { Component } from 'react'

export default class Grilla extends Component {
    state = {
        board: new Array(6).fill(null).map(a => new Array(6).fill(null))
    }
    render() {
        console.log(this.state.board)
        return (
            <div>
                
            </div>
        )
    }
}
