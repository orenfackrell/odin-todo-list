// Import from other modules
import openCalendar from './calendar';
import createItem from './createItem';
import createProject from './createProject';
import { changeColours, toggleTheme } from './editTheme';
import { updateCurrentProject, updateNavBar, showCurrentProject } from './mainHub';
import { Project, allProjects, saveProjectsLocalStorage } from './project';
import removeCurrentItem from './removeItem';
import { TodoItem } from './todoItem';

// Create global variables
const remove = document.querySelector('.remove');
const calendar = document.querySelector('.calendar');
const lightDark = document.querySelector('.light-dark');
const changePalette = document.querySelector('.change-palette');
const addItem = document.querySelector('.add-item');
const addProject = document.querySelector('.add-project');

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
