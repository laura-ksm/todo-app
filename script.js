const btn = document.getElementById('button-add');
btn.addEventListener('click', () => {
    let task = document.getElementById('task').value;
    let node = document.createTextNode(task);

    let itemNew = document.createElement('li.collection-item');
    itemNew.appendChild(node);

    let element = document.getElementById('collection-list');
    element.appendChild(itemNew);
});

let btnClear = document.getElementById('button-add');
btnClear.addEventListener('click', () => {
    let inputTask = document.getElementById('task').value = '';
});
