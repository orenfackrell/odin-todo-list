/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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




// Create dummy projects
const project1 = new _project__WEBPACK_IMPORTED_MODULE_1__.Project('Project 1');
const project2 = new _project__WEBPACK_IMPORTED_MODULE_1__.Project('Project 2');
const todoItem1 = new _todoItem__WEBPACK_IMPORTED_MODULE_2__.TodoItem('Todo Item 1');
const todoItem2 = new _todoItem__WEBPACK_IMPORTED_MODULE_2__.TodoItem('Todo Item 2');
project1.addTodoItem(todoItem1);
project2.addTodoItem(todoItem2);
_project__WEBPACK_IMPORTED_MODULE_1__.allProjects.push(project1, project2);

document.addEventListener('DOMContentLoaded', () => {
  (0,_mainHub__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYyxJQUFJLGdCQUFnQixJQUFJLDRCQUE0QjtBQUNoRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixjQUFjLElBQUksZ0JBQWdCLElBQUksNEJBQTRCO0FBQ2hHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFdBQVcsSUFBSSxhQUFhLElBQUksY0FBYztBQUMzRTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsaURBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRDdCO0FBQ3NDOztBQUUvQjs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLCtDQUFRO0FBQ3BDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNXO0FBQ1g7O0FBRXRDO0FBQ0EscUJBQXFCLDZDQUFPO0FBQzVCLHFCQUFxQiw2Q0FBTztBQUM1QixzQkFBc0IsK0NBQVE7QUFDOUIsc0JBQXNCLCtDQUFRO0FBQzlCO0FBQ0E7QUFDQSxpREFBVzs7QUFFWDtBQUNBLEVBQUUsb0RBQWE7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbWFpbkh1Yi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCwgYWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBtYWluSHViID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtaHViJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaXYocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfSwgJHtwcm9qZWN0LmR1ZURhdGV9LCAke3Byb2plY3QuY2FsY3VsYXRlUHJvZ3Jlc3MoKX1gO1xuICBwcm9qZWN0RGl2LnN0eWxlLmJvcmRlckNvbG9yID0gcHJvamVjdC5wcmlvcml0eTtcbiAgcmV0dXJuIHByb2plY3REaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gIG5hdkJhci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmICghcHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgcHJvamVjdERpdiA9IGNyZWF0ZVByb2plY3REaXYocHJvamVjdCk7XG4gICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0N1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgaGVhZGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJJbmZvLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX0sICR7cHJvamVjdC5kdWVEYXRlfSwgJHtwcm9qZWN0LmNhbGN1bGF0ZVByb2dyZXNzKCl9YDtcbiAgaGVhZGVySW5mby5zdHlsZS5ib3JkZXJDb2xvciA9IHByb2plY3QucHJpb3JpdHk7XG4gIG1haW5IdWIuYXBwZW5kQ2hpbGQoaGVhZGVySW5mbyk7XG5cbiAgY29uc3QgdG9kb0l0ZW1zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3QudG9kb0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURpdi50ZXh0Q29udGVudCA9IGAke2l0ZW0udGl0bGV9LCAke2l0ZW0uZHVlRGF0ZX0sICR7aXRlbS5wcm9ncmVzc31gO1xuICAgIHRvZG9JdGVtc0Rpdi5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgfSk7XG4gIG1haW5IdWIuYXBwZW5kQ2hpbGQodG9kb0l0ZW1zRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkh1YigpIHtcbiAgbWFpbkh1Yi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gIGNvbnN0IG5hdkJhciA9IGNyZWF0ZU5hdkJhcigpO1xuICBuYXZCYXIuc3R5bGUuZmxleCA9ICcxJztcbiAgbWFpbkh1Yi5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdERpdi5zdHlsZS5mbGV4ID0gJzQnO1xuICBtYWluSHViLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3Quc2VsZWN0ZWQpO1xuICBpZiAoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgc2hvd0N1cnJlbnRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFpbkh1YjtcbiIsIi8vIEVTNiBtb2R1bGUgc3ludGF4XG5pbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gJy4vdG9kb0l0ZW0nO1xuXG5leHBvcnQgY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgc3RhcnREYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMudG9kb0l0ZW1zID0gW107XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gTWV0aG9kIHRvIGFkZCBhIHRvZG8gaXRlbSB0byB0aGUgcHJvamVjdFxuICBhZGRUb2RvSXRlbSh0b2RvSXRlbSkge1xuICAgIGlmICh0b2RvSXRlbSBpbnN0YW5jZW9mIFRvZG9JdGVtKSB7XG4gICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IGluc3RhbmNlcyBvZiBUb2RvSXRlbSBjYW4gYmUgYWRkZWQgdG8gYSBwcm9qZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWV0aG9kIHRvIGNhbGN1bGF0ZSB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIHByb2plY3RcbiAgY2FsY3VsYXRlUHJvZ3Jlc3MoKSB7XG4gICAgY29uc3QgY29tcGxldGVkSXRlbXMgPSB0aGlzLnRvZG9JdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvZ3Jlc3MgPT09IDEwMCkubGVuZ3RoO1xuICAgIHJldHVybiAoY29tcGxldGVkSXRlbXMgLyB0aGlzLnRvZG9JdGVtcy5sZW5ndGgpICogMTAwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkdWVEYXRlLCBzdGFydERhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICBjb25zdCBuZXdJdGVtID0gbmV3IFByb2plY3QodGl0bGUsIGR1ZURhdGUsIHN0YXJ0RGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgYWxsUHJvamVjdHMucHVzaChuZXdJdGVtKTtcbn1cbiIsIi8vIEVTNiBtb2R1bGUgc3ludGF4XG5leHBvcnQgY2xhc3MgVG9kb0l0ZW0ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHN0YXJ0RGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9ncmVzcywgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbShcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBzdGFydERhdGUsXG4gIHByaW9yaXR5LFxuICBub3RlcyxcbiAgcHJvZ3Jlc3MsXG4gIHByb2plY3QsXG4pIHtcbiAgcmV0dXJuIG5ldyBUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHN0YXJ0RGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9ncmVzcywgcHJvamVjdCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVNYWluSHViIGZyb20gJy4vbWFpbkh1Yic7XG5pbXBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gJy4vdG9kb0l0ZW0nO1xuXG4vLyBDcmVhdGUgZHVtbXkgcHJvamVjdHNcbmNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QoJ1Byb2plY3QgMScpO1xuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAyJyk7XG5jb25zdCB0b2RvSXRlbTEgPSBuZXcgVG9kb0l0ZW0oJ1RvZG8gSXRlbSAxJyk7XG5jb25zdCB0b2RvSXRlbTIgPSBuZXcgVG9kb0l0ZW0oJ1RvZG8gSXRlbSAyJyk7XG5wcm9qZWN0MS5hZGRUb2RvSXRlbSh0b2RvSXRlbTEpO1xucHJvamVjdDIuYWRkVG9kb0l0ZW0odG9kb0l0ZW0yKTtcbmFsbFByb2plY3RzLnB1c2gocHJvamVjdDEsIHByb2plY3QyKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY3JlYXRlTWFpbkh1YigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=