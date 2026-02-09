document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.querySelector('#todoForm');
    const taskInput = document.querySelector('#taskInput');
    const taskList = document.querySelector('#taskList');

    const createTaskItem = (text) => {
        const li = document.createElement('li');
        li.className = 'task-item';


        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'complete-checkbox';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '🗑';
        deleteBtn.ariaLabel = 'Delete task';


        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed', checkbox.checked);
        });

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });


        li.append(checkbox, span, deleteBtn);
        return li;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const newTask = createTaskItem(taskText);
            taskList.appendChild(newTask);
            todoForm.reset();
        }
    };

    todoForm.addEventListener('submit', handleFormSubmit);
});