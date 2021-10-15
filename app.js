// Define UI varibles
const form = document.querySelector('#form-task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');

function addTask(e) {
  if (taskInput.value === '') {
    // eslint-disable-next-line no-alert
    alert('Add a task');
  }
  // Creating an element li
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  // Creating an element link
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

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Function to clear task
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

function loadEventListener() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

loadEventListener();