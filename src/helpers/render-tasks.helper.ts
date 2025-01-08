import { Task } from "../types/types";

export const render = (tasks: Task[], tasksContainerElement: HTMLElement) => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach ((task, index) => {
        const taskElement: HTMLElement = document.createElement('li');
        if (task.category) {
            taskElement.classList.add(task.category)
        }
        const id: string = `task-${index}`;
        
        const labelElement: HTMLLabelElement = document.createElement("label")
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id)

        const checkboxElement: HTMLInputElement = document.createElement("input")
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.isDone;
        checkboxElement.addEventListener("change", () => {
            task.isDone = !task.isDone;
        })

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);
    })
}