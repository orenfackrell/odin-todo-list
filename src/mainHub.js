import { Project, allProjects } from './project';

const mainHub = document.getElementById('content-hub');

export function createProjectDiv(project) {
  const projectDiv = document.createElement('div');
  const projectClass = `${project.title}`.replace(/\s+/g, '');
  projectDiv.className = `${projectClass}-div`;

  const projectInfo = document.createElement('div');
  projectInfo.className = 'project-info';

  const projectTitle = document.createElement('div');
  projectTitle.textContent = `${project.title}`;

  const projectDate = document.createElement('div');
  projectDate.textContent = `${project.dueDate}`;

  const projectProgress = document.createElement('div');
  projectProgress.className = 'project-progress';
  projectProgress.textContent = `${project.calculateProgress || 0}%`;

  projectInfo.appendChild(projectTitle);
  projectInfo.appendChild(projectDate);
  projectDiv.appendChild(projectInfo);
  projectDiv.appendChild(projectProgress);

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

export function updateNavBar() {
  const contentHub = document.querySelector('#content-hub');
  const navBar = document.querySelector('.nav-bar');
  contentHub.removeChild(navBar);

  createNavBar();
}

export function showCurrentProject(project) {
  const currentProject = document.createElement('div');
  currentProject.className = 'current-project';

  const title = document.createElement('h3');
  title.textContent = 'Current Project';
  currentProject.appendChild(title);

  const headerInfo = document.createElement('div');
  headerInfo.className = 'project-header';

  headerInfo.textContent =
    `${project.title}, ${project.dueDate}, ${project.calculateProgress()}` || '';
  headerInfo.style.borderColor = project.priority;
  mainHub.appendChild(headerInfo);

  const todoItemsDiv = document.createElement('div');
  todoItemsDiv.className = 'project-task';
  project.todoItems.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.title}, ${item.dueDate}, ${item.complete}`;
    todoItemsDiv.appendChild(itemDiv);
  });
  currentProject.appendChild(headerInfo);
  currentProject.appendChild(todoItemsDiv);
  mainHub.appendChild(currentProject);
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
