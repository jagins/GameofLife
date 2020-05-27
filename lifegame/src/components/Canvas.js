import React, {useRef,useEffect, useState} from 'react';

function Canvas()
{
    const canvasRef = useRef(null);
    const [generation, setGeneration] = useState(0);

    const drawGrid = (ctx) =>
    {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';

        for(let row = 0; row < 25; row++)
        {
            for(let column = 0; column < 25; column++)
            {
                const x = column * 20;
                const y = row * 20;

                ctx.rect(x, y, 20, 20);
                ctx.fill();
                ctx.stroke();
            }
        }

        ctx.closePath();
    }

    const fillBox = (ctx, event) =>
    {
        ctx.fillStyle = 'black';
        ctx.fillRect(Math.floor(event.nativeEvent.offsetX / 20) * 20, 
        Math.floor(event.nativeEvent.offsetY / 20) * 20,
        20, 20);
    }

    useEffect(() =>
    {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawGrid(ctx);
    })
    return (
        <div className='canvasDiv'>
            <h3>Generation: {generation}</h3>
            <canvas
                ref={canvasRef}
                width='500px'
                height='500px'
                onClick={(event) => {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    fillBox(ctx, event);
                }}
            />
            <div className='button-container'>
                <button>Start</button>
                <button>Stop</button>
                <button onClick={() => {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    drawGrid(ctx);
                }}>Reset</button>
            </div>
        </div>
    );
}

export default Canvas;