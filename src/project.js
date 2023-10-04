// ES6 module syntax
import TodoItem from './todoItem';

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

  // Getters and Setters for each property
  get title() {
    return this.title;
  }

  set title(value) {
    this.title = value;
  }

  get dueDate() {
    return this.dueDate;
  }

  set dueDate(value) {
    this.dueDate = value;
  }

  get startDate() {
    return this.startDate;
  }

  set startDate(value) {
    this.startDate = value;
  }

  get priority() {
    return this.priority;
  }

  set priority(value) {
    this.priority = value;
  }

  get notes() {
    return this.notes;
  }

  set notes(value) {
    this.notes = value;
  }

  get todoItems() {
    return this.todoItems;
  }

  set todoItems(value) {
    this.todoItems = value;
  }

  get selected() {
    return this.selected;
  }

  set selected(value) {
    this.selected = value;
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
