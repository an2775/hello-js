const boardSize = 4;

var board = [
[0,0,0,0],
[0,2,0,0],
[0,0,2,2],
[0,2,0,0]
];
var elBoard = document. querySelectorAll('table#game2048 td');

function drawBoard(){

    for ( let r=0; r < boardSize; r++ ) {
        for ( let r=0; c < boardSize; c++ ) {
        let i =boardSize * r + c;
        if (board[r][c]> 0 ){
        elBoard[i].innerText = board[r] [c];
        
        }else {
        elBoard[i].innerText='';
        
        }
        
        
        }
let cl = 'c-' +board[r][c];
elBoard[ i ].className = cl;

        }
        
        


}



function mover( a ){
//[0,0,0,0]
for (let c=0;c<boardSize-1;c++ ){
    if (a[ c ]==0){
        let cNe0 = -1;
        for (let cR=c+1; cR<boardSize;cR++){
            if(a[cR] >0){
                cNe0=cR;
                break;
            }

        }
    }

    if(cNe0 !=-1){
        a [c]=a [cNeo]
        a[cNeo]=0;
        }
}
function onKey( e ) {

 switch (e.keyCode){
case 37:mvLeft();break
case 38:mvUp();break
case 39:mvRight();break
case 40:mvDown();break

 } 
nextNumber();
nextNumber();
drawBoard();





}








function gameRnd() {
    let r = Math.random
    if ( r>0.9){
        return 4;
    }else {
        return 2;
    }
}

function getZeros(){
    let a = [];
    for (let r=0; c<boardSize;r++){
        for (let c=0; c<boardSize;c++){
            if (board[ r ][ c ]==0){
                a.push([ r,c ]);
            }

        }
        return a;
                }
        
function nextNumber(){
let a = getZeros();
let n = a.leght;
let i = Math.floor( n * Math.random() );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
}



}











}




















// 1)[0,0,0,0]
// 2)всі клітинки без останньої
//  2.1)вправо ? 0 (cNe0)
//  2.2) (c)=(cNe0);(cNe0)=0
// 3)вправо = с? так(cEq)
//  3.1)(c)+= (cEq);(cEq =0)


