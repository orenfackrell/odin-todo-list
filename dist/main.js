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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuFunctions);


/***/ }),

/***/ "./src/mainHub.js":
/*!************************!*\
  !*** ./src/mainHub.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const mainHub = document.getElementById('content-hub');

function createProjectDiv(project) {
  const projectDiv = document.createElement('div');
  projectDiv.textContent = `${project.title}, ${project.dueDate}, ${project.calculateProgress()}`;
  projectDiv.style.borderColor = project.priority;
  return projectDiv;
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
}

function showCurrentProject(project) {
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

function createMainHub() {
  mainHub.style.display = 'flex';

  const navBar = createNavBar();
  navBar.style.flex = '1';
  mainHub.appendChild(navBar);

  const projectDiv = document.createElement('div');
  projectDiv.style.flex = '4';
  mainHub.appendChild(projectDiv);

  const selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.find((project) => project.selected);
  if (selectedProject) {
    showCurrentProject(selectedProject);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainHub);


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
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
// ES6 module syntax


const allProjects = [];

class Project {
  constructor(title, dueDate, startDate, priority, notes) {
    this.title = title;
    this.dueDate = dueDate;
    this.startDate = startDate;
    this.priority = priority;
    this.notes = notes;
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
    const completedItems = this.todoItems.filter((item) => item.progress === 100).length;
    return (completedItems / this.todoItems.length) * 100;
  }
}

function createProject(title, dueDate, startDate, priority, notes) {
  const newItem = new Project(title, dueDate, startDate, priority, notes);
  allProjects.push(newItem);
}


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
// ES6 module syntax
class TodoItem {
  constructor(title, description, dueDate, startDate, priority, notes, progress, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.startDate = startDate;
    this.priority = priority;
    this.notes = notes;
    this.progress = progress;
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





// Create dummy projects
const project1 = new _project__WEBPACK_IMPORTED_MODULE_1__.Project('Project 1');
const project2 = new _project__WEBPACK_IMPORTED_MODULE_1__.Project('Project 2');
const todoItem1 = new _todoItem__WEBPACK_IMPORTED_MODULE_2__.TodoItem('Todo Item 1');
const todoItem2 = new _todoItem__WEBPACK_IMPORTED_MODULE_2__.TodoItem('Todo Item 2');
project1.addTodoItem(todoItem1);
project2.addTodoItem(todoItem2);
_project__WEBPACK_IMPORTED_MODULE_1__.allProjects.push(project1, project2);

document.addEventListener('DOMContentLoaded', () => {
  // createMainHub();
  (0,_buttonFunc__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ29COztBQUVqRDs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWMsSUFBSSxnQkFBZ0IsSUFBSSw0QkFBNEI7QUFDaEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpREFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYyxJQUFJLGdCQUFnQixJQUFJLDRCQUE0QjtBQUNoRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixXQUFXLElBQUksYUFBYSxJQUFJLGNBQWM7QUFDM0U7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLGlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0Q3QjtBQUNzQzs7QUFFL0I7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QiwrQ0FBUTtBQUNwQztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ1c7QUFDWDtBQUNHOztBQUV6QztBQUNBLHFCQUFxQiw2Q0FBTztBQUM1QixxQkFBcUIsNkNBQU87QUFDNUIsc0JBQXNCLCtDQUFRO0FBQzlCLHNCQUFzQiwrQ0FBUTtBQUM5QjtBQUNBO0FBQ0EsaURBQVc7O0FBRVg7QUFDQTtBQUNBLEVBQUUsdURBQWE7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYnV0dG9uRnVuYy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tYWluSHViLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlJyk7XG5jb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhcicpO1xuY29uc3QgbGlnaHREYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0LWRhcmsnKTtcbmNvbnN0IGNoYW5nZVBhbGV0dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXBhbGV0dGUnKTtcbmNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0nKTtcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcblxuLy8gY29uc3QgbWVudUJ1dHRvbnMgPSBbcmVtb3ZlLCBjYWxlbmRhciwgbGlnaHREYXJrLCBjaGFuZ2VQYWxldHRlLCBhZGRJdGVtLCBhZGRQcm9qZWN0XTtcblxuZnVuY3Rpb24gaXRzQWxsSG9va2VkVXAoKSB7XG4gIGNvbnNvbGUubG9nKCdpdHMgYWxsIGhvb2tlZCB1cCcpO1xufVxuXG5mdW5jdGlvbiBtZW51RnVuY3Rpb25zKCkge1xuICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaXRzQWxsSG9va2VkVXAoKTtcbiAgfSk7XG4gIGNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGl0c0FsbEhvb2tlZFVwKCk7XG4gIH0pO1xuICBsaWdodERhcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaXRzQWxsSG9va2VkVXAoKTtcbiAgfSk7XG4gIGNoYW5nZVBhbGV0dGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaXRzQWxsSG9va2VkVXAoKTtcbiAgfSk7XG4gIGFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaXRzQWxsSG9va2VkVXAoKTtcbiAgfSk7XG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaXRzQWxsSG9va2VkVXAoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVGdW5jdGlvbnM7XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IG1haW5IdWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1odWInKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpdihwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9LCAke3Byb2plY3QuZHVlRGF0ZX0sICR7cHJvamVjdC5jYWxjdWxhdGVQcm9ncmVzcygpfWA7XG4gIHByb2plY3REaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcm9qZWN0LnByaW9yaXR5O1xuICByZXR1cm4gcHJvamVjdERpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0LnNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlUHJvamVjdERpdihwcm9qZWN0KTtcbiAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBoZWFkZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckluZm8udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfSwgJHtwcm9qZWN0LmR1ZURhdGV9LCAke3Byb2plY3QuY2FsY3VsYXRlUHJvZ3Jlc3MoKX1gO1xuICBoZWFkZXJJbmZvLnN0eWxlLmJvcmRlckNvbG9yID0gcHJvamVjdC5wcmlvcml0eTtcbiAgbWFpbkh1Yi5hcHBlbmRDaGlsZChoZWFkZXJJbmZvKTtcblxuICBjb25zdCB0b2RvSXRlbXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdC50b2RvSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGl2LnRleHRDb250ZW50ID0gYCR7aXRlbS50aXRsZX0sICR7aXRlbS5kdWVEYXRlfSwgJHtpdGVtLnByb2dyZXNzfWA7XG4gICAgdG9kb0l0ZW1zRGl2LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICB9KTtcbiAgbWFpbkh1Yi5hcHBlbmRDaGlsZCh0b2RvSXRlbXNEaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluSHViKCkge1xuICBtYWluSHViLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlTmF2QmFyKCk7XG4gIG5hdkJhci5zdHlsZS5mbGV4ID0gJzEnO1xuICBtYWluSHViLmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RGl2LnN0eWxlLmZsZXggPSAnNCc7XG4gIG1haW5IdWIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5zZWxlY3RlZCk7XG4gIGlmIChzZWxlY3RlZFByb2plY3QpIHtcbiAgICBzaG93Q3VycmVudFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluSHViO1xuIiwiLy8gRVM2IG1vZHVsZSBzeW50YXhcbmltcG9ydCB7IFRvZG9JdGVtIH0gZnJvbSAnLi90b2RvSXRlbSc7XG5cbmV4cG9ydCBjb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBzdGFydERhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy50b2RvSXRlbXMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICAvLyBNZXRob2QgdG8gYWRkIGEgdG9kbyBpdGVtIHRvIHRoZSBwcm9qZWN0XG4gIGFkZFRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgaWYgKHRvZG9JdGVtIGluc3RhbmNlb2YgVG9kb0l0ZW0pIHtcbiAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgaW5zdGFuY2VzIG9mIFRvZG9JdGVtIGNhbiBiZSBhZGRlZCB0byBhIHByb2plY3QnKTtcbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gY2FsY3VsYXRlIHRoZSBwcm9ncmVzcyBvZiB0aGUgcHJvamVjdFxuICBjYWxjdWxhdGVQcm9ncmVzcygpIHtcbiAgICBjb25zdCBjb21wbGV0ZWRJdGVtcyA9IHRoaXMudG9kb0l0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9ncmVzcyA9PT0gMTAwKS5sZW5ndGg7XG4gICAgcmV0dXJuIChjb21wbGV0ZWRJdGVtcyAvIHRoaXMudG9kb0l0ZW1zLmxlbmd0aCkgKiAxMDA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGR1ZURhdGUsIHN0YXJ0RGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIGNvbnN0IG5ld0l0ZW0gPSBuZXcgUHJvamVjdCh0aXRsZSwgZHVlRGF0ZSwgc3RhcnREYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuICBhbGxQcm9qZWN0cy5wdXNoKG5ld0l0ZW0pO1xufVxuIiwiLy8gRVM2IG1vZHVsZSBzeW50YXhcbmV4cG9ydCBjbGFzcyBUb2RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhcnREYXRlLCBwcmlvcml0eSwgbm90ZXMsIHByb2dyZXNzLCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHN0YXJ0RGF0ZSxcbiAgcHJpb3JpdHksXG4gIG5vdGVzLFxuICBwcm9ncmVzcyxcbiAgcHJvamVjdCxcbikge1xuICByZXR1cm4gbmV3IFRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhcnREYXRlLCBwcmlvcml0eSwgbm90ZXMsIHByb2dyZXNzLCBwcm9qZWN0KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZU1haW5IdWIgZnJvbSAnLi9tYWluSHViJztcbmltcG9ydCB7IFByb2plY3QsIGFsbFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IFRvZG9JdGVtIH0gZnJvbSAnLi90b2RvSXRlbSc7XG5pbXBvcnQgbWVudUZ1bmN0aW9ucyBmcm9tICcuL2J1dHRvbkZ1bmMnO1xuXG4vLyBDcmVhdGUgZHVtbXkgcHJvamVjdHNcbmNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QoJ1Byb2plY3QgMScpO1xuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAyJyk7XG5jb25zdCB0b2RvSXRlbTEgPSBuZXcgVG9kb0l0ZW0oJ1RvZG8gSXRlbSAxJyk7XG5jb25zdCB0b2RvSXRlbTIgPSBuZXcgVG9kb0l0ZW0oJ1RvZG8gSXRlbSAyJyk7XG5wcm9qZWN0MS5hZGRUb2RvSXRlbSh0b2RvSXRlbTEpO1xucHJvamVjdDIuYWRkVG9kb0l0ZW0odG9kb0l0ZW0yKTtcbmFsbFByb2plY3RzLnB1c2gocHJvamVjdDEsIHByb2plY3QyKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gY3JlYXRlTWFpbkh1YigpO1xuICBtZW51RnVuY3Rpb25zKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==