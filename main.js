const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

function addTodo(){
    const todoText = input.value;
    
    if(todoText){
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;
    
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');

            updateLS();
        });
    
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
        })
    
        todos.appendChild(todoEl);
    
        input.value = '';

        updateLS();
    }

    //TODO: make the text stay after refresh
}

function updateLS(){
    const todo = document.querySelectorAll('li');

    const todos = [];

    todo.forEach(todo => {
        todos.push({
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos));
}