// ES6 module syntax
export default class TodoItem {
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

  // Getters and Setters for each property
  get title() {
    return this.title;
  }

  set title(value) {
    this.title = value;
  }

  get description() {
    return this.description;
  }

  set description(value) {
    this.description = value;
  }

  get dueDate() {
    return this.dueDate;
  }

  set dueDate(value) {
    this.dueDate = value;
  }

  get startDate() {
    return this.startDate;
  }

  set startDate(value) {
    this.startDate = value;
  }

  get priority() {
    return this.priority;
  }

  set priority(value) {
    this.priority = value;
  }

  get notes() {
    return this.notes;
  }

  set notes(value) {
    this.notes = value;
  }

  get progress() {
    return this.progress;
  }

  set progress(value) {
    this.progress = value;
  }

  get project() {
    return this.project;
  }

  set project(value) {
    this.project = value;
  }
}
