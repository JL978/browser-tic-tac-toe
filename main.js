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

square_grid.forEach((row, index) => {
    row.forEach((col, num) =>{
        const div = document.createElement('div');
        div.setAttribute('class', 'col-4 mx-auto');
        box.appendChild(div);
        div.addEventListener('click', (e) => {
            e.preventDefault;
            div.innerHTML = player;
            if (player === 'X'){
                player = 'O'
            }else{
                player = 'X'
            }
        });
        square_grid[index][num] = div;
    });
})




