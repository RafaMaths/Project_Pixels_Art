const palleteBox = document.getElementById('color-palette');
const square = [1, 2, 3, 4];
const containerSquare = document.getElementById('pixel-board');

function createDivs() {
  for (let index = 0; index < square.length; index += 1) {
    const squareBox = document.createElement('div');
    squareBox.className = 'color';
    palleteBox.appendChild(squareBox);
  }
  return palleteBox;
}
createDivs();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'yellow';
document.getElementsByClassName('color')[3].style.backgroundColor = 'green';
document.getElementsByClassName('color')[0].className += ' selected';

function createBox() {
  for (let i = 0; i < 25; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'pixel';
    containerSquare.appendChild(createDiv);
  }
  return containerSquare;
}
createBox();
