import { Category } from "../types/types.js";

export class Task {
    name: string = "new task";
    isDone: boolean = true;
    category?: Category;
    private createdAt: Date;

    constructor( name: string, isDone: boolean, category: Category = Category.GENERAL) {
        this.name = name;
        this.isDone = isDone;
        this.category = category
        this.createdAt = new Date();

    }

    LogCreationDate() {
        console.log(`task was created at ${this.createdAt}`);
    }
}


