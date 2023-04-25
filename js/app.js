const task = document.querySelector("#task-name").value
const buttonAdd = document.querySelector("#add-button")
const list = document.querySelector("#task-list")
console.log(task, buttonAdd)

buttonAdd.addEventListener("onclick", (click)=> {})

function createTask(click) {
    const newTask = document.createElement("li")
    list.appendChild(newTask)
}