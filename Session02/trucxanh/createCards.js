// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// let array =[
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15],
//     [16,17,18,19,20]
// ]

// const ROW = 4; // số cột
// const COL = 5; // số hàng
// const SQ = 100; // kích thước của một ô
// const COLOR = "ORANGE"; // color của ô

// let score =0;
// let high_score = 0;


// function drawSquare(x, y){
//     // chọn màu cho hình
//     ctx.fillStyle = 'orange';
//     ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
//     // hình vuống thứ 2
//     ctx.strokeStyle = '#524A4E';
//     ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
// }

// // tạo mảng 2 chiều chứa gameboard

// let board = [];
// for(let r =0; r< ROW; r++){
//     board[r] = [];
//     for(let c = 0; c < COL; c++){
//         board[r][c] = array[r][c];
//     }
// }
// console.log(board);

// function drawBoard(){
//     for(let r =0; r< ROW; r++){
//         for(let c = 0; c < COL; c++){
//            drawSquare(c, r, board[r][c]);
//         }
//     }
// }

// drawBoard();
// let Label = document.createElement("div");


/* 
let cover01 = document.createElement("div");
cover01.style.backgroundColor = "orange";
cover01.style.width = "100px";
cover01.style.height = "100px";
cover01.style.top = "100px";
cover01.style.left = "100px";
document.body.appendChild(cover01);

function createLabel(index){
    let label = document.createElement("div");
    label.innerText = index;
    label.style.position = "absolute";
    label.style.top = "35px";
    label.style.left = "50px";
    label.style.fontSize = "30px";
    return label;
}

let label01 = createLabel(1);
cover01.appendChild(label01);
*/



const VALUE_EMPTY = 1;
const VALUE_X = 2;
const VALUE_O = 3;
const DEFAULT_COLS = 5;
const DEFAULT_ROWS = 4;
const DEFAULT_CELL_SIZE = 200;

const IMAGES = [
    [1, "hinh1"],
    [2, "hinh2"],
    [3, "hinh3"],
    [4, "hinh4"],
    [5, "hinh5"],
    [6, "hinh6"],
    [7, "hinh7"],
    [8, "hinh8"],
    [9, "hinh9"],
    [10, "hinh10"],
]

console.log(IMAGES);
const ImageAdd = ["hinh1", "hinh2", "hinh3", "hinh4", "hinh5", "hinh6", "hinh7", "hinh8", "hinh9", "hinh10"]


function randomIamge() {
    let r = Math.floor(Math.random() * ImageAdd.length);
    return ImageAdd[r];
}
function addImage(){

    
}
console.log(randomIamge());
console.log(addImage());
let array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.value = VALUE_EMPTY;
    this.getHtml = function () {
        var top = x * DEFAULT_CELL_SIZE;
        var left = y * DEFAULT_CELL_SIZE;
        var cellHtml = '<div id="cell-' + x + '-' + y + '" onclick="play(' + x + ',' + y + ')" class="cell" style="position: absolute; width: ' +
            DEFAULT_CELL_SIZE + 'px; height:' +
            DEFAULT_CELL_SIZE + 'px; left:' +
            left + 'px; top:' +
            top + 'px; line-height: ' +
            DEFAULT_CELL_SIZE + 'px;">' + '<span>' + array[x][y] + '</span>' +
            '<img src="./css/images/' + addImage() + '.png"' + '" ' + '>'
            + '</div>';
        return cellHtml;
    };

    // this.draw = function () {
    //     var cellDiv = document.getElementById("cell-"+x+"-"+y);
    //     switch (this.value){
    //         case VALUE_X:
    //             cellDiv.innerHTML = "X";
    //             break;
    //         case VALUE_O:
    //             cellDiv.innerHTML = "O";
    //             break;
    //         default:
    //             cellDiv.innerHTML = "";
    //             break;
    //     }
    // }
}

function GameBoard(rows, cols, elementId) {
    this.rows = rows;
    this.cols = cols;
    this.elementId = elementId;
    this.turn = VALUE_O;
    this.cells = [];
    // this.isOver = false;

    this.draw = function () {
        var gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for (var i = 0; i < this.rows; i++) {
            var row = [];
            this.cells.push(row);
            console.log(this.cells.push(row))
            for (var j = 0; j < this.cols; j++) {
                var cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
                console.log(row.push(cell))
            }
        }
    };

    this.play = function (x, y) {
        alert("OK")
        var img = document.getElementById("array[" + x + "][" + y + "]");
        console.log(img)
        // img.style.display ="block";
        var cellDiv = document.getElementById("cell-" + x + "-" + y);
        console.log(cellDiv);
        cellDiv.style.display = "none";
    }



}
function play(x, y) {
    gameBoard.play(x, y);
}
gameBoard = new GameBoard(DEFAULT_ROWS, DEFAULT_COLS, "game-board");
gameBoard.draw();

