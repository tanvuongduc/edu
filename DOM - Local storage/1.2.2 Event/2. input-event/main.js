const newTaskEl = document.getElementById('new-task');
newTaskEl.addEventListener('input', () => {
    console.log(newTaskEl.value);
});

const ul = document.querySelector('ul');
function addItem(text) {
    const li = document.createElement('li');
    li.innerHTML = text;
    li.classList.add('collection-item');
    ul.appendChild(li);
}

const btnAddNewtask = document.getElementById('add-new-task');
btnAddNewtask.addEventListener('click', () => {
    addItem(newTaskEl.value);    
});

// clear input
// enter item
// empty text
