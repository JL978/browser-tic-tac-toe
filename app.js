
var player = 'X'

const play_grid = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

const square_grid = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]


const box = document.querySelector('#grid-box')
var listener
square_grid.forEach((row, index) => {
    row.forEach((col, num) =>{
        const div = document.createElement('div');
        div.setAttribute('class', 'col-4 mx-auto');
        box.appendChild(div);
        div.addEventListener('click', listener = function(e) {
            e.preventDefault;
            if (play_grid[index][num] === 0){
                div.innerHTML = player;
                play_grid[index][num] = player;
                if (check_winner(play_grid, player)){
                    square_grid.forEach((row, index) => {
                        row.forEach((square, num) =>{
                            // console.log(listener);
                            square.removeEventListener('click', listener,capture = false);
                            // play_grid[index][num] = -1;
                        })
                    })
                }
                if (player === 'X'){
                    player = 'O'
                }else{
                    player = 'X'
                }
            }else{
                console.log('Pick another square!');
            }
        });
        square_grid[index][num] = div;
    });
})

function check_winner(board, player){
    if ((board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][2] == player) ||
        (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][2] == player) ||
        (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][2] == player) ||
        (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[2][0] == player) ||
        (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[2][1] == player) ||
        (board[0][2] == board[2][1] && board[0][2] == board[2][2] && board[2][2] == player) ||
        (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[2][2] == player) ||
        (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[2][0] == player)){
        console.log(`${player} wins`);
        return true
    }else if (board[0].includes(0) == false && board[1].includes(0) == false && board[2].includes(0) == false ){
        console.log('No one wins');
        return true
    }
    return false
}


