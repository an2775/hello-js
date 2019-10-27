
function setBg (c){
    document.bgcolor = c;
}

//
function myKeys(e) {
    switch (e.keyCode){
        case 65: setBg('red');
        break;
        case 83:setBg('blue');
        break;
        case 68: setBg('yellow');
        break;
        default: console.log(e);
        break;

    }
}





















