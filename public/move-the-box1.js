var brow = 8;



var board = [
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],

];
var elBoard = document. querySelectorAll('table#move-the-box td');

function drawBoard(){






}

function boardClik(e){
let r = e.target.parentNode.rowIndex;
let c = e.target.cellIndex;
selBox = [];
if (board[r][c]>0){
    selBox = [ r, c ]

}
}
function moveLeft




















