
createGrid(16);





function createGrid(size) {
    const container = document.querySelector('#container');
    

    for (let i=1;i<=size;i++) {
        const div = document.createElement('div');
        div.classList.toggle('row');
        //div.textContent = i;
        for (let j=1;j<=size;j++){
            const col = document.createElement('div');      
            col.classList.toggle('column');
            div.appendChild(col);
        }
        container.appendChild(div);
    }
}
