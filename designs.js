// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const canvas = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const sizePicker = document.getElementById("sizePicker");

// function makeGrid() {
//     for (let row = 0; row < height.value; row++) {
//         for (let columns = 0; columns < x; columns++) {
//             $("#container").append("<div class='grid'></div>");
//         };
//     };

// }

function makeGrid() {
    for (let row = 0; row < height.value; row++) {
        const row = canvas.insertRow(r);
        for (let columns = 0; columns < width.value; columns++) {
            const cell = row.insertCell(c);
        }
    }
}

sizePicker.onsubmit = function(e) {
    e.preventDefault();
    clearGrid();
    makeGrid();
};


function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}
