// função que adiciona tarefa
function addTask() {

    // pegando o titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {
        // clonando o template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adicionando titulo da nova tarefa
        newTask.querySelector(".task-title").textContent = taskTitle;

        // removendo as classes desnecessárias 
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adicionando tarefa a lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        // adicionando evento para remove tarefa
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        // adicionando evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        // limpar tarefa
        document.querySelector("#task-title").value = "";
    }
}

// função de remover tarefa 
function removeTask(task){
   task.parentNode.remove(true);
}

// função de completar tarefa
function completeTask(task) {
    
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

// evento de adicionar tarefa 
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();
    
    addTask();
    
});