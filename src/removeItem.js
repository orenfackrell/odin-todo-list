import { updateCurrentProject, updateNavBar } from './mainHub';
import { allProjects, saveProjectsLocalStorage } from './project';

function removeCurrentItem() {
  const confirmation = confirm('Are you sure you want to delete the current project?');
  if (confirmation) {
    const selectedProjectIndex = allProjects.findIndex((project) => project.selected);
    if (selectedProjectIndex !== -1) {
      allProjects.splice(selectedProjectIndex, 1);
      allProjects.splice(selectedProjectIndex, 1);
      const projectWithGreatestPriority = allProjects.reduce((prev, curr) =>
        prev.priority > curr.priority ? prev : curr,
      );
      projectWithGreatestPriority.selected = true;

      updateCurrentProject();
      saveProjectsLocalStorage();

      updateNavBar();
    }
  }
}

export default removeCurrentItem;
