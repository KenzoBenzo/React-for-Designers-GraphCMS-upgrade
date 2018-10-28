import React from 'react'
import cell from './cell.css'

const Cell = props => {
    return (
        <div className='CellGroup'>
            <img src={props.image} className='CellImage'/>
            <h2 className='CellTitle'>{props.title}</h2>
        </div>
    );
};

export default Cell