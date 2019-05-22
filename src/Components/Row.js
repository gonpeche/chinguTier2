// @core
import React from 'react';
import './index.css';

const Row = ({ row }) => (
    <div className="Grilla-row">
        {row.map((cell, i) => (
            <div className="Grilla-celda" key={i}>{cell}</div>
        ))}
    </div>  
);

export default Row;