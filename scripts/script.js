
createGrid(16);


function createGrid(size) {
    const container = document.querySelector('#container');
    

    for (let i=1;i<=size;i++) {
        const row = document.createElement('div');
        row.classList.toggle('row');
        row.classList.toggle('square');
        //div.textContent = i;
        for (let j=1;j<=size;j++){
            const col = document.createElement('div');      
            col.classList.toggle('column');
            col.classList.toggle('square');
            row.appendChild(col);
        }
        container.appendChild(row);
    }

    draw();
}

function draw(){
    const boxes = document.querySelectorAll('.square');
    console.log(boxes);

    boxes.forEach((box) => {

        box.addEventListener('mouseover',()=>{
            box.classList.toggle('black-hover')
        });
    });

}