const display = document.getElementById('display');
const submit = document.getElementById('submit');
const inputContainer = document.getElementById('input-container');

// Create Grid
function createGrids() {
  const square = document.createElement('div');
  square.classList.add('squares');
  square.addEventListener('mouseover', e => {
    square.style.backgroundColor = 'black';
  });
  display.appendChild(square);
}

// Load default 16 x 16 grid
function loadDefault() {
  let numOfSq = 16 * 16;

  for (let i = 0; i < numOfSq; i++) {
    createGrids();
  }
}

loadDefault();

// Check for valid number
function numValidation() {}

// Display new grid based on user's input
submit.addEventListener('click', e => {
  e.preventDefault();
  let num = document.getElementById('numInput').value;
  let calc = num * num;

  let regex = /^\d+$/;

  if (num.match(regex) && num <= 64) {
    display.innerHTML = '';
    display.style.gridTemplateColumns = `repeat(${num}, 2fr)`;
    display.style.gridTemplateRows = `repeat(${num}, 2fr)`;
    const error = document.getElementById('error');

    // Remove any existing error messages
    if (error) {
      error.remove();
    }

    for (let i = 0; i < calc; i++) {
      createGrids();
    }
  } else {
    const errorEle = document.createElement('p');
    errorEle.textContent = '* Must be a number between 1-64';
    errorEle.setAttribute('id', 'error');
    const error = document.getElementById('error');

    // Create error message if one hasn't existed
    if (!error) {
      inputContainer.appendChild(errorEle);
    }
  }
});
