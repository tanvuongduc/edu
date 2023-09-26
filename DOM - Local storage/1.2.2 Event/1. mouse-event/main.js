
const ul = document.querySelector('ul');


const li = ul.firstElementChild;
li.lastElementChild.addEventListener('click', () => {
    li.remove();
});

// onclick

// clear all task

document.getElementById('delete-all').addEventListener('click', () => {

});

// mouse event
const deleteAll = document.getElementById('delete-all');
deleteAll.addEventListener("mouseover", () => {
    deleteAll.style.backgroundColor = 'green';
    console.log('mouse over');
});
deleteAll.addEventListener("mousedown", () => {
    deleteAll.style.backgroundColor = 'blue';
    console.log('mouse down');
});
deleteAll.addEventListener("mouseup", () => {
    deleteAll.style.backgroundColor = 'green';
    console.log('mouse up');
});
deleteAll.addEventListener("mouseout", () => {
    deleteAll.style.backgroundColor = '';
    console.log('mouse out');
});

