let inputField = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

addToDo.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = inputField.value;

    paragraph.classList.add('paragraph-styling')
    toDoContainer.appendChild(paragraph);

    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through'
    })

    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    })
})