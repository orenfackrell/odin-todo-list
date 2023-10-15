import { createMainHub, createNavBar, showCurrentProject } from './mainHub';
import { Project, allProjects } from './project';
import { TodoItem } from './todoItem';
import menuFunctions from './buttonFunc';

// Create dummy projects
const project1 = new Project('Project 1', 'Placeholder description', '20 - 10 - 2023');
const project2 = new Project('Project 2', 'Placeholder description', '20 - 10 - 2023');
const todoItem1 = new TodoItem(
  'Todo Item 1',
  'Placeholder description',
  '20 - 10 - 2023',
  '20 - 10 - 2023',
  '70%',
  'some notes and shit',
  '',
);
const todoItem2 = new TodoItem('Todo Item 2');
project1.addTodoItem(todoItem1);
project2.addTodoItem(todoItem2);
allProjects.push(project1, project2);
project1.selected = true;

console.log(allProjects);

document.addEventListener('DOMContentLoaded', () => {
  createNavBar();
  showCurrentProject(project1);
  menuFunctions();
});
