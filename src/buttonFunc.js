const remove = document.querySelector('.remove');
const calendar = document.querySelector('.calendar');
const lightDark = document.querySelector('.light-dark');
const changePalette = document.querySelector('.change-palette');
const addItem = document.querySelector('.add-item');
const addProject = document.querySelector('.add-project');
const { body } = document;

// const menuButtons = [remove, calendar, lightDark, changePalette, addItem, addProject];

function menuPopUp(fields) {
  const popup = document.createElement('div');
  popup.className = 'popup';

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const addButton = document.createElement('button');
  addButton.className = 'submit-button';
  addButton.type = 'submit';
  addButton.textContent = 'Add';

  const form = document.createElement('form');

  fields.forEach((field) => {
    const inputLabelPair = document.createElement('div');
    inputLabelPair.className = 'input-label-pair';

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', `${field.name}`);

    let input;
    switch (field.name) {
      case 'notes':
        input = document.createElement('textarea');
        input.rows = '3';
        input.cols = '35';
        input.id = field.name;
        input.required = false;
        break;
      case 'description':
        input = document.createElement('textarea');
        input.rows = '2';
        input.cols = '35';
        input.id = field.name;
        input.required = true;
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

  form.appendChild(addButton);

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
  const fields = [
    { label: 'Name:', name: 'name', type: 'text' },
    { label: 'Description:', name: 'description', type: 'text' },
    { label: 'Start Date:', name: 'start-date', type: 'date' },
    { label: 'Due Date:', name: 'due-date', type: 'date' },
    { label: 'Priority:', name: 'priority', type: 'range' },
    { label: 'Notes:', name: 'notes', type: 'text' },
  ];

  const popup = menuPopUp(fields);
  body.appendChild(popup);
  popup.style.display = 'block';

  const addButton = document.querySelector('.submit-button');
  addButton.addEventListener('submit', (event) => {
    event.preventDefault();
    body.removeChild(popup);
  });
}

function createProject() {
  // create menu pop-up for the user to input the needed details for a new project
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
