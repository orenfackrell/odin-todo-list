// ES6 module syntax
import { TodoItem } from './todoItem';

export const allProjects = [];

export class Project {
  constructor(title, dueDate, startDate, priority, notes) {
    this.title = title;
    this.dueDate = dueDate;
    this.startDate = startDate;
    this.priority = priority;
    this.notes = notes;
    this.todoItems = [];
    this.selected = false;
  }

  // Method to add a todo item to the project
  addTodoItem(todoItem) {
    if (todoItem instanceof TodoItem) {
      this.todoItems.push(todoItem);
    } else {
      throw new Error('Only instances of TodoItem can be added to a project');
    }
  }

  // Method to calculate the progress of the project
  calculateProgress() {
    const completedItems = this.todoItems.filter((item) => item.progress === 100).length;
    return (completedItems / this.todoItems.length) * 100;
  }
}

export function createProject(title, dueDate, startDate, priority, notes) {
  const newItem = new Project(title, dueDate, startDate, priority, notes);
  allProjects.push(newItem);
}
