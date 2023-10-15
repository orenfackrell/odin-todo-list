// Import from other modules
import {
  createMainHub,
  createNavBar,
  createProjectDiv,
  showCurrentProject,
  updateNavBar,
} from './mainHub';
import { Project, allProjects } from './project';
import { TodoItem } from './todoItem';

// Create global variables
const remove = document.querySelector('.remove');
const calendar = document.querySelector('.calendar');
const lightDark = document.querySelector('.light-dark');
const changePalette = document.querySelector('.change-palette');
const addItem = document.querySelector('.add-item');
const addProject = document.querySelector('.add-project');
const { body } = document;

// Create new date object or getting current date.

function menuPopUp(menuTitle, fields) {
  const popup = document.createElement('div');
  popup.className = 'popup';

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const header = document.createElement('h3');
  header.textContent = `${menuTitle}`;

  const addButton = document.createElement('button');
  addButton.className = 'submit-button';
  addButton.type = 'submit';
  addButton.textContent = 'Add';

  const cancelButton = document.createElement('button');
  cancelButton.className = 'cancel-button';
  cancelButton.type = 'button';
  cancelButton.textContent = 'Cancel';

  const form = document.createElement('form');

  fields.forEach((field) => {
    const inputLabelPair = document.createElement('div');
    inputLabelPair.className = 'input-label-pair';

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', `${field.name}`);

    let input;

    switch (field.name) {
      case 'description':
        input = document.createElement('textarea');
        input.rows = '2';
        input.cols = '35';
        input.id = field.name;
        input.required = true;
        break;
      case 'notes':
        input = document.createElement('textarea');
        input.rows = '3';
        input.cols = '35';
        input.id = field.name;
        input.required = false;
        break;
      default:
        input = document.createElement('input');
        input.type = `${field.type}`;
        input.id = field.name;
        input.required = true;
    }

    inputLabelPair.appendChild(label);
    inputLabelPair.appendChild(input);

    form.appendChild(inputLabelPair);
  });

  const buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'button-wrapper';
  buttonWrapper.appendChild(cancelButton);
  buttonWrapper.appendChild(addButton);
  form.appendChild(buttonWrapper);

  popupContent.appendChild(header);
  popupContent.appendChild(form);
  popup.appendChild(popupContent);

  return popup;
}

function removeCurrentItem() {
  // add a way for the currently open todo item to be recorded, then simply remove the active one
}

function openCalendar() {
  // open up a calendar which shows all of the todo items on their due date with their urgency shown
}

function toggleTheme() {
  // invert light / dark themes
}

function changeColours() {
  // give a menu for the user to give main + two accent colours to replace those on the page
}

function createItem() {
  const menuTitle = 'Create Todo Item';
  const fields = [
    { label: 'Name:', name: 'name', type: 'text' },
    { label: 'Description:', name: 'description', type: 'text' },
    { label: 'Start Date:', name: 'start-date', type: 'date' },
    { label: 'Due Date:', name: 'due-date', type: 'date' },
    { label: 'Priority:', name: 'priority', type: 'range' },
    { label: 'Notes:', name: 'notes', type: 'text' },
  ];

  const popup = menuPopUp(menuTitle, fields);
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

  const addButton = document.querySelector('.submit-button');
  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newItem = new TodoItem(
      title.value,
      description.value,
      dueDate.value,
      startDate.value,
      priority.value,
      notes.value,
    );
    const currentProject = allProjects.find((project) => project.selected);
    currentProject.todoItems.push(newItem);
    body.removeChild(popup);
  });
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

  const popup = menuPopUp(menuTitle, fields);
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

  const addButton = document.querySelector('.submit-button');
  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    // create a new project and make it the active one
    const newProject = new Project(
      title.value,
      description.value,
      dueDate.value,
      startDate.value,
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

    body.removeChild(popup);
    showCurrentProject(newProject);
    updateNavBar();
  });
}

function menuFunctions() {
  remove.addEventListener('click', () => {
    removeCurrentItem();
  });
  calendar.addEventListener('click', () => {
    openCalendar();
  });
  lightDark.addEventListener('click', () => {
    toggleTheme();
  });
  changePalette.addEventListener('click', () => {
    changeColours();
  });
  addItem.addEventListener('click', () => {
    createItem();
  });
  addProject.addEventListener('click', () => {
    createProject();
  });
}

export default menuFunctions;
