const container = document.querySelector('.container');

for(let i = 1; i <= 256; i++) {
    const square = document.createElement('div');
    square.classList.add(`square`);
    square.textContent = i;
    container.appendChild(square);
}

const hover = document.querySelectorAll('.square');
hover.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'blue';
    });
});