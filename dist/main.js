/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buttonFunc.js":
/*!***************************!*\
  !*** ./src/buttonFunc.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/calendar.js");
/* harmony import */ var _createItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createItem */ "./src/createItem.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _editTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTheme */ "./src/editTheme.js");
/* harmony import */ var _mainHub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainHub */ "./src/mainHub.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _removeItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./removeItem */ "./src/removeItem.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
// Import from other modules









// Create global variables
const remove = document.querySelector('.remove');
const calendar = document.querySelector('.calendar');
const lightDark = document.querySelector('.light-dark');
const changePalette = document.querySelector('.change-palette');
const addItem = document.querySelector('.add-item');
const addProject = document.querySelector('.add-project');

function menuFunctions() {
  remove.addEventListener('click', () => {
    (0,_removeItem__WEBPACK_IMPORTED_MODULE_6__["default"])();
  });
  calendar.addEventListener('click', () => {
    (0,_calendar__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  lightDark.addEventListener('click', () => {
    (0,_editTheme__WEBPACK_IMPORTED_MODULE_3__.toggleTheme)();
  });
  changePalette.addEventListener('click', () => {
    (0,_editTheme__WEBPACK_IMPORTED_MODULE_3__.changeColours)();
  });
  addItem.addEventListener('click', () => {
    (0,_createItem__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  addProject.addEventListener('click', () => {
    (0,_createProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuFunctions);


/***/ }),

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://github.com/lashaNoz/Calendar

const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector('.days');

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  document.querySelector('.date h1').innerHTML = months[date.getMonth()];

  document.querySelector('.date p').innerHTML = new Date().toDateString();

  let days = '';

  for (let x = firstDayIndex; x > 0; x -= 1) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i += 1) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j += 1) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

function openCalendar() {
  const calendarContainer = document.querySelector('.container');
  if (calendarContainer.style.display === 'none') {
    calendarContainer.style.display = 'block';
  } else {
    calendarContainer.style.display = 'none';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openCalendar);


/***/ }),

/***/ "./src/createItem.js":
/*!***************************!*\
  !*** ./src/createItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popupMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupMenu */ "./src/popupMenu.js");
/* harmony import */ var _mainHub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainHub */ "./src/mainHub.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");





const { body } = document;
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

  const popup = (0,_popupMenu__WEBPACK_IMPORTED_MODULE_0__["default"])(menuTitle, fields);
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
    const newItem = new _todoItem__WEBPACK_IMPORTED_MODULE_3__.TodoItem(
      title.value,
      description.value,
      dueDate.value,
      startDate.value,
      priority.value,
      notes.value,
    );
    const currentProject = _project__WEBPACK_IMPORTED_MODULE_2__.allProjects.find((project) => project.selected);
    currentProject.todoItems.push(newItem);
    body.removeChild(popup);
    (0,_mainHub__WEBPACK_IMPORTED_MODULE_1__.updateCurrentProject)();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createItem);


/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainHub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainHub */ "./src/mainHub.js");
/* harmony import */ var _popupMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupMenu */ "./src/popupMenu.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




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

  const popup = (0,_popupMenu__WEBPACK_IMPORTED_MODULE_1__["default"])(menuTitle, fields);
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
    const newProject = new _project__WEBPACK_IMPORTED_MODULE_2__.Project(
      title.value,
      description.value,
      formatDate(dueDate.value),
      formatDate(startDate.value),
      priority.value,
      notes.value,
    );

    // set all selected values to false
    const previouslySelectedProject = _project__WEBPACK_IMPORTED_MODULE_2__.allProjects.find((project) => project.selected);
    if (previouslySelectedProject) {
      // If a previously selected project was found, set its 'selected' property to false
      previouslySelectedProject.selected = false;
    }

    // have only the newest project be selected
    newProject.selected = true;
    // add the new item to all projects
    _project__WEBPACK_IMPORTED_MODULE_2__.allProjects.push(newProject);
    console.log(_project__WEBPACK_IMPORTED_MODULE_2__.allProjects);
    // remove the previous current project display
    const contentHub = document.querySelector('#content-hub');
    const previousCurrentDiv = document.querySelector('.current-project');
    contentHub.removeChild(previousCurrentDiv);

    body.removeChild(popup);
    (0,_mainHub__WEBPACK_IMPORTED_MODULE_0__.showCurrentProject)(newProject);
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.saveProjectsLocalStorage)();
    (0,_mainHub__WEBPACK_IMPORTED_MODULE_0__.updateNavBar)();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/editTheme.js":
/*!**************************!*\
  !*** ./src/editTheme.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applySavedTheme: () => (/* binding */ applySavedTheme),
/* harmony export */   changeColours: () => (/* binding */ changeColours),
/* harmony export */   toggleTheme: () => (/* binding */ toggleTheme)
/* harmony export */ });
/* harmony import */ var _popupMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupMenu */ "./src/popupMenu.js");


const { body } = document;

function toggleTheme() {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');

  body.style.removeProperty('background-color');
  body.style.removeProperty('color');
  const allElements = document.querySelectorAll('*');
  allElements.forEach((element) => {
    element.style.removeProperty('border-color');
  });
}

function changeColours() {
  const menuTitle = 'Change Colours';
  const fields = [
    { label: 'Background Colour:', name: 'background-colour', type: 'color' },
    { label: 'Text Colour:', name: 'text-colour', type: 'color' },
    { label: 'Accent Colour:', name: 'accent-colour', type: 'color' },
  ];

  const popup = (0,_popupMenu__WEBPACK_IMPORTED_MODULE_0__["default"])(menuTitle, fields);
  body.appendChild(popup);
  popup.style.display = 'block';

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

    const backgroundColor = document.querySelector('#background-colour').value;
    const textColor = document.querySelector('#text-colour').value;
    const accentColor = document.querySelector('#accent-colour').value;

    // Save the colours to localStorage
    localStorage.setItem('background-colour', backgroundColor);
    localStorage.setItem('text-colour', textColor);
    localStorage.setItem('accent-colour', accentColor);

    // Apply the colours
    body.style.backgroundColor = backgroundColor;
    body.style.color = textColor;
    const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
      // Check if the element is not part of the calendar
      if (!element.classList.contains('container')) {
        element.style.borderColor = accentColor;
      }
    });

    // Close the popup
    body.removeChild(popup);
  });
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
  }
}


