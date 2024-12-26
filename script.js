const GameBoard = (function(){
    let gameBoard = 
    ["", "", "", 
    "", "", "", 
    "", "", ""];
    let activePlayer 
    let zero = document.getElementById("zero");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let cells = [zero, one, two, three, four, five, six, seven, eight]
    let resetBtn = document.getElementById("reset")
    const render = function(){
        activePlayer = player1 
        //playersTurn.textContent = `${activePlayer.mark} Turn`
        for(let i = 0; i < cells.length; i++){
            cells[i].addEventListener("click", ()=>{
                //playersTurn.textContent = `${activePlayer.mark} Turn`
                if (!cells[i].textContent) { // Prevent overwriting cells
                    cells[i].textContent = activePlayer.mark
                    updateBoard(i,activePlayer.mark, gameBoard)
                   
                    if(winner(gameBoard)){
                        modal.style.display = "flex";
                        modal.style.justifyContent = "center";
                        modal.style.alignItems = "center"
                        modal.innerHTML = `<div class="modal-content"><p>Winner ${activePlayer.mark}</p></div>`
                        //reset()
                        
                    }
                
              
                    if(activePlayer == player1){
                        activePlayer = player2
                    }
                    else{
                        activePlayer = player1
                        
                    }
                    
                   
                }
                    
            })
        }
        resetBtn.addEventListener("click", reset)
        return {GameBoard}
        
    };
    const reset = function(){
        gameBoard =   ["", "", "", 
            "", "", "", 
            "", "", ""];

        activePlayer = player1;
        //playersTurn.textContent = `X turn`
        for (let i = 0; i < cells.length; i++){
            cells[i].textContent = ""
            console.log(`Cell ${i} cleared`);
        }
       
        render(); // Rebind event listeners 
        return {gameBoard, activePlayer}
    
    }
    
    return {gameBoard, render, reset};
})();
const player =  function(name, mark = "X"){

    return { name, mark};
}

let player1 = player("Player1", "X")
let player2 = player("Player2", "O")


const winner = function(board){
   
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // r
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // c
        [0, 4, 8], [2, 4, 6]             // d  
    ];
    for (let combination of winningCombinations) {
        [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return board[a]
        }
    }
   
     
}
const updateBoard = function(index, value, board){
    
    board[index] = value;
    return {board}
   
}




GameBoard.render()









