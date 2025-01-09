export interface Task {
    name: string;
    isDone: boolean;
    category?: Category;
}

export enum Category {
    GENERAL = "general",
    WORK = "work",
    GYM = "gym",
    HOBY = "hoby",
    SOCIAL = "social" 
}