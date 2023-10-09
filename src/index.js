import createMainHub from './mainHub';
import { Project, allProjects } from './project';
import { TodoItem } from './todoItem';
import menuFunctions from './buttonFunc';

// Create dummy projects
const project1 = new Project('Project 1');
const project2 = new Project('Project 2');
const todoItem1 = new TodoItem('Todo Item 1');
const todoItem2 = new TodoItem('Todo Item 2');
project1.addTodoItem(todoItem1);
project2.addTodoItem(todoItem2);
allProjects.push(project1, project2);

document.addEventListener('DOMContentLoaded', () => {
  // UNCOMMENT ME OUT -> to remove the error being thrown by the empty projects
  // createMainHub();
  menuFunctions();
});
