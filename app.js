const { AsyncLocalStorage } = require("async_hooks");

// Define UI varibles
const form = document.querySelector('#form-task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');

loadEventListener();
function loadEventListener(){
    form.addEventListener('submit', addTask);
}

function addTask(e){
    if(taskInput.value === ''){
        alart('Add a task');
    }
    // Creating an element li
    const li = document.createElement('li');
    li.className = 'collection-item'
    li.appendChild(document.createTextNode('taskInput.value'))

    //Creating an element link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';

    // Add html-icon
    link.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(link);

    taskList.appendChild(li);

    // Clear input task
    taskInput.value = '';

    

    e.preventDefault();
}