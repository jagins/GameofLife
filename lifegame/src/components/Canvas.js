import React, {useState} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/sketch';

function Canvas()
{
    const [generation, setGeneration] = useState(0);
    return (
        <div className='canvasDiv'>
            <h3>Generation: {generation}</h3>
            <P5Wrapper sketch={sketch}/>
        </div>
    );
}

export default Canvas;