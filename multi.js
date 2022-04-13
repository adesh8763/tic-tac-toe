
let btnLit;
let playerTurn = true;
let available = [0,1,2,3,4,5,6,7,8];
let boxes = document.getElementsByClassName('game-container')[0].getElementsByTagName('td');

function clearBoard(){
   for(var j = 0; j < 9; j++){
      boxes[j].innerText = '';
      boxes[j].style.backgroundColor = '#48d1cc';
      available = [0,1,2,3,4,5,6,7,8];
      playerTurn = true;
   }

}
function xWins(x, y, z){

   boxes[x].style.backgroundColor = 'lightgreen';
   boxes[y].style.backgroundColor = 'lightgreen';
   boxes[z].style.backgroundColor = 'lightgreen';
   
   setTimeout(() =>{
      alert('You won 👍👍👍');
   },200);
   
   setTimeout(() => {
      document.location.reload();
   
   },300);
   playerTurn = true;
}

function yWins(x, y, z) {
   boxes[x].style.backgroundColor = 'orangered';
   boxes[y].style.backgroundColor = 'orangered';
   boxes[z].style.backgroundColor = 'orangered';
   setTimeout(() =>{
      alert('You lost 👎👎👎');
   },200);
   setTimeout(clearBoard, 300);
   /*for(var i = 0; i < 9; i++){
      boxes[i].removeEventListener(btnLit);
   }*/
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



function computerPlay(){
   if(available.length >= 1){
   var elem = available[Math.floor(Math.random()*available.length)];
   var index = available.indexOf(elem);
   if(boxes[elem].innerText == ''){
      boxes[elem].innerText = 'O';
      available.splice(index, 1);
      //console.log(available)
   }
   else{
      elem = available[Math.floor(Math.random() * available.length)];
   }
   playerTurn = true;
   decide();
   }
}
for(var i = 0; i < 9; i++){
   btnLit = boxes[i].addEventListener('click',event =>{
      if(event.target.innerText == ''){
         if(playerTurn){
            event.target.innerText = 'X';
            var id = event.target.id;
            var index = available.indexOf(Number(id));
            available.splice(index, 1);
            playerTurn = false;
            
            //console.log(index);
            setTimeout(computerPlay,500);
            decide();
         }
      }
   });
}
