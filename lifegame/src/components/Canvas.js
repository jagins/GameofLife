import React, {useRef,useEffect} from 'react';

function Canvas()
{
    const canvasRef = useRef(null);

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

                ctx.rect(x,y,20,20);
                ctx.fill();
                ctx.stroke();
            }
        }

        ctx.closePath();
    }

    useEffect(() =>
    {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawGrid(ctx);
    })
    return (
       <canvas
        ref={canvasRef}
        width='600px'
        height='600px'
       />
    );
}

export default Canvas;