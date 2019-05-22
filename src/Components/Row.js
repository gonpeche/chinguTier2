// @core
import React from 'react';
import './index.css';

const Row = ({ row }) => (
    <div>
        {row.map(cell => (
            <div className="Grilla-celda">{cell}</div>
        ))}
    </div>  
);

export default Row;