let btn = document.getElementById('button-add');
btn.addEventListener('click', () => {
    let iconText = document.createTextNode('delete');
    let iconDelete = document.createElement('i');
    iconDelete.className = 'material-icons';
    iconDelete.appendChild(iconText);

    let btnRemove = document.createElement('a');
    btnRemove.className = 'secondary-content';
    btnRemove.id = 'delete-item';
    btnRemove.setAttribute('href','#!');
    btnRemove.appendChild(iconDelete);

    let task = document.getElementById('task').value;
    let node = document.createTextNode(task);

    let itemNew = document.createElement('li');
    itemNew.className = 'collection-item';
    itemNew.appendChild(node);
    itemNew.appendChild(btnRemove);

    let element = document.getElementById('collection-list');
    element.appendChild(itemNew);
});

let btnClear = document.getElementById('button-add');
btnClear.addEventListener('click', () => {
    document.getElementById('task').value = '';
});

let parent = document.getElementById('collection-list');
parent.addEventListener('click', e => {
    parent.removeChild(e.target.parentNode.parentNode);
});