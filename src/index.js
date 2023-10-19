import { createMainHub, createNavBar, showCurrentProject } from './mainHub';
import { Project, allProjects, loadProjectsFromLocalStorage } from './project';
import { TodoItem } from './todoItem';
import menuFunctions from './buttonFunc';

// Create dummy projects
for (let i = 0; i < 6; i += 1) {
  const newProject = new Project(`Dummy Project ${i}`, 'Placeholder description', '20 - 10 - 2023');
  for (let j = 0; j < 4; j += 1) {
    const todoItem = new TodoItem(
      `Todo Item ${j}`,
      'Placeholder description',
      '2 - 10 - 2023',
      `${j}*4 - 10 - 2023`,
      '70%',
      'some notes and shit',
      '',
    );
    newProject.addTodoItem(todoItem);
  }
  allProjects.push(newProject);

  if (i === 6) {
    newProject.selected = true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadProjectsFromLocalStorage();
  createNavBar();
  const currentProject = allProjects.find((project) => project.selected);

  showCurrentProject(currentProject);
  menuFunctions();
});
