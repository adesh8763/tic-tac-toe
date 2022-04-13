//alert('Built By Adesh');
const boxes = document.getElementsByClassName('game-container')[0].getElementsByTagName('td');

let xTurn = true;
let sMode = true;
function clearBoard(){
   for(var j = 0; j < 9; j++){
      boxes[j].innerText = '';
      boxes[j].style.backgroundColor = '#48d1cc';
   }
   xTurn = true;
}
function xWins(x, y, z){
   boxes[x].style.backgroundColor = 'lightgreen';
   boxes[y].style.backgroundColor = 'lightgreen';
   boxes[z].style.backgroundColor = 'lightgreen';
   setTimeout(clearBoard, 500);
   setTimeout(()=>{
      alert('X WINS')
   },400);
   
}

function yWins(x, y, z) {
   boxes[x].style.backgroundColor = 'orangered';
   boxes[y].style.backgroundColor = 'orangered';
   boxes[z].style.backgroundColor = 'orangered';
   setTimeout(clearBoard, 500);
   setTimeout(()=>{
      alert('O wins');
   },400);
}


function decide(){
   if(boxes[0].innerText == 'X' && boxes[1].innerText == 'X' && boxes[2].innerText == 'X'){
         setTimeout(() =>{
            xWins(0,1,2);
         },100);
         
   }
   if (boxes[0].innerText == 'X' && boxes[3].innerText == 'X' && boxes[6].innerText == 'X') {
      setTimeout(() => {
         xWins(0, 3, 6);
      }, 100);
   
   }
   if (boxes[0].innerText == 'X' && boxes[4].innerText == 'X' && boxes[8].innerText == 'X') {
      setTimeout(() => {
         xWins(0, 4, 8);
      }, 100);
   
   }
   if (boxes[1].innerText == 'X' && boxes[4].innerText == 'X' && boxes[7].innerText == 'X') {
      setTimeout(() => {
         xWins(1, 4, 7)
      }, 100);
   
   }
   if (boxes[2].innerText == 'X' && boxes[4].innerText == 'X' && boxes[6].innerText == 'X') {
      setTimeout(() => {
         xWins(2, 4, 6);
      }, 100);
   
   }
   if (boxes[2].innerText == 'X' && boxes[5].innerText == 'X' && boxes[8].innerText == 'X') {
      setTimeout(() => {
         xWins(2, 5, 8);
      }, 100);
   
   }
   
   if (boxes[3].innerText == 'X' && boxes[4].innerText == 'X' && boxes[5].innerText == 'X') {
      setTimeout(() => {
         xWins(3, 4, 5);
      }, 100);
   
   }
   if (boxes[6].innerText == 'X' && boxes[7].innerText == 'X' && boxes[8].innerText == 'X') {
      setTimeout(() => {
         xWins(6, 7, 8);
      }, 100);
   
   }
   if(boxes[0].innerText == 'O' && boxes[1].innerText == 'O' && boxes[2].innerText == 'O'){
         setTimeout(() =>{
            yWins(0,1,2);
         },100);
         
   }
   if (boxes[0].innerText == 'O' && boxes[3].innerText == 'O' && boxes[6].innerText == 'O') {
      setTimeout(() => {
         yWins(0, 3, 6);
      }, 100);
   
   }
   if (boxes[0].innerText == 'O' && boxes[4].innerText == 'O' && boxes[8].innerText == 'O') {
      setTimeout(() => {
         yWins(0, 4, 8);
      }, 100);
   
   }
   if (boxes[1].innerText == 'O' && boxes[4].innerText == 'O' && boxes[7].innerText == 'O') {
      setTimeout(() => {
         yWins(1, 4, 7)
      }, 100);
   
   }
   if (boxes[2].innerText == 'O' && boxes[4].innerText == 'O' && boxes[6].innerText == 'O') {
      setTimeout(() => {
         yWins(2, 4, 6);
      }, 100);
   
   }
   if (boxes[2].innerText == 'O' && boxes[5].innerText == 'O' && boxes[8].innerText == 'O') {
      setTimeout(() => {
         yWins(2, 5, 8);
      }, 100);
   
   }
   
   if(boxes[3].innerText == 'O' && boxes[4].innerText == 'O' && boxes[5].innerText == 'O') {
      setTimeout(() => {
         yWins(3, 4, 5);
      }, 100);
   
   }
   if (boxes[6].innerText == 'O' && boxes[7].innerText == 'O' && boxes[8].innerText == 'O') {
      setTimeout(() => {
         yWins(6, 7, 8);
      }, 100);
      
         
      

   }
   if(boxes[0].innerText != '' && boxes[1].innerText != '' && boxes[2].innerText != '' && boxes[3].innerText != '' && boxes[4].innerText != '' && boxes[5].innerText != '' && boxes[6].innerText != '' && boxes[7].innerText != '' &&  boxes[8].innerText != ''  ){
         setTimeout(clearBoard, 500);
      
   }
}
if(sMode == true){
for(var i = 0; i < boxes.length; i++){
   boxes[i].addEventListener('click', event =>{
      if(event.target.innerText == ''){
         if(xTurn){
            event.target.innerText = 'X';
            xTurn = false;
            decide();
         }
         else{
            event.target.innerText = 'O';
            xTurn = true;
            decide();
         }
            
         
      }
});
   
}
}




