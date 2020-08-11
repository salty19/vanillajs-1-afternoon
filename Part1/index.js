//CREATING NEW ARRAY FOR CLICKS TO BE STORED IN INDEXES
const board = []

// FUNCTION WHERE PLAYERS CLICK ON SQUARES
function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId)
    
        if (playerSpan.innerText === `X`) {
            playerSpan.innerText = `O`;
            clickedElement.innerText = `X`;
            board[clickedId] = 'X';
        } else {
            playerSpan.innerText = `X`;
            clickedElement.innerText = `O`;
            board[clickedId] = 'O';
        }
        console.log(board)
}
// ASSIGNING EACH SQUARE INTO ARRAY INDEX 'BOARD'
const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight =  board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];

// CHECKS ALL WINNING COMBINATIONS

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
    // *** INVOKE WINNER HERE ***
} 
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
    //*** INVOKE WINNER HERE ***
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    //*** INVOKE WINNER HERE ***
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    //*** INVOKE WINNER HERE ***
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    //*** INVOKE WINNER HERE ***
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    //*** INVOKE WINNER HERE ***
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    //*** INVOKE WINNER HERE ***
}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    //*** INVOKE WINNER HERE ***
}
