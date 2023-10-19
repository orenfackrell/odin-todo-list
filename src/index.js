import { createMainHub, createNavBar, showCurrentProject } from './mainHub';
import { Project, allProjects, loadProjectsFromLocalStorage } from './project';
import { TodoItem } from './todoItem';
import menuFunctions from './buttonFunc';

// Create dummy projects
const project1 = new Project('Dummy Project', 'Placeholder description', '20 - 10 - 2023');
const todoItem1 = new TodoItem(
  'Todo Item 1',
  'Placeholder description',
  '20 - 10 - 2023',
  '20 - 10 - 2023',
  '70%',
  'some notes and shit',
  '',
);
project1.addTodoItem(todoItem1);
allProjects.push(project1);
project1.selected = true;

const currentProject = allProjects.find((project) => project.selected);

document.addEventListener('DOMContentLoaded', () => {
  loadProjectsFromLocalStorage();
  createNavBar();
  showCurrentProject(currentProject);
  menuFunctions();
});
