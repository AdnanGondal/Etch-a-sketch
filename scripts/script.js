
createGrid(50);


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