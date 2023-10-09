const remove = document.querySelector('.remove');
const calendar = document.querySelector('.calendar');
const lightDark = document.querySelector('.light-dark');
const changePalette = document.querySelector('.change-palette');
const addItem = document.querySelector('.add-item');
const addProject = document.querySelector('.add-project');

// const menuButtons = [remove, calendar, lightDark, changePalette, addItem, addProject];

function itsAllHookedUp() {
  console.log('its all hooked up');
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

function menuPopUp() {
  // create a template popup which takes x amount of args
  // use this in the other button functions
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
  // create menu pop-up for the user to input the needed details for a new item
  // have the default project being the one the user is currently in
}

function createProject() {
  // create menu pop-up for the user to input the needed details for a new project
}

export default menuFunctions;
