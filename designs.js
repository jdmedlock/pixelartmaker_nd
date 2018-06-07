// Define global variables. In a "real" production quality application we
// would encapsulate functionality for components of the app into classes
// and expose variables to other parts of the app via methods
let currentColor = null;

// Define references to the DOM elements
const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

/**
 * @description Update the current grid cell color from user interaction with
 * the color picker.
 * @param {Object} event Event descriptor
 */
function colorChanged(event) {
  currentColor = event.target.value;
  colorPicker.value = currentColor;
}

// Create an event listener to process a request to change the grid cell color
colorPicker.addEventListener('click', function () {
  console.log('The color picker was clicked!');
  colorPicker.addEventListener("change", colorChanged, false);
});

// Create an event listener to process a request to present a new grid
sizePicker.addEventListener('submit', function (event) {
  event.preventDefault();
  makeGrid(
    document.forms['sizePicker'].elements['inputHeight'].value,
    document.forms['sizePicker'].elements['inputWidth'].value
  );
});

/**
 * @description When size is submitted by the user draw the new grid
 * @param {Number} rowCount Number of rows in the grid
 * @param {Number} columnCount Number of columns in the grid 
 */
function makeGrid(rowCount, columnCount) {
  console.log(`makeGrid was called with rowCount: ${rowCount} columnCount: ${columnCount}`);
  let gridHTML = '';
  for (let row = 0; row < rowCount; row++) {
    gridHTML += '<tr>';
    for (let column = 0; column < columnCount; column++) {
      gridHTML += '<td>';
    }
  }
  pixelCanvas.innerHTML = gridHTML;
}
