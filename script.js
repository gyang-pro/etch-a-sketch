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

    for(let i = 1; i <= gridNumber; i++) {
        for(let j = 1; j <= gridNumber; j++) {
            const square = document.createElement('div');
            square.classList.add(`square`);
            square.style.width = `${1/gridNumber * 100}%`;
            container.appendChild(square);
        }
    }

    draw();
}

function removeGrid() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function draw() {
    const hover = document.querySelectorAll('.square');
    hover.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = 'blue';
        });
    });
}
