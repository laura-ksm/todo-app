// Add an item to the list
let btn = document.getElementById('button-add');
btn.addEventListener('click', () => {
    if (document.getElementById('task').value){
        let task = document.getElementById('task').value;
        let node = document.createTextNode(task);

        let iconText = document.createTextNode('delete');
        let iconDelete = document.createElement('i');
        iconDelete.className = 'material-icons';
        iconDelete.appendChild(iconText);

        let btnRemove = document.createElement('a');
        btnRemove.className = 'secondary-content';
        btnRemove.setAttribute('href','#!');
        btnRemove.appendChild(iconDelete);

        let itemNew = document.createElement('li');
        itemNew.className = 'collection-item';
        itemNew.id = 'list-item';
        itemNew.appendChild(node);
        itemNew.appendChild(btnRemove);

        let element = document.getElementById('collection-list');
        element.appendChild(itemNew);
    }
});

// Clear the input after inserting it
let btnClear = document.getElementById('button-add');
btnClear.addEventListener('click', () => {
    document.getElementById('task').value = '';
});

// Delete a selected item
let parent = document.getElementById('collection-list');
parent.addEventListener('click', e => {
    parent.removeChild(e.target.parentNode.parentNode);
});

// Delete all items
let btnAll = document.getElementById('delete-all');
btnAll.addEventListener('click', () => {
    let item = document.getElementById('collection-list');
    if(item.hasChildNodes){
        while (item.firstChild){
            item.removeChild(item.firstChild);
        }
    }
});