/***/ }),

/***/ "./src/mainHub.js":
/*!************************!*\
  !*** ./src/mainHub.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavBar: () => (/* binding */ createNavBar),
/* harmony export */   createProjectDiv: () => (/* binding */ createProjectDiv),
/* harmony export */   showCurrentProject: () => (/* binding */ showCurrentProject),
/* harmony export */   updateCurrentProject: () => (/* binding */ updateCurrentProject),
/* harmony export */   updateNavBar: () => (/* binding */ updateNavBar)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const mainHub = document.getElementById('content-hub');

// For the navBar

function createProjectDiv(project) {
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
  const unselectedProjects = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.filter((project) => !project.selected);

  projectDivs.forEach((div, index) => {
    let i = index;
    div.addEventListener('click', () => {
      if (i >= 0 && i < unselectedProjects.length) {
        _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project) => {
          if (project === unselectedProjects[i]) {
            project.selected = true;
          } else {
            project.selected = false;
          }
        });

        (0,_project__WEBPACK_IMPORTED_MODULE_0__.saveProjectsLocalStorage)();
        updateNavBar();
        updateCurrentProject();
      }
    });
  });
}

function createNavBar() {
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  const title = document.createElement('h3');
  title.textContent = 'Projects';
  navBar.appendChild(title);

  _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project) => {
    if (!project.selected) {
      const projectDiv = createProjectDiv(project);
      navBar.appendChild(projectDiv);
    }
  });

  mainHub.appendChild(navBar);
  setupProjectDivClickHandlers();
}

function updateNavBar() {
  const contentHub = document.querySelector('#content-hub');
  const navBar = document.querySelector('.nav-bar');
  contentHub.removeChild(navBar);

  createNavBar();
  setupProjectDivClickHandlers();
}

// For the current project

