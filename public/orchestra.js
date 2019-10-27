
function playS (id){
   const audio = document.getElementById(id);
   audio.currentTime = 0;
   audio.play();
}
function clears(id){
    const divkey = document.getElementByid('k'+id);
    divkey.className = '';
}
//
function myKeysDw(e) {
    switch (e.keyCode){
        case 65: playS ('sound01');
        break;
       case 83:playS('sound02');
       break;
       case 72:
        default: console.log(e);
        break;

    }
}





















