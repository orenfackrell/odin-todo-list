import { Project, allProjects } from './project';

const mainHub = document.getElementById('content-hub');

export function createProjectDiv(project) {
  const projectDiv = document.createElement('div');
  projectDiv.className = `${project.title}-div`;
  projectDiv.textContent = `${project.title}, ${project.dueDate}, ${
    project.calculateProgress() || 0
  }%`;
  projectDiv.style.borderColor = project.priority;
  return projectDiv;
}

export function createNavBar() {
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  const title = document.createElement('h3');
  title.textContent = 'Projects';
  navBar.appendChild(title);

  allProjects.forEach((project) => {
    if (!project.selected) {
      const projectDiv = createProjectDiv(project);
      navBar.appendChild(projectDiv);
    }
  });

  mainHub.appendChild(navBar);
}

export function showCurrentProject(project) {
  const headerInfo = document.createElement('div');
  headerInfo.textContent = `${project.title}, ${project.dueDate}, ${project.calculateProgress()}`;
  headerInfo.style.borderColor = project.priority;
  mainHub.appendChild(headerInfo);

  const todoItemsDiv = document.createElement('div');
  project.todoItems.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.title}, ${item.dueDate}, ${item.progress}`;
    todoItemsDiv.appendChild(itemDiv);
  });
  mainHub.appendChild(todoItemsDiv);
}

export function createMainHub() {
  mainHub.style.display = 'flex';

  const navBar = createNavBar();
  navBar.style.flex = '1';
  mainHub.appendChild(navBar);

  const projectDiv = document.createElement('div');
  projectDiv.style.flex = '4';
  mainHub.appendChild(projectDiv);

  const selectedProject = allProjects.find((project) => project.selected);
  if (selectedProject) {
    showCurrentProject(selectedProject);
  }
}
