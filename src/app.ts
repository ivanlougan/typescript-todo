const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const tasksContainerElement: HTMLElement = document.querySelector(".tasks")
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")
let selectedCategory: Category ;

type Category = "general" | "work" | "gym" | "hoby";

interface Task {
    name: string;
    isDone: boolean;
    category?: Category;
}

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

const render = () => {
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

const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement: HTMLElement = document.createElement("li")

        const radioInputElement: HTMLInputElement = document.createElement("input")
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        })

        const labelElement: HTMLLabelElement = document.createElement("label")
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;

        categoryElement.appendChild(radioInputElement); 
        categoryElement.appendChild(labelElement);

        categoriesContainerElement.appendChild(categoryElement);
    })
}

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
    render();
})

addTask({ name: "zrobić klate", isDone: false, category: "gym"})
renderCategories();
render();