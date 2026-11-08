console.log("Script loaded successfully");
let grid_btn = document.querySelector(".new-grid-btn");
let grid = 16;
let container = document.querySelector(".grid-container");

grid_btn.addEventListener("click", ()=>{
    let user_grid = parseInt(prompt("Enter number of grid (eg: 3) but not more than 100"));
    console.log(user_grid);

    if(user_grid > 100){
        alert("The number of grid is more than 100, we will use the default 16 x 16 grid");
        grid = 16;
    }
    else{
        grid = user_grid;
    }
});

console.log(grid);