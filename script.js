(() => {

const btn = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');
const list = document.querySelector('[data-list]');
const createTask = (evento) => {
    evento.preventDefault();
    const value = input.value;
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerHTML = value;
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    list.appendChild(task);
}
btn.addEventListener('click', createTask);
const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completTask);
    return i;
};
const completTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};
})()