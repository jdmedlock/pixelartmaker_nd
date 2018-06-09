// Define global variables. In a "real" production quality application we
// would encapsulate functionality for components of the app into classes
// and expose variables to other parts of the app via methods

// Define references to the DOM elements
const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
//let currentColor = colorPicker.value;

/**
 * @description Update the current grid cell color from user interaction with
 * the color picker.
 * @param {Object} event Event descriptor
 */
function colorChanged(event) {
  //currentColor = event.target.value;
  colorPicker.value = event.target.value;
}

// Create an event listener to process a request to change the grid cell color
colorPicker.addEventListener('click', function (event) {
  colorPicker.addEventListener('input', colorChanged, false);
  colorPicker.addEventListener('change', colorChanged, false);
});

// Create an event listener to process a request to present a new grid
sizePicker.addEventListener('submit', function (event) {
  event.preventDefault();
  makeGrid(
    document.forms['sizePicker'].elements['inputHeight'].value,
    document.forms['sizePicker'].elements['inputWidth'].value
  );
});

// Create an event listener on the grid to allow events to bubble
pixelCanvas.addEventListener('click', function(event) {
  const gridCell = document.getElementById(`${event.target.id}`);
  gridCell.setAttribute('style',`background-color: ${colorPicker.value}`);
});

/**
 * @description When size is submitted by the user draw the new grid
 * @param {Number} rowCount Number of rows in the grid
 * @param {Number} columnCount Number of columns in the grid 
 */
function makeGrid(rowCount, columnCount) {
  // Remove any previously created grid cells before creating a new grid
  const gridCells = document.getElementById('grid-cells');
  if (gridCells !== null) {
    pixelCanvas.innerHTML = '';
  }
  // Create and render a new grid
  let gridHTML = '<span id="grid-cells">';
  for (let row = 0; row < rowCount; row++) {
    gridHTML += '<tr>';
    for (let column = 0; column < columnCount; column++) {
      gridHTML += `<td id="c${row}-${column}"></td>`;
    }
    gridHTML += '</tr>';
  }
  gridHTML += '</span>';
  pixelCanvas.innerHTML = gridHTML;
}
