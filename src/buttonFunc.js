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
    itsAllHookedUp();
  });
  calendar.addEventListener('click', () => {
    itsAllHookedUp();
  });
  lightDark.addEventListener('click', () => {
    itsAllHookedUp();
  });
  changePalette.addEventListener('click', () => {
    itsAllHookedUp();
  });
  addItem.addEventListener('click', () => {
    itsAllHookedUp();
  });
  addProject.addEventListener('click', () => {
    itsAllHookedUp();
  });
}

export default menuFunctions;
