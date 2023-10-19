// ES6 module syntax
import { TodoItem } from './todoItem';

export let allProjects = [];

export class Project {
  constructor(title, description, dueDate, startDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.startDate = startDate;
    this.priority = priority;
    this.notes = notes || '';
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
    if (this.todoItems.length === 0) {
      return '0';
    }
    const completedItems = this.todoItems.filter((item) => item.progress === 100).length;
    return (completedItems / this.todoItems.length) * 100;
  }
}

export function saveProjectsLocalStorage() {
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
}

export function loadProjectsFromLocalStorage() {
  const savedProjects = localStorage.getItem('allProjects');

  if (savedProjects) {
    try {
      const parsedData = JSON.parse(savedProjects);

      // Additional validation to ensure parsedData is an array
      if (!Array.isArray(parsedData)) {
        throw new Error('Loaded data is not an array');
      }

      allProjects = parsedData.map((projectData) => Object.assign(new Project(), projectData));

      console.log(allProjects);
    } catch (error) {
      alert(`There was an error loading your saved projects. Details: ${error.message}`);
    }
  }
}
