const cells = document.querySelectorAll('.cell');
const board = document.querySelector('.board');
const restart = document.querySelector('.restart');
const x = 'x';
const circle = 'circle';
const win_comb = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let circleTurn;
startGame();
restart.addEventListener('click',()=>{
    window.location.reload();
});

function startGame(){
    circleTurn = false;
    cells.forEach(cell =>{

        cell.addEventListener('click',handleClick);
        
        })
        setHover();

}


function handleClick(e)
{
let cell = e.target;
let currentClass = circleTurn? circle:x;
    placeMark(cell,currentClass);
    
    if(winner(currentClass)){
        alert(`${currentClass} is winner`);
    }
    else if(isDraw()){
        alert('Its a draw');
    }
    else{
        swap();
        setHover();
    }

}
function placeMark(cell,currentClass){
    cell.classList.add(currentClass);
}

function swap(){
    circleTurn = !circleTurn;
}

function setHover(){
   board.classList.remove(circle);
   board.classList.remove(x);
   if(circleTurn){
       board.classList.add(circle);
   }
   else{
       board.classList.add(x);
   }
}
function winner(currentClass){
  return  win_comb.some(comb =>{
  return comb.every(index =>{
         return cells[index].classList.contains(currentClass);
      })
  })
}
function isDraw(){
    return [...cells].every(cell =>{
        return cell.classList.contains(circle)||
        cell.classList.contains(x);
    })
}