export function sketch(p)
{
    //start flag for the start button
    let isStart = false;

    //global variables
    let grid;
    let cols;
    let rows;
    let resolution = 20;
    let generation = 0;
    
    //sets the start flag to true
    const startSketch = () => 
    {
        isStart = true;
    }

    //resets the start flag to stop the simulation
    const stopSketch = () => 
    {
        isStart = false;
    }

    //resets the simulation
    const reset = () => 
    {
        isStart = false;
        generation = 0;
        const selp = p.select('p');
        selp.html(`Generation: ${generation}`);
        cols = p.width / resolution;
        rows = p.height / resolution;

        //creates a 2d array and fills it in with random 0's and 1's
        grid = create2dArray(cols, rows);
        for (let i = 0; i < cols; i++) 
        {
            for (let j = 0; j < rows; j++) 
            {
                grid[i][j] = p.floor(p.random(2));
            }
        }
    }

    const create2dArray = (cols, rows) => 
    {
        let arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) 
        {
            arr[i] = new Array(rows);
        }
        return arr;
    }

    p.setup = () => 
    {
        //creates the canvas
        p.createCanvas(600, 600);

        //create dom element buttons
        const startButton = p.createButton('Start');
        const stopButton = p.createButton('Stop');
        const resetButton = p.createButton('Reset');
        const paragraph = p.createP(`Generation: ${generation}`)

        //calls the functions when the button is pressed
        startButton.mousePressed(startSketch);
        stopButton.mousePressed(stopSketch);
        resetButton.mousePressed(reset);
        
        //initatiate the 2d grid using the reset function
        reset();

        //runs the simulation
        runSimulation();
    }

    p.draw = () => 
    {
        //background color to black
        p.background(0);
        const selp = p.select('p');
        
        //draws the grid and fills in the square to white if the value inside is 1
        for (let i = 0; i < cols; i++) 
        {
            for (let j = 0; j < rows; j++) 
            {
                //resolution is how big the square is
                let x = i * resolution;
                let y = j * resolution;

                if (grid[i][j] === 1) 
                {
                    p.fill(255);
                    p.stroke(0);
                    p.rect(x, y, resolution - 1, resolution - 1);
                }
            }
        }

        //if the start button is pressed start the sim
        if (isStart) 
        {
            runSimulation();
            selp.html(`Generation: ${generation}`);
        }
    }

    //counts the neighbors to use the rules
    const countNeighbors = (grid, x, y) => 
    {
        let sum = 0;
        for (let i = -1; i < 2; i++) 
        {
            for (let j = -1; j < 2; j++) 
            {
                //calucate the wrap around for the edges to determine if it's a 0 or 1
                let col = (x + i + cols) % cols;
                let row = (y + j + rows) % rows;
                sum += grid[col][row];
            }
        }

        sum -= grid[x][y];

        return sum;
    }

    const runSimulation = () =>
    {
        for (let i = 0; i < cols; i++) 
        {
            for (let j = 0; j < rows; j++) 
            {
                let x = i * resolution;
                let y = j * resolution;

                if (grid[i][j] === 1) {
                    p.fill(255);
                    p.stroke(0);
                    p.rect(x, y, resolution, resolution);
                }
            }
            
        }

        let next = create2dArray(cols, rows);
        for (let i = 0; i < cols; i++) 
        {
            for (let j = 0; j < rows; j++) 
            {
                let state = grid[i][j];

                let neighbors = countNeighbors(grid, i, j);

                //rules
                if (state === 0 && neighbors === 3) 
                {
                    next[i][j] = 1;
                    generation++;
                }
                else if (state === 1 && (neighbors < 2 || neighbors > 3)) 
                {
                    next[i][j] = 0
                }
                else 
                {
                    next[i][j] = state;
                }
            }
        }
        //swap to the next iteration of the grid
        grid = next;
    }

}