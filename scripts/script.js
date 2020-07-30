
let gridSize=16;
getSize();
createGrid(gridSize);



function createGrid(size) {
    const container = document.querySelector('#container');


    for (let i=1;i<=size;i++) {
        const row = document.createElement('div');
        row.classList.toggle('row');
        row.classList.toggle('square');
        //row.style.height = `${600/size}px`
        row.style.width = `${400/size}px`
        //div.textContent = i;
        for (let j=1;j<=size;j++){
            const col = document.createElement('div');      
            col.classList.toggle('column');
            col.classList.toggle('square');
            col.style.height = `${400/size}px`
            //col.style.width = `${600/size}px`
            row.appendChild(col);
        }
        container.appendChild(row);
    }

    draw();
}

function draw(){
    const boxes = document.querySelectorAll('.square');
    
    boxes.forEach((box) => {

        box.addEventListener('mouseover',()=>{
            box.classList.toggle('black-hover')
        });
    });

    const clearBut = document.querySelector('#clear-button');

    clearBut.addEventListener('click',() => {
        boxes.forEach((box) => {

            box.classList.remove('black-hover');
       
        });
    });

}

function getSize(){
    const sizeSlider = document.querySelector('#size-slider');

    sizeSlider.value = '16';

    sizeSlider.addEventListener('change',() => {
        let size = sizeSlider.value;
        console.log(size);
        removeElements();
        createGrid(size);
    });
}

function removeElements(){
    // this function is to remove the grid to then recreate the grid:
    // to solve the problem I was having of grids overlaying each other everytime I changed the size. 

    const grid = document.querySelectorAll('.square');
    grid.forEach((box)=>{
        box.remove();
    });
}