function showCurrentProject(project) {
  const currentProject = document.createElement('div');
  currentProject.className = 'current-project';

  const title = document.createElement('h3');
  title.textContent = 'Current Project';
  currentProject.appendChild(title);

  const headerInfo = document.createElement('div');
  headerInfo.className = 'project-header';

  headerInfo.textContent =
    `${project.title}, ${project.dueDate}, ${project.calculateProgress()}%` || '0%';
  headerInfo.style.borderColor = project.priority;
  mainHub.appendChild(headerInfo);

  const todoItemsDiv = document.createElement('div');
  todoItemsDiv.className = 'project-task';
  project.todoItems.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.title}, ${item.dueDate}, ${item.priority}`;
    todoItemsDiv.appendChild(itemDiv);
  });
  currentProject.appendChild(headerInfo);
  currentProject.appendChild(todoItemsDiv);
  mainHub.appendChild(currentProject);
}

function updateCurrentProject() {
  const contentHub = document.querySelector('#content-hub');
  const currentProject = document.querySelector('.current-project');
  contentHub.removeChild(currentProject);

  const selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.find((project) => project.selected);
  showCurrentProject(selectedProject);
}


/***/ }),

/***/ "./src/popupMenu.js":
/*!**************************!*\
  !*** ./src/popupMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function popupMenu(menuTitle, fields) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupMenu);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   loadProjectsFromLocalStorage: () => (/* binding */ loadProjectsFromLocalStorage),
/* harmony export */   saveProjectsLocalStorage: () => (/* binding */ saveProjectsLocalStorage)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
// ES6 module syntax


let allProjects = [];

class Project {
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
    if (todoItem instanceof _todoItem__WEBPACK_IMPORTED_MODULE_0__.TodoItem) {
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

function saveProjectsLocalStorage() {
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
}

function loadProjectsFromLocalStorage() {
  const savedProjects = localStorage.getItem('allProjects');

  if (savedProjects) {
    try {
      const parsedData = JSON.parse(savedProjects);

      // Additional validation to ensure parsedData is an array
      if (!Array.isArray(parsedData)) {
        throw new Error('Loaded data is not an array');
      }

      allProjects = parsedData.map((projectData) => Object.assign(new Project(), projectData));
    } catch (error) {
      alert(`There was an error loading your saved projects. Details: ${error.message}`);
    }
  }
}


/***/ }),

/***/ "./src/removeItem.js":
/*!***************************!*\
  !*** ./src/removeItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainHub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainHub */ "./src/mainHub.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



function removeCurrentItem() {
  const confirmation = confirm('Are you sure you want to delete the current project?');
  if (confirmation) {
    const selectedProjectIndex = _project__WEBPACK_IMPORTED_MODULE_1__.allProjects.findIndex((project) => project.selected);
    if (selectedProjectIndex !== -1) {
      _project__WEBPACK_IMPORTED_MODULE_1__.allProjects.splice(selectedProjectIndex, 1);
      _project__WEBPACK_IMPORTED_MODULE_1__.allProjects.splice(selectedProjectIndex, 1);
      const projectWithGreatestPriority = _project__WEBPACK_IMPORTED_MODULE_1__.allProjects.reduce((prev, curr) =>
        prev.priority > curr.priority ? prev : curr,
      );
      projectWithGreatestPriority.selected = true;

      (0,_mainHub__WEBPACK_IMPORTED_MODULE_0__.updateCurrentProject)();
      (0,_project__WEBPACK_IMPORTED_MODULE_1__.saveProjectsLocalStorage)();

      (0,_mainHub__WEBPACK_IMPORTED_MODULE_0__.updateNavBar)();
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeCurrentItem);


/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoItem: () => (/* binding */ TodoItem),
/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem)
/* harmony export */ });
class TodoItem {
  constructor(title, description, dueDate, startDate, priority, notes, complete, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.startDate = startDate;
    this.priority = priority;
    this.notes = notes || '';
    this.complete = complete || false;
    this.project = project;
  }
}

function createTodoItem(
  title,
  description,
  dueDate,
  startDate,
  priority,
  notes,
  progress,
  project,
) {
  return new TodoItem(title, description, dueDate, startDate, priority, notes, progress, project);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainHub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainHub */ "./src/mainHub.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
/* harmony import */ var _buttonFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttonFunc */ "./src/buttonFunc.js");
/* harmony import */ var _editTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editTheme */ "./src/editTheme.js");






// Create dummy projects
for (let i = 0; i < 6; i += 1) {
  const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(`Dummy Project ${i}`, 'Placeholder description', ' 30 - 9 - 2023');
  for (let j = 0; j < 4; j += 1) {
    const todoItem = new _todoItem__WEBPACK_IMPORTED_MODULE_2__.TodoItem(
      `Todo Item ${j}`,
      'Placeholder description',
      `${j * 4 + 1} - 10 - 2023`,
      `${j}*4 - 10 - 2023`,
      '70%',
      'some notes and shit',
      '',
    );
    newProject.addTodoItem(todoItem);
  }
  _project__WEBPACK_IMPORTED_MODULE_1__.allProjects.push(newProject);

  if (i === 6) {
    newProject.selected = true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  (0,_project__WEBPACK_IMPORTED_MODULE_1__.loadProjectsFromLocalStorage)();
  (0,_editTheme__WEBPACK_IMPORTED_MODULE_4__.applySavedTheme)();
  (0,_mainHub__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();
  const currentProject = _project__WEBPACK_IMPORTED_MODULE_1__.allProjects.find((project) => project.selected);

  (0,_mainHub__WEBPACK_IMPORTED_MODULE_0__.showCurrentProject)(currentProject);
  (0,_buttonFunc__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFOUIsTUFBTSxzREFBWTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEU7QUFDRztBQUN6QztBQUNHO0FBQ0s7O0FBRTlDO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIseUJBQXlCLDZDQUFPLGtCQUFrQixFQUFFO0FBQ3BELGtCQUFrQixPQUFPO0FBQ3pCLHlCQUF5QiwrQ0FBUTtBQUNqQyxtQkFBbUIsRUFBRTtBQUNyQjtBQUNBLFNBQVMsV0FBVztBQUNwQixTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFXOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzRUFBNEI7QUFDOUIsRUFBRSwyREFBZTtBQUNqQixFQUFFLHNEQUFZO0FBQ2QseUJBQXlCLGlEQUFXOztBQUVwQyxFQUFFLDREQUFrQjtBQUNwQixFQUFFLHVEQUFhO0FBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2J1dHRvbkZ1bmMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY3JlYXRlSXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2VkaXRUaGVtZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tYWluSHViLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3BvcHVwTWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3JlbW92ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgZnJvbSBvdGhlciBtb2R1bGVzXG5pbXBvcnQgb3BlbkNhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IGNyZWF0ZUl0ZW0gZnJvbSAnLi9jcmVhdGVJdGVtJztcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgeyBjaGFuZ2VDb2xvdXJzLCB0b2dnbGVUaGVtZSB9IGZyb20gJy4vZWRpdFRoZW1lJztcbmltcG9ydCB7IHVwZGF0ZUN1cnJlbnRQcm9qZWN0LCB1cGRhdGVOYXZCYXIsIHNob3dDdXJyZW50UHJvamVjdCB9IGZyb20gJy4vbWFpbkh1Yic7XG5pbXBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cywgc2F2ZVByb2plY3RzTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCByZW1vdmVDdXJyZW50SXRlbSBmcm9tICcuL3JlbW92ZUl0ZW0nO1xuaW1wb3J0IHsgVG9kb0l0ZW0gfSBmcm9tICcuL3RvZG9JdGVtJztcblxuLy8gQ3JlYXRlIGdsb2JhbCB2YXJpYWJsZXNcbmNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUnKTtcbmNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyJyk7XG5jb25zdCBsaWdodERhcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQtZGFyaycpO1xuY29uc3QgY2hhbmdlUGFsZXR0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtcGFsZXR0ZScpO1xuY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpO1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuXG5mdW5jdGlvbiBtZW51RnVuY3Rpb25zKCkge1xuICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQ3VycmVudEl0ZW0oKTtcbiAgfSk7XG4gIGNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5DYWxlbmRhcigpO1xuICB9KTtcbiAgbGlnaHREYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZVRoZW1lKCk7XG4gIH0pO1xuICBjaGFuZ2VQYWxldHRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNoYW5nZUNvbG91cnMoKTtcbiAgfSk7XG4gIGFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlSXRlbSgpO1xuICB9KTtcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVQcm9qZWN0KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51RnVuY3Rpb25zO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL2xhc2hhTm96L0NhbGVuZGFyXG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG5jb25zdCByZW5kZXJDYWxlbmRhciA9ICgpID0+IHtcbiAgZGF0ZS5zZXREYXRlKDEpO1xuXG4gIGNvbnN0IG1vbnRoRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzJyk7XG5cbiAgY29uc3QgbGFzdERheSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpO1xuXG4gIGNvbnN0IHByZXZMYXN0RGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDApLmdldERhdGUoKTtcblxuICBjb25zdCBmaXJzdERheUluZGV4ID0gZGF0ZS5nZXREYXkoKTtcblxuICBjb25zdCBsYXN0RGF5SW5kZXggPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERheSgpO1xuXG4gIGNvbnN0IG5leHREYXlzID0gNyAtIGxhc3REYXlJbmRleCAtIDE7XG5cbiAgY29uc3QgbW9udGhzID0gW1xuICAgICdKYW51YXJ5JyxcbiAgICAnRmVicnVhcnknLFxuICAgICdNYXJjaCcsXG4gICAgJ0FwcmlsJyxcbiAgICAnTWF5JyxcbiAgICAnSnVuZScsXG4gICAgJ0p1bHknLFxuICAgICdBdWd1c3QnLFxuICAgICdTZXB0ZW1iZXInLFxuICAgICdPY3RvYmVyJyxcbiAgICAnTm92ZW1iZXInLFxuICAgICdEZWNlbWJlcicsXG4gIF07XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUgaDEnKS5pbm5lckhUTUwgPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZSBwJykuaW5uZXJIVE1MID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcblxuICBsZXQgZGF5cyA9ICcnO1xuXG4gIGZvciAobGV0IHggPSBmaXJzdERheUluZGV4OyB4ID4gMDsgeCAtPSAxKSB7XG4gICAgZGF5cyArPSBgPGRpdiBjbGFzcz1cInByZXYtZGF0ZVwiPiR7cHJldkxhc3REYXkgLSB4ICsgMX08L2Rpdj5gO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFzdERheTsgaSArPSAxKSB7XG4gICAgaWYgKGkgPT09IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICYmIGRhdGUuZ2V0TW9udGgoKSA9PT0gbmV3IERhdGUoKS5nZXRNb250aCgpKSB7XG4gICAgICBkYXlzICs9IGA8ZGl2IGNsYXNzPVwidG9kYXlcIj4ke2l9PC9kaXY+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5cyArPSBgPGRpdj4ke2l9PC9kaXY+YDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBqID0gMTsgaiA8PSBuZXh0RGF5czsgaiArPSAxKSB7XG4gICAgZGF5cyArPSBgPGRpdiBjbGFzcz1cIm5leHQtZGF0ZVwiPiR7an08L2Rpdj5gO1xuICAgIG1vbnRoRGF5cy5pbm5lckhUTUwgPSBkYXlzO1xuICB9XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSAtIDEpO1xuICByZW5kZXJDYWxlbmRhcigpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gIHJlbmRlckNhbGVuZGFyKCk7XG59KTtcblxucmVuZGVyQ2FsZW5kYXIoKTtcblxuZnVuY3Rpb24gb3BlbkNhbGVuZGFyKCkge1xuICBjb25zdCBjYWxlbmRhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgaWYgKGNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIGNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlbkNhbGVuZGFyO1xuIiwiaW1wb3J0IHBvcHVwTWVudSBmcm9tICcuL3BvcHVwTWVudSc7XG5pbXBvcnQgeyB1cGRhdGVDdXJyZW50UHJvamVjdCB9IGZyb20gJy4vbWFpbkh1Yic7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gJy4vdG9kb0l0ZW0nO1xuXG5jb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuZnVuY3Rpb24gY3JlYXRlSXRlbSgpIHtcbiAgY29uc3QgbWVudVRpdGxlID0gJ0NyZWF0ZSBUb2RvIEl0ZW0nO1xuICBjb25zdCBmaWVsZHMgPSBbXG4gICAgeyBsYWJlbDogJ05hbWU6JywgbmFtZTogJ25hbWUnLCB0eXBlOiAndGV4dCcgfSxcbiAgICB7IGxhYmVsOiAnRGVzY3JpcHRpb246JywgbmFtZTogJ2Rlc2NyaXB0aW9uJywgdHlwZTogJ3RleHQnIH0sXG4gICAgeyBsYWJlbDogJ1N0YXJ0IERhdGU6JywgbmFtZTogJ3N0YXJ0LWRhdGUnLCB0eXBlOiAnZGF0ZScgfSxcbiAgICB7IGxhYmVsOiAnRHVlIERhdGU6JywgbmFtZTogJ2R1ZS1kYXRlJywgdHlwZTogJ2RhdGUnIH0sXG4gICAgeyBsYWJlbDogJ1ByaW9yaXR5OicsIG5hbWU6ICdwcmlvcml0eScsIHR5cGU6ICdyYW5nZScgfSxcbiAgICB7IGxhYmVsOiAnTm90ZXM6JywgbmFtZTogJ25vdGVzJywgdHlwZTogJ3RleHQnIH0sXG4gIF07XG5cbiAgY29uc3QgcG9wdXAgPSBwb3B1cE1lbnUobWVudVRpdGxlLCBmaWVsZHMpO1xuICBib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICBjb25zdCBzdGFydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtZGF0ZScpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJyk7XG5cbiAgLy8gZGVmYXVsdCBzdGFydCBkYXRlIHRvIGN1cnJlbnQgZGF0ZVxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gIHN0YXJ0RGF0ZS52YWx1ZSA9IGN1cnJlbnREYXRlO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnV0dG9uJyk7XG5cbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXdyYXBwZXInKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ1dHRvbicpO1xuXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2UuY2xhc3NOYW1lID0gJ2NvbmZpcm1hdGlvbi1tZXNzYWdlJztcblxuICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW5FbGVtZW50LnRleHRDb250ZW50ID0gJ0FyZSB5b3Ugc3VyZT8nO1xuXG4gICAgY29uc3QgYnV0dG9uV3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbldyYXBwZXJEaXYuY2xhc3NOYW1lID0gJ2J1dHRvbi13cmFwcGVyJztcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLmNsYXNzTmFtZSA9ICdjb25maXJtLWJ1dHRvbic7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcblxuICAgIGNvbnN0IGNhbmNlbENvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxDb25maXJtQnV0dG9uLmNsYXNzTmFtZSA9ICdjYW5jZWwtY29uZmlybS1idXR0b24nO1xuICAgIGNhbmNlbENvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2UuYXBwZW5kQ2hpbGQoc3BhbkVsZW1lbnQpO1xuXG4gICAgYnV0dG9uV3JhcHBlckRpdi5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcbiAgICBidXR0b25XcmFwcGVyRGl2LmFwcGVuZENoaWxkKGNhbmNlbENvbmZpcm1CdXR0b24pO1xuXG4gICAgY29uZmlybWF0aW9uTWVzc2FnZS5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyRGl2KTtcbiAgICB3aGlsZSAoYnV0dG9uV3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICBidXR0b25XcmFwcGVyLnJlbW92ZUNoaWxkKGJ1dHRvbldyYXBwZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY29uZmlybWF0aW9uTWVzc2FnZSk7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQocG9wdXApO1xuICAgIH0pO1xuICAgIGNhbmNlbENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB3aGlsZSAoYnV0dG9uV3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgIGJ1dHRvbldyYXBwZXIucmVtb3ZlQ2hpbGQoYnV0dG9uV3JhcHBlci5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgVG9kb0l0ZW0oXG4gICAgICB0aXRsZS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgZHVlRGF0ZS52YWx1ZSxcbiAgICAgIHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgbm90ZXMudmFsdWUsXG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3Quc2VsZWN0ZWQpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKG5ld0l0ZW0pO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQocG9wdXApO1xuICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJdGVtO1xuIiwiaW1wb3J0IHsgc2hvd0N1cnJlbnRQcm9qZWN0LCB1cGRhdGVOYXZCYXIgfSBmcm9tICcuL21haW5IdWInO1xuaW1wb3J0IHBvcHVwTWVudSBmcm9tICcuL3BvcHVwTWVudSc7XG5pbXBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cywgc2F2ZVByb2plY3RzTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RGF0ZSgpfSAtICR7ZGF0ZS5nZXRNb250aCgpICsgMX0gLSAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBjb25zdCBtZW51VGl0bGUgPSAnQ3JlYXRlIFRvZG8gUHJvamVjdCc7XG4gIGNvbnN0IGZpZWxkcyA9IFtcbiAgICB7IGxhYmVsOiAnTmFtZTonLCBuYW1lOiAnbmFtZScsIHR5cGU6ICd0ZXh0JyB9LFxuICAgIHsgbGFiZWw6ICdEZXNjcmlwdGlvbjonLCBuYW1lOiAnZGVzY3JpcHRpb24nLCB0eXBlOiAndGV4dCcgfSxcbiAgICB7IGxhYmVsOiAnU3RhcnQgRGF0ZTonLCBuYW1lOiAnc3RhcnQtZGF0ZScsIHR5cGU6ICdkYXRlJyB9LFxuICAgIHsgbGFiZWw6ICdEdWUgRGF0ZTonLCBuYW1lOiAnZHVlLWRhdGUnLCB0eXBlOiAnZGF0ZScgfSxcbiAgICB7IGxhYmVsOiAnUHJpb3JpdHk6JywgbmFtZTogJ3ByaW9yaXR5JywgdHlwZTogJ3JhbmdlJyB9LFxuICAgIHsgbGFiZWw6ICdOb3RlczonLCBuYW1lOiAnbm90ZXMnLCB0eXBlOiAndGV4dCcgfSxcbiAgXTtcblxuICBjb25zdCBwb3B1cCA9IHBvcHVwTWVudShtZW51VGl0bGUsIGZpZWxkcyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1kYXRlJyk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcblxuICAvLyBkZWZhdWx0IHN0YXJ0IGRhdGUgdG8gY3VycmVudCBkYXRlXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgc3RhcnREYXRlLnZhbHVlID0gY3VycmVudERhdGU7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idXR0b24nKTtcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXdyYXBwZXInKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ1dHRvbicpO1xuXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2UuY2xhc3NOYW1lID0gJ2NvbmZpcm1hdGlvbi1tZXNzYWdlJztcblxuICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW5FbGVtZW50LnRleHRDb250ZW50ID0gJ0FyZSB5b3Ugc3VyZT8nO1xuXG4gICAgY29uc3QgYnV0dG9uV3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbldyYXBwZXJEaXYuY2xhc3NOYW1lID0gJ2J1dHRvbi13cmFwcGVyJztcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLmNsYXNzTmFtZSA9ICdjb25maXJtLWJ1dHRvbic7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcblxuICAgIGNvbnN0IGNhbmNlbENvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxDb25maXJtQnV0dG9uLmNsYXNzTmFtZSA9ICdjYW5jZWwtY29uZmlybS1idXR0b24nO1xuICAgIGNhbmNlbENvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2UuYXBwZW5kQ2hpbGQoc3BhbkVsZW1lbnQpO1xuXG4gICAgYnV0dG9uV3JhcHBlckRpdi5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcbiAgICBidXR0b25XcmFwcGVyRGl2LmFwcGVuZENoaWxkKGNhbmNlbENvbmZpcm1CdXR0b24pO1xuXG4gICAgY29uZmlybWF0aW9uTWVzc2FnZS5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyRGl2KTtcbiAgICB3aGlsZSAoYnV0dG9uV3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICBidXR0b25XcmFwcGVyLnJlbW92ZUNoaWxkKGJ1dHRvbldyYXBwZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY29uZmlybWF0aW9uTWVzc2FnZSk7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQocG9wdXApO1xuICAgIH0pO1xuICAgIGNhbmNlbENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB3aGlsZSAoYnV0dG9uV3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgIGJ1dHRvbldyYXBwZXIucmVtb3ZlQ2hpbGQoYnV0dG9uV3JhcHBlci5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCBtYWtlIGl0IHRoZSBhY3RpdmUgb25lXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgdGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGZvcm1hdERhdGUoZHVlRGF0ZS52YWx1ZSksXG4gICAgICBmb3JtYXREYXRlKHN0YXJ0RGF0ZS52YWx1ZSksXG4gICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgIG5vdGVzLnZhbHVlLFxuICAgICk7XG5cbiAgICAvLyBzZXQgYWxsIHNlbGVjdGVkIHZhbHVlcyB0byBmYWxzZVxuICAgIGNvbnN0IHByZXZpb3VzbHlTZWxlY3RlZFByb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNlbGVjdGVkKTtcbiAgICBpZiAocHJldmlvdXNseVNlbGVjdGVkUHJvamVjdCkge1xuICAgICAgLy8gSWYgYSBwcmV2aW91c2x5IHNlbGVjdGVkIHByb2plY3Qgd2FzIGZvdW5kLCBzZXQgaXRzICdzZWxlY3RlZCcgcHJvcGVydHkgdG8gZmFsc2VcbiAgICAgIHByZXZpb3VzbHlTZWxlY3RlZFByb2plY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBoYXZlIG9ubHkgdGhlIG5ld2VzdCBwcm9qZWN0IGJlIHNlbGVjdGVkXG4gICAgbmV3UHJvamVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgLy8gYWRkIHRoZSBuZXcgaXRlbSB0byBhbGwgcHJvamVjdHNcbiAgICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAvLyByZW1vdmUgdGhlIHByZXZpb3VzIGN1cnJlbnQgcHJvamVjdCBkaXNwbGF5XG4gICAgY29uc3QgY29udGVudEh1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWh1YicpO1xuICAgIGNvbnN0IHByZXZpb3VzQ3VycmVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QnKTtcbiAgICBjb250ZW50SHViLnJlbW92ZUNoaWxkKHByZXZpb3VzQ3VycmVudERpdik7XG5cbiAgICBib2R5LnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICBzaG93Q3VycmVudFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgc2F2ZVByb2plY3RzTG9jYWxTdG9yYWdlKCk7XG4gICAgdXBkYXRlTmF2QmFyKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0O1xuIiwiaW1wb3J0IHBvcHVwTWVudSBmcm9tICcuL3BvcHVwTWVudSc7XG5cbmNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7XG5cbiAgYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICBib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdjb2xvcicpO1xuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKTtcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JvcmRlci1jb2xvcicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbG91cnMoKSB7XG4gIGNvbnN0IG1lbnVUaXRsZSA9ICdDaGFuZ2UgQ29sb3Vycyc7XG4gIGNvbnN0IGZpZWxkcyA9IFtcbiAgICB7IGxhYmVsOiAnQmFja2dyb3VuZCBDb2xvdXI6JywgbmFtZTogJ2JhY2tncm91bmQtY29sb3VyJywgdHlwZTogJ2NvbG9yJyB9LFxuICAgIHsgbGFiZWw6ICdUZXh0IENvbG91cjonLCBuYW1lOiAndGV4dC1jb2xvdXInLCB0eXBlOiAnY29sb3InIH0sXG4gICAgeyBsYWJlbDogJ0FjY2VudCBDb2xvdXI6JywgbmFtZTogJ2FjY2VudC1jb2xvdXInLCB0eXBlOiAnY29sb3InIH0sXG4gIF07XG5cbiAgY29uc3QgcG9wdXAgPSBwb3B1cE1lbnUobWVudVRpdGxlLCBmaWVsZHMpO1xuICBib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idXR0b24nKTtcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXdyYXBwZXInKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ1dHRvbicpO1xuXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2UuY2xhc3NOYW1lID0gJ2NvbmZpcm1hdGlvbi1tZXNzYWdlJztcblxuICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW5FbGVtZW50LnRleHRDb250ZW50ID0gJ0FyZSB5b3Ugc3VyZT8nO1xuXG4gICAgY29uc3QgYnV0dG9uV3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbldyYXBwZXJEaXYuY2xhc3NOYW1lID0gJ2J1dHRvbi13cmFwcGVyJztcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLmNsYXNzTmFtZSA9ICdjb25maXJtLWJ1dHRvbic7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcblxuICAgIGNvbnN0IGNhbmNlbENvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxDb25maXJtQnV0dG9uLmNsYXNzTmFtZSA9ICdjYW5jZWwtY29uZmlybS1idXR0b24nO1xuICAgIGNhbmNlbENvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2UuYXBwZW5kQ2hpbGQoc3BhbkVsZW1lbnQpO1xuXG4gICAgYnV0dG9uV3JhcHBlckRpdi5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcbiAgICBidXR0b25XcmFwcGVyRGl2LmFwcGVuZENoaWxkKGNhbmNlbENvbmZpcm1CdXR0b24pO1xuXG4gICAgY29uZmlybWF0aW9uTWVzc2FnZS5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyRGl2KTtcbiAgICB3aGlsZSAoYnV0dG9uV3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICBidXR0b25XcmFwcGVyLnJlbW92ZUNoaWxkKGJ1dHRvbldyYXBwZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY29uZmlybWF0aW9uTWVzc2FnZSk7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQocG9wdXApO1xuICAgIH0pO1xuICAgIGNhbmNlbENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB3aGlsZSAoYnV0dG9uV3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgIGJ1dHRvbldyYXBwZXIucmVtb3ZlQ2hpbGQoYnV0dG9uV3JhcHBlci5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2tncm91bmQtY29sb3VyJykudmFsdWU7XG4gICAgY29uc3QgdGV4dENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtY29sb3VyJykudmFsdWU7XG4gICAgY29uc3QgYWNjZW50Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjZW50LWNvbG91cicpLnZhbHVlO1xuXG4gICAgLy8gU2F2ZSB0aGUgY29sb3VycyB0byBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmFja2dyb3VuZC1jb2xvdXInLCBiYWNrZ3JvdW5kQ29sb3IpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXh0LWNvbG91cicsIHRleHRDb2xvcik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2VudC1jb2xvdXInLCBhY2NlbnRDb2xvcik7XG5cbiAgICAvLyBBcHBseSB0aGUgY29sb3Vyc1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgIGJvZHkuc3R5bGUuY29sb3IgPSB0ZXh0Q29sb3I7XG4gICAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XG4gICAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHBhcnQgb2YgdGhlIGNhbGVuZGFyXG4gICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWluZXInKSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYWNjZW50Q29sb3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSB0aGUgcG9wdXBcbiAgICBib2R5LnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVNhdmVkVGhlbWUoKSB7XG4gIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgaWYgKHNhdmVkVGhlbWUgPT09ICdkYXJrJykge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gIH0gZWxzZSBpZiAoc2F2ZWRUaGVtZSA9PT0gJ2xpZ2h0Jykge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFByb2plY3QsIGFsbFByb2plY3RzLCBzYXZlUHJvamVjdHNMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBtYWluSHViID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtaHViJyk7XG5cbi8vIEZvciB0aGUgbmF2QmFyXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QpIHtcbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdENsYXNzID0gYCR7cHJvamVjdC50aXRsZX1gLnJlcGxhY2UoL1xccysvZywgJycpO1xuICBwcm9qZWN0RGl2LmNsYXNzTmFtZSA9IGAke3Byb2plY3RDbGFzc30tZGl2YDtcblxuICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0SW5mby5jbGFzc05hbWUgPSAncHJvamVjdC1pbmZvJztcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuXG4gIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3REYXRlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5kdWVEYXRlfWA7XG5cbiAgY29uc3QgcHJvamVjdFByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RQcm9ncmVzcy5jbGFzc05hbWUgPSAncHJvamVjdC1wcm9ncmVzcyc7XG4gIHByb2plY3RQcm9ncmVzcy50ZXh0Q29udGVudCA9IGAke3Byb2plY3QuY2FsY3VsYXRlUHJvZ3Jlc3MoKSB8fCAwfSVgO1xuXG4gIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKHByb2plY3REYXRlKTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFByb2dyZXNzKTtcblxuICBwcm9qZWN0RGl2LnN0eWxlLmJvcmRlckNvbG9yID0gcHJvamVjdC5wcmlvcml0eTtcbiAgcmV0dXJuIHByb2plY3REaXY7XG59XG5cbmZ1bmN0aW9uIHNldHVwUHJvamVjdERpdkNsaWNrSGFuZGxlcnMoKSB7XG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyJyk7XG4gIGNvbnN0IHByb2plY3REaXZzID0gQXJyYXkuZnJvbShuYXZCYXIuY2hpbGRyZW4pLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC50YWdOYW1lID09PSAnRElWJyk7XG5cbiAgLy8gR2V0IG9ubHkgdGhlIHVuc2VsZWN0ZWQgcHJvamVjdHNcbiAgY29uc3QgdW5zZWxlY3RlZFByb2plY3RzID0gYWxsUHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiAhcHJvamVjdC5zZWxlY3RlZCk7XG5cbiAgcHJvamVjdERpdnMuZm9yRWFjaCgoZGl2LCBpbmRleCkgPT4ge1xuICAgIGxldCBpID0gaW5kZXg7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGkgPj0gMCAmJiBpIDwgdW5zZWxlY3RlZFByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHByb2plY3QgPT09IHVuc2VsZWN0ZWRQcm9qZWN0c1tpXSkge1xuICAgICAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNhdmVQcm9qZWN0c0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB1cGRhdGVOYXZCYXIoKTtcbiAgICAgICAgdXBkYXRlQ3VycmVudFByb2plY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAoIXByb2plY3Quc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QpO1xuICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbiAgfSk7XG5cbiAgbWFpbkh1Yi5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICBzZXR1cFByb2plY3REaXZDbGlja0hhbmRsZXJzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOYXZCYXIoKSB7XG4gIGNvbnN0IGNvbnRlbnRIdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC1odWInKTtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1iYXInKTtcbiAgY29udGVudEh1Yi5yZW1vdmVDaGlsZChuYXZCYXIpO1xuXG4gIGNyZWF0ZU5hdkJhcigpO1xuICBzZXR1cFByb2plY3REaXZDbGlja0hhbmRsZXJzKCk7XG59XG5cbi8vIEZvciB0aGUgY3VycmVudCBwcm9qZWN0XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJyZW50UHJvamVjdC5jbGFzc05hbWUgPSAnY3VycmVudC1wcm9qZWN0JztcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0N1cnJlbnQgUHJvamVjdCc7XG4gIGN1cnJlbnRQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBoZWFkZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckluZm8uY2xhc3NOYW1lID0gJ3Byb2plY3QtaGVhZGVyJztcblxuICBoZWFkZXJJbmZvLnRleHRDb250ZW50ID1cbiAgICBgJHtwcm9qZWN0LnRpdGxlfSwgJHtwcm9qZWN0LmR1ZURhdGV9LCAke3Byb2plY3QuY2FsY3VsYXRlUHJvZ3Jlc3MoKX0lYCB8fCAnMCUnO1xuICBoZWFkZXJJbmZvLnN0eWxlLmJvcmRlckNvbG9yID0gcHJvamVjdC5wcmlvcml0eTtcbiAgbWFpbkh1Yi5hcHBlbmRDaGlsZChoZWFkZXJJbmZvKTtcblxuICBjb25zdCB0b2RvSXRlbXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0l0ZW1zRGl2LmNsYXNzTmFtZSA9ICdwcm9qZWN0LXRhc2snO1xuICBwcm9qZWN0LnRvZG9JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYudGV4dENvbnRlbnQgPSBgJHtpdGVtLnRpdGxlfSwgJHtpdGVtLmR1ZURhdGV9LCAke2l0ZW0ucHJpb3JpdHl9YDtcbiAgICB0b2RvSXRlbXNEaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gIH0pO1xuICBjdXJyZW50UHJvamVjdC5hcHBlbmRDaGlsZChoZWFkZXJJbmZvKTtcbiAgY3VycmVudFByb2plY3QuYXBwZW5kQ2hpbGQodG9kb0l0ZW1zRGl2KTtcbiAgbWFpbkh1Yi5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDdXJyZW50UHJvamVjdCgpIHtcbiAgY29uc3QgY29udGVudEh1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWh1YicpO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QnKTtcbiAgY29udGVudEh1Yi5yZW1vdmVDaGlsZChjdXJyZW50UHJvamVjdCk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5zZWxlY3RlZCk7XG4gIHNob3dDdXJyZW50UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xufVxuIiwiZnVuY3Rpb24gcG9wdXBNZW51KG1lbnVUaXRsZSwgZmllbGRzKSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cCc7XG5cbiAgY29uc3QgcG9wdXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwQ29udGVudC5jbGFzc05hbWUgPSAncG9wdXAtY29udGVudCc7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7bWVudVRpdGxlfWA7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZEJ1dHRvbi5jbGFzc05hbWUgPSAnc3VibWl0LWJ1dHRvbic7XG4gIGFkZEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdXR0b24uY2xhc3NOYW1lID0gJ2NhbmNlbC1idXR0b24nO1xuICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGlucHV0TGFiZWxQYWlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRMYWJlbFBhaXIuY2xhc3NOYW1lID0gJ2lucHV0LWxhYmVsLXBhaXInO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gZmllbGQubGFiZWw7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtmaWVsZC5uYW1lfWApO1xuXG4gICAgbGV0IGlucHV0O1xuXG4gICAgc3dpdGNoIChmaWVsZC5uYW1lKSB7XG4gICAgICBjYXNlICdkZXNjcmlwdGlvbic6XG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgaW5wdXQucm93cyA9ICcyJztcbiAgICAgICAgaW5wdXQuY29scyA9ICczNSc7XG4gICAgICAgIGlucHV0LmlkID0gZmllbGQubmFtZTtcbiAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25vdGVzJzpcbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBpbnB1dC5yb3dzID0gJzMnO1xuICAgICAgICBpbnB1dC5jb2xzID0gJzM1JztcbiAgICAgICAgaW5wdXQuaWQgPSBmaWVsZC5uYW1lO1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IGAke2ZpZWxkLnR5cGV9YDtcbiAgICAgICAgaW5wdXQuaWQgPSBmaWVsZC5uYW1lO1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaW5wdXRMYWJlbFBhaXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGlucHV0TGFiZWxQYWlyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbFBhaXIpO1xuICB9KTtcblxuICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbldyYXBwZXIuY2xhc3NOYW1lID0gJ2J1dHRvbi13cmFwcGVyJztcbiAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG5cbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBDb250ZW50KTtcblxuICByZXR1cm4gcG9wdXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVwTWVudTtcbiIsIi8vIEVTNiBtb2R1bGUgc3ludGF4XG5pbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gJy4vdG9kb0l0ZW0nO1xuXG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0gW107XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzdGFydERhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzIHx8ICcnO1xuICAgIHRoaXMudG9kb0l0ZW1zID0gW107XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gTWV0aG9kIHRvIGFkZCBhIHRvZG8gaXRlbSB0byB0aGUgcHJvamVjdFxuICBhZGRUb2RvSXRlbSh0b2RvSXRlbSkge1xuICAgIGlmICh0b2RvSXRlbSBpbnN0YW5jZW9mIFRvZG9JdGVtKSB7XG4gICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IGluc3RhbmNlcyBvZiBUb2RvSXRlbSBjYW4gYmUgYWRkZWQgdG8gYSBwcm9qZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWV0aG9kIHRvIGNhbGN1bGF0ZSB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIHByb2plY3RcbiAgY2FsY3VsYXRlUHJvZ3Jlc3MoKSB7XG4gICAgaWYgKHRoaXMudG9kb0l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwJztcbiAgICB9XG4gICAgY29uc3QgY29tcGxldGVkSXRlbXMgPSB0aGlzLnRvZG9JdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvZ3Jlc3MgPT09IDEwMCkubGVuZ3RoO1xuICAgIHJldHVybiAoY29tcGxldGVkSXRlbXMgLyB0aGlzLnRvZG9JdGVtcy5sZW5ndGgpICogMTAwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdHNMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCBzYXZlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJyk7XG5cbiAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWRQcm9qZWN0cyk7XG5cbiAgICAgIC8vIEFkZGl0aW9uYWwgdmFsaWRhdGlvbiB0byBlbnN1cmUgcGFyc2VkRGF0YSBpcyBhbiBhcnJheVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHBhcnNlZERhdGEpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTG9hZGVkIGRhdGEgaXMgbm90IGFuIGFycmF5Jyk7XG4gICAgICB9XG5cbiAgICAgIGFsbFByb2plY3RzID0gcGFyc2VkRGF0YS5tYXAoKHByb2plY3REYXRhKSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3REYXRhKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGBUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB5b3VyIHNhdmVkIHByb2plY3RzLiBEZXRhaWxzOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB1cGRhdGVDdXJyZW50UHJvamVjdCwgdXBkYXRlTmF2QmFyIH0gZnJvbSAnLi9tYWluSHViJztcbmltcG9ydCB7IGFsbFByb2plY3RzLCBzYXZlUHJvamVjdHNMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5mdW5jdGlvbiByZW1vdmVDdXJyZW50SXRlbSgpIHtcbiAgY29uc3QgY29uZmlybWF0aW9uID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgY3VycmVudCBwcm9qZWN0PycpO1xuICBpZiAoY29uZmlybWF0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3Quc2VsZWN0ZWQpO1xuICAgIGlmIChzZWxlY3RlZFByb2plY3RJbmRleCAhPT0gLTEpIHtcbiAgICAgIGFsbFByb2plY3RzLnNwbGljZShzZWxlY3RlZFByb2plY3RJbmRleCwgMSk7XG4gICAgICBhbGxQcm9qZWN0cy5zcGxpY2Uoc2VsZWN0ZWRQcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgY29uc3QgcHJvamVjdFdpdGhHcmVhdGVzdFByaW9yaXR5ID0gYWxsUHJvamVjdHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PlxuICAgICAgICBwcmV2LnByaW9yaXR5ID4gY3Vyci5wcmlvcml0eSA/IHByZXYgOiBjdXJyLFxuICAgICAgKTtcbiAgICAgIHByb2plY3RXaXRoR3JlYXRlc3RQcmlvcml0eS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICBzYXZlUHJvamVjdHNMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgdXBkYXRlTmF2QmFyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUN1cnJlbnRJdGVtO1xuIiwiZXhwb3J0IGNsYXNzIFRvZG9JdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzdGFydERhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGUsIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5zdGFydERhdGUgPSBzdGFydERhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcyB8fCAnJztcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGUgfHwgZmFsc2U7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0oXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgc3RhcnREYXRlLFxuICBwcmlvcml0eSxcbiAgbm90ZXMsXG4gIHByb2dyZXNzLFxuICBwcm9qZWN0LFxuKSB7XG4gIHJldHVybiBuZXcgVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzdGFydERhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvZ3Jlc3MsIHByb2plY3QpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVNYWluSHViLCBjcmVhdGVOYXZCYXIsIHNob3dDdXJyZW50UHJvamVjdCB9IGZyb20gJy4vbWFpbkh1Yic7XG5pbXBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cywgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gJy4vdG9kb0l0ZW0nO1xuaW1wb3J0IG1lbnVGdW5jdGlvbnMgZnJvbSAnLi9idXR0b25GdW5jJztcbmltcG9ydCB7IGFwcGx5U2F2ZWRUaGVtZSB9IGZyb20gJy4vZWRpdFRoZW1lJztcblxuLy8gQ3JlYXRlIGR1bW15IHByb2plY3RzXG5mb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoYER1bW15IFByb2plY3QgJHtpfWAsICdQbGFjZWhvbGRlciBkZXNjcmlwdGlvbicsICcgMzAgLSA5IC0gMjAyMycpO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGogKz0gMSkge1xuICAgIGNvbnN0IHRvZG9JdGVtID0gbmV3IFRvZG9JdGVtKFxuICAgICAgYFRvZG8gSXRlbSAke2p9YCxcbiAgICAgICdQbGFjZWhvbGRlciBkZXNjcmlwdGlvbicsXG4gICAgICBgJHtqICogNCArIDF9IC0gMTAgLSAyMDIzYCxcbiAgICAgIGAke2p9KjQgLSAxMCAtIDIwMjNgLFxuICAgICAgJzcwJScsXG4gICAgICAnc29tZSBub3RlcyBhbmQgc2hpdCcsXG4gICAgICAnJyxcbiAgICApO1xuICAgIG5ld1Byb2plY3QuYWRkVG9kb0l0ZW0odG9kb0l0ZW0pO1xuICB9XG4gIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgaWYgKGkgPT09IDYpIHtcbiAgICBuZXdQcm9qZWN0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIGFwcGx5U2F2ZWRUaGVtZSgpO1xuICBjcmVhdGVOYXZCYXIoKTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNlbGVjdGVkKTtcblxuICBzaG93Q3VycmVudFByb2plY3QoY3VycmVudFByb2plY3QpO1xuICBtZW51RnVuY3Rpb25zKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==