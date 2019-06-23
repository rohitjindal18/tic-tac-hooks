import React, { useState } from 'react';
import './index.css';

function Square(props) {
    return(
        <button
            className='square'
            data-index={props.index}
        >
            {props.number}
        </button>
    );
}

export default function Board() {

    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const  [ lastChance, setLastChance ] = useState('X');

    function renderSquare(i) {
        return <Square index={i} number={squares[i]}/>
    }

    function onBoardClick(event) {
        const number = event.target.dataset.index;
        const nextSquares = Object.assign([], squares);
        nextSquares[+number] = lastChance;
        setSquares(nextSquares);
        const newChance = lastChance === 'X' ? '0' : 'X';
        setLastChance(newChance);
    }

    return(
        <div className='outerBoard' onClick={onBoardClick}>
            <div className='row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}