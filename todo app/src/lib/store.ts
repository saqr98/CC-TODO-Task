import { writable } from "svelte/store";
import type { ITask } from "./task.ts";


// Retrieve tasks from local storage
const STORAGE_KEY = "tasks";
const tasks = localStorage.getItem(STORAGE_KEY) ?? '';

// Create an exportable and writeable store for tasks
export const storedTasks = writable<ITask[]>(tasks ? JSON.parse(tasks) : []);

// Subscribe to changes and update local storage
storedTasks.subscribe(tasks => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
});
