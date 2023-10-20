import { showCurrentProject, updateNavBar } from './mainHub';
import popupMenu from './popupMenu';
import { Project, allProjects, saveProjectsLocalStorage } from './project';

const { body } = document;

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
}

function createProject() {
  const menuTitle = 'Create Todo Project';
  const fields = [
    { label: 'Name:', name: 'name', type: 'text' },
    { label: 'Description:', name: 'description', type: 'text' },
    { label: 'Start Date:', name: 'start-date', type: 'date' },
    { label: 'Due Date:', name: 'due-date', type: 'date' },
    { label: 'Priority:', name: 'priority', type: 'range' },
    { label: 'Notes:', name: 'notes', type: 'text' },
  ];

  const popup = popupMenu(menuTitle, fields);
  body.appendChild(popup);
  popup.style.display = 'block';

  const title = document.querySelector('#name');
  const description = document.querySelector('#description');
  const startDate = document.querySelector('#start-date');
  const dueDate = document.querySelector('#due-date');
  const priority = document.querySelector('#priority');
  const notes = document.querySelector('#notes');

  // default start date to current date
  const currentDate = new Date().toISOString().slice(0, 10);
  startDate.value = currentDate;

  const cancelButton = document.querySelector('.cancel-button');
  cancelButton.addEventListener('click', () => {
    const buttonWrapper = document.querySelector('.button-wrapper');
    const submitButton = document.querySelector('.submit-button');

    const confirmationMessage = document.createElement('div');
    confirmationMessage.className = 'confirmation-message';

    const spanElement = document.createElement('span');
    spanElement.textContent = 'Are you sure?';

    const buttonWrapperDiv = document.createElement('div');
    buttonWrapperDiv.className = 'button-wrapper';

    const confirmButton = document.createElement('button');
    confirmButton.className = 'confirm-button';
    confirmButton.textContent = 'Confirm';

    const cancelConfirmButton = document.createElement('button');
    cancelConfirmButton.className = 'cancel-confirm-button';
    cancelConfirmButton.textContent = 'Cancel';

    confirmationMessage.appendChild(spanElement);

    buttonWrapperDiv.appendChild(confirmButton);
    buttonWrapperDiv.appendChild(cancelConfirmButton);

    confirmationMessage.appendChild(buttonWrapperDiv);
    while (buttonWrapper.firstChild) {
      buttonWrapper.removeChild(buttonWrapper.firstChild);
    }
    buttonWrapper.appendChild(confirmationMessage);
    confirmButton.addEventListener('click', () => {
      body.removeChild(popup);
    });
    cancelConfirmButton.addEventListener('click', () => {
      while (buttonWrapper.firstChild) {
        buttonWrapper.removeChild(buttonWrapper.firstChild);
      }
      buttonWrapper.appendChild(cancelButton);
      buttonWrapper.appendChild(submitButton);
    });
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // create a new project and make it the active one
    const newProject = new Project(
      title.value,
      description.value,
      formatDate(dueDate.value),
      formatDate(startDate.value),
      priority.value,
      notes.value,
    );

    // set all selected values to false
    const previouslySelectedProject = allProjects.find((project) => project.selected);
    if (previouslySelectedProject) {
      // If a previously selected project was found, set its 'selected' property to false
      previouslySelectedProject.selected = false;
    }

    // have only the newest project be selected
    newProject.selected = true;
    // add the new item to all projects
    allProjects.push(newProject);
    console.log(allProjects);
    // remove the previous current project display
    const contentHub = document.querySelector('#content-hub');
    const previousCurrentDiv = document.querySelector('.current-project');
    contentHub.removeChild(previousCurrentDiv);

    body.removeChild(popup);
    showCurrentProject(newProject);
    saveProjectsLocalStorage();
    updateNavBar();
  });
}

export default createProject;
