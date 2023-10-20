import { Project, allProjects, saveProjectsLocalStorage } from './project';

const mainHub = document.getElementById('content-hub');

// For the navBar

export function createProjectDiv(project) {
  if (!project) {
    return;
  }
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
  projectProgress.textContent = `${project.calculateProgress() || 0}%`;

  projectInfo.appendChild(projectTitle);
  projectInfo.appendChild(projectDate);
  projectDiv.appendChild(projectInfo);
  projectDiv.appendChild(projectProgress);

  projectDiv.style.borderColor = project.priority;
  return projectDiv;
}

function setupProjectDivClickHandlers() {
  const navBar = document.querySelector('.nav-bar');
  const projectDivs = Array.from(navBar.children).filter((element) => element.tagName === 'DIV');

  // Get only the unselected projects
  const unselectedProjects = allProjects.filter((project) => !project.selected);

  projectDivs.forEach((div, index) => {
    let i = index;
    div.addEventListener('click', () => {
      if (i >= 0 && i < unselectedProjects.length) {
        allProjects.forEach((project) => {
          if (project === unselectedProjects[i]) {
            project.selected = true;
          } else {
            project.selected = false;
          }
        });

        saveProjectsLocalStorage();
        updateNavBar();
        updateCurrentProject();
      }
    });
  });
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
  setupProjectDivClickHandlers();
}

export function updateNavBar() {
  const contentHub = document.querySelector('#content-hub');
  const navBar = document.querySelector('.nav-bar');
  contentHub.removeChild(navBar);

  createNavBar();
  setupProjectDivClickHandlers();
}

// For the current project

export function showCurrentProject(project) {
  const currentProject = document.createElement('div');
  currentProject.className = 'current-project';

  const title = document.createElement('h3');
  title.textContent = 'Current Project';
  currentProject.appendChild(title);

  const headerInfo = document.createElement('div');
  headerInfo.className = 'project-header';

  const projectTitle = document.createElement('div');
  projectTitle.textContent = `${project.title}`;

  const projectDate = document.createElement('div');
  projectDate.textContent = `${project.dueDate}`;

  const projectProgress = document.createElement('div');
  projectProgress.className = 'project-progress';
  projectProgress.textContent = `${project.calculateProgress() || 0}%`;

  const todoItemsDiv = document.createElement('div');
  todoItemsDiv.className = 'project-task';
  project.todoItems.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.title}, ${item.dueDate}, ${item.priority}`;

    const checkbox = document.createElement('i');
    checkbox.className = 'ph ph-square';

    itemDiv.appendChild(checkbox);
    todoItemsDiv.appendChild(itemDiv);
  });

  headerInfo.appendChild(projectTitle);
  headerInfo.appendChild(projectDate);
  headerInfo.appendChild(projectProgress);
  currentProject.appendChild(headerInfo);
  currentProject.appendChild(todoItemsDiv);
  mainHub.appendChild(currentProject);
}

export function updateCurrentProject() {
  const contentHub = document.querySelector('#content-hub');
  const currentProject = document.querySelector('.current-project');
  contentHub.removeChild(currentProject);

  const selectedProject = allProjects.find((project) => project.selected);
  showCurrentProject(selectedProject);
}
