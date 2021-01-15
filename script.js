let btn = document.getElementById('button-add');
btn.addEventListener('click', () => {
    let iconText = document.createTextNode('delete');
    let iconDelete = document.createElement('i');
    iconDelete.className = 'material-icons';
    iconDelete.appendChild(iconText);

    let btnRemove = document.createElement('a');
    btnRemove.className = 'secondary-content';
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
    let inputTask = document.getElementById('task').value = '';
});

parent = document.getElementById('collection-list');
parent.addEventListener('click', function(e){
    if(e.target.matches('.collection-item')){
        parent.removeChild(e.target.parentNode);
    }
});

let btnDelete = document.getElementById('button-delete');
btn.addEventListener('click', () => {
    aux = document.getElementById('button-delete');
    child = aux.parentNode;
    parent = document.getElementById('collection-list');
    parent.removeChild(child);
});