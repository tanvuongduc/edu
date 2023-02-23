
const key = 'a';

// localStorage.setItem(key, '1');
// localStorage.getItem(key);
// localStorage.removeItem(key);

// JSON data format
// https://jsoneditoronline.org/


let allTasks = readTasks();

[
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
]

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
}

function readTasks() {
    try {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    } catch (e) {
        return [];
    }
}

function addTask(text) {
    allTasks.push(text);
    saveTasks(allTasks);
}

function deleteAllTasks() {
    allTasks = [];
    localStorage.setItem('tasks', []);
}

function removeTask(text) {
    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];
        if (element === text) {
            allTasks.splice(i, 1);
            saveTasks();
        }
    }
}



