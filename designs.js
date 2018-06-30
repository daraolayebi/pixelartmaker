// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function makeGrid() {
//     for (var row = 0; row < height.value; row++) {
//         for (var columns = 0; columns < x; columns++) {
//             $("#container").append("<div class='grid'></div>");
//         };
//     };

// }


const canvas = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener("click", function() {

});

sizePicker.onsubmit = function(e) {
    e.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    for (let row = 0; row < height.value; row++) {
        const row = canvas.insertRow(r);
        for (let column = 0; column < width.value; column++) {
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare() {
    this.setAttribute("style", `background-color: ${color.value}`);
}