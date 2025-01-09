import { Task } from "./classes/task.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
import { render } from "./helpers/render-tasks.helper.js";
import { Category } from "./types/types.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const tasksContainerElement: HTMLElement = document.querySelector(".tasks")
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")
let selectedCategory: Category ;

const categories: Category[] = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBY, Category.SOCIAL]


const tasks: Task[] = [ 
    new Task("wyrzucic smieci", false, Category.GENERAL),
    new Task("pójść na siłke", true, Category.GENERAL),
    new Task("wyrzucic kota", true)
];


const addTask = (task: Task) => {
    tasks.push(task)
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

addButtonElement.addEventListener("click", (event: Event ) => {
    
    event.preventDefault();
    addTask(new Task(taskNameInputElement.value, false, selectedCategory))
    render(tasks, tasksContainerElement);
})

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = [
    "chest press",
    Category.GYM,
    false
]

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2]

renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);

const taskClass = new Task("about classes", false);

taskClass.LogCreationDate();

console.log(taskClass)