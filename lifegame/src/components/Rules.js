import React from 'react';

function Rules()
{
    return (
        <ul>
            <li>Any live cell with fewer than 2 live neighbors die, as if by underpopulation</li>
            <li>Any live cell with 2 or 3 live neighbors lives onto the next generation</li>
            <li>any live cell with 3+ live neighbors die, as if by overpopulation</li>
            <li>Any dead cell with exactly 3 live neighbors become a live cell, as if by reproduction</li>
        </ul>
    );
}

export default Rules;