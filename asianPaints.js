const blockId = document.querySelector("#block_id");
const colourId = document.querySelector("#colour_id");
const changeButton = document.querySelector("#change_button");
const resetButton = document.querySelector("#reset_button");

reset = ()=>{
    const gridAll = document.querySelectorAll(".grid-item");
    gridAll.forEach(fun =>{
        fun.style.backgroundColor = "transparent";

    })
};

resetButton.addEventListener("click", reset);

changeButton.addEventListener("click", ()=>{
    reset();

    const grid = document.getElementById(blockId.value);
    grid.style.backgroundColor =colourId.value;
    blockId.value = "";
    colourId.value = "";

})



