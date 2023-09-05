const container = document.querySelector('.container');

createGrid(16);

const gridButton = document.querySelector('button');
gridButton.addEventListener('click', () => {
    let gridNumber = prompt('Type in a number for squares per side for a new grid', '');
    removeGrid();
    createGrid(gridNumber);
});

function createGrid(gridNumber) {
    while(gridNumber > 100 || gridNumber < 1) {
        if(gridNumber == null) {
            return;
        }
        gridNumber = prompt('Please type in a number greater than 1 and less than 100', '');
    }

    /* create a gridNumber X gridNumber grid of square divs */
    for(let i = 0; i < gridNumber; i++) {
        for(let j = 0; j < gridNumber; j++) {
            const square = document.createElement('div');
            square.classList.add(`square`);
            square.setAttribute('id',`square${i}${j}`);
            square.style.width = `${1/gridNumber * 100}%`;
            container.appendChild(square);
        }
    }

    colorSquare(gridNumber);
}

function removeGrid() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function colorSquare(gridNumber) {
    for(let i = 0; i < gridNumber; i++) {
        for(let j = 0; j < gridNumber; j++) {
            const gridSquare = document.getElementById(`square${i}${j}`);
            let counter = 0;
            gridSquare.addEventListener('mouseover', () => {
                if(counter < 10) {
                    counter++;
                    increaseOpacity(gridSquare, counter);
                }
            })
        }
    }
}

function increaseOpacity(gridSquare, counter) {
    gridSquare.style.backgroundColor = `rgb(43,84,126, ${0.10 * counter})`; /*bluejay color*/
}