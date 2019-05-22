// @core
import React from 'react';
import './index.css';

// @components
import Row from './Row'

const Grilla = ({ board }) => (
    <div className="Grilla">
        {board ? board.map(row => (
            <Row 
                row={row}
            />
        )) : null}
    </div>
);

export default Grilla;