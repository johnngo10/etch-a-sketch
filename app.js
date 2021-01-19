const display = document.getElementById('display');
const submit = document.getElementById('submit');

function createGrids() {
  const square = document.createElement('div');
  square.classList.add('squares');
  display.appendChild(square);
}

function loadDefault() {
  let numOfSq = 16 * 16;

  for (let i = 0; i < numOfSq; i++) {
    createGrids();
  }
}

loadDefault();

submit.addEventListener('click', e => {
  e.preventDefault();
  let num = document.getElementById('numInput').value;
  let calc = num * num;

  display.innerHTML = '';
  display.style.gridTemplateColumns = `repeat(${num}, 2fr)`;
  display.style.gridTemplateRows = `repeat(${num}, 2fr)`;

  for (let i = 0; i < calc; i++) {
    createGrids();
  }
});
