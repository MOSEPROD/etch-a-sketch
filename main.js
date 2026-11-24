console.log("Script loaded successfully");
let grid_btn = document.querySelector(".new-grid-btn");
let grid = 16;
let container = document.querySelector(".grid-container");

function drawGrid(user_grid) {
    container.innerHTML = "";
    for(let i = 0; i < user_grid; i++){
        let raw = document.createElement("div");
        raw.setAttribute("style", "width: 100px; height: 100px; border: 1px solid #000");
        raw.classList.add("raw");
        container.appendChild(raw);
    }
}

grid_btn.addEventListener("click", ()=>{
    let user_grid = parseInt(prompt("Enter number of grid (eg: 3) but not more than 100"));

    if(user_grid > 100){
        alert("The number of grid is more than 100, we will use the default 16 x 16 grid");
        grid = 16;
        drawGrid(grid);
    }
    else{
        grid = user_grid;
        drawGrid(grid);
    }
});
console.log(grid);

/*for(let i = 0; i <= grid; i++){
    let raw = document.createElement("div");
    raw.classList.add("raw");
    container.appendChild("raw");
    for(let j = 0; j<= i; j++){
        let grid_content = document.createElement("div");
        grid_content.classList.add("grid");
        raw.appendChild(grid_content);
    }
  
}
*/
