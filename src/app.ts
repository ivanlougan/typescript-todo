import { renderCategories } from "./helpers/render-categories.helper.js";
import { render } from "./helpers/render-tasks.helper.js";
import { Category, Task } from "./types/types";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const tasksContainerElement: HTMLElement = document.querySelector(".tasks")
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")
let selectedCategory: Category ;

const categories: Category[] = ["general", "work", "gym", "hoby"]


const tasks: Task[] = [ {
    name: "wyrzucic smieci",
    isDone: false,
    category: "work"
}, 
{
    name: "pójść na siłke",
    isDone: true,
    category: "gym"
}, 
{
    name: "wyrzucić kota",
    isDone: false,
    category: "hoby"
} ];


const addTask = (task: Task) => {
    tasks.push(task)
}

addButtonElement.addEventListener("click", (event: Event ) => {
    
    event.preventDefault();
    addTask(
        { 
            name: taskNameInputElement.value, 
            isDone: false, 
            category: selectedCategory
        })
    render(tasks, tasksContainerElement);
})

addTask({ name: "zrobić klate", isDone: false, category: "gym"})
renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);