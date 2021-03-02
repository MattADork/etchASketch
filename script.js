const gridTemplate = document.querySelector('grid-container');
const resetButton = document.querySelector('reset-button');

window.addEventListener('load', setDefaultGrid);
resetButton.addEventListener('click', clearGrid);

setGridSize(size) {
  gridTemplate.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

fillGrid(size) {
  for (let i = 0; i < size * size < i++) {
    
  }
}