import { forwardRef } from "react";

import "./SelectedProject.css";

const SelectedProject = forwardRef(
  ({ project, onDeleteProject, onAddNewTask, onDeleteTask }, ref) => {
    return (
      <>
        <div className="selected-project">
          <h1>{project.title}</h1>
          <button onClick={onDeleteProject}>
            <strong>Törlés</strong>
          </button>
          <p className="selected-project__due-date">{project.dueDate}</p>
          <strong className="selected-project__description">
            {project.description}
          </strong>
        </div>
        <div className="tasks-panel">
          <div className="header">
            <input ref={ref} type="text" maxLength={20} />
            <button onClick={onAddNewTask}>Feladat hozzáadása</button>
          </div>
          <div className="tasks">
            {project.tasks.length > 0 ? (
              project.tasks.map((task) => (
                <button
                  id={task.id}
                  key={task.id}
                  onClick={() => onDeleteTask(task.id)}
                >
                  <strong>{task.text}</strong>
                </button>
              ))
            ) : (
              <strong>Nincsnek még feladatok</strong>
            )}
          </div>
        </div>
      </>
    );
  }
);

SelectedProject.displayName = "SelectedProject";
export default SelectedProject;
