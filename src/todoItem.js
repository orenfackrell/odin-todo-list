export class TodoItem {
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

export function createTodoItem(
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
