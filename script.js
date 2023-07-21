import  checkComplete  from './components/checkComplete.js';
import  deleteIcon  from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');
const list = document.querySelector('[data-list]');
const createTask = (evento) => {
    evento.preventDefault();
    const taskContent = document.createElement('div');
    const task = document.createElement('li');
    const titleTask = document.createElement('span');
    const value = input.value;
    input.value = '';
    task.classList.add('card');
    titleTask.classList.add('task');
    titleTask.innerHTML = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
}

btn.addEventListener('click', createTask);
