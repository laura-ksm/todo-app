function addItem() {
    let task = document.getElementById("task").value;
    let node = document.createTextNode(task);

    let itemNew = document.createElement("li.collection-item");
    itemNew.appendChild(node);

    let element = document.getElementById("collection-list");
    element.appendChild(itemNew);
}
